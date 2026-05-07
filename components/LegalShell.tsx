import Link from "next/link";
import { Pokeball } from "./Pokeball";

interface LegalShellProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalShell({ title, lastUpdated, children }: LegalShellProps) {
  return (
    <div className="min-h-dvh flex flex-col bg-bg text-text">
      <header className="flex items-center gap-3 px-5 py-3.5 lg:px-7 border-b border-border bg-surface shrink-0">
        <Link
          href="/"
          className="flex items-center gap-3 no-underline text-text hover:opacity-90 transition-opacity"
          aria-label="BulkPokeScan home"
        >
          <Pokeball size={36} />
          <div className="flex flex-col leading-none">
            <div className="flex items-baseline">
              <span className="font-display text-[20px] font-bold text-text">
                Bulk
              </span>
              <span className="font-display text-[20px] font-medium text-yellow">
                PokeScan
              </span>
            </div>
            <span className="hidden lg:inline-block font-mono text-[9px] tracking-[0.22em] text-text-muted uppercase mt-1">
              POKÉMON · TCG CODE SCANNER
            </span>
          </div>
        </Link>
        <div className="flex-1" />
        <Link
          href="/"
          className="hidden sm:inline-flex items-center h-9 px-3.5 rounded-lg border border-border bg-surface-2 text-text-2 font-body text-[13px] font-semibold hover:bg-surface-3 hover:text-text hover:border-border-strong transition-colors no-underline"
        >
          ← Back to scanner
        </Link>
      </header>

      <main className="flex-1 px-5 py-8 lg:px-7 lg:py-12">
        <div className="mx-auto max-w-[760px]">
          <div className="mb-8">
            <h1 className="font-display text-[32px] lg:text-[40px] font-bold text-text leading-tight">
              {title}
            </h1>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted">
              Last updated · {lastUpdated}
            </p>
          </div>
          <article className="legal-prose">{children}</article>
        </div>
      </main>

      <footer className="flex items-center gap-3.5 px-5 py-3 lg:px-7 border-t border-border bg-surface shrink-0 font-mono text-[11px] tracking-[0.08em] uppercase text-text-muted">
        <span>BulkPokeScan</span>
        <span aria-hidden>·</span>
        <Link
          href="/privacy"
          className="text-text-2 hover:text-yellow transition-colors no-underline"
        >
          Privacy
        </Link>
        <span aria-hidden>·</span>
        <Link
          href="/terms"
          className="text-text-2 hover:text-yellow transition-colors no-underline"
        >
          Terms
        </Link>
        <span aria-hidden>·</span>
        <Link
          href="/support"
          className="text-text-2 hover:text-yellow transition-colors no-underline"
        >
          Support
        </Link>
        <div className="flex-1" />
        <span className="hidden md:inline">A NYTEMODE project</span>
      </footer>
    </div>
  );
}
