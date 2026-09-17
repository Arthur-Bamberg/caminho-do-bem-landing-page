export const brand = {
  name: "Caminho do Bem",
  legalName: "Projeto Social Caminho do Bem",
  tagline: "Cada oficina abre um caminho.",
  foundedYear: 2012,
  phoneDisplay: ["(51) 99924-7503", "(51) 99813-3422"],
  phoneWhatsapp: "5551999247503",
  instagram: "https://www.instagram.com/caminhodobemofc/",
  linkedin: "https://www.linkedin.com/company/caminhodobem",
  address: {
    street: "Avenida Dezessete de Abril, 100",
    extra: "Setor 6, Bairro Guajuviras",
    city: "Canoas",
    state: "RS",
    cep: "92415-000",
  },
} as const;

export type CitySlug = "canoas" | "bage";

export interface City {
  slug: CitySlug;
  name: string;
  state: string;
  since: number;
  territories: string[];
  summary: string;
  story: string;
}

export const cities: City[] = [
  {
    slug: "canoas",
    name: "Canoas",
    state: "RS",
    since: 2018,
    territories: ["Guajuviras", "Fátima"],
    summary:
      "Sede atual. Oficinas de convivência, cultura, esporte, trabalho e cidadania nos bairros Guajuviras e Fátima.",
    story:
      "Desde 2018 o Caminho do Bem atua nos Territórios de Guajuviras e Fátima. A Sede na Avenida Dezessete de Abril, 100, acolhe o Espaço da Gurizada, o grupo de teatro Nação Jovem, as oficinas do Nação Cultura, o ACESSUAS Trabalho e o acolhimento de Famílias, imigrantes e jovens. A cidade é polo de imigração — em especial de pessoas negras vindas do Haiti — e as Atividades de orientação documental e encaminhamento a políticas públicas nasceram dessa realidade. A OSC conta com reconhecimento da Prefeitura Municipal de Canoas, por meio da parceria com a Coordenadoria de Igualdade Racial e Imigrantes.",
  },
  {
    slug: "bage",
    name: "Bagé",
    state: "RS",
    since: 2012,
    territories: ["Bairros periféricos", "Centro e ruas da cidade"],
    summary:
      "Cidade onde a caminhada começou: solidariedade, cultura e cuidado com quem está na rua e nas periferias.",
    story:
      "Em 2012 o Caminho do Bem nasceu em Bagé. As primeiras Atividades foram festas para crianças com doação de brinquedos, o Dia Doce na Páscoa, a arrecadação de cestas básicas, o programa Uma Colher de Amor com marmitas para pessoas em situação de rua e apresentações culturais de teatro. Essa memória não ficou para trás: o jeito de trabalhar — festa, alimento, palco e vizinhança — segue nas Oficinas de Canoas.",
  },
];

export interface Activity {
  slug: string;
  title: string;
  shortTitle: string;
  kind: "oficina" | "programa" | "campanha" | "espaco";
  city: CitySlug;
  audience: string;
  schedule?: string;
  partner?: string;
  summary: string;
  body: string[];
  highlights: string[];
  gallery: { title: string; caption: string; tone: "purple" | "yellow" }[];
}

export const activities: Activity[] = [
  {
    slug: "espaco-da-gurizada",
    title: "Espaço da Gurizada",
    shortTitle: "Gurizada",
    kind: "espaco",
    city: "canoas",
    audience: "Crianças e adolescentes de 5 a 17 anos",
    schedule: "Segunda a sexta, das 14h às 17h",
    partner: "Visão Mundial e UNICEF",
    summary:
      "Espaço seguro no Guajuviras para o brincar intencional, rodas de conversa e garantia de direitos.",
    body: [
      "O Espaço da Gurizada é um espaço seguro para crianças e adolescentes, com atividades lúdicas, recreativas e educativas não-formais. A lógica é o brincar intencional e a roda de conversa, no sentido da garantia de direitos.",
      "A abertura no Território do Guajuviras aconteceu em 25 de julho de 2024. O Caminho do Bem cede a Sede; a Visão Mundial implementa o projeto em parceria com o UNICEF. O grupo é de até 30 Participantes, com avaliação de casos fora da faixa etária.",
      "Aqui a infância não espera a idade adulta para ter lugar. O Espaço é convivência, escuta e proteção no mesmo endereço em que as outras Oficinas acontecem.",
    ],
    highlights: [
      "Até 30 crianças e adolescentes",
      "5 a 17 anos, com avaliação de casos específicos",
      "Sede: Av. Dezessete de Abril, 100, Guajuviras",
    ],
    gallery: [
      {
        title: "Abertura no Guajuviras",
        caption: "25 de julho de 2024 — primeiro dia do Espaço da Gurizada na Sede.",
        tone: "yellow",
      },
      {
        title: "Brincar intencional",
        caption: "Oficinas lúdicas e educativas não-formais, de segunda a sexta.",
        tone: "purple",
      },
    ],
  },
  {
    slug: "nacao-jovem",
    title: "Nação Jovem",
    shortTitle: "Teatro",
    kind: "oficina",
    city: "canoas",
    audience: "Jovens de 14 a 16 anos, com apresentações para a cidade",
    partner: "Prefeitura de Canoas · Igualdade Racial e Imigrantes",
    summary:
      "Grupo de teatro que encena racismo, bullying, automutilação e risco de suicídio — e responde com amizade e solidariedade.",
    body: [
      "O Nação Jovem é o grupo de teatro do Caminho do Bem. Integra o projeto Nação de Todas as Tribos. Cerca de 15 jovens, entre 14 e 16 anos, ensaiam e apresentam a peça Help!, que trata de racismo, bullying, uso de substâncias, automutilação e tentativa de suicídio.",
      "A mensagem final das interpretações destaca empatia, solidariedade e amizade diante do sofrimento de colegas, familiares ou desconhecidos. Parte do elenco carrega o mesmo histórico dos temas — e isso aparece em cena.",
      "O grupo se apresentou na EMEF General Osório para 180 alunos, no Centro de Integração Paulo Paim e na programação do Mês da Consciência Negra de Canoas, em parceria com a Secretaria Adjunta de Igualdade Racial e Imigrantes e com o Rapper Du.",
    ],
    highlights: [
      "Peça Help! em escolas e espaços públicos",
      "Sede no Guajuviras, atuação também no bairro Fátima",
      "Parte do projeto Nação de Todas as Tribos",
    ],
    gallery: [
      {
        title: "Help! na General Osório",
        caption: "Novembro de 2022 — 180 estudantes assistiram à peça no pátio da escola.",
        tone: "purple",
      },
      {
        title: "Consciência Negra",
        caption: "Apresentações com Rapper Du na programação municipal de Canoas.",
        tone: "yellow",
      },
    ],
  },
  {
    slug: "nacao-cultura",
    title: "Nação Cultura",
    shortTitle: "Esporte e cultura",
    kind: "oficina",
    city: "canoas",
    audience: "Crianças, adolescentes e jovens do Território",
    partner: "CUFA RS · Governo do Estado do RS · RS Seguro Esporte",
    summary:
      "Oficinas de esporte e cultura com material conquistado em edital, para ampliar inclusão e convivência.",
    body: [
      "O Nação Cultura reúne as Oficinas esportivas e culturais que acontecem na Sede e no Território. É o braço de prática do cotidiano: bola, ritmo, palco e encontro, com estrutura para quem mora no Guajuviras e no Fátima.",
      "Os materiais do edital RS Seguro Esporte, recebidos com a presença dos próprios jovens, fortalecem as Oficinas e o incentivo à prática. A entrega contou com a CUFA RS, o Governo do Estado, a Secretaria de Assistência Social e a coordenação da CUFA Canoas.",
      "Esporte aqui não é vitrine. É convivência, disciplina afetiva e alternativa concreta em uma região marcada por violência. Cultura e esporte caminham juntos no mesmo projeto.",
    ],
    highlights: [
      "Materiais do edital RS Seguro Esporte",
      "Oficinas na Sede, com os jovens presentes na conquista",
      "Parceria com CUFA RS e Assistência Social de Canoas",
    ],
    gallery: [
      {
        title: "Entrega do edital",
        caption: "Jovens do projeto receberam os materiais esportivos junto com a equipe.",
        tone: "yellow",
      },
      {
        title: "Oficina na Sede",
        caption: "Prática esportiva e cultural no Guajuviras, no mesmo endereço das outras Atividades.",
        tone: "purple",
      },
    ],
  },
  {
    slug: "acessuas-trabalho",
    title: "ACESSUAS Trabalho",
    shortTitle: "Trabalho",
    kind: "programa",
    city: "canoas",
    audience: "Jovens e adultos em busca de colocação e renda",
    partner: "Prefeitura Municipal de Canoas · SUAS",
    summary:
      "Capacitação gratuita para o mundo do trabalho: letramento digital, currículo e orientação profissional.",
    body: [
      "O Programa ACESSUAS Trabalho oferece capacitação gratuita, preparação para o mundo do trabalho, inclusão e letramento digital, elaboração de currículo e orientação profissional com acompanhamento social.",
      "Nasceu da ampliação do trabalho de Canoas: criação de currículos digitalizados e cadastro nas plataformas virtuais de emprego, para quem estava fora do acesso digital e das políticas de trabalho.",
      "As Oficinas acontecem na Sede, em parceria com a Prefeitura e o SUAS. A pré-inscrição é o primeiro passo; o acompanhamento continua depois do currículo.",
    ],
    highlights: [
      "Capacitação gratuita",
      "Currículo digital e cadastro em plataformas de emprego",
      "Orientação profissional e acompanhamento social",
    ],
    gallery: [
      {
        title: "Oficina de currículo",
        caption: "Letramento digital e elaboração de currículo na Sede do Guajuviras.",
        tone: "purple",
      },
      {
        title: "Preparação para o trabalho",
        caption: "Encontros do ACESSUAS Trabalho em parceria com o SUAS de Canoas.",
        tone: "yellow",
      },
    ],
  },
  {
    slug: "orientacao-documental",
    title: "Orientação documental",
    shortTitle: "Documentos",
    kind: "programa",
    city: "canoas",
    audience: "Famílias que precisam regularizar documentos para acessar direitos",
    summary:
      "Acolher, orientar e garantir o acesso aos direitos a partir da organização dos documentos essenciais.",
    body: [
      "Sem documento, a política pública não chega. A orientação documental do Caminho do Bem auxilia Famílias na organização e regularização de documentos essenciais para serviços, benefícios e oportunidades.",
      "O trabalho ganhou visibilidade em reportagem da Record TV com o repórter Rodrigo Moreno. A equipe apresenta à cidade um acompanhamento que parece burocrático e é, na prática, porta de entrada para cidadania.",
      "Essa Atividade conversa com o apoio a imigrantes e com os encaminhamentos ao SUAS: o papel na mão é o primeiro direito.",
    ],
    highlights: [
      "Regularização de documentos essenciais",
      "Acesso a serviços, benefícios e oportunidades",
      "Trabalho reconhecido em reportagem da Record TV",
    ],
    gallery: [
      {
        title: "Mutirão de documentos",
        caption: "Acolhimento na Sede para organizar papéis que abrem portas.",
        tone: "purple",
      },
    ],
  },
  {
    slug: "apoio-imigrantes",
    title: "Apoio a imigrantes",
    shortTitle: "Imigrantes",
    kind: "programa",
    city: "canoas",
    audience: "Pessoas imigrantes em Canoas, em especial famílias haitianas",
    partner: "Coordenadoria de Igualdade Racial e Imigrantes",
    summary:
      "Acompanhamento para regularização de documentos imigratórios e convivência em uma cidade polo de imigração.",
    body: [
      "Canoas é polo de imigração, sobretudo de pessoas negras vindas do Haiti. O Caminho do Bem trabalha diretamente com imigrantes, auxiliando na regularização de documentos imigratórios.",
      "A Atividade se articula com a Coordenadoria de Igualdade Racial e Imigrantes da Prefeitura e com o teatro do Nação Jovem, que leva o tema do racismo para escolas e espaços públicos.",
      "Não é um serviço apartado. É o mesmo Caminho: Sede, escuta, papéis e pertencimento.",
    ],
    highlights: [
      "Regularização de documentos imigratórios",
      "Atuação com famílias haitianas e outras nacionalidades",
      "Parceria com a política municipal de igualdade racial",
    ],
    gallery: [
      {
        title: "Acolhimento na Sede",
        caption: "Orientação para regularização documental de Famílias imigrantes.",
        tone: "yellow",
      },
    ],
  },
  {
    slug: "nova-geracao",
    title: "Nova Geração",
    shortTitle: "Nova Geração",
    kind: "oficina",
    city: "canoas",
    audience: "Crianças do Guajuviras, ao longo de todo o ano",
    summary:
      "Trabalho contínuo com as crianças do Território — convivência, festa e vínculo que não se resume a uma data.",
    body: [
      "O Projeto Nova Geração é o trabalho realizado durante o ano todo com as crianças da Sede no Guajuviras. Não é campanha de dezembro: é rotina de encontro, brincadeira e cuidado.",
      "As festas do Caminho do Bem — aniversários coletivos, encerramentos, Natal — são a parte visível de uma Atividade que acontece semana após semana.",
      "A Nova Geração conversa com o Espaço da Gurizada e com o Nação Cultura: a criança que brinca à tarde é a mesma que aparece na festa e, mais tarde, nas Oficinas de teatro e esporte.",
    ],
    highlights: [
      "Atuação anual, não apenas em datas comemorativas",
      "Crianças da Sede no Guajuviras",
      "Festas como memória pública de um trabalho contínuo",
    ],
    gallery: [
      {
        title: "Festinha no Guajuviras",
        caption: "Celebração das crianças da Nova Geração na Sede de Canoas.",
        tone: "yellow",
      },
    ],
  },
  {
    slug: "volta-as-aulas",
    title: "Volta às Aulas",
    shortTitle: "Volta às Aulas",
    kind: "campanha",
    city: "canoas",
    audience: "Crianças e adolescentes cadastrados na Sede",
    partner: "Visão Mundial",
    summary:
      "Distribuição de kits escolares para que o ano letivo comece com material na mochila.",
    body: [
      "A ação Volta às Aulas acontece na Sede do Guajuviras: kits escolares para crianças e adolescentes cadastrados. Em 17 de fevereiro de 2025 a distribuição foi realizada com apoio da Visão Mundial.",
      "Material escolar é condição de permanência. A campanha é pontual no calendário e contínua na intenção: a criança do Território não pode perder o ano por falta de caderno.",
    ],
    highlights: [
      "Kits escolares na Sede",
      "Crianças e adolescentes já vinculados ao Caminho do Bem",
      "Ação em parceria com a Visão Mundial",
    ],
    gallery: [
      {
        title: "Kits na Sede",
        caption: "17 de fevereiro de 2025 — distribuição de material escolar no Guajuviras.",
        tone: "yellow",
      },
    ],
  },
  {
    slug: "encaminhamentos-sociais",
    title: "Encaminhamentos sociais",
    shortTitle: "Encaminhamentos",
    kind: "programa",
    city: "canoas",
    audience: "Famílias em vulnerabilidade, risco ou fragilidade",
    partner: "Rede SUAS e políticas públicas de Canoas",
    summary:
      "Ponte entre a Família e as políticas públicas: o Caminho do Bem não substitui o Estado, abre a porta.",
    body: [
      "A partir de 2018 as Atividades de Canoas se ampliaram para o encaminhamento às políticas públicas. Famílias em vulnerabilidade encontram na Sede escuta e um caminho até o CRAS, benefícios e serviços da rede.",
      "A Sede no Guajuviras convive com a rede de assistência do Território. Encaminhar é parte do trabalho cotidiano, junto com currículo, documento e convivência.",
      "O Caminho do Bem não se apresenta como substituto da política pública. Apresenta-se como vizinho que conhece a porta.",
    ],
    highlights: [
      "Encaminhamento à rede de assistência e políticas públicas",
      "Escuta na Sede, no Território de Guajuviras e Fátima",
      "Trabalho articulado com o SUAS",
    ],
    gallery: [
      {
        title: "Acolhimento de Famílias",
        caption: "Escuta e encaminhamento na Sede, em diálogo com a rede de Canoas.",
        tone: "purple",
      },
    ],
  },
  {
    slug: "dia-doce",
    title: "Dia Doce",
    shortTitle: "Dia Doce",
    kind: "campanha",
    city: "bage",
    audience: "Crianças de Bagé, na Páscoa",
    summary:
      "Distribuição de chocolates na Páscoa — a festa como linguagem de cuidado, desde o primeiro ano da OSC.",
    body: [
      "O Dia Doce é uma das Atividades de origem, em Bagé, no ano de 2012. Na Páscoa, o Caminho do Bem distribui chocolates para crianças da cidade.",
      "A campanha parece simples e carrega o método da organização: data do calendário popular, presença na rua, afeto concreto. Esse jeito migrou com a OSC para Canoas, nas festas e nas Oficinas.",
    ],
    highlights: [
      "Atividade de origem, Bagé, 2012",
      "Páscoa como tempo de encontro",
      "Crianças da cidade como Participantes",
    ],
    gallery: [
      {
        title: "Páscoa em Bagé",
        caption: "Distribuição de chocolates do Dia Doce, Atividade fundadora da OSC.",
        tone: "yellow",
      },
    ],
  },
  {
    slug: "uma-colher-de-amor",
    title: "Uma Colher de Amor",
    shortTitle: "Colher de Amor",
    kind: "programa",
    city: "bage",
    audience: "Pessoas em situação de rua e Famílias das periferias",
    summary:
      "Marmitas na rua e nos bairros periféricos de Bagé — alimento como primeiro gesto do Caminho.",
    body: [
      "Uma Colher de Amor é o programa de entrega de marmitas para pessoas em situação de rua e nos bairros periféricos de Bagé.",
      "Antes das Oficinas de teatro e do currículo digital, houve comida quente. A Atividade permanece na Memória de Bagé como o gesto que ensinou a OSC a chegar onde o endereço não chega.",
    ],
    highlights: [
      "Marmitas para quem está na rua",
      "Entrega também nas periferias de Bagé",
      "Atividade fundadora da OSC",
    ],
    gallery: [
      {
        title: "Entrega de marmitas",
        caption: "Uma Colher de Amor nas ruas e bairros periféricos de Bagé.",
        tone: "purple",
      },
    ],
  },
  {
    slug: "cestas-basicas",
    title: "Cestas básicas",
    shortTitle: "Cestas",
    kind: "campanha",
    city: "bage",
    audience: "Famílias em insegurança alimentar",
    summary:
      "Arrecadação e distribuição de alimentos para Famílias que não podem esperar a próxima política chegar.",
    body: [
      "A arrecadação e a distribuição de cestas básicas organizam a solidariedade de Bagé em alimento que vai para casa. É campanha recorrente, não caridade de uma tarde.",
      "A Atividade ensinou a OSC a pedir, juntar e entregar com nome e endereço. Em Canoas, o mesmo gesto aparece nas campanhas de brinquedos e de material escolar.",
    ],
    highlights: [
      "Arrecadação comunitária",
      "Entrega para Famílias de Bagé",
      "Base do método de campanha da OSC",
    ],
    gallery: [
      {
        title: "Mutirão de alimentos",
        caption: "Arrecadação e entrega de cestas em Bagé, desde 2012.",
        tone: "yellow",
      },
    ],
  },
  {
    slug: "festa-das-criancas",
    title: "Festa das crianças",
    shortTitle: "Festa",
    kind: "campanha",
    city: "bage",
    audience: "Crianças de Bagé",
    summary:
      "Festa com doação de brinquedos — a infância como centro da caminhada, desde o primeiro município.",
    body: [
      "As festas para as crianças com doação de brinquedos estão entre as primeiras ações de Bagé. A OSC aprendeu a celebrar em público o que faz no cotidiano.",
      "A campanha de brinquedos segue viva: doações podem ser levadas à Sede de Canoas, na Dezessete de Abril, 100. A festa mudou de Cidade; o convite não mudou.",
    ],
    highlights: [
      "Festa e doação de brinquedos desde 2012",
      "Infância como Participante central",
      "Doações também recebidas na Sede de Canoas",
    ],
    gallery: [
      {
        title: "Festa em Bagé",
        caption: "Crianças, brinquedos e palco — a primeira linguagem pública da OSC.",
        tone: "yellow",
      },
    ],
  },
  {
    slug: "teatro-e-cultura",
    title: "Teatro e cultura em Bagé",
    shortTitle: "Teatro em Bagé",
    kind: "oficina",
    city: "bage",
    audience: "Comunidade de Bagé",
    summary:
      "Peças e apresentações culturais que nasceram em Bagé e depois ganharam o Nação Jovem em Canoas.",
    body: [
      "Antes do Nação Jovem, já havia palco. Em Bagé o Caminho do Bem organizava apresentações culturais e peças de teatro junto com as ações solidárias.",
      "Quando a OSC chegou a Canoas e encontrou altas taxas de criminalidade e violência, ampliou a atuação cultural pela arte dramática. A Memória de Bagé explica o teatro de Canoas: o palco já era método.",
    ],
    highlights: [
      "Apresentações culturais desde a origem",
      "Teatro como linguagem da OSC, não como enfeite",
      "Continuidade no Nação Jovem, em Canoas",
    ],
    gallery: [
      {
        title: "Palco em Bagé",
        caption: "Apresentações culturais que antecedem o teatro de Canoas.",
        tone: "purple",
      },
    ],
  },
];

export const kindLabel: Record<Activity["kind"], string> = {
  oficina: "Oficina",
  programa: "Programa",
  campanha: "Campanha",
  espaco: "Espaço",
};

export function cityBySlug(slug: string) {
  return cities.find((city) => city.slug === slug);
}

export function activityBySlug(slug: string) {
  return activities.find((activity) => activity.slug === slug);
}

export function activitiesByCity(slug: CitySlug) {
  return activities.filter((activity) => activity.city === slug);
}

export function cityName(slug: CitySlug) {
  return cityBySlug(slug)?.name ?? slug;
}

export const partners = [
  "Prefeitura Municipal de Canoas",
  "SUAS",
  "Coordenadoria de Igualdade Racial e Imigrantes",
  "Visão Mundial",
  "UNICEF",
  "CUFA RS",
  "Governo do Estado do Rio Grande do Sul",
  "RS Seguro Esporte",
];
