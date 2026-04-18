export interface FooterLink {
  key: string;
  label: string;
  href: string;
}

export interface SocialLink extends FooterLink {
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

export interface FooterBottomLink extends FooterLink {}
