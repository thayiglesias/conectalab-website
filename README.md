# CONECTALAB Website

Landing page institucional de 1 página, desenvolvida com Next.js (App Router), TypeScript e Tailwind CSS.

## Visão geral

O projeto foi pensado para uso institucional e presença online da CONECTALAB, com foco em:

- visual minimalista e premium;
- leitura rápida em mobile;
- CTA principal para WhatsApp;
- seções essenciais para cadastro e validação em plataformas como Meta.

## Tecnologias

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Como rodar localmente

1. Instale dependências:

```bash
npm install
```

2. Execute em modo de desenvolvimento:

```bash
npm run dev
```

3. Abra no navegador:

```text
http://localhost:3000
```

## Build de produção

```bash
npm run build
npm run start
```

## Deploy na Vercel

1. Suba este repositório para o GitHub.
2. No painel da Vercel, clique em **Add New Project**.
3. Importe o repositório.
4. Configure as variáveis de ambiente com base no `.env.example`.
5. Clique em **Deploy**.

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e ajuste valores conforme necessário:

- `NEXT_PUBLIC_INSTAGRAM_URL`
- `NEXT_PUBLIC_LINKEDIN_URL`
- `NEXT_PUBLIC_WHATSAPP_URL`
- `NEXT_PUBLIC_EMAIL`

O projeto possui fallback padrão para os links caso as variáveis não sejam definidas.

## Onde editar conteúdos

- Textos e seções da landing page: `app/page.tsx`
- Metadados SEO/Open Graph: `app/layout.tsx`
- Componentes reutilizáveis:
  - `components/logo.tsx`
  - `components/section-heading.tsx`
  - `components/contact-buttons.tsx`
  - `components/copy-email-button.tsx`
- Estilos globais e tokens utilitários: `app/globals.css`
- Paleta e tema do Tailwind: `tailwind.config.ts`
- Favicon: `public/favicon.svg`

## Observações

- Slogan escolhido: **"Conectamos marcas a experiências inteligentes."**
- Opção alternativa considerada: **"Automação e IA para atendimento e crescimento."**
