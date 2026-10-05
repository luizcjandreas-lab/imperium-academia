/* =====================================================================
   IMPERIUM — dados editáveis do site
   Tudo o que muda com frequência (WhatsApp, endereço, horários,
   professores, depoimentos) fica neste arquivo.
   ===================================================================== */

export const SITE = {
  nome: "IMPERIUM",
  nomeCompleto: "Academia Imperium",
  cidade: "Jundiaí",
  estado: "SP",
  posicionamento: "Lugar onde pessoas comuns se transformam em sua melhor versão.",

  // ⚠️ CONFIRMAR: (11) 4526-3390 é o telefone do Google. Se o WhatsApp for outro
  // número, troque aqui (DDI + DDD + número, só dígitos).
  whatsapp: "551145263390",
  telefone: "(11) 4526-3390",
  telefoneLink: "+551145263390",

  // ⚠️ CONFIRMAR o número do imóvel (o Google mostra só a rua).
  endereco: {
    rua: "R. Clayr Fernando Gato",
    bairro: "Vila Maringá",
    cidade: "Jundiaí",
    uf: "SP",
    cep: "13210-044"
  },

  // Só sabemos que fecha às 22h. Complete com os horários reais.
  horarioFuncionamento: ["Aberto até as 22h", "Confirme os horários pelo WhatsApp"],

  instagram: "", // ex.: "https://www.instagram.com/perfil-da-imperium/"
  facebook: "",  // ex.: "https://www.facebook.com/pagina-da-imperium/"

  googleMaps:
    "https://www.google.com/maps/search/?api=1&query=Academia+Imperium+R.+Clayr+Fernando+Gato+Vila+Maring%C3%A1+Jundia%C3%AD+SP",
  comoChegar:
    "https://www.google.com/maps/dir/?api=1&destination=Academia+Imperium+R.+Clayr+Fernando+Gato+Vila+Maring%C3%A1+Jundia%C3%AD+SP+13210-044",
  mapaIncorporado:
    "https://www.google.com/maps?q=Academia+Imperium+R.+Clayr+Fernando+Gato+Vila+Maring%C3%A1+Jundia%C3%AD+SP&output=embed",

  google: { nota: "4,7", avaliacoes: 174 },

  credito: { nome: "Seu Nome", link: "#" } // crédito de desenvolvimento no rodapé
};

export const MSG_GERAL =
  "Olá! Conheci a IMPERIUM pelo site e gostaria de agendar uma aula experimental.";

export function waLink(mensagem = MSG_GERAL) {
  return `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(mensagem)}`;
}

/* Modalidades. Para trocar uma foto, mude "imagem".
   Sem foto ainda? Deixe imagem: null e o site mostra um painel tipográfico
   no lugar, até a foto real ser adicionada em public/assets/images/. */
export const MODALIDADES = [
  {
    id: "musculacao",
    pagina: "musculacao",
    nome: "Musculação",
    texto: "Construa força, resistência e confiança com treinos alinhados aos seus objetivos.",
    mensagem: "Olá! Conheci a IMPERIUM pelo site. Tenho interesse em musculação.",
    imagem: "assets/images/ambiente-musculacao.jpg",
    alt: "Sala de musculação da IMPERIUM com aparelhos e iluminação azul no teto"
  },
  {
    id: "danca",
    pagina: "danca",
    nome: "Aula de dança",
    texto: "Movimento, música e energia em uma aula feita para treinar o corpo e melhorar o seu dia.",
    mensagem: "Olá! Conheci a IMPERIUM pelo site. Tenho interesse na aula de dança.",
    imagem: "assets/images/aula-danca.jpg",
    alt: "Professor conduzindo a aula de dança com turma animada na IMPERIUM"
  },
  {
    id: "jiujitsu-adulto",
    pagina: "jiu-jitsu",
    nome: "Jiu-jítsu adulto",
    texto: "Técnica, estratégia, disciplina e evolução dentro e fora do tatame.",
    mensagem: "Olá! Conheci a IMPERIUM pelo site. Tenho interesse no jiu-jítsu adulto.",
    imagem: "assets/images/aula-jiujitsu.jpg",
    alt: "Professor de jiu-jítsu de kimono azul explicando a técnica no tatame"
  },
  {
    id: "jiujitsu-kids",
    pagina: "jiu-jitsu",
    nome: "Jiu-jítsu kids",
    texto: "Uma atividade que ajuda no desenvolvimento da confiança, coordenação, disciplina e respeito.",
    mensagem: "Olá! Conheci a IMPERIUM pelo site. Tenho interesse no jiu-jítsu kids.",
    imagem: null, // ADICIONAR: assets/images/jiujitsu-kids.jpg
    alt: ""
  },
  {
    id: "funcional",
    pagina: "funcional",
    nome: "Funcional",
    texto: "Treinos dinâmicos para desenvolver condicionamento, mobilidade, força e disposição.",
    mensagem: "Olá! Conheci a IMPERIUM pelo site. Tenho interesse no funcional.",
    imagem: null, // ADICIONAR: assets/images/funcional.jpg
    alt: ""
  },
  {
    id: "muay-thai",
    pagina: "muay-thai",
    nome: "Muay Thai",
    texto: "Intensidade, técnica e foco em treinos que desafiam o corpo e fortalecem a mente.",
    mensagem: "Olá! Conheci a IMPERIUM pelo site. Tenho interesse no Muay Thai.",
    imagem: "assets/images/treino-muay-thai.jpg",
    alt: "Aluno chutando o aparador durante o treino de Muay Thai na IMPERIUM"
  }
];

/* Páginas de modalidade (uma aba para cada).
   video: arquivo em public/assets/ (null = ainda sem vídeo; aparece a foto ou o painel).
   foco: o que se trabalha, tirado dos textos aprovados no briefing. */
export const PAGINAS = [
  {
    id: "musculacao",
    nome: "Musculação",
    modalidades: ["musculacao"],
    preview: "assets/previews/musculacao.mp4", // prévia curta da vitrine
    titulo: ["Força se constrói", "um treino por vez."],
    intro: "Construa força, resistência e confiança com treinos alinhados aos seus objetivos. Sala ampla e mezanino com aparelhos aeróbicos.",
    video: "assets/video-ambiente.mp4",
    poster: "assets/images/ambiente-musculacao.jpg",
    legenda: "Sala de musculação da IMPERIUM",
    foco: ["Força", "Resistência", "Confiança", "Treino alinhado ao seu objetivo"]
  },
  {
    id: "danca",
    nome: "Dança",
    modalidades: ["danca"],
    preview: "assets/previews/danca.mp4", // prévia curta da vitrine
    titulo: ["Energia", "que contagia."],
    intro: "Uma aula dinâmica para se movimentar, cuidar da saúde e treinar de um jeito leve e envolvente. Movimento, música e energia para melhorar o seu dia.",
    video: "assets/video-danca.mp4",
    poster: "assets/images/aula-danca.jpg",
    legenda: "Aula de dança na IMPERIUM",
    foco: ["Movimento", "Condicionamento", "Saúde", "Leveza e diversão"]
  },
  {
    id: "jiu-jitsu",
    nome: "Jiu-jítsu",
    modalidades: ["jiujitsu-adulto", "jiujitsu-kids"],
    preview: "assets/previews/jiu-jitsu.mp4", // prévia curta da vitrine
    titulo: ["Disciplina que vai", "além do tatame."],
    intro: "Técnica, estratégia e evolução para adultos, e uma turma kids que desenvolve confiança, coordenação, disciplina e respeito.",
    video: "assets/video-jiujitsu.mp4",
    poster: "assets/images/aula-jiujitsu.jpg",
    legenda: "Aula de jiu-jítsu na IMPERIUM",
    foco: ["Técnica", "Estratégia", "Disciplina", "Respeito"]
  },
  {
    id: "muay-thai",
    nome: "Muay Thai",
    modalidades: ["muay-thai"],
    preview: "assets/previews/muay-thai.mp4", // prévia curta da vitrine
    titulo: ["Força. Técnica.", "Controle."],
    intro: "Um treino intenso para desenvolver condicionamento, confiança, disciplina e resistência. Intensidade, técnica e foco em treinos que desafiam o corpo e fortalecem a mente.",
    video: "assets/video-muay-thai.mp4",
    poster: "assets/images/treino-muay-thai.jpg",
    legenda: "Treino de Muay Thai na IMPERIUM",
    foco: ["Condicionamento", "Confiança", "Disciplina", "Resistência"]
  },
  {
    id: "funcional",
    nome: "Funcional",
    modalidades: ["funcional"],
    preview: null, // ADICIONAR: assets/previews/funcional.mp4
    titulo: ["Movimento que", "vira disposição."],
    intro: "Treinos dinâmicos para desenvolver condicionamento, mobilidade, força e disposição.",
    video: null, // ADICIONAR: assets/video-funcional.mp4
    poster: null, // ADICIONAR: assets/images/funcional.jpg
    legenda: "Treino funcional na IMPERIUM",
    foco: ["Condicionamento", "Mobilidade", "Força", "Disposição"]
  }
];

/* Grade de horários. Enquanto estiver vazia, o site mostra um convite para
   consultar pelo WhatsApp. Exemplo de preenchimento:
   { modalidade: "muay-thai", dias: "Seg · Qua · Sex", horarios: ["07:00", "19:30"] },
   (modalidade = id da lista MODALIDADES) */
export const HORARIOS = [];

/* Professores. Enquanto estiver vazio, a seção mostra apenas um texto curto.
   Exemplo:
   { nome: "Nome", modalidade: "Muay Thai", formacao: "...", experiencia: "...",
     mensagem: "...", foto: "assets/images/professor-nome.jpg" }, */
export const PROFESSORES = [];

/* Avaliações reais do Google. */
export const DEPOIMENTOS = [
  {
    nome: "Kitty Tatiane Franciscatto",
    texto: "Academia completa, com aulas de ritmos, muay thai e jiu-jitsu inclusos no plano!"
  }
];
export const TRECHOS_GOOGLE = [
  "Preço excelente, boa localização e bons profissionais.",
  "Tem um mezanino com 10 esteiras novas, bikes e demais aparelhos aeróbicos.",
  "Professores atenciosos, ótimo custo benefício."
];
