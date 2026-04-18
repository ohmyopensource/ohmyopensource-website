import { Link } from '@/i18n/navigation';
import { NAV_ITEMS } from '@/constants';

interface FooterLinksProps {
  title: string;
}

export function FooterLinks({ title }: FooterLinksProps) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium mb-1">
        {title}
      </p>
      <ul role="list" className="flex flex-col gap-0.5 list-none">
        {NAV_ITEMS.map((item) => (
          <li key={item.key}>
            <Link
              href={item.href}
              className="block text-sm text-muted-foreground py-0.5 hover:text-foreground transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
