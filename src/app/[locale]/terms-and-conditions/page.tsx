import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/types';
import {
  LegalPage,
  LegalParagraph,
  LegalSection,
  LegalSubSection,
} from '@/components/pages/legal/LegalPage';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function TermsAndConditionsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const t = await getTranslations('termsAndConditions');

  return (
    <LegalPage title={t('title')} lastUpdated={t('lastUpdated')}>
      <LegalParagraph>{t('intro')}</LegalParagraph>

      <LegalSection title={t('owner.title')}>
        <LegalParagraph>{t('owner.body')}</LegalParagraph>
      </LegalSection>

      <LegalSection title={t('purpose.title')}>
        <LegalParagraph>{t('purpose.body')}</LegalParagraph>
      </LegalSection>

      <LegalSection title={t('ip.title')}>
        <LegalSubSection title={t('ip.design.subtitle')}>
          <LegalParagraph>{t('ip.design.body')}</LegalParagraph>
        </LegalSubSection>
        <LegalSubSection title={t('ip.openSource.subtitle')}>
          <LegalParagraph>{t('ip.openSource.body')}</LegalParagraph>
        </LegalSubSection>
        <LegalSubSection title={t('ip.thirdParty.subtitle')}>
          <LegalParagraph>{t('ip.thirdParty.body')}</LegalParagraph>
        </LegalSubSection>
      </LegalSection>

      <LegalSection title={t('conduct.title')}>
        <LegalParagraph>{t('conduct.body')}</LegalParagraph>
      </LegalSection>

      <LegalSection title={t('links.title')}>
        <LegalParagraph>{t('links.body')}</LegalParagraph>
      </LegalSection>

      <LegalSection title={t('disclaimer.title')}>
        <LegalParagraph>{t('disclaimer.body')}</LegalParagraph>
      </LegalSection>

      <LegalSection title={t('governing.title')}>
        <LegalParagraph>{t('governing.body')}</LegalParagraph>
      </LegalSection>

      <LegalSection title={t('changes.title')}>
        <LegalParagraph>{t('changes.body')}</LegalParagraph>
      </LegalSection>

      <LegalSection title={t('contact.title')}>
        <LegalParagraph>{t('contact.body')}</LegalParagraph>
      </LegalSection>
    </LegalPage>
  );
}
