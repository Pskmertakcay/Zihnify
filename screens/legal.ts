import type { Locale } from '../i18n';

export type LegalSection = {
  heading?: string;
  body: string;
};

export type LegalDoc = {
  kicker: string;
  title: string;
  updated?: string;
  sections: LegalSection[];
};

export const PRIVACY_POLICY: LegalDoc = {
  kicker: 'Yasal',
  title: 'Gizlilik politikası',
  updated: '15.10.2026',
  sections: [
    {
      body: 'Zihnify olarak kullanıcılarımızın gizliliğine önem veriyoruz.',
    },
    {
      heading: 'Toplanan bilgiler',
      body: 'Hesap yoktur. Sunucuya veri göndermeyiz. Egzersiz ilerlemesi, seri, eğitim kartları, dil, görünüm ve hatırlatma tercihi yalnızca bu telefonda tutulur. İsteğe bağlı hatırlatma için bildirim izni telefonda sorulur.',
    },
    {
      heading: 'Bilgilerin kullanım amacı',
      body: 'Bu kayıtlar uygulamanın kaldığın yerden devam etmesi ve hatırlatmayı sen açtıysan akşam bildirimi göndermesi içindir.',
    },
    {
      heading: 'Üçüncü taraf hizmetleri',
      body: 'Reklam ve analiz kullanmayız. Uygulamayı App Store veya Google Play’den indirirsen o mağazaların kendi gizlilik kuralları geçerlidir.',
    },
    {
      heading: 'Veri güvenliği ve saklama',
      body: 'Kayıtlar bu cihazda durur. Uygulamayı silersen bu veriler de gider.',
    },
    {
      heading: 'Kullanıcı hakları',
      body: 'Ayarlar’daki “İlerlemeyi sil” ile bu telefondaki ilerlemeyi silebilirsin. 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamındaki talepler için zihnify@gmail.com adresine yazabilirsin.',
    },
    {
      heading: 'İletişim',
      body: 'Gizlilik ve kişisel verilerle ilgili talepleriniz için zihnify@gmail.com üzerinden bize ulaşabilirsiniz.',
    },
    {
      body: 'Bu politika, Zihnify\'nin fiilen kullandığı özellikler ve veri işleme süreçleriyle uyumlu olarak uygulanır.',
    },
  ],
};

export const TERMS_OF_USE: LegalDoc = {
  kicker: 'Yasal',
  title: 'Kullanım koşulları',
  updated: '15.10.2026',
  sections: [
    {
      body: 'Zihnify; dikkat, odaklanma, hafıza ve benzeri bilişsel becerilere yönelik egzersizler ve bilgilendirici içerikler sunan bir uygulamadır.',
    },
    {
      heading: 'Kullanım amacı',
      body: 'Uygulama kişisel kullanım ve genel bilgilendirme amacı taşır. İçerikler tıbbi teşhis, psikolojik değerlendirme veya tedavi yerine geçmez.',
    },
    {
      heading: 'Kullanıcı sorumluluğu',
      body: 'Kullanıcılar uygulamayı hukuka uygun kullanmayı, sistemin güvenliğini bozmamayı ve içerikleri izinsiz biçimde çoğaltmamayı kabul eder.',
    },
    {
      heading: 'Egzersiz sonuçları',
      body: 'Egzersiz puanları ve ilerleme kayıtları klinik değerlendirme niteliği taşımaz. Uygulama, her kullanıcı için belirli bir gelişim veya sonuç garantisi vermez.',
    },
    {
      heading: 'Ücret',
      body: 'Bu sürüm ücretsizdir. Reklam ve ücretli özellik yoktur.',
    },
    {
      heading: 'Fikri mülkiyet',
      body: 'Uygulamadaki yazılım, tasarım, metinler ve diğer içerikler ilgili hak sahiplerine aittir. Mevzuatın izin verdiği hâller dışında izinsiz kopyalanamaz veya ticari amaçla kullanılamaz.',
    },
    {
      heading: 'Hizmet değişiklikleri',
      body: 'Uygulama güncellenebilir veya teknik nedenlerle geçici olarak kullanılamayabilir. Kullanıcıların kanuni hakları saklıdır.',
    },
    {
      heading: 'İletişim',
      body: 'Sorularınız için zihnify@gmail.com üzerinden bize ulaşabilirsiniz.',
    },
    {
      body: 'Bu koşullar, yürürlükteki mevzuata uygun olarak uygulanır.',
    },
  ],
};

export const PRIVACY_POLICY_EN: LegalDoc = {
  kicker: 'Legal',
  title: 'Privacy policy',
  updated: '15.10.2026',
  sections: [
    {
      body: 'At Zihnify we take the privacy of our users seriously.',
    },
    {
      heading: 'Information we collect',
      body: 'There is no account. We do not send data to a server. Exercise progress, streak, lesson cards, language, appearance, and the reminder setting stay on this phone only. Optional reminders ask for notification permission on the device.',
    },
    {
      heading: 'How we use information',
      body: 'These records let the app continue where you left off and, if you turn reminders on, send an evening notification.',
    },
    {
      heading: 'Third-party services',
      body: 'We do not use ads or analytics. If you download the app from the App Store or Google Play, those stores’ own privacy rules apply.',
    },
    {
      heading: 'Security and retention',
      body: 'Records stay on this device. Uninstalling the app also removes this data.',
    },
    {
      heading: 'Your rights',
      body: 'Use Delete progress in Settings to erase progress on this phone. For requests under Law No. 6698 on the Protection of Personal Data, write to zihnify@gmail.com.',
    },
    {
      heading: 'Contact',
      body: 'For privacy and personal-data requests, reach us at zihnify@gmail.com.',
    },
    {
      body: 'This policy applies in line with the features and processing Zihnify actually uses.',
    },
  ],
};

export const TERMS_OF_USE_EN: LegalDoc = {
  kicker: 'Legal',
  title: 'Terms of use',
  updated: '15.10.2026',
  sections: [
    {
      body: 'Zihnify is an app that offers exercises and educational content for attention, focus, memory, and similar cognitive skills.',
    },
    {
      heading: 'Purpose of use',
      body: 'The app is for personal use and general information. The content is not a medical diagnosis, psychological assessment, or treatment.',
    },
    {
      heading: 'User responsibility',
      body: 'Users agree to use the app lawfully, not to disrupt its security, and not to copy its content without permission.',
    },
    {
      heading: 'Exercise results',
      body: 'Scores and progress records are not a clinical assessment. The app does not guarantee a specific improvement or result for every user.',
    },
    {
      heading: 'Price',
      body: 'This version is free. There are no ads or paid features.',
    },
    {
      heading: 'Intellectual property',
      body: 'The software, design, texts, and other content belong to the relevant rights holders. Except where the law allows, they may not be copied or used commercially without permission.',
    },
    {
      heading: 'Service changes',
      body: 'The app may be updated or temporarily unavailable for technical reasons. Statutory user rights remain reserved.',
    },
    {
      heading: 'Contact',
      body: 'For questions, reach us at zihnify@gmail.com.',
    },
    {
      body: 'These terms apply in accordance with applicable law.',
    },
  ],
};

export const PRIVACY_POLICY_DE: LegalDoc = {
  kicker: 'Rechtliches',
  title: 'Datenschutz',
  updated: '15.10.2026',
  sections: [
    {
      body: 'Bei Zihnify nehmen wir den Schutz der Privatsphäre unserer Nutzerinnen und Nutzer ernst.',
    },
    {
      heading: 'Welche Daten wir erfassen',
      body: 'Es gibt kein Konto. Wir senden keine Daten an einen Server. Übungsfortschritt, Serie, Lektionen, Sprache, Erscheinung und die Erinnerungseinstellung bleiben nur auf diesem Telefon. Optionale Erinnerungen fragen auf dem Gerät nach der Mitteilungsberechtigung.',
    },
    {
      heading: 'Wofür wir Daten nutzen',
      body: 'Diese Einträge lassen die App dort weitermachen, wo du aufgehört hast, und senden abends eine Mitteilung, wenn du Erinnerungen einschaltest.',
    },
    {
      heading: 'Drittanbieter',
      body: 'Wir nutzen keine Werbung und keine Analyse. Lädst du die App im App Store oder bei Google Play, gelten deren eigene Datenschutzregeln.',
    },
    {
      heading: 'Sicherheit und Speicherdauer',
      body: 'Die Einträge bleiben auf diesem Gerät. Deinstallierst du die App, sind sie weg.',
    },
    {
      heading: 'Deine Rechte',
      body: 'Mit „Fortschritt löschen“ in den Einstellungen löschst du den Fortschritt auf diesem Telefon. Anfragen nach Gesetz Nr. 6698: zihnify@gmail.com.',
    },
    {
      heading: 'Kontakt',
      body: 'Für Datenschutz- und Datenanfragen erreichst du uns unter zihnify@gmail.com.',
    },
    {
      body: 'Diese Richtlinie gilt im Rahmen der Funktionen und Verarbeitungen, die Zihnify tatsächlich nutzt.',
    },
  ],
};

export const TERMS_OF_USE_DE: LegalDoc = {
  kicker: 'Rechtliches',
  title: 'Nutzungsbedingungen',
  updated: '15.10.2026',
  sections: [
    {
      body: 'Zihnify ist eine App mit Übungen und Lerninhalten zu Aufmerksamkeit, Fokus, Gedächtnis und ähnlichen kognitiven Fähigkeiten.',
    },
    {
      heading: 'Zweck der Nutzung',
      body: 'Die App dient der persönlichen Nutzung und allgemeinen Information. Die Inhalte sind keine medizinische Diagnose, keine psychologische Bewertung und keine Behandlung.',
    },
    {
      heading: 'Verantwortung der Nutzerinnen und Nutzer',
      body: 'Du stimmst zu, die App rechtmäßig zu nutzen, ihre Sicherheit nicht zu beeinträchtigen und Inhalte nicht ohne Erlaubnis zu kopieren.',
    },
    {
      heading: 'Übungsergebnisse',
      body: 'Punkte und Fortschrittsdaten sind keine klinische Bewertung. Die App garantiert keine bestimmte Verbesserung oder ein bestimmtes Ergebnis für jede Person.',
    },
    {
      heading: 'Preis',
      body: 'Diese Version ist kostenlos. Es gibt keine Werbung und keine kostenpflichtigen Funktionen.',
    },
    {
      heading: 'Geistiges Eigentum',
      body: 'Software, Design, Texte und andere Inhalte gehören den jeweiligen Rechteinhabern. Soweit das Gesetz es nicht erlaubt, dürfen sie ohne Erlaubnis nicht kopiert oder gewerblich genutzt werden.',
    },
    {
      heading: 'Änderungen am Dienst',
      body: 'Die App kann aus technischen Gründen aktualisiert oder vorübergehend nicht verfügbar sein. Gesetzliche Nutzerrechte bleiben unberührt.',
    },
    {
      heading: 'Kontakt',
      body: 'Bei Fragen erreichst du uns unter zihnify@gmail.com.',
    },
    {
      body: 'Diese Bedingungen gelten nach Maßgabe des geltenden Rechts.',
    },
  ],
};

export const PRIVACY_POLICY_ES: LegalDoc = {
  kicker: 'Legal',
  title: 'Política de privacidad',
  updated: '15.10.2026',
  sections: [
    {
      body: 'En Zihnify nos tomamos en serio la privacidad de quienes usan la app.',
    },
    {
      heading: 'Información que recopilamos',
      body: 'No hay cuenta. No enviamos datos a un servidor. El progreso, la racha, las lecciones, el idioma, el aspecto y el recordatorio se quedan solo en este teléfono. Los recordatorios opcionales piden permiso de notificaciones en el aparato.',
    },
    {
      heading: 'Cómo usamos la información',
      body: 'Estos registros sirven para continuar donde lo dejaste y, si activas recordatorios, enviar un aviso por la noche.',
    },
    {
      heading: 'Servicios de terceros',
      body: 'No usamos anuncios ni analítica. Si descargas la app de App Store o Google Play, rigen las normas de privacidad de esas tiendas.',
    },
    {
      heading: 'Seguridad y conservación',
      body: 'Los registros se quedan en este dispositivo. Si desinstalas la app, también se van.',
    },
    {
      heading: 'Tus derechos',
      body: 'Con «Borrar progreso» en Ajustes borras el progreso de este teléfono. Para solicitudes según la Ley n.º 6698: zihnify@gmail.com.',
    },
    {
      heading: 'Contacto',
      body: 'Para solicitudes de privacidad y datos personales, escríbenos a zihnify@gmail.com.',
    },
    {
      body: 'Esta política se aplica según las funciones y tratamientos que Zihnify use de hecho.',
    },
  ],
};

export const TERMS_OF_USE_ES: LegalDoc = {
  kicker: 'Legal',
  title: 'Términos de uso',
  updated: '15.10.2026',
  sections: [
    {
      body: 'Zihnify es una app con ejercicios y contenido educativo sobre atención, foco, memoria y habilidades cognitivas similares.',
    },
    {
      heading: 'Finalidad de uso',
      body: 'La app es para uso personal e información general. El contenido no es un diagnóstico médico, una evaluación psicológica ni un tratamiento.',
    },
    {
      heading: 'Responsabilidad de quien usa la app',
      body: 'Quien usa la app acepta usarla de forma lícita, no alterar su seguridad y no copiar su contenido sin permiso.',
    },
    {
      heading: 'Resultados de los ejercicios',
      body: 'Las puntuaciones y el progreso no son una evaluación clínica. La app no garantiza una mejora o un resultado concreto para cada persona.',
    },
    {
      heading: 'Precio',
      body: 'Esta versión es gratuita. No hay anuncios ni funciones de pago.',
    },
    {
      heading: 'Propiedad intelectual',
      body: 'El software, el diseño, los textos y el resto del contenido pertenecen a sus titulares. Salvo donde la ley lo permita, no se pueden copiar ni usar con fines comerciales sin permiso.',
    },
    {
      heading: 'Cambios del servicio',
      body: 'La app puede actualizarse o no estar disponible de forma temporal por motivos técnicos. Quedan reservados los derechos legales de las personas usuarias.',
    },
    {
      heading: 'Contacto',
      body: 'Para preguntas, escríbenos a zihnify@gmail.com.',
    },
    {
      body: 'Estos términos se aplican de acuerdo con la legislación vigente.',
    },
  ],
};

export const PRIVACY_POLICY_FR: LegalDoc = {
  kicker: 'Mentions légales',
  title: 'Politique de confidentialité',
  updated: '15.10.2026',
  sections: [
    {
      body: 'Chez Zihnify, nous prenons au sérieux la vie privée de celles et ceux qui utilisent l’app.',
    },
    {
      heading: 'Informations que nous collectons',
      body: 'Il n’y a pas de compte. Nous n’envoyons pas de données à un serveur. Progression, série, leçons, langue, apparence et rappel restent uniquement sur ce téléphone. Les rappels optionnels demandent l’autorisation de notification sur l’appareil.',
    },
    {
      heading: 'Comment nous utilisons les informations',
      body: 'Ces enregistrements servent à reprendre là où tu t’étais arrêté et, si tu actives les rappels, à envoyer une notif le soir.',
    },
    {
      heading: 'Services tiers',
      body: 'Nous n’utilisons ni pubs ni analytique. Si tu télécharges l’app depuis l’App Store ou Google Play, leurs règles de confidentialité s’appliquent.',
    },
    {
      heading: 'Sécurité et conservation',
      body: 'Les enregistrements restent sur cet appareil. Désinstaller l’app les supprime aussi.',
    },
    {
      heading: 'Tes droits',
      body: '« Effacer la progression » dans Réglages efface la progression sur ce téléphone. Demandes selon la loi n° 6698 : zihnify@gmail.com.',
    },
    {
      heading: 'Contact',
      body: 'Pour les demandes de confidentialité et de données personnelles, écris-nous à zihnify@gmail.com.',
    },
    {
      body: 'Cette politique s’applique selon les fonctions et traitements que Zihnify utilise réellement.',
    },
  ],
};

export const TERMS_OF_USE_FR: LegalDoc = {
  kicker: 'Mentions légales',
  title: 'Conditions d’utilisation',
  updated: '15.10.2026',
  sections: [
    {
      body: 'Zihnify est une app d’exercices et de contenus éducatifs sur l’attention, le focus, la mémoire et des compétences cognitives proches.',
    },
    {
      heading: 'Objet de l’usage',
      body: 'L’app est destinée à un usage personnel et à une information générale. Le contenu n’est pas un diagnostic médical, une évaluation psychologique ni un traitement.',
    },
    {
      heading: 'Responsabilité de l’utilisateur',
      body: 'En utilisant l’app, tu acceptes de l’utiliser licitement, de ne pas en compromettre la sécurité et de ne pas copier son contenu sans autorisation.',
    },
    {
      heading: 'Résultats des exercices',
      body: 'Les scores et la progression ne constituent pas une évaluation clinique. L’app ne garantit pas une amélioration ou un résultat précis pour chaque personne.',
    },
    {
      heading: 'Prix',
      body: 'Cette version est gratuite. Il n’y a ni pubs ni fonctions payantes.',
    },
    {
      heading: 'Propriété intellectuelle',
      body: 'Le logiciel, le design, les textes et les autres contenus appartiennent à leurs titulaires. Sauf là où la loi le permet, ils ne peuvent pas être copiés ni utilisés à des fins commerciales sans autorisation.',
    },
    {
      heading: 'Modifications du service',
      body: 'L’app peut être mise à jour ou temporairement indisponible pour des raisons techniques. Les droits légaux des utilisateurs restent réservés.',
    },
    {
      heading: 'Contact',
      body: 'Pour toute question, écris-nous à zihnify@gmail.com.',
    },
    {
      body: 'Ces conditions s’appliquent conformément au droit applicable.',
    },
  ],
};

export const PRIVACY_POLICY_PT: LegalDoc = {
  kicker: 'Legal',
  title: 'Política de privacidade',
  updated: '15.10.2026',
  sections: [
    {
      body: 'No Zihnify levamos a sério a privacidade de quem usa o app.',
    },
    {
      heading: 'Informações que coletamos',
      body: 'Não há conta. Não enviamos dados a um servidor. Progresso, sequência, lições, idioma, aparência e o lembrete ficam só neste celular. Lembretes opcionais pedem permissão de notificação no aparelho.',
    },
    {
      heading: 'Como usamos as informações',
      body: 'Esses registros servem para continuar de onde parou e, se você ligar os lembretes, enviar um aviso à noite.',
    },
    {
      heading: 'Serviços de terceiros',
      body: 'Não usamos anúncios nem análise. Se você baixar o app na App Store ou no Google Play, valem as regras de privacidade dessas lojas.',
    },
    {
      heading: 'Segurança e retenção',
      body: 'Os registros ficam neste aparelho. Desinstalar o app também os apaga.',
    },
    {
      heading: 'Seus direitos',
      body: 'Em Ajustes, «Apagar progresso» apaga o progresso neste celular. Pedidos pela Lei nº 6698: zihnify@gmail.com.',
    },
    {
      heading: 'Contato',
      body: 'Para pedidos de privacidade e dados pessoais, fale conosco em zihnify@gmail.com.',
    },
    {
      body: 'Esta política vale conforme as funções e os tratamentos que o Zihnify de fato usa.',
    },
  ],
};

export const TERMS_OF_USE_PT: LegalDoc = {
  kicker: 'Legal',
  title: 'Termos de uso',
  updated: '15.10.2026',
  sections: [
    {
      body: 'Zihnify é um app com exercícios e conteúdo educativo sobre atenção, foco, memória e habilidades cognitivas semelhantes.',
    },
    {
      heading: 'Finalidade de uso',
      body: 'O app é para uso pessoal e informação geral. O conteúdo não é diagnóstico médico, avaliação psicológica nem tratamento.',
    },
    {
      heading: 'Responsabilidade de quem usa',
      body: 'Ao usar o app, você concorda em usá-lo de forma lícita, não comprometer a segurança e não copiar o conteúdo sem permissão.',
    },
    {
      heading: 'Resultados dos exercícios',
      body: 'Pontuações e registros de progresso não são avaliação clínica. O app não garante melhoria ou resultado específico para cada pessoa.',
    },
    {
      heading: 'Preço',
      body: 'Esta versão é gratuita. Não há anúncios nem funções pagas.',
    },
    {
      heading: 'Propriedade intelectual',
      body: 'O software, o design, os textos e o restante do conteúdo pertencem aos respectivos titulares. Salvo onde a lei permitir, não podem ser copiados nem usados comercialmente sem permissão.',
    },
    {
      heading: 'Mudanças no serviço',
      body: 'O app pode ser atualizado ou ficar temporariamente indisponível por motivos técnicos. Os direitos legais de quem usa permanecem reservados.',
    },
    {
      heading: 'Contato',
      body: 'Para dúvidas, fale conosco em zihnify@gmail.com.',
    },
    {
      body: 'Estes termos se aplicam de acordo com a legislação vigente.',
    },
  ],
};

export const PRIVACY_POLICY_NL: LegalDoc = {
  kicker: 'Juridisch',
  title: 'Privacybeleid',
  updated: '15.10.2026',
  sections: [
    {
      body: 'Bij Zihnify nemen we de privacy van wie de app gebruikt serieus.',
    },
    {
      heading: 'Gegevens die we verzamelen',
      body: 'Er is geen account. We sturen geen gegevens naar een server. Voortgang, reeks, lessen, taal, weergave en de herinnering blijven alleen op deze telefoon. Optionele herinneringen vragen op het toestel om meldingen.',
    },
    {
      heading: 'Hoe we gegevens gebruiken',
      body: 'Deze gegevens laten de app verdergaan waar je was en, als je herinneringen aanzet, ’s avonds een melding sturen.',
    },
    {
      heading: 'Diensten van derden',
      body: 'We gebruiken geen advertenties en geen analyse. Download je de app via de App Store of Google Play, dan gelden hun privacyregels.',
    },
    {
      heading: 'Beveiliging en bewaartermijn',
      body: 'De gegevens blijven op dit apparaat. De app verwijderen wist ze ook.',
    },
    {
      heading: 'Jouw rechten',
      body: 'Met «Voortgang wissen» in Instellingen wis je de voortgang op deze telefoon. Verzoeken volgens wet nr. 6698: zihnify@gmail.com.',
    },
    {
      heading: 'Contact',
      body: 'Voor privacy- en gegevensverzoeken mail je ons op zihnify@gmail.com.',
    },
    {
      body: 'Dit beleid geldt volgens de functies en verwerkingen die Zihnify daadwerkelijk gebruikt.',
    },
  ],
};

export const TERMS_OF_USE_NL: LegalDoc = {
  kicker: 'Juridisch',
  title: 'Gebruiksvoorwaarden',
  updated: '15.10.2026',
  sections: [
    {
      body: 'Zihnify is een app met oefeningen en educatieve inhoud over aandacht, focus, geheugen en vergelijkbare cognitieve vaardigheden.',
    },
    {
      heading: 'Doel van gebruik',
      body: 'De app is voor persoonlijk gebruik en algemene informatie. De inhoud is geen medische diagnose, psychologische beoordeling of behandeling.',
    },
    {
      heading: 'Verantwoordelijkheid van de gebruiker',
      body: 'Door de app te gebruiken ga je akkoord om die rechtmatig te gebruiken, de beveiliging niet te verstoren en de inhoud niet zonder toestemming te kopiëren.',
    },
    {
      heading: 'Oefenresultaten',
      body: 'Scores en voortgangsgegevens zijn geen klinische beoordeling. De app garandeert geen specifieke verbetering of resultaat voor iedereen.',
    },
    {
      heading: 'Prijs',
      body: 'Deze versie is gratis. Er zijn geen advertenties en geen betaalde functies.',
    },
    {
      heading: 'Intellectueel eigendom',
      body: 'Software, ontwerp, teksten en overige inhoud behoren toe aan de betreffende rechthebbenden. Behalve waar de wet dat toestaat, mogen ze niet zonder toestemming worden gekopieerd of commercieel gebruikt.',
    },
    {
      heading: 'Wijzigingen in de dienst',
      body: 'De app kan worden bijgewerkt of tijdelijk niet beschikbaar zijn om technische redenen. Wettelijke gebruikersrechten blijven voorbehouden.',
    },
    {
      heading: 'Contact',
      body: 'Voor vragen mail je ons op zihnify@gmail.com.',
    },
    {
      body: 'Deze voorwaarden gelden in overeenstemming met het toepasselijke recht.',
    },
  ],
};

export const PRIVACY_POLICY_IT: LegalDoc = {
  kicker: 'Legale',
  title: 'Informativa sulla privacy',
  updated: '15.10.2026',
  sections: [
    {
      body: 'In Zihnify prendiamo sul serio la privacy di chi usa l’app.',
    },
    {
      heading: 'Informazioni che raccogliamo',
      body: 'Non c’è un account. Non inviamo dati a un server. Progressi, serie, lezioni, lingua, aspetto e il promemoria restano solo su questo telefono. I promemoria opzionali chiedono il permesso delle notifiche sul dispositivo.',
    },
    {
      heading: 'Come usiamo le informazioni',
      body: 'Questi registri servono a continuare da dove avevi lasciato e, se attivi i promemoria, a inviare un avviso la sera.',
    },
    {
      heading: 'Servizi di terzi',
      body: 'Non usiamo pubblicità né analisi. Se scarichi l’app da App Store o Google Play, valgono le loro regole sulla privacy.',
    },
    {
      heading: 'Sicurezza e conservazione',
      body: 'I registri restano su questo dispositivo. Disinstallare l’app li cancella anche.',
    },
    {
      heading: 'I tuoi diritti',
      body: 'Con «Cancella i progressi» in Impostazioni cancelli i progressi su questo telefono. Richieste secondo la legge n. 6698: zihnify@gmail.com.',
    },
    {
      heading: 'Contatto',
      body: 'Per richieste di privacy e dati personali, scrivici a zihnify@gmail.com.',
    },
    {
      body: 'Questa informativa vale in base alle funzioni e ai trattamenti che Zihnify usa davvero.',
    },
  ],
};

export const TERMS_OF_USE_IT: LegalDoc = {
  kicker: 'Legale',
  title: 'Termini d’uso',
  updated: '15.10.2026',
  sections: [
    {
      body: 'Zihnify è un’app con esercizi e contenuti educativi su attenzione, focus, memoria e abilità cognitive simili.',
    },
    {
      heading: 'Scopo d’uso',
      body: 'L’app è per uso personale e informazione generale. I contenuti non sono una diagnosi medica, una valutazione psicologica né un trattamento.',
    },
    {
      heading: 'Responsabilità di chi usa l’app',
      body: 'Usando l’app accetti di usarla in modo lecito, di non comprometterne la sicurezza e di non copiarne i contenuti senza permesso.',
    },
    {
      heading: 'Risultati degli esercizi',
      body: 'Punteggi e progressi non sono una valutazione clinica. L’app non garantisce un miglioramento o un risultato specifico per ogni persona.',
    },
    {
      heading: 'Prezzo',
      body: 'Questa versione è gratuita. Non ci sono pubblicità né funzioni a pagamento.',
    },
    {
      heading: 'Proprietà intellettuale',
      body: 'Software, design, testi e altri contenuti appartengono ai rispettivi titolari. Salvo dove la legge lo consenta, non possono essere copiati né usati a fini commerciali senza permesso.',
    },
    {
      heading: 'Modifiche al servizio',
      body: 'L’app può essere aggiornata o temporaneamente non disponibile per motivi tecnici. Restano riservati i diritti di legge di chi usa l’app.',
    },
    {
      heading: 'Contatto',
      body: 'Per domande, scrivici a zihnify@gmail.com.',
    },
    {
      body: 'Questi termini si applicano in conformità al diritto vigente.',
    },
  ],
};

export function getPrivacy(locale: Locale) {
  if (locale === 'en') {
    return PRIVACY_POLICY_EN;
  }
  if (locale === 'de') {
    return PRIVACY_POLICY_DE;
  }
  if (locale === 'es') {
    return PRIVACY_POLICY_ES;
  }
  if (locale === 'fr') {
    return PRIVACY_POLICY_FR;
  }
  if (locale === 'it') {
    return PRIVACY_POLICY_IT;
  }
  if (locale === 'pt') {
    return PRIVACY_POLICY_PT;
  }
  if (locale === 'nl') {
    return PRIVACY_POLICY_NL;
  }
  return PRIVACY_POLICY;
}

export function getTerms(locale: Locale) {
  if (locale === 'en') {
    return TERMS_OF_USE_EN;
  }
  if (locale === 'de') {
    return TERMS_OF_USE_DE;
  }
  if (locale === 'es') {
    return TERMS_OF_USE_ES;
  }
  if (locale === 'fr') {
    return TERMS_OF_USE_FR;
  }
  if (locale === 'it') {
    return TERMS_OF_USE_IT;
  }
  if (locale === 'pt') {
    return TERMS_OF_USE_PT;
  }
  if (locale === 'nl') {
    return TERMS_OF_USE_NL;
  }
  return TERMS_OF_USE;
}
