// Receitas demonstrativas: depois, elas podem vir de um banco de dados.
const recipes = [
  {
    id: 1, name: "Brigadeiro tradicional", country: "Brasil", time: "25 min", level: "Fácil",
    image: "https://redefoodservice.com.br/wp-content/uploads/2023/01/Brigadeiro2.jpg",
    description: "O clássico brasileiro cremoso, perfeito para compartilhar.",
    ingredients: ["1 lata de leite condensado", "2 colheres de chocolate em pó", "1 colher de manteiga", "Granulado para finalizar"],
    steps: ["Misture o leite condensado, o chocolate e a manteiga em uma panela.", "Cozinhe em fogo baixo, mexendo sempre, até desgrudar do fundo.", "Espere esfriar, enrole e passe no granulado."]
  },
  {
    id: 2, name: "Pudim de leite", country: "Brasil", time: "1h 20 min", level: "Médio",
    image: "https://i.pinimg.com/736x/bb/b4/62/bbb4620a971318867d7117878152c7ea.jpg",
    description: "Pudim macio com calda de caramelo brilhante.",
    ingredients: ["1 lata de leite condensado", "A mesma medida de leite", "3 ovos", "1 xícara de açúcar para a calda"],
    steps: ["Derreta o açúcar até formar um caramelo e espalhe na forma.", "Bata o leite condensado, o leite e os ovos.", "Despeje na forma e asse em banho-maria até firmar. Deixe gelar antes de desenformar."]
  },
  
   {
    id: 3,
    name: "Brownie recheado",
    country: "Estados Unidos",
    time: "50 min",
    level: "Médio",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85",
    description: "Brownie intenso de chocolate com recheio cremoso e textura irresistível.",
    ingredients: [
        "200 g de chocolate meio amargo",
        "150 g de manteiga",
        "1 xícara de açúcar",
        "3 ovos",
        "¾ de xícara de farinha de trigo",
        "200 g de Nutella ou doce de leite"
    ],
    steps: [
        "Derreta o chocolate com a manteiga.",
        "Misture os ovos e o açúcar.",
        "Acrescente o chocolate derretido e a farinha.",
        "Despeje metade da massa em uma forma.",
        "Adicione o recheio e cubra com o restante da massa.",
        "Asse a 180 °C por aproximadamente 30 minutos."
    ]
  },
  {
    id: 4, name: "Tiramisu", country: "Itália", time: "30 min + geladeira", level: "Médio",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=85",
    description: "Sobremesa italiana com café, creme delicado e cacau.",
    ingredients: ["250 g de mascarpone", "2 ovos", "½ xícara de açúcar", "Café forte frio", "Biscoito champagne", "Cacau em pó"],
    steps: ["Prepare um creme batendo as gemas com açúcar e misturando o mascarpone.", "Incorpore delicadamente as claras em neve.", "Passe os biscoitos rapidamente no café e monte camadas com o creme.", "Leve à geladeira e finalize com cacau."]
  },
  {
    id: 5, name: "Pastel de nata", country: "Portugal", time: "50 min", level: "Médio",
    image: "https://i.pinimg.com/736x/3c/92/c0/3c92c00017072b39a5e8a16753e5b1b1.jpg",
    description: "Doce português com massa folhada e creme aromático.",
    ingredients: ["Massa folhada", "250 ml de leite", "150 g de açúcar", "3 gemas", "Casca de limão", "Canela"],
    steps: ["Aqueça o leite com a casca de limão.", "Faça uma calda com açúcar e um pouco de água.", "Misture gemas, leite e calda até formar o creme.", "Distribua em forminhas com massa folhada e asse em forno bem quente até dourar."]
  },
  {
    id: 6, name: "Panquecas americanas", country: "Estados Unidos", time: "20 min", level: "Fácil",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=85",
    description: "Panquecas fofinhas para um café da manhã especial.",
    ingredients: ["1 xícara de farinha", "1 colher de açúcar", "1 colher de fermento", "1 ovo", "¾ de xícara de leite", "2 colheres de manteiga derretida"],
    steps: ["Misture os ingredientes secos.", "Acrescente ovo, leite e manteiga, mexendo só até incorporar.", "Coloque pequenas porções em frigideira untada e vire quando surgirem bolhas."]
  }
,
{

  id: 7,
  name: "Banoffee",
  country: "Inglaterra",
  time: "40 min + geladeira",
  level: "Fácil",
  image: "https://i.pinimg.com/736x/01/bd/b4/01bdb4dbbb4bbe271945b5fb54aedfb9.jpg",
  description: "Torta inglesa irresistível com banana, doce de leite, chantilly e base crocante.",
  ingredients: [
    "200 g de biscoito maisena",
    "100 g de manteiga derretida",
    "400 g de doce de leite",
    "4 bananas maduras",
    "300 ml de creme de leite fresco gelado",
    "2 colheres de açúcar",
    "Canela ou chocolate em pó para decorar"
  ],
  steps: [
    "Triture os biscoitos até formar uma farofa fina.",
    "Misture com a manteiga derretida até obter uma massa úmida.",
    "Forre o fundo de uma forma de fundo removível e leve à geladeira por 20 minutos.",
    "Espalhe o doce de leite sobre a base.",
    "Corte as bananas em rodelas e distribua sobre o doce de leite.",
    "Bata o creme de leite fresco com o açúcar até formar chantilly.",
    "Cubra as bananas com o chantilly.",
    "Finalize com canela ou chocolate em pó e leve à geladeira por pelo menos 2 horas."
  ]
},

{
  id: 8,
  name: "Crème brûlée",
  country: "França",
  time: "1h + geladeira",
  level: "Médio",
  image: "https://i.pinimg.com/736x/2f/8e/d8/2f8ed8b68fed0ee3eaf82d63c307e5ab.jpg",
  description: "Sobremesa francesa com creme delicado de baunilha e cobertura crocante de açúcar caramelizado.",
  ingredients: [
    "500 ml de creme de leite fresco",
    "5 gemas",
    "100 g de açúcar",
    "1 colher de chá de essência de baunilha",
    "Açúcar cristal para caramelizar"
  ],
  steps: [
    "Preaqueça o forno a 150 °C.",
    "Aqueça o creme de leite com a baunilha sem deixar ferver.",
    "Em uma tigela, misture as gemas com o açúcar.",
    "Adicione o creme quente lentamente, mexendo para não cozinhar as gemas.",
    "Distribua a mistura em pequenos recipientes próprios para forno.",
    "Coloque os recipientes em uma assadeira com água quente para assar em banho-maria.",
    "Asse por aproximadamente 35 a 45 minutos, até as bordas firmarem e o centro continuar levemente tremendo.",
    "Leve à geladeira por pelo menos 3 horas.",
    "Polvilhe açúcar sobre cada porção e caramelize com um maçarico culinário antes de servir."
  ]
},

{
  id: 9,
  name: "Pavlova de morango",
  country: "Austrália/Nova Zelândia",
  time: "1h 40 min",
  level: "Médio",
  image: "https://i.pinimg.com/736x/19/4f/f7/194ff789f450937c2668ed534115d28c.jpg",
  description: "Sobremesa delicada com merengue crocante, interior macio, chantilly e morangos frescos.",
  ingredients: [
    "4 claras de ovos",
    "200 g de açúcar refinado",
    "1 colher de chá de vinagre branco",
    "1 colher de sopa de amido de milho",
    "300 ml de creme de leite fresco",
    "2 colheres de açúcar para o chantilly",
    "250 g de morangos frescos"
  ],
  steps: [
    "Preaqueça o forno a 120 °C.",
    "Bata as claras até começarem a formar espuma.",
    "Acrescente o açúcar aos poucos, batendo até obter um merengue firme e brilhante.",
    "Incorpore delicadamente o vinagre e o amido de milho.",
    "Modele o merengue em formato circular sobre papel-manteiga.",
    "Asse por aproximadamente 1 hora e 15 minutos.",
    "Desligue o forno e deixe o merengue esfriar completamente dentro dele.",
    "Bata o creme de leite com o açúcar até formar chantilly.",
    "Cubra o merengue com chantilly e finalize com os morangos cortados."
  ]
},

{
  id: 10,
  name: "Brigadeiro de pistache",
  country: "Brasil",
  time: "30 min",
  level: "Fácil",
  image: "https://i.pinimg.com/1200x/fc/3a/f5/fc3af502c5e3cbdf7f9c9e4c4053b068.jpg",
  description: "Versão sofisticada do brigadeiro brasileiro, com sabor intenso de pistache.",
  ingredients: [
    "1 lata de leite condensado",
    "100 g de creme de leite",
    "2 colheres de pasta de pistache sem açúcar",
    "1 colher de manteiga",
    "Pistaches triturados para decorar"
  ],
  steps: [
    "Coloque o leite condensado, o creme de leite, a pasta de pistache e a manteiga em uma panela.",
    "Misture todos os ingredientes até obter um creme uniforme.",
    "Cozinhe em fogo baixo, mexendo constantemente.",
    "Continue até a mistura engrossar e desgrudar do fundo da panela.",
    "Transfira para um prato untado e deixe esfriar completamente.",
    "Modele pequenas bolinhas com as mãos untadas.",
    "Passe os brigadeiros nos pistaches triturados antes de servir."
  ]
},

{
  id: 11,
  name: "Red Velvet",
  country: "Estados Unidos",
  time: "1h 20 min",
  level: "Médio",
  image: "https://i.pinimg.com/1200x/cc/dc/59/ccdc593977266ae81524a87a07916086.jpg",
  description: "Bolo americano de massa vermelha aveludada com recheio cremoso de cream cheese.",
  ingredients: [
    "2 xícaras de farinha de trigo",
    "1 xícara de açúcar",
    "2 ovos",
    "100 g de manteiga",
    "1 xícara de buttermilk",
    "1 colher de sopa de cacau em pó",
    "1 colher de chá de bicarbonato de sódio",
    "1 colher de chá de vinagre",
    "Corante alimentício vermelho",
    "300 g de cream cheese",
    "100 g de manteiga para o recheio",
    "1 xícara de açúcar de confeiteiro"
  ],
  steps: [
    "Preaqueça o forno a 180 °C.",
    "Bata a manteiga com o açúcar até formar um creme claro.",
    "Adicione os ovos e misture bem.",
    "Acrescente o corante vermelho e o cacau em pó.",
    "Incorpore alternadamente a farinha e o buttermilk.",
    "Misture o bicarbonato com o vinagre e adicione à massa.",
    "Distribua em duas formas untadas e asse por aproximadamente 30 minutos.",
    "Para o recheio, bata o cream cheese, a manteiga e o açúcar de confeiteiro.",
    "Depois de os bolos esfriarem, recheie e cubra com o creme."
  ]
},

{
  id: 12,
  name: "Bolo Tres Leches",
  country: "México",
  time: "1h + geladeira",
  level: "Médio",
  image: "https://i.pinimg.com/736x/0d/53/4d/0d534d11a7282188061b65691cf3f4d8.jpg",
  description: "Bolo latino-americano extremamente macio, umedecido com três tipos de leite.",
  ingredients: [
    "4 ovos",
    "1 xícara de açúcar",
    "1 xícara de farinha de trigo",
    "1 colher de chá de fermento",
    "1 lata de leite condensado",
    "1 lata de leite evaporado",
    "200 ml de creme de leite",
    "200 ml de chantilly"
  ],
  steps: [
    "Preaqueça o forno a 180 °C.",
    "Bata os ovos com o açúcar até formar uma mistura clara e volumosa.",
    "Incorpore delicadamente a farinha e o fermento.",
    "Despeje em uma forma untada e asse por aproximadamente 30 minutos.",
    "Misture o leite condensado, o leite evaporado e o creme de leite.",
    "Depois de assado, faça pequenos furos por toda a superfície do bolo.",
    "Despeje lentamente a mistura dos três leites sobre o bolo.",
    "Leve à geladeira por pelo menos 3 horas.",
    "Finalize com chantilly antes de servir."
  ]
},

{
  id: 13,
  name: "Cinnamon Roll",
  country: "Suécia",
  time: "2h 30 min",
  level: "Médio",
  image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=900&q=85",
  description: "Pão doce enrolado com açúcar e canela, macio por dentro e dourado por fora.",
  ingredients: [
    "500 g de farinha de trigo",
    "250 ml de leite morno",
    "10 g de fermento biológico seco",
    "80 g de açúcar",
    "80 g de manteiga",
    "1 ovo",
    "2 colheres de sopa de canela",
    "100 g de açúcar mascavo",
    "50 g de manteiga para o recheio"
  ],
  steps: [
    "Misture o leite morno, o fermento e uma colher de açúcar.",
    "Deixe descansar por 10 minutos.",
    "Acrescente a farinha, o ovo, o restante do açúcar e a manteiga.",
    "Sove até obter uma massa lisa e elástica.",
    "Cubra e deixe crescer por aproximadamente 1 hora.",
    "Abra a massa em formato retangular.",
    "Espalhe a manteiga do recheio e polvilhe açúcar mascavo e canela.",
    "Enrole a massa e corte em fatias.",
    "Disponha em uma assadeira e deixe crescer por mais 30 minutos.",
    "Asse a 180 °C por aproximadamente 25 minutos."
  ]
},

{
  id: 14,
  name: "Crêpe Suzette",
  country: "França",
  time: "40 min",
  level: "Médio",
  image: "https://i.pinimg.com/1200x/03/f8/8a/03f88a9b9920adff7b458d3b0df61c4c.jpg",
  description: "Crepe francês delicado servido com molho amanteigado de laranja.",
  ingredients: [
    "1 xícara de farinha de trigo",
    "2 ovos",
    "250 ml de leite",
    "2 colheres de manteiga derretida",
    "3 colheres de açúcar",
    "Suco de 2 laranjas",
    "Raspas de 1 laranja",
    "50 g de manteiga para o molho"
  ],
  steps: [
    "Misture a farinha, os ovos, o leite e a manteiga derretida até formar uma massa líquida.",
    "Deixe a massa descansar por 15 minutos.",
    "Aqueça uma frigideira antiaderente levemente untada.",
    "Despeje pequenas porções da massa e prepare crepes finos.",
    "Em outra frigideira, derreta o açúcar com a manteiga.",
    "Adicione o suco e as raspas de laranja.",
    "Cozinhe até formar um molho levemente encorpado.",
    "Dobre os crepes em quatro partes e aqueça-os no molho.",
    "Sirva imediatamente."
  ]
},

{
  id: 15,
  name: "Brigadeirão",
  country: "Brasil",
  time: "1h 15 min",
  level: "Fácil",
  image: "https://i.pinimg.com/1200x/e3/bc/fb/e3bcfb32ee331b6198280cfdf4d40e64.jpg",
  description: "Sobremesa brasileira cremosa de chocolate, semelhante a um pudim.",
  ingredients: [
    "1 lata de leite condensado",
    "1 caixa de creme de leite",
    "3 ovos",
    "1 xícara de chocolate em pó",
    "1 colher de manteiga",
    "Chocolate granulado para decorar"
  ],
  steps: [
    "Preaqueça o forno a 180 °C.",
    "Bata o leite condensado, o creme de leite, os ovos, o chocolate e a manteiga no liquidificador.",
    "Despeje em uma forma de pudim untada com manteiga.",
    "Cubra com papel-alumínio.",
    "Asse em banho-maria por aproximadamente 1 hora ou até firmar.",
    "Espere esfriar e leve à geladeira por pelo menos 3 horas.",
    "Desenforme e cubra com chocolate granulado."
  ]
},

{
  id: 16,
  name: "Crumble de maçã",
  country: "Reino Unido",
  time: "50 min",
  level: "Fácil",
  image: "https://images.unsplash.com/photo-1562007908-17c67e878c88?auto=format&fit=crop&w=900&q=85",
  description: "Sobremesa britânica de maçãs assadas com cobertura crocante e amanteigada.",
  ingredients: [
    "4 maçãs",
    "100 g de farinha de trigo",
    "80 g de manteiga gelada",
    "80 g de açúcar mascavo",
    "1 colher de chá de canela",
    "Suco de meio limão"
  ],
  steps: [
    "Preaqueça o forno a 180 °C.",
    "Descasque e corte as maçãs em cubos.",
    "Misture as maçãs com o suco de limão e a canela.",
    "Distribua em uma travessa refratária.",
    "Misture a farinha, a manteiga gelada e o açúcar mascavo com as pontas dos dedos.",
    "Continue até obter uma farofa grossa.",
    "Espalhe a farofa sobre as maçãs.",
    "Asse por aproximadamente 30 a 35 minutos, até dourar.",
    "Sirva morno, acompanhado de sorvete se desejar."
  ]
},

{
  id: 17,
  name: "Fudge de chocolate",
  country: "Estados Unidos",
  time: "20 min + geladeira",
  level: "Fácil",
  image: "https://i.pinimg.com/736x/1a/d3/7e/1ad37e60529aa2b808f7e5247a262eb3.jpg",
  description: "Doce americano de chocolate com textura densa, macia e extremamente cremosa.",
  ingredients: [
    "400 g de chocolate meio amargo",
    "1 lata de leite condensado",
    "1 colher de manteiga",
    "1 colher de chá de essência de baunilha",
    "100 g de nozes picadas (opcional)"
  ],
  steps: [
    "Pique o chocolate em pedaços pequenos.",
    "Coloque o chocolate, o leite condensado e a manteiga em uma panela.",
    "Aqueça em fogo baixo, mexendo até derreter completamente.",
    "Desligue o fogo e adicione a baunilha.",
    "Misture as nozes, caso deseje.",
    "Despeje em uma forma pequena forrada com papel-manteiga.",
    "Alise a superfície e leve à geladeira por aproximadamente 3 horas.",
    "Corte em quadradinhos e sirva."
  ]
},

{
  id: 18,
  name: "Macarons",
  country: "França",
  time: "2h",
  level: "Difícil",
  image: "https://images.unsplash.com/photo-1558326567-98ae2405596b?auto=format&fit=crop&w=900&q=85",
  description: "Docinhos franceses delicados feitos com farinha de amêndoas e recheio cremoso.",
  ingredients: [
    "100 g de farinha de amêndoas",
    "100 g de açúcar de confeiteiro",
    "75 g de claras de ovos",
    "75 g de açúcar refinado",
    "Corante alimentício em gel (opcional)",
    "150 g de chocolate branco",
    "75 g de creme de leite"
  ],
  steps: [
    "Peneire a farinha de amêndoas com o açúcar de confeiteiro.",
    "Bata as claras e adicione o açúcar refinado aos poucos até formar um merengue firme.",
    "Acrescente o corante, se desejar.",
    "Incorpore delicadamente os ingredientes secos ao merengue.",
    "Misture até a massa escorrer lentamente da espátula, formando uma fita.",
    "Coloque a massa em um saco de confeitar e modele pequenos círculos sobre papel-manteiga.",
    "Deixe descansar até formar uma película seca na superfície.",
    "Asse em forno preaquecido a 150 °C por aproximadamente 13 a 16 minutos.",
    "Prepare uma ganache misturando chocolate branco derretido com creme de leite.",
    "Depois de frios, una os macarons com o recheio."
  ]
},

{
  id: 19,
  name: "Churros",
  country: "Espanha",
  time: "40 min",
  level: "Médio",
  image: "https://i.pinimg.com/1200x/b5/b6/a2/b5b6a248382ecd09bfcc3366cb072966.jpg",
  description: "Massa frita crocante por fora e macia por dentro, envolvida em açúcar e canela.",
  ingredients: [
    "1 xícara de água",
    "1 xícara de farinha de trigo",
    "2 colheres de manteiga",
    "1 colher de açúcar",
    "1 pitada de sal",
    "Óleo para fritar",
    "Açúcar e canela para finalizar",
    "Doce de leite para acompanhar"
  ],
  steps: [
    "Coloque a água, a manteiga, o açúcar e o sal em uma panela.",
    "Aqueça até levantar fervura.",
    "Acrescente a farinha de uma só vez e mexa vigorosamente.",
    "Cozinhe até formar uma massa uniforme que desgrude da panela.",
    "Espere a massa amornar.",
    "Transfira para um saco de confeitar resistente com bico estrela.",
    "Modele os churros sobre papel-manteiga.",
    "Frite em óleo a aproximadamente 175 °C, em pequenas porções, até dourarem.",
    "Escorra em papel-toalha e passe no açúcar com canela.",
    "Sirva com doce de leite."
  ]
},

{
  id: 20,
  name: "Palha italiana",
  country: "Brasil",
  time: "30 min + geladeira",
  level: "Fácil",
  image: "https://i.pinimg.com/736x/40/9f/bc/409fbc3972983c2f63472d1314d9477b.jpg",
  description: "Doce brasileiro que combina brigadeiro cremoso com pedaços crocantes de biscoito.",
  ingredients: [
    "1 lata de leite condensado",
    "3 colheres de chocolate em pó",
    "1 colher de manteiga",
    "150 g de biscoito maisena",
    "Açúcar de confeiteiro para finalizar"
  ],
  steps: [
    "Quebre os biscoitos em pedaços médios.",
    "Em uma panela, misture o leite condensado, o chocolate e a manteiga.",
    "Cozinhe em fogo baixo até atingir o ponto de brigadeiro firme.",
    "Desligue o fogo e misture os biscoitos quebrados.",
    "Espalhe a mistura em uma forma forrada com papel-manteiga.",
    "Pressione para nivelar a superfície.",
    "Leve à geladeira por aproximadamente 2 horas.",
    "Corte em quadrados e passe no açúcar de confeiteiro."
  ]
},

{
  id: 21,
  name: "Gulab Jamun",
  country: "Índia",
  time: "1h",
  level: "Médio",
  image: "https://i.pinimg.com/736x/d8/8e/ab/d88eab3522dc4dd9e5bce2419ec61929.jpg",
  description: "Sobremesa indiana tradicional feita com bolinhas macias mergulhadas em calda aromática.",
  ingredients: [
    "1 xícara de leite em pó integral",
    "¼ de xícara de farinha de trigo",
    "¼ de colher de chá de bicarbonato de sódio",
    "2 colheres de manteiga derretida",
    "Leite suficiente para dar ponto",
    "2 xícaras de açúcar",
    "2 xícaras de água",
    "4 sementes de cardamomo",
    "Óleo para fritar"
  ],
  steps: [
    "Misture o leite em pó, a farinha e o bicarbonato.",
    "Adicione a manteiga e pequenas quantidades de leite até formar uma massa macia.",
    "Modele bolinhas pequenas, sem rachaduras.",
    "Em outra panela, ferva a água com o açúcar e o cardamomo por aproximadamente 8 minutos.",
    "Mantenha a calda morna.",
    "Frite as bolinhas em óleo moderadamente quente, em fogo baixo, até dourarem uniformemente.",
    "Retire e coloque imediatamente na calda morna.",
    "Deixe descansar por pelo menos 1 hora para absorver a calda.",
    "Sirva morno ou em temperatura ambiente."
  ]
},

{
  id: 22,
  name: "Torta Cheesecake",
  country: "Estados Unidos",
  time: "1h 30 min + geladeira",
  level: "Médio",
  image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=85",
  description: "Cheesecake americana cremosa com base crocante e cobertura de frutas vermelhas.",
  ingredients: [
    "200 g de biscoito maisena",
    "100 g de manteiga derretida",
    "600 g de cream cheese",
    "150 g de açúcar",
    "3 ovos",
    "200 g de creme de leite",
    "1 colher de chá de baunilha",
    "200 g de geleia de frutas vermelhas"
  ],
  steps: [
    "Preaqueça o forno a 160 °C.",
    "Triture os biscoitos e misture com a manteiga derretida.",
    "Forre o fundo de uma forma de fundo removível.",
    "Bata o cream cheese com o açúcar até obter um creme homogêneo.",
    "Acrescente os ovos, um de cada vez, misturando delicadamente.",
    "Adicione o creme de leite e a baunilha.",
    "Despeje sobre a base de biscoitos.",
    "Asse por aproximadamente 55 a 65 minutos, até as bordas firmarem.",
    "Deixe esfriar e leve à geladeira por pelo menos 4 horas.",
    "Cubra com a geleia de frutas vermelhas antes de servir."
  ]
},

{
  id: 23,
  name: "Bolo de cenoura",
  country: "Brasil",
  time: "55 min",
  level: "Fácil",
  image: "https://i.pinimg.com/736x/d2/3b/75/d23b7555b1cf62ca30aac7e767bb3ed2.jpg",
  description: "Bolo brasileiro fofinho de cenoura com cobertura cremosa de chocolate.",
  ingredients: [
    "3 cenouras médias picadas (aproximadamente 250 g)",
    "3 ovos",
    "½ xícara de óleo",
    "1½ xícara de açúcar",
    "2 xícaras de farinha de trigo",
    "1 colher de sopa de fermento",
    "1 lata de leite condensado",
    "3 colheres de chocolate em pó",
    "1 colher de manteiga"
  ],
  steps: [
    "Preaqueça o forno a 180 °C.",
    "Bata no liquidificador as cenouras, os ovos, o óleo e o açúcar.",
    "Transfira para uma tigela e incorpore a farinha peneirada.",
    "Adicione o fermento e misture delicadamente.",
    "Despeje em uma forma untada e enfarinhada.",
    "Asse por aproximadamente 35 a 40 minutos.",
    "Para a cobertura, misture o leite condensado, o chocolate e a manteiga em uma panela.",
    "Cozinhe até obter um brigadeiro mole.",
    "Espalhe a cobertura sobre o bolo ainda morno."
  ]
},

{
  id: 24,
  name: "Pavê de Leite Ninho",
  country: "Brasil",
  time: "35 min + geladeira",
  level: "Fácil",
  image: "https://i.pinimg.com/1200x/5f/6f/49/5f6f49c84e79f3db693d014af46340b4.jpg",
  description: "Sobremesa cremosa em camadas de biscoito e creme de leite em pó.",
  ingredients: [
    "1 lata de leite condensado",
    "2 caixas de creme de leite",
    "1 xícara de leite em pó",
    "500 ml de leite",
    "2 colheres de amido de milho",
    "200 g de biscoito maisena",
    "Leite para umedecer os biscoitos"
  ],
  steps: [
    "Em uma panela, misture o leite condensado, o leite em pó e o amido de milho.",
    "Acrescente o leite aos poucos, mexendo até dissolver.",
    "Leve ao fogo médio e cozinhe até engrossar.",
    "Desligue o fogo e misture o creme de leite.",
    "Em uma travessa, espalhe uma camada fina do creme.",
    "Umedeça rapidamente os biscoitos no leite.",
    "Monte camadas alternadas de biscoitos e creme.",
    "Finalize com uma camada de creme.",
    "Leve à geladeira por pelo menos 4 horas.",
    "Polvilhe leite em pó antes de servir."
  ]
},

{
  id: 25,
  name: "Torta holandesa",
  country: "Brasil",
  time: "50 min + geladeira",
  level: "Médio",
  image: "https://i.pinimg.com/736x/85/ec/f5/85ecf5adcfc71edbee8aa05ebd416b73.jpg",
  description: "Torta brasileira com creme branco, cobertura de chocolate e biscoitos decorativos.",
  ingredients: [
    "200 g de biscoito maisena",
    "100 g de manteiga derretida",
    "200 g de manteiga sem sal em temperatura ambiente",
    "1 lata de leite condensado",
    "2 caixas de creme de leite",
    "1 colher de chá de baunilha",
    "200 g de chocolate meio amargo",
    "150 g de biscoitos cobertos com chocolate"
  ],
  steps: [
    "Triture os biscoitos maisena e misture com a manteiga derretida.",
    "Forre o fundo de uma forma de fundo removível e leve à geladeira.",
    "Bata os 200 g de manteiga com o leite condensado até formar um creme.",
    "Adicione uma caixa de creme de leite e a baunilha.",
    "Espalhe o creme sobre a base de biscoitos.",
    "Leve à geladeira até firmar.",
    "Derreta o chocolate meio amargo e misture com a outra caixa de creme de leite.",
    "Espalhe a ganache sobre o creme branco.",
    "Leve à geladeira por pelo menos 4 horas.",
    "Desenforme e decore as laterais com os biscoitos cobertos de chocolate."
  ]
},

{
  id: 26,
  name: "Bombom de morango na travessa",
  country: "Brasil",
  time: "40 min + geladeira",
  level: "Fácil",
  image: "https://i.pinimg.com/736x/74/d8/61/74d861f2f6deacc928f625c9826ce6b1.jpg",
  description: "Sobremesa brasileira com morangos frescos, creme branco e ganache de chocolate.",
  ingredients: [
    "2 caixas de morangos",
    "1 lata de leite condensado",
    "2 caixas de creme de leite",
    "1 colher de manteiga",
    "200 g de chocolate meio amargo"
  ],
  steps: [
    "Lave os morangos e seque-os completamente.",
    "Em uma panela, coloque o leite condensado, a manteiga e uma caixa de creme de leite.",
    "Cozinhe em fogo baixo até formar um creme consistente.",
    "Espere o creme esfriar.",
    "Distribua os morangos inteiros ou cortados em uma travessa.",
    "Cubra com o creme branco.",
    "Derreta o chocolate meio amargo e misture com a outra caixa de creme de leite.",
    "Espalhe a ganache sobre o creme.",
    "Leve à geladeira por pelo menos 2 horas antes de servir."
  ]
},

{
  id: 27,
  name: "Mousse de limão",
  country: "Brasil",
  time: "15 min + geladeira",
  level: "Fácil",
  image: "https://i.pinimg.com/736x/d6/5f/9a/d65f9a62f9fef19d3917469c5fc74210.jpg",
  description: "Sobremesa leve, cremosa e refrescante com o equilíbrio perfeito entre doce e cítrico.",
  ingredients: [
    "1 lata de leite condensado",
    "2 caixas de creme de leite",
    "½ xícara de suco de limão",
    "Raspas de limão para decorar"
  ],
  steps: [
    "Coloque o leite condensado e o creme de leite no liquidificador.",
    "Bata até obter uma mistura homogênea.",
    "Adicione o suco de limão aos poucos, mantendo o liquidificador ligado.",
    "Continue batendo até o creme engrossar.",
    "Distribua em taças individuais ou em uma travessa.",
    "Leve à geladeira por pelo menos 3 horas.",
    "Finalize com raspas de limão antes de servir."
  ]
},

{
  id: 28,
  name: "Cookie americano",
  country: "Estados Unidos",
  time: "35 min",
  level: "Fácil",
  image: "https://i.pinimg.com/736x/d5/2f/91/d52f910631925c6fbda82c4ab3e342cb.jpg",
  description: "Cookies americanos com bordas crocantes, centro macio e gotas de chocolate.",
  ingredients: [
    "120 g de manteiga",
    "½ xícara de açúcar refinado",
    "½ xícara de açúcar mascavo",
    "1 ovo",
    "1 colher de chá de essência de baunilha",
    "1¾ xícara de farinha de trigo",
    "½ colher de chá de bicarbonato de sódio",
    "150 g de gotas de chocolate"
  ],
  steps: [
    "Preaqueça o forno a 180 °C.",
    "Bata a manteiga com os dois tipos de açúcar.",
    "Adicione o ovo e a baunilha.",
    "Acrescente a farinha e o bicarbonato.",
    "Misture até formar uma massa homogênea.",
    "Incorpore as gotas de chocolate.",
    "Modele bolinhas e distribua em uma assadeira forrada com papel-manteiga.",
    "Deixe espaço entre os cookies para que possam crescer.",
    "Asse por aproximadamente 10 a 13 minutos, até as bordas dourarem.",
    "Espere esfriar alguns minutos antes de retirar da assadeira."
  ]
},

{
  id: 29,
  name: "Torta de cookie com Nutella",
  country: "Estados Unidos",
  time: "1h",
  level: "Médio",
  image: "https://i.pinimg.com/736x/41/07/ae/4107aec4fa3025437c718d0c036cdf08.jpg",
  description: "Torta de massa de cookie recheada com creme de avelã e chocolate.",
  ingredients: [
    "200 g de manteiga",
    "1 xícara de açúcar mascavo",
    "½ xícara de açúcar refinado",
    "2 ovos",
    "2½ xícaras de farinha de trigo",
    "1 colher de chá de fermento",
    "150 g de gotas de chocolate",
    "350 g de Nutella"
  ],
  steps: [
    "Preaqueça o forno a 180 °C.",
    "Bata a manteiga com os açúcares até formar um creme.",
    "Acrescente os ovos e misture bem.",
    "Adicione a farinha e o fermento.",
    "Incorpore as gotas de chocolate.",
    "Divida a massa em duas partes.",
    "Forre o fundo e as laterais de uma forma com uma das partes.",
    "Espalhe a Nutella sobre a massa.",
    "Cubra com o restante da massa, fechando as bordas.",
    "Asse por aproximadamente 30 a 35 minutos.",
    "Espere amornar antes de cortar."
  ]
},

{
  id: 30,
  name: "Torta de maracujá",
  country: "Brasil",
  time: "35 min + geladeira",
  level: "Fácil",
  image: "https://i.pinimg.com/1200x/87/24/ea/8724ea40511b8a83403454280e41a037.jpg",
  description: "Torta refrescante com base crocante, mousse de maracujá e cobertura de sementes.",
  ingredients: [
    "200 g de biscoito maisena",
    "100 g de manteiga derretida",
    "1 lata de leite condensado",
    "2 caixas de creme de leite",
    "150 ml de suco concentrado de maracujá",
    "Polpa de 1 maracujá",
    "3 colheres de açúcar",
    "3 colheres de água"
  ],
  steps: [
    "Triture os biscoitos até formar uma farofa.",
    "Misture com a manteiga derretida.",
    "Forre o fundo de uma forma de fundo removível.",
    "Leve ao forno preaquecido a 180 °C por aproximadamente 10 minutos.",
    "Espere a base esfriar.",
    "Bata o leite condensado, o creme de leite e o suco de maracujá no liquidificador.",
    "Despeje o creme sobre a base.",
    "Leve à geladeira por pelo menos 4 horas.",
    "Para a cobertura, cozinhe a polpa de maracujá com o açúcar e a água por aproximadamente 5 minutos.",
    "Espere a calda esfriar e espalhe sobre a torta.",
    "Sirva gelada."
  ]
}
  
];

const grid = document.getElementById("recipeGrid");
const searchInput = document.getElementById("searchInput");
const countryFilter = document.getElementById("countryFilter");
const favoritesFilter = document.getElementById("favoritesFilter");
const recipeCount = document.getElementById("recipeCount");
const dialog = document.getElementById("recipeDialog");
const modalImage = document.getElementById("modalImage");
let favoritesOnly = false;
let favorites = JSON.parse(localStorage.getItem("cookcode-favorites") || "[]");

// Preenche o filtro de países
[...new Set(recipes.map(recipe => recipe.country))].sort().forEach(country => {
  const option = document.createElement("option");
  option.value = country;
  option.textContent = country;
  countryFilter.appendChild(option);
});

function renderRecipes() {
  const term = searchInput.value.trim().toLocaleLowerCase("pt-BR");
  const country = countryFilter.value;
  const filtered = recipes.filter(recipe => {
    const searchable = [recipe.name, recipe.country, recipe.description, ...recipe.ingredients].join(" ").toLocaleLowerCase("pt-BR");
    return searchable.includes(term)
      && (!country || recipe.country === country)
      && (!favoritesOnly || favorites.includes(recipe.id));
  });

  recipeCount.textContent = `${filtered.length} ${filtered.length === 1 ? "receita" : "receitas"}`;
  grid.innerHTML = "";

  if (!filtered.length) {
    grid.innerHTML = '<div class="empty"><strong>Nenhuma receita encontrada</strong>Experimente outro nome, ingrediente ou filtro.</div>';
    return;
  }

  filtered.forEach(recipe => {
    const card = document.createElement("article");
    card.className = "recipe-card";
    const isFavorite = favorites.includes(recipe.id);
    card.innerHTML = `
      <div class="photo-wrap">
        <img src="${recipe.image}" alt="${recipe.name}" loading="lazy" onerror="this.style.display='none'; this.parentElement.style.background='linear-gradient(135deg,#f6c9a8,#8e6045)'">
        <span class="origin-pill">🌎 ${recipe.country}</span>
        <button class="favorite ${isFavorite ? "active" : ""}" data-favorite="${recipe.id}" aria-label="Favoritar ${recipe.name}">${isFavorite ? "♥" : "♡"}</button>
      </div>
      <div class="card-body">
        <h3>${recipe.name}</h3>
        <p class="description">${recipe.description}</p>
        <div class="meta"><span>◷ ${recipe.time}</span><span>✦ ${recipe.level}</span></div>
        <button class="details-button" data-details="${recipe.id}">Ver ingredientes e preparo</button>
      </div>`;
    grid.appendChild(card);
  });
}

// Clique nos cards: favoritar ou abrir detalhes
grid.addEventListener("click", event => {
  const favoriteButton = event.target.closest("[data-favorite]");
  const detailsButton = event.target.closest("[data-details]");
  if (favoriteButton) {
    const id = Number(favoriteButton.dataset.favorite);
    favorites = favorites.includes(id) ? favorites.filter(item => item !== id) : [...favorites, id];
    localStorage.setItem("cookcode-favorites", JSON.stringify(favorites));
    renderRecipes();
  }
  if (detailsButton) openRecipe(Number(detailsButton.dataset.details));
});

function openRecipe(id) {
  const recipe = recipes.find(item => item.id === id);
  modalImage.style.display = "block";
  modalImage.onerror = () => { modalImage.style.display = "none"; };
  modalImage.src = recipe.image;
  modalImage.alt = recipe.name;
  document.getElementById("modalOrigin").textContent = `RECEITA • ${recipe.country}`;
  document.getElementById("modalTitle").textContent = recipe.name;
  document.getElementById("modalDescription").textContent = recipe.description;
  document.getElementById("modalIngredients").innerHTML = recipe.ingredients.map(item => `<li>${item}</li>`).join("");
  document.getElementById("modalSteps").innerHTML = recipe.steps.map(item => `<li>${item}</li>`).join("");
  dialog.showModal();
}

// Busca e filtros
searchInput.addEventListener("input", renderRecipes);
countryFilter.addEventListener("change", renderRecipes);
favoritesFilter.addEventListener("click", () => {
  favoritesOnly = !favoritesOnly;
  favoritesFilter.classList.toggle("active", favoritesOnly);
  favoritesFilter.textContent = favoritesOnly ? "♥ Ver todas" : "♡ Favoritos";
  renderRecipes();
});

// Modal
document.getElementById("closeModal").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });

// Botões do topo
document.getElementById("explorarBtn").addEventListener("click", () => {
  document.getElementById("receitas").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("perfilBtn").addEventListener("click", () => {
  const name = document.getElementById("nomeUsuario").textContent;
  alert(`CookCode\nConta conectada: ${name}`);
});

// O script.js do Firebase preenche o elemento nomeUsuario com o nome de quem está logada.
renderRecipes();

// Efeito visual: a imagem do topo fica suavemente desfocada ao rolar a página.
const hero = document.getElementById("hero");
window.addEventListener("scroll", () => hero.classList.toggle("scrolled", window.scrollY > 100), { passive: true });