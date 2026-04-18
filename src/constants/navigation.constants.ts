import type { ComponentProps } from 'react';
import { Link } from '@/i18n/navigation';
import type { Locale, NavItem } from '../types/navigation.types';

type IntlHref = ComponentProps<typeof Link>['href'];

export const NAV_ITEMS: { key: string; label: string; href: IntlHref }[] = [
  { key: 'projects', label: 'Progetti', href: '/progetti' },
  { key: 'news', label: 'News', href: '/news' },
  { key: 'docs', label: 'Documentazione', href: '/documentazione' },
  { key: 'about', label: 'Chi Siamo', href: '/chi-siamo' },
  { key: 'contribute', label: 'Contribuisci', href: '/contribuisci' },
];

export const LOCALES: { value: Locale; label: string; flag: string }[] = [
  { value: 'it', label: 'IT', flag: '🇮🇹' },
  { value: 'en', label: 'EN', flag: '🇬🇧' },
];

export const SITE_NAME = 'NomeSito';
