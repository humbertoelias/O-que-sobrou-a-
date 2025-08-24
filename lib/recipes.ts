export interface Recipe {
  id: string;
  slug: string;
  title: string;
  description: string;
  emoji: string;
  cookTime: string;
  servings: number;
  difficulty: 'Fácil' | 'Média' | 'Difícil';
  ingredients: string[];
  complementaryIngredients: string[];
  instructions: string[];
  tips: string[];
  tags: string[];
  nutrition?: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
}

export const recipes: Recipe[] = [
  {
    id: '1',
    slug: 'arroz-carreteiro-sobras-churrasco',
    title: 'Arroz Carreteiro de Sobras de Churrasco',
    description: 'Transforme sobras de churrasco em um delicioso arroz carreteiro gaúcho, cheio de sabor e tradição.',
    emoji: '🍖',
    cookTime: '25 min',
    servings: 4,
    difficulty: 'Fácil',
    ingredients: [
      '3 xícaras de arroz cozido (sobra)',
      '300g de carne assada picada (sobras de churrasco)',
      '200g de linguiça calabresa em fatias',
      '1 cebola média picada',
      '3 dentes de alho picados'
    ],
    complementaryIngredients: [
      '2 colheres de sopa de óleo',
      '1 tomate picado',
      '1/2 xícara de caldo de carne',
      'Sal e pimenta a gosto',
      'Salsinha picada para finalizar',
      '2 ovos (opcional)'
    ],
    instructions: [
      'Aqueça o óleo em uma panela grande e refogue a cebola e o alho até dourar.',
      'Adicione a linguiça calabresa e deixe dourar por 3-4 minutos.',
      'Acrescente a carne assada picada e o tomate, refogue por mais 2 minutos.',
      'Adicione o arroz cozido e misture bem, quebrando os grãos grudados.',
      'Regue com o caldo de carne aos poucos, mexendo sempre.',
      'Tempere com sal e pimenta, cozinhe por 8-10 minutos em fogo médio.',
      'Se desejar, faça dois buracos no arroz e quebre os ovos, misture quando estiverem cozidos.',
      'Finalize com salsinha picada e sirva quente.'
    ],
    tips: [
      'Use carnes variadas do churrasco para mais sabor',
      'O arroz pode estar ressecado - o caldo vai hidratá-lo',
      'Adicione pimentão colorido para mais cor e sabor',
      'Sirva com farofa de banana para acompanhar'
    ],
    tags: ['Gaúcho', 'Churrasco', 'Arroz', 'Tradicional'],
    nutrition: {
      calories: 420,
      protein: '28g',
      carbs: '45g',
      fat: '15g'
    }
  },
  {
    id: '2',
    slug: 'bolinho-arroz-queijo-assado',
    title: 'Bolinho de Arroz com Queijo (Assado/Frito/Airfryer)',
    description: 'Bolinhos crocantes feitos com arroz que sobrou, recheados com queijo derretido. Três formas de preparo!',
    emoji: '🧀',
    cookTime: '30 min',
    servings: 6,
    difficulty: 'Fácil',
    ingredients: [
      '2 xícaras de arroz cozido (sobra)',
      '150g de queijo mussarela em cubos',
      '2 ovos batidos',
      '1/2 xícara de farinha de trigo'
    ],
    complementaryIngredients: [
      '1/4 xícara de leite',
      '2 colheres de sopa de cebolinha picada',
      'Sal e pimenta a gosto',
      'Farinha de rosca para empanar',
      'Óleo para fritar (se escolher fritar)'
    ],
    instructions: [
      'Amasse bem o arroz cozido com um garfo até formar uma massa homogênea.',
      'Misture os ovos batidos, farinha de trigo, leite e temperos.',
      'Adicione a cebolinha e misture bem a massa.',
      'Com as mãos úmidas, pegue uma porção da massa e coloque um cubo de queijo no centro.',
      'Feche bem formando bolinhos e passe na farinha de rosca.',
      'FORNO: Asse a 200°C por 20-25 minutos até dourar.',
      'FRITURA: Frite em óleo quente até dourar (3-4 minutos).',
      'AIRFRYER: Cozinhe a 180°C por 12-15 minutos, virando na metade.',
      'Sirva quente para o queijo estar derretido.'
    ],
    tips: [
      'Deixe o arroz esfriar antes de usar',
      'Mantenha as mãos úmidas para não grudar',
      'Teste a temperatura do óleo com um pedacinho da massa',
      'Congele os bolinhos crus para usar depois'
    ],
    tags: ['Arroz', 'Queijo', 'Lanche', 'Versátil'],
    nutrition: {
      calories: 280,
      protein: '12g',
      carbs: '32g',
      fat: '12g'
    }
  },
  {
    id: '3',
    slug: 'escondidinho-frango-pure-mandioca',
    title: 'Escondidinho de Frango Desfiado com Purê de Mandioca',
    description: 'Um escondidinho brasileiro autêntico usando frango que sobrou e cremoso purê de mandioca.',
    emoji: '🥔',
    cookTime: '45 min',
    servings: 6,
    difficulty: 'Média',
    ingredients: [
      '400g de frango cozido desfiado (sobras)',
      '1kg de mandioca descascada',
      '1 cebola média picada',
      '2 tomates picados'
    ],
    complementaryIngredients: [
      '200ml de leite morno',
      '3 colheres de sopa de manteiga',
      '200g de queijo mussarela ralado',
      '1/2 xícara de milho verde',
      '1/4 xícara de azeitona verde picada',
      'Sal, pimenta e cheiro-verde a gosto',
      '2 colheres de sopa de azeite'
    ],
    instructions: [
      'Cozinhe a mandioca em água com sal até ficar macia (20-25 minutos).',
      'Escorra e amasse a mandioca ainda quente com manteiga e leite até formar um purê cremoso.',
      'Tempere o purê com sal e pimenta, reserve.',
      'Aqueça o azeite e refogue a cebola até dourar.',
      'Adicione o tomate e cozinhe até formar um molho.',
      'Acrescente o frango desfiado, milho e azeitona, tempere e refogue por 5 minutos.',
      'Em um refratário, coloque o frango refogado como base.',
      'Cubra com o purê de mandioca, espalhando uniformemente.',
      'Polvilhe o queijo ralado por cima.',
      'Leve ao forno pré-aquecido a 200°C por 20-25 minutos até gratinar.',
      'Finalize com cheiro-verde picado antes de servir.'
    ],
    tips: [
      'Escolha mandioca bem macia para o purê ficar cremoso',
      'Tempere bem o frango para não ficar sem sabor',
      'Deixe esfriar um pouco antes de cortar',
      'Acompanha bem com salada verde'
    ],
    tags: ['Frango', 'Mandioca', 'Gratinado', 'Comfort Food'],
    nutrition: {
      calories: 380,
      protein: '25g',
      carbs: '35g',
      fat: '16g'
    }
  }
];