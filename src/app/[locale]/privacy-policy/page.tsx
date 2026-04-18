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

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const t = await getTranslations('privacyPolicy');

  return (
    <LegalPage title={t('title')} lastUpdated={t('lastUpdated')}>
      <LegalParagraph>{t('intro')}</LegalParagraph>

      <LegalSection title={t('controller.title')}>
        <LegalParagraph>{t('controller.body')}</LegalParagraph>
      </LegalSection>

      <LegalSection title={t('dataCollected.title')}>
        <LegalSubSection title={t('dataCollected.navigation.subtitle')}>
          <LegalParagraph>{t('dataCollected.navigation.body')}</LegalParagraph>
        </LegalSubSection>
        <LegalSubSection title={t('dataCollected.analytics.subtitle')}>
          <LegalParagraph>{t('dataCollected.analytics.body')}</LegalParagraph>
        </LegalSubSection>
        <LegalSubSection title={t('dataCollected.tagManager.subtitle')}>
          <LegalParagraph>{t('dataCollected.tagManager.body')}</LegalParagraph>
        </LegalSubSection>
        <LegalSubSection title={t('dataCollected.hosting.subtitle')}>
          <LegalParagraph>{t('dataCollected.hosting.body')}</LegalParagraph>
        </LegalSubSection>
      </LegalSection>

      <LegalSection title={t('legalBasis.title')}>
        <LegalParagraph>{t('legalBasis.body')}</LegalParagraph>
      </LegalSection>

      <LegalSection title={t('retention.title')}>
        <LegalParagraph>{t('retention.body')}</LegalParagraph>
      </LegalSection>

      <LegalSection title={t('rights.title')}>
        <LegalParagraph>{t('rights.body')}</LegalParagraph>
      </LegalSection>

      <LegalSection title={t('transfers.title')}>
        <LegalParagraph>{t('transfers.body')}</LegalParagraph>
      </LegalSection>

      <LegalSection title={t('changes.title')}>
        <LegalParagraph>{t('changes.body')}</LegalParagraph>
      </LegalSection>

      <LegalSection title={t('credits.title')}>
        <LegalParagraph>{t('credits.body')}</LegalParagraph>
      </LegalSection>
    </LegalPage>
  );
}
