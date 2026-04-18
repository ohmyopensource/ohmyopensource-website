import type { ComponentProps } from 'react';
import { Link } from '@/i18n/navigation';

type IntlHref = ComponentProps<typeof Link>['href'];

export interface FooterLink {
  key: string;
  label: string;
  href: IntlHref;
}

export interface SocialLink {
  key: string;
  label: string;
  href: string;
  icon: 'github' | 'twitter' | 'discord' | 'instagram' | 'youtube';
}

export interface ContactItem {
  key: string;
  type: 'email' | 'location';
  label: string;
  href?: string;
}

export interface DonateLink {
  key: string;
  label: string;
  href: string;
  platform: 'paypal' | 'github-sponsors' | 'kofi';
}

export interface FooterBottomLink {
  key: string;
  label: string;
  href: IntlHref;
}
