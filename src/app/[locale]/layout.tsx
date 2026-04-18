import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import { Navbar } from '@/components/ui/navbar/Navbar';
import { Footer } from '@/components/ui/footer/Footer';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home.meta' });

  return {
    title: {
      default: t('title'),
      template: `%s — NomeSito`,
    },
    description: t('description'),
    metadataBase: new URL('https://nomesito.it'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: 'https://nomesito.it',
      siteName: 'NomeSito',
      locale: locale === 'it' ? 'it_IT' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
    alternates: {
      canonical: `https://nomesito.it/${locale}`,
      languages: {
        it: 'https://nomesito.it/it',
        en: 'https://nomesito.it/en',
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <GoogleTagManager gtmId="GTM-TJZZKDSV" />
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>
          <Navbar />
          <main className="pt-16 flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
      <GoogleAnalytics gaId="G-LKS7YRM2GQ" />
    </html>
  );
}
