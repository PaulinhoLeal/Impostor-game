/* ═══════════════════════════════════════════
   IMPOSTOR — FACILITADOR
   app.js
════════════════════════════════════════════ */

/* ── DATA ── */
const THEMES = {
 disney: {
  icon: '🏰', name: 'Disney',
  words: [
    { w: 'Simba', h: 'Às vezes fugir parece mais fácil do que enfrentar o passado.' },
    { w: 'Elsa', h: 'Tem gente que precisa se afastar pra não machucar quem ama.' },
    { w: 'Cinderela', h: 'Mesmo quando tudo dá errado, ainda dá pra acreditar que pode melhorar.' },
    { w: 'Ariel', h: 'Tem momentos em que a gente abre mão de tudo por curiosidade.' },
    { w: 'Woody', h: 'Ser deixado de lado é difícil, mas lealdade ainda importa.' },
    { w: 'Nemo', h: 'Mesmo pequeno, dá pra causar uma grande preocupação.' },
    { w: 'Mulan', h: 'Às vezes a gente precisa fingir ser outra pessoa pra provar algo.' },
    { w: 'Hércules', h: 'Ser forte não significa que você já é quem deveria ser.' },
    { w: 'Tarzan', h: 'Crescer em um lugar diferente muda totalmente quem você é.' },
    { w: 'Moana', h: 'Tem gente que sente um chamado que não consegue ignorar.' },
    { w: 'Stitch', h: 'Mesmo sendo problemático, todo mundo precisa de um lugar pra chamar de casa.' },
    { w: 'Dumbo', h: 'Aquilo que te zoam pode ser justamente o que te destaca.' },
    { w: 'Bolt', h: 'Nem tudo que a gente acredita sobre si mesmo é real.' },
    { w: 'Rapunzel', h: 'Viver preso faz a gente valorizar ainda mais a liberdade.' },
    { w: 'Maléfica', h: 'Uma decepção pode transformar completamente alguém.' },
    { w: 'Ursula', h: 'Sempre tem alguém disposto a fazer um acordo arriscado.' },
    { w: 'Gênio', h: 'Ter muito poder não significa poder fazer tudo.' },
    { w: 'Baloo', h: 'Às vezes viver sem preocupação é o melhor jeito de viver.' },
    { w: 'Mowgli', h: 'Crescer fora do seu lugar de origem pode confundir quem você é.' },
    { w: 'Merida', h: 'Nem todo mundo quer seguir o caminho que foi imposto.' },
    { w: 'Tiana', h: 'Trabalhar duro nem sempre garante que tudo vai sair como planejado.' },
    { w: 'Gaston', h: 'Tem gente que acha que merece tudo só por ser quem é.' },
    { w: 'Scar', h: 'A inveja pode levar alguém a fazer coisas imperdoáveis.' },
    { w: 'Jafar', h: 'Quem quer poder demais acaba mostrando quem realmente é.' },
    { w: 'Cruella', h: 'Obcecação pode fazer alguém perder completamente o limite.' },
    { w: 'Gepeto', h: 'Criar algo especial pode trazer consequências inesperadas.' },
    { w: 'Fada Sininho', h: 'Ciúmes às vezes fazem a gente agir sem pensar.' },
    { w: 'Megara', h: 'Nem sempre quem parece forte está realmente bem por dentro.' },
    { w: 'Flynn Rider', h: 'Às vezes alguém muda completamente por causa de outra pessoa.' },
    { w: 'Iago', h: 'Tem gente que só está por perto por interesse.' },
  ]
},
 marvel: {
  icon: '⚡', name: 'Marvel',
  words: [
    { w: 'Homem-Aranha', h: 'Às vezes a vida pessoal entra em conflito com a vida de super poderose.' },
    { w: 'Thor', h: 'Aprender humildade pode ser mais difícil do que qualquer batalha.' },
    { w: 'Viúva Negra', h: 'O passado nunca deixa de cobrar, não importa o quanto você mude.' },
    { w: 'Hulk', h: 'Controlar as próprias emoções pode ser o maior desafio de todos.' },
    { w: 'Capitão América', h: 'Manter seus valores mesmo quando o mundo muda é essencial.' },
    { w: 'Thanos', h: 'Alguns acreditam que estão fazendo o certo, mesmo com consequências extremas.' },
    { w: 'Gavião Arqueiro', h: 'Nem sempre é preciso ter poderes para fazer a diferença.' },
    { w: 'Doutor Estranho', h: 'Às vezes perder tudo é o começo de uma nova jornada.' },
    { w: 'Pantera Negra', h: 'Liderar envolve equilibrar tradição e inovação.' },
    { w: 'Visão', h: 'Entender o que significa ser humano pode ser mais complexo do que parece.' },
    { w: 'Loki', h: 'Nem sempre dá pra confiar em quem está ao seu lado.' },
    { w: 'Rocket', h: 'Uma personalidade difícil pode esconder alguém que se importa.' },
    { w: 'Groot', h: 'Mesmo com poucas palavras, dá pra demonstrar muito.' },
    { w: 'Wanda', h: 'A dor pode fazer alguém perder o controle da realidade.' },
    { w: 'Ultron', h: 'Criar algo sem limites pode sair completamente do controle.' },
    { w: 'Gamora', h: 'Nem todo mundo escolhe de onde veio, mas pode escolher quem quer ser.' },
    { w: 'Shuri', h: 'Inteligência pode ser a maior arma em qualquer situação.' },
    { w: 'Okoye', h: 'Lealdade ao dever pode entrar em conflito com sentimentos pessoais.' },
    { w: 'Falcão', h: 'Assumir um legado pode ser mais pesado do que parece.' },
    { w: 'Homem de Ferro', h: 'Gênio e ego costumam andar lado a lado.' },
    { w: 'Nick Fury', h: 'Sempre existe um plano por trás do plano.' },
    { w: 'Capitã Marvel', h: 'Descobrir quem você é muda completamente sua perspectiva.' },
    { w: 'Homem-Formiga', h: 'Às vezes pessoas improváveis acabam sendo heróis.' },
    { w: 'Moon Knight', h: 'A mente pode ser um lugar difícil de entender.' },
    { w: 'Blade', h: 'Viver entre dois mundos nunca é simples.' },
    { w: 'Demolidor', h: 'Justiça pode ter significados diferentes dependendo da situação.' },
    { w: 'Jessica Jones', h: 'Nem todo herói quer ser visto como um.' },
    { w: 'Máquina de Combate', h: 'Parcerias fortes fazem diferença em momentos críticos.' },
    { w: 'Ms. Marvel', h: 'Ser fã de algo pode mudar sua própria história.' },
    { w: 'Vespa', h: 'Trabalhar em equipe é essencial para superar desafios maiores.' },
  ]
},
  programacao: {
  icon: '💻', name: 'Programação',
  words: [
    { w: 'Bug', h: 'Tudo parecia funcionar… até parar do nada.' },
    { w: 'Deploy', h: 'Depois disso, todo mundo vai ver o que você fez.' },
    { w: 'Git', h: 'Sempre tem um histórico pra lembrar do que você fez antes.' },
    { w: 'API', h: 'É tipo um intermediário que conecta duas coisas diferentes.' },
    { w: 'Loop', h: 'Às vezes você fica preso repetindo a mesma coisa várias vezes.' },
    { w: 'Função', h: 'Serve pra evitar fazer a mesma coisa manualmente toda hora.' },
    { w: 'Array', h: 'Quando você precisa organizar várias coisas em sequência.' },
    { w: 'Database', h: 'Tudo precisa ser guardado em algum lugar confiável.' },
    { w: 'Framework', h: 'Ajuda bastante, mas às vezes parece limitar você.' },
    { w: 'Debug', h: 'É aquele momento de investigar o que deu errado.' },
    { w: 'Commit', h: 'Um registro do que você decidiu mudar.' },
    { w: 'Branch', h: 'Um caminho alternativo pra testar sem estragar o principal.' },
    { w: 'Terminal', h: 'Nem todo mundo gosta, mas quem usa costuma ser rápido.' },
    { w: 'Servidor', h: 'Tem sempre algo rodando por trás respondendo tudo.' },
    { w: 'Cache', h: 'Guardar agora pra não precisar buscar depois.' },
    { w: 'Refactor', h: 'Melhorar sem mudar o que já funciona.' },
    { w: 'Variável', h: 'Um lugar onde você guarda algo pra usar depois.' },
    { w: 'Classe', h: 'Uma forma de organizar coisas que têm algo em comum.' },
    { w: 'Recursão', h: 'Quando algo resolve chamando a si mesmo.' },
    { w: 'Algoritmo', h: 'Um passo a passo pra chegar em algum resultado.' },
    { w: 'Compilador', h: 'Transforma algo que você entende em algo que a máquina entende.' },
    { w: 'Docker', h: 'Funciona igual em qualquer lugar… ou pelo menos deveria.' },
    { w: 'WebSocket', h: 'Quando a comunicação precisa acontecer em tempo real.' },
    { w: 'Cookie', h: 'Pequenas informações guardadas sem você perceber.' },
    { w: 'Token', h: 'Uma forma de provar quem você é sem mostrar tudo.' },
    { w: 'Endpoint', h: 'Um ponto específico onde algo responde quando chamado.' },
    { w: 'Middleware', h: 'Algo que acontece no meio do caminho antes do resultado final.' },
    { w: 'Sprint', h: 'Um período curto com muita coisa pra entregar.' },
    { w: 'Herança', h: 'Aproveitar algo pronto em vez de começar do zero.' },
    { w: 'Lint', h: 'Alguém chato que aponta tudo que você fez fora do padrão.' },
  ]
},
 filmes: {
  icon: '🎬', name: 'Filmes',
  words: [
    { w: 'Matrix', h: 'Nem tudo ao seu redor é exatamente o que parece ser.' },
    { w: 'Titanic', h: 'Uma história intensa acontece em meio a uma grande tragédia.' },
    { w: 'Interestelar', h: 'O tempo pode funcionar de formas muito diferentes dependendo da situação.' },
    { w: 'Avatar', h: 'Às vezes você precisa viver outra realidade para entender melhor as coisas.' },
    { w: 'Gladiador', h: 'A queda de alguém pode dar início a uma busca por justiça.' },
    { w: 'Dia D', h: 'Os dias dos humanos estão contados' },
    { w: 'Parasita', h: 'Relações sociais podem esconder intenções inesperadas.' },
    { w: 'Coringa', h: 'O ambiente pode transformar completamente uma pessoa.' },
    { w: 'Duna', h: 'Alguém pode carregar um destino maior do que imagina.' },
    { w: 'Oppenheimer', h: 'Uma descoberta pode trazer consequências difíceis de lidar.' },
    { w: 'Barbie', h: 'Sair da própria realidade pode mudar a forma de ver o mundo.' },
    { w: 'Alien', h: 'O desconhecido pode ser muito mais perigoso do que parece.' },
    { w: 'Tubarão', h: 'O perigo nem sempre é visível, mas ainda assim assusta.' },
    { w: 'Psicose', h: 'Nem todo lugar aparentemente tranquilo é seguro.' },
    { w: 'Casablanca', h: 'Nem todo amor acontece no momento certo.' },
    { w: 'Familia addans', h: 'Uma familia de matar' },
    { w: 'Tenet', h: 'Nem tudo segue a ordem que você espera.' },
    { w: 'Shrek', h: 'Aparências podem enganar completamente.' },
    { w: 'kung fu panda', h: 'Um guerreiro lendario' },
    { w: 'Noiva cadaver', h: 'A morte está no ar' },
    { w: 'apocalypto', h: '1500 anos atrás' },
    { w: 'Hellboy', h: 'Um filme infernal' },
    { w: 'Os incriveis', h: 'A familia unida sempre vai vencer o mal' },
    { w: 'Vingadores', h: 'Às vezes é preciso unir pessoas muito diferentes para enfrentar algo maior.' },
    { w: 'Homem-Aranha', h: 'Equilibrar vida pessoal e responsabilidades pode ser complicado.' },
    { w: 'Harry Potter', h: 'Descobrir um novo mundo pode mudar completamente sua vida.' },
    { w: 'Jurassic Park', h: 'Brincar com coisas que você não controla pode dar muito errado.' },
    { w: 'Batman', h: 'Traumas do passado podem moldar quem você se torna.' },
    { w: 'Superman', h: 'Ser diferente pode ser tanto um peso quanto uma responsabilidade.' },
    { w: 'Velozes e Furiosos', h: 'Lealdade pode ser mais importante do que as regras.' },
  ]
},
  series: {
    icon: '📺', name: 'Séries',
    words: [
      { w: 'Breaking Bad', h: 'professor de química fabrica droga após diagnóstico terminal' },
      { w: 'Friends', h: 'grupo de amigos adultos na mesma cidade' },
      { w: 'The Office', h: 'documentário falso de escritório de papel' },
      { w: 'Stranger Things', h: 'crianças enfrentam monstros de dimensão paralela' },
      { w: 'Game of Thrones', h: 'famílias guerreiam pelo trono de ferro' },
      { w: 'Dark', h: 'famílias alemãs conectadas por viagens no tempo' },
      { w: 'Chernobyl', h: 'acidente nuclear soviético e seu encobrimento' },
      { w: 'Sherlock', h: 'detetive genial modernizado em Londres atual' },
      { w: 'Lost', h: 'sobreviventes de queda de avião em ilha misteriosa' },
      { w: 'Round 6', h: 'devedores disputam jogos infantis' },
      { w: 'Euphoria', h: 'adolescentes americanos e vícios brutais' },
      { w: 'Ozark', h: 'contador lava dinheiro de cartel no interior' },
      { w: 'Narcos', h: 'ascensão e queda de um grande traficante colombiano' },
      { w: 'Mindhunter', h: 'agentes do FBI estudam a mente de serial killers' },
      { w: 'Succession', h: 'filhos de magnata brigam pelo controle do império' },
      { w: 'Fleabag', h: 'mulher caótica quebra a quarta parede constantemente' },
      { w: 'Atlanta', h: 'primo tenta lançar rapper na cena musical da cidade' },
      { w: 'Hannibal', h: 'detetive colabora com canibal refinado e inteligente' },
      { w: 'Mr. Robot', h: 'hacker solitário ataca corporações por ideologia' },
      { w: 'Better Call Saul', h: 'advogado trapaceiro vira criminoso gradualmente' },
      { w: 'The Boys', h: 'super-heróis corrompidos enfrentam grupo rebelde' },
      { w: 'Severance', h: 'funcionários têm memórias divididas entre trabalho e vida' },
      { w: 'The Bear', h: 'chef famoso volta para administrar sanduicheria da família' },
      { w: 'White Lotus', h: 'hóspedes ricos num resort revelam seus segredos sombrios' },
      { w: 'Silo', h: 'humanidade vive no subsolo de uma torre gigante' },
      { w: 'Fallout', h: 'sobreviventes de guerra nuclear enfrentam mundo destruído' },
      { w: 'House of Dragon', h: 'guerra civil entre membros da família de dragões' },
      { w: 'Andor', h: 'espião rebelde antes dos eventos de uma guerra galáctica' },
      { w: 'Yellowjackets', h: 'jogadoras sobreviventes de queda em floresta remota' },
      { w: 'Pachinko', h: 'saga de família coreana ao longo de várias gerações' },
    ]
  },
  desenhos: {
    icon: '🎨', name: 'Desenhos',
    words: [
      { w: 'Bob Esponja', h: 'esponja amarela que trabalha fritando hambúrgueres no mar' },
      { w: 'Tom e Jerry', h: 'gato persegue rato sem parar e quase nunca vence' },
      { w: 'Pernalonga', h: 'coelho tranquilo que gosta de mastigar cenoura' },
      { w: 'Pato Donald', h: 'pato temperamental de marinheiro sem calças' },
      { w: 'Scooby-Doo', h: 'cachorro covarde resolve mistérios com grupo de amigos' },
      { w: 'Popeye', h: 'marinheiro que fica forte comendo espinafre' },
      { w: 'Thundercats', h: 'guerreiros felinos de outro planeta combatem vilão' },
      { w: 'Flintstones', h: 'família da idade da pedra com aparelhos à base de animais' },
      { w: 'Jetsons', h: 'família do futuro com robôs e carros voadores' },
      { w: 'Johnny Bravo', h: 'rapaz musculoso e vaidoso que fracassa com as garotas' },
      { w: 'Dexter', h: 'garoto gênio com laboratório secreto atrás da estante' },
      { w: 'Rugrats', h: 'bebês que vivem aventuras enquanto adultos não veem' },
      { w: 'Steven Universe', h: 'garoto metade cristal que protege a Terra' },
      { w: 'Gravity Falls', h: 'gêmeos passam verão em cidade cheia de fenômenos' },
      { w: 'Rick e Morty', h: 'cientista louco e neto viajam pelo multiverso' },
      { w: 'Samurai Jack', h: 'guerreiro japonês preso no futuro distópico' },
      { w: 'Courage', h: 'cachorro roxo que protege a dona de monstros no deserto' },
      { w: 'Ed Edd Eddy', h: 'trio tenta enganar vizinhos para comprar balas' },
      { w: 'Animaniacs', h: 'trio de animais irrita celebridades e funcionários do estúdio' },
      { w: 'Pinky e Cérebro', h: 'dois camundongos planejam dominar o mundo toda noite' },
      { w: 'Avatar', h: 'jovem controla os quatro elementos para salvar o mundo' },
      { w: 'Ben 10', h: 'garoto com relógio alienígena que transforma em criaturas' },
      { w: 'Hora de Aventura', h: 'garoto e cachorro mágico em terra de fantasy pós-apocalíptico' },
      { w: 'Pica-Pau', h: 'pássaro travesso que irrita todos com risada escandalosa' },
      { w: 'Tartarugas Ninja', h: 'répteis mutantes aprendem artes marciais nos esgotos' },
      { w: 'He-Man', h: 'príncipe que levanta a espada e se transforma em campeão' },
      { w: 'KND', h: 'crianças formam organização secreta contra adultos' },
      { w: 'Juniper ly', h: 'monstros a solta precisam de um heroi na cidade' },
      { w: 'Pepa Pig', h: 'animal que ama em poças de lama com a família' },
      { w: 'Irmão do Jorel', h: 'menino tem irmão famoso e família excêntrica' },
    ]
  },
  animais: {
    icon: '🦁', name: 'Animais',
    words: [
      { w: 'Tubarão', h: 'peixe predador com várias fileiras de dentes' },
      { w: 'Elefante', h: 'maior animal terrestre com tromba e memória incrível' },
      { w: 'Gorila', h: 'primata enorme que vive em grupos na selva africana' },
      { w: 'Coala', h: 'marsupial australiano que dorme 20 horas por dia' },
      { w: 'Pinguim', h: 'ave que não voa e caminha de forma engraçada' },
      { w: 'Ornitorrinco', h: 'mamífero com bico de pato que bota ovos' },
      { w: 'Axolote', h: 'salamandra aquática com guelras externas e sorriso permanente' },
      { w: 'Camaleão', h: 'réptil que muda de cor e tem língua relâmpago' },
      { w: 'Narval', h: 'baleia ártica com chifre espiral gigante' },
      { w: 'Pangolim', h: 'mamífero coberto de escamas que se enrola em bola' },
      { w: 'Quokka', h: 'marsupial australiano que parece sempre sorrindo' },
      { w: 'Capivara', h: 'maior roedor do mundo que vira amigo de tudo' },
      { w: 'Lontra', h: 'animal aquático que dorme de mãos dadas para não separar' },
      { w: 'Tatu', h: 'mamífero com armadura que se enrola em bola' },
      { w: 'Preguiça', h: 'mamífero que vive pendurado em árvores quase sem se mover' },
      { w: 'Tamanduá', h: 'mamífero de focinho longo que come formigas' },
      { w: 'Anta', h: 'mamífero com focinho parecido com miniatura de elefante brasileiro' },
      { w: 'Piranha', h: 'peixe carnívoro de dentes afiados em rios amazônicos' },
      { w: 'Arara', h: 'papagaio gigante colorido da selva amazônica' },
      { w: 'Sucuri', h: 'cobra aquática gigante do Brasil' },
      { w: 'Lobo Guará', h: 'canídeo brasileiro de pernas longas e pelagem laranja' },
      { w: 'Onça Pintada', h: 'maior felino das Américas com manchas circulares' },
      { w: 'Boto', h: 'golfinho de rio da Amazônia de cor rosada' },
      { w: 'Mico Leão', h: 'pequeno primata laranja em perigo de extinção' },
      { w: 'Jabuti', h: 'tartaruga terrestre lenta e longeva do Brasil' },
      { w: 'Peixe-Boi', h: 'mamífero aquático gordinho que pasta em rios' },
      { w: 'Canguru', h: 'marsupial que carrega filhote no bolso e pula alto' },
      { w: 'Fossa', h: 'predador de Madagascar parecido com gato e raposa' },
      { w: 'Manta', h: 'arraia gigante que voa pela água do oceano' },
      { w: 'Tapir', h: 'mamífero com focinho flexível parecido com elefante miniatura' },
    ]
  },
  jogos: {
    icon: '🎮', name: 'Jogos',
    words: [
      { w: 'Minecraft', h: 'jogo de blocos onde você constrói e sobrevive' },
      { w: 'Zelda', h: 'herói de verde que salva princesa de vilão poderoso' },
      { w: 'Mario', h: 'encanador italiano que pula em cogumelos e resgata princesa' },
      { w: 'Sonic', h: 'ouriço azul superveloz que coleta anéis dourados' },
      { w: 'Pokémon', h: 'criaturas que são capturadas e treinam para batalhar' },
      { w: 'Dark Souls', h: 'RPG brutal onde você morre muito e aprende com isso' },
      { w: 'Fortnite', h: '100 jogadores em ilha, último de pé vence com construção' },
      { w: 'Tetris', h: 'blocos que caem e você deve encaixar sem buracos' },
      { w: 'Pac-Man', h: 'bolinha amarela come pontos e foge de fantasmas' },
      { w: 'Street Fighter', h: 'lutadores do mundo inteiro se enfrentam em duelos' },
      { w: 'God of War', h: 'guerreiro espartano mata deuses com correntes nos braços' },
      { w: 'GTA', h: 'mundo aberto de crime onde você rouba carros e faz missões' },
      { w: 'Doom', h: 'marine espacial mata demônios em velocidade frenética' },
      { w: 'Elden Ring', h: 'mundo aberto sombrio onde você enfrenta chefes imensos' },
      { w: 'Hollow Knight', h: 'inseto cavaleiro explora reino subterrâneo decadente' },
      { w: 'Celeste', h: 'garota escala montanha perigosa lidando com ansiedade' },
      { w: 'Hades', h: 'filho de Hades tenta escapar do submundo repetidamente' },
      { w: 'Among Us', h: 'astronautas tentam descobrir quem é o traidor na nave' },
      { w: 'Stardew Valley', h: 'fazendeiro herda terra e cuida de culturas e relacionamentos' },
      { w: 'Red Dead', h: 'cowboy no velho oeste americano em mundo aberto' },
      { w: 'The Last of Us', h: 'homem protege garota imune em mundo pós-apocalíptico' },
      { w: 'Cyberpunk', h: 'mercenário em cidade futurista cheia de néon e corpo modificado' },
      { w: 'Portal', h: 'cientista usa arma que cria portais para resolver puzzles' },
      { w: 'Half-Life', h: 'físico enfrenta aliens após experimento catastrófico' },
      { w: 'Bioshock', h: 'cidade submarina distópica com poderes genéticos' },
      { w: 'Undertale', h: 'criança cai no subsolo e pode poupar os monstros' },
      { w: 'Cuphead', h: 'personagem de desenho antigo enfrenta chefes do diabo' },
      { w: 'Bloodborne', h: 'caçador combate bestas em cidade vitoriana lovecraftiana' },
      { w: 'Resident evil', h: 'Equipe especializada em monstros' },
      { w: 'Roblox', h: 'Polemicas e ate mudanças reais' },
    ]
  },
  literatura: {
    icon: '📚', name: 'Literatura',
    words: [
      { w: 'Hamlet', h: 'príncipe dinamarquês que suspeita do tio ter matado o pai' },
      { w: 'Dom Quixote', h: 'cavaleiro louco que luta contra moinhos de vento' },
      { w: 'Odisseia', h: 'guerreiro grego demora dez anos para voltar para casa' },
      { w: 'Metamorfose', h: 'homem acorda transformado em inseto gigante' },
      { w: '1984', h: 'sociedade totalitária vigiada por líder onipresente' },
      { w: 'Drácula', h: 'nobre transilvano que se alimenta de sangue à noite' },
      { w: 'Frankenstein', h: 'cientista cria monstro a partir de partes de corpos' },
      { w: 'Moby Dick', h: 'capitão obcecado por uma baleia branca enorme' },
      { w: 'Crime e Castigo', h: 'estudante mata e lida com culpa avassaladora' },
      { w: 'Dom Casmurro', h: 'narrador ciumento relata suposta traição da esposa' },
      { w: 'O Alienista', h: 'médico interna metade da cidade num hospício' },
      { w: 'Grande Sertão', h: 'jagunço narra vida no sertão brasileiro ao longo do tempo' },
      { w: 'Iracema', h: 'indígena cearense se apaixona por colonizador português' },
      { w: 'Vidas Secas', h: 'família de retirantes foge da seca no nordeste' },
      { w: 'A Hora da Estrela', h: 'nordestina ingênua tenta sobreviver no Rio de Janeiro' },
      { w: 'Fahrenheit 451', h: 'bombeiro queima livros em sociedade que proíbe leitura' },
      { w: 'O Senhor dos Anéis', h: 'hobbits e elfos destroem anel do poder contra o mal' },
      { w: 'Harry Potter', h: 'menino aprende magia em escola de feiticeiros' },
      { w: 'O Pequeno Príncipe', h: 'menino de planeta distante visita a Terra e questiona adultos' },
      { w: 'A Revolução dos Bichos', h: 'animais expulsam dono da fazenda e criam governo próprio' },
      { w: 'Cem Anos de Solidão', h: 'família colombiana atravessa gerações de solidão e tragédia' },
      { w: 'O Alquimista', h: 'pastor jovem busca tesouro e aprende sobre destino' },
      { w: 'Capitães da Areia', h: 'menores abandonados formam gangue nas ruas de Salvador' },
      { w: 'Memórias Póstumas', h: 'defunto narra sua própria vida do além em tom irônico' },
      { w: 'Lavoura Arcaica', h: 'filho pródigo é buscado pelo irmão na fazenda do pai' },
      { w: 'Quincas Borba', h: 'filósofo louco cria doutrina absurda chamada humanitismo' },
      { w: 'Sagarana', h: 'contos do interior mineiro com animais e homens simples' },
      { w: 'Macunaíma', h: 'herói sem nenhum caráter percorre o Brasil em aventuras' },
      { w: 'Ensaio sobre a Cegueira', h: 'epidemia de cegueira branca isola pessoas em quarentena caótica' },
      { w: 'Ficciones', h: 'contos de labirintos, espelhos e realidades impossíveis' },
    ]
  },
  comidas: {
    icon: '🍕', name: 'Comidas',
    words: [
      { w: 'Sushi', h: 'arroz temperado com peixe cru enrolado ou moldado' },
      { w: 'Lasanha', h: 'massas em camadas intercaladas com molho e queijo' },
      { w: 'Brigadeiro', h: 'doce de chocolate condensado enrolado em granulado' },
      { w: 'Tapioca', h: 'disco de goma de mandioca recheado com doce ou salgado' },
      { w: 'Coxinha', h: 'frito em forma de gota recheado de frango desfiado' },
      { w: 'Feijoada', h: 'feijão preto cozido com carnes defumadas e embutidos' },
      { w: 'Paella', h: 'arroz espanhol com frutos do mar na frigideira larga' },
      { w: 'Ramen', h: 'sopa japonesa com macarrão e caldo de horas de preparo' },
      { w: 'Croissant', h: 'massa folhada em forma de lua crescente' },
      { w: 'Yakisoba', h: 'macarrão frito com legumes e molho escuro' },
      { w: 'Moqueca', h: 'peixe cozido no leite de coco e azeite de dendê' },
      { w: 'Acarajé', h: 'bolinho de feijão frito no dendê recheado com vatapá' },
      { w: 'Pastel', h: 'massa frita recheada e dobrada em forma retangular' },
      { w: 'Churrasco', h: 'carnes assadas lentamente na brasa ou espeto' },
      { w: 'Pão de Queijo', h: 'bolinho esponjoso de polvilho e queijo mineiro' },
      { w: 'Escondidinho', h: 'carne desfiada coberta por purê de mandioca gratinado' },
      { w: 'Temaki', h: 'cone de alga marinha recheado com arroz e peixe' },
      { w: 'Fondue', h: 'queijo ou chocolate derretido em que se mergulha pedaços' },
      { w: 'Crepe', h: 'massa fina redonda dobrada com recheio doce ou salgado' },
      { w: 'Tiramisu', h: 'sobremesa italiana de café, mascarpone e biscoito' },
      { w: 'Carbonara', h: 'massa com ovo, queijo e bacon sem creme de leite' },
      { w: 'Empada', h: 'tortinha fechada de massa podre com recheio variado' },
      { w: 'Caldo Verde', h: 'sopa portuguesa de couve com linguiça e batata' },
      { w: 'Pato no Tucupi', h: 'pato cozido em caldo amarelo ácido da Amazônia' },
      { w: 'Baião de Dois', h: 'arroz com feijão verde e queijo coalho típico nordestino' },
      { w: 'Quibe', h: 'bolinho de carne moída com trigo e hortelã' },
      { w: 'Esfira', h: 'salgado de massa aberta com carne ou queijo' },
      { w: 'Brigadeirão', h: 'pudim de chocolate cremoso e denso assado no forno' },
      { w: 'Cuscuz', h: 'farinha de milho cozida no vapor com acompanhamentos' },
      { w: 'Pirão', h: 'mingau espesso de farinha de mandioca com caldo de peixe' },
    ]
  },
  ingles: {
    icon: '🇬🇧', name: 'English Words',
    words: [
      { w: 'Ephemeral', h: 'something that lasts only a very short time' },
      { w: 'Serendipity', h: 'happy accident — finding something good you were not looking for' },
      { w: 'Melancholy', h: 'deep feeling of sadness without a clear reason' },
      { w: 'Whimsical', h: 'playfully quaint or unusual in a charming way' },
      { w: 'Labyrinth', h: 'complicated network of passages with no obvious exit' },
      { w: 'Zenith', h: 'the highest point reached by something in the sky or in life' },
      { w: 'Cascade', h: 'a small waterfall or things falling one after another' },
      { w: 'Paradox', h: 'statement that contradicts itself but may still be true' },
      { w: 'Elusive', h: 'difficult to find, catch, or define' },
      { w: 'Resilient', h: 'able to recover quickly from difficult situations' },
      { w: 'Wanderlust', h: 'strong desire to travel and explore the world' },
      { w: 'Petrichor', h: 'the pleasant earthy smell after rain falls on dry soil' },
      { w: 'Solitude', h: 'the state of being alone, often by choice and peacefully' },
      { w: 'Eloquent', h: 'fluent and persuasive in speaking or writing' },
      { w: 'Tenacious', h: 'holding firm to something and not giving up easily' },
      { w: 'Luminous', h: 'giving off light or brilliantly clear and radiant' },
      { w: 'Cryptic', h: 'having a meaning that is mysterious or hard to understand' },
      { w: 'Nostalgia', h: 'sentimental longing for a past that may be idealized' },
      { w: 'Ambivalent', h: 'having mixed or contradictory feelings about something' },
      { w: 'Pristine', h: 'in its original condition, completely clean and fresh' },
      { w: 'Obsolete', h: 'no longer produced or used, outdated and replaced' },
      { w: 'Euphoria', h: 'intense feeling of happiness and well-being' },
      { w: 'Catharsis', h: 'release of emotional tension through art or experience' },
      { w: 'Ubiquitous', h: 'appearing everywhere at the same time' },
      { w: 'Stoic', h: 'enduring pain or hardship without showing emotion' },
      { w: 'Pensive', h: 'engaged in deep or serious thought' },
      { w: 'Aloof', h: 'not friendly or forthcoming, keeping distant' },
      { w: 'Candid', h: 'truthful and straightforward, not hiding anything' },
      { w: 'Frugal', h: 'sparing or economical with money and resources' },
      { w: 'Verbose', h: 'using more words than needed to express something' },
    ]
  }
};

/* ── STATE ── */
let players = [], selectedTheme = null, history = [], currentRound = null, cardIdx = 0, cardFlipped = false;
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

/* ── ROUND ── */
function shuffle(arr) { return [...arr].sort(() => Math.random() - .5); }

function startRound() {
  if (players.length < 3 || !selectedTheme) return;
  const theme = THEMES[selectedTheme];
  const wordObj = shuffle(theme.words)[0];
  const shuffledPlayers = shuffle([...players]);
  const impostorIdx = Math.floor(Math.random() * shuffledPlayers.length);
  currentRound = {
    theme: selectedTheme,
    themeName: theme.name,
    themeIcon: theme.icon,
    word: wordObj.w,
    hint: wordObj.h,
    impostorIdx,
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
  const r = currentRound, idx = cardIdx, isImp = idx === r.impostorIdx;
  document.getElementById('cardName').textContent = r.players[idx];
  document.getElementById('cardInner').classList.remove('flipped');
  document.getElementById('cardContainer').style.pointerEvents = 'auto';
  const front = document.getElementById('cardFront');
  if (isImp) {
    front.className = 'card-face card-front-impostor';
    front.innerHTML = `
      <div class="card-icon">🔴</div>
      <div class="card-role role-impostor">IMPOSTOR</div>
      <div class="card-word-label" style="margin-top:.75rem">Sua dica</div>
      <div class="card-word impostor-hint">${r.hint}</div>`;
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
  cardIdx++;
  if (cardIdx >= currentRound.players.length) {
    renderSummary();
    show('summary');
    return;
  }
  showPassScreen();
}

/* ── SUMMARY ── */
function renderSummary() {
  const r = currentRound;
  document.getElementById('leaderView').innerHTML = r.players.map((name, i) => {
    const isImp = i === r.impostorIdx;
    return `<div class="leader-row">
      <div class="player-num">${i + 1}</div>
      <div style="flex:1;font-size:.85rem">${name}</div>
      <span class="lbadge ${isImp ? 'lbadge-i' : 'lbadge-p'}">${isImp ? 'IMPOSTOR' : 'JOGADOR'}</span>
      <span class="lword">${isImp ? '(dica)' : r.word}</span>
    </div>`;
  }).join('');
  document.getElementById('hintFull').textContent = r.hint;
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
        Palavra: <strong>${r.word}</strong> · Impostor: <strong>${r.players[r.impostorIdx]}</strong> · ${r.players.length} jogadores
      </div>
    </div>`).join('');
}

/* ── PWA INSTALL ── */
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  const banner = document.getElementById('installBanner');
  if (banner && !localStorage.getItem('pwa_dismissed')) {
    banner.classList.add('show');
  }
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
