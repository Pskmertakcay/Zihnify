import { Lesson } from './lessons';

export const LESSONS_PT: Lesson[] = [
  {
    id: 'attention',
    title: 'Como funciona a atenção?',
    subtitle: 'No que a mente se concentra e o que ela deixa passar?',
    category: 'Atenção e foco',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'O que é atenção?',
        body: 'Atenção é o processo cognitivo que deixa a mente se voltar para certas informações. Não dá para processar com detalhe tudo ao redor ao mesmo tempo, então damos prioridade a alguns sinais.',
        listTitle: 'Três tipos básicos de atenção',
        bullets: [
          { label: 'Atenção seletiva', text: 'Focar na informação relevante.' },
          { label: 'Atenção sustentada', text: 'Manter o foco por um período.' },
          { label: 'Atenção dividida', text: 'Lidar com mais de uma tarefa.' },
        ],
      },
      {
        title: 'Por que a atenção se dispersa?',
        body: 'Notificações, cansaço, falta de sono e carga mental podem dificultar manter o foco. Em tarefas que nos importam, segurar o foco costuma ser mais fácil.',
        listTitle: 'Para apoiar sua atenção',
        bullets: [
          { label: 'Notificações', text: 'Desligue notificações desnecessárias.' },
          { label: 'Uma coisa', text: 'Foque em uma tarefa de cada vez.' },
          { label: 'Pedaços pequenos', text: 'Quebre o trabalho em partes menores.' },
          { label: 'Pausas e sono', text: 'Faça pausas regulares e cuide do sono.' },
        ],
      },
      {
        title: 'Dá para treinar a atenção?',
        body: 'Exercícios de atenção podem servir para praticar o desempenho em tarefas cognitivas específicas. Uma pontuação mais alta num jogo não prova que a atenção do dia a dia melhorou de fato.\n\nNo Zihnify você pode experimentar escolher um alvo, seguir sinais e manter informação na mente com exercícios diferentes.',
        note: 'Começo pequeno: Dê cinco minutos, aponte a atenção para uma tarefa e volte quando ela dispersar.',
        miniTitle: 'Mini tarefa',
        miniBody: 'Numa rodada curta, escolha só o diferente. Se dispersar, volte com calma.',
        tryExercise: 'odd',
        footer: 'Os exercícios não substituem avaliação clínica nem tratamento.',
      },
    ],
  },
  {
    id: 'memory',
    title: 'Como funciona a memória?',
    subtitle: 'Como aprendemos, guardamos e lembramos informação?',
    category: 'Memória e aprendizagem',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'O que é memória?',
        body: 'Memória é o conjunto de processos cognitivos que nos permitem codificar informação, guardá-la e recuperá-la quando precisamos.',
        listTitle: 'Três processos básicos',
        bullets: [
          { label: 'Codificação', text: 'Aprender a informação.' },
          { label: 'Armazenamento', text: 'Mantê-la na memória.' },
          { label: 'Recuperação', text: 'Lembrar o que foi aprendido.' },
        ],
      },
      {
        title: 'Por que esquecemos?',
        body: 'Atenção dispersa, pouca repetição, o tempo passando e informações parecidas se misturando podem dificultar lembrar.',
        listTitle: 'Para apoiar a lembrança',
        bullets: [
          { label: 'Revisão espaçada', text: 'Revise a informação em intervalos.' },
          { label: 'Pergunte a si', text: 'Tente lembrar fazendo perguntas a si mesmo.' },
          { label: 'Ligue', text: 'Conecte o novo ao que você já sabe.' },
          { label: 'Sono', text: 'Dê peso a dormir o suficiente.' },
        ],
      },
      {
        title: 'Dá para treinar a memória?',
        body: 'Estratégias de lembrança e prática regular podem apoiar o desempenho em tarefas de aprendizagem específicas. Nem todo exercício de memória garante lembrar melhor de tudo na vida diária.\n\nCom Lembre a sequência no Zihnify você pode tentar manter informação por um tempo e ordená-la.',
        note: 'Começo pequeno: Tente lembrar três coisas que aprendeu hoje sem olhar suas anotações.',
        miniTitle: 'Mini tarefa',
        miniBody: 'Veja a sequência e repita na mesma ordem sem anotar.',
        tryExercise: 'sequence',
        footer: 'Os exercícios não substituem avaliação clínica nem tratamento.',
      },
    ],
  },
  {
    id: 'reaction',
    title: 'O que é tempo de reação?',
    subtitle: 'O que acontece entre notar um sinal e responder a ele?',
    category: 'Controle de resposta',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'O que é tempo de reação?',
        body: 'Tempo de reação é o tempo entre um sinal aparecer e a pessoa responder. Inclui notar, avaliar e responder.',
        listTitle: 'O que afeta o tempo de reação',
        bullets: [
          { label: 'O sinal', text: 'O tipo e a complexidade do sinal.' },
          { label: 'Atenção', text: 'Atenção e alerta.' },
          { label: 'Cansaço', text: 'Cansaço e sono.' },
        ],
      },
      {
        title: 'Mais rápido é sempre melhor?',
        body: 'Uma resposta mais rápida nem sempre é mais precisa. Ter pressa pode aumentar erros; ser mais cuidadoso pode alongar o tempo de resposta.',
        listTitle: 'Para uma resposta mais equilibrada',
        bullets: [
          { label: 'Instruções', text: 'Leia as instruções com atenção.' },
          { label: 'Entender', text: 'Entenda a tarefa antes de acelerar.' },
          { label: 'Equilíbrio', text: 'Olhe precisão e velocidade juntas.' },
          { label: 'Cansaço', text: 'Lembre que o desempenho pode mudar quando você está cansado.' },
        ],
      },
      {
        title: 'Dá para praticar o tempo de reação?',
        body: 'A prática repetida pode ajudar você a responder mais rápido ou com mais constância em tarefas específicas. Acelerar num jogo não significa que você vai reagir mais rápido em toda situação.\n\nCom Espere e toque no Zihnify você pode praticar esperar o momento certo e responder então.',
        note: 'Começo pequeno: No próximo exercício, olhe não só a velocidade, mas quantas respostas estão certas.',
        miniTitle: 'Mini tarefa',
        miniBody: 'Espere o círculo encher e então toque. Tente não tocar cedo.',
        tryExercise: 'wait',
        footer: 'Resultados de jogo sozinhos não medem capacidade cognitiva geral nem estado clínico.',
      },
    ],
  },
  {
    id: 'focus',
    title: 'Como apoiamos o foco?',
    subtitle: 'O que podemos fazer para trabalhar com mais eficiência?',
    category: 'Atenção e foco',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'Por que é difícil focar?',
        body: 'Focar é manter a atenção numa tarefa. Notificações, barulho, cansaço e fazer muitas coisas ao mesmo tempo podem dificultar.',
        listTitle: 'Fatores que afetam o foco',
        bullets: [
          { label: 'Ambiente', text: 'Distrações ao seu redor.' },
          { label: 'Cansaço', text: 'Fadiga mental.' },
          { label: 'Dificuldade', text: 'O quão difícil é a tarefa.' },
          { label: 'Interesse', text: 'Interesse e motivação.' },
        ],
      },
      {
        title: 'Para focar melhor',
        body: 'Organizar o ambiente e simplificar o jeito de trabalhar pode ajudar a apoiar a atenção.',
        listTitle: 'Coisas que você pode tentar',
        bullets: [
          { label: 'Notificações', text: 'Desligue as notificações do celular.' },
          { label: 'Uma tarefa', text: 'Defina uma única tarefa.' },
          { label: 'Pedaços pequenos', text: 'Divida um trabalho grande em partes menores.' },
          { label: 'Pausas', text: 'Faça pausas regulares.' },
          { label: 'Voltar', text: 'Quando a atenção dispersar, volte à tarefa com calma.' },
        ],
      },
      {
        title: 'Foco é um hábito?',
        body: 'Foco não é só questão de vontade. Sono, estresse, ambiente e a própria tarefa também afetam a atenção.\n\nCriar rotinas de trabalho pode ajudar você a notar em quais condições foca com mais facilidade.\n\nCom Encontre o alvo no Zihnify você pode praticar distinguir um sinal dos outros.',
        note: 'Começo pequeno: Reduza distrações hoje e dê 10 minutos a uma só coisa.',
        miniTitle: 'Mini tarefa',
        miniBody: 'Na multidão, escolha só a forma alvo. Ignore as outras.',
        tryExercise: 'find',
        footer: 'Essas sugestões não substituem avaliação profissional nem tratamento.',
      },
    ],
  },
  {
    id: 'plasticity',
    title: 'Como o cérebro se adapta?',
    subtitle: 'Como aprendizagem e experiência afetam o cérebro?',
    category: 'Cérebro e desempenho mental',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'O que é neuroplasticidade?',
        body: 'Neuroplasticidade é a capacidade do cérebro de mudar conexões e funcionamento com experiência, aprendizagem e ambiente.\n\nAprender uma habilidade nova, repetir e reunir experiências diferentes pode ter um papel nisso.',
        listTitle: 'Processos ligados à neuroplasticidade',
        bullets: [
          { label: 'Aprendizagem', text: 'Aprender informação nova.' },
          { label: 'Experiência', text: 'Usar a experiência.' },
          { label: 'Repetição', text: 'Melhorar habilidades repetindo-as.' },
          { label: 'Adaptação', text: 'Adaptar-se a condições que mudam.' },
        ],
      },
      {
        title: 'Por que a repetição importa?',
        body: 'A repetição pode ajudar a consolidar o que foi aprendido. Fazer sempre a mesma coisa nem sempre basta; o retorno e usar a informação em outras situações também podem apoiar a aprendizagem.',
        listTitle: 'Para apoiar a aprendizagem',
        bullets: [
          { label: 'Espaçamento', text: 'Revise a informação em intervalos.' },
          { label: 'Teste-se', text: 'Teste-se com perguntas pequenas.' },
          { label: 'Retorno', text: 'Tire aprendizado dos erros.' },
          { label: 'Aplicar', text: 'Use o que acabou de aprender em outros exemplos.' },
        ],
      },
      {
        title: 'O que os exercícios cerebrais dão?',
        body: 'Exercícios cognitivos oferecem prática em tarefas específicas. Melhorar nessas tarefas não significa que todas as habilidades cognitivas ou o desempenho diário vão crescer na mesma medida.\n\nAo experimentar jogos diferentes no Zihnify, você pode notar quais tarefas parecem mais fáceis.',
        note: 'Começo pequeno: Escolha uma habilidade nova, pratique um pouco e tente de novo alguns dias depois.',
        miniTitle: 'Mini tarefa',
        miniBody: 'Siga a bola marcada “VAI”. Quando pararem, escolha só ela.',
        tryExercise: 'track',
        footer: 'A capacidade do cérebro de se adaptar não garante que cada exercício aumente a inteligência geral ou a atenção.',
      },
    ],
  },
  {
    id: 'multitask',
    title: 'Multitarefa é realmente possível?',
    subtitle: 'Quantas coisas o cérebro consegue fazer ao mesmo tempo?',
    category: 'Atenção e foco',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'Quantas coisas o cérebro consegue fazer ao mesmo tempo?',
        body: 'Escrever uma mensagem enquanto a música toca e, ao mesmo tempo, ver um vídeo… Ao longo do dia muitas vezes sentimos que fazemos várias coisas juntas. O cérebro realmente se concentra em todas ao mesmo tempo?\n\nQuando duas tarefas pedem atenção, em geral trocamos rápido entre elas. As trocas podem ser tão rápidas que parece trabalho simultâneo.\n\nNem toda tarefa pede atenção. Fazer algo automático não é o mesmo que conduzir uma tarefa nova e difícil.',
        remember:
          'Cuidar de muitas coisas ao mesmo tempo não significa que consigamos focar em todas por igual.',
      },
      {
        title: 'Por que trocar de tarefa pode cansar?',
        body: 'Imagine uma notificação enquanto você prepara um trabalho. Ao olhar a mensagem e voltar, talvez você não perca só alguns segundos. A mente também pode precisar de tempo para encaixar de novo na tarefa.\n\nTrocar pode significar reter o trabalho anterior, ir para o novo e voltar. Interrupções frequentes podem aumentar erros e dificultar terminar.\n\nEm tarefas complexas o custo da troca pode ficar mais claro. Estar sempre ocupado não é o mesmo que trabalhar com eficiência.',
        remember: 'Às vezes você avança mais rápido fazendo menos coisas ao mesmo tempo.',
      },
      {
        title: 'Como gerenciar melhor a atenção?',
        body: 'Você não precisa mudar tudo de uma vez para proteger a atenção. Ajustes pequenos podem reduzir a troca de tarefa.',
        bullets: [
          { label: 'Defina um objetivo', text: 'Antes de começar, deixe claro o trabalho que quer terminar.' },
          { label: 'Corte notificações', text: 'Desligue avisos desnecessários num bloco curto de trabalho.' },
          { label: 'Divida tarefas', text: 'Quebre um trabalho grande em passos pequenos e termináveis.' },
          { label: 'Marque um ponto de troca', text: 'Antes de deixar um trabalho, anote breve onde parou.' },
          { label: 'Faça uma pausa', text: 'Planeje pausas curtas que combinem com você, em vez de um bloco longo.' },
        ],
        note: 'Esses métodos não funcionam igual para todo mundo. O ponto é notar em quais condições você foca com mais facilidade.',
        remember: 'Tentativa pequena: Por cinco minutos, tente focar em uma só coisa.',
      },
      {
        title: 'Experimente o que acabou de aprender',
        body: 'O ponto central da multitarefa é que a atenção não é ilimitada. Algumas tarefas podem andar juntas; trocar entre tarefas que pedem muita atenção pode custar mais esforço.\n\nPergunte a si: O que mais parte minha atenção durante o dia?\n\nPerceber isso pode ser um primeiro passo para gerenciar a atenção. O objetivo não é foco perfeito sempre; é entender melhor quando e para onde você aponta a atenção.',
        miniTitle: 'Mini tarefa',
        miniBody:
          'No próximo bloco de trabalho escolha um objetivo e fique com ele cinco minutos. No fim, note quantas vezes foi interrompido e quão fácil foi voltar.',
        tryExercise: 'find',
      },
    ],
  },
  {
    id: 'fatigue',
    title: 'Fadiga mental e atenção',
    subtitle: 'A mente também cansa',
    category: 'Cérebro e desempenho mental',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'A mente também cansa',
        body: 'No fim de um dia longo, ler a mesma frase várias vezes, passar por um erro simples ou custar a começar um trabalho pode parecer familiar. Um motivo pode ser a fadiga mental.\n\nA fadiga mental pode aparecer depois de períodos longos pensando, decidindo ou em trabalho que pede atenção. Pode se mostrar como dificuldade de focar, ir mais devagar ou evitar trabalhos mentalmente exigentes.\n\nIsso nem sempre significa falta de motivação. Às vezes precisamos de descanso, sono ou outro jeito de trabalhar.',
        remember: 'Ter dificuldade não significa que você é preguiçoso.',
      },
      {
        title: 'O que pode afetar sua atenção?',
        body: 'O desempenho atencional pode não ser o mesmo o dia inteiro. Sono, estresse, barulho, fome, sede e a dificuldade do trabalho podem afetar o foco.\n\nUma tarefa que você termina fácil quando está descansado pode custar mais com falta de sono. Ansiedade ou pensamentos ocupados também podem ocupar parte da mente e mudar quanto de atenção você consegue dar à tarefa atual.\n\nNem todo mundo é afetado igual. Algumas pessoas trabalham melhor no silêncio; outras preferem um som de fundo leve.',
        remember:
          'Atenção não é só vontade; as condições em que você está também importam.',
      },
      {
        title: 'Como proteger a energia mental?',
        body: 'Talvez você não consiga tirar a fadiga mental por completo. Mudanças no jeito de trabalhar ainda assim podem ajudar a gerenciar a carga.',
        bullets: [
          { label: 'Dê prioridade ao sono', text: 'Sono regular e suficiente importa para atenção e aprendizagem.' },
          { label: 'Divida o trabalho', text: 'Avance tarefas longas em passos pequenos.' },
          { label: 'Note a necessidade de pausa', text: 'Quando a atenção dispersar com clareza, tente uma pausa curta.' },
          { label: 'Organize o espaço', text: 'Reduza sinais a mais e prepare o que precisa antes.' },
          { label: 'Não pule o básico', text: 'Beber água e refeições regulares apoiam o funcionamento diário.' },
        ],
        note: 'Não existe uma duração de trabalho que sirva para todo mundo. Você pode testar arranjos diferentes e observar o que acontece.',
        remember:
          'Tentativa pequena: Lembre um momento de hoje em que focar foi difícil. Falta de sono, estresse ou algo no ambiente podem ter entrado?',
      },
      {
        title: 'Descanso também faz parte',
        body: 'Quando você tenta treinar a atenção, não precisa mirar blocos cada vez mais longos. Trabalhar com eficiência não é só tempo gasto; também se relaciona com o que a tarefa pede e com como você se sente.\n\nSe a fadiga mental é frequente, pode ajudar olhar sono, carga do dia e estresse, em vez de só empurrar mais a atenção. Fadiga persistente que afeta com clareza o dia a dia pode ser motivo para buscar apoio de um profissional de saúde.\n\nObservar a si pode ajudar a ver quando continuar e quando pausar.',
        miniTitle: 'Mini tarefa',
        miniBody:
          'Antes do próximo exercício, dê a si uma nota de energia de 1 a 5. Pontue de novo depois. Essa observação pequena ajuda a conhecer sua própria experiência; sozinha, não é uma medida científica.',
        tryExercise: 'sequence',
      },
    ],
  },
];
