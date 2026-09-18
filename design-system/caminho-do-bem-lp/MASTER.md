# Design System — Caminho do Bem

Fonte de verdade visual da landing e das páginas de Atividade. A Memória (Starlight) herda as cores e a tipografia, com densidade de leitura de documentação.

## Produto

Landing e portfólio de uma OSC de convivência, cultura, esporte e acesso a direitos. Público: famílias do Território, parceiros, voluntários e apoiadores.

## Direção

Branco como palco. Roxo como caminho e autoridade afetiva. Amarelo como calor, festa e destaque. Sem fundo escuro. Sem laranja no lugar do amarelo.

## Cores

| Token | Hex | Uso |
| --- | --- | --- |
| `--cdb-white` | `#FFFFFF` | Fundo de página, cards, Memória |
| `--cdb-paper` | `#FBF8FF` | Faixas suaves, álbum de fotos |
| `--cdb-purple` | `#5B2D91` | Primária, links, botões, caminhos |
| `--cdb-purple-deep` | `#3D1A6B` | Títulos sobre amarelo, hover |
| `--cdb-purple-soft` | `#EDE4F8` | Chips, linhas, hover de card |
| `--cdb-yellow` | `#F5C518` | CTA secundário, marcas, selos |
| `--cdb-yellow-soft` | `#FFF4C4` | Fundos de destaque |
| `--cdb-ink` | `#1C1230` | Texto principal |
| `--cdb-muted` | `#5C5470` | Texto de apoio |

Contraste texto/roxo sobre branco e texto escuro sobre amarelo acima de 4.5:1. Não usar cinza-sobre-cinza.

## Tipografia

- Display e corpo: **Poppins** (títulos, hero, nomes de Atividade, parágrafos, navegação, formulários)
- Base 16px, interlinhamento 1.55, rótulos em caixa alta com tracking amplo

## Layout

- Mobile-first. Conteúdo em coluna até 720px; grade de cards a partir de 768px.
- Largura máxima 1120px. Respiração 24–64px nas seções da LP; 8–32px na Memória.
- Sem scroll horizontal. Alvos de toque ≥ 44px.

## Componentes

- Botão primário: fundo roxo, texto branco, raio 999px.
- Botão amarelo: fundo amarelo, texto roxo profundo.
- Card de Atividade: branco, borda lilás, foto/ilustração 4:3, selo da Cidade em amarelo.
- Álbum: moldura branca tipo portfólio, legenda real abaixo, nunca placeholder “lorem”.

## Movimento

Microinterações curtas (150–220ms). Hover não é o único sinal — foco visível e estado ativo no toque. Respeitar `prefers-reduced-motion`.

## Anti-padrões

- Emoji no lugar de ícone
- Hero com texto branco sobre foto escura (o fundo é branco)
- Misturar skeuomorfismo com flat
- Inventar fotos de Participantes; registros visuais são ilustrações ou legendas de ações públicas
