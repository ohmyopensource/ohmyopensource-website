export type Locale = 'it' | 'en';

export interface NavItem {
  label: string;
  href: string;
  key: string;
}

export interface NavbarProps {
  currentLocale?: Locale;
  onLocaleChange?: (locale: Locale) => void;
  activePath?: string;
}
