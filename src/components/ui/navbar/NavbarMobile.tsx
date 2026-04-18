import { MainLogo } from '../logo/MainLogo';
import { MobileMenu } from './MobileMenu';
import { SITE_NAME } from '@/constants';
import type { NavbarProps } from '@/types';

interface NavbarMobileProps extends NavbarProps {
  isMobileMenuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
}

export function NavbarMobile({
  currentLocale = 'it',
  onLocaleChange = () => {},
  isMobileMenuOpen,
  onToggleMenu,
  onCloseMenu,
}: NavbarMobileProps) {
  return (
    <>
      <div className="flex md:hidden w-full items-center justify-between relative">
        {/* Left – logo only */}
        <MainLogo showName={false} />

        {/* Center – site name*/}
        <span className="absolute left-1/2 -translate-x-1/2 text-sm font-medium text-foreground select-none">
          {SITE_NAME}
        </span>

        {/* Right – hamburger */}
        <button
          onClick={onToggleMenu}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Chiudi menu' : 'Apri menu'}
          className="relative z-10 flex flex-col gap-1.25 p-2 rounded-md hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {/* Animated hamburger lines */}
          <span
            className={`block h-[1.5px] w-5.5 rounded-sm bg-foreground transition-transform duration-200 origin-center ${
              isMobileMenuOpen ? 'translate-y-[6.5px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-[1.5px] w-5.5 rounded-sm bg-foreground transition-opacity duration-150 ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block h-[1.5px] w-5.5 rounded-sm bg-foreground transition-transform duration-200 origin-center ${
              isMobileMenuOpen ? '-translate-y-[6.5px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={onCloseMenu}
        currentLocale={currentLocale ?? 'it'}
        onLocaleChange={onLocaleChange ?? (() => {})}
      />
    </>
  );
}
