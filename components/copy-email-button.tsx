'use client';

import { useState } from 'react';

type CopyEmailButtonProps = {
  email: string;
};

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="focus-ring min-h-11 rounded-xl border border-brand-border px-5 text-sm font-medium text-brand-muted transition hover:border-brand-accent hover:text-brand-text"
      aria-label="Copiar e-mail da ConectaLab"
    >
      {copied ? 'E-mail copiado' : 'Copiar e-mail'}
    </button>
  );
}
