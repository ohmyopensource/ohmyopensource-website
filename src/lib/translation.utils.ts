export async function loadMessages(locale: string) {
  switch (locale) {
    case 'en':
      return (
        await Promise.all([
          import('../../messages/en/common.json'),
          import('../../messages/en/home.json'),
          import('../../messages/en/about.json'),
          import('../../messages/en/contribute.json'),
          import('../../messages/en/legal.json'),
        ])
      ).map((m) => m.default);
    case 'it':
    default:
      return (
        await Promise.all([
          import('../../messages/it/common.json'),
          import('../../messages/it/home.json'),
          import('../../messages/it/about.json'),
          import('../../messages/it/contribute.json'),
          import('../../messages/it/legal.json'),
        ])
      ).map((m) => m.default);
  }
}
