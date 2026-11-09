import { Lesson } from './lessons';

export const LESSONS_FR: Lesson[] = [
  {
    id: 'attention',
    title: 'Comment fonctionne l’attention ?',
    subtitle: 'Sur quoi l’esprit se centre-t-il, et que rate-t-il ?',
    category: 'Attention et focus',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'Qu’est-ce que l’attention ?',
        body: 'L’attention est le processus cognitif qui permet à l’esprit de se tourner vers certaines informations. Nous ne pouvons pas tout traiter en détail à la fois, donc nous donnons la priorité à certains signaux.',
        listTitle: 'Trois types de base d’attention',
        bullets: [
          { label: 'Attention sélective', text: 'Se centrer sur l’information pertinente.' },
          { label: 'Attention soutenue', text: 'Tenir le focus pendant un moment.' },
          { label: 'Attention divisée', text: 'S’occuper de plus d’une tâche.' },
        ],
      },
      {
        title: 'Pourquoi l’attention dérive-t-elle ?',
        body: 'Les notifications, la fatigue, le manque de sommeil et la charge mentale peuvent rendre plus difficile de rester concentré. Sur les tâches qui nous tiennent à cœur, tenir le focus est souvent plus facile.',
        listTitle: 'Pour soutenir ton attention',
        bullets: [
          { label: 'Notifications', text: 'Coupe les notifications inutiles.' },
          { label: 'Une chose', text: 'Concentre-toi sur une tâche à la fois.' },
          { label: 'Petits morceaux', text: 'Découpe le travail en plus petites pièces.' },
          { label: 'Pauses et sommeil', text: 'Prends des pauses régulières et soigne le sommeil.' },
        ],
      },
      {
        title: 'Peut-on entraîner l’attention ?',
        body: 'Les exercices d’attention peuvent servir à pratiquer la performance sur des tâches cognitives précises. Un meilleur score dans un jeu ne prouve pas que l’attention du quotidien s’est vraiment améliorée.\n\nDans Zihnify, tu peux essayer de choisir une cible, suivre des signaux et garder de l’information en tête avec différents exercices.',
        note: 'Petit départ : Donne-toi cinq minutes, pointe l’attention sur une tâche, et reviens quand elle dérive.',
        miniTitle: 'Mini-tâche',
        miniBody: 'Dans une courte manche, choisis seulement l’intrus. Si tu dérives, reviens calmement.',
        tryExercise: 'odd',
        footer: 'Les exercices ne remplacent pas une évaluation clinique ni un traitement.',
      },
    ],
  },
  {
    id: 'memory',
    title: 'Comment fonctionne la mémoire ?',
    subtitle: 'Comment apprend-on, stocke-t-on et rappelle-t-on l’information ?',
    category: 'Mémoire et apprentissage',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'Qu’est-ce que la mémoire ?',
        body: 'La mémoire est l’ensemble des processus cognitifs qui nous permettent d’encoder l’information, de la garder et de la récupérer au besoin.',
        listTitle: 'Trois processus de base',
        bullets: [
          { label: 'Encodage', text: 'Apprendre l’information.' },
          { label: 'Stockage', text: 'La garder en mémoire.' },
          { label: 'Récupération', text: 'Rappeler ce qui a été appris.' },
        ],
      },
      {
        title: 'Pourquoi oublie-t-on ?',
        body: 'Une attention qui dérive, trop peu de répétition, le temps qui passe et des informations proches qui se mélangent peuvent rendre le rappel plus difficile.',
        listTitle: 'Pour soutenir le souvenir',
        bullets: [
          { label: 'Révision espacée', text: 'Revois l’information à intervalles.' },
          { label: 'Questionne-toi', text: 'Essaie de te souvenir en te posant des questions.' },
          { label: 'Relie', text: 'Relie le nouveau à ce que tu sais déjà.' },
          { label: 'Sommeil', text: 'Donne du poids à un sommeil suffisant.' },
        ],
      },
      {
        title: 'Peut-on entraîner la mémoire ?',
        body: 'Les stratégies de rappel et une pratique régulière peuvent soutenir la performance sur des tâches d’apprentissage précises. Tout exercice de mémoire ne garantit pas un meilleur souvenir de tout dans la vie quotidienne.\n\nAvec Retiens la séquence dans Zihnify, tu peux essayer de garder de l’information un moment et de la mettre en ordre.',
        note: 'Petit départ : Essaie de te souvenir de trois choses apprises aujourd’hui sans regarder tes notes.',
        miniTitle: 'Mini-tâche',
        miniBody: 'Regarde la séquence et répète-la dans le même ordre sans prendre de notes.',
        tryExercise: 'sequence',
        footer: 'Les exercices ne remplacent pas une évaluation clinique ni un traitement.',
      },
    ],
  },
  {
    id: 'reaction',
    title: 'Qu’est-ce que le temps de réaction ?',
    subtitle: 'Que se passe-t-il entre remarquer un signal et y répondre ?',
    category: 'Contrôle de la réponse',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'Qu’est-ce que le temps de réaction ?',
        body: 'Le temps de réaction est le temps entre l’apparition d’un signal et la réponse. Il inclut remarquer, évaluer et répondre.',
        listTitle: 'Ce qui affecte le temps de réaction',
        bullets: [
          { label: 'Le signal', text: 'Le type et la complexité du signal.' },
          { label: 'Attention', text: 'Attention et vigilance.' },
          { label: 'Fatigue', text: 'Fatigue et sommeil.' },
        ],
      },
      {
        title: 'Plus vite, c’est toujours mieux ?',
        body: 'Une réponse plus rapide n’est pas toujours plus juste. Se précipiter peut augmenter les erreurs ; être plus prudent peut allonger le temps de réponse.',
        listTitle: 'Pour une réponse plus équilibrée',
        bullets: [
          { label: 'Consigne', text: 'Lis les consignes avec soin.' },
          { label: 'Comprendre', text: 'Comprends la tâche avant d’accélérer.' },
          { label: 'Équilibre', text: 'Regarde justesse et vitesse ensemble.' },
          { label: 'Fatigue', text: 'Souviens-toi que la performance peut changer quand tu es fatigué.' },
        ],
      },
      {
        title: 'Peut-on pratiquer le temps de réaction ?',
        body: 'Une pratique répétée peut t’aider à répondre plus vite ou plus régulièrement sur des tâches précises. Accélérer dans un jeu ne veut pas dire que tu réagiras plus vite dans toutes les situations.\n\nAvec Attends et touche dans Zihnify, tu peux pratiquer d’attendre le bon moment et de répondre alors.',
        note: 'Petit départ : Au prochain exercice, regarde non seulement la vitesse, mais aussi le nombre de bonnes réponses.',
        miniTitle: 'Mini-tâche',
        miniBody: 'Attends que le cercle se remplisse, puis touche. Essaie de ne pas toucher trop tôt.',
        tryExercise: 'wait',
        footer: 'Les résultats d’un jeu seuls ne mesurent ni la capacité cognitive globale ni un état clinique.',
      },
    ],
  },
  {
    id: 'focus',
    title: 'Comment soutient-on le focus ?',
    subtitle: 'Que peut-on faire pour travailler plus efficacement ?',
    category: 'Attention et focus',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'Pourquoi est-ce difficile de se concentrer ?',
        body: 'Se concentrer, c’est tenir l’attention sur une tâche. Notifications, bruit, fatigue et trop de choses à la fois peuvent le rendre plus dur.',
        listTitle: 'Facteurs qui affectent le focus',
        bullets: [
          { label: 'Environnement', text: 'Les distractions autour de toi.' },
          { label: 'Fatigue', text: 'La fatigue mentale.' },
          { label: 'Difficulté', text: 'La difficulté de la tâche.' },
          { label: 'Intérêt', text: 'Intérêt et motivation.' },
        ],
      },
      {
        title: 'Pour mieux te concentrer',
        body: 'Ranger l’environnement et simplifier ta façon de travailler peut aider à soutenir l’attention.',
        listTitle: 'Choses à essayer',
        bullets: [
          { label: 'Notifications', text: 'Coupe les notifications du téléphone.' },
          { label: 'Une tâche', text: 'Fixe une seule tâche.' },
          { label: 'Petits morceaux', text: 'Découpe un gros travail en plus petites pièces.' },
          { label: 'Pauses', text: 'Prends des pauses régulières.' },
          { label: 'Revenir', text: 'Quand l’attention dérive, reviens à la tâche calmement.' },
        ],
      },
      {
        title: 'Le focus est-il une habitude ?',
        body: 'Le focus n’est pas seulement une affaire de volonté. Sommeil, stress, environnement et la tâche elle-même affectent aussi l’attention.\n\nDes routines de travail régulières peuvent t’aider à voir dans quelles conditions tu te concentres plus facilement.\n\nAvec Trouve la cible dans Zihnify, tu peux pratiquer de distinguer un signal des autres.',
        note: 'Petit départ : Réduis les distractions aujourd’hui et donne 10 minutes à une seule chose.',
        miniTitle: 'Mini-tâche',
        miniBody: 'Dans la foule, choisis seulement la forme cible. Ignore les autres.',
        tryExercise: 'find',
        footer: 'Ces suggestions ne remplacent pas une évaluation professionnelle ni un traitement.',
      },
    ],
  },
  {
    id: 'plasticity',
    title: 'Comment le cerveau s’adapte-t-il ?',
    subtitle: 'Comment l’apprentissage et l’expérience agissent-ils sur le cerveau ?',
    category: 'Cerveau et performance mentale',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'Qu’est-ce que la neuroplasticité ?',
        body: 'La neuroplasticité est la capacité du cerveau à changer ses connexions et son fonctionnement par l’expérience, l’apprentissage et l’environnement.\n\nApprendre une nouvelle compétence, la répéter et accumuler des expériences différentes peuvent jouer un rôle.',
        listTitle: 'Processus liés à la neuroplasticité',
        bullets: [
          { label: 'Apprentissage', text: 'Apprendre de nouvelles informations.' },
          { label: 'Expérience', text: 'Utiliser l’expérience.' },
          { label: 'Répétition', text: 'Améliorer des compétences en les répétant.' },
          { label: 'Adaptation', text: 'S’adapter à des conditions qui changent.' },
        ],
      },
      {
        title: 'Pourquoi la répétition compte-t-elle ?',
        body: 'La répétition peut aider à consolider ce qui a été appris. Faire toujours la même chose ne suffit pas toujours ; le retour et l’usage de l’information dans d’autres situations peuvent aussi soutenir l’apprentissage.',
        listTitle: 'Pour soutenir l’apprentissage',
        bullets: [
          { label: 'Espacement', text: 'Revois l’information à intervalles.' },
          { label: 'Teste-toi', text: 'Teste-toi avec de petites questions.' },
          { label: 'Retour', text: 'Tire un retour de tes erreurs.' },
          { label: 'Appliquer', text: 'Utilise ce que tu viens d’apprendre dans d’autres exemples.' },
        ],
      },
      {
        title: 'Que donnent les exercices cérébraux ?',
        body: 'Les exercices cognitifs offrent de la pratique sur des tâches précises. Progresser sur ces tâches ne veut pas dire que toutes les compétences cognitives ou la performance quotidienne grandiront dans la même mesure.\n\nEn essayant différents jeux dans Zihnify, tu peux remarquer quelles tâches te semblent plus faciles.',
        note: 'Petit départ : Choisis une nouvelle compétence, pratique un peu, et réessaie quelques jours plus tard.',
        miniTitle: 'Mini-tâche',
        miniBody: 'Suis la balle marquée « VAS ». Quand elles s’arrêtent, choisis seulement celle-là.',
        tryExercise: 'track',
        footer: 'La capacité d’adaptation du cerveau ne garantit pas que chaque exercice relève l’intelligence générale ou l’attention.',
      },
    ],
  },
  {
    id: 'multitask',
    title: 'Le multitâche est-il vraiment possible ?',
    subtitle: 'Combien de choses le cerveau peut-il faire à la fois ?',
    category: 'Attention et focus',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'Combien de choses le cerveau peut-il faire à la fois ?',
        body: 'Écrire un message pendant que la musique joue, et regarder une vidéo en même temps… Dans la journée, on a souvent l’impression de faire plusieurs choses à la fois. Le cerveau se centre-t-il vraiment sur toutes ensemble ?\n\nQuand deux tâches demandent de l’attention, on passe en général vite de l’une à l’autre. Les changements peuvent être si rapides que ça ressemble à un travail simultané.\n\nToute tâche n’a pas besoin d’attention. Faire quelque chose d’automatique n’est pas la même chose que mener une tâche nouvelle et difficile.',
        remember:
          'S’occuper de plusieurs choses à la fois ne veut pas dire qu’on peut se concentrer sur toutes de façon égale.',
      },
      {
        title: 'Pourquoi changer de tâche peut-il fatiguer ?',
        body: 'Imagine une notification pendant que tu prépares un travail. En regardant le message puis en revenant, tu ne perds peut-être pas seulement quelques secondes. L’esprit peut aussi avoir besoin de temps pour se recaler dans la tâche.\n\nChanger peut vouloir dire garder le travail précédent, se tourner vers le nouveau, puis revenir. Les coupures fréquentes peuvent augmenter les erreurs et rendre plus dur de terminer.\n\nSur des tâches complexes, le coût du changement peut être plus clair. Être toujours occupé n’est pas la même chose que travailler efficacement.',
        remember: 'Parfois tu avances plus vite en faisant moins de choses à la fois.',
      },
      {
        title: 'Comment mieux gérer ton attention ?',
        body: 'Tu n’as pas à tout changer d’un coup pour protéger l’attention. De petits ajustements peuvent réduire les changements de tâche.',
        bullets: [
          { label: 'Fixe un objectif', text: 'Avant de commencer, rends clair le travail que tu veux terminer.' },
          { label: 'Coupe les notifications', text: 'Coupe les alertes inutiles pendant un court bloc de travail.' },
          { label: 'Découpe les tâches', text: 'Découpe un gros travail en petites étapes terminables.' },
          { label: 'Marque un point de changement', text: 'Avant de quitter un travail, note brièvement où tu en étais.' },
          { label: 'Fais une pause', text: 'Prévois de courtes pauses qui te conviennent, plutôt qu’un long bloc.' },
        ],
        note: 'Ces méthodes ne marchent pas de la même façon pour tout le monde. L’important est de voir dans quelles conditions tu te concentres plus facilement.',
        remember: 'Petit essai : Pendant cinq minutes, essaie de te concentrer sur une seule chose.',
      },
      {
        title: 'Essaie ce que tu viens d’apprendre',
        body: 'Le point central du multitâche : l’attention n’est pas illimitée. Certaines tâches peuvent aller ensemble ; passer d’une tâche très attentive à une autre peut demander plus d’effort.\n\nDemande-toi : Qu’est-ce qui coupe le plus mon attention pendant la journée ?\n\nLe remarquer peut être un premier pas pour gérer l’attention. Le but n’est pas un focus parfait à chaque fois ; c’est de mieux comprendre quand et vers où tu pointes ton attention.',
        miniTitle: 'Mini-tâche',
        miniBody:
          'Dans ton prochain bloc de travail, choisis un objectif et reste dessus cinq minutes. À la fin, note combien de fois tu as été coupé et à quel point il était facile de revenir.',
        tryExercise: 'find',
      },
    ],
  },
  {
    id: 'fatigue',
    title: 'Fatigue mentale et attention',
    subtitle: 'L’esprit aussi peut se fatiguer',
    category: 'Cerveau et performance mentale',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'L’esprit aussi peut se fatiguer',
        body: 'À la fin d’une longue journée, relire la même phrase plusieurs fois, rater une erreur simple ou peiner à commencer un travail peut sembler familier. Une raison peut être la fatigue mentale.\n\nLa fatigue mentale peut apparaître après de longs moments de pensée, de décision ou de travail qui demande de l’attention. Elle peut se montrer comme une difficulté à se concentrer, un ralentissement ou l’évitement de travaux mentalement exigeants.\n\nCela ne signifie pas toujours un manque de motivation. Parfois on a besoin de repos, de sommeil ou d’un autre rythme de travail.',
        remember: 'Avoir du mal ne veut pas dire que tu es paresseux.',
      },
      {
        title: 'Qu’est-ce qui peut affecter ton attention ?',
        body: 'La performance attentionnelle peut ne pas rester la même toute la journée. Sommeil, stress, bruit, faim, soif et difficulté du travail peuvent affecter le focus.\n\nUne tâche que tu termines facilement quand tu es reposé peut demander plus d’effort en manque de sommeil. L’anxiété ou des pensées occupées peuvent aussi occuper une partie de l’esprit et changer combien d’attention tu peux donner à la tâche actuelle.\n\nTout le monde n’est pas affecté de la même façon. Certaines personnes travaillent mieux au calme ; d’autres préfèrent un son de fond léger.',
        remember:
          'L’attention n’est pas seulement une affaire de volonté ; les conditions dans lesquelles tu es comptent aussi.',
      },
      {
        title: 'Comment protéger l’énergie mentale ?',
        body: 'Tu ne pourras peut-être pas enlever entièrement la fatigue mentale. Des changements dans ta façon de travailler peuvent quand même aider à gérer la charge.',
        bullets: [
          { label: 'Donne la priorité au sommeil', text: 'Un sommeil régulier et suffisant compte pour l’attention et l’apprentissage.' },
          { label: 'Découpe ton travail', text: 'Fais avancer les longues tâches par petites étapes.' },
          { label: 'Repère le besoin de pause', text: 'Quand l’attention dérive clairement, essaie une courte pause.' },
          { label: 'Range l’espace', text: 'Réduis les signaux en trop et prépare ce dont tu as besoin à l’avance.' },
          { label: 'Ne saute pas le basique', text: 'Boire de l’eau et des repas réguliers soutiennent le quotidien.' },
        ],
        note: 'Il n’y a pas une durée de travail qui convient à tout le monde. Tu peux essayer différents réglages et observer ce qui se passe.',
        remember:
          'Petit essai : Souviens-toi d’un moment aujourd’hui où te concentrer était dur. Le manque de sommeil, le stress ou quelque chose dans l’environnement ont-ils pu jouer ?',
      },
      {
        title: 'Le repos fait aussi partie du processus',
        body: 'Quand tu essaies d’entraîner l’attention, tu n’as pas à viser des blocs de plus en plus longs. Travailler efficacement, ce n’est pas seulement le temps passé ; ça dépend aussi de ce que la tâche demande et de comment tu te sens.\n\nSi la fatigue mentale est fréquente, il peut aider de regarder le sommeil, la charge du jour et le stress, plutôt que de seulement pousser plus fort sur l’attention. Une fatigue persistante qui affecte clairement le quotidien peut être une raison de chercher l’appui d’un professionnel de santé.\n\nT’observer peut aider à voir quand continuer et quand faire une pause.',
        miniTitle: 'Mini-tâche',
        miniBody:
          'Avant le prochain exercice, donne-toi une note d’énergie de 1 à 5. Note encore après. Cette petite observation aide à connaître ton propre vécu ; à elle seule, ce n’est pas une mesure scientifique.',
        tryExercise: 'sequence',
      },
    ],
  },
];
