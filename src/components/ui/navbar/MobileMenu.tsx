'use client';

import { useEffect } from 'react';
import { NavLinks } from './NavLinks';
import { LanguageSwitcher } from '../button/LanguageSwitcher';
import type { Locale } from '@/types';
import { cn } from '@/lib/cn.utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activePath?: string;
  currentLocale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

export function MobileMenu({
  isOpen,
  onClose,
  currentLocale,
  onLocaleChange,
}: MobileMenuProps) {
  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={cn(
          'fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-200',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
        )}
      />

      {/* Drawer panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu di navigazione"
        className={cn(
          'fixed inset-x-4 top-18 z-50 rounded-xl border border-border bg-popover shadow-md',
          'transition-all duration-200 ease-out origin-top',
          isOpen
            ? 'opacity-100 scale-y-100 translate-y-0'
            : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none',
        )}
      >
        <div className="p-2">
          <NavLinks orientation="column" onItemClick={onClose} />

          <div className="mt-1 border-t border-border pt-1">
            <LanguageSwitcher
              variant="inline"
              currentLocale={currentLocale}
              onChange={(locale) => {
                onLocaleChange(locale);
                onClose();
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
