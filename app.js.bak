/* ═══════════════════════════════════════════
   IMPOSTOR — FACILITADOR
   app.js
════════════════════════════════════════════ */

/* ── DATA ── */
const THEMES = {
  disney: {
    icon: '🏰', name: 'Disney',
    words: [
      { w: 'Simba', h: 'filhote de leão que se torna rei' },
      { w: 'Elsa', h: 'rainha com poderes de gelo' },
      { w: 'Cinderela', h: 'moça que perdeu o sapato na festa' },
      { w: 'Ariel', h: 'sereia que quer virar humana' },
      { w: 'Woody', h: 'brinquedo cowboy de pano' },
      { w: 'Nemo', h: 'peixinho laranja perdido no oceano' },
      { w: 'Mulan', h: 'guerreira que se disfarça de homem' },
      { w: 'Hércules', h: 'semideus filho de Zeus' },
      { w: 'Tarzan', h: 'humano criado por gorilas na selva' },
      { w: 'Moana', h: 'filha de chefe que navega pelo oceano' },
      { w: 'Stitch', h: 'experimento alienígena azul' },
      { w: 'Dumbo', h: 'elefante que voa com as orelhas' },
      { w: 'Bolt', h: 'cachorro branco superveloz de série de TV' },
      { w: 'Rapunzel', h: 'princesa de cabelos longos numa torre' },
      { w: 'Maléfica', h: 'bruxa má que amaldiçoa princesas' },
      { w: 'Ursula', h: 'vilã polvo dos mares' },
      { w: 'Gênio', h: 'ser azul que concede desejos' },
      { w: 'Baloo', h: 'urso amigão da selva' },
      { w: 'Mowgli', h: 'menino criado por lobos' },
      { w: 'Merida', h: 'princesa escocesa arqueira de cabelos ruivos' },
      { w: 'Tiana', h: 'cozinheira que vira sapo' },
      { w: 'Gaston', h: 'valentão musculoso que quer casar com Belle' },
      { w: 'Scar', h: 'leão vilão que mata o irmão rei' },
      { w: 'Jafar', h: 'vizir maligno que quer o poder do sultanato' },
      { w: 'Cruella', h: 'vilã que quer casaco de dálmatas' },
      { w: 'Gepeto', h: 'velho carpinteiro que cria boneco de madeira' },
      { w: 'Fada Sininho', h: 'fada pequena e ciumenta' },
      { w: 'Megara', h: 'moça mortal ligada a Hades' },
      { w: 'Flynn Rider', h: 'ladrão charmoso que ajuda princesa da torre' },
      { w: 'Iago', h: 'papagaio falante de vilão árabe' },
    ]
  },
  marvel: {
    icon: '⚡', name: 'Marvel',
    words: [
      { w: 'Homem-Aranha', h: 'adolescente picado por aranha que escala paredes' },
      { w: 'Thor', h: 'deus nórdico que controla raios com um martelo' },
      { w: 'Viúva Negra', h: 'espiã russa altamente treinada em combate' },
      { w: 'Hulk', h: 'cientista que vira monstro verde quando se irrita' },
      { w: 'Capitão América', h: 'soldado da Segunda Guerra com escudo redondo' },
      { w: 'Thanos', h: 'vilão roxo que quer eliminar metade do universo' },
      { w: 'Gavião Arqueiro', h: 'herói sem superpoderes que usa arco e flechas' },
      { w: 'Doutor Estranho', h: 'médico que vira mago e protege a dimensão' },
      { w: 'Pantera Negra', h: 'rei africano com terno de vibranium' },
      { w: 'Visão', h: 'androide sintético com pedra na testa' },
      { w: 'Loki', h: 'deus travesso da trapaça e irmão adotivo do Thor' },
      { w: 'Rocket', h: 'guaxinim com sotaque agressivo e armas pesadas' },
      { w: 'Groot', h: 'árvore alienígena que só diz três palavras' },
      { w: 'Wanda', h: 'feiticeira que manipula a realidade e a magia' },
      { w: 'Ultron', h: 'inteligência artificial que quer destruir a humanidade' },
      { w: 'Gamora', h: 'assassina verde filha adotiva do vilão cósmico' },
      { w: 'Shuri', h: 'princesa gênio que fabrica tecnologia avançada' },
      { w: 'Okoye', h: 'general guerreira guardiã do rei africano' },
      { w: 'Falcão', h: 'ex-militar que usa asas mecânicas para voar' },
      { w: 'Homem de Ferro', h: 'bilionário que fabrica uma armadura voadora' },
      { w: 'Nick Fury', h: 'líder de olho tampado de agência secreta de heróis' },
      { w: 'Capitã Marvel', h: 'pilota com poderes cósmicos absurdamente fortes' },
      { w: 'Homem-Formiga', h: 'ladrão que pode encolher do tamanho de um inseto' },
      { w: 'Moon Knight', h: 'mercenário com múltiplas personalidades ligado a deus egípcio' },
      { w: 'Blade', h: 'caçador meio vampiro que combate criaturas da noite' },
      { w: 'Demolidor', h: 'advogado cego que luta contra o crime à noite' },
      { w: 'Jessica Jones', h: 'detetive com superforça e passado traumático' },
      { w: 'Máquina de Combate', h: 'amigo do Homem de Ferro com armadura militar' },
      { w: 'Ms. Marvel', h: 'adolescente paquistanesa que pode esticar o corpo' },
      { w: 'Vespa', h: 'heroína que voa e atira raios bio-elétricos' },
    ]
  },
  programacao: {
    icon: '💻', name: 'Programação',
    words: [
      { w: 'Bug', h: 'erro inesperado que faz o programa se comportar errado' },
      { w: 'Deploy', h: 'ato de colocar o código em produção para os usuários' },
      { w: 'Git', h: 'sistema que controla versões do código ao longo do tempo' },
      { w: 'API', h: 'interface que permite dois sistemas se comunicarem' },
      { w: 'Loop', h: 'estrutura que repete um bloco de código várias vezes' },
      { w: 'Função', h: 'bloco de código reutilizável que recebe entradas e retorna saída' },
      { w: 'Array', h: 'lista ordenada de elementos do mesmo tipo' },
      { w: 'Database', h: 'sistema que armazena e organiza dados persistentes' },
      { w: 'Framework', h: 'conjunto de ferramentas prontas para construir aplicações' },
      { w: 'Debug', h: 'processo de encontrar e corrigir erros no código' },
      { w: 'Commit', h: 'salvar um conjunto de alterações no histórico do repositório' },
      { w: 'Branch', h: 'ramificação do código para desenvolver sem afetar o principal' },
      { w: 'Terminal', h: 'interface de texto para executar comandos no sistema' },
      { w: 'Servidor', h: 'computador que responde requisições de outros computadores' },
      { w: 'Cache', h: 'armazenamento temporário para acessar dados mais rápido' },
      { w: 'Refactor', h: 'reescrever o código sem mudar o comportamento visível' },
      { w: 'Variável', h: 'espaço nomeado na memória que guarda um valor' },
      { w: 'Classe', h: 'modelo que define atributos e comportamentos de objetos' },
      { w: 'Recursão', h: 'função que chama a si mesma até atingir um caso base' },
      { w: 'Algoritmo', h: 'sequência finita de passos para resolver um problema' },
      { w: 'Compilador', h: 'programa que transforma código fonte em código executável' },
      { w: 'Docker', h: 'tecnologia que empacota aplicações em contêineres isolados' },
      { w: 'WebSocket', h: 'conexão bidirecional em tempo real entre cliente e servidor' },
      { w: 'Cookie', h: 'pequeno dado salvo no navegador para identificar o usuário' },
      { w: 'Token', h: 'chave gerada para autenticar requisições sem enviar senha' },
      { w: 'Endpoint', h: 'URL específica que responde a uma requisição de API' },
      { w: 'Middleware', h: 'código executado entre a requisição e a resposta final' },
      { w: 'Sprint', h: 'período curto de desenvolvimento com metas definidas' },
      { w: 'Herança', h: 'mecanismo onde uma classe recebe características de outra' },
      { w: 'Lint', h: 'ferramenta que analisa código em busca de erros de estilo' },
    ]
  },
  filmes: {
    icon: '🎬', name: 'Filmes',
    words: [
      { w: 'Matrix', h: 'simulação computacional onde humanos são escravizados' },
      { w: 'Titanic', h: 'navio de luxo que afunda no oceano gelado' },
      { w: 'Interestelar', h: 'astronautas viajam por buracos de minhoca para salvar a Terra' },
      { w: 'Avatar', h: 'humanos controlam corpos alienígenas num planeta azul' },
      { w: 'Gladiador', h: 'general romano virou escravo lutador na arena' },
      { w: 'Inception', h: 'ladrão que entra em sonhos para roubar ideias' },
      { w: 'Parasita', h: 'família pobre se infiltra na vida de família rica' },
      { w: 'Coringa', h: 'origem de um palhaço assassino em Gotham decadente' },
      { w: 'Duna', h: 'jovem nobre destinado a liderar povo do deserto' },
      { w: 'Oppenheimer', h: 'cientista que criou a bomba atômica' },
      { w: 'Barbie', h: 'boneca famosa que vai ao mundo real' },
      { w: 'Alien', h: 'criatura extraterrestre que parasita corpos humanos' },
      { w: 'Tubarão', h: 'peixe gigante aterroriza praia no verão' },
      { w: 'Psicose', h: 'motel com dono perturbado e chuveiro fatal' },
      { w: 'Casablanca', h: 'amor impossível numa cidade durante a Segunda Guerra' },
      { w: 'Fargo', h: 'sequestro mal planejado em cidade nevada' },
      { w: 'Tenet', h: 'espião manipula o fluxo do tempo ao contrário' },
      { w: 'Shrek', h: 'ogro verde que resgata princesa em pântano' },
      { w: '1917', h: 'soldados cruzam terra de ninguém para entregar mensagem' },
      { w: 'Whiplash', h: 'estudante de bateria sob professor tirano e cruel' },
      { w: 'Birdman', h: 'ator em decadência tenta voltar ao sucesso no teatro' },
      { w: 'Her', h: 'homem solitário se apaixona por sistema operacional' },
      { w: 'Drive', h: 'motorista silencioso de fuga envolve em crime violento' },
      { w: 'Moonlight', h: 'trajetória de um homem negro e gay em Miami' },
      { w: 'Hereditary', h: 'família aterrorizada por segredo sombrio após morte da avó' },
      { w: 'Midsommar', h: 'casal vai a festival sueco que esconde ritual sinistro' },
      { w: 'Knives Out', h: 'detetive excêntrico investiga morte de escritor rico' },
      { w: 'Everything Everywhere', h: 'lavradora de lavanderia descobre que é heroína do multiverso' },
      { w: 'Us', h: 'família encontra seus próprios duplos perturbadores' },
      { w: 'Spotlight', h: 'jornalistas investigam escândalo da Igreja Católica' },
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
      { w: 'Squid Game', h: 'devedores disputam jogos infantis mortais' },
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
      { w: 'Cow e Chicken', h: 'vaca e frango são irmãos com pais que só aparecem de cintura' },
      { w: 'Pepper Pig', h: 'porquinha que ama pular em poças de lama com a família' },
      { w: 'Irmão do Jorel', h: 'menino tem irmão famoso e família excêntrica brasileira' },
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
      { w: 'Disco Elysium', h: 'detetive com memória apagada reconstrói um caso bizarro' },
      { w: 'Ori', h: 'espírito da floresta corre e salta para salvar a natureza' },
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
