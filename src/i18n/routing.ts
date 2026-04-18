import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['it', 'en'],
  defaultLocale: 'it',
  localePrefix: 'always',
  pathnames: {
    '/': '/',
    '/progetti': {
      en: '/projects',
    },
    '/news': '/news',
    '/documentazione': {
      en: '/documentation',
    },
    '/chi-siamo': {
      en: '/about',
    },
    '/contribuisci': {
      en: '/contribute',
    },
    '/privacy-policy': '/privacy-policy',
    '/cookie-policy': '/cookie-policy',
    '/termini-e-condizioni': {
      en: '/terms-and-conditions',
    },

    // todo
    '/news/[articleSlug]': {
      en: '/neuigkeiten/[articleSlug]',
    },
    '/news/just-in': {
      en: '/neuigkeiten/aktuell',
    },
    '/categories/[...slug]': {
      en: '/kategorien/[...slug]',
    },
  },
});
