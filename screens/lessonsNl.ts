import { Lesson } from './lessons';

export const LESSONS_NL: Lesson[] = [
  {
    id: 'attention',
    title: 'Hoe werkt aandacht?',
    subtitle: 'Waar richt de geest zich op, en wat mist hij?',
    category: 'Aandacht en focus',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'Wat is aandacht?',
        body: 'Aandacht is het cognitieve proces waarmee de geest zich op bepaalde informatie richt. We kunnen niet alles om ons heen tegelijk in detail verwerken, dus geven we sommige signalen voorrang.',
        listTitle: 'Drie basistypen aandacht',
        bullets: [
          { label: 'Selectieve aandacht', text: 'Je richten op relevante informatie.' },
          { label: 'Volgehouden aandacht', text: 'Focus een tijd vasthouden.' },
          { label: 'Verdeelde aandacht', text: 'Met meer dan één taak omgaan.' },
        ],
      },
      {
        title: 'Waarom dwaalt aandacht af?',
        body: 'Meldingen, vermoeidheid, slaapgebrek en mentale last kunnen het lastiger maken om gefocust te blijven. Bij taken die ons interesseren is focus vasthouden vaak makkelijker.',
        listTitle: 'Om je aandacht te steunen',
        bullets: [
          { label: 'Meldingen', text: 'Zet onnodige meldingen uit.' },
          { label: 'Eén ding', text: 'Richt je op één taak tegelijk.' },
          { label: 'Kleine stukken', text: 'Breek werk in kleinere stukken.' },
          { label: 'Pauzes en slaap', text: 'Neem regelmatig pauze en let op slaap.' },
        ],
      },
      {
        title: 'Kun je aandacht trainen?',
        body: 'Aandachtsoefeningen kunnen dienen om prestatie op specifieke cognitieve taken te oefenen. Een hogere score in een spel bewijst niet dat alledaagse aandacht zeker is verbeterd.\n\nIn Zihnify kun je met verschillende oefeningen een doel kiezen, signalen volgen en informatie in je hoofd houden.',
        note: 'Kleine start: Geef het vijf minuten, richt je aandacht op één taak en kom terug als die afdwaalt.',
        miniTitle: 'Mini-taak',
        miniBody: 'In een korte ronde kies je alleen de afwijking. Dwaal je af, kom dan kalm terug.',
        tryExercise: 'odd',
        footer: 'Oefeningen vervangen geen klinische beoordeling of behandeling.',
      },
    ],
  },
  {
    id: 'memory',
    title: 'Hoe werkt het geheugen?',
    subtitle: 'Hoe leren, bewaren en herinneren we informatie?',
    category: 'Geheugen en leren',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'Wat is geheugen?',
        body: 'Geheugen is het geheel van cognitieve processen waarmee we informatie coderen, bewaren en terughalen wanneer we die nodig hebben.',
        listTitle: 'Drie basisprocessen',
        bullets: [
          { label: 'Coderen', text: 'De informatie leren.' },
          { label: 'Opslaan', text: 'Die in het geheugen houden.' },
          { label: 'Terughalen', text: 'Herinneren wat je leerde.' },
        ],
      },
      {
        title: 'Waarom vergeten we?',
        body: 'Afdwalende aandacht, te weinig herhaling, verstrijkende tijd en vergelijkbare informatie die mengt, kunnen herinneren lastiger maken.',
        listTitle: 'Om herinneren te steunen',
        bullets: [
          { label: 'Gespreide herhaling', text: 'Herhaal informatie met tussenpozen.' },
          { label: 'Vraag jezelf', text: 'Probeer te herinneren door jezelf vragen te stellen.' },
          { label: 'Koppel', text: 'Verbind nieuw met wat je al weet.' },
          { label: 'Slaap', text: 'Geef voldoende slaap gewicht.' },
        ],
      },
      {
        title: 'Kun je het geheugen trainen?',
        body: 'Herinneringsstrategieën en regelmatige oefening kunnen prestatie op specifieke leertaken steunen. Niet elke geheugenoefening garandeert dat je in het dagelijks leven alles beter onthoudt.\n\nMet Onthoud de volgorde in Zihnify kun je informatie even vasthouden en ordenen.',
        note: 'Kleine start: Probeer drie dingen die je vandaag leerde te herinneren zonder naar je notities te kijken.',
        miniTitle: 'Mini-taak',
        miniBody: 'Bekijk de reeks en herhaal die in dezelfde volgorde zonder notities.',
        tryExercise: 'sequence',
        footer: 'Oefeningen vervangen geen klinische beoordeling of behandeling.',
      },
    ],
  },
  {
    id: 'reaction',
    title: 'Wat is reactietijd?',
    subtitle: 'Wat gebeurt er tussen een signaal opmerken en erop reageren?',
    category: 'Reactiecontrole',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'Wat is reactietijd?',
        body: 'Reactietijd is de tijd tussen het verschijnen van een signaal en de reactie erop. Die omvat opmerken, beoordelen en antwoorden.',
        listTitle: 'Wat reactietijd beïnvloedt',
        bullets: [
          { label: 'Het signaal', text: 'Type en complexiteit van het signaal.' },
          { label: 'Aandacht', text: 'Aandacht en alertheid.' },
          { label: 'Vermoeidheid', text: 'Vermoeidheid en slaap.' },
        ],
      },
      {
        title: 'Is sneller altijd beter?',
        body: 'Een sneller antwoord is niet altijd juister. Haasten kan fouten verhogen; voorzichtiger zijn kan de reactietijd rekken.',
        listTitle: 'Voor een evenwichtigere reactie',
        bullets: [
          { label: 'Instructie', text: 'Lees de instructies aandachtig.' },
          { label: 'Begrijpen', text: 'Begrijp de taak voordat je versnelt.' },
          { label: 'Balans', text: 'Kijk naar juistheid en snelheid samen.' },
          { label: 'Vermoeidheid', text: 'Onthoud dat prestatie kan veranderen als je moe bent.' },
        ],
      },
      {
        title: 'Kun je reactietijd oefenen?',
        body: 'Herhaalde oefening kan je helpen sneller of constanter te reageren op specifieke taken. Sneller worden in een spel betekent niet dat je in elke situatie sneller reageert.\n\nMet Wacht en tik in Zihnify kun je oefenen het juiste moment af te wachten en dan te reageren.',
        note: 'Kleine start: Let bij de volgende oefening niet alleen op snelheid, maar ook op hoeveel antwoorden kloppen.',
        miniTitle: 'Mini-taak',
        miniBody: 'Wacht tot de cirkel vol is en tik dan. Probeer niet te vroeg te tikken.',
        tryExercise: 'wait',
        footer: 'Spelresultaten alleen meten noch algemene cognitieve capaciteit noch een klinische toestand.',
      },
    ],
  },
  {
    id: 'focus',
    title: 'Hoe steunen we focus?',
    subtitle: 'Wat kunnen we doen om efficiënter te werken?',
    category: 'Aandacht en focus',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'Waarom is focussen lastig?',
        body: 'Focussen is aandacht op een taak houden. Meldingen, geluid, vermoeidheid en te veel dingen tegelijk kunnen dat lastiger maken.',
        listTitle: 'Factoren die focus beïnvloeden',
        bullets: [
          { label: 'Omgeving', text: 'Afleiding om je heen.' },
          { label: 'Vermoeidheid', text: 'Mentale vermoeidheid.' },
          { label: 'Moeilijkheid', text: 'Hoe moeilijk de taak is.' },
          { label: 'Interesse', text: 'Interesse en motivatie.' },
        ],
      },
      {
        title: 'Om beter te focussen',
        body: 'De omgeving ordenen en je werkwijze vereenvoudigen kan aandacht steunen.',
        listTitle: 'Dingen die je kunt proberen',
        bullets: [
          { label: 'Meldingen', text: 'Zet telefoonmeldingen uit.' },
          { label: 'Eén taak', text: 'Stel één taak in.' },
          { label: 'Kleine stukken', text: 'Splits groot werk in kleinere stukken.' },
          { label: 'Pauzes', text: 'Neem regelmatig pauze.' },
          { label: 'Terugkomen', text: 'Als aandacht afdwaalt, keer kalm terug naar de taak.' },
        ],
      },
      {
        title: 'Is focus een gewoonte?',
        body: 'Focus is niet alleen een kwestie van wil. Slaap, stress, omgeving en de taak zelf beïnvloeden aandacht ook.\n\nRegelmatige werkroutines kunnen je helpen te zien onder welke omstandigheden je makkelijker focust.\n\nMet Vind het doel in Zihnify kun je oefenen één signaal van de rest te onderscheiden.',
        note: 'Kleine start: Verminder vandaag afleiding en geef één ding 10 minuten.',
        miniTitle: 'Mini-taak',
        miniBody: 'In de menigte kies je alleen de doelvorm. Negeer de rest.',
        tryExercise: 'find',
        footer: 'Deze suggesties vervangen geen professionele beoordeling of behandeling.',
      },
    ],
  },
  {
    id: 'plasticity',
    title: 'Hoe past het brein zich aan?',
    subtitle: 'Hoe beïnvloeden leren en ervaring het brein?',
    category: 'Brein en mentale prestatie',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'Wat is neuroplasticiteit?',
        body: 'Neuroplasticiteit is het vermogen van het brein om verbindingen en werking te veranderen door ervaring, leren en omgeving.\n\nEen nieuwe vaardigheid leren, die herhalen en verschillende ervaringen opdoen kan daarbij een rol spelen.',
        listTitle: 'Processen gekoppeld aan neuroplasticiteit',
        bullets: [
          { label: 'Leren', text: 'Nieuwe informatie leren.' },
          { label: 'Ervaring', text: 'Ervaring gebruiken.' },
          { label: 'Herhaling', text: 'Vaardigheden verbeteren door ze te herhalen.' },
          { label: 'Aanpassing', text: 'Aanpassen aan veranderende omstandigheden.' },
        ],
      },
      {
        title: 'Waarom telt herhaling?',
        body: 'Herhaling kan helpen wat je leerde te consolideren. Steeds hetzelfde doen is niet altijd genoeg; feedback en de informatie in andere situaties gebruiken kunnen leren ook steunen.',
        listTitle: 'Om leren te steunen',
        bullets: [
          { label: 'Spreiding', text: 'Herhaal informatie met tussenpozen.' },
          { label: 'Test jezelf', text: 'Test jezelf met kleine vragen.' },
          { label: 'Feedback', text: 'Haal feedback uit fouten.' },
          { label: 'Toepassen', text: 'Gebruik wat je net leerde in andere voorbeelden.' },
        ],
      },
      {
        title: 'Wat leveren breinoefeningen op?',
        body: 'Cognitieve oefeningen bieden praktijk op specifieke taken. Vooruitgang daar betekent niet dat alle cognitieve vaardigheden of dagelijkse prestatie in dezelfde mate groeien.\n\nDoor verschillende spellen in Zihnify te proberen, kun je merken welke taken makkelijker voelen.',
        note: 'Kleine start: Kies een nieuwe vaardigheid, oefen kort en probeer het een paar dagen later opnieuw.',
        miniTitle: 'Mini-taak',
        miniBody: 'Volg de bal met “GA”. Als ze stoppen, kies je alleen die.',
        tryExercise: 'track',
        footer: 'Het aanpassingsvermogen van het brein garandeert niet dat elke oefening algemene intelligentie of aandacht verhoogt.',
      },
    ],
  },
  {
    id: 'multitask',
    title: 'Is multitasken echt mogelijk?',
    subtitle: 'Hoeveel dingen kan het brein tegelijk?',
    category: 'Aandacht en focus',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'Hoeveel dingen kan het brein tegelijk?',
        body: 'Een bericht typen terwijl muziek speelt, en tegelijk een video kijken… Over de dag voelt het vaak alsof we veel dingen tegelijk doen. Richt het brein zich echt op alles samen?\n\nAls twee taken aandacht vragen, wisselen we meestal snel tussen hen. Die wissels kunnen zo snel zijn dat het voelt als gelijktijdig werk.\n\nNiet elke taak vraagt aandacht. Iets automatisches doen is niet hetzelfde als een nieuwe, lastige taak leiden.',
        remember:
          'Veel dingen tegelijk doen betekent niet dat we ons even goed op allemaal kunnen richten.',
      },
      {
        title: 'Waarom kan wisselen van taak vermoeien?',
        body: 'Stel je een melding voor terwijl je een opdracht voorbereidt. Als je het bericht checkt en terugkeert, verlies je misschien niet alleen een paar seconden. De geest kan ook tijd nodig hebben om weer in de taak te vallen.\n\nWisselen kan betekenen het vorige werk vasthouden, naar het nieuwe gaan en weer terug. Frequente onderbrekingen kunnen fouten verhogen en afronden lastiger maken.\n\nBij complexe taken kan de kost van wisselen duidelijker zijn. Constant bezig zijn is niet hetzelfde als efficiënt werken.',
        remember: 'Soms kom je sneller vooruit door minder dingen tegelijk te doen.',
      },
      {
        title: 'Hoe kun je aandacht beter sturen?',
        body: 'Je hoeft niet alles ineens te veranderen om aandacht te beschermen. Kleine aanpassingen kunnen taakwissels verminderen.',
        bullets: [
          { label: 'Zet één doel', text: 'Maak voor je start duidelijk welk werk je wilt afronden.' },
          { label: 'Minder meldingen', text: 'Zet onnodige meldingen uit tijdens een kort werkblok.' },
          { label: 'Splits taken', text: 'Breek groot werk in kleine, afrondbare stappen.' },
          { label: 'Markeer een wisselpunt', text: 'Noteer kort waar je was voordat je een taak verlaat.' },
          { label: 'Neem pauze', text: 'Plan korte pauzes die bij je passen, in plaats van een lang blok.' },
        ],
        note: 'Deze methoden werken niet voor iedereen hetzelfde. Het punt is te merken onder welke omstandigheden jij makkelijker focust.',
        remember: 'Kleine poging: Probeer vijf minuten alleen op één ding te focussen.',
      },
      {
        title: 'Probeer wat je net leerde',
        body: 'Het kernpunt van multitasken: aandacht is niet onbeperkt. Sommige taken kunnen samen lopen; wisselen tussen taken die veel aandacht vragen kan meer moeite kosten.\n\nVraag jezelf: Wat splitst mijn aandacht over de dag het meest?\n\nDat merken kan een eerste stap zijn om aandacht te sturen. Het doel is niet altijd perfecte focus; het is beter te begrijpen wanneer en waarheen je je aandacht richt.',
        miniTitle: 'Mini-taak',
        miniBody:
          'Kies in je volgende werkblok één doel en blijf er vijf minuten bij. Noteer daarna hoe vaak je werd onderbroken en hoe makkelijk terugkomen was.',
        tryExercise: 'find',
      },
    ],
  },
  {
    id: 'fatigue',
    title: 'Mentale vermoeidheid en aandacht',
    subtitle: 'De geest kan ook moe worden',
    category: 'Brein en mentale prestatie',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'De geest kan ook moe worden',
        body: 'Aan het eind van een lange dag dezelfde zin meerdere keren lezen, een simpele fout missen of moeite hebben om werk te starten kan bekend voelen. Een reden kan mentale vermoeidheid zijn.\n\nMentale vermoeidheid kan verschijnen na lange periodes van denken, beslissen of werk dat aandacht vraagt. Die kan zich tonen als moeite met focussen, trager gaan of mijdend gedrag bij mentaal zwaar werk.\n\nDat betekent niet altijd gebrek aan motivatie. Soms hebben we rust, slaap of een andere werkwijze nodig.',
        remember: 'Moeite hebben betekent niet dat je lui bent.',
      },
      {
        title: 'Wat kan je aandacht beïnvloeden?',
        body: 'Aandachtsprestatie hoeft over de dag niet gelijk te blijven. Slaap, stress, geluid, honger, dorst en hoe moeilijk het werk is kunnen focus beïnvloeden.\n\nEen taak die je uitgerust makkelijk afrondt, kan bij slaapgebrek meer moeite kosten. Angst of volle gedachten kunnen ook een deel van de geest bezetten en veranderen hoeveel aandacht je de huidige taak kunt geven.\n\nNiet iedereen wordt hetzelfde beïnvloed. Sommigen werken beter in stilte; anderen met licht achtergrondgeluid.',
        remember:
          'Aandacht is niet alleen wil; de omstandigheden waarin je zit tellen ook.',
      },
      {
        title: 'Hoe kun je mentale energie beschermen?',
        body: 'Je kunt mentale vermoeidheid misschien niet helemaal wegnemen. Veranderingen in hoe je werkt kunnen de last toch helpen sturen.',
        bullets: [
          { label: 'Geef slaap voorrang', text: 'Regelmatige, voldoende slaap telt voor aandacht en leren.' },
          { label: 'Splits je werk', text: 'Breng lange taken in kleine stappen vooruit.' },
          { label: 'Merk pauzenood', text: 'Als aandacht duidelijk afdwaalt, probeer een korte pauze.' },
          { label: 'Orden de ruimte', text: 'Verminder extra signalen en bereid voor wat je nodig hebt.' },
          { label: 'Sla het basis niet over', text: 'Water drinken en regelmatige maaltijden steunen de dag.' },
        ],
        note: 'Er is geen werkduur die voor iedereen past. Je kunt verschillende setups proberen en kijken wat er gebeurt.',
        remember:
          'Kleine poging: Herinner een moment vandaag waarop focussen lastig was. Kunnen slaapgebrek, stress of iets in de omgeving een rol hebben gespeeld?',
      },
      {
        title: 'Rust hoort er ook bij',
        body: 'Als je aandacht probeert te trainen, hoef je niet op steeds langere blokken te mikken. Efficiënt werken is niet alleen bestede tijd; het hangt ook af van wat de taak vraagt en hoe je je voelt.\n\nAls mentale vermoeidheid vaak komt, kan het helpen slaap, daglast en stress te bekijken in plaats van alleen harder op aandacht te duwen. Aanhoudende vermoeidheid die het dagelijks leven duidelijk raakt, kan een reden zijn steun te zoeken bij een zorgprofessional.\n\nJezelf observeren kan helpen te zien wanneer doorgaan en wanneer pauzeren zinvol is.',
        miniTitle: 'Mini-taak',
        miniBody:
          'Geef jezelf voor de volgende oefening een energiescore van 1 tot 5. Score daarna opnieuw. Deze kleine observatie helpt je eigen ervaring te kennen; op zich is het geen wetenschappelijke maat.',
        tryExercise: 'sequence',
      },
    ],
  },
];
