import Link from 'next/link';
import { ContactButtons } from '@/components/contact-buttons';
import { CopyEmailButton } from '@/components/copy-email-button';
import { Logo } from '@/components/logo';
import { SectionHeading } from '@/components/section-heading';

const menuItems = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' }
];

const services = [
  {
    title: 'Automação de atendimento',
    description: 'Fluxos inteligentes para reduzir tempo de resposta e elevar consistência no relacionamento com clientes.'
  },
  {
    title: 'Agentes de IA',
    description: 'Assistentes conversacionais sob medida para qualificação, suporte inicial e rotinas operacionais.'
  },
  {
    title: 'Integrações estratégicas',
    description: 'Conexões entre WhatsApp, Instagram, CRM e ferramentas internas para operação mais enxuta.'
  },
  {
    title: 'Design conversacional',
    description: 'Estrutura de linguagem clara e humana para tornar cada conversa mais eficiente e natural.'
  },
  {
    title: 'Otimização e analytics',
    description: 'Acompanhamento contínuo com ajustes baseados em dados para manter evolução de performance.'
  }
];

const steps = [
  {
    title: 'Diagnóstico',
    description: 'Mapeamos contexto, canais e objetivos para desenhar prioridades com clareza.'
  },
  {
    title: 'Implementação',
    description: 'Colocamos soluções no ar com agilidade e atenção aos detalhes técnicos e de linguagem.'
  },
  {
    title: 'Otimização',
    description: 'Refinamos fluxos e mensagens continuamente para ampliar resultados e experiência.'
  }
];

const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/conectalab.co';
const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/company/conectalab';
const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL || 'https://wa.me/5500000000000';
const email = process.env.NEXT_PUBLIC_EMAIL || 'contato@conectalab.co';

export default function HomePage() {
  return (
    <div id="top" className="min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-border/60 bg-brand-bg/85 backdrop-blur-md">
        <div className="section-shell flex h-16 items-center justify-between gap-4">
          <Logo />
          <nav aria-label="Navegação principal">
            <ul className="flex items-center gap-4 text-sm text-brand-muted sm:gap-6">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="focus-ring rounded-md px-1 py-1 transition hover:text-brand-text" aria-label={`Ir para seção ${item.label}`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="pb-16 pt-24 sm:pt-28">
        <section className="section-shell flex min-h-[70vh] items-center py-12 sm:py-16">
          <div className="w-full rounded-2xl border border-brand-border bg-brand-panel/50 p-8 shadow-soft sm:p-12">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brand-accent">Studio de automação e IA</p>
            <h1 className="max-w-3xl text-3xl font-semibold leading-tight text-brand-text sm:text-5xl">
              Conectamos marcas a experiências inteligentes.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-brand-muted sm:text-lg">
              A CONECTALAB desenvolve operações conversacionais para negócios digitais e serviços, unindo estratégia, tecnologia e linguagem humana para atendimento e crescimento.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex min-h-11 items-center justify-center rounded-xl bg-brand-accent px-6 text-sm font-medium text-brand-text transition hover:opacity-90"
                aria-label="Falar no WhatsApp da ConectaLab"
              >
                Falar no WhatsApp
              </Link>
              <Link
                href="#"
                className="focus-ring inline-flex min-h-11 items-center justify-center rounded-xl border border-brand-border px-6 text-sm font-medium text-brand-text transition hover:border-brand-accent"
                aria-label="Ver portfólio da ConectaLab"
              >
                Ver portfólio
              </Link>
            </div>
          </div>
        </section>

        <section id="servicos" className="section-shell py-12 sm:py-16">
          <SectionHeading
            label="Serviços"
            title="Soluções para atendimento inteligente e operação eficiente"
            description="Projetamos e implementamos sistemas conversacionais focados em resultado, sem complexidade desnecessária."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-2xl border border-brand-border bg-brand-panel/70 p-5 shadow-soft">
                <h3 className="text-base font-semibold text-brand-text">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="como-funciona" className="section-shell py-12 sm:py-16">
          <SectionHeading
            label="Como funciona"
            title="Processo simples, execução rápida"
            description="Mantemos uma estrutura clara em três etapas para acelerar implementação e gerar evolução contínua."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {steps.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-brand-border bg-brand-panel/70 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-brand-accent">Etapa {index + 1}</p>
                <h3 className="mt-2 text-base font-semibold text-brand-text">{step.title}</h3>
                <p className="mt-3 text-sm text-brand-muted">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="sobre" className="section-shell py-12 sm:py-16">
          <SectionHeading label="Sobre" title="Tech consultiva com visão prática" />
          <p className="max-w-3xl text-sm leading-relaxed text-brand-muted sm:text-base">
            A ConectaLab é uma consultoria boutique de tecnologia conversacional. Atuamos com clareza, rapidez e foco em resultados reais, traduzindo inovação em operações que funcionam no dia a dia. Nosso compromisso é entregar qualidade técnica com comunicação humana e parceria próxima.
          </p>
        </section>

        <section id="contato" className="section-shell py-12 sm:py-16">
          <SectionHeading
            label="Contato"
            title="Vamos conversar sobre seu projeto"
            description="Escolha o canal mais confortável para você. Retorno rápido e objetivo."
          />
          <ContactButtons instagramUrl={instagramUrl} linkedinUrl={linkedinUrl} whatsappUrl={whatsappUrl} email={email} />
          <div className="mt-4">
            <CopyEmailButton email={email} />
          </div>
        </section>
      </main>

      <footer className="border-t border-brand-border/70 py-6">
        <div className="section-shell flex items-center justify-between gap-3">
          <Logo compact />
          <p className="text-xs text-brand-muted">© {new Date().getFullYear()} CONECTALAB. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
