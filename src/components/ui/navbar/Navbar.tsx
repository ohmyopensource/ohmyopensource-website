'use client';

import { useNavbar } from '@/hooks/useNavbar';
import { useLocaleSwitch } from '@/hooks/useLocaleSwitch';
import { NavbarDesktop } from './NavbarDesktop';
import { NavbarMobile } from './NavbarMobile';
import { cn } from '@/lib/cn.utils';

export function Navbar() {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu, isScrolled } =
    useNavbar();
  const { currentLocale, switchLocale } = useLocaleSwitch();

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-shadow duration-200',
        isScrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-background border-b border-transparent',
      )}
    >
      <nav
        aria-label="Navigazione principale"
        className="mx-auto flex max-w-7xl items-center px-4 sm:px-6 lg:px-8 h-16"
      >
        <NavbarDesktop
          currentLocale={currentLocale}
          onLocaleChange={switchLocale}
        />
        <NavbarMobile
          currentLocale={currentLocale}
          onLocaleChange={switchLocale}
          isMobileMenuOpen={isMobileMenuOpen}
          onToggleMenu={toggleMobileMenu}
          onCloseMenu={closeMobileMenu}
        />
      </nav>
    </header>
  );
}
