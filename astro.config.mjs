// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://caminhodobem.org',
  trailingSlash: 'always',
  server: {
    host: true,
    port: 4327,
  },
  integrations: [
    starlight({
      title: 'Memória das atividades',
      defaultLocale: 'root',
      locales: {
        root: { label: 'Português', lang: 'pt-BR' },
      },
      description:
        'Registro de cada Atividade do Caminho do Bem, organizado pela Cidade em que é exercida.',
      logo: {
        src: './src/assets/logo.svg',
        alt: 'Caminho do Bem',
      },
      favicon: '/favicon.svg',
      social: [
        {
          icon: 'instagram',
          label: 'Instagram',
          href: 'https://www.instagram.com/caminhodobemofc/',
        },
        {
          icon: 'linkedin',
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/company/caminhodobem',
        },
      ],
      customCss: ['./src/styles/starlight.css'],
      components: {
        ThemeSelect: './src/components/starlight/ThemeSelect.astro',
        Header: './src/components/starlight/Header.astro',
      },
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: '',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Nunito+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap',
          },
        },
      ],
      sidebar: [
        {
          label: 'O site',
          items: [
            { label: 'Página inicial', link: '/' },
            { label: 'Atividades', link: '/atividades/' },
            { label: 'Cidades', link: '/cidades/' },
          ],
        },
        {
          label: 'Canoas',
          autogenerate: { directory: 'canoas' },
        },
        {
          label: 'Bagé',
          autogenerate: { directory: 'bage' },
        },
      ],
    }),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
