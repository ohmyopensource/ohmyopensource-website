import { FooterBrand } from './FooterBrand';
import { FooterLinks } from './FooterLinks';
import { FooterSocial } from './FooterSocial';
import { FooterContact } from './FooterContact';
import { FooterDonate } from './FooterDonate';
import { FooterBottom } from './FooterBottom';

export function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-10 mb-10">
          <FooterBrand />
          <FooterLinks title="Menu" />
          <FooterSocial title="Social" />
          <FooterContact title="Contatti" />
          <FooterDonate title="Sostienici" />
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}
