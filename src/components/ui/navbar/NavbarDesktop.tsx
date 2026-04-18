import { MainLogo } from '../logo/MainLogo';
import { NavLinks } from './NavLinks';
import { LanguageSwitcher } from '../button/LanguageSwitcher';
import type { NavbarProps } from '@/types';

export function NavbarDesktop({
  currentLocale = 'it',
  onLocaleChange = () => {},
}: NavbarProps) {
  return (
    <div className="hidden md:flex w-full items-center justify-between">
      <MainLogo showName />
      <NavLinks orientation="row" />
      <LanguageSwitcher
        variant="dropdown"
        currentLocale={currentLocale}
        onChange={onLocaleChange}
      />
    </div>
  );
}
