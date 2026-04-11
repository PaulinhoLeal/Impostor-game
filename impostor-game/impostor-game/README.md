# 🎭 Impostor — Facilitador

App facilitador para o jogo do Impostor. Distribui palavras por tema, sorteia o impostor e conduz a rodada com cartas individuais (sem spoiler entre jogadores).

## Como jogar

1. O **líder** adiciona os nomes dos jogadores e escolhe um tema
2. Clica em **Iniciar rodada**
3. O app mostra o nome do primeiro jogador — **passa o celular para ele**
4. A pessoa toca em "Estou com o celular" e depois toca na carta para revelar se é **Jogador** (vê a palavra) ou **Impostor** (vê a dica)
5. Memoriza e passa para o próximo
6. Depois de todos, o líder vê o resumo

---

## Deploy no Vercel (gratuito)

### Opção 1 — via GitHub (recomendado)

1. Crie um repositório no GitHub e suba os arquivos
2. Acesse [vercel.com](https://vercel.com) e faça login com GitHub
3. Clique em **Add New → Project** e selecione o repositório
4. Clique em **Deploy** — pronto! URL gerada automaticamente

### Opção 2 — via Vercel CLI

```bash
npm i -g vercel
cd impostor-game
vercel
```

---

## Usar offline (sem internet)

Depois de abrir no celular pelo navegador, toque em **"Adicionar à tela inicial"** (iOS Safari) ou **"Instalar app"** (Android Chrome). O app funciona 100% offline depois disso.

---

## Estrutura dos arquivos

```
impostor-game/
├── index.html      # Interface completa
├── app.js          # Toda a lógica do jogo
├── manifest.json   # Config PWA
├── sw.js           # Service Worker (offline)
├── icon.svg        # Ícone vetorial
├── icon-192.png    # Ícone PWA
├── icon-512.png    # Ícone PWA
└── vercel.json     # Config de deploy
```

## Temas incluídos (30 palavras cada)

🏰 Disney · ⚡ Marvel · 💻 Programação · 🎬 Filmes · 📺 Séries · 🎨 Desenhos · 🦁 Animais · 🎮 Jogos · 📚 Literatura · 🍕 Comidas · 🇬🇧 English Words
