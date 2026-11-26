// All marketing copy below comes from the supplied Hebrew copy and brief.
// Bracketed text marks content that has not been supplied. Replace it here.
// Image paths are relative to public/, e.g. /images/hero.webp.
// Images: { src, alt, width, height, srcSet?, sizes? }.
export const content = {
  brand: 'עמית יפרגן',
  logo: null,
  hero: {
    title: 'להתחטב או לבנות שריר בלי להתאמן כל יום',
    titleLines: ['להתחטב או לבנות שריר', 'בלי להתאמן כל יום'],
    kicker: 'ליווי אישי באימונים ובתזונה',
    description: 'אני עמית יפרגן. בין אם אתם רוצים להתחטב, לרדת במשקל או לבנות מסת שריר, נבנה תוכנית לפי המטרה שלכם, הזמן שיש לכם והאוכל שאתם אוהבים. אם משהו לא מסתדר בשגרה, אפשר לפנות אליי ולבדוק יחד מה כדאי לשנות.',
    cta: 'לדבר עם עמית בוואטסאפ',
    note: 'נדבר על מה שתרצו להשיג ונבדוק אם הליווי מתאים לכם. אין התחייבות להצטרף.',
    secondary: 'לראות תמונות לפני ואחרי',
    image: {
      src: '/images/coach-960.webp',
      srcSet: '/images/coach-480.webp 480w, /images/coach-960.webp 960w, /images/coach-1440.webp 1440w',
      sizes: '(min-width: 768px) 50vw, 100vw',
      alt: 'עמית יפרגן, מאמן כושר, בחדר הכושר',
      width: 960,
      height: 1707,
    },
  },
  audience: {
    title: 'על מה אתם רוצים לעבוד?',
    items: [
      {title:'חיטוב', icon:'training', text:'אם אתם כבר מתאמנים אבל לא רואים את השינוי שקיוויתם לראות, נסתכל על האימונים ועל האכילה שלכם יחד. משם נחליט מה כדאי לשנות ומה כבר עובד ואפשר להשאיר.'},
      {title:'ירידה במשקל', icon:'nutrition', text:'אם אתם מצליחים לשמור על השגרה בבית אבל נתקעים בארוחות בחוץ או בימים עמוסים, ניקח את זה בחשבון כשנבנה את התפריט. אין טעם לבנות תוכנית שמתאימה רק לימים שבהם הכול מסתדר.'},
      {title:'בניית מסת שריר', icon:'progress', text:'אם אתם מגיעים לחדר הכושר אבל לא בטוחים מה לקדם באימון הבא, נבנה תוכנית לפי הרמה שלכם. תקבלו הדרכה כדי שתדעו איך לבצע אותה, ונעקוב יחד אחרי ההתקדמות כדי לדעת מתי יש טעם לשנות משהו.'},
    ],
  },
  results: {
    title: 'תוצאות של מתאמנים | לפני ואחרי',
    intro: 'כאן אפשר לראות איך נראה השינוי אצל חלק מהמתאמנים שליוויתי. עברו בין התמונות כדי לראות אותם בשלבים שונים של הדרך.',
    note: 'בכל זוג תמונות מופיע אותו אדם בשלבים שונים. התוצאות משתנות מאדם לאדם.',
    // Use `image` for a combined photo OR `before` + `after` for separate photos.
    // Optional fields: name, duration, detail. No results or claims are fabricated.
    // sourceFile records the user's confirmed pairing; it is not a public URL.
    // Add accessible image files to public/images/ and populate src/width/height.
    // A blank src intentionally displays a placeholder, never an unrelated photo.
    items: [
      {
        id: 'coach-bus-gym',
        overlayLabels: true,
        before: { src: '/images/coach-before.webp', alt: 'לפני — ללא חולצה באוטובוס', width: 739, height: 1600 },
        after: { src: '/images/coach-after.webp', alt: 'אחרי — בגופייה שחורה בחדר הכושר', width: 900, height: 1600 },
      },
      {
        id: 'waterfall-mirror',
        before: { src: '', sourceFile: '5bb2b4e7-b66f-4321-a29c-201f346bfc17.JPG', alt: 'לפני — התמונה ליד המפל' },
        after: { src: '', sourceFile: '8f717d5b-c050-4215-b64f-1f43bb968fb7.JPG', alt: 'אחרי — צילום מול המראה' },
      },
      {
        id: 'black-shirt-back',
        overlayLabels: true,
        before: { src: '/images/black-shirt-before.webp', width: 900, height: 1600, sourceFile: 'A8DA48C1-9239-4A2A-943D-80B39B85E5E9.JPG', alt: 'לפני — התמונה עם החולצה השחורה' },
        after: { src: '/images/back-after.webp', width: 1000, height: 1333, sourceFile: '00d9c726-c5a6-41da-95be-6a7551f9cf69.JPG', alt: 'אחרי — צילום הגב ללא חולצה' },
      },
      {
        id: 'drink-pink-shorts',
        before: { src: '/images/ad57073f-9d63-4bc7-8afc-f1b5b4256f61.jpg', sourceFile: 'ad57073f-9d63-4bc7-8afc-f1b5b4256f61.JPG', alt: 'לפני — התמונה עם הכוס', width: 645, height: 1400 },
        after: { src: '/images/1ced7f39-eb5f-4e2f-9b65-4c5f0cea92cc.jpg', sourceFile: '1ced7f39-eb5f-4e2f-9b65-4c5f0cea92cc.JPG', alt: 'אחרי — התמונה עם המכנס הוורוד', width: 659, height: 973 },
      },
      {
        id: 'outdoor-mirror',
        overlayLabels: true,
        before: { src: '/images/outdoor-before.webp', width: 1200, height: 1081, sourceFile: '05b69454-02fd-4d81-9b67-9a93786f80ce.JPG', alt: 'לפני — התמונה בחוץ ליד הקיר' },
        after: { src: '/images/flex-after.webp', width: 1200, height: 970, sourceFile: 'b91f328c-0ebb-4bdc-a4d4-c19b65d3a047.JPG', alt: 'אחרי — הפעלת שריר מול המראה' },
      },
      {
        id: 'white-black-mirror-0566',
        before: { src: '/images/white-shirt-0566-before.webp', width: 280, height: 713, alt: 'לפני — צילום מול המראה בחולצה לבנה' },
        after: { src: '/images/black-shirt-0566-after.webp', width: 280, height: 712, alt: 'אחרי — צילום מול המראה בחולצה שחורה' },
      },
    ],
  },
  coachingProcess: {
    title: 'איך הליווי עובד',
    items: [
      {title:'מתחילים ממה שקורה אצלכם היום',text:'אחרי ההצטרפות תמלאו שאלון על האימונים, האוכל, השגרה והמטרה שלכם. ככה אדע מה כבר עובד לכם ואיפה אתם צריכים עזרה.'},
      {title:'בונים תוכנית שאפשר להתחיל ממנה',text:'אבנה לכם תוכנית אימונים ותפריט אישי. שניהם יהיו באפליקציה, יחד עם המעקב, כדי שלא תצטרכו לחפש כל פעם מה לעשות באימון או איפה שמרתם את התפריט.'},
      {title:'בודקים מה עובד ומשנים כשצריך',text:'פעם בחודש ניפגש אישית כדי לבדוק את ההתקדמות. בין הפגישות אפשר לכתוב לי אם יש שאלה על אימון, אם משהו בתפריט לא מסתדר או אם אתם לא בטוחים איך להמשיך בשבוע עמוס.'},
    ],
  },
  benefits: {
    title: 'עם מי אתם עובדים?',
    text: 'אני עמית יפרגן. ליוויתי מעל 90 מתאמנים, ואני לומד וחוקר את תחום הכושר כבר עשור. כשאתם כותבים לי על משהו שלא מסתדר, חשוב לי להבין מה קרה בפועל. אם אימון לא נכנס בזמן שיש לכם או שהתפריט לא מתאים לשעות העבודה, זה מידע שעוזר לנו להחליט מה לשנות.',
  },
  // These sections are omitted until genuine testimonials / FAQ are supplied.
  // Testimonials: { text, name? } OR { image: { src, alt, width, height } }.
  testimonials: { title: 'המלצות לקוחות', items: [] },
  // FAQ entries: { question, answer }.
  faq: { title: 'שאלות נפוצות', items: [
    {question:'הליווי מתאים גם אם אף פעם לא התאמנתי בצורה מסודרת?',answer:'כן. אבנה את תוכנית האימונים לפי הרמה והניסיון שלכם, ותקבלו הדרכה כדי שתדעו איך לבצע אותה.'},
    {question:'צריך לוותר על מאכלים שאני אוהב?',answer:'לא בהכרח. כשנבנה את התפריט, ניקח בחשבון מה אתם אוהבים לאכול ואיך נראה השבוע שלכם.'},
    {question:'מה קורה אם פספסתי אימונים או שלא עמדתי בתפריט?',answer:'אפשר לכתוב לי ולספר מה לא הסתדר. נבדוק יחד אם זה היה שבוע חריג או שיש משהו שכדאי להתאים בתוכנית.'},
    {question:'מה קורה אחרי שאני שולח הודעה?',answer:'נדבר על מה שתרצו להשיג, על מה שכבר ניסיתם ועל מה שחשוב לכם בליווי. אני אסביר איך זה עובד ונבדוק אם זה מתאים לכם. אין התחייבות להצטרף.'},
  ] },
  cta: {
    title: 'מה הייתם רוצים לשנות קודם?',
    text: 'לא צריך להגיע עם תוכנית או לדעת איך להתחיל. שלחו לי הודעה וספרו לי מה תרצו להשיג או איפה אתם מרגישים תקועים. משם נבדוק אם הליווי מתאים לכם.',
    button: 'לדבר עם עמית בוואטסאפ',
    note: 'שיחה אישית עם עמית, בלי התחייבות להצטרף.',
  },
  // Only supplied contact details should be added. Each link: { label, href }.
  footer: { text: '', links: [{ label: 'וואטסאפ לעמית יפרגן', href: 'https://wa.me/972533352635' }, { label: 'טלפון: 053-335-2635', href: 'tel:+972533352635' }] },
};
