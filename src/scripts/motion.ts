// Le animazioni del sito sono guidate da requestAnimationFrame invece che da
// transition CSS (iOS le degrada quando "Riduci movimento" è attivo, vedi il
// commento in global.css). Il rovescio della medaglia è che la regola
// `@media (prefers-reduced-motion: reduce)` non le tocca: la preferenza va
// letta a mano, qui, e rispettata da ogni animazione.
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
