import Link from 'next/link';

type ContactButtonsProps = {
  instagramUrl: string;
  linkedinUrl: string;
  whatsappUrl: string;
  email: string;
};

const buttonStyle =
  'focus-ring inline-flex min-h-11 items-center justify-center rounded-xl border border-brand-border bg-white px-5 text-sm font-medium text-brand-text transition duration-200 hover:-translate-y-0.5 hover:border-brand-accent';

export function ContactButtons({ instagramUrl, linkedinUrl, whatsappUrl, email }: ContactButtonsProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <Link href={instagramUrl} target="_blank" rel="noreferrer" className={buttonStyle} aria-label="Abrir Instagram da ConectaLab">
        Instagram
      </Link>
      <Link href={linkedinUrl} target="_blank" rel="noreferrer" className={buttonStyle} aria-label="Abrir LinkedIn da ConectaLab">
        LinkedIn
      </Link>
      <Link href={whatsappUrl} target="_blank" rel="noreferrer" className={buttonStyle} aria-label="Iniciar conversa no WhatsApp da ConectaLab">
        WhatsApp
      </Link>
      <Link href={`mailto:${email}`} className={buttonStyle} aria-label="Enviar e-mail para ConectaLab">
        E-mail
      </Link>
    </div>
  );
}
