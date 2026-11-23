// ==============================================================================
// CONFIGURAÇÃO CENTRAL DA CLIENTE: DEBORAH PEREIRA NAILS (JOÃO PESSOA)
// Toda a personalização do site fica neste arquivo.
// Fontes: perfil @dp_nailsd (bio e fotos de trabalhos) e ficha do Google
// (endereço na Cidade Padre Zé, horário e telefone).
// ATENÇÃO: os valores abaixo são uma ESTIMATIVA para a demo. O perfil dela não
// mostra preços. Trocar pelos valores reais da Deborah antes da entrega.
// ==============================================================================

export const studioConfig = {
  name: "Deborah Pereira",
  ownerName: "Deborah",
  nameSuffix: "Nail Designer",
  fullName: "Deborah Pereira Nails",
  tagline: "Alongamento em gel na tip, olho de gato e nail art",
  subtitle:
    "Stiletto vermelho, oncinha dourada, francesinha com pedraria. Escolha o serviço, veja o valor e reserve seu horário em poucos toques, sem esperar resposta no direct.",
  city: "João Pessoa, PB",
  neighborhood: "Padre Zé",
  addressShort: "Shopping Bella, sala 5, Padre Zé",
  address: "R. João Fausto de Figueiredo, 05 - Cidade Padre Zé, João Pessoa - PB, 58026-037",
  addressNote: "Shopping Bella, sala 5",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Deborah+Pereira+Nails,+R.+João+Fausto+de+Figueiredo,+05,+João+Pessoa+-+PB",
  whatsappNumber: "5583988194229", // Apenas dígitos com DDI e DDD
  whatsappDisplay: "(83) 98819-4229",
  instagramHandle: "@dp_nailsd",
  instagramUrl: "https://www.instagram.com/dp_nailsd",
  // Link do Calendly. Na demo usamos a agenda de teste; na entrega vai o da Deborah.
  calendlyUrl: "https://calendly.com/carbosalarissa/30min",
  workingHours: [
    { days: "Segunda a Sábado", hours: "9h às 20h" },
    { days: "Domingo", hours: "Fechado" },
  ],
  workingHoursShort: "Seg a sáb, 9h às 20h",
  // Dias sem atendimento (0 = domingo ... 6 = sábado). Vazio = abre todos os dias.
  closedWeekdays: [0],
  periods: [
    { id: "Manhã (9h às 13h)", label: "Manhã", sub: "9h às 13h" },
    { id: "Tarde (13h às 20h)", label: "Tarde", sub: "13h às 20h" },
  ],
  paymentNote: "Os valores podem variar conforme o comprimento e a decoração. A Deborah confirma tudo pelo WhatsApp.",
  // Avisos que a cliente confirma antes de agendar
  bookingNotes: [
    "Chegue 5 minutinhos antes do seu horário.",
    "Se precisar desmarcar, avise com antecedência para liberar a vaga.",
    "Nail art, olho de gato e pedrarias têm valor à parte.",
  ],
  decoratedNote: "Quer oncinha, coração, xadrez ou pedraria? Escreva nas observações ou mande a foto da inspiração no WhatsApp.",

  // Sobre a profissional
  about: {
    photo: "/images/vermelho-olho-de-gato.webp",
    title: "Nail designer desde 2020",
    text: "A Deborah atende com hora marcada na sala 5 do Shopping Bella, na Cidade Padre Zé. A especialidade dela é o alongamento em gel sobre a tip, fino e resistente, no formato que você quiser. E ela não tem medo de cor: olho de gato vermelho, oncinha dourada, xadrez, coração e pedraria saem com o mesmo capricho de uma francesinha clássica.",
    highlights: ["Alongamento em gel na tip", "Olho de gato", "Nail art à mão livre", "Pedrarias e flor 3D"],
    coursesText: "",
  },

  // Categorias de serviço (cada uma com suas opções e valores)
  categories: [
    {
      id: "alongamento",
      title: "Alongamento em Gel",
      short: "Alongamento",
      description: "Gel aplicado sobre a tip: unha comprida, fina e resistente, em stiletto, amendoada ou quadrada.",
      image: "/images/vermelho-coracao-xadrez.webp",
      duration: "2h a 2h30",
      maintenance: "Manutenção indicada a cada 20 a 25 dias",
      notes: ["Inclui cutilagem", "Francesinha sem custo extra"],
      items: [
        { id: "along-gel-tip", title: "Alongamento em gel na tip", price: 130, popular: true },
        { id: "manut", title: "Manutenção do alongamento", price: 90 },
        { id: "reposicao", title: "Reposição de unha (por unha)", price: 10 },
      ],
    },
    {
      id: "gel",
      title: "Banho de Gel e Esmaltação",
      short: "Gel",
      description: "Na unha natural: mais força, brilho de gel e cor que não descasca por semanas.",
      image: "/images/chocolate-glitter-dourado.webp",
      duration: "1h a 1h30",
      maintenance: "Manutenção a cada 20 dias",
      notes: ["Inclui cutilagem", "Na unha natural"],
      items: [
        { id: "banho-gel", title: "Banho de gel", price: 80, popular: true },
        { id: "gel-mao", title: "Esmaltação em gel nas mãos", price: 55 },
        { id: "gel-pe", title: "Esmaltação em gel nos pés", price: 55 },
      ],
    },
    {
      id: "arte",
      title: "Nail Art e Efeitos",
      short: "Nail art",
      description: "Olho de gato, oncinha, xadrez, coração, pedraria e flor 3D. Pode somar ao alongamento ou ao gel.",
      image: "/images/oncinha-dourada.webp",
      duration: "+30 min",
      maintenance: "",
      notes: ["Valor somado ao serviço principal", "Mande a inspiração no WhatsApp"],
      items: [
        { id: "olho-gato", title: "Efeito olho de gato (todas as unhas)", price: 20, popular: true },
        { id: "arte-simples", title: "Nail art simples (por unha)", price: 5 },
        { id: "arte-elaborada", title: "Nail art elaborada (por unha)", price: 10 },
      ],
    },
    {
      id: "natural",
      title: "Manicure e Pedicure",
      short: "Natural",
      description: "O cuidado do dia a dia, com cutilagem bem feita e esmaltação comum.",
      image: "/images/francesinha-poa-lilas.webp",
      duration: "1h",
      maintenance: "",
      notes: ["Esmaltação comum inclusa"],
      items: [
        { id: "mao", title: "Manicure", price: 25 },
        { id: "pe", title: "Pedicure", price: 30 },
        { id: "pe-mao", title: "Manicure e pedicure", price: 50, popular: true },
      ],
    },
  ],

  // Adicionais que podem ser somados no agendamento
  addons: [
    { id: "olho-gato-add", name: "Efeito olho de gato", price: 20 },
    { id: "pedraria", name: "Pedraria ou flor 3D (por unha)", price: 8 },
    { id: "nail-art", name: "Nail art (por unha)", price: 5 },
    { id: "remocao", name: "Remoção de gel ou alongamento", price: 30 },
  ],

  // Informações importantes
  policies: [
    {
      title: "Pontualidade",
      description: "Chegue 5 minutinhos antes. Assim o seu horário rende e ninguém fica esperando.",
    },
    {
      title: "Desmarcar",
      description: "Imprevisto acontece. Avise com antecedência para a vaga ir para outra cliente.",
    },
    {
      title: "Nail art",
      description: "Desenhos, efeitos e pedrarias têm valor à parte. Mande a foto da inspiração no WhatsApp.",
    },
    {
      title: "Remoção",
      description: "Vem com gel ou alongamento de outro lugar? Avise no agendamento para reservar o tempo da remoção.",
    },
  ],

  // Galeria de fotos de resultados (fotos reais do Instagram)
  gallery: [
    { url: "/images/vermelho-olho-de-gato.webp", tag: "Olho de gato vermelho no stiletto" },
    { url: "/images/vermelho-coracao-xadrez.webp", tag: "Vermelho, coração e xadrez" },
    { url: "/images/oncinha-dourada.webp", tag: "Oncinha dourada" },
    { url: "/images/francesinha-flor-3d.webp", tag: "Francesinha com flor 3D" },
    { url: "/images/azul-pedrarias.webp", tag: "Azul olho de gato com pedrarias" },
    { url: "/images/stiletto-preto-pink.webp", tag: "Preto com oncinha pink" },
    { url: "/images/azul-perolado.webp", tag: "Azul perolado com poá" },
    { url: "/images/chocolate-glitter-dourado.webp", tag: "Chocolate e glitter dourado" },
  ],
};

// Lista "achatada" de todos os serviços, usada no agendamento
export const allServices = studioConfig.categories.flatMap((cat) =>
  cat.items.map((item) => ({
    ...item,
    category: cat.title,
    categoryId: cat.id,
    duration: item.duration || cat.duration,
  }))
);

export const formatPrice = (value) =>
  value === null || value === undefined
    ? "Sob consulta"
    : `R$ ${Number(value).toFixed(2).replace(".", ",")}`;
