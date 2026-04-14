/* ═══════════════════════════════════════════
   IMPOSTOR — FACILITADOR  app.js
════════════════════════════════════════════ */
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
      { w: 'Cruella', h: 'Obsessão pode fazer alguém perder completamente o limite.' },
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
      { w: 'Homem-Aranha', h: 'Às vezes a vida pessoal entra em conflito com grandes responsabilidades.' },
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
      { w: 'Parasita', h: 'Relações sociais podem esconder intenções inesperadas.' },
      { w: 'Coringa', h: 'O ambiente pode transformar completamente uma pessoa.' },
      { w: 'Duna', h: 'Alguém pode carregar um destino maior do que imagina.' },
      { w: 'Oppenheimer', h: 'Uma descoberta pode trazer consequências difíceis de lidar.' },
      { w: 'Barbie', h: 'Sair da própria realidade pode mudar a forma de ver o mundo.' },
      { w: 'Alien', h: 'O desconhecido pode ser muito mais perigoso do que parece.' },
      { w: 'Tubarão', h: 'O perigo nem sempre é visível, mas ainda assim assusta.' },
      { w: 'Psicose', h: 'Nem todo lugar aparentemente tranquilo é seguro.' },
      { w: 'Casablanca', h: 'Nem todo amor acontece no momento certo.' },
      { w: 'Tenet', h: 'Nem tudo segue a ordem que você espera.' },
      { w: 'Shrek', h: 'Aparências podem enganar completamente.' },
      { w: 'Vingadores', h: 'Às vezes é preciso unir pessoas muito diferentes para enfrentar algo maior.' },
      { w: 'Homem-Aranha', h: 'Equilibrar vida pessoal e responsabilidades pode ser complicado.' },
      { w: 'Harry Potter', h: 'Descobrir um novo mundo pode mudar completamente sua vida.' },
      { w: 'Jurassic Park', h: 'Brincar com coisas que você não controla pode dar muito errado.' },
      { w: 'Batman', h: 'Traumas do passado podem moldar quem você se torna.' },
      { w: 'Superman', h: 'Ser diferente pode ser tanto um peso quanto uma responsabilidade.' },
      { w: 'Velozes e Furiosos', h: 'Lealdade pode ser mais importante do que as regras.' },
      { w: 'Família Addams', h: 'Uma família de matar.' },
      { w: 'Kung Fu Panda', h: 'Um guerreiro lendário.' },
      { w: 'Noiva Cadáver', h: 'A morte está no ar.' },
      { w: 'Apocalypto', h: 'Muito tempo atrás, antes de tudo isso.' },
      { w: 'Hellboy', h: 'Um filme infernal.' },
      { w: 'Os Incríveis', h: 'A família unida sempre vai vencer o mal.' },
      { w: 'Dia D', h: 'Os dias dos humanos estão contados.' },
    ]
  },
  series: {
    icon: '📺', name: 'Séries',
    words: [
      { w: 'Breaking Bad', h: 'Uma escolha muda completamente quem alguém é.' },
      { w: 'Friends', h: 'Quando os amigos viram a sua verdadeira família.' },
      { w: 'The Office', h: 'O dia a dia no trabalho pode ser mais absurdo do que parece.' },
      { w: 'Stranger Things', h: 'Às vezes o perigo está muito mais perto do que imaginamos.' },
      { w: 'Game of Thrones', h: 'Quem quer poder demais acaba perdendo o que importa.' },
      { w: 'Dark', h: 'Algumas histórias se repetem de formas que a gente não espera.' },
      { w: 'Chernobyl', h: 'Esconder a verdade pode ter consequências devastadoras.' },
      { w: 'Sherlock', h: 'Prestar atenção nos detalhes muda tudo.' },
      { w: 'Lost', h: 'Sobreviver é só o começo dos problemas.' },
      { w: 'Round 6', h: 'Desespero faz as pessoas aceitarem situações impensáveis.' },
      { w: 'Euphoria', h: 'Por fora pode parecer normal, por dentro é caos.' },
      { w: 'Ozark', h: 'Uma decisão errada pode te prender numa situação sem saída.' },
      { w: 'Narcos', h: 'Poder e dinheiro têm um preço alto demais.' },
      { w: 'Mindhunter', h: 'Entender o mal pode te afetar mais do que você imagina.' },
      { w: 'Succession', h: 'Família e ambição raramente combinam bem.' },
      { w: 'Fleabag', h: 'Às vezes a gente ri pra não chorar.' },
      { w: 'Atlanta', h: 'Tentar crescer num ambiente difícil nunca é simples.' },
      { w: 'Hannibal', h: 'Elegância e perigo podem coexistir na mesma pessoa.' },
      { w: 'Mr. Robot', h: 'Questionar o sistema pode te isolar completamente.' },
      { w: 'Better Call Saul', h: 'Pequenas escolhas erradas se acumulam ao longo do tempo.' },
      { w: 'The Boys', h: 'Heróis também podem ser os vilões da história.' },
      { w: 'Severance', h: 'Separar trabalho e vida pessoal pode ser mais radical do que parece.' },
      { w: 'The Bear', h: 'Pressão e paixão andam sempre juntos.' },
      { w: 'White Lotus', h: 'Dinheiro não resolve os problemas, só os esconde.' },
      { w: 'Silo', h: 'Às vezes a verdade é protegida pela ignorância.' },
      { w: 'Fallout', h: 'O que sobra depois do fim pode ser pior do que o fim.' },
      { w: 'House of Dragon', h: 'Família e poder raramente coexistem em paz.' },
      { w: 'Andor', h: 'Resistir começa com pequenos atos de coragem.' },
      { w: 'Yellowjackets', h: 'Sobreviver muda as pessoas de formas que elas não esperam.' },
      { w: 'Pachinko', h: 'O passado de uma família molda todas as gerações seguintes.' },
    ]
  },
  desenhos: {
    icon: '🎨', name: 'Desenhos',
    words: [
      { w: 'Bob Esponja', h: 'Otimismo demais pode irritar qualquer um.' },
      { w: 'Tom e Jerry', h: 'Algumas rivalidades nunca têm fim.' },
      { w: 'Pernalonga', h: 'Calma e esperteza vencem qualquer situação.' },
      { w: 'Pato Donald', h: 'Ter mau humor pode complicar tudo ao redor.' },
      { w: 'Scooby-Doo', h: 'Com amigos, até o medo fica mais fácil.' },
      { w: 'Popeye', h: 'Às vezes só falta aquele empurrãozinho extra.' },
      { w: 'Thundercats', h: 'Guerreiros felinos de outro planeta combatem vilão.' },
      { w: 'Flintstones', h: 'A vida moderna existia bem antes da tecnologia.' },
      { w: 'Jetsons', h: 'Família do futuro com robôs e carros voadores.' },
      { w: 'Johnny Bravo', h: 'Confiança demais pode ser um problema sério.' },
      { w: 'Dexter', h: 'Guardar segredos em casa é mais difícil do que parece.' },
      { w: 'Rugrats', h: 'Bebês que vivem aventuras enquanto adultos não veem.' },
      { w: 'Steven Universe', h: 'Amor pode ser a maior força de todas.' },
      { w: 'Gravity Falls', h: 'Gêmeos passam verão em cidade cheia de fenômenos.' },
      { w: 'Rick e Morty', h: 'Ciência louca e família viajam pelo multiverso.' },
      { w: 'Samurai Jack', h: 'Guerreiro japonês preso no futuro distópico.' },
      { w: 'Courage', h: 'Amor pela família faz superar qualquer medo.' },
      { w: 'Ed Edd Eddy', h: 'Planos mirabolantes raramente dão certo.' },
      { w: 'Animaniacs', h: 'Trio de animais irrita celebridades e funcionários do estúdio.' },
      { w: 'Pinky e Cérebro', h: 'Dois camundongos planejam dominar o mundo toda noite.' },
      { w: 'Avatar', h: 'Equilíbrio entre mundos depende de uma só pessoa.' },
      { w: 'Ben 10', h: 'Garoto com relógio alienígena que transforma em criaturas.' },
      { w: 'Hora de Aventura', h: 'Garoto e cachorro mágico em terra de fantasy pós-apocalíptico.' },
      { w: 'Pica-Pau', h: 'Pássaro travesso que irrita todos com risada escandalosa.' },
      { w: 'Tartarugas Ninja', h: 'Répteis mutantes aprendem artes marciais nos esgotos.' },
      { w: 'He-Man', h: 'Príncipe que levanta a espada e se transforma em campeão.' },
      { w: 'KND', h: 'Crianças formam organização secreta contra adultos.' },
      { w: 'Juniper Lee', h: 'Monstros à solta precisam de um herói na cidade.' },
      { w: 'Peppa Pig', h: 'Animal que ama poças de lama com a família.' },
      { w: 'Irmão do Jorel', h: 'Menino tem irmão famoso e família excêntrica.' },
    ]
  },
  animais: {
    icon: '🦁', name: 'Animais',
    words: [
      { w: 'Tubarão', h: 'Peixe predador com várias fileiras de dentes.' },
      { w: 'Elefante', h: 'Maior animal terrestre com tromba e memória incrível.' },
      { w: 'Gorila', h: 'Primata enorme que vive em grupos na selva africana.' },
      { w: 'Coala', h: 'Marsupial australiano que dorme 20 horas por dia.' },
      { w: 'Pinguim', h: 'Ave que não voa e caminha de forma engraçada.' },
      { w: 'Ornitorrinco', h: 'Mamífero com bico de pato que bota ovos.' },
      { w: 'Axolote', h: 'Salamandra aquática com guelras externas e sorriso permanente.' },
      { w: 'Camaleão', h: 'Réptil que muda de cor e tem língua relâmpago.' },
      { w: 'Narval', h: 'Baleia ártica com chifre espiral gigante.' },
      { w: 'Pangolim', h: 'Mamífero coberto de escamas que se enrola em bola.' },
      { w: 'Quokka', h: 'Marsupial australiano que parece sempre sorrindo.' },
      { w: 'Capivara', h: 'Maior roedor do mundo que vira amigo de tudo.' },
      { w: 'Lontra', h: 'Animal aquático que dorme de mãos dadas para não separar.' },
      { w: 'Tatu', h: 'Mamífero com armadura que se enrola em bola.' },
      { w: 'Preguiça', h: 'Mamífero que vive pendurado em árvores quase sem se mover.' },
      { w: 'Tamanduá', h: 'Mamífero de focinho longo que come formigas.' },
      { w: 'Anta', h: 'Mamífero com focinho parecido com miniatura de elefante brasileiro.' },
      { w: 'Piranha', h: 'Peixe carnívoro de dentes afiados em rios amazônicos.' },
      { w: 'Arara', h: 'Papagaio gigante colorido da selva amazônica.' },
      { w: 'Sucuri', h: 'Cobra aquática gigante do Brasil.' },
      { w: 'Lobo Guará', h: 'Canídeo brasileiro de pernas longas e pelagem laranja.' },
      { w: 'Onça Pintada', h: 'Maior felino das Américas com manchas circulares.' },
      { w: 'Boto', h: 'Golfinho de rio da Amazônia de cor rosada.' },
      { w: 'Mico Leão', h: 'Pequeno primata laranja em perigo de extinção.' },
      { w: 'Jabuti', h: 'Tartaruga terrestre lenta e longeva do Brasil.' },
      { w: 'Peixe-Boi', h: 'Mamífero aquático gordinho que pasta em rios.' },
      { w: 'Canguru', h: 'Marsupial que carrega filhote no bolso e pula alto.' },
      { w: 'Fossa', h: 'Predador de Madagascar parecido com gato e raposa.' },
      { w: 'Manta', h: 'Arraia gigante que voa pela água do oceano.' },
      { w: 'Tapir', h: 'Mamífero com focinho flexível parecido com elefante miniatura.' },
    ]
  },
  jogos: {
    icon: '🎮', name: 'Jogos',
    words: [
      { w: 'Minecraft', h: 'Jogo de blocos onde você constrói e sobrevive.' },
      { w: 'Zelda', h: 'Herói de verde que salva princesa de vilão poderoso.' },
      { w: 'Mario', h: 'Encanador italiano que pula em cogumelos e resgata princesa.' },
      { w: 'Sonic', h: 'Ouriço azul superveloz que coleta anéis dourados.' },
      { w: 'Pokémon', h: 'Criaturas que são capturadas e treinam para batalhar.' },
      { w: 'Dark Souls', h: 'RPG brutal onde você morre muito e aprende com isso.' },
      { w: 'Fortnite', h: '100 jogadores em ilha, último de pé vence com construção.' },
      { w: 'Tetris', h: 'Blocos que caem e você deve encaixar sem buracos.' },
      { w: 'Pac-Man', h: 'Bolinha amarela come pontos e foge de fantasmas.' },
      { w: 'Street Fighter', h: 'Lutadores do mundo inteiro se enfrentam em duelos.' },
      { w: 'God of War', h: 'Guerreiro espartano mata deuses com correntes nos braços.' },
      { w: 'GTA', h: 'Mundo aberto de crime onde você rouba carros e faz missões.' },
      { w: 'Doom', h: 'Marine espacial mata demônios em velocidade frenética.' },
      { w: 'Elden Ring', h: 'Mundo aberto sombrio onde você enfrenta chefes imensos.' },
      { w: 'Hollow Knight', h: 'Inseto cavaleiro explora reino subterrâneo decadente.' },
      { w: 'Celeste', h: 'Garota escala montanha perigosa lidando com ansiedade.' },
      { w: 'Hades', h: 'Filho de Hades tenta escapar do submundo repetidamente.' },
      { w: 'Among Us', h: 'Astronautas tentam descobrir quem é o traidor na nave.' },
      { w: 'Stardew Valley', h: 'Fazendeiro herda terra e cuida de culturas e relacionamentos.' },
      { w: 'Red Dead', h: 'Cowboy no velho oeste americano em mundo aberto.' },
      { w: 'The Last of Us', h: 'Homem protege garota imune em mundo pós-apocalíptico.' },
      { w: 'Cyberpunk', h: 'Mercenário em cidade futurista cheia de néon e corpo modificado.' },
      { w: 'Portal', h: 'Cientista usa arma que cria portais para resolver puzzles.' },
      { w: 'Half-Life', h: 'Físico enfrenta aliens após experimento catastrófico.' },
      { w: 'Bioshock', h: 'Cidade submarina distópica com poderes genéticos.' },
      { w: 'Undertale', h: 'Criança cai no subsolo e pode poupar os monstros.' },
      { w: 'Cuphead', h: 'Personagem de desenho antigo enfrenta chefes do diabo.' },
      { w: 'Bloodborne', h: 'Caçador combate bestas em cidade vitoriana lovecraftiana.' },
      { w: 'Resident Evil', h: 'Equipe especializada enfrenta situações monstruosas.' },
      { w: 'Roblox', h: 'Polêmicas e até mudanças reais.' },
    ]
  },
  literatura: {
    icon: '📚', name: 'Literatura',
    words: [
      { w: 'Hamlet', h: 'Príncipe dinamarquês que suspeita do tio ter matado o pai.' },
      { w: 'Dom Quixote', h: 'Cavaleiro louco que luta contra moinhos de vento.' },
      { w: 'Odisseia', h: 'Guerreiro grego demora dez anos para voltar para casa.' },
      { w: 'Metamorfose', h: 'Homem acorda transformado em inseto gigante.' },
      { w: '1984', h: 'Sociedade totalitária vigiada por líder onipresente.' },
      { w: 'Drácula', h: 'Nobre transilvano que se alimenta de sangue à noite.' },
      { w: 'Frankenstein', h: 'Cientista cria monstro a partir de partes de corpos.' },
      { w: 'Moby Dick', h: 'Capitão obcecado por uma baleia branca enorme.' },
      { w: 'Crime e Castigo', h: 'Estudante mata e lida com culpa avassaladora.' },
      { w: 'Dom Casmurro', h: 'Narrador ciumento relata suposta traição da esposa.' },
      { w: 'O Alienista', h: 'Médico interna metade da cidade num hospício.' },
      { w: 'Grande Sertão', h: 'Jagunço narra vida no sertão brasileiro ao longo do tempo.' },
      { w: 'Iracema', h: 'Indígena cearense se apaixona por colonizador português.' },
      { w: 'Vidas Secas', h: 'Família de retirantes foge da seca no nordeste.' },
      { w: 'A Hora da Estrela', h: 'Nordestina ingênua tenta sobreviver no Rio de Janeiro.' },
      { w: 'Fahrenheit 451', h: 'Bombeiro queima livros em sociedade que proíbe leitura.' },
      { w: 'O Senhor dos Anéis', h: 'Hobbits e elfos destroem anel do poder contra o mal.' },
      { w: 'Harry Potter', h: 'Menino aprende magia em escola de feiticeiros.' },
      { w: 'O Pequeno Príncipe', h: 'Menino de planeta distante visita a Terra e questiona adultos.' },
      { w: 'A Revolução dos Bichos', h: 'Animais expulsam dono da fazenda e criam governo próprio.' },
      { w: 'Cem Anos de Solidão', h: 'Família colombiana atravessa gerações de solidão e tragédia.' },
      { w: 'O Alquimista', h: 'Pastor jovem busca tesouro e aprende sobre destino.' },
      { w: 'Capitães da Areia', h: 'Menores abandonados formam gangue nas ruas de Salvador.' },
      { w: 'Memórias Póstumas', h: 'Defunto narra sua própria vida do além em tom irônico.' },
      { w: 'Lavoura Arcaica', h: 'Filho pródigo é buscado pelo irmão na fazenda do pai.' },
      { w: 'Quincas Borba', h: 'Filósofo louco cria doutrina absurda chamada humanitismo.' },
      { w: 'Sagarana', h: 'Contos do interior mineiro com animais e homens simples.' },
      { w: 'Macunaíma', h: 'Herói sem nenhum caráter percorre o Brasil em aventuras.' },
      { w: 'Ensaio sobre a Cegueira', h: 'Epidemia de cegueira branca isola pessoas em quarentena caótica.' },
      { w: 'Ficciones', h: 'Contos de labirintos, espelhos e realidades impossíveis.' },
    ]
  },
  comidas: {
    icon: '🍕', name: 'Comidas',
    words: [
      { w: 'Sushi', h: 'Arroz temperado com peixe cru enrolado ou moldado.' },
      { w: 'Lasanha', h: 'Massas em camadas intercaladas com molho e queijo.' },
      { w: 'Brigadeiro', h: 'Doce de chocolate condensado enrolado em granulado.' },
      { w: 'Tapioca', h: 'Disco de goma de mandioca recheado com doce ou salgado.' },
      { w: 'Coxinha', h: 'Frito em forma de gota recheado de frango desfiado.' },
      { w: 'Feijoada', h: 'Feijão preto cozido com carnes defumadas e embutidos.' },
      { w: 'Paella', h: 'Arroz espanhol com frutos do mar na frigideira larga.' },
      { w: 'Ramen', h: 'Sopa japonesa com macarrão e caldo de horas de preparo.' },
      { w: 'Croissant', h: 'Massa folhada em forma de lua crescente.' },
      { w: 'Yakisoba', h: 'Macarrão frito com legumes e molho escuro.' },
      { w: 'Moqueca', h: 'Peixe cozido no leite de coco e azeite de dendê.' },
      { w: 'Acarajé', h: 'Bolinho de feijão frito no dendê recheado com vatapá.' },
      { w: 'Pastel', h: 'Massa frita recheada e dobrada em forma retangular.' },
      { w: 'Churrasco', h: 'Carnes assadas lentamente na brasa ou espeto.' },
      { w: 'Pão de Queijo', h: 'Bolinho esponjoso de polvilho e queijo mineiro.' },
      { w: 'Escondidinho', h: 'Carne desfiada coberta por purê de mandioca gratinado.' },
      { w: 'Temaki', h: 'Cone de alga marinha recheado com arroz e peixe.' },
      { w: 'Fondue', h: 'Queijo ou chocolate derretido em que se mergulha pedaços.' },
      { w: 'Crepe', h: 'Massa fina redonda dobrada com recheio doce ou salgado.' },
      { w: 'Tiramisu', h: 'Sobremesa italiana de café, mascarpone e biscoito.' },
      { w: 'Carbonara', h: 'Massa com ovo, queijo e bacon sem creme de leite.' },
      { w: 'Empada', h: 'Tortinha fechada de massa podre com recheio variado.' },
      { w: 'Caldo Verde', h: 'Sopa portuguesa de couve com linguiça e batata.' },
      { w: 'Pato no Tucupi', h: 'Pato cozido em caldo amarelo ácido da Amazônia.' },
      { w: 'Baião de Dois', h: 'Arroz com feijão verde e queijo coalho típico nordestino.' },
      { w: 'Quibe', h: 'Bolinho de carne moída com trigo e hortelã.' },
      { w: 'Esfira', h: 'Salgado de massa aberta com carne ou queijo.' },
      { w: 'Brigadeirão', h: 'Pudim de chocolate cremoso e denso assado no forno.' },
      { w: 'Cuscuz', h: 'Farinha de milho cozida no vapor com acompanhamentos.' },
      { w: 'Pirão', h: 'Mingau espesso de farinha de mandioca com caldo de peixe.' },
    ]
  },
  ingles: {
    icon: '🇬🇧', name: 'English Words',
    words: [
      { w: 'Ephemeral', h: 'Something that lasts only a very short time.' },
      { w: 'Serendipity', h: 'Happy accident — finding something good you were not looking for.' },
      { w: 'Melancholy', h: 'Deep feeling of sadness without a clear reason.' },
      { w: 'Whimsical', h: 'Playfully quaint or unusual in a charming way.' },
      { w: 'Labyrinth', h: 'Complicated network of passages with no obvious exit.' },
      { w: 'Zenith', h: 'The highest point reached by something in the sky or in life.' },
      { w: 'Cascade', h: 'A small waterfall or things falling one after another.' },
      { w: 'Paradox', h: 'Statement that contradicts itself but may still be true.' },
      { w: 'Elusive', h: 'Difficult to find, catch, or define.' },
      { w: 'Resilient', h: 'Able to recover quickly from difficult situations.' },
      { w: 'Wanderlust', h: 'Strong desire to travel and explore the world.' },
      { w: 'Petrichor', h: 'The pleasant earthy smell after rain falls on dry soil.' },
      { w: 'Solitude', h: 'The state of being alone, often by choice and peacefully.' },
      { w: 'Eloquent', h: 'Fluent and persuasive in speaking or writing.' },
      { w: 'Tenacious', h: 'Holding firm to something and not giving up easily.' },
      { w: 'Luminous', h: 'Giving off light or brilliantly clear and radiant.' },
      { w: 'Cryptic', h: 'Having a meaning that is mysterious or hard to understand.' },
      { w: 'Nostalgia', h: 'Sentimental longing for a past that may be idealized.' },
      { w: 'Ambivalent', h: 'Having mixed or contradictory feelings about something.' },
      { w: 'Pristine', h: 'In its original condition, completely clean and fresh.' },
      { w: 'Obsolete', h: 'No longer produced or used, outdated and replaced.' },
      { w: 'Euphoria', h: 'Intense feeling of happiness and well-being.' },
      { w: 'Catharsis', h: 'Release of emotional tension through art or experience.' },
      { w: 'Ubiquitous', h: 'Appearing everywhere at the same time.' },
      { w: 'Stoic', h: 'Enduring pain or hardship without showing emotion.' },
      { w: 'Pensive', h: 'Engaged in deep or serious thought.' },
      { w: 'Aloof', h: 'Not friendly or forthcoming, keeping distant.' },
      { w: 'Candid', h: 'Truthful and straightforward, not hiding anything.' },
      { w: 'Frugal', h: 'Sparing or economical with money and resources.' },
      { w: 'Verbose', h: 'Using more words than needed to express something.' },
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
  const isLast = idx === r.players.length - 1;

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

  // Último jogador: botão leva direto ao resumo (sem tela de passagem)
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
