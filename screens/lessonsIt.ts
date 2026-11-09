import { Lesson } from './lessons';

export const LESSONS_IT: Lesson[] = [
  {
    id: 'attention',
    title: 'Come funziona l’attenzione?',
    subtitle: 'Su cosa si concentra la mente e cosa le sfugge?',
    category: 'Attenzione e focus',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'Che cos’è l’attenzione?',
        body: 'L’attenzione è il processo cognitivo che permette alla mente di orientarsi verso certe informazioni. Non possiamo elaborare in dettaglio tutto ciò che ci circonda nello stesso momento, quindi diamo priorità ad alcuni segnali.',
        listTitle: 'Tre tipi di base di attenzione',
        bullets: [
          { label: 'Attenzione selettiva', text: 'Concentrarsi sull’informazione rilevante.' },
          { label: 'Attenzione sostenuta', text: 'Tenere il focus per un periodo.' },
          { label: 'Attenzione divisa', text: 'Occuparsi di più di un compito.' },
        ],
      },
      {
        title: 'Perché l’attenzione si disperde?',
        body: 'Notifiche, stanchezza, mancanza di sonno e carico mentale possono rendere più difficile restare concentrati. Sui compiti che ci interessano, tenere il focus è spesso più facile.',
        listTitle: 'Per sostenere la tua attenzione',
        bullets: [
          { label: 'Notifiche', text: 'Spegni le notifiche inutili.' },
          { label: 'Una cosa', text: 'Concentrati su un compito alla volta.' },
          { label: 'Pezzi piccoli', text: 'Dividi il lavoro in pezzi più piccoli.' },
          { label: 'Pause e sonno', text: 'Fai pause regolari e cura il sonno.' },
        ],
      },
      {
        title: 'Si può allenare l’attenzione?',
        body: 'Gli esercizi di attenzione possono servire a praticare la prestazione su compiti cognitivi specifici. Un punteggio più alto in un gioco non dimostra che l’attenzione quotidiana sia davvero migliorata.\n\nIn Zihnify puoi provare a scegliere un bersaglio, seguire segnali e tenere informazioni in mente con esercizi diversi.',
        note: 'Piccolo inizio: Dedica cinque minuti, punta l’attenzione su un compito e torna quando si disperde.',
        miniTitle: 'Mini compito',
        miniBody: 'In un round breve scegli solo il diverso. Se ti disperdi, torna con calma.',
        tryExercise: 'odd',
        footer: 'Gli esercizi non sostituiscono una valutazione clinica né un trattamento.',
      },
    ],
  },
  {
    id: 'memory',
    title: 'Come funziona la memoria?',
    subtitle: 'Come impariamo, conserviamo e ricordiamo le informazioni?',
    category: 'Memoria e apprendimento',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'Che cos’è la memoria?',
        body: 'La memoria è l’insieme dei processi cognitivi che ci permettono di codificare informazioni, conservarle e recuperarle quando servono.',
        listTitle: 'Tre processi di base',
        bullets: [
          { label: 'Codifica', text: 'Imparare l’informazione.' },
          { label: 'Conservazione', text: 'Tenerla in memoria.' },
          { label: 'Recupero', text: 'Ricordare ciò che è stato imparato.' },
        ],
      },
      {
        title: 'Perché dimentichiamo?',
        body: 'Attenzione dispersa, poca ripetizione, il passare del tempo e informazioni simili che si mescolano possono rendere più difficile ricordare.',
        listTitle: 'Per sostenere il ricordo',
        bullets: [
          { label: 'Ripasso distanziato', text: 'Ripassa le informazioni a intervalli.' },
          { label: 'Fatti domande', text: 'Prova a ricordare facendoti domande.' },
          { label: 'Collega', text: 'Unisci il nuovo a ciò che già sai.' },
          { label: 'Sonno', text: 'Dai peso a dormire a sufficienza.' },
        ],
      },
      {
        title: 'Si può allenare la memoria?',
        body: 'Strategie di ricordo e pratica regolare possono sostenere la prestazione su compiti di apprendimento specifici. Non ogni esercizio di memoria garantisce di ricordare meglio tutto nella vita quotidiana.\n\nCon Ricorda la sequenza in Zihnify puoi provare a tenere informazioni per un po’ e ordinarle.',
        note: 'Piccolo inizio: Prova a ricordare tre cose imparate oggi senza guardare gli appunti.',
        miniTitle: 'Mini compito',
        miniBody: 'Guarda la sequenza e ripetila nello stesso ordine senza annotare.',
        tryExercise: 'sequence',
        footer: 'Gli esercizi non sostituiscono una valutazione clinica né un trattamento.',
      },
    ],
  },
  {
    id: 'reaction',
    title: 'Che cos’è il tempo di reazione?',
    subtitle: 'Cosa succede tra notare un segnale e rispondergli?',
    category: 'Controllo della risposta',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'Che cos’è il tempo di reazione?',
        body: 'Il tempo di reazione è il tempo tra la comparsa di un segnale e la risposta. Include notare, valutare e rispondere.',
        listTitle: 'Cosa influisce sul tempo di reazione',
        bullets: [
          { label: 'Il segnale', text: 'Tipo e complessità del segnale.' },
          { label: 'Attenzione', text: 'Attenzione e vigilanza.' },
          { label: 'Stanchezza', text: 'Stanchezza e sonno.' },
        ],
      },
      {
        title: 'Più veloce è sempre meglio?',
        body: 'Una risposta più rapida non è sempre più precisa. Avere fretta può aumentare gli errori; essere più attenti può allungare il tempo di risposta.',
        listTitle: 'Per una risposta più equilibrata',
        bullets: [
          { label: 'Istruzioni', text: 'Leggi le istruzioni con attenzione.' },
          { label: 'Capire', text: 'Capisci il compito prima di accelerare.' },
          { label: 'Equilibrio', text: 'Guarda precisione e velocità insieme.' },
          { label: 'Stanchezza', text: 'Ricorda che la prestazione può cambiare se sei stanco.' },
        ],
      },
      {
        title: 'Si può praticare il tempo di reazione?',
        body: 'La pratica ripetuta può aiutarti a rispondere più in fretta o con più costanza su compiti specifici. Accelerare in un gioco non significa che reagirai più in fretta in ogni situazione.\n\nCon Aspetta e tocca in Zihnify puoi praticare ad aspettare il momento giusto e rispondere allora.',
        note: 'Piccolo inizio: Nel prossimo esercizio guarda non solo la velocità, ma quante risposte sono giuste.',
        miniTitle: 'Mini compito',
        miniBody: 'Aspetta che il cerchio si riempia, poi tocca. Cerca di non toccare troppo presto.',
        tryExercise: 'wait',
        footer: 'I risultati di un gioco da soli non misurano la capacità cognitiva generale né uno stato clinico.',
      },
    ],
  },
  {
    id: 'focus',
    title: 'Come sosteniamo il focus?',
    subtitle: 'Cosa possiamo fare per lavorare in modo più efficiente?',
    category: 'Attenzione e focus',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'Perché è difficile concentrarsi?',
        body: 'Concentrarsi è tenere l’attenzione su un compito. Notifiche, rumore, stanchezza e troppe cose insieme possono renderlo più difficile.',
        listTitle: 'Fattori che influenzano il focus',
        bullets: [
          { label: 'Ambiente', text: 'Distrazioni intorno a te.' },
          { label: 'Stanchezza', text: 'Fatica mentale.' },
          { label: 'Difficoltà', text: 'Quanto è difficile il compito.' },
          { label: 'Interesse', text: 'Interesse e motivazione.' },
        ],
      },
      {
        title: 'Per concentrarti meglio',
        body: 'Ordinare l’ambiente e semplificare il modo di lavorare può aiutare a sostenere l’attenzione.',
        listTitle: 'Cose che puoi provare',
        bullets: [
          { label: 'Notifiche', text: 'Spegni le notifiche del telefono.' },
          { label: 'Un compito', text: 'Imposta un solo compito.' },
          { label: 'Pezzi piccoli', text: 'Dividi un lavoro grande in pezzi minori.' },
          { label: 'Pause', text: 'Fai pause regolari.' },
          { label: 'Tornare', text: 'Quando l’attenzione si disperde, torna al compito con calma.' },
        ],
      },
      {
        title: 'Il focus è un’abitudine?',
        body: 'Il focus non è solo questione di volontà. Sonno, stress, ambiente e il compito stesso influenzano anche l’attenzione.\n\nRoutine di lavoro regolari possono aiutarti a notare in quali condizioni ti concentri con più facilità.\n\nCon Trova il bersaglio in Zihnify puoi praticare a distinguere un segnale dagli altri.',
        note: 'Piccolo inizio: Riduci le distrazioni oggi e dedica 10 minuti a una sola cosa.',
        miniTitle: 'Mini compito',
        miniBody: 'Nella folla scegli solo la forma bersaglio. Ignora le altre.',
        tryExercise: 'find',
        footer: 'Questi suggerimenti non sostituiscono una valutazione professionale né un trattamento.',
      },
    ],
  },
  {
    id: 'plasticity',
    title: 'Come si adatta il cervello?',
    subtitle: 'Come agiscono apprendimento ed esperienza sul cervello?',
    category: 'Cervello e prestazione mentale',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'Che cos’è la neuroplasticità?',
        body: 'La neuroplasticità è la capacità del cervello di cambiare connessioni e funzionamento con esperienza, apprendimento e ambiente.\n\nImparare una nuova abilità, ripeterla e raccogliere esperienze diverse può avere un ruolo.',
        listTitle: 'Processi legati alla neuroplasticità',
        bullets: [
          { label: 'Apprendimento', text: 'Imparare informazioni nuove.' },
          { label: 'Esperienza', text: 'Usare l’esperienza.' },
          { label: 'Ripetizione', text: 'Migliorare le abilità ripetendole.' },
          { label: 'Adattamento', text: 'Adattarsi a condizioni che cambiano.' },
        ],
      },
      {
        title: 'Perché conta la ripetizione?',
        body: 'La ripetizione può aiutare a consolidare ciò che è stato imparato. Fare sempre la stessa cosa non basta sempre; il feedback e usare l’informazione in altre situazioni possono anche sostenere l’apprendimento.',
        listTitle: 'Per sostenere l’apprendimento',
        bullets: [
          { label: 'Distanza', text: 'Ripassa le informazioni a intervalli.' },
          { label: 'Mettiti alla prova', text: 'Mettiti alla prova con domande piccole.' },
          { label: 'Feedback', text: 'Tira insegnamento dagli errori.' },
          { label: 'Applicare', text: 'Usa ciò che hai appena imparato in altri esempi.' },
        ],
      },
      {
        title: 'Cosa danno gli esercizi cerebrali?',
        body: 'Gli esercizi cognitivi offrono pratica su compiti specifici. Migliorare su quei compiti non significa che tutte le abilità cognitive o la prestazione quotidiana crescano nella stessa misura.\n\nProvando giochi diversi in Zihnify puoi notare quali compiti ti sembrano più facili.',
        note: 'Piccolo inizio: Scegli una nuova abilità, pratica un po’ e riprova qualche giorno dopo.',
        miniTitle: 'Mini compito',
        miniBody: 'Segui la palla con “VIA”. Quando si fermano, scegli solo quella.',
        tryExercise: 'track',
        footer: 'La capacità del cervello di adattarsi non garantisce che ogni esercizio alzi l’intelligenza generale o l’attenzione.',
      },
    ],
  },
  {
    id: 'multitask',
    title: 'Il multitasking è davvero possibile?',
    subtitle: 'Quante cose può fare il cervello insieme?',
    category: 'Attenzione e focus',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'Quante cose può fare il cervello insieme?',
        body: 'Scrivere un messaggio mentre parte la musica e, insieme, guardare un video… Nella giornata spesso abbiamo l’impressione di fare tante cose insieme. Il cervello si concentra davvero su tutte?\n\nQuando due compiti chiedono attenzione, di solito passiamo in fretta dall’uno all’altro. I passaggi possono essere così rapidi da sembrare lavoro simultaneo.\n\nNon ogni compito chiede attenzione. Fare qualcosa di automatico non è lo stesso che portare avanti un compito nuovo e difficile.',
        remember:
          'Occuparsi di tante cose insieme non significa che possiamo concentrarci su tutte allo stesso modo.',
      },
      {
        title: 'Perché cambiare compito può stancare?',
        body: 'Immagina una notifica mentre prepari un lavoro. Controllando il messaggio e tornando, forse non perdi solo pochi secondi. La mente può anche aver bisogno di tempo per rientrare nel compito.\n\nCambiare può voler dire tenere il lavoro precedente, passare al nuovo e tornare. Interruzioni frequenti possono aumentare gli errori e rendere più difficile finire.\n\nSu compiti complessi il costo del cambio può essere più chiaro. Essere sempre occupati non è lo stesso che lavorare con efficienza.',
        remember: 'A volte vai più veloce facendo meno cose insieme.',
      },
      {
        title: 'Come puoi gestire meglio l’attenzione?',
        body: 'Non devi cambiare tutto in una volta per proteggere l’attenzione. Piccoli aggiustamenti possono ridurre i cambi di compito.',
        bullets: [
          { label: 'Fissa un obiettivo', text: 'Prima di iniziare, rendi chiaro il lavoro che vuoi finire.' },
          { label: 'Taglia le notifiche', text: 'Spegni avvisi inutili per un breve blocco di lavoro.' },
          { label: 'Dividi i compiti', text: 'Spezza un lavoro grande in passi piccoli e chiudibili.' },
          { label: 'Segna un punto di cambio', text: 'Prima di lasciare un lavoro, annota breve dove sei rimasto.' },
          { label: 'Fai una pausa', text: 'Pianifica pause corte che ti stanno bene, invece di un blocco lungo.' },
        ],
        note: 'Questi metodi non funzionano uguale per tutti. Il punto è notare in quali condizioni ti concentri con più facilità.',
        remember: 'Piccolo tentativo: Per cinque minuti prova a concentrarti su una sola cosa.',
      },
      {
        title: 'Prova ciò che hai appena imparato',
        body: 'Il punto centrale del multitasking è che l’attenzione non è illimitata. Alcuni compiti possono andare insieme; passare tra compiti che chiedono molta attenzione può costare più sforzo.\n\nChiediti: Cosa mi spezza di più l’attenzione durante il giorno?\n\nNotarlo può essere un primo passo per gestire l’attenzione. Lo scopo non è un focus perfetto sempre; è capire meglio quando e verso dove punti l’attenzione.',
        miniTitle: 'Mini compito',
        miniBody:
          'Nel prossimo blocco di lavoro scegli un obiettivo e resta lì cinque minuti. Alla fine nota quante volte sei stato interrotto e quanto è stato facile tornare.',
        tryExercise: 'find',
      },
    ],
  },
  {
    id: 'fatigue',
    title: 'Fatica mentale e attenzione',
    subtitle: 'Anche la mente può stancarsi',
    category: 'Cervello e prestazione mentale',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'Anche la mente può stancarsi',
        body: 'Alla fine di una giornata lunga, rileggere la stessa frase più volte, saltare un errore semplice o faticare a iniziare un lavoro può sembrare familiare. Un motivo può essere la fatica mentale.\n\nLa fatica mentale può comparire dopo tratti lunghi di pensiero, decisioni o lavoro che chiede attenzione. Può mostrarsi come difficoltà a concentrarsi, rallentamento o evitamento di lavori mentalmente impegnativi.\n\nQuesto non significa sempre mancanza di motivazione. A volte servono riposo, sonno o un altro modo di lavorare.',
        remember: 'Fare fatica non significa essere pigri.',
      },
      {
        title: 'Cosa può influenzare la tua attenzione?',
        body: 'La prestazione attentiva può non restare uguale per tutto il giorno. Sonno, stress, rumore, fame, sete e quanto è difficile il lavoro possono influenzare il focus.\n\nUn compito che finisci facilmente da riposato può costare di più con poco sonno. Ansia o pensieri occupati possono anche occupare parte della mente e cambiare quanta attenzione dai al compito attuale.\n\nNon tutti sono colpiti allo stesso modo. Alcuni lavorano meglio in silenzio; altri con un suono di sottofondo leggero.',
        remember:
          'L’attenzione non è solo volontà; contano anche le condizioni in cui sei.',
      },
      {
        title: 'Come puoi proteggere l’energia mentale?',
        body: 'Forse non puoi togliere del tutto la fatica mentale. Cambiamenti nel modo di lavorare possono comunque aiutare a gestire il carico.',
        bullets: [
          { label: 'Dai priorità al sonno', text: 'Un sonno regolare e sufficiente conta per attenzione e apprendimento.' },
          { label: 'Dividi il lavoro', text: 'Avanza i compiti lunghi a piccoli passi.' },
          { label: 'Nota il bisogno di pausa', text: 'Quando l’attenzione si disperde con chiarezza, prova una pausa breve.' },
          { label: 'Ordina lo spazio', text: 'Riduci segnali in più e prepara prima ciò che ti serve.' },
          { label: 'Non saltare l’essenziale', text: 'Bere acqua e pasti regolari sostengono la giornata.' },
        ],
        note: 'Non c’è una durata di lavoro che va bene per tutti. Puoi provare allestimenti diversi e osservare cosa succede.',
        remember:
          'Piccolo tentativo: Ricorda un momento di oggi in cui concentrarti era difficile. Poco sonno, stress o qualcosa nell’ambiente possono aver contato?',
      },
      {
        title: 'Anche il riposo fa parte',
        body: 'Quando provi ad allenare l’attenzione non devi puntare a blocchi sempre più lunghi. Lavorare con efficienza non è solo tempo speso; dipende anche da ciò che chiede il compito e da come ti senti.\n\nSe la fatica mentale è frequente, può aiutare guardare sonno, carico del giorno e stress, invece di spingere solo di più sull’attenzione. Una fatica persistente che tocca con chiarezza la vita quotidiana può essere motivo per cercare supporto da un professionista della salute.\n\nOsservarti può aiutare a vedere quando continuare e quando fare una pausa.',
        miniTitle: 'Mini compito',
        miniBody:
          'Prima del prossimo esercizio, datti un voto di energia da 1 a 5. Vota di nuovo dopo. Questa piccola osservazione aiuta a conoscere la tua esperienza; da sola non è una misura scientifica.',
        tryExercise: 'sequence',
      },
    ],
  },
];
