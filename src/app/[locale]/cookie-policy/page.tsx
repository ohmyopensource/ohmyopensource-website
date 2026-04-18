import { getTranslations, setRequestLocale } from 'next-intl/server';

import type { Locale } from '@/types';
import {
  LegalPage,
  LegalParagraph,
  LegalSection,
  LegalSubSection,
  CookieTable,
} from '@/components/pages/legal/LegalPage';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function CookiePolicyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const t = await getTranslations('cookiePolicy');

  const tableHeader = {
    name: t('cookieTypes.analytics.table.header.name'),
    provider: t('cookieTypes.analytics.table.header.provider'),
    purpose: t('cookieTypes.analytics.table.header.purpose'),
    duration: t('cookieTypes.analytics.table.header.duration'),
    type: t('cookieTypes.analytics.table.header.type'),
  };

  const tableRows = [
    {
      name: t('cookieTypes.analytics.table.rows.0.name'),
      provider: t('cookieTypes.analytics.table.rows.0.provider'),
      purpose: t('cookieTypes.analytics.table.rows.0.purpose'),
      duration: t('cookieTypes.analytics.table.rows.0.duration'),
      type: t('cookieTypes.analytics.table.rows.0.type'),
    },
    {
      name: t('cookieTypes.analytics.table.rows.1.name'),
      provider: t('cookieTypes.analytics.table.rows.1.provider'),
      purpose: t('cookieTypes.analytics.table.rows.1.purpose'),
      duration: t('cookieTypes.analytics.table.rows.1.duration'),
      type: t('cookieTypes.analytics.table.rows.1.type'),
    },
    {
      name: t('cookieTypes.analytics.table.rows.2.name'),
      provider: t('cookieTypes.analytics.table.rows.2.provider'),
      purpose: t('cookieTypes.analytics.table.rows.2.purpose'),
      duration: t('cookieTypes.analytics.table.rows.2.duration'),
      type: t('cookieTypes.analytics.table.rows.2.type'),
    },
    {
      name: t('cookieTypes.analytics.table.rows.3.name'),
      provider: t('cookieTypes.analytics.table.rows.3.provider'),
      purpose: t('cookieTypes.analytics.table.rows.3.purpose'),
      duration: t('cookieTypes.analytics.table.rows.3.duration'),
      type: t('cookieTypes.analytics.table.rows.3.type'),
    },
  ];

  return (
    <LegalPage title={t('title')} lastUpdated={t('lastUpdated')}>
      <LegalParagraph>{t('intro')}</LegalParagraph>

      <LegalSection title={t('whatAreCookies.title')}>
        <LegalParagraph>{t('whatAreCookies.body')}</LegalParagraph>
      </LegalSection>

      <LegalSection title={t('cookieTypes.title')}>
        <LegalSubSection title={t('cookieTypes.technical.subtitle')}>
          <LegalParagraph>{t('cookieTypes.technical.body')}</LegalParagraph>
        </LegalSubSection>
        <LegalSubSection title={t('cookieTypes.analytics.subtitle')}>
          <CookieTable header={tableHeader} rows={tableRows} />
        </LegalSubSection>
      </LegalSection>

      <LegalSection title={t('consent.title')}>
        <LegalParagraph>{t('consent.body')}</LegalParagraph>
      </LegalSection>

      <LegalSection title={t('thirdParty.title')}>
        <LegalParagraph>{t('thirdParty.body')}</LegalParagraph>
      </LegalSection>

      <LegalSection title={t('optOut.title')}>
        <LegalSubSection title={t('optOut.browser.subtitle')}>
          <LegalParagraph>{t('optOut.browser.body')}</LegalParagraph>
        </LegalSubSection>
        <LegalSubSection title={t('optOut.gaOptOut.subtitle')}>
          <LegalParagraph>{t('optOut.gaOptOut.body')}</LegalParagraph>
        </LegalSubSection>
      </LegalSection>

      <LegalSection title={t('changes.title')}>
        <LegalParagraph>{t('changes.body')}</LegalParagraph>
      </LegalSection>

      <LegalSection title={t('moreInfo.title')}>
        <LegalParagraph>{t('moreInfo.body')}</LegalParagraph>
      </LegalSection>
    </LegalPage>
  );
}
