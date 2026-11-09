import { Lesson } from './lessons';

export const LESSONS_EN: Lesson[] = [
  {
    id: 'attention',
    title: 'How does attention work?',
    subtitle: 'What does the mind focus on, and what does it miss?',
    category: 'Attention and focus',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'What is attention?',
        body: 'Attention is the cognitive process that lets the mind turn toward some information. We cannot process everything around us in detail at once, so we give some signals priority.',
        listTitle: 'Three basic kinds of attention',
        bullets: [
          { label: 'Selective attention', text: 'Focusing on relevant information.' },
          { label: 'Sustained attention', text: 'Holding focus for a period of time.' },
          { label: 'Divided attention', text: 'Dealing with more than one task.' },
        ],
      },
      {
        title: 'Why does attention drift?',
        body: 'Notifications, fatigue, lack of sleep, and mental load can make it harder to stay focused. On tasks we care about, holding focus can be easier.',
        listTitle: 'To support your attention',
        bullets: [
          { label: 'Notifications', text: 'Turn off unnecessary notifications.' },
          { label: 'One job', text: 'Focus on one task at a time.' },
          { label: 'Small pieces', text: 'Break work into smaller pieces.' },
          { label: 'Breaks and sleep', text: 'Take regular breaks and look after sleep.' },
        ],
      },
      {
        title: 'Can attention be trained?',
        body: 'Attention exercises can be used to practice performance on specific cognitive tasks. A higher score in a game does not prove that everyday attention has definitely improved.\n\nIn Zihnify you can try target selection, tracking signals, and holding information in mind with different exercises.',
        note: 'A small start: Give it five minutes, point your attention at one task, and come back when it drifts.',
        miniTitle: 'Mini task',
        miniBody: 'In a short round, pick only the odd one. When you drift, come back calmly.',
        tryExercise: 'odd',
        footer: 'Exercises are not a substitute for clinical assessment or treatment.',
      },
    ],
  },
  {
    id: 'memory',
    title: 'How does memory work?',
    subtitle: 'How do we learn, store, and recall information?',
    category: 'Memory and learning',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'What is memory?',
        body: 'Memory is the set of cognitive processes that let us encode information, keep it, and bring it back when we need it.',
        listTitle: 'Three basic processes',
        bullets: [
          { label: 'Encoding', text: 'Learning the information.' },
          { label: 'Storage', text: 'Keeping it in memory.' },
          { label: 'Retrieval', text: 'Recalling what was learned.' },
        ],
      },
      {
        title: 'Why do we forget?',
        body: 'Drifting attention, too little rehearsal, the passing of time, and similar information mixing together can make recall harder.',
        listTitle: 'To support remembering',
        bullets: [
          { label: 'Spaced review', text: 'Review information at intervals.' },
          { label: 'Ask yourself', text: 'Try to recall by asking yourself questions.' },
          { label: 'Link it', text: 'Connect new information to what you already know.' },
          { label: 'Sleep', text: 'Give enough sleep some weight.' },
        ],
      },
      {
        title: 'Can memory be trained?',
        body: 'Recall strategies and regular practice can support performance on specific learning tasks. Not every memory exercise guarantees better recall of everything in daily life.\n\nWith Remember the sequence in Zihnify you can try holding information briefly and putting it in order.',
        note: 'A small start: Try to recall three things you learned today without looking at your notes.',
        miniTitle: 'Mini task',
        miniBody: 'Watch the sequence and repeat it in the same order without taking notes.',
        tryExercise: 'sequence',
        footer: 'Exercises are not a substitute for clinical assessment or treatment.',
      },
    ],
  },
  {
    id: 'reaction',
    title: 'What is reaction time?',
    subtitle: 'What happens between noticing a signal and responding to it?',
    category: 'Response control',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'What is reaction time?',
        body: 'Reaction time is the time between a signal appearing and the person responding to it. It includes noticing, evaluating, and answering.',
        listTitle: 'What affects reaction time',
        bullets: [
          { label: 'The signal', text: 'The type and complexity of the signal.' },
          { label: 'Attention', text: 'Attention and alertness.' },
          { label: 'Fatigue', text: 'Fatigue and sleep.' },
        ],
      },
      {
        title: 'Is faster always better?',
        body: 'A faster answer is not always a more accurate one. Rushing can raise errors; being more careful can stretch response time.',
        listTitle: 'For a more balanced response',
        bullets: [
          { label: 'Instructions', text: 'Read the instructions carefully.' },
          { label: 'Understand', text: 'Understand the task before speeding up.' },
          { label: 'Balance', text: 'Look at accuracy and speed together.' },
          { label: 'Fatigue', text: 'Remember performance can change when you are tired.' },
        ],
      },
      {
        title: 'Can reaction time be practiced?',
        body: 'Repeated practice can help you answer faster or more steadily on specific tasks. Speeding up in a game does not mean you will react faster in every situation.\n\nWith Wait and tap in Zihnify you can practice waiting for the right moment and responding then.',
        note: 'A small start: In your next exercise, watch not only speed but also how many answers are correct.',
        miniTitle: 'Mini task',
        miniBody: 'Wait until the circle fills, then tap. Try not to tap early.',
        tryExercise: 'wait',
        footer: 'Game results alone do not measure overall cognitive capacity or clinical status.',
      },
    ],
  },
  {
    id: 'focus',
    title: 'How do we support focus?',
    subtitle: 'What can we do to work more efficiently?',
    category: 'Attention and focus',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'Why is focusing hard?',
        body: 'Focusing means holding attention on a given task. Notifications, noise, fatigue, and doing many things at once can make this harder.',
        listTitle: 'Factors that affect focus',
        bullets: [
          { label: 'Environment', text: 'Distractions around you.' },
          { label: 'Fatigue', text: 'Mental fatigue.' },
          { label: 'Difficulty', text: 'How hard the task is.' },
          { label: 'Interest', text: 'Interest and motivation.' },
        ],
      },
      {
        title: 'To focus better',
        body: 'Arranging the environment and simplifying how you work can help support attention.',
        listTitle: 'Things you can try',
        bullets: [
          { label: 'Notifications', text: 'Turn off phone notifications.' },
          { label: 'One task', text: 'Set a single task.' },
          { label: 'Small pieces', text: 'Split large work into smaller pieces.' },
          { label: 'Breaks', text: 'Take regular breaks.' },
          { label: 'Come back', text: 'When attention drifts, return to the task calmly.' },
        ],
      },
      {
        title: 'Is focus a habit?',
        body: 'Focus is not only a matter of will. Sleep, stress, the environment, and the task itself also affect attention.\n\nBuilding regular work routines can help you notice under which conditions you focus more easily.\n\nWith Find the target in Zihnify you can practice telling one signal apart from the others.',
        note: 'A small start: Reduce distractions today and give one job 10 minutes.',
        miniTitle: 'Mini task',
        miniBody: 'In the crowd, pick only the target shape. Ignore the others.',
        tryExercise: 'find',
        footer: 'These suggestions are not a substitute for professional assessment or treatment.',
      },
    ],
  },
  {
    id: 'plasticity',
    title: 'How does the brain adapt?',
    subtitle: 'How do learning and experience affect the brain?',
    category: 'Brain and mental performance',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'What is neuroplasticity?',
        body: 'Neuroplasticity is the brain’s capacity to change its connections and functioning through experience, learning, and the environment.\n\nLearning a new skill, repeating it, and gathering different experiences can play a role in this.',
        listTitle: 'Processes linked to neuroplasticity',
        bullets: [
          { label: 'Learning', text: 'Learning new information.' },
          { label: 'Experience', text: 'Using experience.' },
          { label: 'Repetition', text: 'Improving skills by repeating them.' },
          { label: 'Adaptation', text: 'Adapting to changing conditions.' },
        ],
      },
      {
        title: 'Why does repetition matter?',
        body: 'Repetition can help consolidate what was learned. Doing the same thing over and over is not always enough; feedback and using the information in different situations can also support learning.',
        listTitle: 'To support learning',
        bullets: [
          { label: 'Spacing', text: 'Review information at intervals.' },
          { label: 'Test yourself', text: 'Test yourself with small questions.' },
          { label: 'Feedback', text: 'Take feedback from mistakes.' },
          { label: 'Apply', text: 'Use what you just learned in different examples.' },
        ],
      },
      {
        title: 'What do brain exercises give?',
        body: 'Cognitive exercises offer practice on specific tasks. Improvement on those tasks does not mean all cognitive skills or daily performance will grow by the same amount.\n\nBy trying different games in Zihnify you can notice which tasks feel easier.',
        note: 'A small start: Pick a new skill, practice briefly, and try again a few days later.',
        miniTitle: 'Mini task',
        miniBody: 'Follow the ball labeled “GO”. When they stop, pick only that one.',
        tryExercise: 'track',
        footer: 'The brain’s capacity to adapt does not guarantee that every exercise will raise general intelligence or attention.',
      },
    ],
  },
  {
    id: 'multitask',
    title: 'Is multitasking really possible?',
    subtitle: 'How many jobs can the brain do at once?',
    category: 'Attention and focus',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'How many jobs can the brain do at once?',
        body: 'Writing a message while listening to music, and watching a video at the same time… Through the day we often feel we are doing many jobs at once. Does the brain really focus on all of them together?\n\nIn fact, when two jobs both need attention we usually switch between them quickly. The switches can be so fast that it feels like simultaneous work.\n\nNot every task needs attention. Doing something automatic is not the same as running a new, hard task.',
        remember:
          'Handling many jobs at once does not mean we can focus on all of them equally.',
      },
      {
        title: 'Why can switching tasks be tiring?',
        body: 'Imagine a notification while you prepare an assignment. When you check the message and return, you may not lose only a few seconds. The mind may also need time to fit back into the task.\n\nSwitching can mean holding the previous job, turning to the new one, and returning again. Frequent splits can raise errors and make finishing harder.\n\nOn complex tasks the cost of switching can be clearer. Being constantly busy is not the same as working efficiently.',
        remember: 'Sometimes you move faster by doing fewer things at once.',
      },
      {
        title: 'How can you manage attention better?',
        body: 'You do not have to change everything at once to protect attention. Small adjustments can reduce task switching.',
        bullets: [
          { label: 'Set one target', text: 'Before you start, make the job you want to finish clear.' },
          { label: 'Cut notifications', text: 'Turn off unnecessary notifications for a short work block.' },
          { label: 'Split tasks', text: 'Break a large job into small, finishable steps.' },
          { label: 'Make a switch point', text: 'Before leaving a job, briefly note where you stopped.' },
          { label: 'Take a break', text: 'Plan short breaks that fit you instead of working for a long stretch.' },
        ],
        note: 'These methods may not work the same for everyone. The point is to notice under which conditions you focus more easily.',
        remember: 'Small try: For five minutes, try focusing on only one job.',
      },
      {
        title: 'Try what you just learned',
        body: 'The main point about multitasking is that attention is not unlimited. Some jobs can run together; switching between jobs that need heavy attention can take more effort.\n\nAsk yourself: What splits my attention most during the day?\n\nNoticing that can be a first step in managing attention. The aim is not perfect focus every time; it is to understand better when and where you point your attention.',
        miniTitle: 'Mini task',
        miniBody:
          'In your next work block pick one target and stay with it for five minutes. At the end, notice how often you were split and how easy it was to return.',
        tryExercise: 'find',
      },
    ],
  },
  {
    id: 'fatigue',
    title: 'Mental fatigue and attention',
    subtitle: 'The mind can get tired too',
    category: 'Brain and mental performance',
    readMinutes: '2–3 min',
    pages: [
      {
        title: 'The mind can get tired too',
        body: 'At the end of a long day, reading the same sentence several times, missing a simple error, or struggling to start a job can feel familiar. One reason can be mental fatigue.\n\nMental fatigue can appear after long stretches of thinking, deciding, or work that needs attention. It can show up as trouble focusing, slowing down, or avoiding mentally demanding jobs.\n\nThis does not always mean a lack of motivation. Sometimes we need rest, sleep, or a change in how we work.',
        remember: 'Struggling does not mean you are lazy.',
      },
      {
        title: 'What can affect your attention?',
        body: 'Attention performance may not stay the same all day. Sleep, stress, noise, hunger, thirst, and how hard the job is can affect focus.\n\nA task you finish easily when rested can take more effort when you are short on sleep. Anxiety or busy thoughts can also occupy part of the mind and change how much attention you can give the current task.\n\nNot everyone is affected the same way. Some work better in quiet; some prefer a light background sound.',
        remember:
          'Attention is not only about will; the conditions you are in also matter.',
      },
      {
        title: 'How can you protect mental energy?',
        body: 'You may not be able to remove mental fatigue entirely. Changes in how you work can still help you manage the load.',
        bullets: [
          { label: 'Give sleep priority', text: 'Regular, enough sleep matters for attention and learning.' },
          { label: 'Split your work', text: 'Move long tasks forward in small steps.' },
          { label: 'Notice the need for a break', text: 'When attention clearly drifts, try a short pause.' },
          { label: 'Arrange your space', text: 'Cut extra signals and prepare what you need in advance.' },
          { label: 'Do not skip basics', text: 'Drinking water and regular meals support daily functioning.' },
        ],
        note: 'There is no single work length that fits everyone. You can try different setups and watch what happens.',
        remember:
          'Small try: Recall a moment today when focusing was hard. Could lack of sleep, stress, or something in the environment have played a part?',
      },
      {
        title: 'Rest is part of the process too',
        body: 'When you try to train attention you do not have to aim for longer and longer work. Efficient work is not only time spent; it also relates to what the task needs and how you feel.\n\nIf mental fatigue is frequent, it can help to look at sleep, daily load, and stress rather than only pushing attention harder. Ongoing fatigue that clearly affects daily life may be a reason to seek support from a health professional.\n\nWatching yourself can help you see when to keep working and when to pause.',
        miniTitle: 'Mini task',
        miniBody:
          'Before the next exercise, give yourself an energy score from 1 to 5. Score again after. This small observation can help you know your own experience; it is not a scientific measure on its own.',
        tryExercise: 'sequence',
      },
    ],
  },
];
