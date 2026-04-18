'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <h1 className="text-4xl font-bold">Ops</h1>
      <p className="text-muted-foreground">Qualcosa è andato storto</p>
      <Link
        href="/"
        className="rounded-md bg-accent px-4 py-2 text-sm hover:bg-accent/80 transition-colors"
      >
        Torna alla home
      </Link>
    </div>
  );
}
