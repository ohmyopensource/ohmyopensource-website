import Link from 'next/link';
import { SITE_NAME } from '@/constants';

interface MainLogoProps {
  showName?: boolean;
  onClick?: () => void;
}

export function MainLogo({ showName = true, onClick }: MainLogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="flex items-center gap-2.5 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
      aria-label={`${SITE_NAME} – homepage`}
    >
      {/* To Replace*/}
      <div className="w-8 h-8 rounded-lg bg-violet-500 flex items-center justify-center">
        <span className="text-white text-sm font-medium select-none">
          {SITE_NAME.charAt(0)}
        </span>
      </div>

      {showName && (
        <span className="text-sm font-medium text-foreground">{SITE_NAME}</span>
      )}
    </Link>
  );
}
