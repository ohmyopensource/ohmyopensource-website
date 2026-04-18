import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['it', 'en'],
  defaultLocale: 'it',
  localePrefix: 'always',
  pathnames: {
    '/': '/',
    '/projects': {
      it: '/progetti',
    },
    '/news': '/news',
    '/documentation': {
      it: '/documentazione',
    },
    '/about': {
      it: '/chi-siamo',
    },
    '/contribute': {
      it: '/contribuisci',
    },
    '/privacy-policy': '/privacy-policy',
    '/cookie-policy': '/cookie-policy',
    '/terms-and-conditions': {
      it: '/termini-e-condizioni',
    },

    // todo
    '/news/[articleSlug]': {
      it: '/neuigkeiten/[articleSlug]',
    },
    '/news/just-in': {
      it: '/neuigkeiten/aktuell',
    },
    '/categories/[...slug]': {
      it: '/kategorien/[...slug]',
    },
  },
});
