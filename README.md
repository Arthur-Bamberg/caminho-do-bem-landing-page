# Caminho do Bem

Landing e Memória do **Projeto Social Caminho do Bem** — OSC de Canoas e Bagé (RS). Cada Atividade tem uma página pública em Astro; o registro documental fica no Starlight, embaixo da Cidade em que a Atividade é exercida.

O PDF de fotos e oficinas não estava no ambiente de geração. O conteúdo foi reconstruído a partir de fontes públicas (LinkedIn da OSC, Prefeitura de Canoas, anúncios do Espaço da Gurizada e ACESSUAS Trabalho). As fotografias originais da apresentação entram no álbum quando o arquivo for anexado em `public/album/`.

## Paleta

- Fundo branco
- Roxo `#5B2D91` (caminho, títulos, botões)
- Amarelo `#F5C518` (destaques e convites)

## Como rodar

```bash
npm install
npm run dev
```

O servidor sobe em `http://127.0.0.1:4327`.

```bash
npm run build
npm run preview
```

## Mapa do site

| Caminho | O que é |
| --- | --- |
| `/` | Landing |
| `/atividades/` | Lista filtrável (React) |
| `/atividades/[slug]/` | Página de cada Atividade |
| `/cidades/canoas/` e `/cidades/bage/` | Páginas das Cidades |
| `/memoria/` | Porta de entrada do Starlight |
| `/canoas/` e `/bage/` | Memória: Atividades sob a Cidade |

## Stack

Astro 7, React 19, Tailwind CSS 4, Starlight.

## Glossário

Os termos do domínio (Atividade, Oficina, Cidade, Território, Sede, Participante, Memória) estão em `CONTEXT.md`.
