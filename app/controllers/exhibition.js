import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

const TRANSLATIONS = {
  en: {
    // Title and description
    title: "David Rickard: Halfway to the Sun",
    description: "Exhibition",

    // Event details
    dates: "DATES",
    datesText: "Friday 6 - Friday 20, February 2026",
    hours: "HOURS",
    hoursDay: "Thursday - Saturday",
    hoursTime: "12:00pm -5:00pm",
    gallery: "GALLERY",
    galleryName: "Somers Gallery",
    galleryAddress: "96 Chalton St, London NW1 1HJ",

    // Main content paragraphs
    paragraph1: "Distance seems to shrink to insignificance in our age of increased connectivity, ever-faster travel, and digital instantaneity. Halfway to the Sun is a metaphor and an attempt to comprehend the scale of movement — both digital and physical — that shapes our lives, including the endless stream of car journeys taken daily across the UK. This proposed installation by artist David Rickard, salvaging over 300 aluminium car‑wheel rims, reflects on the invisible history of travel — the millions of miles cars traverse over their lifetimes.",

    paragraph2: "The installation also looks at the flip side of travel. All vehicles contribute to air pollution, including electric cars, which still emit significant particulate matter (PM2.5) from tyre wear and road dust resuspension. When we breathe in, tiny, invisible particles of pollution penetrate deep into our lungs and bloodstream, affecting every organ in the body. Toxic air is a known contributor to cancer, heart disease, stroke, and asthma. According to the Royal College of Physicians, air pollution contributes to approximately 30,000 deaths per year and costs society, businesses and the NHS more than £27 billion annually.",

    paragraph3: "This context is especially relevant to Somers Town. The neighbourhood is surrounded by major roads, including Euston Road, still one of London's most polluted. Despite a significant reduction in both nitrogen dioxide and PM2.5 levels over the past decade, the mean annual concentration of both pollutants in the area close to Euston Road remains considerably above the WHO's recommended limits of 10 µg/m³ and 5 µg/m³, respectively.",

    paragraph4: "Moreover, across the last 30 years, Somers Town and the surrounding areas have undergone extensive, continuous development. As a result of ongoing large-scale construction projects, residents have experienced not only air-quality degradation, but also the loss of open green spaces.",

    paragraph5: "This artistic project acknowledges the complex nature of air pollution and its multiple sources – including those connected with our daily activities at home, such as cooking, wood burning or lighting of candles. It offers no facile answers. Instead, it encourages us to think of radical new ways in which our urban landscape could evolve in response to environmental change. It calls for cities where space is truly public, and where collective wellbeing takes precedence over personal habits that deteriorate air quality and destroy health for all.",

    paragraph6: "The installation on view in the gallery illustrates the evolution of our thinking around air pollution. This includes featuring plants that at different points were thought of as solutions to the air quality problem, including those recommended by NASA, following its 1989 clean air study. The title itself – Halfway to the Sun – evokes the connection to space travel.",

    paragraph7: "At the end of the exhibition, all plants will be distributed among residents of Somers Town.",

    specialThanks: "Special thanks to the many people, including residents of Somers Town, who helped shape this work: Ema Howling, Ed Tibuzzi, Halima Khan, Halima Tuli, Hanif Kara OBE, James New, Michael Pinsky, Tom Parkes, Slaney Devlin, and participants of the Think and Do workshop.",

    // Footer
    moreInfoText: "MORE INFO",
    withThanksTo: "With thanks to"
  },

  bn: {
    // Title and description
    title: "ডেভিড রিকার্ড: সূর্যের অর্ধেক পথ]",
    description: "জলবায়ু শিল্প",

    // Event details
    dates: "DATES",
    datesText: "Friday 6 - Friday 20, February 2026",
    hours: "HOURS",
    hoursDay: "Thursday - Saturday",
    hoursTime: "12:00pm -5:00pm",
    gallery: "GALLERY",
    galleryName: "Somers Gallery",
    galleryAddress: "96 Chalton St, London NW1 1HJ",

    // Main content paragraphs
    paragraph1: "আমাদের বর্ধিত সংযোগ, দ্রুত ভ্রমণ এবং ডিজিটাল তাৎক্ষণিকতার যুগে দূরত্ব তুচ্ছ হয়ে যাচ্ছে বলে মনে হচ্ছে। Halfway to the Sun (সূর্যের মাঝামাঝি) একটি রূপক এবং গতিবিধির মাত্রা বোঝার একটি প্রচেষ্টা - ডিজিটাল এবং শারীরিক উভয়ই - যা আমাদের জীবনকে রূপ দেয়, যার মধ্যে ইউকে জুড়ে প্রতিদিন নেওয়া অবিরাম গাড়ি ভ্রমণের ধারাও অন্তর্ভুক্ত। শিল্পী ডেভিড রিকার্ডের এই প্রস্তাবিত ইনস্টলেশন, 300 টিরও বেশি অ্যালুমিনিয়াম গাড়ির চাকার রিম উদ্ধার করে , ভ্রমণের অদৃশ্য ইতিহাসের প্রতিফলন ঘটায় - লক্ষ লক্ষ মাইল গাড়ি তাদের জীবদ্দশায় অতিক্রম করে।",
    paragraph2: "এই স্থাপনাটি ভ্রমণের বিপরীত দিকটিও দেখে। সমস্ত যানবাহন বায়ু দূষণে অবদান রাখে, যার মধ্যে বৈদ্যুতিক গাড়িও রয়েছে, যা এখনও টায়ার ক্ষয় এবং রাস্তা থেকে উল্লেখযোগ্য কণা পদার্থ (PM2.5) নির্গত করে। ধুলো পুনরুজ্জীবিত করে। যখন আমরা শ্বাস নিই, তখন দূষণের ক্ষুদ্র, অদৃশ্য কণা আমাদের ফুসফুস এবং রক্তপ্রবাহের গভীরে প্রবেশ করে, যা শরীরের প্রতিটি অঙ্গকে প্রভাবিত করে। বিষাক্ত বায়ু ক্যান্সার, হৃদরোগ, স্ট্রোক এবং হাঁপানির জন্য একটি পরিচিত কারণ। রয়েল কলেজ অফ ফিজিশিয়ানসের মতে, বায়ু দূষণ প্রতি বছর প্রায় 30,000 মৃত্যুর কারণ এবং সমাজ, ব্যবসা এবং NHS-এর বার্ষিক £27 বিলিয়নেরও বেশি ক্ষতি করে।",
    paragraph3: "এই প্রেক্ষাপটটি বিশেষভাবে সোমার্স টাউনের ক্ষেত্রে প্রাসঙ্গিক। এই এলাকাটি প্রধান রাস্তা দ্বারা বেষ্টিত, যার মধ্যে ইউস্টন রোডও রয়েছে, যা এখনও লন্ডনের সবচেয়ে দূষিত রাস্তাগুলির মধ্যে একটি। গত ১০ বছরে নাইট্রোজেন ডাই অক্সাইড এবং PM2.5 উভয়ের মাত্রা উল্লেখযোগ্যভাবে হ্রাস পেলেও, ইউস্টন রোডের কাছাকাছি এলাকায় উভয় দূষণকারীর গড় বার্ষিক ঘনত্ব যথাক্রমে 10 µg/m³ এবং 5 µg/m³ এর WHO-এর প্রস্তাবিত সীমার চেয়ে যথেষ্ট বেশি।",
    paragraph4: "তাছাড়া, গত ৩০ বছরে, সমারস টাউন এবং আশেপাশের এলাকাগুলিতে ব্যাপক, ধারাবাহিক উন্নয়ন হয়েছে। চলমান বৃহৎ আকারের নির্মাণ প্রকল্পের ফলে, বাসিন্দারা কেবল বায়ুর মানের অবনতিই নয়, বরং উন্মুক্ত সবুজ স্থানের ক্ষতির সম্মুখীন হয়েছেন।",
    paragraph5: "এই শৈল্পিক প্রকল্পটি বায়ু দূষণের জটিল প্রকৃতি এবং এর বহুমুখী উৎসকে স্বীকার করে - যার মধ্যে রয়েছে আমাদের বাড়িতে দৈনন্দিন কাজকর্মের সাথে সম্পর্কিত উৎস, যেমন রান্না, কাঠ পোড়ানো বা মোমবাতি জ্বালানো। এটি কোনও সহজ উত্তর দেয় না। পরিবর্তে, এটি আমাদেরকে পরিবেশগত পরিবর্তনের প্রতিক্রিয়ায় আমাদের নগর ভূদৃশ্য কীভাবে বিকশিত হতে পারে তার আমূল নতুন উপায়গুলি চিন্তা করতে উৎসাহিত করে। এটি এমন শহরগুলির জন্য আহ্বান জানায় যেখানে স্থান সত্যিই জনসাধারণের জন্য উপযুক্ত, এবং যেখানে যৌথ সুস্থতা ব্যক্তিগত অভ্যাসের চেয়ে প্রাধান্য পায় যা বায়ুর গুণমানকে খারাপ করে এবং সকলের স্বাস্থ্যকে ধ্বংস করে।",
    paragraph6: "গ্যালারিতে প্রদর্শিত স্থাপনাটি বায়ু দূষণ সম্পর্কে আমাদের চিন্তাভাবনার বিবর্তনকে চিত্রিত করে। এর মধ্যে রয়েছে এমন উদ্ভিদের প্রদর্শন যা বিভিন্ন সময়ে বায়ুর গুণমান সমস্যার সমাধান হিসেবে বিবেচিত হয়েছিল, যার মধ্যে NASA দ্বারা 1989 সালের পরিষ্কার বায়ু গবেষণার পরে সুপারিশকৃত উদ্ভিদও অন্তর্ভুক্ত ছিল 2 । শিরোনামটি নিজেই - হাফওয়ে টু দ্য সান - মহাকাশ ভ্রমণের সাথে সংযোগের কথা তুলে ধরে।",
    paragraph7: "প্রদর্শনী শেষে, সমস্ত গাছপালা সোমার্স টাউনের বাসিন্দাদের মধ্যে বিতরণ করা হবে।",
    specialThanks: "এই কাজটি রূপদানে সাহায্যকারী সমারস টাউনের বাসিন্দা সহ অনেক মানুষকে বিশেষ ধন্যবাদ: এমা হাউলিং, এড টিবুজ্জি, হালিমা খান, হালিমা তুলি, হানিফ কারা OBE, জেমস নিউ, মাইকেল পিনস্কি, টমপার্কস, স্লানি ডেভলিন এবং থিঙ্ক অ্যান্ড ডু কর্মশালার অংশগ্রহণকারীরা।",

    // Footer
    moreInfoText: "MORE INFO",
    withThanksTo: "With thanks to"
  }
};

export default class ExhibitionController extends Controller {
  translations = TRANSLATIONS;

  @tracked currentLanguage = 'en';

  @action
  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'bn' : 'en';
  }

  // Getter methods for all translatable content
  get currentTitle() {
    return this.translations[this.currentLanguage].title;
  }

  get currentDescription() {
    return this.translations[this.currentLanguage].description;
  }

  get currentDates() {
    return this.translations[this.currentLanguage].dates;
  }

  get currentDatesText() {
    return this.translations[this.currentLanguage].datesText;
  }

  get currentHours() {
    return this.translations[this.currentLanguage].hours;
  }

  get currentHoursDay() {
    return this.translations[this.currentLanguage].hoursDay;
  }

  get currentHoursTime() {
    return this.translations[this.currentLanguage].hoursTime;
  }

  get currentGallery() {
    return this.translations[this.currentLanguage].gallery;
  }

  get currentGalleryName() {
    return this.translations[this.currentLanguage].galleryName;
  }

  get currentGalleryAddress() {
    return this.translations[this.currentLanguage].galleryAddress;
  }

  get currentParagraph1() {
    return this.translations[this.currentLanguage].paragraph1;
  }

  get currentParagraph2() {
    return this.translations[this.currentLanguage].paragraph2;
  }

  get currentParagraph3() {
    return this.translations[this.currentLanguage].paragraph3;
  }

  get currentParagraph4() {
    return this.translations[this.currentLanguage].paragraph4;
  }

  get currentParagraph5() {
    return this.translations[this.currentLanguage].paragraph5;
  }

  get currentParagraph6() {
    return this.translations[this.currentLanguage].paragraph6;
  }

  get currentParagraph7() {
    return this.translations[this.currentLanguage].paragraph7;
  }

  get currentSpecialThanks() {
    return this.translations[this.currentLanguage].specialThanks;
  }

  get currentMoreInfoText() {
    return this.translations[this.currentLanguage].moreInfoText;
  }

  get currentWithThanksTo() {
    return this.translations[this.currentLanguage].withThanksTo;
  }
}
