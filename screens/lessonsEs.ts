import { Lesson } from './lessons';

export const LESSONS_ES: Lesson[] = [
  {
    id: 'attention',
    title: '¿Cómo funciona la atención?',
    subtitle: '¿En qué se centra la mente y qué se le escapa?',
    category: 'Atención y foco',
    readMinutes: '2–3 min',
    pages: [
      {
        title: '¿Qué es la atención?',
        body: 'La atención es el proceso cognitivo que permite a la mente orientarse hacia cierta información. No podemos procesar con detalle todo lo que nos rodea a la vez, así que damos prioridad a algunas señales.',
        listTitle: 'Tres tipos básicos de atención',
        bullets: [
          { label: 'Atención selectiva', text: 'Centrarse en la información relevante.' },
          { label: 'Atención sostenida', text: 'Mantener el foco durante un tiempo.' },
          { label: 'Atención dividida', text: 'Ocuparse de más de una tarea.' },
        ],
      },
      {
        title: '¿Por qué se dispersa la atención?',
        body: 'Las notificaciones, el cansancio, la falta de sueño y la carga mental pueden dificultar mantener el foco. En tareas que nos importan, sostenerlo suele ser más fácil.',
        listTitle: 'Para apoyar tu atención',
        bullets: [
          { label: 'Notificaciones', text: 'Apaga las notificaciones innecesarias.' },
          { label: 'Una cosa', text: 'Concéntrate en una tarea a la vez.' },
          { label: 'Trozos pequeños', text: 'Parte el trabajo en piezas más pequeñas.' },
          { label: 'Pausas y sueño', text: 'Haz pausas regulares y cuida el sueño.' },
        ],
      },
      {
        title: '¿Se puede entrenar la atención?',
        body: 'Los ejercicios de atención pueden usarse para practicar el rendimiento en tareas cognitivas concretas. Una puntuación más alta en un juego no demuestra que la atención cotidiana haya mejorado con certeza.\n\nEn Zihnify puedes probar a elegir un objetivo, seguir señales y mantener información en la mente con distintos ejercicios.',
        note: 'Un comienzo pequeño: Dedica cinco minutos, apunta la atención a una tarea y vuelve cuando se disperse.',
        miniTitle: 'Mini tarea',
        miniBody: 'En una ronda corta, elige solo el distinto. Si te dispersas, vuelve con calma.',
        tryExercise: 'odd',
        footer: 'Los ejercicios no sustituyen una evaluación clínica ni un tratamiento.',
      },
    ],
  },
  {
    id: 'memory',
    title: '¿Cómo funciona la memoria?',
    subtitle: '¿Cómo aprendemos, guardamos y recordamos información?',
    category: 'Memoria y aprendizaje',
    readMinutes: '2–3 min',
    pages: [
      {
        title: '¿Qué es la memoria?',
        body: 'La memoria es el conjunto de procesos cognitivos que nos permiten codificar información, conservarla y recuperarla cuando la necesitamos.',
        listTitle: 'Tres procesos básicos',
        bullets: [
          { label: 'Codificación', text: 'Aprender la información.' },
          { label: 'Almacenamiento', text: 'Mantenerla en la memoria.' },
          { label: 'Recuperación', text: 'Recordar lo aprendido.' },
        ],
      },
      {
        title: '¿Por qué olvidamos?',
        body: 'La atención dispersa, poca repetición, el paso del tiempo y que se mezclen datos parecidos pueden dificultar el recuerdo.',
        listTitle: 'Para apoyar el recuerdo',
        bullets: [
          { label: 'Repaso espaciado', text: 'Repasa la información a intervalos.' },
          { label: 'Pregúntate', text: 'Intenta recordar haciéndote preguntas.' },
          { label: 'Conecta', text: 'Une lo nuevo con lo que ya sabes.' },
          { label: 'Sueño', text: 'Da peso a dormir lo suficiente.' },
        ],
      },
      {
        title: '¿Se puede entrenar la memoria?',
        body: 'Las estrategias de recuerdo y la práctica regular pueden apoyar el rendimiento en tareas de aprendizaje concretas. No todo ejercicio de memoria garantiza recordar mejor todo en la vida diaria.\n\nCon Recuerda la secuencia en Zihnify puedes probar a mantener información un rato y ordenarla.',
        note: 'Un comienzo pequeño: Intenta recordar tres cosas que hayas aprendido hoy sin mirar tus notas.',
        miniTitle: 'Mini tarea',
        miniBody: 'Mira la secuencia y repítela en el mismo orden sin tomar notas.',
        tryExercise: 'sequence',
        footer: 'Los ejercicios no sustituyen una evaluación clínica ni un tratamiento.',
      },
    ],
  },
  {
    id: 'reaction',
    title: '¿Qué es el tiempo de reacción?',
    subtitle: '¿Qué ocurre entre notar una señal y responder a ella?',
    category: 'Control de respuesta',
    readMinutes: '2–3 min',
    pages: [
      {
        title: '¿Qué es el tiempo de reacción?',
        body: 'El tiempo de reacción es el tiempo entre que aparece una señal y la persona responde. Incluye notar, evaluar y contestar.',
        listTitle: 'Qué afecta el tiempo de reacción',
        bullets: [
          { label: 'La señal', text: 'El tipo y la complejidad de la señal.' },
          { label: 'Atención', text: 'Atención y alerta.' },
          { label: 'Cansancio', text: 'Cansancio y sueño.' },
        ],
      },
      {
        title: '¿Más rápido es siempre mejor?',
        body: 'Una respuesta más rápida no siempre es más precisa. Apresurarse puede aumentar errores; ser más cuidadoso puede alargar el tiempo de respuesta.',
        listTitle: 'Para una respuesta más equilibrada',
        bullets: [
          { label: 'Instrucciones', text: 'Lee las instrucciones con cuidado.' },
          { label: 'Entender', text: 'Entiende la tarea antes de acelerar.' },
          { label: 'Equilibrio', text: 'Mira precisión y velocidad juntas.' },
          { label: 'Cansancio', text: 'Recuerda que el rendimiento puede cambiar si estás cansado.' },
        ],
      },
      {
        title: '¿Se puede practicar el tiempo de reacción?',
        body: 'La práctica repetida puede ayudarte a responder más rápido o con más constancia en tareas concretas. Acelerar en un juego no significa que reaccionarás más rápido en todas las situaciones.\n\nCon Espera y toca en Zihnify puedes practicar esperar el momento adecuado y responder entonces.',
        note: 'Un comienzo pequeño: En el siguiente ejercicio, mira no solo la velocidad, sino cuántas respuestas son correctas.',
        miniTitle: 'Mini tarea',
        miniBody: 'Espera a que el círculo se llene y luego toca. Intenta no tocar antes.',
        tryExercise: 'wait',
        footer: 'Los resultados del juego por sí solos no miden la capacidad cognitiva general ni un estado clínico.',
      },
    ],
  },
  {
    id: 'focus',
    title: '¿Cómo apoyamos el foco?',
    subtitle: '¿Qué podemos hacer para trabajar con más eficiencia?',
    category: 'Atención y foco',
    readMinutes: '2–3 min',
    pages: [
      {
        title: '¿Por qué cuesta enfocarse?',
        body: 'Enfocarse es mantener la atención en una tarea. Las notificaciones, el ruido, el cansancio y hacer muchas cosas a la vez pueden dificultarlo.',
        listTitle: 'Factores que afectan el foco',
        bullets: [
          { label: 'Entorno', text: 'Distracciones a tu alrededor.' },
          { label: 'Cansancio', text: 'Fatiga mental.' },
          { label: 'Dificultad', text: 'Lo difícil que es la tarea.' },
          { label: 'Interés', text: 'Interés y motivación.' },
        ],
      },
      {
        title: 'Para enfocarte mejor',
        body: 'Ordenar el entorno y simplificar cómo trabajas puede ayudar a apoyar la atención.',
        listTitle: 'Cosas que puedes probar',
        bullets: [
          { label: 'Notificaciones', text: 'Apaga las notificaciones del teléfono.' },
          { label: 'Una tarea', text: 'Define una sola tarea.' },
          { label: 'Trozos pequeños', text: 'Divide un trabajo grande en piezas menores.' },
          { label: 'Pausas', text: 'Haz pausas regulares.' },
          { label: 'Volver', text: 'Cuando la atención se disperse, vuelve a la tarea con calma.' },
        ],
      },
      {
        title: '¿El foco es un hábito?',
        body: 'El foco no es solo cuestión de voluntad. El sueño, el estrés, el entorno y la propia tarea también afectan la atención.\n\nCrear rutinas de trabajo puede ayudarte a notar en qué condiciones te enfocas con más facilidad.\n\nCon Encuentra el objetivo en Zihnify puedes practicar distinguir una señal de las demás.',
        note: 'Un comienzo pequeño: Reduce distracciones hoy y dedica 10 minutos a una sola cosa.',
        miniTitle: 'Mini tarea',
        miniBody: 'En la multitud, elige solo la forma objetivo. Ignora las demás.',
        tryExercise: 'find',
        footer: 'Estas sugerencias no sustituyen una evaluación profesional ni un tratamiento.',
      },
    ],
  },
  {
    id: 'plasticity',
    title: '¿Cómo se adapta el cerebro?',
    subtitle: '¿Cómo afectan el aprendizaje y la experiencia al cerebro?',
    category: 'Cerebro y rendimiento mental',
    readMinutes: '2–3 min',
    pages: [
      {
        title: '¿Qué es la neuroplasticidad?',
        body: 'La neuroplasticidad es la capacidad del cerebro de cambiar sus conexiones y su funcionamiento con la experiencia, el aprendizaje y el entorno.\n\nAprender una habilidad nueva, repetirla y reunir experiencias distintas puede intervenir en esto.',
        listTitle: 'Procesos ligados a la neuroplasticidad',
        bullets: [
          { label: 'Aprendizaje', text: 'Aprender información nueva.' },
          { label: 'Experiencia', text: 'Usar la experiencia.' },
          { label: 'Repetición', text: 'Mejorar habilidades al repetirlas.' },
          { label: 'Adaptación', text: 'Adaptarse a condiciones que cambian.' },
        ],
      },
      {
        title: '¿Por qué importa la repetición?',
        body: 'La repetición puede ayudar a consolidar lo aprendido. Hacer siempre lo mismo no basta siempre; la retroalimentación y usar la información en otras situaciones también pueden apoyar el aprendizaje.',
        listTitle: 'Para apoyar el aprendizaje',
        bullets: [
          { label: 'Espacio', text: 'Repasa la información a intervalos.' },
          { label: 'Ponte a prueba', text: 'Ponte a prueba con preguntas pequeñas.' },
          { label: 'Retroalimentación', text: 'Saca aprendizaje de los errores.' },
          { label: 'Aplicar', text: 'Usa lo recién aprendido en otros ejemplos.' },
        ],
      },
      {
        title: '¿Qué aportan los ejercicios cerebrales?',
        body: 'Los ejercicios cognitivos ofrecen práctica en tareas concretas. Mejorar en esas tareas no significa que todas las habilidades cognitivas o el rendimiento diario crezcan en la misma medida.\n\nAl probar distintos juegos en Zihnify puedes notar qué tareas se sienten más fáciles.',
        note: 'Un comienzo pequeño: Elige una habilidad nueva, practica un rato y vuelve a intentarlo unos días después.',
        miniTitle: 'Mini tarea',
        miniBody: 'Sigue la pelota marcada “VE”. Cuando se detengan, elige solo esa.',
        tryExercise: 'track',
        footer: 'La capacidad del cerebro de adaptarse no garantiza que cada ejercicio suba la inteligencia general o la atención.',
      },
    ],
  },
  {
    id: 'multitask',
    title: '¿Es realmente posible el multitasking?',
    subtitle: '¿Cuántas cosas puede hacer el cerebro a la vez?',
    category: 'Atención y foco',
    readMinutes: '2–3 min',
    pages: [
      {
        title: '¿Cuántas cosas puede hacer el cerebro a la vez?',
        body: 'Escribir un mensaje mientras suena música y, a la vez, ver un vídeo… A lo largo del día a menudo sentimos que hacemos muchas cosas a la vez. ¿El cerebro se centra de verdad en todas juntas?\n\nCuando dos tareas necesitan atención, suele haber un cambio rápido entre ellas. Los cambios pueden ser tan rápidos que parece trabajo simultáneo.\n\nNo toda tarea necesita atención. Hacer algo automático no es lo mismo que llevar una tarea nueva y difícil.',
        remember:
          'Ocuparse de muchas cosas a la vez no significa que podamos enfocarnos en todas por igual.',
      },
      {
        title: '¿Por qué puede cansar cambiar de tarea?',
        body: 'Imagina una notificación mientras preparas un trabajo. Al mirar el mensaje y volver, quizá no pierdas solo unos segundos. La mente también puede necesitar tiempo para encajar de nuevo en la tarea.\n\nCambiar puede implicar retener el trabajo anterior, pasar al nuevo y volver. Las interrupciones frecuentes pueden aumentar errores y dificultar terminar.\n\nEn tareas complejas el coste del cambio puede ser más claro. Estar siempre ocupado no es lo mismo que trabajar con eficiencia.',
        remember: 'A veces avanzas más rápido haciendo menos cosas a la vez.',
      },
      {
        title: '¿Cómo puedes gestionar mejor la atención?',
        body: 'No tienes que cambiarlo todo de golpe para proteger la atención. Ajustes pequeños pueden reducir el cambio de tarea.',
        bullets: [
          { label: 'Fija un objetivo', text: 'Antes de empezar, deja claro el trabajo que quieres terminar.' },
          { label: 'Corta notificaciones', text: 'Apaga avisos innecesarios durante un bloque corto de trabajo.' },
          { label: 'Divide tareas', text: 'Parte un trabajo grande en pasos pequeños y terminables.' },
          { label: 'Marca un punto de cambio', text: 'Antes de dejar un trabajo, anota brevemente dónde te quedaste.' },
          { label: 'Haz una pausa', text: 'Planifica pausas cortas que te encajen, en vez de trabajar un tramo largo.' },
        ],
        note: 'Estos métodos no funcionan igual para todas las personas. Lo importante es notar en qué condiciones te enfocas con más facilidad.',
        remember: 'Prueba pequeña: Durante cinco minutos, intenta centrarte en una sola cosa.',
      },
      {
        title: 'Prueba lo que acabas de aprender',
        body: 'El punto central del multitasking es que la atención no es ilimitada. Algunas tareas pueden ir juntas; cambiar entre tareas que piden mucha atención puede costar más esfuerzo.\n\nPregúntate: ¿Qué es lo que más me parte la atención durante el día?\n\nDarse cuenta de eso puede ser un primer paso para gestionar la atención. El objetivo no es un foco perfecto siempre; es entender mejor cuándo y hacia dónde apuntas la atención.',
        miniTitle: 'Mini tarea',
        miniBody:
          'En tu próximo bloque de trabajo elige un objetivo y quédate con él cinco minutos. Al final, nota cuántas veces te interrumpieron y qué tan fácil fue volver.',
        tryExercise: 'find',
      },
    ],
  },
  {
    id: 'fatigue',
    title: 'Fatiga mental y atención',
    subtitle: 'La mente también puede cansarse',
    category: 'Cerebro y rendimiento mental',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'La mente también puede cansarse',
        body: 'Al final de un día largo, leer la misma frase varias veces, pasar por alto un error simple o costar empezar un trabajo puede resultar familiar. Una razón puede ser la fatiga mental.\n\nLa fatiga mental puede aparecer tras ratos largos de pensar, decidir o trabajo que pide atención. Puede mostrarse como dificultad para enfocarse, ir más lento o evitar trabajos mentalmente exigentes.\n\nEsto no siempre significa falta de motivación. A veces necesitamos descanso, sueño o un cambio en cómo trabajamos.',
        remember: 'Que te cueste no significa que seas perezoso.',
      },
      {
        title: '¿Qué puede afectar tu atención?',
        body: 'El rendimiento atencional puede no ser el mismo todo el día. El sueño, el estrés, el ruido, el hambre, la sed y lo difícil que es el trabajo pueden afectar el foco.\n\nUna tarea que terminas con facilidad cuando estás descansado puede costar más si te falta sueño. La ansiedad o los pensamientos ocupados también pueden ocupar parte de la mente y cambiar cuánta atención puedes dar a la tarea actual.\n\nNo a todas las personas les afecta igual. Algunas trabajan mejor en silencio; otras prefieren un sonido de fondo suave.',
        remember:
          'La atención no es solo voluntad; las condiciones en las que estás también importan.',
      },
      {
        title: '¿Cómo puedes proteger la energía mental?',
        body: 'Quizá no puedas quitar del todo la fatiga mental. Cambios en cómo trabajas igual pueden ayudar a manejar la carga.',
        bullets: [
          { label: 'Da prioridad al sueño', text: 'Un sueño regular y suficiente importa para la atención y el aprendizaje.' },
          { label: 'Divide el trabajo', text: 'Avanza las tareas largas en pasos pequeños.' },
          { label: 'Nota la necesidad de pausa', text: 'Cuando la atención se disperse con claridad, prueba una pausa corta.' },
          { label: 'Ordena el espacio', text: 'Reduce señales de más y prepara lo que necesitas de antemano.' },
          { label: 'No saltes lo básico', text: 'Beber agua y comidas regulares apoyan el funcionamiento diario.' },
        ],
        note: 'No hay una duración de trabajo que encaje a todas las personas. Puedes probar distintos arreglos y observar qué pasa.',
        remember:
          'Prueba pequeña: Recuerda un momento de hoy en el que te costó enfocarte. ¿Pudieron intervenir la falta de sueño, el estrés o algo del entorno?',
      },
      {
        title: 'El descanso también forma parte',
        body: 'Cuando intentas entrenar la atención no tienes que apuntar a bloques cada vez más largos. Trabajar con eficiencia no es solo tiempo invertido; también se relaciona con lo que pide la tarea y con cómo te sientes.\n\nSi la fatiga mental es frecuente, puede ayudar mirar el sueño, la carga del día y el estrés, en vez de solo empujar más la atención. Una fatiga persistente que afecta con claridad la vida diaria puede ser motivo para buscar apoyo de un profesional de la salud.\n\nObservarte puede ayudar a ver cuándo seguir y cuándo pausar.',
        miniTitle: 'Mini tarea',
        miniBody:
          'Antes del siguiente ejercicio, date una nota de energía del 1 al 5. Vuelve a puntuar después. Esta observación pequeña ayuda a conocer tu propia experiencia; por sí sola no es una medida científica.',
        tryExercise: 'sequence',
      },
    ],
  },
];
