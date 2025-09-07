export type Recipe = {
  slug: string;
  title: string;
  summary: string;
  cover: string;
  leftoversFrom: string; // origem da sobra
  ingredients: string[];
  steps: string[];
  tips?: string[];
};

export const recipes: Recipe[] = [
  {
    slug: "risoto-de-frango-de-sobra",
    title: "Risoto de Frango (com sobra do almoço)",
    summary: "Cremoso, rápido e perfeito para aproveitar frango desfiado.",
    cover:
      "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
    leftoversFrom: "Frango assado ou cozido",
    ingredients: [
      "1 xíc. frango desfiado (sobra)",
      "1 xíc. arroz arbóreo",
      "1/2 cebola picada",
      "1 dente de alho",
      "1/2 xíc. vinho branco (opcional)",
      "3 xíc. caldo quente",
      "2 col. sopa manteiga",
      "2 col. sopa parmesão",
      "Salsinha, sal e pimenta",
    ],
    steps: [
      "Refogue cebola e alho na manteiga.",
      "Junte o arroz e toste por 1 min; adicione o vinho e deixe evaporar.",
      "Acrescente caldo aos poucos, mexendo, até o ponto cremoso.",
      "Misture o frango, ajuste sal e pimenta, finalize com parmesão e salsinha.",
    ],
    tips: ["Sirva imediatamente para manter a cremosidade."],
  },
  {
    slug: "bolinho-de-arroz-assado",
    title: "Bolinho de Arroz Assado",
    summary: "Crocante por fora, macio por dentro — sem fritura.",
    cover:
      "https://images.pexels.com/photos/208537/pexels-photo-208537.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
    leftoversFrom: "Arroz branco",
    ingredients: [
      "2 xíc. arroz cozido (sobra)",
      "1 ovo",
      "3 col. sopa queijo ralado",
      "2 col. sopa farinha de trigo",
      "Cheiro-verde, sal e pimenta",
    ],
    steps: [
      "Misture tudo até dar liga.",
      "Modele bolinhos, coloque em assadeira untada.",
      "Asse 200 °C por 20–25 min, virando na metade.",
    ],
  },
  {
    slug: "escondidinho-de-carne-de-panela",
    title: "Escondidinho de Carne de Panela",
    summary: "Reaproveita carne desfiada com purê aveludado.",
    cover:
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
    leftoversFrom: "Carne de panela",
    ingredients: [
      "2 xíc. carne desfiada (sobra)",
      "2 xíc. purê de batatas",
      "1/2 cebola + alho",
      "Queijo para gratinar",
    ],
    steps: [
      "Refogue a carne com cebola/alho.",
      "Monte camadas: carne + purê.",
      "Cubra com queijo e leve ao forno para gratinar.",
    ],
  },
  {
    slug: "cuscuz-de-sobras-com-legumes",
    title: "Cuscuz de Sobras com Legumes",
    summary: "Colorido, leve e ótimo para limpar a geladeira.",
    cover:
      "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
    leftoversFrom: "Legumes e frango",
    ingredients: [
      "1 xíc. cuscuz marroquino",
      "1 xíc. água quente",
      "Legumes picados (sobra)",
      "Azeite, limão, sal",
    ],
    steps: [
      "Hidrate o cuscuz com água quente.",
      "Solte com garfo, misture os legumes, tempere com azeite e limão.",
    ],
  },
  {
    slug: "burrito-de-frango-de-sobra",
    title: "Burrito de Frango (reaproveitamento)",
    summary: "Rápido e prático com frango desfiado.",
    cover:
      "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
    leftoversFrom: "Frango desfiado",
    ingredients: [
      "Tortilhas",
      "Frango desfiado (sobra)",
      "Feijão, arroz, queijo",
      "Molho a gosto",
    ],
    steps: [
      "Aqueça a tortilha, recheie com as sobras.",
      "Feche e sele na frigideira para dourar.",
    ],
  },
  {
    slug: "panqueca-de-sobras",
    title: "Panqueca de Sobras",
    summary: "Use legumes e carnes que sobraram no recheio.",
    cover:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
    leftoversFrom: "Carne/legumes",
    ingredients: [
      "Massa de panqueca",
      "Recheio de sobras (carne/legumes)",
      "Molho e queijo",
    ],
    steps: [
      "Recheie as panquecas com as sobras.",
      "Cubra com molho e queijo, leve ao forno para gratinar.",
    ],
  },
];
