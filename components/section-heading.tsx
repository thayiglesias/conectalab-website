type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
};

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <header className="mb-8 max-w-2xl space-y-3 sm:mb-10">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-accent">{label}</p>
      <h2 className="text-2xl font-semibold leading-tight text-brand-text sm:text-3xl">{title}</h2>
      {description ? <p className="text-sm leading-relaxed text-brand-muted sm:text-base">{description}</p> : null}
    </header>
  );
}
