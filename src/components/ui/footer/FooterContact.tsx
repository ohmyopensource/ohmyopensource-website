import { CONTACT_ITEMS } from '@/constants';

interface FooterContactProps {
  title: string;
}

function EmailIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 shrink-0 mt-0.5 opacity-50"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <path d="M2 4l6 4 6-4M2 3h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 shrink-0 mt-0.5 opacity-50"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <path d="M8 1.5A4.5 4.5 0 0 0 3.5 6c0 3 4.5 8.5 4.5 8.5S12.5 9 12.5 6A4.5 4.5 0 0 0 8 1.5z" />
      <circle cx="8" cy="6" r="1.5" />
    </svg>
  );
}

export function FooterContact({ title }: FooterContactProps) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium mb-1">
        {title}
      </p>
      <ul role="list" className="flex flex-col gap-1.5 list-none">
        {CONTACT_ITEMS.map((item) => (
          <li key={item.key} className="flex items-start gap-2">
            {item.type === 'email' ? <EmailIcon /> : <LocationIcon />}
            {item.href ? (
              <a
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-sm text-muted-foreground">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
