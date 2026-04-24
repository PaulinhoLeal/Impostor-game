/* ═══════════════════════════════════════════
   IMPOSTOR — FACILITADOR  app.js
════════════════════════════════════════════ */
const THEMES = {
  disney: {
    icon: '🏰', name: 'Disney',
    words: [
      { w: 'Simba', h: 'passado' },
      { w: 'Elsa', h: 'gelo' },
      { w: 'Cinderela', h: 'esperança' },
      { w: 'Ariel', h: 'curiosidade' },
      { w: 'Woody', h: 'lealdade' },
      { w: 'Nemo', h: 'tamanho' },
      { w: 'Mulan', h: 'disfarce' },
      { w: 'Hércules', h: 'força' },
      { w: 'Tarzan', h: 'selvagem' },
      { w: 'Moana', h: 'chamado' },
      { w: 'Stitch', h: 'lar' },
      { w: 'Dumbo', h: 'diferença' },
      { w: 'Bolt', h: 'ilusão' },
      { w: 'Rapunzel', h: 'prisão' },
      { w: 'Maléfica', h: 'transformação' },
      { w: 'Ursula', h: 'tentação' },
      { w: 'Gênio', h: 'limitação' },
      { w: 'Baloo', h: 'despreocupação' },
      { w: 'Mowgli', h: 'identidade' },
      { w: 'Merida', h: 'rebeldia' },
      { w: 'Tiana', h: 'esforço' },
      { w: 'Gaston', h: 'arrogância' },
      { w: 'Scar', h: 'inveja' },
      { w: 'Jafar', h: 'ambição' },
      { w: 'Cruella', h: 'obsessão' },
      { w: 'Gepeto', h: 'criação' },
      { w: 'Fada Sininho', h: 'ciúme' },
      { w: 'Megara', h: 'máscara' },
      { w: 'Flynn Rider', h: 'mudança' },
      { w: 'Iago', h: 'interesse' },
    ]
  },
  marvel: {
    icon: '⚡', name: 'Marvel',
    words: [
      { w: 'Homem-Aranha', h: 'responsabilidade' },
      { w: 'Thor', h: 'humildade' },
      { w: 'Viúva Negra', h: 'culpa' },
      { w: 'Hulk', h: 'controle' },
      { w: 'Capitão América', h: 'valores' },
      { w: 'Thanos', h: 'convicção' },
      { w: 'Gavião Arqueiro', h: 'presença' },
      { w: 'Doutor Estranho', h: 'recomeço' },
      { w: 'Pantera Negra', h: 'equilíbrio' },
      { w: 'Visão', h: 'existência' },
      { w: 'Loki', h: 'traição' },
      { w: 'Rocket', h: 'dureza' },
      { w: 'Groot', h: 'silêncio' },
      { w: 'Wanda', h: 'luto' },
      { w: 'Ultron', h: 'criação' },
      { w: 'Gamora', h: 'escolha' },
      { w: 'Shuri', h: 'genialidade' },
      { w: 'Okoye', h: 'dever' },
      { w: 'Falcão', h: 'legado' },
      { w: 'Homem de Ferro', h: 'ego' },
      { w: 'Nick Fury', h: 'estratégia' },
      { w: 'Capitã Marvel', h: 'identidade' },
      { w: 'Homem-Formiga', h: 'improvável' },
      { w: 'Moon Knight', h: 'fragmentação' },
      { w: 'Blade', h: 'dualidade' },
      { w: 'Demolidor', h: 'interpretação' },
      { w: 'Jessica Jones', h: 'relutância' },
      { w: 'Máquina de Combate', h: 'parceria' },
      { w: 'Ms. Marvel', h: 'inspiração' },
      { w: 'Vespa', h: 'sinergia' },
    ]
  },
  programacao: {
    icon: '💻', name: 'Programação',
    words: [
      { w: 'Bug', h: 'falha' },
      { w: 'Deploy', h: 'exposição' },
      { w: 'Git', h: 'rastro' },
      { w: 'API', h: 'ponte' },
      { w: 'Loop', h: 'ciclo' },
      { w: 'Função', h: 'eficiência' },
      { w: 'Array', h: 'sequência' },
      { w: 'Database', h: 'armazenamento' },
      { w: 'Framework', h: 'estrutura' },
      { w: 'Debug', h: 'investigação' },
      { w: 'Commit', h: 'registro' },
      { w: 'Branch', h: 'alternativa' },
      { w: 'Terminal', h: 'velocidade' },
      { w: 'Servidor', h: 'resposta' },
      { w: 'Cache', h: 'memória' },
      { w: 'Refactor', h: 'refinamento' },
      { w: 'Variável', h: 'recipiente' },
      { w: 'Classe', h: 'organização' },
      { w: 'Recursão', h: 'espelho' },
      { w: 'Algoritmo', h: 'roteiro' },
      { w: 'Compilador', h: 'tradução' },
      { w: 'Docker', h: 'portabilidade' },
      { w: 'WebSocket', h: 'instantâneo' },
      { w: 'Cookie', h: 'rastro' },
      { w: 'Token', h: 'autenticação' },
      { w: 'Endpoint', h: 'destino' },
      { w: 'Middleware', h: 'intermediário' },
      { w: 'Sprint', h: 'prazo' },
      { w: 'Herança', h: 'reaproveitamento' },
      { w: 'Lint', h: 'padrão' },
    ]
  },
  filmes: {
    icon: '🎬', name: 'Filmes',
    words: [
      { w: 'Matrix', h: 'ilusão' },
      { w: 'Titanic', h: 'tragédia' },
      { w: 'Interestelar', h: 'relatividade' },
      { w: 'Avatar', h: 'realidade' },
      { w: 'Gladiador', h: 'queda' },
      { w: 'Parasita', h: 'sonho' },
      { w: 'Coringa', h: 'disfarce' },
      { w: 'Duna', h: 'declínio' },
      { w: 'Oppenheimer', h: 'destino' },
      { w: 'Barbie', h: 'consequência' },
      { w: 'Alien', h: 'ameaça' },
      { w: 'Tubarão', h: 'invisível' },
      { w: 'Psicose', h: 'aparência' },
      { w: 'Casablanca', h: 'timing' },
      { w: 'Tenet', h: 'ordem' },
      { w: 'Shrek', h: 'superfície' },
      { w: 'Vingadores', h: 'união' },
      { w: 'Homem-Aranha', h: 'equilíbrio' },
      { w: 'Harry Potter', h: 'descoberta' },
      { w: 'Jurassic Park', h: 'controle' },
      { w: 'Batman', h: 'trauma' },
      { w: 'Superman', h: 'peso' },
      { w: 'Velozes e Furiosos', h: 'lealdade' },
      { w: 'Família Addams', h: 'família' },
      { w: 'Kung Fu Panda', h: 'lenda' },
      { w: 'Noiva Cadáver', h: 'morte' },
      { w: 'Apocalypto', h: 'antiguidade' },
      { w: 'Hellboy', h: 'inferno' },
      { w: 'Os Incríveis', h: 'força' },
      { w: 'Dia D', h: 'extinção' },
    ]
  },
  series: {
    icon: '📺', name: 'Séries',
    words: [
      { w: 'Breaking Bad', h: 'transformação' },
      { w: 'Friends', h: 'vínculo' },
      { w: 'The Office', h: 'absurdo' },
      { w: 'Stranger Things', h: 'ameaça' },
      { w: 'Game of Thrones', h: 'poder' },
      { w: 'Dark', h: 'padrão' },
      { w: 'Chernobyl', h: 'silêncio' },
      { w: 'Sherlock', h: 'detalhe' },
      { w: 'Lost', h: 'recomeço' },
      { w: 'Round 6', h: 'desespero' },
      { w: 'Euphoria', h: 'caos' },
      { w: 'Ozark', h: 'armadilha' },
      { w: 'Narcos', h: 'preço' },
      { w: 'Mindhunter', h: 'profundidade' },
      { w: 'Succession', h: 'herança' },
      { w: 'Fleabag', h: 'leveza' },
      { w: 'Atlanta', h: 'sobrevivência' },
      { w: 'Hannibal', h: 'refinamento' },
      { w: 'Mr. Robot', h: 'isolamento' },
      { w: 'Better Call Saul', h: 'acúmulo' },
      { w: 'The Boys', h: 'corrupção' },
      { w: 'Severance', h: 'divisão' },
      { w: 'The Bear', h: 'paixão' },
      { w: 'White Lotus', h: 'aparência' },
      { w: 'Silo', h: 'ignorância' },
      { w: 'Fallout', h: 'escombros' },
      { w: 'House of Dragon', h: 'conflito' },
      { w: 'Andor', h: 'resistência' },
      { w: 'Yellowjackets', h: 'mudança' },
      { w: 'Pachinko', h: 'raízes' },
    ]
  },
  desenhos: {
    icon: '🎨', name: 'Desenhos',
    words: [
      { w: 'Bob Esponja', h: 'otimismo' },
      { w: 'Tom e Jerry', h: 'rivalidade' },
      { w: 'Pernalonga', h: 'calma' },
      { w: 'Pato Donald', h: 'temperamento' },
      { w: 'Scooby-Doo', h: 'coragem' },
      { w: 'Popeye', h: 'impulso' },
      { w: 'Thundercats', h: 'guerreiro' },
      { w: 'Flintstones', h: 'modernidade' },
      { w: 'Jetsons', h: 'futuro' },
      { w: 'Johnny Bravo', h: 'vaidade' },
      { w: 'Dexter', h: 'segredo' },
      { w: 'Rugrats', h: 'imaginação' },
      { w: 'Steven Universe', h: 'amor' },
      { w: 'Gravity Falls', h: 'mistério' },
      { w: 'Rick e Morty', h: 'caos' },
      { w: 'Samurai Jack', h: 'honra' },
      { w: 'Courage', h: 'proteção' },
      { w: 'Ed Edd Eddy', h: 'ambição' },
      { w: 'Animaniacs', h: 'irritação' },
      { w: 'Pinky e Cérebro', h: 'conquista' },
      { w: 'Avatar', h: 'equilíbrio' },
      { w: 'Ben 10', h: 'transformação' },
      { w: 'Hora de Aventura', h: 'aventura' },
      { w: 'Pica-Pau', h: 'irreverência' },
      { w: 'Tartarugas Ninja', h: 'disciplina' },
      { w: 'He-Man', h: 'poder' },
      { w: 'KND', h: 'rebeldia' },
      { w: 'Juniper Lee', h: 'heroísmo' },
      { w: 'Peppa Pig', h: 'inocência' },
      { w: 'Irmão do Jorel', h: 'fama' },
    ]
  },
  animais: {
    icon: '🦁', name: 'Animais',
    words: [
      { w: 'Tubarão', h: 'predador' },
      { w: 'Elefante', h: 'memória' },
      { w: 'Gorila', h: 'força' },
      { w: 'Coala', h: 'sono' },
      { w: 'Pinguim', h: 'caminhada' },
      { w: 'Ornitorrinco', h: 'contradição' },
      { w: 'Axolote', h: 'sorriso' },
      { w: 'Camaleão', h: 'adaptação' },
      { w: 'Narval', h: 'chifre' },
      { w: 'Pangolim', h: 'armadura' },
      { w: 'Quokka', h: 'alegria' },
      { w: 'Capivara', h: 'tamanho' },
      { w: 'Lontra', h: 'companhia' },
      { w: 'Tatu', h: 'proteção' },
      { w: 'Preguiça', h: 'lentidão' },
      { w: 'Tamanduá', h: 'fome' },
      { w: 'Anta', h: 'semelhança' },
      { w: 'Piranha', h: 'perigo' },
      { w: 'Arara', h: 'cor' },
      { w: 'Sucuri', h: 'gigante' },
      { w: 'Lobo Guará', h: 'pelagem' },
      { w: 'Onça Pintada', h: 'manchas' },
      { w: 'Boto', h: 'rosa' },
      { w: 'Mico Leão', h: 'raridade' },
      { w: 'Jabuti', h: 'longevidade' },
      { w: 'Peixe-Boi', h: 'quietude' },
      { w: 'Canguru', h: 'salto' },
      { w: 'Fossa', h: 'estranheza' },
      { w: 'Manta', h: 'planar' },
      { w: 'Tapir', h: 'focinho' },
    ]
  },
  jogos: {
    icon: '🎮', name: 'Jogos',
    words: [
      { w: 'Minecraft', h: 'construção' },
      { w: 'Zelda', h: 'missão' },
      { w: 'Mario', h: 'encanador' },
      { w: 'Sonic', h: 'velocidade' },
      { w: 'Pokémon', h: 'batalha' },
      { w: 'Dark Souls', h: 'morte' },
      { w: 'Fortnite', h: 'sobrevivência' },
      { w: 'Tetris', h: 'encaixe' },
      { w: 'Pac-Man', h: 'fuga' },
      { w: 'Street Fighter', h: 'duelo' },
      { w: 'God of War', h: 'divindade' },
      { w: 'GTA', h: 'crime' },
      { w: 'Doom', h: 'inferno' },
      { w: 'Elden Ring', h: 'desafio' },
      { w: 'Hollow Knight', h: 'decadência' },
      { w: 'Celeste', h: 'ansiedade' },
      { w: 'Hades', h: 'escape' },
      { w: 'Among Us', h: 'traição' },
      { w: 'Stardew Valley', h: 'colheita' },
      { w: 'Red Dead', h: 'horizonte' },
      { w: 'The Last of Us', h: 'proteção' },
      { w: 'Cyberpunk', h: 'néon' },
      { w: 'Portal', h: 'portal' },
      { w: 'Half-Life', h: 'experimento' },
      { w: 'Bioshock', h: 'distopia' },
      { w: 'Undertale', h: 'compaixão' },
      { w: 'Cuphead', h: 'diabo' },
      { w: 'Bloodborne', h: 'sangue' },
      { w: 'Resident Evil', h: 'monstro' },
      { w: 'Roblox', h: 'polêmica' },
    ]
  },
  literatura: {
    icon: '📚', name: 'Literatura',
    words: [
      { w: 'Hamlet', h: 'suspeita' },
      { w: 'Dom Quixote', h: 'loucura' },
      { w: 'Odisseia', h: 'jornada' },
      { w: 'Metamorfose', h: 'metamorfose' },
      { w: '1984', h: 'vigilância' },
      { w: 'Drácula', h: 'sangue' },
      { w: 'Frankenstein', h: 'criação' },
      { w: 'Moby Dick', h: 'obsessão' },
      { w: 'Crime e Castigo', h: 'culpa' },
      { w: 'Dom Casmurro', h: 'ciúme' },
      { w: 'O Alienista', h: 'internação' },
      { w: 'Grande Sertão', h: 'sertão' },
      { w: 'Iracema', h: 'amor' },
      { w: 'Vidas Secas', h: 'seca' },
      { w: 'A Hora da Estrela', h: 'sobrevivência' },
      { w: 'Fahrenheit 451', h: 'censura' },
      { w: 'O Senhor dos Anéis', h: 'missão' },
      { w: 'Harry Potter', h: 'magia' },
      { w: 'O Pequeno Príncipe', h: 'questionamento' },
      { w: 'A Revolução dos Bichos', h: 'rebeldia' },
      { w: 'Cem Anos de Solidão', h: 'solidão' },
      { w: 'O Alquimista', h: 'destino' },
      { w: 'Capitães da Areia', h: 'marginalidade' },
      { w: 'Memórias Póstumas', h: 'ironia' },
      { w: 'Lavoura Arcaica', h: 'retorno' },
      { w: 'Quincas Borba', h: 'absurdo' },
      { w: 'Sagarana', h: 'simplicidade' },
      { w: 'Macunaíma', h: 'caráter' },
      { w: 'Ensaio sobre a Cegueira', h: 'cegueira' },
      { w: 'Ficciones', h: 'labirinto' },
    ]
  },
  comidas: {
    icon: '🍕', name: 'Comidas',
    words: [
      { w: 'Sushi', h: 'mar' },
      { w: 'Lasanha', h: 'camadas' },
      { w: 'Brigadeiro', h: 'chocolate' },
      { w: 'Tapioca', h: 'goma' },
      { w: 'Coxinha', h: 'frito' },
      { w: 'Feijoada', h: 'feijão' },
      { w: 'Paella', h: 'arroz' },
      { w: 'Ramen', h: 'caldo' },
      { w: 'Croissant', h: 'folhado' },
      { w: 'Yakisoba', h: 'macarrão' },
      { w: 'Moqueca', h: 'dendê' },
      { w: 'Acarajé', h: 'vatapá' },
      { w: 'Pastel', h: 'massa' },
      { w: 'Churrasco', h: 'brasa' },
      { w: 'Pão de Queijo', h: 'polvilho' },
      { w: 'Escondidinho', h: 'purê' },
      { w: 'Temaki', h: 'alga' },
      { w: 'Fondue', h: 'derretido' },
      { w: 'Crepe', h: 'dobrado' },
      { w: 'Tiramisu', h: 'café' },
      { w: 'Carbonara', h: 'ovo' },
      { w: 'Empada', h: 'tortinha' },
      { w: 'Caldo Verde', h: 'couve' },
      { w: 'Pato no Tucupi', h: 'tucupi' },
      { w: 'Baião de Dois', h: 'coalho' },
      { w: 'Quibe', h: 'hortelã' },
      { w: 'Esfira', h: 'queijo' },
      { w: 'Brigadeirão', h: 'pudim' },
      { w: 'Cuscuz', h: 'vapor' },
      { w: 'Pirão', h: 'mandioca' },
    ]
  },
  ingles: {
    icon: '🇬🇧', name: 'English Words',
    words: [
      { w: 'Ephemeral', h: 'brevidade' },
      { w: 'Serendipity', h: 'acidente' },
      { w: 'Melancholy', h: 'tristeza' },
      { w: 'Whimsical', h: 'peculiar' },
      { w: 'Labyrinth', h: 'labirinto' },
      { w: 'Zenith', h: 'topo' },
      { w: 'Cascade', h: 'queda' },
      { w: 'Paradox', h: 'contradição' },
      { w: 'Elusive', h: 'esquivo' },
      { w: 'Resilient', h: 'resiliência' },
      { w: 'Wanderlust', h: 'movimento' },
      { w: 'Petrichor', h: 'cheiro' },
      { w: 'Solitude', h: 'paz' },
      { w: 'Eloquent', h: 'persuasão' },
      { w: 'Tenacious', h: 'firmeza' },
      { w: 'Luminous', h: 'brilho' },
      { w: 'Cryptic', h: 'mistério' },
      { w: 'Nostalgia', h: 'saudade' },
      { w: 'Ambivalent', h: 'ambivalência' },
      { w: 'Pristine', h: 'pureza' },
      { w: 'Obsolete', h: 'obsolência' },
      { w: 'Euphoria', h: 'euforia' },
      { w: 'Catharsis', h: 'alívio' },
      { w: 'Ubiquitous', h: 'onipresença' },
      { w: 'Stoic', h: 'frieza' },
      { w: 'Pensive', h: 'pensamento' },
      { w: 'Aloof', h: 'distância' },
      { w: 'Candid', h: 'honestidade' },
      { w: 'Frugal', h: 'economia' },
      { w: 'Verbose', h: 'prolixidade' },
    ]
  }
};

/* ── STATE ── */
let players = [], selectedTheme = null, history = [], currentRound = null, cardIdx = 0, cardFlipped = false;
let hintEnabled = true, numImpostors = 1;
try { history = JSON.parse(localStorage.getItem('impostor_v3') || '[]'); } catch (e) {}

/* ── SCREEN NAV ── */
function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  window.scrollTo(0, 0);
}
function goSetup() { show('setup'); }
function goHistory() { renderHistory(); show('history'); }

/* ── THEMES ── */
function renderThemes() {
  const g = document.getElementById('themeGrid');
  g.innerHTML = '';
  Object.entries(THEMES).forEach(([k, v]) => {
    const d = document.createElement('div');
    d.className = 'theme-card' + (selectedTheme === k ? ' selected' : '');
    d.innerHTML = `<div class="t-icon">${v.icon}</div><div class="t-name">${v.name}</div>`;
    d.onclick = () => selectTheme(k);
    g.appendChild(d);
  });
}
function selectTheme(k) { selectedTheme = k; renderThemes(); updateSteps(); updateStartBtn(); }
function randomTheme() {
  const keys = Object.keys(THEMES);
  selectTheme(keys[Math.floor(Math.random() * keys.length)]);
}

/* ── PLAYERS ── */
function addPlayer() {
  const inp = document.getElementById('playerInput');
  const name = inp.value.trim();
  if (!name) return;
  if (players.length >= 10) { showAlert('Máximo de 10 jogadores!'); return; }
  if (players.find(p => p.toLowerCase() === name.toLowerCase())) { showAlert('Nome já existe!'); return; }
  players.push(name);
  inp.value = '';
  inp.focus();
  renderPlayers();
  updateSteps();
  updateStartBtn();
}
function removePlayer(i) {
  players.splice(i, 1);
  renderPlayers();
  updateSteps();
  updateStartBtn();
}
function renderPlayers() {
  const l = document.getElementById('playerList');
  l.innerHTML = '';
  players.forEach((p, i) => {
    const d = document.createElement('div');
    d.className = 'player-chip';
    d.innerHTML = `
      <div class="player-chip-left">
        <div class="player-num">${i + 1}</div>
        <span style="font-size:.88rem">${p}</span>
      </div>
      <button class="btn btn-danger" onclick="removePlayer(${i})">✕</button>`;
    l.appendChild(d);
  });
  document.getElementById('counterText').textContent = `${players.length} / 10 jogadores`;
}
function updateStartBtn() {
  document.getElementById('startBtn').disabled = players.length < 3 || !selectedTheme;
  // Clamp impostor count to valid range whenever player count changes
  const maxImp = Math.max(1, Math.floor(players.length / 2) - 1);
  if (numImpostors > maxImp) {
    numImpostors = maxImp;
    document.getElementById('impostorCount').textContent = numImpostors;
    document.getElementById('impostorCountLabel').textContent =
      numImpostors === 1 ? '1 impostor por rodada' : numImpostors + ' impostores por rodada';
  }
}
function updateSteps() {
  document.getElementById('s1').className = 'step' + (players.length > 0 ? ' done' : '');
  document.getElementById('s2').className = 'step' + (selectedTheme ? ' done' : players.length > 0 ? ' active' : '');
  document.getElementById('s3').className = 'step' + (players.length >= 3 && selectedTheme ? ' active' : '');
}
function showAlert(msg) {
  const a = document.getElementById('alertPop');
  a.textContent = msg;
  a.style.display = 'block';
  setTimeout(() => a.style.display = 'none', 2200);
}

/* ── OPTIONS ── */
function toggleHint() {
  hintEnabled = !hintEnabled;
  const btn = document.getElementById('hintToggle');
  btn.classList.toggle('active', hintEnabled);
}

function changeImpostors(delta) {
  const maxImpostors = Math.max(1, Math.floor(players.length / 2) - 1) || 1;
  numImpostors = Math.min(Math.max(1, numImpostors + delta), maxImpostors);
  document.getElementById('impostorCount').textContent = numImpostors;
  document.getElementById('impostorCountLabel').textContent =
    numImpostors === 1 ? '1 impostor por rodada' : numImpostors + ' impostores por rodada';
}

/* ── ROUND ── */
function shuffle(arr) { return [...arr].sort(() => Math.random() - .5); }

function pickImpostors(total, count) {
  const idxs = [];
  while (idxs.length < count) {
    const r = Math.floor(Math.random() * total);
    if (!idxs.includes(r)) idxs.push(r);
  }
  return idxs;
}

function startRound() {
  if (players.length < 3 || !selectedTheme) return;
  const theme = THEMES[selectedTheme];
  const wordObj = shuffle(theme.words)[0];
  const shuffledPlayers = shuffle([...players]);
  // Clamp impostors to valid range for current player count
  const maxImp = Math.max(1, Math.floor(shuffledPlayers.length / 2) - 1);
  const actualImpostors = Math.min(numImpostors, maxImp);
  const impostorIdxs = pickImpostors(shuffledPlayers.length, actualImpostors);
  currentRound = {
    theme: selectedTheme,
    themeName: theme.name,
    themeIcon: theme.icon,
    word: wordObj.w,
    hint: wordObj.h,
    hintEnabled,
    impostorIdxs,
    // keep legacy field for history compatibility
    impostorIdx: impostorIdxs[0],
    players: shuffledPlayers,
    date: new Date().toLocaleString('pt-BR')
  };
  history.unshift({ ...currentRound });
  try { localStorage.setItem('impostor_v3', JSON.stringify(history.slice(0, 20))); } catch (e) {}
  cardIdx = 0;
  showPassScreen();
}

/* ── DOTS ── */
function renderDots() {
  const d = document.getElementById('progressDots');
  d.innerHTML = '';
  currentRound.players.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'dot' + (i < cardIdx ? ' done' : i === cardIdx ? ' current' : '');
    d.appendChild(dot);
  });
}

/* ── PASS SCREEN ── */
function showPassScreen() {
  document.getElementById('passName').textContent = currentRound.players[cardIdx];
  renderDots();
  show('pass');
}

/* ── CARD SCREEN ── */
function goToCard() {
  cardFlipped = false;
  const r = currentRound, idx = cardIdx;
  const isImp = r.impostorIdxs.includes(idx);
  const isLast = idx === r.players.length - 1;
  const totalImpostors = r.impostorIdxs.length;

  document.getElementById('cardName').textContent = r.players[idx];
  document.getElementById('cardInner').classList.remove('flipped');
  document.getElementById('cardContainer').style.pointerEvents = 'auto';

  const front = document.getElementById('cardFront');
  if (isImp) {
    const showHint = r.hintEnabled;
    const impNum = totalImpostors > 1
      ? `<div class="card-impostor-num">Há ${totalImpostors} impostores nesta rodada</div>`
      : '';
    front.className = 'card-face card-front-impostor';
    front.innerHTML = `
      <div class="card-icon">🔴</div>
      <div class="card-role role-impostor">IMPOSTOR</div>
      ${impNum}
      ${showHint
        ? `<div class="card-word-label" style="margin-top:.75rem">Sua dica</div>
           <div class="card-word impostor-hint">${r.hint}</div>`
        : `<div class="card-word-label" style="margin-top:.75rem;color:var(--accent2)">Sem dica nesta rodada</div>
           <div style="font-size:.8rem;color:var(--muted);text-align:center;margin-top:.5rem">Descubra a palavra ouvindo os outros jogadores</div>`
      }`;
  } else {
    front.className = 'card-face card-front-player';
    front.innerHTML = `
      <div class="card-icon">🟢</div>
      <div class="card-role role-player">JOGADOR</div>
      <div class="card-word-label" style="margin-top:.75rem">Sua palavra</div>
      <div class="card-word player-word">${r.word}</div>`;
  }

  const btn = document.getElementById('memorizedBtn');
  btn.classList.remove('visible');
  btn.textContent = isLast ? 'Memorizado — finalizar rodada' : 'Memorizei — passar o celular';
  show('card');
}

function flipCard() {
  if (cardFlipped) return;
  cardFlipped = true;
  document.getElementById('cardContainer').style.pointerEvents = 'none';
  document.getElementById('cardInner').classList.add('flipped');
  setTimeout(() => document.getElementById('memorizedBtn').classList.add('visible'), 650);
}

function onMemorized() {
  const isLast = cardIdx === currentRound.players.length - 1;

  if (isLast) {
    // Último jogador vai para tela "passe para o líder" antes do resumo
    renderSummary();
    show('pass-leader');
    return;
  }

  cardIdx++;
  showPassScreen();
}

function goToSummary() {
  show('summary');
}

/* ── SUMMARY ── */
function renderSummary() {
  const r = currentRound;
  document.getElementById('leaderView').innerHTML = r.players.map((name, i) => {
    const isImp = r.impostorIdxs.includes(i);
    return `<div class="leader-row">
      <div class="player-num">${i + 1}</div>
      <div style="flex:1;font-size:.85rem">${name}</div>
      <span class="lbadge ${isImp ? 'lbadge-i' : 'lbadge-p'}">${isImp ? 'IMPOSTOR' : 'JOGADOR'}</span>
      <span class="lword">${isImp ? (r.hintEnabled ? r.hint : 'sem dica') : r.word}</span>
    </div>`;
  }).join('');
  const hintBox = document.getElementById('hintBox');
  if (r.hintEnabled) {
    hintBox.style.display = '';
    document.getElementById('hintFull').textContent = r.hint;
  } else {
    hintBox.style.display = 'none';
  }
}

/* ── HISTORY ── */
function renderHistory() {
  const l = document.getElementById('historyList');
  if (!history.length) {
    l.innerHTML = '<div class="history-empty">Nenhuma rodada ainda.</div>';
    return;
  }
  l.innerHTML = history.slice(0, 20).map(r => `
    <div class="hist-item">
      <div class="hist-top">
        <div class="hist-theme">${r.themeIcon} ${r.themeName}</div>
        <div class="hist-date">${r.date}</div>
      </div>
      <div class="hist-detail">
        Palavra: <strong>${r.word}</strong> · Impostor(es): <strong>${(r.impostorIdxs||[r.impostorIdx]).map(i=>r.players[i]).join(", ")}</strong> · ${r.players.length} jogadores
      </div>
    </div>`).join('');
}

/* ── PWA INSTALL ── */
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  const banner = document.getElementById('installBanner');
  if (banner && !localStorage.getItem('pwa_dismissed')) banner.classList.add('show');
});
function installPWA() {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(() => {
    deferredPrompt = null;
    document.getElementById('installBanner').classList.remove('show');
  });
}
function dismissInstall() {
  document.getElementById('installBanner').classList.remove('show');
  localStorage.setItem('pwa_dismissed', '1');
}

/* ── INIT ── */
renderThemes();
renderPlayers();
updateSteps();
