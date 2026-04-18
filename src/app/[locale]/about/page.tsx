import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/types';

type Props = {
  params: Promise<{ locale: string }>;
};

// ─── Sub-components ────────────────────────────────────────────────────────────

function ValueCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-background p-6 space-y-2">
      <h3 className="text-sm font-medium text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function TimelineItem({
  year,
  title,
  description,
  isLast = false,
}: {
  year: string;
  title: string;
  description: string;
  isLast?: boolean;
}) {
  return (
    <div className="flex gap-6">
      {/* Colonna sinistra — anno + linea verticale */}
      <div className="flex flex-col items-center">
        <div className="w-2 h-2 rounded-full bg-violet-500 shrink-0 mt-1.5" />
        {!isLast && <div className="w-px flex-1 bg-border mt-2" />}
      </div>

      {/* Contenuto */}
      <div className={`pb-8 space-y-1 ${isLast ? '' : ''}`}>
        <p className="text-xs font-medium text-violet-500 uppercase tracking-widest">
          {year}
        </p>
        <h3 className="text-sm font-medium text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

function TeamMemberCard({
  initials,
  name,
  role,
}: {
  initials: string;
  name: string;
  role: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-background p-4">
      <div className="w-10 h-10 rounded-full bg-violet-100 dark:bg-violet-950 flex items-center justify-center shrink-0">
        <span className="text-sm font-medium text-violet-700 dark:text-violet-300 select-none">
          {initials}
        </span>
      </div>
      <div>
        <p className="text-sm font-medium text-foreground">{name}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
      </div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const t = await getTranslations('about');

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

      {/* ── Mission ──────────────────────────────────────────────────────── */}
      <section className="max-w-3xl space-y-4">
        <h2 className="text-xl font-medium text-foreground">
          {t('mission.title')}
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          {t('mission.body')}
        </p>
      </section>

      {/* ── Values ───────────────────────────────────────────────────────── */}
      <section className="space-y-6">
        <h2 className="text-xl font-medium text-foreground">
          {t('values.title')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ValueCard
            title={t('values.openness.title')}
            description={t('values.openness.description')}
          />
          <ValueCard
            title={t('values.collaboration.title')}
            description={t('values.collaboration.description')}
          />
          <ValueCard
            title={t('values.accessibility.title')}
            description={t('values.accessibility.description')}
          />
          <ValueCard
            title={t('values.sustainability.title')}
            description={t('values.sustainability.description')}
          />
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────────────────── */}
      <section className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl font-medium text-foreground">
            {t('team.title')}
          </h2>
          <p className="text-sm text-muted-foreground">{t('team.subtitle')}</p>
        </div>
        {/* @TODO: Placeholder members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <TeamMemberCard
            initials="MR"
            name="Mario Rossi"
            role="Founder & maintainer"
          />
          <TeamMemberCard
            initials="LV"
            name="Laura Verdi"
            role="Frontend developer"
          />
          <TeamMemberCard
            initials="AB"
            name="Andrea Bianchi"
            role="Documentation"
          />
          <TeamMemberCard
            initials="SF"
            name="Sara Ferrari"
            role="Community manager"
          />
          <TeamMemberCard
            initials="GC"
            name="Giulio Conti"
            role="Backend developer"
          />
          <TeamMemberCard initials="EP" name="Elena Poli" role="Design & UX" />
        </div>
      </section>

      {/* ── History timeline ─────────────────────────────────────────────── */}
      <section className="space-y-6">
        <h2 className="text-xl font-medium text-foreground">
          {t('history.title')}
        </h2>
        <div className="max-w-xl">
          <TimelineItem
            year={t('history.items.founded.year')}
            title={t('history.items.founded.title')}
            description={t('history.items.founded.description')}
          />
          <TimelineItem
            year={t('history.items.firstRelease.year')}
            title={t('history.items.firstRelease.title')}
            description={t('history.items.firstRelease.description')}
          />
          <TimelineItem
            year={t('history.items.community.year')}
            title={t('history.items.community.title')}
            description={t('history.items.community.description')}
          />
          <TimelineItem
            year={t('history.items.today.year')}
            title={t('history.items.today.title')}
            description={t('history.items.today.description')}
            isLast
          />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border bg-background px-8 py-12 text-center space-y-4">
        <h2 className="text-2xl font-medium text-foreground">
          {t('cta.title')}
        </h2>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          {t('cta.subtitle')}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
          <Link
            href="/contribute"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-violet-500 hover:bg-violet-600 text-white text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {t('cta.contribute')}
          </Link>
          <a
            href="https://discord.gg/nomesito"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-background hover:bg-accent text-sm font-medium text-foreground transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {t('cta.discord')}
          </a>
        </div>
      </section>
    </div>
  );
}
