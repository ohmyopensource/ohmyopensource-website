import { Link } from '@/i18n/navigation';
import { FOOTER_BOTTOM_LINKS, SITE_NAME } from '@/constants';

export function FooterBottom() {
  const year = new Date().getFullYear();

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-5 border-t border-border">
      <p className="text-xs text-muted-foreground">
        © {year} {SITE_NAME}. Tutti i diritti riservati.
      </p>

      <nav aria-label="Link legali" className="flex flex-wrap gap-x-4 gap-y-1">
        {FOOTER_BOTTOM_LINKS.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
