import { MainLogo } from '@/components/ui/logo/MainLogo';
import { FOOTER_ORG_DESCRIPTION } from '@/constants';

export function FooterBrand() {
  return (
    <div className="flex flex-col">
      <MainLogo showName={false} />

      {/* Logo grande decorativo */}
      <div className="mt-4 w-14 h-14 rounded-2xl bg-violet-500 flex items-center justify-center shrink-0">
        <span className="text-white text-2xl font-medium select-none">N</span>
      </div>

      <p className="mt-4 text-xs text-muted-foreground leading-relaxed max-w-45">
        {FOOTER_ORG_DESCRIPTION}
      </p>
    </div>
  );
}
