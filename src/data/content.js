// All marketing copy below comes from the supplied Hebrew copy and brief.
// Bracketed text marks content that has not been supplied. Replace it here.
// Image paths are relative to public/, e.g. /images/hero.webp.
// Images: { src, alt, width, height, srcSet?, sizes? }.
export const content = {
  brand: 'עמית יפרגן',
  logo: null,
  hero: {
    title: 'להגיע לגוף החלומות שלכם',
    titleLines: ['להגיע לגוף', 'החלומות שלכם'],
    subtitle: 'בלי דיאטות קיצוניות ובלי להתאמן כל יום',
    description: 'תהליך אמיתי לנשים וגברים שרוצים להשיג את הגוף שהם חולמים עליו, מבלי לוותר על מה שהם אוהבים לאכול ומבלי להתחיל כל פעם מחדש.',
    cta: 'להתייעצות איתי בוואטסאפ',
    image: {
      src: '/images/coach-960.webp',
      srcSet: '/images/coach-480.webp 480w, /images/coach-960.webp 960w, /images/coach-1440.webp 1440w',
      sizes: '(min-width: 1280px) 487px, (min-width: 768px) 45vw, calc(100vw - 32px)',
      alt: 'עמית יפרגן, מאמן כושר, בחדר הכושר',
      width: 960,
      height: 1707,
    },
  },
  audience: {
    title: 'למי הליווי מתאים?',
    items: [
      'למי שרוצה לעשות שינוי ומחפש מסגרת שתעזור לו להתמיד',
      'למי שרוצה להתחזק ולהרגיש נוח יותר בגוף שלו',
      'לנשים ולגברים שרוצים להתחטב ולהפחית אחוזי שומן',
      'למי שרוצה לבנות מסת שריר ולהתקדם בכושר',
      'למי שמחפש דרך לשלב אימונים ותזונה בתוך השגרה',
      'למי שחשוב לו לקבל מענה אישי ולדעת מה עושים בכל שלב',
    ],
  },
  problem: {
    title: 'יש מקום גם למטרות שלכם וגם לחיים',
    paragraphs: [
      'עבודה, לימודים, ארוחות בחוץ ושבועות עמוסים — התוכנית צריכה לקחת בחשבון גם את כל אלה.',
      'נבנה יחד שגרת אימונים ואכילה שמתאימה לכם. וכשמשהו לא מסתדר, נבדוק מה צריך לשנות כדי שתוכלו להמשיך.',
    ],
  },
  features: {
    title: 'מה יעזור לכם להתמיד',
    items: [
      { icon: 'training', text: 'אימונים שמתאימים לרמה שלכם ולזמן שיש לכם במהלך השבוע' },
      { icon: 'nutrition', text: 'תפריט שמביא בחשבון גם את המאכלים שאתם אוהבים' },
      { icon: 'progress', text: 'קשר ישיר איתי לשאלות, להתלבטויות ולימים שפחות מסתדרים' },
      { icon: 'adjust', text: 'בדיקה של ההתקדמות והתאמות לאורך הדרך, לפי הצורך' },
    ],
  },
  results: {
    title: 'לפני ואחרי',
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
    ],
  },
  coachingProcess: {
    title: 'איך הליווי עובד',
    items: [
      { title: 'שאלון אישי', text: 'אתם מספרים לי על השגרה, הניסיון והמטרות שלכם. זה הבסיס לתוכנית שאבנה עבורכם.' },
      { title: 'משתמש אישי באפליקציה', text: 'תקבלו משתמש אישי לאפליקציה. שם תמצאו את התוכניות שלכם ותוכלו לעקוב איתי אחרי ההתקדמות.' },
      { title: 'תפריט אישי', text: 'אני בונה לכם תפריט בהתאם למטרה, לשגרה ולהעדפות האוכל שלכם.' },
      { title: 'תוכנית אימונים והדרכה', text: 'אני מתאים לכם תוכנית לפי הרמה והמטרה שלכם, עם הדרכה אישית כדי שתדעו איך לבצע אותה.' },
      { title: 'פגישה אישית בכל חודש', text: 'אחת לחודש נפגשים באופן אישי, בודקים את ההתקדמות ומתמקדים במה שחשוב למטרה שלכם.' },
      { title: 'ליווי ומעקב לאורך הדרך', text: 'אני מלווה אתכם לאורך התוכנית, עוקב אחרי ההתקדמות ועושה התאמות כשצריך.' },
    ],
  },
  process: {
    title: 'איך מתחילים?',
    items: [
      { title: 'שולחים הודעה בוואטסאפ', text: 'כתבו לי מה תרצו להשיג ומה חשוב לכם בליווי.' },
      { title: 'משוחחים ומבינים מה מתאים', text: 'נדבר על השגרה והניסיון שלכם ונבדוק אם הליווי מתאים לכם.' },
      { title: 'יוצאים לדרך עם תוכנית אישית', text: 'אחרי ההצטרפות נכיר אתכם לעומק דרך השאלון ונתחיל לבנות את התוכנית שלכם.' },
    ],
  },
  benefits: {
    title: 'ליווי ישיר, בלי לאבד את הדרך',
    text: 'אני עמית יפרגן. ליוויתי מעל 90 מתאמנים, ואני לומד וחוקר את תחום הכושר כבר עשור. חשוב לי שתדעו שיש לכם למי לפנות כשעולה שאלה או כשמשהו לא מסתדר. אפשר לכתוב לי לאורך היום, וביחד נבדוק איך להתקדם. את תוכניות האימון והתזונה ואת המעקב תמצאו באפליקציה.',
    proofPoints: [
      { value: '90+', label: 'מתאמנים שליוויתי' },
      { value: '10 שנים', label: 'לומד וחוקר את תחום הכושר' },
      { value: 'לאורך היום', label: 'זמינות לשאלות ולקשר ישיר' },
    ],
    motivation: 'לא כל שבוע ייראה אותו דבר, וזה בסדר. גם בשבוע עמוס נבדוק יחד מה אפשר לעשות.',
  },
  // These sections are omitted until genuine testimonials / FAQ are supplied.
  // Testimonials: { text, name? } OR { image: { src, alt, width, height } }.
  testimonials: { title: 'המלצות לקוחות', items: [] },
  // FAQ entries: { question, answer }.
  faq: { title: 'שאלות נפוצות', items: [] },
  cta: {
    title: 'בואו נדבר על מה שמתאים לכם',
    text: 'יש לכם מטרה, או שאתם עדיין לא בטוחים מאיפה להתחיל? כתבו לי בוואטסאפ. נשוחח על מה שאתם מחפשים ואסביר איך הליווי עובד.',
    button: 'לשיחת היכרות בוואטסאפ',
  },
  // Only supplied contact details should be added. Each link: { label, href }.
  footer: { text: '', links: [{ label: 'וואטסאפ לעמית יפרגן', href: 'https://wa.me/972533352635' }, { label: 'טלפון: 053-335-2635', href: 'tel:+972533352635' }] },
};
