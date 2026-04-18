import { usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { useCallback } from 'react';
import type { Locale } from '@/types';

export function useLocaleSwitch() {
  const pathname = usePathname();
  const currentLocale = useLocale() as Locale;

  const switchLocale = useCallback(
    (locale: Locale) => {
      if (locale === currentLocale) return;
      window.location.href = `/${locale}${pathname}`;
    },
    [pathname, currentLocale],
  );

  return { currentLocale, switchLocale };
}
