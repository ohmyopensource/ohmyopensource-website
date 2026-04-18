'use client';

import { LOCALES } from '@/constants';
import type { Locale } from '@/types';
import { cn } from '@/lib/cn.utils';

interface LanguageSwitcherProps {
  currentLocale: Locale;
  onChange: (locale: Locale) => void;
  variant?: 'dropdown' | 'inline';
}

export function LanguageSwitcher({
  currentLocale,
  onChange,
  variant = 'dropdown',
}: LanguageSwitcherProps) {
  const current = LOCALES.find((l) => l.value === currentLocale);

  if (variant === 'inline') {
    return (
      <div className="flex items-center gap-2 px-3 py-2">
        <span className="text-xs text-muted-foreground mr-1">Lingua</span>
        {LOCALES.map((locale) => (
          <button
            key={locale.value}
            onClick={() => onChange(locale.value)}
            className={cn(
              'flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs transition-colors duration-150',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
              currentLocale === locale.value
                ? 'border-violet-400 bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-300 dark:border-violet-700'
                : 'border-border text-muted-foreground hover:bg-accent',
            )}
            aria-pressed={currentLocale === locale.value}
          >
            <span>{locale.flag}</span>
            <span>{locale.label}</span>
          </button>
        ))}
      </div>
    );
  }

  // Dropdown variant – desktop
  return (
    <div className="relative group">
      <button
        className={cn(
          'flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm',
          'text-muted-foreground hover:bg-accent transition-colors duration-150',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        )}
        aria-haspopup="listbox"
        aria-label="Cambia lingua"
      >
        <span>{current?.flag}</span>
        <span>{current?.label}</span>
        <svg
          className="w-3 h-3 opacity-50 transition-transform duration-150 group-hover:opacity-80"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 4l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dropdown panel */}
      <ul
        role="listbox"
        className={cn(
          'absolute right-0 top-full mt-1.5 z-50 min-w-[100px]',
          'rounded-md border border-border bg-popover shadow-sm py-1',
          'opacity-0 invisible group-hover:opacity-100 group-hover:visible',
          'transition-all duration-150 origin-top-right scale-95 group-hover:scale-100',
        )}
      >
        {LOCALES.map((locale) => (
          <li key={locale.value}>
            <button
              role="option"
              aria-selected={currentLocale === locale.value}
              onClick={() => onChange(locale.value)}
              className={cn(
                'w-full flex items-center gap-2 px-3 py-1.5 text-sm text-left',
                'hover:bg-accent transition-colors duration-100',
                currentLocale === locale.value
                  ? 'text-foreground font-medium'
                  : 'text-muted-foreground',
              )}
            >
              <span>{locale.flag}</span>
              <span>{locale.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
