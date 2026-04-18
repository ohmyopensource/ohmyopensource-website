import { SOCIAL_LINKS } from '@/constants';
import { SocialIcon } from '../icon/SocialIcon';

interface FooterSocialProps {
  title: string;
}

export function FooterSocial({ title }: FooterSocialProps) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium mb-1">
        {title}
      </p>
      <ul role="list" className="flex flex-col gap-1 list-none">
        {SOCIAL_LINKS.map((link) => (
          <li key={link.key}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex items-center gap-2.5 py-0.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm group"
            >
              <span className="flex items-center justify-center w-6 h-6 rounded-md border border-border group-hover:border-border/80 transition-colors shrink-0">
                <SocialIcon icon={link.icon} />
              </span>
              <span>{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
