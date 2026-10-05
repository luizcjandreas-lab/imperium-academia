# Site IMPERIUM Academia

Site institucional em **React + Vite**, organizado em abas (uma página por modalidade). Todos os botões de conversão abrem o WhatsApp.

## Páginas

| Aba | Arquivo | Endereço na Vercel |
|---|---|---|
| Início | `index.html` | `/` |
| Musculação | `musculacao.html` | `/musculacao` |
| Dança | `danca.html` | `/danca` |
| Jiu-jítsu (adulto e kids) | `jiu-jitsu.html` | `/jiu-jitsu` |
| Muay Thai | `muay-thai.html` | `/muay-thai` |
| Funcional | `funcional.html` | `/funcional` |
| Contato (mapa, horários, dúvidas) | `contato.html` | `/contato` |

Cada `.html` tem título, descrição e Open Graph próprios para o Google e o WhatsApp. O conteúdo das páginas de modalidade (título, texto, vídeo, foco) fica em `src/config.js` → `PAGINAS`. O `vercel.json` ativa os endereços sem `.html`.

## Estrutura

```
imperium-site/
├── index.html + 6 páginas     SEO, Open Graph por página, Schema.org (ExerciseGym) no início
├── vercel.json                Endereços limpos (/muay-thai)
├── package.json / vite.config.js
├── public/
│   ├── privacidade.html       Política de Privacidade
│   └── assets/
│       ├── logo-imperium.png  Logo com fundo transparente
│       ├── favicon.png · apple-touch-icon.png · og-imperium.jpg (compartilhamento)
│       ├── video-ambiente.mp4  (abertura, sem áudio)
│       ├── video-jiujitsu.mp4
│       ├── video-danca.mp4     (trecho de 40 s)
│       ├── video-muay-thai.mp4
│       └── images/             Capas e fotos extraídas dos vídeos reais
└── src/
    ├── config.js              ← WhatsApp, endereço, horários, professores, depoimentos
    ├── styles.css             Cores e fontes no topo (:root)
    ├── App.jsx · main.jsx     Escolhe a página pelo data-page do <body>
    ├── pages/                 Home, Modality (modelo das modalidades), Contact
    └── components/            Uma seção por arquivo
```

## O que editar e onde

| Quero mudar | Arquivo |
|---|---|
| Número do WhatsApp, telefone, endereço, horário de funcionamento, Instagram, Facebook | `src/config.js` → `SITE` |
| Mensagens automáticas do WhatsApp | `src/config.js` → `MSG_GERAL` e `mensagem` de cada modalidade |
| Texto ou foto de uma modalidade | `src/config.js` → `MODALIDADES` |
| Título, texto, vídeo e destaques da página de cada modalidade | `src/config.js` → `PAGINAS` |
| Vídeo do funcional (ainda não existe) | salve `public/assets/video-funcional.mp4` e preencha `video` e `poster` em `PAGINAS` |
| Grade de horários | `src/config.js` → `HORARIOS` (vazia = botão "Consultar horários") |
| Professores | `src/config.js` → `PROFESSORES` (vazio = texto curto) |
| Depoimentos | `src/config.js` → `DEPOIMENTOS` e `TRECHOS_GOOGLE` |
| História da academia | `src/components/About.jsx` (comentário "HISTÓRIA DA IMPERIUM") |
| Vídeos | substitua os arquivos em `public/assets/` mantendo o nome |
| Fotos que faltam (jiu-jítsu kids, funcional) | salve em `public/assets/images/` e aponte em `MODALIDADES` (campo `imagem`) |
| Crédito "Desenvolvido por" | `src/config.js` → `SITE.credito` |

Vídeos: MP4 H.264, até ~6 MB cada. A abertura do início e o vídeo de cada modalidade tocam sozinhos, sem som e em loop, com botões de pausar e ativar o som (não tocam sozinhos em conexão lenta ou com "reduzir movimento"). Na vitrine do início, a prévia em vídeo só carrega quando o mouse passa sobre a modalidade.

## Rodar no computador

Requer Node.js 18 ou mais novo.

```bash
npm install
npm run dev      # abre em http://localhost:5173
npm run build    # gera a pasta dist/ para publicação
```

## Publicar na Vercel

1. Suba esta pasta para um repositório no GitHub (com `package.json` na raiz).
2. Na Vercel: **Add New → Project**, importe o repositório.
3. A Vercel detecta **Vite** sozinha (Build: `npm run build`, Output: `dist`). Clique em **Deploy**.

Netlify: mesmo processo, com Build command `npm run build` e Publish directory `dist`.

Depois de ter o domínio definitivo, troque `https://imperium-academia-five.vercel.app` em `index.html` (canonical, Open Graph e Schema.org).

## Informações que ainda faltam

- **WhatsApp:** confirmar se (11) 4526-3390 recebe WhatsApp. Se for outro número, trocar em `SITE.whatsapp`.
- **Número do imóvel** na R. Clayr Fernando Gato (o Google mostra só a rua).
- **Horário de funcionamento completo** (hoje: "Aberto até as 22h").
- **Grade de horários** de cada modalidade.
- **Instagram e Facebook** oficiais.
- **História da academia** (seção "Mais do que uma academia").
- **Professores:** nome, modalidade, formação, experiência e foto.
- **Fotos de jiu-jítsu kids e funcional, e vídeo do funcional** (hoje há um painel com o emblema no lugar).
- **Mais depoimentos** com autorização dos alunos.
- **E-mail** e nome do responsável, se quiserem exibir.
