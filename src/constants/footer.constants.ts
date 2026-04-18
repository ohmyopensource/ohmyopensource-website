import type {
  SocialLink,
  ContactItem,
  DonateLink,
  FooterBottomLink,
} from '@/types/footer.types';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    key: 'github',
    label: 'GitHub',
    href: 'https://github.com/nomesito',
    icon: 'github',
  },
  {
    key: 'twitter',
    label: 'Twitter / X',
    href: 'https://twitter.com/nomesito',
    icon: 'twitter',
  },
  {
    key: 'discord',
    label: 'Discord',
    href: 'https://discord.gg/nomesito',
    icon: 'discord',
  },
  {
    key: 'instagram',
    label: 'Instagram',
    href: 'https://instagram.com/nomesito',
    icon: 'instagram',
  },
  {
    key: 'youtube',
    label: 'YouTube',
    href: 'https://youtube.com/@nomesito',
    icon: 'youtube',
  },
];

export const CONTACT_ITEMS: ContactItem[] = [
  {
    key: 'email-info',
    type: 'email',
    label: 'info@nomesito.it',
    href: 'mailto:info@nomesito.it',
  },
  {
    key: 'email-press',
    type: 'email',
    label: 'press@nomesito.it',
    href: 'mailto:press@nomesito.it',
  },
  { key: 'location', type: 'location', label: 'Italia' },
];

export const DONATE_LINKS: DonateLink[] = [
  {
    key: 'paypal',
    label: 'PayPal',
    platform: 'paypal',
    href: 'https://paypal.me/nomesito',
  },
  {
    key: 'github-sponsors',
    label: 'GitHub Sponsors',
    platform: 'github-sponsors',
    href: 'https://github.com/sponsors/nomesito',
  },
  {
    key: 'kofi',
    label: 'Ko-fi',
    platform: 'kofi',
    href: 'https://ko-fi.com/nomesito',
  },
];

export const FOOTER_BOTTOM_LINKS: FooterBottomLink[] = [
  { key: 'privacy', label: 'Privacy Policy', href: '/privacy-policy' },
  { key: 'cookie', label: 'Cookie Policy', href: '/cookie-policy' },
  {
    key: 'terms',
    label: 'Termini e Condizioni',
    href: '/terms-and-conditions',
  },
];

export const FOOTER_ORG_DESCRIPTION =
  "Un'associazione open source che promuove la cultura digitale e la collaborazione.";
