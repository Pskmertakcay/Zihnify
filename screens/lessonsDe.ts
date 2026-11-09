import { Lesson } from './lessons';

export const LESSONS_DE: Lesson[] = [
  {
    id: 'attention',
    title: 'Wie funktioniert Aufmerksamkeit?',
    subtitle: 'Worauf richtet sich der Geist – und was übersieht er?',
    category: 'Aufmerksamkeit und Fokus',
    readMinutes: '2–3 Min.',
    pages: [
      {
        title: 'Was ist Aufmerksamkeit?',
        body: 'Aufmerksamkeit ist der kognitive Prozess, mit dem der Geist sich bestimmten Informationen zuwendet. Wir können nicht alles um uns herum gleichzeitig im Detail verarbeiten, deshalb geben wir manchen Reizen Vorrang.',
        listTitle: 'Drei grundlegende Arten von Aufmerksamkeit',
        bullets: [
          { label: 'Selektive Aufmerksamkeit', text: 'Sich auf relevante Information konzentrieren.' },
          { label: 'Aufrechterhaltene Aufmerksamkeit', text: 'Den Fokus über eine Zeitspanne halten.' },
          { label: 'Geteilte Aufmerksamkeit', text: 'Mit mehr als einer Aufgabe umgehen.' },
        ],
      },
      {
        title: 'Warum driftet Aufmerksamkeit ab?',
        body: 'Benachrichtigungen, Müdigkeit, Schlafmangel und geistige Last können es schwerer machen, konzentriert zu bleiben. Bei Aufgaben, die uns interessieren, fällt das Halten des Fokus oft leichter.',
        listTitle: 'Um deine Aufmerksamkeit zu unterstützen',
        bullets: [
          { label: 'Benachrichtigungen', text: 'Unnötige Benachrichtigungen ausschalten.' },
          { label: 'Eine Sache', text: 'Dich auf eine Aufgabe gleichzeitig konzentrieren.' },
          { label: 'Kleine Stücke', text: 'Arbeit in kleinere Teile teilen.' },
          { label: 'Pausen und Schlaf', text: 'Regelmäßige Pausen und auf den Schlaf achten.' },
        ],
      },
      {
        title: 'Kann man Aufmerksamkeit üben?',
        body: 'Aufmerksamkeitsübungen können genutzt werden, um die Leistung in bestimmten kognitiven Aufgaben zu trainieren. Eine höhere Punktzahl in einem Spiel beweist nicht, dass die alltägliche Aufmerksamkeit sich eindeutig verbessert hat.\n\nIn Zihnify kannst du mit verschiedenen Übungen Zielauswahl, das Verfolgen von Reizen und das Halten von Information im Kopf ausprobieren.',
        note: 'Kleiner Start: Nimm dir fünf Minuten, richte die Aufmerksamkeit auf eine Aufgabe und komm zurück, wenn sie abdriftet.',
        miniTitle: 'Mini-Aufgabe',
        miniBody: 'In einer kurzen Runde nur den Unterschied wählen. Wenn du abdriftest, ruhig zurückkommen.',
        tryExercise: 'odd',
        footer: 'Übungen ersetzen keine klinische Bewertung oder Behandlung.',
      },
    ],
  },
  {
    id: 'memory',
    title: 'Wie funktioniert das Gedächtnis?',
    subtitle: 'Wie lernen, speichern und erinnern wir Information?',
    category: 'Gedächtnis und Lernen',
    readMinutes: '2–3 Min.',
    pages: [
      {
        title: 'Was ist Gedächtnis?',
        body: 'Gedächtnis ist die Menge kognitiver Prozesse, mit denen wir Information kodieren, behalten und bei Bedarf wieder abrufen.',
        listTitle: 'Drei grundlegende Prozesse',
        bullets: [
          { label: 'Kodierung', text: 'Die Information lernen.' },
          { label: 'Speicherung', text: 'Sie im Gedächtnis halten.' },
          { label: 'Abruf', text: 'Gelernte Information erinnern.' },
        ],
      },
      {
        title: 'Warum vergessen wir?',
        body: 'Abdriftende Aufmerksamkeit, zu wenig Wiederholung, vergehende Zeit und ähnliche Information, die sich vermischt, können das Erinnern erschweren.',
        listTitle: 'Um das Erinnern zu unterstützen',
        bullets: [
          { label: 'Verteilte Wiederholung', text: 'Information in Abständen wiederholen.' },
          { label: 'Dich selbst fragen', text: 'Durch Fragen an dich selbst versuchen zu erinnern.' },
          { label: 'Verknüpfen', text: 'Neues mit dem verbinden, was du schon weißt.' },
          { label: 'Schlaf', text: 'Ausreichend Schlaf Gewicht geben.' },
        ],
      },
      {
        title: 'Kann man das Gedächtnis üben?',
        body: 'Erinnerungsstrategien und regelmäßiges Üben können die Leistung in bestimmten Lernaufgaben unterstützen. Nicht jede Gedächtnisübung garantiert, dass du im Alltag alles besser behältst.\n\nMit Reihenfolge merken in Zihnify kannst du ausprobieren, Information kurz zu halten und zu ordnen.',
        note: 'Kleiner Start: Versuch, drei Dinge, die du heute gelernt hast, ohne Notizen zu erinnern.',
        miniTitle: 'Mini-Aufgabe',
        miniBody: 'Sieh dir die Folge an und wiederhole sie in derselben Reihenfolge, ohne Notizen.',
        tryExercise: 'sequence',
        footer: 'Übungen ersetzen keine klinische Bewertung oder Behandlung.',
      },
    ],
  },
  {
    id: 'reaction',
    title: 'Was ist Reaktionszeit?',
    subtitle: 'Was passiert zwischen dem Wahrnehmen eines Reizes und der Antwort?',
    category: 'Reaktionskontrolle',
    readMinutes: '2–3 Min.',
    pages: [
      {
        title: 'Was ist Reaktionszeit?',
        body: 'Reaktionszeit ist die Zeit zwischen dem Erscheinen eines Reizes und der Antwort darauf. Sie umfasst Wahrnehmen, Bewerten und Antworten.',
        listTitle: 'Was die Reaktionszeit beeinflusst',
        bullets: [
          { label: 'Der Reiz', text: 'Art und Komplexität des Reizes.' },
          { label: 'Aufmerksamkeit', text: 'Aufmerksamkeit und Wachheit.' },
          { label: 'Müdigkeit', text: 'Müdigkeit und Schlaf.' },
        ],
      },
      {
        title: 'Ist schneller immer besser?',
        body: 'Eine schnellere Antwort ist nicht immer die richtigere. Hetzen kann Fehler erhöhen; vorsichtiger zu sein kann die Antwortzeit strecken.',
        listTitle: 'Für eine ausgewogenere Antwort',
        bullets: [
          { label: 'Anleitung', text: 'Die Anleitung aufmerksam lesen.' },
          { label: 'Verstehen', text: 'Die Aufgabe verstehen, bevor du schneller wirst.' },
          { label: 'Balance', text: 'Richtigkeit und Tempo zusammen betrachten.' },
          { label: 'Müdigkeit', text: 'Bedenken, dass Leistung bei Müdigkeit schwanken kann.' },
        ],
      },
      {
        title: 'Kann man Reaktionszeit üben?',
        body: 'Wiederholtes Üben kann helfen, in bestimmten Aufgaben schneller oder gleichmäßiger zu antworten. Schneller in einem Spiel zu werden heißt nicht, dass du in jeder Lage schneller reagierst.\n\nMit Warten und tippen in Zihnify kannst du üben, den richtigen Moment abzuwarten und dann zu antworten.',
        note: 'Kleiner Start: Achte in der nächsten Übung nicht nur auf Tempo, sondern auch darauf, wie viele Antworten stimmen.',
        miniTitle: 'Mini-Aufgabe',
        miniBody: 'Warte, bis der Kreis voll ist, dann tippe. Versuch, nicht zu früh zu tippen.',
        tryExercise: 'wait',
        footer: 'Spielergebnisse allein messen weder die allgemeine kognitive Leistungsfähigkeit noch einen klinischen Zustand.',
      },
    ],
  },
  {
    id: 'focus',
    title: 'Wie unterstützen wir Fokus?',
    subtitle: 'Was können wir tun, um effizienter zu arbeiten?',
    category: 'Aufmerksamkeit und Fokus',
    readMinutes: '2–3 Min.',
    pages: [
      {
        title: 'Warum fällt Fokussieren schwer?',
        body: 'Fokussieren heißt, Aufmerksamkeit auf eine bestimmte Aufgabe zu halten. Benachrichtigungen, Lärm, Müdigkeit und viele Dinge gleichzeitig können das erschweren.',
        listTitle: 'Faktoren, die den Fokus beeinflussen',
        bullets: [
          { label: 'Umgebung', text: 'Ablenkungen um dich herum.' },
          { label: 'Müdigkeit', text: 'Geistige Ermüdung.' },
          { label: 'Schwierigkeit', text: 'Wie schwer die Aufgabe ist.' },
          { label: 'Interesse', text: 'Interesse und Motivation.' },
        ],
      },
      {
        title: 'Um besser zu fokussieren',
        body: 'Die Umgebung zu ordnen und die Arbeitsweise zu vereinfachen kann Aufmerksamkeit unterstützen.',
        listTitle: 'Was du ausprobieren kannst',
        bullets: [
          { label: 'Benachrichtigungen', text: 'Handy-Benachrichtigungen ausschalten.' },
          { label: 'Eine Aufgabe', text: 'Eine einzelne Aufgabe setzen.' },
          { label: 'Kleine Stücke', text: 'Große Arbeit in kleinere Teile teilen.' },
          { label: 'Pausen', text: 'Regelmäßige Pausen nehmen.' },
          { label: 'Zurückkommen', text: 'Wenn die Aufmerksamkeit abdriftet, ruhig zur Aufgabe zurückkehren.' },
        ],
      },
      {
        title: 'Ist Fokus eine Gewohnheit?',
        body: 'Fokus ist nicht nur eine Frage des Willens. Schlaf, Stress, Umgebung und die Aufgabe selbst beeinflussen die Aufmerksamkeit ebenfalls.\n\nRegelmäßige Arbeitsroutinen können helfen zu merken, unter welchen Bedingungen du leichter fokussierst.\n\nMit Ziel finden in Zihnify kannst du üben, einen Reiz von den anderen zu unterscheiden.',
        note: 'Kleiner Start: Reduziere heute Ablenkungen und gib einer Sache 10 Minuten.',
        miniTitle: 'Mini-Aufgabe',
        miniBody: 'In der Menge nur die Zielform wählen. Die anderen ignorieren.',
        tryExercise: 'find',
        footer: 'Diese Hinweise ersetzen keine fachliche Bewertung oder Behandlung.',
      },
    ],
  },
  {
    id: 'plasticity',
    title: 'Wie passt sich das Gehirn an?',
    subtitle: 'Wie wirken Lernen und Erfahrung auf das Gehirn?',
    category: 'Gehirn und mentale Leistung',
    readMinutes: '2–3 Min.',
    pages: [
      {
        title: 'Was ist Neuroplastizität?',
        body: 'Neuroplastizität ist die Fähigkeit des Gehirns, Verbindungen und Funktionsweise durch Erfahrung, Lernen und Umgebung zu verändern.\n\nEine neue Fertigkeit zu lernen, sie zu wiederholen und unterschiedliche Erfahrungen zu sammeln kann dabei eine Rolle spielen.',
        listTitle: 'Prozesse, die mit Neuroplastizität zusammenhängen',
        bullets: [
          { label: 'Lernen', text: 'Neue Information lernen.' },
          { label: 'Erfahrung', text: 'Erfahrung nutzen.' },
          { label: 'Wiederholung', text: 'Fertigkeiten durch Wiederholen verbessern.' },
          { label: 'Anpassung', text: 'Sich an veränderte Bedingungen anpassen.' },
        ],
      },
      {
        title: 'Warum ist Wiederholung wichtig?',
        body: 'Wiederholung kann helfen, Gelerntes zu festigen. Immer dasselbe zu tun reicht nicht immer; Rückmeldung und das Nutzen der Information in anderen Situationen können Lernen ebenfalls unterstützen.',
        listTitle: 'Um Lernen zu unterstützen',
        bullets: [
          { label: 'Abstand', text: 'Information in Abständen wiederholen.' },
          { label: 'Dich testen', text: 'Dich mit kleinen Fragen testen.' },
          { label: 'Rückmeldung', text: 'Aus Fehlern Rückmeldung ziehen.' },
          { label: 'Anwenden', text: 'Gerade Gelerntes in anderen Beispielen nutzen.' },
        ],
      },
      {
        title: 'Was bringen Gehirnübungen?',
        body: 'Kognitive Übungen bieten Praxis in bestimmten Aufgaben. Fortschritt dort heißt nicht, dass alle kognitiven Fähigkeiten oder die Alltagsleistung im selben Maß wachsen.\n\nIndem du verschiedene Spiele in Zihnify ausprobierst, kannst du merken, welche Aufgaben dir leichter fallen.',
        note: 'Kleiner Start: Wähle eine neue Fertigkeit, übe kurz und versuche es ein paar Tage später wieder.',
        miniTitle: 'Mini-Aufgabe',
        miniBody: 'Folge dem Ball mit „LOS“. Wenn sie stoppen, wähle nur ihn.',
        tryExercise: 'track',
        footer: 'Die Anpassungsfähigkeit des Gehirns garantiert nicht, dass jede Übung allgemeine Intelligenz oder Aufmerksamkeit steigert.',
      },
    ],
  },
  {
    id: 'multitask',
    title: 'Ist Multitasking wirklich möglich?',
    subtitle: 'Wie viele Dinge kann das Gehirn gleichzeitig tun?',
    category: 'Aufmerksamkeit und Fokus',
    readMinutes: '2–3 Min.',
    pages: [
      {
        title: 'Wie viele Dinge kann das Gehirn gleichzeitig tun?',
        body: 'Eine Nachricht schreiben, während Musik läuft, und nebenbei ein Video ansehen… Im Alltag fühlt es sich oft so an, als täten wir viele Dinge gleichzeitig. Fokussiert das Gehirn wirklich alle zusammen?\n\nWenn zwei Aufgaben Aufmerksamkeit brauchen, wechseln wir meist schnell zwischen ihnen. Die Wechsel können so schnell sein, dass es sich nach gleichzeitigem Arbeiten anfühlt.\n\nNicht jede Aufgabe braucht Aufmerksamkeit. Etwas Automatisiertes zu tun ist nicht dasselbe wie eine neue, schwere Aufgabe zu führen.',
        remember:
          'Viele Dinge gleichzeitig zu machen heißt nicht, dass wir uns allen gleich gut zuwenden können.',
      },
      {
        title: 'Warum kann Aufgabenwechsel anstrengend sein?',
        body: 'Stell dir eine Benachrichtigung vor, während du eine Aufgabe vorbereitest. Wenn du die Nachricht checkst und zurückkehrst, verlierst du vielleicht nicht nur ein paar Sekunden. Der Geist braucht oft auch Zeit, um wieder in die Aufgabe zu finden.\n\nWechseln kann bedeuten, die vorherige Arbeit im Kopf zu halten, sich der neuen zuzuwenden und wieder zurückzukehren. Häufige Unterbrechungen können Fehler erhöhen und das Fertigwerden erschweren.\n\nBei komplexen Aufgaben kann die Kosten des Wechsels klarer sein. Ständig beschäftigt zu sein ist nicht dasselbe wie effizient zu arbeiten.',
        remember: 'Manchmal kommst du schneller voran, wenn du weniger gleichzeitig tust.',
      },
      {
        title: 'Wie kannst du Aufmerksamkeit besser steuern?',
        body: 'Du musst nicht alles auf einmal ändern, um Aufmerksamkeit zu schützen. Kleine Anpassungen können Aufgabenwechsel reduzieren.',
        bullets: [
          { label: 'Ein Ziel setzen', text: 'Mach vor dem Start klar, welche Arbeit du beenden willst.' },
          { label: 'Benachrichtigungen reduzieren', text: 'Für einen kurzen Arbeitsblock unnötige Hinweise ausschalten.' },
          { label: 'Aufgaben teilen', text: 'Eine große Arbeit in kleine, abschließbare Schritte teilen.' },
          { label: 'Einen Wechselpunkt setzen', text: 'Bevor du eine Arbeit verlässt, kurz notieren, wo du stehst.' },
          { label: 'Pause machen', text: 'Statt lange durchzuarbeiten, kurze Pausen planen, die zu dir passen.' },
        ],
        note: 'Diese Methoden wirken nicht bei allen gleich. Wichtig ist zu merken, unter welchen Bedingungen du leichter fokussierst.',
        remember: 'Kleiner Versuch: Konzentriere dich fünf Minuten nur auf eine Sache.',
      },
      {
        title: 'Probier aus, was du gerade gelernt hast',
        body: 'Der zentrale Punkt beim Multitasking: Aufmerksamkeit ist nicht unbegrenzt. Manche Arbeiten können nebeneinander laufen; zwischen Aufgaben mit hoher Aufmerksamkeit zu wechseln kostet oft mehr Aufwand.\n\nFrag dich: Was teilt meine Aufmerksamkeit im Alltag am meisten?\n\nDas zu merken kann ein erster Schritt sein, Aufmerksamkeit zu steuern. Das Ziel ist nicht jedes Mal perfekter Fokus, sondern besser zu verstehen, wann und wohin du deine Aufmerksamkeit richtest.',
        miniTitle: 'Mini-Aufgabe',
        miniBody:
          'Wähle in deinem nächsten Arbeitsblock ein Ziel und bleib fünf Minuten dabei. Am Ende merke, wie oft du unterbrochen wurdest und wie leicht die Rückkehr war.',
        tryExercise: 'find',
      },
    ],
  },
  {
    id: 'fatigue',
    title: 'Geistige Müdigkeit und Aufmerksamkeit',
    subtitle: 'Auch der Geist kann müde werden',
    category: 'Gehirn und mentale Leistung',
    readMinutes: '2–3 Min.',
    pages: [
      {
        title: 'Auch der Geist kann müde werden',
        body: 'Am Ende eines langen Tages denselben Satz mehrmals lesen, einen einfachen Fehler übersehen oder schwer in eine Arbeit finden – das kann bekannt vorkommen. Ein Grund kann geistige Müdigkeit sein.\n\nGeistige Müdigkeit kann nach längeren Phasen des Denkens, Entscheidens oder aufmerksamkeitsintensiver Arbeit auftreten. Sie kann sich als Konzentrationsschwierigkeit, Verlangsamung oder Vermeiden geistig fordernder Arbeit zeigen.\n\nDas heißt nicht immer Motivationsmangel. Manchmal brauchen wir Ruhe, Schlaf oder eine andere Arbeitsweise.',
        remember: 'Sich schwerzutun heißt nicht, faul zu sein.',
      },
      {
        title: 'Was kann deine Aufmerksamkeit beeinflussen?',
        body: 'Aufmerksamkeitsleistung bleibt über den Tag nicht unbedingt gleich. Schlaf, Stress, Lärm, Hunger, Durst und die Schwierigkeit der Arbeit können den Fokus beeinflussen.\n\nEine Aufgabe, die du ausgeruht leicht schaffst, kann bei Schlafmangel mehr Aufwand brauchen. Angst oder volle Gedanken können einen Teil des Geistes belegen und ändern, wie viel Aufmerksamkeit du der aktuellen Aufgabe geben kannst.\n\nNicht jede Person ist gleich betroffen. Manche arbeiten besser in Ruhe, andere mit leichtem Hintergrundton.',
        remember:
          'Aufmerksamkeit ist nicht nur Wille; die Bedingungen, in denen du bist, zählen mit.',
      },
      {
        title: 'Wie kannst du geistige Energie schützen?',
        body: 'Geistige Müdigkeit lässt sich vielleicht nicht ganz entfernen. Änderungen in der Arbeitsweise können trotzdem helfen, die Last zu steuern.',
        bullets: [
          { label: 'Schlaf Vorrang geben', text: 'Regelmäßiger, ausreichender Schlaf zählt für Aufmerksamkeit und Lernen.' },
          { label: 'Arbeit teilen', text: 'Lange Aufgaben in kleinen Schritten voranbringen.' },
          { label: 'Pausenbedarf merken', text: 'Wenn die Aufmerksamkeit klar abdriftet, eine kurze Pause versuchen.' },
          { label: 'Den Raum ordnen', text: 'Zusätzliche Reize reduzieren und Nötiges vorher bereitlegen.' },
          { label: 'Grundlagen nicht weglassen', text: 'Trinken und regelmäßige Mahlzeiten unterstützen den Alltag.' },
        ],
        note: 'Es gibt keine Arbeitslänge, die für alle passt. Du kannst verschiedene Setups ausprobieren und beobachten, was passiert.',
        remember:
          'Kleiner Versuch: Erinner dich an einen Moment heute, in dem Fokussieren schwerfiel. Könnten Schlafmangel, Stress oder etwas in der Umgebung eine Rolle gespielt haben?',
      },
      {
        title: 'Pause gehört auch dazu',
        body: 'Wenn du Aufmerksamkeit übst, musst du nicht auf immer längere Arbeit zielen. Effizientes Arbeiten ist nicht nur verbrachte Zeit; es hängt auch von den Anforderungen der Aufgabe und davon ab, wie du dich fühlst.\n\nTritt geistige Müdigkeit häufig auf, kann es helfen, Schlaf, Tageslast und Stress anzusehen, statt nur härter auf Aufmerksamkeit zu drücken. Anhaltende Müdigkeit, die den Alltag klar beeinträchtigt, kann ein Grund sein, Unterstützung bei Fachleuten zu suchen.\n\nDich selbst zu beobachten kann helfen zu sehen, wann weiterarbeiten und wann innehalten sinnvoll ist.',
        miniTitle: 'Mini-Aufgabe',
        miniBody:
          'Gib dir vor der nächsten Übung eine Energiezahl von 1 bis 5. Danach noch einmal. Diese kleine Beobachtung hilft, dein eigenes Erleben zu kennen; sie ist für sich kein wissenschaftliches Maß.',
        tryExercise: 'sequence',
      },
    ],
  },
];
