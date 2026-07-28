import { ui, defaultLang } from './ui';

export type Lang = keyof typeof ui;

// Percorsi (senza prefisso locale) che esistono in entrambe le lingue.
// Unica fonte di verità condivisa dallo switcher di lingua nell'header e
// dal redirect automatico in base alla lingua del browser: si estende
// quando una nuova pagina diventa bilingue.
export const translatedPaths = [
  '',
  'work/',
  'work/eventi-multisede/',
  'work/posizionamento-specialistico/',
  'work/protocollo-crm/',
  'work/territorio-bilingue/',
  'work/capacita-operativa/',
  'expertise/',
  'experience/',
  'about/',
  'contact/',
  'stack/',
];

export function getPathWithoutBase(pathname: string): string {
  const base = import.meta.env.BASE_URL;
  return pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
}

export function getLangFromUrl(url: URL): Lang {
  const path = getPathWithoutBase(url.pathname);
  if (path === 'en' || path.startsWith('en/')) return 'en';
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
