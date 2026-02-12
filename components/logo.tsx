import Link from 'next/link';

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link href="#top" className="focus-ring inline-flex items-center gap-3 rounded-md" aria-label="Ir para o topo da página">
      <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-md border border-brand-border bg-brand-panel/70">
        <span className="absolute h-4 w-[2px] -translate-x-[3px] bg-brand-text" />
        <span className="absolute h-[2px] w-4 translate-y-[4px] bg-brand-text" />
        <span className="absolute h-4 w-[2px] translate-x-[3px] bg-brand-accent" />
      </span>
      {!compact && <span className="text-sm font-semibold tracking-[0.28em] text-brand-text sm:text-base">CONECTALAB</span>}
    </Link>
  );
}
