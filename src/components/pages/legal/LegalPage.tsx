interface LegalPageProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="space-y-2 mb-12">
        <h1 className="text-3xl font-medium tracking-tight text-foreground">
          {title}
        </h1>
        <p className="text-xs text-muted-foreground">{lastUpdated}</p>
      </div>
      <div className="space-y-10">{children}</div>
    </div>
  );
}

interface LegalSectionProps {
  title: string;
  children: React.ReactNode;
}

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-base font-medium text-foreground">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

export function LegalSubSection({ title, children }: LegalSectionProps) {
  return (
    <div className="space-y-2 pl-4 border-l border-border">
      <h3 className="text-sm font-medium text-foreground">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

export function LegalParagraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm text-muted-foreground leading-relaxed">{children}</p>
  );
}

interface CookieTableRow {
  name: string;
  provider: string;
  purpose: string;
  duration: string;
  type: string;
}

interface CookieTableProps {
  header: {
    name: string;
    provider: string;
    purpose: string;
    duration: string;
    type: string;
  };
  rows: CookieTableRow[];
}

export function CookieTable({ header, rows }: CookieTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b border-border bg-muted/40">
            <th className="px-4 py-2.5 text-left font-medium text-foreground whitespace-nowrap">
              {header.name}
            </th>
            <th className="px-4 py-2.5 text-left font-medium text-foreground whitespace-nowrap">
              {header.provider}
            </th>
            <th className="px-4 py-2.5 text-left font-medium text-foreground">
              {header.purpose}
            </th>
            <th className="px-4 py-2.5 text-left font-medium text-foreground whitespace-nowrap">
              {header.duration}
            </th>
            <th className="px-4 py-2.5 text-left font-medium text-foreground whitespace-nowrap">
              {header.type}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.name}
              className={i < rows.length - 1 ? 'border-b border-border' : ''}
            >
              <td className="px-4 py-3 font-mono text-foreground whitespace-nowrap">
                {row.name}
              </td>
              <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                {row.provider}
              </td>
              <td className="px-4 py-3 text-muted-foreground">{row.purpose}</td>
              <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                {row.duration}
              </td>
              <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                {row.type}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
