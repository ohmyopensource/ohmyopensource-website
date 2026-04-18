import { DONATE_LINKS } from '@/constants';
import { DonateIcon } from '../icon/DonateIcon';

interface FooterDonateProps {
  title: string;
}

export function FooterDonate({ title }: FooterDonateProps) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium mb-1">
        {title}
      </p>
      <ul role="list" className="flex flex-col gap-1.5 list-none">
        {DONATE_LINKS.map((link) => (
          <li key={link.key}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg border border-border text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <DonateIcon platform={link.platform} />
              <span>{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
