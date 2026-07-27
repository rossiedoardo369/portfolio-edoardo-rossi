import { ui, defaultLang } from './ui';

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL): Lang {
  const base = import.meta.env.BASE_URL;
  const path = url.pathname.startsWith(base) ? url.pathname.slice(base.length) : url.pathname;
  if (path === 'en' || path.startsWith('en/')) return 'en';
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
