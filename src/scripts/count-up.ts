import { prefersReducedMotion } from './motion';

// Conteggio animato delle metriche, condiviso da home e pagine caso.
//
// Due cose dipendono dalla lingua della pagina e non possono essere fissate:
// il separatore decimale (virgola in IT, punto in EN) e quello delle migliaia,
// che sono invertiti fra le due. Il separatore delle migliaia va tolto prima
// del parsing: senza, "200.013 €" verrebbe letto come 200 con ".013 €" appeso
// come suffisso, e il conteggio salirebbe fino a 200 invece che a 200.013.
export function animateValue(el: HTMLElement): void {
  const raw = el.dataset.value || '';
  const isEn = document.documentElement.lang === 'en';
  const decimalSep = isEn ? '.' : ',';
  const groupSep = isEn ? ',' : '.';

  // Prefisso opzionale (+, − o ~), numero con eventuali separatori delle
  // migliaia e decimali, e tutto il resto come suffisso (×, %, €, …).
  const pattern = isEn
    ? /^([+−~]?)((?:\d{1,3}(?:,\d{3})+|\d+)(?:\.\d+)?)(.*)$/
    : /^([+−~]?)((?:\d{1,3}(?:\.\d{3})+|\d+)(?:,\d+)?)(.*)$/;

  const match = raw.match(pattern);
  if (!match) {
    el.textContent = raw;
    return;
  }

  const [, prefix, numStr, suffix] = match;
  const decimals = numStr.includes(decimalSep) ? numStr.split(decimalSep)[1].length : 0;
  const target = parseFloat(numStr.split(groupSep).join('').replace(decimalSep, '.'));

  // useGrouping: 'always' perché l'italiano di default raggruppa solo da cinque
  // cifre in su: senza, "~5.400 €" verrebbe restituito come "~5400 €", diverso
  // da come il dato è scritto nella pagina.
  const format = (value: number) =>
    prefix +
    value.toLocaleString(isEn ? 'en-US' : 'it-IT', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
      useGrouping: 'always',
    }) +
    suffix;

  if (prefersReducedMotion()) {
    el.textContent = format(target);
    return;
  }

  const duration = 1500;
  let start: number | null = null;

  function frame(now: number) {
    if (start === null) start = now;
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = format(target * eased);
    if (t < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}
