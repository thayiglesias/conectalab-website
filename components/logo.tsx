import Image from 'next/image';
import Link from 'next/link';

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link href="#top" className="focus-ring inline-flex items-center rounded-md p-1" aria-label="Ir para o topo da página">
      <Image
        src="/logo.svg"
        alt="Logo CONECTALAB"
        width={compact ? 132 : 168}
        height={compact ? 34 : 42}
        priority
        className="h-auto w-auto"
      />
    </Link>
  );
}
