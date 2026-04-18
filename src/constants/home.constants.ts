export const HOME_TRANSLATION_KEYS = {
  namespace: 'home',

  meta: {
    title: 'home.meta.title',
    description: 'home.meta.description',
  },

  hero: {
    eyebrow: 'home.hero.eyebrow',
    title: 'home.hero.title',
    subtitle: 'home.hero.subtitle',
    ctaPrimary: 'home.hero.ctaPrimary',
    ctaSecondary: 'home.hero.ctaSecondary',
  },

  stats: {
    projects: {
      value: 'home.stats.projects.value',
      label: 'home.stats.projects.label',
    },
    contributors: {
      value: 'home.stats.contributors.value',
      label: 'home.stats.contributors.label',
    },
    stars: {
      value: 'home.stats.stars.value',
      label: 'home.stats.stars.label',
    },
    community: {
      value: 'home.stats.community.value',
      label: 'home.stats.community.label',
    },
  },

  features: {
    title: 'home.features.title',
    subtitle: 'home.features.subtitle',
    openSource: {
      title: 'home.features.openSource.title',
      description: 'home.features.openSource.description',
    },
    docs: {
      title: 'home.features.docs.title',
      description: 'home.features.docs.description',
    },
    community: {
      title: 'home.features.community.title',
      description: 'home.features.community.description',
    },
    updates: {
      title: 'home.features.updates.title',
      description: 'home.features.updates.description',
    },
  },

  projects: {
    title: 'home.projects.title',
    subtitle: 'home.projects.subtitle',
    cta: 'home.projects.cta',
  },

  news: {
    title: 'home.news.title',
    subtitle: 'home.news.subtitle',
    cta: 'home.news.cta',
  },

  cta: {
    title: 'home.cta.title',
    subtitle: 'home.cta.subtitle',
    contribute: 'home.cta.contribute',
    learnMore: 'home.cta.learnMore',
  },
} as const;
