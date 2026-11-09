import type { Locale } from '../i18n';
import { ExerciseId } from '../exercises/types';
import { LESSONS_DE } from './lessonsDe';
import { LESSONS_EN } from './lessonsEn';
import { LESSONS_ES } from './lessonsEs';
import { LESSONS_FR } from './lessonsFr';
import { LESSONS_IT } from './lessonsIt';
import { LESSONS_NL } from './lessonsNl';
import { LESSONS_PT } from './lessonsPt';

export type LessonBullet = { label: string; text: string };

export type LessonPage = {
  title: string;
  body: string;
  listTitle?: string;
  bullets?: LessonBullet[];
  remember?: string;
  miniTitle?: string;
  miniBody?: string;
  tryExercise?: ExerciseId;
  note?: string;
  footer?: string;
};

export type Lesson = {
  id: string;
  title: string;
  subtitle: string;
  category?: string;
  readMinutes?: string;
  pages: LessonPage[];
};

export const ATTENTION_LESSON: Lesson = {
  id: 'attention',
  title: 'Dikkat nasıl çalışır?',
  subtitle: 'Zihnimiz neye odaklanır, neyi gözden kaçırır?',
  category: 'Dikkat ve odaklanma',
  readMinutes: '2–3 dk',
  pages: [
    {
      title: 'Dikkat nedir?',
      body: 'Dikkat, zihnimizin belirli bilgilere yönelmesini sağlayan bilişsel bir süreçtir. Çevremizdeki her şeyi aynı anda ayrıntılı biçimde işleyemeyiz; bu nedenle bazı uyaranlara öncelik veririz.',
      listTitle: 'Üç temel dikkat türü',
      bullets: [
        { label: 'Seçici dikkat', text: 'İlgili bilgiye odaklanmak.' },
        { label: 'Sürdürülen dikkat', text: 'Odağı belirli bir süre korumak.' },
        { label: 'Bölünmüş dikkat', text: 'Birden fazla görevle ilgilenmek.' },
      ],
    },
    {
      title: 'Dikkat neden dağılır?',
      body: 'Bildirimler, yorgunluk, uykusuzluk ve zihinsel yük dikkatimizi sürdürmeyi zorlaştırabilir. İlgi duyduğumuz görevlerde ise odağımızı korumak daha kolay olabilir.',
      listTitle: 'Dikkatini desteklemek için',
      bullets: [
        { label: 'Bildirimler', text: 'Gereksiz bildirimleri kapat.' },
        { label: 'Tek iş', text: 'Tek seferde bir göreve odaklan.' },
        { label: 'Küçük parçalar', text: 'Görevlerini küçük parçalara böl.' },
        { label: 'Mola ve uyku', text: 'Düzenli mola ver ve uykuna dikkat et.' },
      ],
    },
    {
      title: 'Dikkat geliştirilebilir mi?',
      body: 'Dikkat egzersizleri, belirli bilişsel görevlerdeki performansı çalıştırmak için kullanılabilir. Ancak oyunlarda daha yüksek puan almak, günlük hayattaki dikkatinin kesin olarak geliştiğini göstermez.\n\nZihnify’da farklı egzersizlerle hedef seçme, uyaranları takip etme ve bilgileri akılda tutma becerilerini deneyebilirsin.',
      note: 'Küçük bir başlangıç: Beş dakikanı ayır, dikkatini tek bir göreve yönelt ve dağıldığında yeniden görevine dön.',
      miniTitle: 'Mini görev',
      miniBody: 'Kısa bir turda yalnızca farklı olanı seç. Dağılınca sakince geri dön.',
      tryExercise: 'odd',
      footer: 'Egzersizler klinik değerlendirme veya tedavinin yerine geçmez.',
    },
  ],
};

export const MEMORY_LESSON: Lesson = {
  id: 'memory',
  title: 'Hafıza nasıl çalışır?',
  subtitle: 'Bilgileri nasıl öğrenir, saklar ve hatırlarız?',
  category: 'Hafıza ve öğrenme',
  readMinutes: '2–3 dk',
  pages: [
    {
      title: 'Hafıza nedir?',
      body: 'Hafıza, bilgileri kodlamamızı, saklamamızı ve gerektiğinde geri çağırmamızı sağlayan bilişsel süreçler bütünüdür.',
      listTitle: 'Üç temel süreç',
      bullets: [
        { label: 'Kodlama', text: 'Bilgiyi öğrenme.' },
        { label: 'Depolama', text: 'Bilgiyi bellekte tutma.' },
        { label: 'Geri çağırma', text: 'Öğrenilen bilgiyi hatırlama.' },
      ],
    },
    {
      title: 'Neden unuturuz?',
      body: 'Dikkatin dağılması, yetersiz tekrar, zamanın geçmesi ve benzer bilgilerin birbirine karışması hatırlamayı zorlaştırabilir.',
      listTitle: 'Hatırlamayı desteklemek için',
      bullets: [
        { label: 'Aralıklı tekrar', text: 'Bilgileri belirli aralıklarla tekrar et.' },
        { label: 'Kendine sor', text: 'Kendi kendine sorular sorarak hatırlamaya çalış.' },
        { label: 'İlişkilendir', text: 'Yeni bilgileri bildiklerinle ilişkilendir.' },
        { label: 'Uyku', text: 'Yeterli uykuya önem ver.' },
      ],
    },
    {
      title: 'Hafıza geliştirilebilir mi?',
      body: 'Hatırlama stratejileri ve düzenli pratik, belirli öğrenme görevlerindeki performansı destekleyebilir. Ancak her hafıza egzersizi günlük yaşamda tüm bilgileri daha iyi hatırlamayı garanti etmez.\n\nZihnify’daki Sırayı hatırla egzersiziyle bilgileri kısa süreliğine aklında tutmayı ve sıralamayı deneyebilirsin.',
      note: 'Küçük bir başlangıç: Bugün öğrendiğin üç bilgiyi, notlarına bakmadan hatırlamaya çalış.',
      miniTitle: 'Mini görev',
      miniBody: 'Sırayı izle, not almadan aynı sırayla tekrarla.',
      tryExercise: 'sequence',
      footer: 'Egzersizler klinik değerlendirme veya tedavinin yerine geçmez.',
    },
  ],
};

export const REACTION_LESSON: Lesson = {
  id: 'reaction',
  title: 'Tepki süresi nedir?',
  subtitle: 'Bir uyaranı fark etmekle ona yanıt vermek arasında neler olur?',
  category: 'Tepki kontrolü',
  readMinutes: '2–3 dk',
  pages: [
    {
      title: 'Tepki süresi nedir?',
      body: 'Tepki süresi, bir uyaranın ortaya çıkmasıyla kişinin bu uyarana yanıt vermesi arasında geçen süredir. Uyaranı fark etme, değerlendirme ve yanıt verme süreçlerini içerir.',
      listTitle: 'Tepki süresini etkileyenler',
      bullets: [
        { label: 'Uyaran', text: 'Uyaranın türü ve karmaşıklığı.' },
        { label: 'Dikkat', text: 'Dikkat ve uyanıklık düzeyi.' },
        { label: 'Yorgunluk', text: 'Yorgunluk ve uyku durumu.' },
      ],
    },
    {
      title: 'Hız her zaman daha iyi midir?',
      body: 'Daha hızlı yanıt vermek her zaman daha doğru yanıt vermek anlamına gelmez. Acele etmek hata sayısını artırabilir; daha dikkatli davranmak ise yanıt süresini uzatabilir.',
      listTitle: 'Daha dengeli yanıt vermek için',
      bullets: [
        { label: 'Yönerge', text: 'Yönergeleri dikkatlice oku.' },
        { label: 'Anla', text: 'Hızlanmadan önce görevi anla.' },
        { label: 'Denge', text: 'Doğruluğunu ve hızını birlikte değerlendir.' },
        { label: 'Yorgunluk', text: 'Yorgun olduğunda performansının değişebileceğini unutma.' },
      ],
    },
    {
      title: 'Tepki süresi çalışılabilir mi?',
      body: 'Tekrarlanan pratik, belirli görevlerde daha hızlı veya daha tutarlı yanıt vermene yardımcı olabilir. Ancak bir oyunda hızlanmak, her durumda daha hızlı tepki vereceğin anlamına gelmez.\n\nZihnify’daki Bekle ve bas egzersiziyle doğru anı beklemeyi ve uygun zamanda yanıt vermeyi deneyebilirsin.',
      note: 'Küçük bir başlangıç: Bir sonraki egzersizinde yalnızca hızına değil, doğru yanıt sayına da dikkat et.',
      miniTitle: 'Mini görev',
      miniBody: 'Daire dolana kadar bekle, sonra bas. Erken basmamaya bak.',
      tryExercise: 'wait',
      footer: 'Oyun sonuçları tek başına genel bilişsel kapasiteyi veya klinik durumu ölçmez.',
    },
  ],
};

export const FOCUS_LESSON: Lesson = {
  id: 'focus',
  title: 'Odaklanmayı nasıl destekleriz?',
  subtitle: 'Daha verimli çalışmak için neler yapabiliriz?',
  category: 'Dikkat ve odaklanma',
  readMinutes: '2–3 dk',
  pages: [
    {
      title: 'Odaklanmak neden zorlaşır?',
      body: 'Odaklanmak, dikkati belirli bir görev üzerinde tutabilmeyi gerektirir. Bildirimler, çevresel sesler, yorgunluk ve aynı anda birçok işle ilgilenmek bu süreci zorlaştırabilir.',
      listTitle: 'Odağı etkileyen faktörler',
      bullets: [
        { label: 'Çevre', text: 'Çevresel dikkat dağıtıcılar.' },
        { label: 'Yorgunluk', text: 'Zihinsel yorgunluk.' },
        { label: 'Zorluk', text: 'Görevin zorluk düzeyi.' },
        { label: 'İlgi', text: 'İlgi ve motivasyon.' },
      ],
    },
    {
      title: 'Daha iyi odaklanmak için',
      body: 'Dikkati desteklemek için çevreyi düzenlemek ve çalışma biçimini sadeleştirmek faydalı olabilir.',
      listTitle: 'Deneyebileceğin yöntemler',
      bullets: [
        { label: 'Bildirimler', text: 'Telefon bildirimlerini kapat.' },
        { label: 'Tek görev', text: 'Tek bir görev belirle.' },
        { label: 'Küçük parçalar', text: 'Büyük işleri küçük parçalara ayır.' },
        { label: 'Aralar', text: 'Düzenli aralar ver.' },
        { label: 'Geri dön', text: 'Dikkatin dağıldığında sakince görevine geri dön.' },
      ],
    },
    {
      title: 'Odaklanmak bir alışkanlık mı?',
      body: 'Odaklanma, yalnızca iradeye bağlı değildir. Uyku, stres, çevre ve görevin özellikleri de dikkat performansını etkiler.\n\nDüzenli çalışma rutinleri oluşturmak, hangi koşullarda daha rahat odaklandığını keşfetmene yardımcı olabilir.\n\nZihnify’daki Hedefi bul egzersiziyle belirli bir uyaranı diğerlerinden ayırt etmeyi deneyebilirsin.',
      note: 'Küçük bir başlangıç: Bugün dikkat dağıtıcıları azaltarak tek bir işe 10 dakika ayır.',
      miniTitle: 'Mini görev',
      miniBody: 'Kalabalıkta yalnızca hedef şekli seç. Diğerlerine bakma.',
      tryExercise: 'find',
      footer: 'Bu öneriler profesyonel değerlendirme veya tedavinin yerine geçmez.',
    },
  ],
};

export const PLASTICITY_LESSON: Lesson = {
  id: 'plasticity',
  title: 'Beyin kendini nasıl uyarlar?',
  subtitle: 'Öğrenme ve deneyimler beynimizi nasıl etkiler?',
  category: 'Beyin ve zihinsel performans',
  readMinutes: '2–3 dk',
  pages: [
    {
      title: 'Nöroplastisite nedir?',
      body: 'Nöroplastisite, beynin deneyimler, öğrenme ve çevresel etkenlerle bağlantılarını ve işleyişini değiştirebilme kapasitesidir.\n\nYeni bir beceri öğrenmek, tekrar yapmak ve farklı deneyimler edinmek bu süreçte rol oynayabilir.',
      listTitle: 'Nöroplastisiteyle ilişkili süreçler',
      bullets: [
        { label: 'Öğrenme', text: 'Yeni bilgiler öğrenmek.' },
        { label: 'Deneyim', text: 'Deneyimlerden yararlanmak.' },
        { label: 'Tekrar', text: 'Becerileri tekrar ederek geliştirmek.' },
        { label: 'Uyum', text: 'Değişen koşullara uyum sağlamak.' },
      ],
    },
    {
      title: 'Tekrar neden önemlidir?',
      body: 'Tekrar, öğrenilen bilgilerin pekiştirilmesine yardımcı olabilir. Ancak yalnızca aynı şeyi tekrar etmek her zaman yeterli değildir; geri bildirim almak ve bilgiyi farklı durumlarda kullanmak da öğrenmeyi destekleyebilir.',
      listTitle: 'Öğrenmeyi desteklemek için',
      bullets: [
        { label: 'Aralık', text: 'Bilgileri aralıklarla tekrar et.' },
        { label: 'Test et', text: 'Kendini küçük sorularla test et.' },
        { label: 'Geri bildirim', text: 'Hatalarından geri bildirim çıkar.' },
        { label: 'Uygula', text: 'Yeni öğrendiklerini farklı örneklerde kullan.' },
      ],
    },
    {
      title: 'Beyin egzersizleri ne sağlar?',
      body: 'Bilişsel egzersizler belirli görevlerde pratik yapma fırsatı sunar. Bu görevlerdeki gelişim, bütün bilişsel becerilerin veya günlük yaşam performansının aynı ölçüde gelişeceği anlamına gelmez.\n\nZihnify’daki farklı oyunları deneyerek hangi görevlerde daha rahat olduğunu gözlemleyebilirsin.',
      note: 'Küçük bir başlangıç: Yeni bir beceri seç, kısa bir pratik yap ve birkaç gün sonra tekrar dene.',
      miniTitle: 'Mini görev',
      miniBody: '“BU” yazan topu izle. Durunca yalnızca onu seç.',
      tryExercise: 'track',
      footer: 'Beynin uyum sağlama kapasitesi, her egzersizin genel zekâyı veya dikkati artıracağını garanti etmez.',
    },
  ],
};

export const MULTITASK_LESSON: Lesson = {
  id: 'multitask',
  title: 'Çoklu görev gerçekten mümkün mü?',
  subtitle: 'Beynimiz aynı anda kaç işi yapabilir?',
  category: 'Dikkat ve odaklanma',
  readMinutes: '2–3 dk',
  pages: [
    {
      title: 'Beynimiz aynı anda kaç işi yapabilir?',
      body: 'Müzik dinlerken mesaj yazmak, bir yandan da video izlemek… Gün içinde aynı anda birçok iş yaptığımızı düşünürüz. Peki beynimiz gerçekten hepsine aynı anda mı odaklanır?\n\nAslında dikkat gerektiren iki işi birlikte yaparken çoğu zaman görevler arasında hızla geçiş yaparız. Bu geçişler o kadar hızlı gerçekleşebilir ki aynı anda çalışıyormuşuz gibi hissederiz.\n\nAncak her görev dikkat gerektirmez. Otomatikleşmiş bir işi yapmakla yeni ve zor bir görevi yürütmek aynı şey değildir.',
      remember:
        'Aynı anda birçok işle ilgilenmek, hepsine eşit derecede odaklanabildiğimiz anlamına gelmez.',
    },
    {
      title: 'Görev değiştirmek neden yorucu olabilir?',
      body: 'Bir ödev hazırlarken telefonuna bildirim geldiğini düşün. Mesaja bakıp tekrar ödevine döndüğünde yalnızca birkaç saniye kaybetmiş olmayabilirsin. Zihninin yeniden göreve uyum sağlaması da zaman alabilir.\n\nGörev değiştirmek; önceki işi zihinde tutmayı, yeni işe yönelmeyi ve tekrar eski göreve dönmeyi gerektirebilir. Sık sık bölünmek, hata yapma olasılığını artırabilir ve işi tamamlamayı zorlaştırabilir.\n\nÖzellikle karmaşık görevlerde bu geçişlerin maliyeti daha belirgin olabilir. Bu nedenle sürekli meşgul olmak, her zaman verimli çalışmak demek değildir.',
      remember:
        'Bazen daha hızlı ilerlemek için aynı anda daha az şey yapmak gerekir.',
    },
    {
      title: 'Dikkatini nasıl daha iyi yönetebilirsin?',
      body: 'Dikkatini korumak için her şeyi aynı anda değiştirmene gerek yok. Küçük düzenlemelerle görev geçişlerini azaltabilirsin.',
      bullets: [
        { label: 'Tek hedef belirle', text: 'Çalışmaya başlamadan önce bitirmek istediğin işi netleştir.' },
        { label: 'Bildirimleri azalt', text: 'Kısa bir çalışma süresince gereksiz bildirimleri kapat.' },
        { label: 'Görevleri böl', text: 'Büyük bir işi küçük ve tamamlanabilir adımlara ayır.' },
        { label: 'Geçiş anı oluştur', text: 'Bir işi bırakmadan önce nerede kaldığını kısaca not et.' },
        { label: 'Mola ver', text: 'Uzun süre çalışmak yerine ihtiyacına uygun kısa molalar planla.' },
      ],
      note: 'Bu yöntemler herkeste aynı sonucu vermeyebilir. Önemli olan, hangi koşullarda daha rahat odaklandığını gözlemlemektir.',
      remember: 'Küçük deneme: Beş dakika boyunca yalnızca tek bir işe odaklanmayı dene.',
    },
    {
      title: 'Şimdi öğrendiğini dene',
      body: 'Çoklu görev konusunda en önemli nokta, dikkatinin sınırsız olmadığıdır. Bazı işler birlikte yürütülebilirken, yoğun dikkat isteyen görevler arasında geçiş yapmak daha fazla çaba gerektirebilir.\n\nKendine şu soruyu sor: Gün içinde en çok hangi şey dikkatimi bölüyor?\n\nBunu fark etmek, dikkatini yönetmenin ilk adımı olabilir. Amaç her zaman kusursuz odaklanmak değil; dikkatini ne zaman ve nereye yönlendirdiğini daha iyi anlamaktır.',
      miniTitle: 'Mini görev',
      miniBody:
        'Bir sonraki çalışmanda tek bir hedef seç ve beş dakika boyunca ona odaklan. Süre sonunda ne kadar bölündüğünü ve işe geri dönmenin ne kadar kolay olduğunu değerlendir.',
      tryExercise: 'find',
    },
  ],
};

export const FATIGUE_LESSON: Lesson = {
  id: 'fatigue',
  title: 'Zihinsel yorgunluk ve dikkat',
  subtitle: 'Zihnin de yorulabilir',
  category: 'Beyin ve zihinsel performans',
  readMinutes: '2–3 dk',
  pages: [
    {
      title: 'Zihnin de yorulabilir',
      body: 'Uzun bir günün sonunda aynı cümleyi birkaç kez okumak, basit bir hatayı fark edememek veya bir işe başlamakta zorlanmak tanıdık gelebilir. Bunun nedenlerinden biri zihinsel yorgunluk olabilir.\n\nZihinsel yorgunluk, uzun süre düşünme, karar verme veya dikkat gerektiren işlerle uğraştıktan sonra ortaya çıkabilen bir durumdur. Kendini odaklanmada zorlanma, yavaşlama ya da zihinsel çaba gerektiren işlerden kaçınma şeklinde gösterebilir.\n\nBu durum her zaman motivasyon eksikliği anlamına gelmez. Bazen dinlenmeye, uykuya veya çalışma düzenini değiştirmeye ihtiyaç duyuyor olabiliriz.',
      remember: 'Zorlanmak, tembel olduğun anlamına gelmez.',
    },
    {
      title: 'Dikkatini neler etkileyebilir?',
      body: 'Dikkat performansı gün boyunca sabit kalmayabilir. Uyku düzeni, stres, çevresel gürültü, açlık, susuzluk ve yaptığın işin zorluğu odaklanmanı etkileyebilir.\n\nÖrneğin iyi dinlenmişken kolayca tamamladığın bir görev, uykusuz kaldığında daha fazla çaba gerektirebilir. Kaygı veya yoğun düşünceler de zihninin bir bölümünü meşgul ederek mevcut göreve ayırabildiğin dikkati etkileyebilir.\n\nÜstelik herkes aynı koşullarda aynı şekilde etkilenmez. Kimi sessiz ortamda, kimi hafif arka plan sesiyle daha rahat çalışabilir.',
      remember:
        'Dikkat yalnızca iradeyle ilgili değildir; içinde bulunduğun koşullardan da etkilenir.',
    },
    {
      title: 'Zihinsel enerjini nasıl koruyabilirsin?',
      body: 'Zihinsel yorgunluğu tamamen ortadan kaldırmak mümkün olmayabilir. Ancak çalışma düzeninde yapacağın bazı değişiklikler yükünü yönetmene yardımcı olabilir.',
      bullets: [
        { label: 'Uykuya öncelik ver', text: 'Düzenli ve yeterli uyku, dikkat ve öğrenme açısından önemlidir.' },
        { label: 'Çalışmanı parçalara ayır', text: 'Uzun görevleri küçük adımlarla ilerlet.' },
        { label: 'Mola ihtiyacını fark et', text: 'Dikkatin belirgin biçimde dağıldığında kısa bir ara vermeyi dene.' },
        { label: 'Çevreni düzenle', text: 'Gereksiz uyaranları azalt ve ihtiyacın olan malzemeleri önceden hazırla.' },
        { label: 'Temel ihtiyaçlarını ihmal etme', text: 'Su içmek ve düzenli beslenmek günlük işlevlerini destekler.' },
      ],
      note: 'Herkes için geçerli tek bir çalışma süresi yoktur. Sana uygun düzeni bulmak için farklı yöntemleri deneyip sonuçlarını gözlemleyebilirsin.',
      remember:
        'Küçük deneme: Bugün odaklanmakta zorlandığın bir anı hatırla. Uykusuzluk, stres veya çevresel bir etkenin payı olmuş olabilir mi?',
    },
    {
      title: 'Dinlenmek de sürecin bir parçası',
      body: 'Dikkatini geliştirmeye çalışırken sürekli daha uzun süre çalışmayı hedeflemek zorunda değilsin. Verimli çalışma, yalnızca harcanan zamanla değil, görevin gereklilikleri ve kendini nasıl hissettiğinle de ilişkilidir.\n\nZihinsel yorgunluk sık sık yaşanıyorsa yalnızca dikkatini zorlamaya çalışmak yerine uyku düzenini, günlük yükünü ve stres kaynaklarını değerlendirmek yararlı olabilir. Sürekli devam eden veya günlük yaşamını belirgin biçimde etkileyen yorgunlukta bir sağlık uzmanından destek almak uygun olabilir.\n\nKendini gözlemlemek, ne zaman çalışmaya devam edeceğini ve ne zaman ara vereceğini anlamana yardımcı olabilir.',
      miniTitle: 'Mini görev',
      miniBody:
        'Bir sonraki egzersizden önce kendine 1–5 arasında bir enerji puanı ver. Egzersizden sonra tekrar puanla. Bu küçük gözlem, kendi deneyimini tanımana yardımcı olabilir; tek başına bilimsel bir ölçüm değildir.',
      tryExercise: 'sequence',
    },
  ],
};

export const LESSONS: Lesson[] = [
  ATTENTION_LESSON,
  MEMORY_LESSON,
  REACTION_LESSON,
  FOCUS_LESSON,
  PLASTICITY_LESSON,
  MULTITASK_LESSON,
  FATIGUE_LESSON,
];

export function getLessons(locale: Locale) {
  if (locale === 'en') {
    return LESSONS_EN;
  }
  if (locale === 'de') {
    return LESSONS_DE;
  }
  if (locale === 'es') {
    return LESSONS_ES;
  }
  if (locale === 'fr') {
    return LESSONS_FR;
  }
  if (locale === 'pt') {
    return LESSONS_PT;
  }
  if (locale === 'nl') {
    return LESSONS_NL;
  }
  if (locale === 'it') {
    return LESSONS_IT;
  }
  return LESSONS;
}


