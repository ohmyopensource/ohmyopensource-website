import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { DONATE_LINKS } from '@/constants';
import type { Locale } from '@/types';
import { DonateIcon } from '@/components/ui/icon/DonateIcon';

type Props = {
  params: Promise<{ locale: string }>;
};

// ─── Sub-components ────────────────────────────────────────────────────────────

function WhyCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-background p-6">
      <h3 className="text-sm font-medium text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function WayCard({
  title,
  description,
  cta,
  href,
  external = false,
}: {
  title: string;
  description: string;
  cta: string;
  href: string;
  external?: boolean;
}) {
  return (
    <div className="flex flex-col rounded-xl border border-border bg-background p-6 gap-4">
      <div className="flex-1">
        <h3 className="text-sm font-medium text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
      {external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-600 dark:text-violet-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
        >
          {cta}
          <svg
            className="w-3.5 h-3.5"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            <path
              d="M6 3H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-3M9 2h5m0 0v5m0-5L7 10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      ) : (
        <Link
          href={href as '/documentation'}
          className="inline-flex items-center gap-1 text-sm font-medium text-violet-600 dark:text-violet-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
        >
          {cta}
        </Link>
      )}
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default async function ContributePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const t = await getTranslations('contribute');

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="max-w-2xl space-y-4">
        <p className="text-xs uppercase tracking-widest text-violet-500 font-medium">
          {t('hero.eyebrow')}
        </p>
        <h1 className="text-4xl font-medium tracking-tight text-foreground">
          {t('hero.title')}
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          {t('hero.subtitle')}
        </p>
      </section>

      {/* ── Why contribute ───────────────────────────────────────────────── */}
      <section className="space-y-6">
        <h2 className="text-xl font-medium text-foreground">
          {t('why.title')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <WhyCard
            title={t('why.items.openSource.title')}
            description={t('why.items.openSource.description')}
          />
          <WhyCard
            title={t('why.items.community.title')}
            description={t('why.items.community.description')}
          />
          <WhyCard
            title={t('why.items.impact.title')}
            description={t('why.items.impact.description')}
          />
        </div>
      </section>

      {/* ── Ways to contribute ───────────────────────────────────────────── */}
      <section className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl font-medium text-foreground">
            {t('ways.title')}
          </h2>
          <p className="text-sm text-muted-foreground">{t('ways.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <WayCard
            title={t('ways.code.title')}
            description={t('ways.code.description')}
            cta={t('ways.code.cta')}
            href="https://github.com/nomesito"
            external
          />
          <WayCard
            title={t('ways.docs.title')}
            description={t('ways.docs.description')}
            cta={t('ways.docs.cta')}
            href="/documentation"
          />
          <WayCard
            title={t('ways.donate.title')}
            description={t('ways.donate.description')}
            cta={t('ways.donate.cta')}
            href="#donate"
            external
          />
          <WayCard
            title={t('ways.community.title')}
            description={t('ways.community.description')}
            cta={t('ways.community.cta')}
            href="https://discord.gg/nomesito"
            external
          />
        </div>
      </section>

      {/* ── Donate ───────────────────────────────────────────────────────── */}
      <section id="donate" className="space-y-6">
        <h2 className="text-xl font-medium text-foreground">
          {t('ways.donate.title')}
        </h2>
        <div className="flex flex-wrap gap-3">
          {DONATE_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-border bg-background text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <DonateIcon platform={link.platform} />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border bg-background px-8 py-12 text-center space-y-4">
        <h2 className="text-2xl font-medium text-foreground">
          {t('cta.title')}
        </h2>
        <p className="text-sm text-muted-foreground">{t('cta.subtitle')}</p>
        <a
          href="https://github.com/nomesito/issues/new"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 rounded-lg bg-violet-500 hover:bg-violet-600 text-white text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {t('cta.button')}
          <svg
            className="w-3.5 h-3.5"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </section>
    </div>
  );
}
