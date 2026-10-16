// All marketing copy below comes from the supplied Hebrew copy and brief.
// Bracketed text marks content that has not been supplied. Replace it here.
// Image paths are relative to public/, e.g. /images/hero.webp.
// Images: { src, alt, width, height, srcSet?, sizes? }.
export const content = {
  brand: '[שם המאמן / לוגו]',
  logo: null,
  hero: {
    title: 'הגיע הזמן להרגיש טוב יותר בגוף שלכם',
    titleLines: ['הגיע הזמן', 'להרגיש טוב יותר', 'בגוף שלכם'],
    subtitle: 'משקיעים ומתאמצים — אבל עדיין לא מרגישים בנוח בגוף שלכם?',
    description: 'תהליך חיטוב לנשים ולגברים שרוצים להתקדם בדרך שמתאימה לחיים שלהם — בלי דיאטות קיצוניות, בלי לוותר על כל מה שאוהבים ובלי להתחיל מחדש בכל יום ראשון.',
    cta: 'בואו נדבר על המטרה שלכם',
    image: {
      src: '/images/coach-960.webp',
      srcSet: '/images/coach-480.webp 480w, /images/coach-960.webp 960w, /images/coach-1440.webp 1440w',
      sizes: '(min-width: 1280px) 487px, (min-width: 768px) 45vw, calc(100vw - 32px)',
      alt: 'התמונה האישית של המאמן בחדר הכושר',
      width: 960,
      height: 1707,
    },
  },
  audience: {
    title: 'למי התוכנית שלנו מתאימה?',
    items: [
      'לאנשים רציניים שרוצים לעשות שינוי באורח החיים',
      'למי שרוצה להרגיש טוב יותר, להתחזק ולהרגיש בטוח יותר בגוף שלו',
      'לנשים ולגברים שרוצים להתחטב ולהוריד אחוזי שומן',
      'למי שרוצה לבנות מסת שריר ולהתקדם בכושר',
      'למי שמחפש תוכנית אימונים ותזונה שמתאימה לשגרה שלו',
      'למי שרוצה ליווי אישי, מעקב מסודר וקשר ישיר עם המאמן',
    ],
  },
  problem: {
    title: 'לא צריך לבחור בין מטרה לחיים עצמם',
    paragraphs: [
      'כדי להתקדם, לא חייבים להפוך כל ארוחה לחישוב או לבנות את כל השבוע סביב אימונים.',
      'אפשר לעבוד עם הרגלים ותוכנית שמתאימים לשגרה שלכם, ולבנות התקדמות שאפשר להתמיד בה לאורך זמן.',
    ],
  },
  features: {
    title: 'כל התהליך, מסודר במקום אחד',
    items: [
      { icon: 'training', text: 'תוכנית אימונים מותאמת לרמה וללוח הזמנים שלכם' },
      { icon: 'nutrition', text: 'הכוונה תזונתית שתשתלב בשגרה ובהעדפות שלכם' },
      { icon: 'progress', text: 'תוכנית האימון ותוכנית התזונה מופיעות באפליקציית המעקב' },
      { icon: 'adjust', text: 'מעקב ישיר ומסודר בין המאמן למתאמן, כשהמידע על התהליך מרוכז במקום אחד' },
      { icon: 'progress', text: 'ליווי לאורך הדרך — יד ביד, בהתאם לתוכנית' },
      { icon: 'adjust', text: 'התאמות שיעזרו לכם להמשיך גם כשהשבוע לא הולך בדיוק לפי התוכנית' },
      { icon: 'progress', text: 'זמינות לאורך היום לשאלות ולקשר ישיר עם המאמן' },
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
        id: 'waterfall-mirror',
        before: { src: '', sourceFile: '5bb2b4e7-b66f-4321-a29c-201f346bfc17.JPG', alt: 'לפני — התמונה ליד המפל' },
        after: { src: '', sourceFile: '8f717d5b-c050-4215-b64f-1f43bb968fb7.JPG', alt: 'אחרי — צילום מול המראה' },
      },
      {
        id: 'black-shirt-back',
        before: { src: '', sourceFile: 'A8DA48C1-9239-4A2A-943D-80B39B85E5E9.JPG', alt: 'לפני — התמונה עם החולצה השחורה' },
        after: { src: '', sourceFile: '00d9c726-c5a6-41da-95be-6a7551f9cf69.JPG', alt: 'אחרי — צילום הגב ללא חולצה' },
      },
      {
        id: 'drink-pink-shorts',
        before: { src: '/images/ad57073f-9d63-4bc7-8afc-f1b5b4256f61.jpg', sourceFile: 'ad57073f-9d63-4bc7-8afc-f1b5b4256f61.JPG', alt: 'לפני — התמונה עם הכוס', width: 645, height: 1400 },
        after: { src: '/images/1ced7f39-eb5f-4e2f-9b65-4c5f0cea92cc.jpg', sourceFile: '1ced7f39-eb5f-4e2f-9b65-4c5f0cea92cc.JPG', alt: 'אחרי — התמונה עם המכנס הוורוד', width: 659, height: 973 },
      },
      {
        id: 'outdoor-mirror',
        before: { src: '', sourceFile: '05b69454-02fd-4d81-9b67-9a93786f80ce.JPG', alt: 'לפני — התמונה בחוץ ליד הקיר' },
        after: { src: '', sourceFile: 'b91f328c-0ebb-4bdc-a4d4-c19b65d3a047.JPG', alt: 'אחרי — צילום בחדר הכושר מול המראה' },
      },
    ],
  },
  process: {
    title: 'איך מתחילים?',
    items: [
      { title: 'משאירים פרטים', text: 'ספרו לנו בקצרה מה המטרה שלכם.' },
      { title: 'משוחחים ומבינים מה מתאים', text: 'נכיר את השגרה שלכם, הניסיון הקודם והדברים שחשובים לכם.' },
      { title: 'יוצאים לדרך עם תוכנית אישית', text: 'מתחילים בצעדים ברורים, ומתקדמים יחד בהתאם לתהליך.' },
    ],
  },
  benefits: {
    title: 'ליווי ישיר, בלי לאבד את הדרך',
    text: 'עברו אצלי עשרות מתאמנים, ואני חוקר את תחום הכושר כבר עשור. הזמינות שלכם חשובה לי במיוחד — אפשר לפנות אליי לאורך היום עם שאלות ולקבל ליווי אישי. תוכנית האימון, התזונה והמעקב הישיר מרוכזים באפליקציה, כדי שהכול יהיה מסודר ונגיש.',
    proofPoints: [
      { value: 'עשרות', label: 'מתאמנים שליוויתי' },
      { value: '10 שנים', label: 'לומד וחוקר את תחום הכושר' },
      { value: 'לאורך היום', label: 'זמינות לשאלות ולקשר ישיר' },
    ],
    motivation: 'לא צריך לחכות ליום מושלם כדי להתחיל. צעד קטן היום, התמדה מחר, וביחד בונים שינוי שנשאר.',
  },
  // These sections are omitted until genuine testimonials / FAQ are supplied.
  // Testimonials: { text, name? } OR { image: { src, alt, width, height } }.
  testimonials: { title: 'המלצות לקוחות', items: [] },
  // FAQ entries: { question, answer }.
  faq: { title: 'שאלות נפוצות', items: [] },
  cta: {
    title: 'מחפש אנשים רציניים לתהליך',
    text: 'אם אתם רוצים להצליח ומוכנים להתמיד ולעבוד יחד, נלך יד ביד. תוכנית האימון והתזונה יופיעו באפליקציית המעקב, והמעקב הישיר בינינו ישמור על התהליך מסודר.',
    button: 'אני רוצה להתחיל',
  },
  form: {
    title: 'בואו נדבר על המטרה שלכם',
    fields: { name: 'שם מלא', phone: 'טלפון', goal: 'מטרה' },
    button: 'אני רוצה להתחיל',
    note: 'הפרטים שתשאירו ישמשו ליצירת קשר חוזר, ויישלחו אליי בדוא״ל. השארת הפרטים אינה מחייבת.',
    // Functional messages are placeholders, ready for the supplied final copy.
    messages: {
      invalidName: '[יש למלא שם מלא]',
      invalidPhone: '[יש להזין מספר טלפון תקין]',
      invalidGoal: '[יש למלא מטרה]',
      notConnected: 'הטופס כרגע אינו מחובר. אפשר לפנות אליי ישירות באינסטגרם.',
      pending: 'שולח…',
      success: 'הפרטים התקבלו. אחזור אליכם בהקדם.',
      error: 'השליחה לא הצליחה. נסו שוב בעוד רגע.',
    },
  },
  // Only supplied contact details should be added. Each link: { label, href }.
  footer: { text: '', links: [] },
};
