import { Link, usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/cn.utils';
import { NAV_ITEMS } from '@/constants';

interface NavLinksProps {
  orientation?: 'row' | 'column';
  onItemClick?: () => void;
}

export function NavLinks({ orientation = 'row', onItemClick }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul
      role="list"
      className={cn(
        'flex list-none',
        orientation === 'row'
          ? 'flex-row items-center gap-1'
          : 'flex-col gap-0.5 w-full',
      )}
    >
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href;
        return (
          <li key={item.key}>
            <Link
              href={item.href}
              onClick={onItemClick}
              aria-current={isActive ? 'page' : undefined}
              className={cn(
                'block rounded-md px-3 py-1.5 text-sm transition-colors duration-150',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                orientation === 'column' && 'py-2.5',
                isActive
                  ? 'bg-accent text-accent-foreground font-medium'
                  : 'text-muted-foreground hover:bg-accent/60 hover:text-foreground',
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
