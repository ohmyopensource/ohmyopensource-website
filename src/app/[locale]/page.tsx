import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/types';

type Props = {
  params: Promise<{ locale: string }>;
};

// ─── Sub-components ────────────────────────────────────────────────────────────

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-background px-6 py-5 space-y-1">
      <p className="text-2xl font-medium text-foreground">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-background p-6 space-y-3">
      <div className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-950 flex items-center justify-center text-violet-600 dark:text-violet-400">
        {icon}
      </div>
      <h3 className="text-sm font-medium text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function ProjectCard({
  name,
  description,
  stars,
  lang,
}: {
  name: string;
  description: string;
  stars: string;
  lang: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-background p-6 flex flex-col gap-4">
      <div className="space-y-1.5">
        <h3 className="text-sm font-medium text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
      <div className="flex items-center gap-4 mt-auto">
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <svg
            className="w-3.5 h-3.5"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            aria-hidden="true"
          >
            <path
              d="M8 1l2 4.5H15l-3.5 3 1.5 5L8 11.5 3 13.5l1.5-5L1 5.5h5z"
              strokeLinejoin="round"
            />
          </svg>
          {stars}
        </span>
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span
            className="w-2 h-2 rounded-full bg-violet-400"
            aria-hidden="true"
          />
          {lang}
        </span>
      </div>
    </div>
  );
}

function NewsCard({
  date,
  title,
  excerpt,
}: {
  date: string;
  title: string;
  excerpt: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-background p-6 flex flex-col gap-3">
      <p className="text-xs text-muted-foreground">{date}</p>
      <h3 className="text-sm font-medium text-foreground leading-snug">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
        {excerpt}
      </p>
    </div>
  );
}

// ─── Icon helpers ──────────────────────────────────────────────────────────────

function IconCode() {
  return (
    <svg
      className="w-4 h-4"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path
        d="M5 4L1 8l4 4M11 4l4 4-4 4M9 2l-2 12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBook() {
  return (
    <svg
      className="w-4 h-4"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path
        d="M2 3h5a2 2 0 0 1 2 2v9a1.5 1.5 0 0 0-1.5-1.5H2V3zM14 3H9a2 2 0 0 0-2 2v9a1.5 1.5 0 0 1 1.5-1.5H14V3z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg
      className="w-4 h-4"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle cx="6" cy="5" r="2.5" />
      <path d="M1 13.5c0-2.5 2-4 5-4s5 1.5 5 4" strokeLinecap="round" />
      <path
        d="M11 2.5a2.5 2.5 0 0 1 0 5M15 13.5c0-2-1.5-3.5-4-3.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconBell() {
  return (
    <svg
      className="w-4 h-4"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path
        d="M8 1a5 5 0 0 1 5 5v3l1.5 2h-13L3 9V6a5 5 0 0 1 5-5zM6 13a2 2 0 0 0 4 0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const t = await getTranslations('home');

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-24">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="max-w-3xl space-y-6">
        <p className="text-xs uppercase tracking-widest text-violet-500 font-medium">
          {t('hero.eyebrow')}
        </p>
        <h1 className="text-5xl font-medium tracking-tight text-foreground leading-tight">
          {t('hero.title')}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-violet-500 hover:bg-violet-600 text-white text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {t('hero.ctaPrimary')}
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
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-background hover:bg-accent text-sm font-medium text-foreground transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {t('hero.ctaSecondary')}
          </Link>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          value={t('stats.projects.value')}
          label={t('stats.projects.label')}
        />
        <StatCard
          value={t('stats.contributors.value')}
          label={t('stats.contributors.label')}
        />
        <StatCard
          value={t('stats.stars.value')}
          label={t('stats.stars.label')}
        />
        <StatCard
          value={t('stats.community.value')}
          label={t('stats.community.label')}
        />
      </section>

      {/* ── Features ─────────────────────────────────────────────────────── */}
      <section className="space-y-8">
        <div className="max-w-xl space-y-2">
          <h2 className="text-2xl font-medium text-foreground">
            {t('features.title')}
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {t('features.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <FeatureCard
            title={t('features.openSource.title')}
            description={t('features.openSource.description')}
            icon={<IconCode />}
          />
          <FeatureCard
            title={t('features.docs.title')}
            description={t('features.docs.description')}
            icon={<IconBook />}
          />
          <FeatureCard
            title={t('features.community.title')}
            description={t('features.community.description')}
            icon={<IconUsers />}
          />
          <FeatureCard
            title={t('features.updates.title')}
            description={t('features.updates.description')}
            icon={<IconBell />}
          />
        </div>
      </section>

      {/* ── Featured projects ────────────────────────────────────────────── */}
      <section className="space-y-8">
        <div className="flex items-end justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-medium text-foreground">
              {t('projects.title')}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t('projects.subtitle')}
            </p>
          </div>
          <Link
            href="/projects"
            className="shrink-0 text-sm text-violet-600 dark:text-violet-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          >
            {t('projects.cta')} →
          </Link>
        </div>
        {/* Placeholder projects — sostituire con dati reali da CMS o API */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProjectCard
            name="progetto-alpha"
            description="Uno strumento da riga di comando per automatizzare task ripetitivi nei workflow di sviluppo."
            stars="1.2k"
            lang="TypeScript"
          />
          <ProjectCard
            name="progetto-beta"
            description="Libreria di componenti UI accessibili e personalizzabili per applicazioni React."
            stars="840"
            lang="TypeScript"
          />
          <ProjectCard
            name="progetto-gamma"
            description="Toolchain per la generazione automatica di documentazione da commenti nel codice sorgente."
            stars="310"
            lang="Python"
          />
        </div>
      </section>

      {/* ── Latest news ──────────────────────────────────────────────────── */}
      <section className="space-y-8">
        <div className="flex items-end justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-medium text-foreground">
              {t('news.title')}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t('news.subtitle')}
            </p>
          </div>
          <Link
            href="/news"
            className="shrink-0 text-sm text-violet-600 dark:text-violet-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          >
            {t('news.cta')} →
          </Link>
        </div>
        {/* Placeholder news — sostituire con dati reali */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <NewsCard
            date="12 aprile 2025"
            title="Rilasciata la versione 2.0 di progetto-alpha"
            excerpt="La nuova versione introduce un sistema di plugin estensibile e riduce i tempi di esecuzione del 40% rispetto alla 1.x."
          />
          <NewsCard
            date="3 aprile 2025"
            title="Superati i 500 membri su Discord"
            excerpt="La nostra community continua a crescere. Grazie a tutti coloro che hanno contribuito a costruire uno spazio accogliente e produttivo."
          />
          <NewsCard
            date="28 marzo 2025"
            title="Come contribuire alla documentazione"
            excerpt="Una guida pratica per chi vuole aiutare a migliorare la documentazione dei progetti, anche senza esperienza tecnica."
          />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border bg-background px-8 py-14 text-center space-y-5">
        <h2 className="text-3xl font-medium text-foreground">
          {t('cta.title')}
        </h2>
        <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
          {t('cta.subtitle')}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/contribute"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-violet-500 hover:bg-violet-600 text-white text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {t('cta.contribute')}
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-background hover:bg-accent text-sm font-medium text-foreground transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {t('cta.learnMore')}
          </Link>
        </div>
      </section>
    </div>
  );
}
