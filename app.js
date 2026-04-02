/* الإسلام والاستبداد السياسي — ISLAM AND POLITICAL TYRANNY — app.js v1.0 */
/* Based on "Al-Islam wal-Istibdad al-Siyasi" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'الإسلام والاستبداد السياسي',
    splashSub: 'العدل أساس الحكم في الإسلام',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة النساء ٤: ٥٨',
    tabHome: 'الرئيسية', tabCards: 'البطاقات', tabPillars: 'الأركان',
    tabHabits: 'العادات', tabQuiz: 'اختبار', tabAbout: 'الكتاب',
    cardsTitle: 'بطاقات الحكم الرشيد',
    cardsDesc: '٢٠ بطاقة من كتاب الإسلام والاستبداد السياسي — كل بطاقة تكشف حقيقة عن العدل والشورى',
    pillarsTitle: 'أركان الحكم العادل',
    pillarsDesc: 'مبادئ أساسية للحكم الراشد كما بيّنها الشيخ الغزالي',
    habitsTitle: 'عاداتي اليومية',
    habitsDesc: 'عادات مستوحاة من مبادئ العدل والحرية — تتبّع تقدمك يومياً',
    quizTitle: 'اختبر معرفتك',
    quizDesc: 'هل تعرف حقوقك وواجباتك كما بيّنها الإسلام؟',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية',
    resetBtn: 'إعادة تعيين اليوم',
    submitQuiz: 'اعرف النتيجة',
    dailyLabel: '✨ فكرة اليوم',
    quizAgain: 'أعد الاختبار',
    yes: 'نعم', no: 'لا', sometimes: 'أحياناً',
    share: 'مشاركة',
    searchPlaceholder: 'ابحث في البطاقات...',
    streakMsg: 'يوم متتالي!',
    allDone: 'أحسنت! أكملت جميع العادات!',
    verse: 'الآية',
    principle: 'المبدأ',
    example: 'المثال',
    lesson: 'الدرس',
    splashFeatures: [
      '٢٠ بطاقة عن العدل والشورى',
      'أركان الحكم الراشد في الإسلام',
      'عادات يومية مع تتبع مستمر',
      'اختبار + أدعية'
    ],
  },
  en: {
    appTitle: 'Islam & Political Tyranny',
    splashSub: 'Justice is the foundation of governance in Islam',
    splashHint: 'tap to skip',
    sacredRef: 'Surah An-Nisa 4:58',
    tabHome: 'Home', tabCards: 'Cards', tabPillars: 'Pillars',
    tabHabits: 'Habits', tabQuiz: 'Quiz', tabAbout: 'Book',
    cardsTitle: 'Good Governance Cards',
    cardsDesc: '20 cards from Islam and Political Tyranny — each reveals a truth about justice and consultation',
    pillarsTitle: 'Pillars of Just Governance',
    pillarsDesc: 'Fundamental principles of righteous governance as explained by Sheikh al-Ghazali',
    habitsTitle: 'My Daily Habits',
    habitsDesc: 'Habits inspired by principles of justice and freedom — track your daily progress',
    quizTitle: 'Test Your Knowledge',
    quizDesc: 'Do you know your rights and duties as Islam describes them?',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas',
    resetBtn: 'Reset Today',
    submitQuiz: 'See Results',
    dailyLabel: '✨ Today\'s Insight',
    quizAgain: 'Retake Quiz',
    yes: 'Yes', no: 'No', sometimes: 'Sometimes',
    share: 'Share',
    searchPlaceholder: 'Search cards...',
    streakMsg: 'day streak!',
    allDone: 'Well done! All habits completed!',
    verse: 'Verse',
    principle: 'Principle',
    example: 'Example',
    lesson: 'Lesson',
    splashFeatures: [
      '20 cards on justice and consultation',
      'Pillars of righteous governance in Islam',
      'Daily habits with streak tracking',
      'Quiz + duas'
    ],
  },
  fr: {
    appTitle: 'Islam et Tyrannie Politique',
    splashSub: 'La justice est le fondement du gouvernement en Islam',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate An-Nisa 4:58',
    tabHome: 'Accueil', tabCards: 'Cartes', tabPillars: 'Piliers',
    tabHabits: 'Habitudes', tabQuiz: 'Quiz', tabAbout: 'Livre',
    cardsTitle: 'Cartes de Bonne Gouvernance',
    cardsDesc: '20 cartes du livre Islam et Tyrannie Politique — chacune revele une verite sur la justice et la consultation',
    pillarsTitle: 'Piliers de la Gouvernance Juste',
    pillarsDesc: 'Principes fondamentaux de la gouvernance vertueuse selon Sheikh al-Ghazali',
    habitsTitle: 'Mes Habitudes Quotidiennes',
    habitsDesc: 'Habitudes inspirees des principes de justice et de liberte — suivez vos progres',
    quizTitle: 'Testez Vos Connaissances',
    quizDesc: 'Connaissez-vous vos droits et devoirs tels que l\'Islam les decrit ?',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas',
    resetBtn: 'Reinitialiser',
    submitQuiz: 'Voir les Resultats',
    dailyLabel: '✨ Pensee du Jour',
    quizAgain: 'Refaire le Quiz',
    yes: 'Oui', no: 'Non', sometimes: 'Parfois',
    share: 'Partager',
    searchPlaceholder: 'Rechercher les cartes...',
    streakMsg: 'jours consecutifs !',
    allDone: 'Bravo ! Toutes les habitudes accomplies !',
    verse: 'Verset',
    principle: 'Principe',
    example: 'Exemple',
    lesson: 'Lecon',
    splashFeatures: [
      '20 cartes sur la justice et la consultation',
      'Piliers de la gouvernance vertueuse en Islam',
      'Habitudes quotidiennes avec suivi',
      'Quiz + duas'
    ],
  }
};

// ═══════════════ CARDS DATA (20 cards) ═══════════════
const CARDS = [
  {
    id:1, emoji:'⚖️',
    ar:{title:'العدل فريضة إلهية',desc:'العدل ليس منّة من الحاكم بل فريضة من الله. الحاكم الظالم خائن لأمانة الله مهما ادّعى التدين.',verse:'إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا',verseRef:'النساء: ٥٨',lesson:'العدل واجب ديني قبل أن يكون مطلباً سياسياً'},
    en:{title:'Justice Is a Divine Obligation',desc:'Justice is not a favor from rulers but an obligation from God. An unjust ruler betrays God\'s trust no matter how religious they claim to be.',verse:'Indeed, God commands you to render trusts to whom they are due',verseRef:'An-Nisa: 58',lesson:'Justice is a religious duty before being a political demand'},
    fr:{title:'La Justice Est une Obligation Divine',desc:'La justice n\'est pas une faveur des dirigeants mais une obligation de Dieu. Un dirigeant injuste trahit la confiance de Dieu.',verse:'Dieu vous commande de rendre les depots a leurs proprietaires',verseRef:'An-Nisa: 58',lesson:'La justice est un devoir religieux avant d\'etre une exigence politique'}
  },
  {
    id:2, emoji:'🗣️',
    ar:{title:'الشورى ليست اختيارية',desc:'الشورى في الإسلام ليست نصيحة يأخذها الحاكم أو يتركها. هي نظام ملزم يمنع تفرّد شخص بالقرار ويحمي الأمة من الاستبداد.',verse:'وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ',verseRef:'الشورى: ٣٨',lesson:'الشورى حق للأمة وليست منحة من الحاكم'},
    en:{title:'Consultation Is Not Optional',desc:'Shura in Islam is not advice a ruler may take or leave. It is a binding system that prevents one-person rule and protects the nation from tyranny.',verse:'And their affair is consultation among themselves',verseRef:'Ash-Shura: 38',lesson:'Consultation is the nation\'s right, not a ruler\'s gift'},
    fr:{title:'La Consultation N\'est Pas Facultative',desc:'La Choura en Islam n\'est pas un conseil que le dirigeant peut prendre ou laisser. C\'est un systeme obligatoire qui empeche le pouvoir absolu.',verse:'Et leur affaire est consultation entre eux',verseRef:'Ash-Shura: 38',lesson:'La consultation est un droit du peuple, pas un cadeau du dirigeant'}
  },
  {
    id:3, emoji:'🔗',
    ar:{title:'محاسبة الحاكم',desc:'لا أحد فوق المحاسبة في الإسلام. الخليفة عمر قال: "إذا رأيتم فيّ اعوجاجاً فقوّموني." هذا هو النموذج الإسلامي الحقيقي.',verse:'وَلْتَكُن مِّنكُمْ أُمَّةٌ يَدْعُونَ إِلَى الْخَيْرِ وَيَأْمُرُونَ بِالْمَعْرُوفِ',verseRef:'آل عمران: ١٠٤',lesson:'محاسبة الحاكم واجب ديني لا جريمة سياسية'},
    en:{title:'Holding Rulers Accountable',desc:'No one is above accountability in Islam. Caliph Umar said: "If you see crookedness in me, straighten me." This is the true Islamic model.',verse:'And let there arise from you a nation inviting to good and forbidding evil',verseRef:'Aal-Imran: 104',lesson:'Holding rulers accountable is a religious duty, not a political crime'},
    fr:{title:'Responsabilite des Dirigeants',desc:'Personne n\'est au-dessus de la responsabilite en Islam. Le Calife Omar a dit : "Si vous voyez en moi une deviation, redressez-moi."',verse:'Que soit issue de vous une communaute qui invite au bien et ordonne le convenable',verseRef:'Aal-Imran: 104',lesson:'La responsabilite des dirigeants est un devoir religieux, pas un crime politique'}
  },
  {
    id:4, emoji:'🏛️',
    ar:{title:'الإسلام ضد الحكم المطلق',desc:'الإسلام لا يعرف الحكم المطلق ولا الملك المقدس. كل حاكم وكيل عن الأمة يُعزل إذا خان الأمانة.',verse:'وَلَا تَرْكَنُوا إِلَى الَّذِينَ ظَلَمُوا فَتَمَسَّكُمُ النَّارُ',verseRef:'هود: ١١٣',lesson:'السكوت على الظلم مشاركة فيه'},
    en:{title:'Islam Opposes Absolute Rule',desc:'Islam does not recognize absolute rule or sacred kingship. Every ruler is a representative of the people who is removed if they betray the trust.',verse:'And do not incline toward those who do wrong, lest the Fire touch you',verseRef:'Hud: 113',lesson:'Silence before injustice is complicity'},
    fr:{title:'L\'Islam S\'oppose au Pouvoir Absolu',desc:'L\'Islam ne reconnait ni le pouvoir absolu ni la royaute sacree. Chaque dirigeant est un representant du peuple, revocable s\'il trahit.',verse:'Ne penchez pas vers les injustes, sinon le Feu vous toucherait',verseRef:'Hud: 113',lesson:'Le silence face a l\'injustice est une complicite'}
  },
  {
    id:5, emoji:'📜',
    ar:{title:'حقوق المواطن في الإسلام',desc:'للمسلم حقوق لا يجوز لأحد انتهاكها: حرية العقيدة، حرية التعبير، حق العيش الكريم، وحق الأمان من الظلم.',verse:'وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ',verseRef:'الإسراء: ٧٠',lesson:'كرامة الإنسان أصل ثابت لا يُنتقص'},
    en:{title:'Citizens\' Rights in Islam',desc:'A Muslim has inviolable rights: freedom of belief, freedom of expression, the right to a dignified life, and protection from oppression.',verse:'And We have certainly honored the children of Adam',verseRef:'Al-Isra: 70',lesson:'Human dignity is a fixed principle that cannot be diminished'},
    fr:{title:'Droits du Citoyen en Islam',desc:'Un musulman a des droits inviolables : liberte de croyance, liberte d\'expression, droit a une vie digne, et protection contre l\'oppression.',verse:'Nous avons certes honore les fils d\'Adam',verseRef:'Al-Isra: 70',lesson:'La dignite humaine est un principe fixe qui ne peut etre diminue'}
  },
  {
    id:6, emoji:'👑',
    ar:{title:'الخلافة الراشدة نموذج',desc:'أبو بكر الصديق في أول خطبة: "وُلّيت عليكم ولست بخيركم. إن أحسنت فأعينوني، وإن أسأت فقوّموني." هذا هو الحكم الإسلامي.',verse:'إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ',verseRef:'الحجرات: ١٣',lesson:'التواضع صفة الحاكم الحقيقي في الإسلام'},
    en:{title:'The Rightly Guided Caliphate as Model',desc:'Abu Bakr in his first speech: "I have been placed in authority over you, but I am not the best of you. If I do well, help me; if I err, correct me." This is Islamic governance.',verse:'Indeed, the most noble of you in the sight of God is the most righteous',verseRef:'Al-Hujurat: 13',lesson:'Humility is the quality of a true Islamic ruler'},
    fr:{title:'Le Califat Bien Guide comme Modele',desc:'Abu Bakr dans son premier discours : "J\'ai ete place a votre tete mais je ne suis pas le meilleur d\'entre vous. Si je fais bien, aidez-moi ; si je me trompe, corrigez-moi."',verse:'Le plus noble d\'entre vous aupres de Dieu est le plus pieux',verseRef:'Al-Hujurat: 13',lesson:'L\'humilite est la qualite d\'un vrai dirigeant islamique'}
  },
  {
    id:7, emoji:'⚔️',
    ar:{title:'الاستبداد يدمّر الأمم',desc:'التاريخ يشهد: كل أمة سقطت بدأ سقوطها بالاستبداد. الطاغية يحطم المؤسسات ويقتل الكفاءات حتى تنهار الدولة.',verse:'فَتِلْكَ بُيُوتُهُمْ خَاوِيَةً بِمَا ظَلَمُوا',verseRef:'النمل: ٥٢',lesson:'الاستبداد طريق الانهيار لا الاستقرار'},
    en:{title:'Tyranny Destroys Nations',desc:'History testifies: every fallen nation began its fall with tyranny. A tyrant destroys institutions and eliminates talent until the state collapses.',verse:'So those are their houses, desolate because of the wrong they had done',verseRef:'An-Naml: 52',lesson:'Tyranny is the path to collapse, not stability'},
    fr:{title:'La Tyrannie Detruit les Nations',desc:'L\'histoire temoigne : chaque nation tombee a commence sa chute par la tyrannie. Un tyran detruit les institutions et elimine les talents.',verse:'Voila leurs maisons, desertes, a cause de leurs injustices',verseRef:'An-Naml: 52',lesson:'La tyrannie est le chemin de l\'effondrement, pas de la stabilite'}
  },
  {
    id:8, emoji:'🤝',
    ar:{title:'البيعة عقد اجتماعي',desc:'البيعة في الإسلام عقد بين الحاكم والمحكوم. إذا أخلّ الحاكم بشروط العقد سقطت طاعته. ليست ولاء أعمى.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا أَوْفُوا بِالْعُقُودِ',verseRef:'المائدة: ١',lesson:'الطاعة مشروطة بالعدل لا مطلقة'},
    en:{title:'The Pledge Is a Social Contract',desc:'The pledge of allegiance in Islam is a contract between ruler and people. If the ruler breaks the contract\'s conditions, obedience is no longer due. It is not blind loyalty.',verse:'O you who believe, fulfill your contracts',verseRef:'Al-Ma\'idah: 1',lesson:'Obedience is conditional on justice, not absolute'},
    fr:{title:'L\'Allegeance Est un Contrat Social',desc:'L\'allegeance en Islam est un contrat entre le dirigeant et le peuple. Si le dirigeant rompt les conditions, l\'obeissance n\'est plus due.',verse:'O vous qui croyez, remplissez vos engagements',verseRef:'Al-Ma\'idah: 1',lesson:'L\'obeissance est conditionnelle a la justice, pas absolue'}
  },
  {
    id:9, emoji:'🗽',
    ar:{title:'الحرية أصل لا استثناء',desc:'الحرية في الإسلام أصل وليست استثناء. عمر بن الخطاب قال: "متى استعبدتم الناس وقد ولدتهم أمهاتهم أحراراً؟"',verse:'لَا إِكْرَاهَ فِي الدِّينِ',verseRef:'البقرة: ٢٥٦',lesson:'الحرية حق إلهي لكل إنسان'},
    en:{title:'Freedom Is the Rule, Not the Exception',desc:'Freedom in Islam is the rule, not the exception. Umar ibn al-Khattab said: "Since when have you enslaved people when their mothers bore them free?"',verse:'There shall be no compulsion in religion',verseRef:'Al-Baqarah: 256',lesson:'Freedom is a divine right for every human being'},
    fr:{title:'La Liberte Est la Regle',desc:'La liberte en Islam est la regle, pas l\'exception. Omar ibn al-Khattab a dit : "Depuis quand avez-vous asservi les gens alors que leurs meres les ont enfantes libres ?"',verse:'Nulle contrainte en religion',verseRef:'Al-Baqarah: 256',lesson:'La liberte est un droit divin pour chaque etre humain'}
  },
  {
    id:10, emoji:'📖',
    ar:{title:'العلماء حُرّاس العدل',desc:'دور العلماء ليس تبرير ظلم السلطان بل محاسبته. العالم الحقيقي يقول الحق ولو على حساب منصبه.',verse:'وَلَا تَلْبِسُوا الْحَقَّ بِالْبَاطِلِ وَتَكْتُمُوا الْحَقَّ وَأَنتُمْ تَعْلَمُونَ',verseRef:'البقرة: ٤٢',lesson:'علماء السلطان خونة للعلم والأمة'},
    en:{title:'Scholars Are Guardians of Justice',desc:'The role of scholars is not to justify a ruler\'s oppression but to hold them accountable. A true scholar speaks the truth even at the cost of their position.',verse:'And do not mix the truth with falsehood or conceal the truth while you know it',verseRef:'Al-Baqarah: 42',lesson:'Court scholars betray both knowledge and the nation'},
    fr:{title:'Les Savants Sont les Gardiens de la Justice',desc:'Le role des savants n\'est pas de justifier l\'oppression mais de demander des comptes. Un vrai savant dit la verite meme au prix de sa position.',verse:'Ne melez pas le vrai au faux et ne cachez pas la verite alors que vous savez',verseRef:'Al-Baqarah: 42',lesson:'Les savants de cour trahissent le savoir et la nation'}
  },
  {
    id:11, emoji:'🌍',
    ar:{title:'المساواة بين الناس',desc:'لا فرق في الإسلام بين حاكم ومحكوم أمام القانون. الناس سواسية كأسنان المشط، لا فضل لأحد إلا بالتقوى.',verse:'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ',verseRef:'الحجرات: ١٣',lesson:'المساواة أمام القانون حق إسلامي أصيل'},
    en:{title:'Equality Among People',desc:'In Islam, there is no difference between ruler and ruled before the law. People are equal like the teeth of a comb; none is superior except in righteousness.',verse:'O mankind, indeed We have created you from male and female',verseRef:'Al-Hujurat: 13',lesson:'Equality before the law is an authentic Islamic right'},
    fr:{title:'L\'Egalite entre les Gens',desc:'En Islam, il n\'y a pas de difference entre dirigeant et gouverne devant la loi. Les gens sont egaux comme les dents d\'un peigne.',verse:'O hommes, Nous vous avons crees d\'un male et d\'une femelle',verseRef:'Al-Hujurat: 13',lesson:'L\'egalite devant la loi est un droit islamique authentique'}
  },
  {
    id:12, emoji:'🏗️',
    ar:{title:'المؤسسات لا الأشخاص',desc:'الحكم الرشيد يقوم على مؤسسات قوية لا على أشخاص. عندما يرحل القائد تبقى المؤسسات. الاستبداد يبني على شخص فإذا رحل انهار كل شيء.',verse:'وَتِلْكَ الْأَيَّامُ نُدَاوِلُهَا بَيْنَ النَّاسِ',verseRef:'آل عمران: ١٤٠',lesson:'المؤسسات تدوم والأشخاص يرحلون'},
    en:{title:'Institutions, Not Individuals',desc:'Good governance is built on strong institutions, not individuals. When a leader departs, institutions remain. Tyranny builds on a person — when they leave, everything collapses.',verse:'And those days We alternate among the people',verseRef:'Aal-Imran: 140',lesson:'Institutions last while individuals depart'},
    fr:{title:'Des Institutions, Pas des Individus',desc:'La bonne gouvernance repose sur des institutions solides, pas sur des individus. Quand un leader part, les institutions restent.',verse:'Ces jours, Nous les alternons parmi les gens',verseRef:'Aal-Imran: 140',lesson:'Les institutions durent tandis que les individus partent'}
  },
  {
    id:13, emoji:'💰',
    ar:{title:'المال العام أمانة',desc:'المال العام في الإسلام أمانة لا غنيمة. أبو بكر رفض أن يأخذ أكثر من كفايته. عمر كان يحاسب ولاته على كل درهم.',verse:'وَلَا تَأْكُلُوا أَمْوَالَكُم بَيْنَكُم بِالْبَاطِلِ',verseRef:'البقرة: ١٨٨',lesson:'الفساد المالي خيانة للأمة بأكملها'},
    en:{title:'Public Wealth Is a Trust',desc:'Public wealth in Islam is a trust, not a spoil. Abu Bakr refused to take more than his basic needs. Umar held his governors accountable for every coin.',verse:'And do not consume one another\'s wealth unjustly',verseRef:'Al-Baqarah: 188',lesson:'Financial corruption is a betrayal of the entire nation'},
    fr:{title:'Les Richesses Publiques Sont un Depot',desc:'Les richesses publiques en Islam sont un depot, pas un butin. Abu Bakr refusait de prendre plus que ses besoins de base.',verse:'Ne mangez pas vos biens entre vous injustement',verseRef:'Al-Baqarah: 188',lesson:'La corruption financiere est une trahison de toute la nation'}
  },
  {
    id:14, emoji:'🧑‍⚖️',
    ar:{title:'القضاء المستقل',desc:'القضاء في الإسلام مستقل عن الحاكم. القاضي شريح حكم ضد علي بن أبي طالب وهو الخليفة. هذا هو القضاء الحقيقي.',verse:'وَإِذَا حَكَمْتُم بَيْنَ النَّاسِ أَن تَحْكُمُوا بِالْعَدْلِ',verseRef:'النساء: ٥٨',lesson:'القضاء المستقل ضمانة العدل'},
    en:{title:'Independent Judiciary',desc:'The judiciary in Islam is independent of the ruler. Judge Shuraih ruled against Ali ibn Abi Talib while Ali was the Caliph. This is true justice.',verse:'And when you judge between people, judge with justice',verseRef:'An-Nisa: 58',lesson:'An independent judiciary is the guarantee of justice'},
    fr:{title:'Un Pouvoir Judiciaire Independant',desc:'Le pouvoir judiciaire en Islam est independant du dirigeant. Le juge Chouraih a statue contre Ali alors qu\'il etait Calife. C\'est la vraie justice.',verse:'Quand vous jugez entre les gens, jugez avec equite',verseRef:'An-Nisa: 58',lesson:'Un pouvoir judiciaire independant est la garantie de la justice'}
  },
  {
    id:15, emoji:'🕊️',
    ar:{title:'حرية الرأي مصانة',desc:'الإسلام صان حرية الرأي حتى مع المخالف. امرأة اعترضت على عمر في المسجد فقال: "أصابت امرأة وأخطأ عمر." قَبِل النقد العلني بتواضع.',verse:'وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ',verseRef:'العصر: ٣',lesson:'قبول النقد علامة القوة لا الضعف'},
    en:{title:'Freedom of Opinion Is Protected',desc:'Islam protected freedom of opinion even with opponents. A woman corrected Umar in the mosque and he said: "The woman is right and Umar is wrong." He accepted public criticism with humility.',verse:'And advised each other to truth and advised each other to patience',verseRef:'Al-Asr: 3',lesson:'Accepting criticism is a sign of strength, not weakness'},
    fr:{title:'La Liberte d\'Opinion Est Protegee',desc:'L\'Islam a protege la liberte d\'opinion meme face aux opposants. Une femme a corrige Omar a la mosquee et il a dit : "La femme a raison et Omar a tort."',verse:'Se sont recommande la verite et la patience',verseRef:'Al-Asr: 3',lesson:'Accepter la critique est un signe de force, pas de faiblesse'}
  },
  {
    id:16, emoji:'📊',
    ar:{title:'العدالة الاجتماعية',desc:'الإسلام يرفض تركّز الثروة في أيدي قلة. الزكاة والصدقات نظام إلزامي لتوزيع الثروة ومحاربة الفقر.',verse:'كَيْ لَا يَكُونَ دُولَةً بَيْنَ الْأَغْنِيَاءِ مِنكُمْ',verseRef:'الحشر: ٧',lesson:'العدالة الاجتماعية ركن من أركان الحكم الراشد'},
    en:{title:'Social Justice',desc:'Islam rejects the concentration of wealth in the hands of a few. Zakat and charity are a mandatory system for distributing wealth and fighting poverty.',verse:'So that it will not be a perpetual distribution among the rich from among you',verseRef:'Al-Hashr: 7',lesson:'Social justice is a pillar of righteous governance'},
    fr:{title:'La Justice Sociale',desc:'L\'Islam rejette la concentration des richesses entre les mains d\'une minorite. La Zakat et les aumones sont un systeme obligatoire pour distribuer la richesse.',verse:'Afin que cela ne circule pas seulement entre les riches parmi vous',verseRef:'Al-Hashr: 7',lesson:'La justice sociale est un pilier de la bonne gouvernance'}
  },
  {
    id:17, emoji:'🛡️',
    ar:{title:'حماية الأقليات',desc:'الإسلام يحمي حقوق غير المسلمين في الدولة الإسلامية. الرسول قال: "من آذى ذمياً فأنا خصمه." العدل شامل للجميع.',verse:'لَا يَنْهَاكُمُ اللَّهُ عَنِ الَّذِينَ لَمْ يُقَاتِلُوكُمْ فِي الدِّينِ أَن تَبَرُّوهُمْ',verseRef:'الممتحنة: ٨',lesson:'العدل في الإسلام لا يعرف تمييزاً'},
    en:{title:'Protection of Minorities',desc:'Islam protects the rights of non-Muslims in the Islamic state. The Prophet said: "Whoever harms a non-Muslim citizen, I am his opponent." Justice is universal.',verse:'God does not forbid you from being kind to those who do not fight you because of religion',verseRef:'Al-Mumtahanah: 8',lesson:'Justice in Islam knows no discrimination'},
    fr:{title:'Protection des Minorites',desc:'L\'Islam protege les droits des non-musulmans dans l\'Etat islamique. Le Prophete a dit : "Quiconque nuit a un citoyen non-musulman, je suis son adversaire."',verse:'Dieu ne vous interdit pas d\'etre bienfaisants envers ceux qui ne vous combattent pas pour la religion',verseRef:'Al-Mumtahanah: 8',lesson:'La justice en Islam ne connait pas de discrimination'}
  },
  {
    id:18, emoji:'🔔',
    ar:{title:'النصيحة واجب',desc:'النصيحة للحاكم واجب شرعي. الرسول قال: "الدين النصيحة." العالم الذي يسكت عن الحق شريك في الظلم.',verse:'وَلَا تَكْتُمُوا الشَّهَادَةَ وَمَن يَكْتُمْهَا فَإِنَّهُ آثِمٌ قَلْبُهُ',verseRef:'البقرة: ٢٨٣',lesson:'كتمان الحق إثم عظيم'},
    en:{title:'Sincere Advice Is a Duty',desc:'Advising the ruler is a religious duty. The Prophet said: "Religion is sincerity." A scholar who stays silent about injustice is a partner in oppression.',verse:'And do not conceal testimony, for whoever conceals it — his heart is sinful',verseRef:'Al-Baqarah: 283',lesson:'Concealing the truth is a great sin'},
    fr:{title:'Le Conseil Sincere Est un Devoir',desc:'Conseiller le dirigeant est un devoir religieux. Le Prophete a dit : "La religion, c\'est le conseil sincere." Un savant qui se tait devant l\'injustice est complice.',verse:'Ne cachez pas le temoignage, car celui qui le cache a un coeur pecheur',verseRef:'Al-Baqarah: 283',lesson:'Cacher la verite est un grand peche'}
  },
  {
    id:19, emoji:'🌱',
    ar:{title:'الاستبداد يقتل الإبداع',desc:'لا إبداع تحت الخوف. المجتمعات المستبدة تفقد عقولها لأن المبدعين يهربون أو يُسكتون. الحرية بيئة الإبداع الوحيدة.',verse:'قُلْ سِيرُوا فِي الْأَرْضِ فَانظُرُوا كَيْفَ بَدَأَ الْخَلْقَ',verseRef:'العنكبوت: ٢٠',lesson:'الحرية شرط الإبداع والتقدم'},
    en:{title:'Tyranny Kills Creativity',desc:'There is no creativity under fear. Tyrannical societies lose their minds because innovators flee or are silenced. Freedom is the only environment for creativity.',verse:'Say: Travel through the land and observe how He began creation',verseRef:'Al-Ankabut: 20',lesson:'Freedom is the condition for creativity and progress'},
    fr:{title:'La Tyrannie Tue la Creativite',desc:'Il n\'y a pas de creativite sous la peur. Les societes tyranniques perdent leurs cerveaux car les innovateurs fuient ou sont reduits au silence.',verse:'Dis : Parcourez la terre et observez comment Il a commence la creation',verseRef:'Al-Ankabut: 20',lesson:'La liberte est la condition de la creativite et du progres'}
  },
  {
    id:20, emoji:'🕌',
    ar:{title:'الإسلام دين ودولة',desc:'الإسلام ليس مجرد عبادات. هو نظام شامل فيه حكم وعدل واقتصاد واجتماع. من يقصره على المسجد يخون رسالته الكاملة.',verse:'وَنَزَّلْنَا عَلَيْكَ الْكِتَابَ تِبْيَانًا لِّكُلِّ شَيْءٍ',verseRef:'النحل: ٨٩',lesson:'الإسلام منهج حياة شامل لا مجرد طقوس'},
    en:{title:'Islam: Religion and State',desc:'Islam is not just rituals. It is a comprehensive system encompassing governance, justice, economics, and society. Confining it to the mosque betrays its complete message.',verse:'And We have sent down to you the Book as clarification for all things',verseRef:'An-Nahl: 89',lesson:'Islam is a comprehensive way of life, not just rituals'},
    fr:{title:'L\'Islam : Religion et Etat',desc:'L\'Islam n\'est pas que des rituels. C\'est un systeme complet englobant gouvernance, justice, economie et societe. Le confiner a la mosquee trahit son message complet.',verse:'Et Nous avons fait descendre sur toi le Livre comme clarification de toute chose',verseRef:'An-Nahl: 89',lesson:'L\'Islam est un mode de vie complet, pas de simples rituels'}
  }
];

// ═══════════════ PILLARS DATA (6 pillars) ═══════════════
const PILLARS = [
  {emoji:'⚖️',ar:{title:'العدل',desc:'أساس الحكم كله. بدونه لا شرعية لأي سلطة. العدل يشمل المسلم وغيره، الغني والفقير.'},en:{title:'Justice',desc:'The foundation of all governance. Without it, no authority is legitimate. Justice encompasses Muslim and non-Muslim, rich and poor.'},fr:{title:'La Justice',desc:'Le fondement de toute gouvernance. Sans elle, aucune autorite n\'est legitime.'}},
  {emoji:'🗣️',ar:{title:'الشورى',desc:'لا يجوز للحاكم أن يستبد بالرأي. القرارات الكبرى تُتخذ بالشورى مع أهل الخبرة والحكمة.'},en:{title:'Consultation (Shura)',desc:'A ruler may not monopolize opinion. Major decisions are made through consultation with people of expertise and wisdom.'},fr:{title:'La Consultation (Choura)',desc:'Un dirigeant ne peut monopoliser l\'opinion. Les grandes decisions se prennent par consultation.'}},
  {emoji:'🔗',ar:{title:'المحاسبة',desc:'كل مسؤول محاسب أمام الله والناس. لا حصانة مطلقة ولا قداسة لأي منصب بشري.'},en:{title:'Accountability',desc:'Every official is accountable before God and the people. No absolute immunity and no sacredness for any human position.'},fr:{title:'La Responsabilite',desc:'Chaque responsable est redevable devant Dieu et le peuple. Aucune immunite absolue.'}},
  {emoji:'🕊️',ar:{title:'الحرية',desc:'الحرية حق إلهي. حرية الرأي والعقيدة والتعبير مكفولة ما لم تُستخدم للإفساد.'},en:{title:'Freedom',desc:'Freedom is a divine right. Freedom of opinion, belief, and expression are guaranteed unless used for corruption.'},fr:{title:'La Liberte',desc:'La liberte est un droit divin. Liberte d\'opinion, de croyance et d\'expression sont garanties.'}},
  {emoji:'🤝',ar:{title:'المساواة',desc:'لا فرق بين حاكم ومحكوم أمام القانون. الناس سواسية كأسنان المشط.'},en:{title:'Equality',desc:'No difference between ruler and ruled before the law. People are equal like the teeth of a comb.'},fr:{title:'L\'Egalite',desc:'Aucune difference entre dirigeant et gouverne devant la loi. Les gens sont egaux.'}},
  {emoji:'📜',ar:{title:'سيادة القانون',desc:'القانون فوق الجميع. لا أحد فوق الشريعة، لا الحاكم ولا عائلته ولا حاشيته.'},en:{title:'Rule of Law',desc:'The law is above everyone. No one is above the law — not the ruler, their family, or their inner circle.'},fr:{title:'L\'Etat de Droit',desc:'La loi est au-dessus de tous. Personne n\'est au-dessus de la loi.'}}
];

// ═══════════════ HABITS DATA ═══════════════
const HABITS = [
  {emoji:'📖',ar:{label:'قراءة آية عن العدل والتأمل فيها',source:'العدل فريضة'},en:{label:'Read a verse about justice and reflect on it',source:'Justice is an obligation'},fr:{label:'Lire un verset sur la justice et y reflechir',source:'La justice est une obligation'}},
  {emoji:'🗣️',ar:{label:'قول الحق ولو على النفس',source:'الشورى والنصيحة'},en:{label:'Speak the truth even against yourself',source:'Consultation and advice'},fr:{label:'Dire la verite meme contre soi-meme',source:'Consultation et conseil'}},
  {emoji:'🤲',ar:{label:'الدعاء للمظلومين',source:'حماية الضعفاء'},en:{label:'Pray for the oppressed',source:'Protecting the weak'},fr:{label:'Prier pour les opprimes',source:'Proteger les faibles'}},
  {emoji:'⚖️',ar:{label:'العدل مع الأهل والأصدقاء',source:'المساواة بين الناس'},en:{label:'Be just with family and friends',source:'Equality among people'},fr:{label:'Etre juste avec la famille et les amis',source:'Egalite entre les gens'}},
  {emoji:'📚',ar:{label:'تعلّم حق من حقوقك اليوم',source:'حقوق المواطن'},en:{label:'Learn about one of your rights today',source:'Citizens\' rights'},fr:{label:'Apprendre un de vos droits aujourd\'hui',source:'Droits du citoyen'}},
  {emoji:'🤝',ar:{label:'مساعدة شخص محتاج',source:'العدالة الاجتماعية'},en:{label:'Help someone in need',source:'Social justice'},fr:{label:'Aider une personne dans le besoin',source:'Justice sociale'}},
  {emoji:'🌙',ar:{label:'محاسبة النفس قبل النوم',source:'المحاسبة'},en:{label:'Self-review before sleep',source:'Accountability'},fr:{label:'Auto-examen avant le sommeil',source:'Responsabilite'}}
];

// ═══════════════ QUIZ DATA ═══════════════
const QUIZ = [
  {ar:'هل تعرف أن الشورى في الإسلام ملزمة وليست اختيارية؟',en:'Do you know that Shura in Islam is binding, not optional?',fr:'Savez-vous que la Choura en Islam est obligatoire, pas facultative ?'},
  {ar:'هل تسكت عن الظلم خوفاً من العواقب؟',en:'Do you stay silent about injustice out of fear of consequences?',fr:'Gardez-vous le silence sur l\'injustice par peur des consequences ?'},
  {ar:'هل تؤمن بأن كل إنسان له حقوق لا تُنتقص؟',en:'Do you believe every human has inviolable rights?',fr:'Croyez-vous que chaque etre humain a des droits inviolables ?'},
  {ar:'هل تقبل الظلم ما دام لا يمسّك شخصياً؟',en:'Do you accept injustice as long as it doesn\'t affect you personally?',fr:'Acceptez-vous l\'injustice tant qu\'elle ne vous touche pas personnellement ?'},
  {ar:'هل تعدل بين أبنائك وأصدقائك؟',en:'Are you just with your children and friends?',fr:'Etes-vous juste avec vos enfants et amis ?'},
  {ar:'هل تحترم حق الآخرين في الاختلاف معك؟',en:'Do you respect others\' right to disagree with you?',fr:'Respectez-vous le droit des autres de ne pas etre d\'accord avec vous ?'},
  {ar:'هل تعرف الفرق بين الطاعة المشروعة والطاعة العمياء؟',en:'Do you know the difference between legitimate and blind obedience?',fr:'Connaissez-vous la difference entre l\'obeissance legitime et l\'obeissance aveugle ?'},
  {ar:'هل تنصح من تحب بصدق حتى لو لم يعجبه ذلك؟',en:'Do you advise those you love honestly even if they don\'t like it?',fr:'Conseillez-vous ceux que vous aimez honnetement meme s\'ils n\'aiment pas ca ?'},
  {ar:'هل تشعر بمسؤولية تجاه مجتمعك ووطنك؟',en:'Do you feel responsible toward your community and country?',fr:'Vous sentez-vous responsable envers votre communaute et votre pays ?'},
  {ar:'هل تدافع عن حقوق غير المسلمين كما تدافع عن حقوق المسلمين؟',en:'Do you defend non-Muslims\' rights as you defend Muslims\' rights?',fr:'Defendez-vous les droits des non-musulmans comme ceux des musulmans ?'}
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  {ar:{label:'دعاء العدل',text:'اللَّهُمَّ اجْعَلْنِي مِنَ الْعَادِلِينَ',tr:'اللهم اجعلني من العادلين'},en:{label:'Dua for Justice',text:'اللَّهُمَّ اجْعَلْنِي مِنَ الْعَادِلِينَ',tr:'O God, make me among the just'},fr:{label:'Dua pour la Justice',text:'اللَّهُمَّ اجْعَلْنِي مِنَ الْعَادِلِينَ',tr:'O Dieu, fais de moi un juste'}},
  {ar:{label:'دعاء الحق',text:'رَبِّ أَرِنِي الْحَقَّ حَقًّا وَارْزُقْنِي اتِّبَاعَهُ',tr:'رب أرني الحق حقاً وارزقني اتباعه'},en:{label:'Dua for Truth',text:'رَبِّ أَرِنِي الْحَقَّ حَقًّا وَارْزُقْنِي اتِّبَاعَهُ',tr:'Lord, show me truth as truth and grant me to follow it'},fr:{label:'Dua pour la Verite',text:'رَبِّ أَرِنِي الْحَقَّ حَقًّا وَارْزُقْنِي اتِّبَاعَهُ',tr:'Seigneur, montre-moi la verite et accorde-moi de la suivre'}},
  {ar:{label:'دعاء المظلومين',text:'اللَّهُمَّ انْصُرِ الْمَظْلُومِينَ فِي كُلِّ مَكَانٍ',tr:'اللهم انصر المظلومين في كل مكان'},en:{label:'Dua for the Oppressed',text:'اللَّهُمَّ انْصُرِ الْمَظْلُومِينَ فِي كُلِّ مَكَانٍ',tr:'O God, aid the oppressed everywhere'},fr:{label:'Dua pour les Opprimes',text:'اللَّهُمَّ انْصُرِ الْمَظْلُومِينَ فِي كُلِّ مَكَانٍ',tr:'O Dieu, aide les opprimes partout'}},
  {ar:{label:'دعاء الحكمة',text:'رَبِّ هَبْ لِي حُكْمًا وَأَلْحِقْنِي بِالصَّالِحِينَ',tr:'رب هب لي حكماً وألحقني بالصالحين'},en:{label:'Dua for Wisdom',text:'رَبِّ هَبْ لِي حُكْمًا وَأَلْحِقْنِي بِالصَّالِحِينَ',tr:'My Lord, grant me wisdom and join me with the righteous'},fr:{label:'Dua pour la Sagesse',text:'رَبِّ هَبْ لِي حُكْمًا وَأَلْحِقْنِي بِالصَّالِحِينَ',tr:'Seigneur, accorde-moi la sagesse et joins-moi aux vertueux'}},
  {ar:{label:'دعاء الثبات',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'ربنا أفرغ علينا صبراً وثبت أقدامنا'},en:{label:'Dua for Steadfastness',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'Our Lord, pour upon us patience and plant firmly our feet'},fr:{label:'Dua pour la Constance',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'Notre Seigneur, accorde-nous patience et affermis nos pas'}},
  {ar:{label:'دعاء الهداية',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'اللهم اهدني وسددني'},en:{label:'Dua for Guidance',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'O God, guide me and keep me on the right path'},fr:{label:'Dua pour la Guidance',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'O Dieu, guide-moi et maintiens-moi sur le droit chemin'}}
];

// ═══════════════ STATE ═══════════════
let lang = localStorage.getItem('istibdad-lang') || 'ar';
let theme = localStorage.getItem('istibdad-theme') || 'charcoal';
const themes = ['charcoal','night','steel'];
const themeIcons = ['⚖️','🌙','🏛️'];
const themeNames = {charcoal:'فحمي',night:'ليل هادئ',steel:'فولاذي'};
let currentCardIdx = -1;

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  setTheme(theme);
  setLang(lang);
  initTabs();
  initSplash();
  initScrollTop();
  renderHome();
  renderCards();
  renderPillars();
  renderHabits();
  renderQuiz();
  renderAbout();
  renderHelp();
  renderDuas();
  initScrollReveal();
  initKeyboardNav();
});

// ═══════════════ SPLASH ═══════════════
function initSplash() {
  let count = 5;
  const el = document.getElementById('splashCount');
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
  const interval = setInterval(() => {
    count--;
    if (el) el.textContent = count;
    if (count <= 0) { dismissSplash(); clearInterval(interval); }
  }, 1000);
}
function dismissSplash() {
  const s = document.getElementById('splash');
  if (s) { s.classList.add('hidden'); setTimeout(() => s.style.display = 'none', 500); }
  playSound('click');
}

// ═══════════════ LANGUAGE ═══════════════
function setLang(l) {
  lang = l;
  localStorage.setItem('istibdad-lang', l);
  const isRTL = l === 'ar';
  document.documentElement.lang = l;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.body.dir = isRTL ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  const t = T[l];
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('appTitle', t.appTitle); set('splashSub', t.splashSub); set('splashHint', t.splashHint);
  set('tabHome', t.tabHome); set('tabCards', t.tabCards); set('tabPillars', t.tabPillars);
  set('tabHabits', t.tabHabits); set('tabQuiz', t.tabQuiz); set('tabAbout', t.tabAbout);
  set('cardsTitle', t.cardsTitle); set('cardsDesc', t.cardsDesc);
  set('pillarsTitle', t.pillarsTitle); set('pillarsDesc', t.pillarsDesc);
  set('habitsTitle', t.habitsTitle); set('habitsDesc', t.habitsDesc);
  set('quizTitle', t.quizTitle); set('quizDesc', t.quizDesc);
  set('helpTitle', t.helpTitle); set('duaPanelTitle', t.duaPanelTitle);
  set('habitsReset', t.resetBtn);
  renderHome(); renderCards(); renderPillars(); renderHabits(); renderQuiz(); renderAbout(); renderHelp(); renderDuas();
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[l].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
}

// ═══════════════ THEME ═══════════════
function setTheme(t) {
  theme = t;
  document.documentElement.dataset.theme = t;
  localStorage.setItem('istibdad-theme', t);
  const idx = themes.indexOf(t);
  const el = document.getElementById('themeIcon');
  if (el) el.textContent = themeIcons[idx];
}
function cycleTheme() {
  const idx = (themes.indexOf(theme) + 1) % themes.length;
  setTheme(themes[idx]);
  showToast(themeNames[themes[idx]]);
  playSound('theme');
}

// ═══════════════ TABS ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('panel-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
      window.scrollTo({top: 0, behavior: 'smooth'});
      playSound('click');
    });
  });
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % CARDS.length;
  const c = CARDS[dayIdx];
  const cd = c[lang];
  document.getElementById('dailyCard').innerHTML = `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${cd.title}</div>
    <div class="daily-body">${cd.desc}</div>
    <div class="daily-action" onclick="document.querySelector('[data-tab=cards]').click()">${t.tabCards} &#8594;</div>
  `;
  const sections = [
    {icon:'⚖️',tab:'cards',title:t.tabCards,desc:lang==='ar'?'٢٠ بطاقة للحكم الرشيد':lang==='fr'?'20 cartes':'20 cards'},
    {icon:'🏛️',tab:'pillars',title:t.tabPillars,desc:lang==='ar'?'أركان الحكم العادل':lang==='fr'?'Piliers de gouvernance':'Governance pillars'},
    {icon:'📋',tab:'habits',title:t.tabHabits,desc:lang==='ar'?'تتبع يومي':lang==='fr'?'Suivi quotidien':'Daily tracking'},
    {icon:'🤔',tab:'quiz',title:t.tabQuiz,desc:lang==='ar'?'اختبر نفسك':lang==='fr'?'Testez-vous':'Test yourself'},
    {icon:'📖',tab:'about',title:t.tabAbout,desc:lang==='ar'?'عن الكتاب والمؤلف':lang==='fr'?'Le livre et l\'auteur':'Book & author'},
  ];
  document.getElementById('homeGrid').innerHTML = sections.map(s => `
    <div class="home-card" onclick="document.querySelector('[data-tab=${s.tab}]').click()">
      <span class="hc-icon">${s.icon}</span>
      <div class="hc-title">${s.title}</div>
      <div class="hc-desc">${s.desc}</div>
    </div>
  `).join('');
}

// ═══════════════ RENDER: CARDS ═══════════════
function renderCards() {
  const t = T[lang];
  const searchBar = `<div class="search-bar"><input type="text" id="cardsSearch" class="search-input" placeholder="${t.searchPlaceholder}" oninput="filterCards(this.value)"><span class="search-icon">🔍</span></div>`;
  const cards = CARDS.map((c, i) => {
    const d = c[lang];
    return `
    <div class="principle-card scroll-reveal" id="card-${c.id}" data-search="${d.title.toLowerCase()}">
      <div class="principle-head" onclick="toggleCard('card-${c.id}')">
        <span class="principle-num">${c.id}</span>
        <span class="principle-emoji">${c.emoji}</span>
        <span class="principle-title">${d.title}</span>
        <span class="principle-chev">&#9660;</span>
      </div>
      <div class="principle-body">
        <div class="principle-inner">
          <p class="principle-desc">${d.desc}</p>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.lesson}</span>
          </div>
          <button class="share-btn" onclick="event.stopPropagation();shareCard(${i})">
            <span class="share-icon">&#128279;</span> ${t.share}
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
  document.getElementById('cardsContainer').innerHTML = searchBar + cards;
}

function filterCards(query) {
  const q = query.toLowerCase().trim();
  document.querySelectorAll('.principle-card').forEach(card => {
    const searchText = card.dataset.search || '';
    const title = card.querySelector('.principle-title');
    const titleText = title ? title.textContent.toLowerCase() : '';
    const match = !q || searchText.includes(q) || titleText.includes(q);
    card.style.display = match ? '' : 'none';
  });
}

async function shareCard(idx) {
  const c = CARDS[idx];
  const d = c[lang];
  const text = `${c.emoji} ${d.title}\n\n${d.desc}\n\n💡 ${d.lesson}\n\n— الإسلام والاستبداد السياسي | Islam & Political Tyranny`;
  if (navigator.share) {
    try { await navigator.share({ title: d.title, text }); } catch(e) {}
  } else {
    try {
      await navigator.clipboard.writeText(text);
      showToast(lang === 'ar' ? 'تم النسخ!' : lang === 'fr' ? 'Copie !' : 'Copied!');
    } catch(e) { showToast('Could not copy'); }
  }
}

// ═══════════════ RENDER: PILLARS ═══════════════
function renderPillars() {
  document.getElementById('pillarsContainer').innerHTML = PILLARS.map(p => {
    const d = p[lang];
    return `
    <div class="anxiety-card scroll-reveal">
      <div class="anxiety-header">
        <span class="anxiety-emoji">${p.emoji}</span>
        <span class="anxiety-title">${d.title}</span>
      </div>
      <div class="anxiety-solution">
        <span class="anxiety-label">${T[lang].principle}</span>
        ${d.desc}
      </div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: HABITS ═══════════════
function renderHabits() {
  const today = new Date().toDateString();
  let habitsState = JSON.parse(localStorage.getItem('istibdad-habits') || '{}');
  if (habitsState.date !== today) {
    updateStreak(habitsState);
    habitsState = { date: today, done: [] };
    localStorage.setItem('istibdad-habits', JSON.stringify(habitsState));
  }
  const streak = getStreak();
  const streakHTML = streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${T[lang].streakMsg}</div>` : '';
  document.getElementById('habitsContainer').innerHTML = HABITS.map((h, i) => {
    const d = h[lang];
    const isDone = habitsState.done.includes(i);
    return `
    <div class="habit-item ${isDone ? 'done' : ''}" onclick="toggleHabit(${i})">
      <span class="habit-check">${isDone ? '&#10003;' : ''}</span>
      <span class="habit-emoji">${h.emoji}</span>
      <div>
        <div class="habit-label">${d.label}</div>
        <div class="habit-source">${d.source}</div>
      </div>
    </div>`;
  }).join('');
  const streakEl = document.getElementById('streakBadge');
  if (streakEl) streakEl.innerHTML = streakHTML;
  updateHabitsProgress(habitsState);
}

function toggleHabit(i) {
  const today = new Date().toDateString();
  let hs = JSON.parse(localStorage.getItem('istibdad-habits') || '{}');
  if (hs.date !== today) hs = { date: today, done: [] };
  const idx = hs.done.indexOf(i);
  if (idx > -1) hs.done.splice(idx, 1); else hs.done.push(i);
  localStorage.setItem('istibdad-habits', JSON.stringify(hs));
  renderHabits();
  playSound(idx > -1 ? 'click' : 'success');
  if (hs.done.length === HABITS.length) { launchConfetti(); showToast(T[lang].allDone); }
}

function resetHabits() {
  localStorage.setItem('istibdad-habits', JSON.stringify({ date: new Date().toDateString(), done: [] }));
  renderHabits();
  showToast(lang === 'ar' ? 'تم إعادة التعيين' : lang === 'fr' ? 'Reinitialise' : 'Reset');
}

function updateHabitsProgress(hs) {
  const done = hs.done.length, total = HABITS.length, pct = total > 0 ? (done / total * 100) : 0;
  const fill = document.getElementById('habitsFill');
  const txt = document.getElementById('habitsText');
  if (fill) fill.style.width = pct + '%';
  if (txt) txt.textContent = `${done}/${total}`;
}

function updateStreak(prevState) {
  let streakData = JSON.parse(localStorage.getItem('istibdad-streak') || '{"count":0,"lastDate":""}');
  if (prevState && prevState.done && prevState.done.length === HABITS.length && prevState.date) {
    const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
    if (prevState.date === yesterday.toDateString()) streakData.count++;
    else if (prevState.date !== new Date().toDateString()) streakData.count = prevState.done.length === HABITS.length ? 1 : 0;
    streakData.lastDate = prevState.date;
  } else if (prevState && prevState.date) { streakData.count = 0; streakData.lastDate = prevState.date; }
  localStorage.setItem('istibdad-streak', JSON.stringify(streakData));
}
function getStreak() { return JSON.parse(localStorage.getItem('istibdad-streak') || '{"count":0}').count; }

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#37474F','#546E7A','#78909C','#B0BEC5','#CFD8DC','#455A64'];
  for (let i = 0; i < 120; i++) {
    particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ RENDER: QUIZ ═══════════════
function renderQuiz() {
  const t = T[lang];
  document.getElementById('quizContainer').innerHTML = QUIZ.map((q, i) => `
    <div class="quiz-question scroll-reveal" id="quiz-q-${i}">
      <div class="quiz-q-text">${i+1}. ${q[lang]}</div>
      <div class="quiz-options">
        <button class="quiz-opt" onclick="selectQuizOpt(${i},2)">${t.yes}</button>
        <button class="quiz-opt" onclick="selectQuizOpt(${i},1)">${t.sometimes}</button>
        <button class="quiz-opt" onclick="selectQuizOpt(${i},0)">${t.no}</button>
      </div>
    </div>
  `).join('') + `<button class="quiz-submit" onclick="submitQuiz()">${t.submitQuiz}</button>`;
  document.getElementById('quizResult').classList.add('hidden');
  window._quizAnswers = {};
}

function selectQuizOpt(qi, val) {
  window._quizAnswers[qi] = val;
  document.querySelectorAll(`#quiz-q-${qi} .quiz-opt`).forEach((o, oi) => {
    o.classList.toggle('selected', [2,1,0][oi] === val);
  });
  playSound('click');
}

function submitQuiz() {
  const answers = window._quizAnswers || {};
  if (Object.keys(answers).length < QUIZ.length) {
    showToast(lang === 'ar' ? 'أجب على جميع الأسئلة' : lang === 'fr' ? 'Repondez a toutes les questions' : 'Answer all questions');
    return;
  }
  const invertedQs = [1, 3]; // silence/accept injustice = bad
  let score = 0;
  Object.entries(answers).forEach(([qi, v]) => { score += invertedQs.includes(parseInt(qi)) ? (2 - v) : v; });
  const max = QUIZ.length * 2;
  const pct = Math.round(score / max * 100);
  let emoji, title, desc;
  if (pct >= 75) {
    emoji = '⚖️'; title = lang==='ar'?'ممتاز!':lang==='fr'?'Excellent !':'Excellent!';
    desc = lang==='ar'?'لديك وعي عميق بمبادئ العدل والحكم الراشد.':lang==='fr'?'Vous avez une conscience profonde des principes de justice.':'You have deep awareness of justice and governance principles.';
  } else if (pct >= 50) {
    emoji = '📖'; title = lang==='ar'?'جيد':lang==='fr'?'Bien':'Good';
    desc = lang==='ar'?'أنت على الطريق الصحيح. واصل التعلم عن حقوقك وواجباتك.':lang==='fr'?'Vous etes sur la bonne voie. Continuez a apprendre.':'You\'re on the right track. Keep learning about your rights.';
  } else {
    emoji = '🔄'; title = lang==='ar'?'حان وقت التعلم':lang==='fr'?'Il est temps d\'apprendre':'Time to Learn';
    desc = lang==='ar'?'راجع بطاقات الحكم الرشيد وتعرف على حقوقك كما بيّنها الإسلام.':lang==='fr'?'Relisez les cartes de bonne gouvernance.':'Review the governance cards and learn your rights as Islam describes them.';
  }
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `<div class="qr-emoji">${emoji}</div><div class="qr-score">${pct}%</div><div class="qr-title">${title}</div><div class="qr-desc">${desc}</div><button class="quiz-submit" onclick="renderQuiz()" style="margin-top:16px">${T[lang].quizAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' });
  playSound('success');
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'لست عالماً ولا مفتياً. هذا جهد متواضع من مسلم يحب كتب الشيخ الغزالي. المحتوى مستمد من الكتاب ومصادر إسلامية موثوقة. ليست فتوى.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل.',
      bookTitle: 'عن الكتاب',
      bookDesc: '"الإسلام والاستبداد السياسي" يكشف فيه الشيخ الغزالي أن الإسلام يرفض الاستبداد بكل أشكاله. يبيّن أن الشورى ملزمة، والعدل فريضة، ومحاسبة الحاكم واجب. الكتاب رد على من يستخدم الدين لتبرير الظلم والطغيان.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "الإسلام والاستبداد السياسي" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','سيرة الخلفاء الراشدين'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner.',
      bookTitle: 'About the Book',
      bookDesc: '"Islam and Political Tyranny" reveals that Islam rejects tyranny in all its forms. Sheikh al-Ghazali shows that Shura is binding, justice is obligatory, and holding rulers accountable is a duty. The book responds to those who use religion to justify oppression.',
      sourcesTitle: 'Sources',
      sources: ['"Islam and Political Tyranny" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Biography of the Rightly Guided Caliphs'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien, surnomme "Le Litteraire de la Predication". Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie).',
      bookTitle: 'A Propos du Livre',
      bookDesc: '"L\'Islam et la Tyrannie Politique" revele que l\'Islam rejette la tyrannie sous toutes ses formes. Sheikh al-Ghazali montre que la Choura est obligatoire, la justice est un devoir, et demander des comptes aux dirigeants est une obligation.',
      sourcesTitle: 'Sources',
      sources: ['"L\'Islam et la Tyrannie Politique" — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Biographie des Califes Bien Guides'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  document.getElementById('aboutContainer').innerHTML = `
    <div class="about-disclaimer"><div class="about-disclaimer-title">${a.disclaimerTitle}</div><p>${a.disclaimer}</p></div>
    <div class="about-author"><span class="about-author-icon">📚</span><div class="about-author-info"><div class="about-author-name">${a.authorName}</div><div class="about-author-dates">${a.authorDates}</div><div class="about-author-bio">${a.authorBio}</div></div></div>
    <div class="about-section"><div class="about-section-title">${a.bookTitle}</div><p class="about-text">${a.bookDesc}</p></div>
    <div class="about-section"><div class="about-section-title">${a.sourcesTitle}</div>${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}</div>
    <div class="about-section"><p class="about-text">${a.contact}</p></div>
  `;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "الإسلام والاستبداد السياسي" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ٢٠ بطاقة، ٦ أركان، تتبع العادات، اختبار.'},
      {title:'⌨️ اختصارات',body:'استخدم الأسهم للتنقل بين البطاقات. اضغط Escape لإغلاق اللوحات.'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},
      {title:'📚 Sources',body:'"Islam and Political Tyranny" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 20 cards, 6 pillars, habit tracker, quiz.'},
      {title:'⌨️ Shortcuts',body:'Use arrow keys to navigate between cards. Press Escape to close panels.'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},
      {title:'📚 Sources',body:'"L\'Islam et la Tyrannie Politique" par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},
      {title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 20 cartes, 6 piliers, suivi habitudes, quiz.'},
      {title:'⌨️ Raccourcis',body:'Utilisez les fleches pour naviguer entre les cartes. Echap pour fermer les panneaux.'},
    ]
  };
  document.getElementById('helpBody').innerHTML = help[lang].map(h => `<div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  document.getElementById('duaPanelContent').innerHTML = DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div><div class="dua-item-tr">${dd.tr}</div></div>`;
  }).join('');
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  window._scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); window._scrollObserver.unobserve(entry.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el));
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => setTimeout(() => {
      document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el));
    }, 100));
  });
}

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const helpPanel = document.getElementById('helpPanel');
      if (!helpPanel.classList.contains('hidden')) { toggleHelp(); return; }
      const duaPanel = document.getElementById('duaPanel');
      if (!duaPanel.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.principle-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const cardsPanel = document.getElementById('panel-cards');
      if (!cardsPanel || !cardsPanel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'cardsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.principle-card')).filter(c => c.style.display !== 'none');
      if (!cards.length) return;
      if (currentCardIdx >= 0 && currentCardIdx < cards.length) cards[currentCardIdx].classList.remove('open');
      const dir = (document.documentElement.dir === 'rtl') ? (e.key === 'ArrowRight' ? -1 : 1) : (e.key === 'ArrowRight' ? 1 : -1);
      currentCardIdx = Math.max(0, Math.min(cards.length - 1, currentCardIdx + dir));
      cards[currentCardIdx].classList.add('open');
      cards[currentCardIdx].scrollIntoView({ behavior: 'smooth', block: 'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) { const card = document.getElementById(id); if (card) { card.classList.toggle('open'); playSound('click'); } }
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) { const t = document.getElementById('toast'); const m = document.getElementById('toastMsg'); if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); } }
function initScrollTop() { const btn = document.getElementById('scrollTop'); window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); }); }

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type === 'click') { osc.frequency.value = 800; osc.type = 'sine'; gain.gain.value = 0.04; }
    else if (type === 'success') { osc.frequency.value = 523; osc.type = 'sine'; gain.gain.value = 0.06; }
    else if (type === 'theme') { osc.frequency.value = 440; osc.type = 'triangle'; gain.gain.value = 0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}

// ═══════════════ SWIPE GESTURES ═══════════════
(function() {
  let touchStartX = 0, touchStartY = 0;
  const tabOrder = ['home', 'cards', 'pillars', 'habits', 'quiz', 'about'];
  document.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true });
  document.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < 50 || Math.abs(dy) > Math.abs(dx)) return;
    const isRTL = document.documentElement.dir === 'rtl';
    const activeTab = document.querySelector('.tab.active');
    if (!activeTab) return;
    const currentIdx = tabOrder.indexOf(activeTab.dataset.tab);
    if (currentIdx < 0) return;
    let nextIdx = isRTL ? (dx > 0 ? currentIdx + 1 : currentIdx - 1) : (dx < 0 ? currentIdx + 1 : currentIdx - 1);
    if (nextIdx >= 0 && nextIdx < tabOrder.length) {
      const nextTab = document.querySelector(`.tab[data-tab="${tabOrder[nextIdx]}"]`);
      if (nextTab) nextTab.click();
    }
  }, { passive: true });
})();

// ═══════════════ TICKER ═══════════════
function startTicker(){
  var el=document.getElementById('tickerText');
  if(!el)return;
  var tips={
    ar:['⚖️ ٢٠ بطاقة عن العدل والشورى','🏛️ أركان الحكم الراشد في الإسلام','📋 تتبع عاداتك اليومية','🕊️ الحرية حق إلهي لكل إنسان','🤲 اللّهُمّ انصُر المظلومين','💡 Powered by workshop-diy.org'],
    en:['⚖️ 20 cards on justice and consultation','🏛️ Pillars of righteous governance','📋 Track your daily habits','🕊️ Freedom is a divine right','🤲 O God, aid the oppressed','💡 Powered by workshop-diy.org'],
    fr:['⚖️ 20 cartes sur la justice et la consultation','🏛️ Piliers de la bonne gouvernance','📋 Suivez vos habitudes','🕊️ La liberte est un droit divin','🤲 O Dieu, aide les opprimes','💡 Powered by workshop-diy.org']
  };
  var l=document.documentElement.lang||'ar';
  var msgs=tips[l]||tips.ar;
  var txt=msgs.join('  ✦  ');
  el.innerHTML='<span class="tc">'+txt+'  ✦  </span><span class="tc" aria-hidden="true">'+txt+'  ✦  </span>';
  el.style.animation='tickerMarquee '+Math.max(25,txt.length*0.12)+'s linear infinite';
}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',startTicker)}else{startTicker()}
