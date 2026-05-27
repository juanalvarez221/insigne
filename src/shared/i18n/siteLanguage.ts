"use client";

export type SiteLanguage = "es" | "en";

export const LANGUAGE_STORAGE_KEY = "insigne.language";

export const SITE_COPY = {
  es: {
    languageTitle: "Elige tu idioma",
    languageSubtitle: "Quiero que vivas la experiencia en tu idioma.",
    languageEs: "Español",
    languageEn: "English",
    wordmarkEyebrow: "Tattoo · Cultura motera",
    wordmarkOrnament: "Motos",
    heroSubtitle: "Tatuaje profesional para quien vive la ruta",
    heroMotoLine:
      "Si las motos son tu pasion, aqui encontraras a alguien que habla tu mismo idioma: motor, libertad y tinta con alma.",
    heroCta: "Quiero cotizar mi diseño",
    heroScroll: "Desliza hacia abajo",
    identityTag: "Cultura motera",
    identityTitle: "Tinta con alma de motor",
    identityP1:
      "Soy Leandro, de Insigne Corpus. Tatuador y apasionado por las motos. Entiendo la ruta, la maquina y lo que representa llevarla en la piel.",
    identityP2:
      "Si compartes esa pasion, trabajamos distinto: tu historia en el asfalto, tu estilo y los simbolos que te definen se convierten en una pieza unica.",
    identityP3:
      "Desde motos custom hasta iconografia de la cultura biker, cada diseno nace con tecnica limpia, composicion precisa y una estetica que se siente autentica.",
    identityCard1Title: "Pasión motera",
    identityCard1Body:
      "Conecto contigo desde la cultura de la ruta: respeto, actitud y amor por las maquinas.",
    identityCard2Title: "Tu historia",
    identityCard2Body:
      "Cada viaje, cada motor y cada simbolo cuenta algo; lo llevamos a un diseno con sentido.",
    identityCard3Title: "Arte en la piel",
    identityCard3Body:
      "Piezas con fuerza, caracter y lectura profesional para quien vive el asfalto.",
    introPhoto1Title: "Vida en dos ruedas",
    introPhoto1Caption:
      "La misma energia de la ruta: actitud, estilo y presencia autentica.",
    introPhoto2Title: "Oficio en el estudio",
    introPhoto2Caption:
      "Donde la pasion por las motos se encuentra con el tatuaje profesional.",
    projectsTag: "Portafolio en movimiento",
    projectsTitle: "Para los apasionados por las motos",
    projectsBody:
      "Aqui ves piezas con identidad motera: composicion, tecnica y caracter para quien vive la cultura de las dos ruedas.",
    projectsCtaTag: "Carta de presentacion",
    projectsCtaTitle: "Si las motos son tu mundo, creemos tu proxima pieza",
    projectsCtaBody:
      "Te entrego una cotizacion clara, creativa y pensada para tu idea motera.",
    projectsCta1: "Cotizar mi proyecto",
    projectsCta2: "Hablar conmigo",
    quoteGreeting: "Hola, {name}. Vamos a darle forma a tu idea.",
    quoteContactStep: "Primer paso",
    quoteContactTitle: "Cuentame",
    quoteContactTitle2: "quien eres",
    quoteContactBody: "Solo lo justo para prepararte una propuesta a tu medida.",
    quoteContactCard: "Datos de contacto",
    quoteContinue: "Continuar",
    quoteSizeStep: "Paso 1 de 4",
    quoteSizeTitle: "Dime",
    quoteSizeTitle2: "el tamano ideal",
    quoteSizeBody: "Con esto te doy una estimacion clara de sesiones e inversion.",
    quoteLocationStep: "Paso 2 de 4",
    quoteLocationTitle: "Muestrame",
    quoteLocationTitle2: "la zona",
    quoteLocationBody: "Asi ajusto tecnica, detalle y tiempo para tu pieza.",
    quoteStyleStep: "Paso 3 de 4",
    quoteStyleTitle: "Elijamos",
    quoteStyleTitle2: "tu estilo",
    quoteStyleBody: "Elige el estilo que mas conecte contigo.",
    quoteReferenceStep: "Paso 4 de 4",
    quoteReferenceTitle: "Comparte",
    quoteReferenceTitle2: "referencias",
    quoteReferenceBody: "Si tienes imagenes, subelas y afinamos la idea juntos.",
    quoteReferenceUpload: "Subir referencia",
    quoteReferenceNoteLabel: "Observacion opcional",
    quoteReferenceNotePlaceholder:
      "Ej: quiero una moto custom, estilo old school y sombras profundas.",
    quoteReferenceNoteHelp: "Si quieres, cuentame un detalle clave para orientar mejor la propuesta.",
    quoteReferenceNext: "Revisar cotizacion",
    quoteSummaryTag: "Mi estimado inicial",
    quoteSummaryTitle: "Esto es lo que proyecte para tu pieza",
    quoteSummaryBody:
      "Te comparto un estimado profesional para orientarte. La cotizacion oficial final te la envio yo, Leandro, despues de revisar cada detalle.",
    quoteActionTitle: "Sigamos con tu propuesta oficial",
    quoteActionBody:
      "Si te hace sentido este estimado, activa el proceso y en las proximas horas te envio por WhatsApp mi propuesta oficial, clara y ajustada a tu proyecto.",
    quoteActionCta: "Quiero recibir mi propuesta oficial",
    quoteActionReply: "Este valor es estimado y puede ajustarse en la propuesta oficial.",
    quoteNotesLabel: "Observacion",
    quoteTalkWhatsapp: "Hablar por WhatsApp",
    quoteThanksTag: "Gracias por confiar",
    quoteThanksTitle: "Recibi tu solicitud y ya la estoy preparando",
    quoteThanksBody:
      "Gracias por confiar en mi trabajo. En las proximas horas te envio por WhatsApp mi cotizacion oficial, presentada con el enfoque de tu idea.",
    quoteThanksInstagramCta: "Seguir a Insigne en Instagram",
    quoteThanksNewQuoteCta: "Realizar otra cotizacion",
    quoteThanksWhatsappCta: "Escribirme por WhatsApp",
    quoteThanksDataSaved: "Tus datos basicos quedan guardados para que la siguiente cotizacion sea mas rapida.",
    commonBack: "Anterior",
  },
  en: {
    languageTitle: "Choose your language",
    languageSubtitle: "I want you to experience this in your language.",
    languageEs: "Spanish",
    languageEn: "English",
    wordmarkEyebrow: "Tattoo · Moto culture",
    wordmarkOrnament: "Riders",
    heroSubtitle: "Professional tattoo for the open road",
    heroMotoLine:
      "If motorcycles are your passion, you are in the right place: engines, freedom, and ink with real soul.",
    heroCta: "I want to quote my design",
    heroScroll: "Scroll down",
    identityTag: "Moto culture",
    identityTitle: "Ink with engine soul",
    identityP1:
      "I am Leandro, from Insigne Corpus. Tattoo artist and motorcycle enthusiast. I understand the road, the machine, and what it means to wear it on your skin.",
    identityP2:
      "If you share that passion, we work differently: your story on the asphalt, your style, and your symbols become a one-of-a-kind piece.",
    identityP3:
      "From custom bikes to biker iconography, every design is built with clean technique, precise composition, and an authentic aesthetic.",
    identityCard1Title: "Moto passion",
    identityCard1Body:
      "I connect with you through road culture: respect, attitude, and love for the machine.",
    identityCard2Title: "Your story",
    identityCard2Body:
      "Every ride, every engine, and every symbol means something; we turn it into meaningful ink.",
    identityCard3Title: "Skin art",
    identityCard3Body:
      "Bold pieces with character and professional readability for those who live the asphalt.",
    introPhoto1Title: "Life on two wheels",
    introPhoto1Caption:
      "The same road energy: attitude, style, and authentic presence.",
    introPhoto2Title: "Craft in the studio",
    introPhoto2Caption:
      "Where motorcycle passion meets professional tattooing.",
    projectsTag: "Portfolio in motion",
    projectsTitle: "For motorcycle enthusiasts",
    projectsBody:
      "Real pieces with moto identity: composition, technique, and character for two-wheel culture.",
    projectsCtaTag: "Presentation letter",
    projectsCtaTitle: "If bikes are your world, let's build your next piece",
    projectsCtaBody: "I'll give you a clear, creative quote tailored to your moto idea.",
    projectsCta1: "Quote my project",
    projectsCta2: "Talk to me",
    quoteGreeting: "Hi, {name}. Let's shape your idea.",
    quoteContactStep: "First step",
    quoteContactTitle: "Tell me",
    quoteContactTitle2: "who you are",
    quoteContactBody: "Just what I need to build a tailored proposal.",
    quoteContactCard: "Contact details",
    quoteContinue: "Continue",
    quoteSizeStep: "Step 1 of 4",
    quoteSizeTitle: "Tell me",
    quoteSizeTitle2: "the ideal size",
    quoteSizeBody: "This gives you a clear estimate of sessions and budget.",
    quoteLocationStep: "Step 2 of 4",
    quoteLocationTitle: "Show me",
    quoteLocationTitle2: "the area",
    quoteLocationBody: "This helps me fine-tune technique, detail, and timing.",
    quoteStyleStep: "Step 3 of 4",
    quoteStyleTitle: "Let's choose",
    quoteStyleTitle2: "your style",
    quoteStyleBody: "Pick the style that best matches your idea.",
    quoteReferenceStep: "Step 4 of 4",
    quoteReferenceTitle: "Share",
    quoteReferenceTitle2: "references",
    quoteReferenceBody: "If you have images, upload them and we'll refine it together.",
    quoteReferenceUpload: "Upload reference",
    quoteReferenceNoteLabel: "Optional note",
    quoteReferenceNotePlaceholder:
      "Ex: I want a custom bike piece, old-school style, and deep shadows.",
    quoteReferenceNoteHelp: "If you want, share one key detail to guide the proposal better.",
    quoteReferenceNext: "Review quote",
    quoteSummaryTag: "My initial estimate",
    quoteSummaryTitle: "This is my projection for your piece",
    quoteSummaryBody:
      "I am sharing a professional estimate to guide you. Your final official quote will be sent by me, Leandro, after I review the full detail.",
    quoteActionTitle: "Let's move to your official proposal",
    quoteActionBody:
      "If this estimate feels right to you, activate the process and within the next few hours I will send your official WhatsApp proposal, fully tailored to your project.",
    quoteActionCta: "I want my official proposal",
    quoteActionReply: "This value is estimated and may be adjusted in the official proposal.",
    quoteNotesLabel: "Note",
    quoteTalkWhatsapp: "Talk on WhatsApp",
    quoteThanksTag: "Thanks for trusting",
    quoteThanksTitle: "I received your request and I am preparing it",
    quoteThanksBody:
      "Thank you for trusting my work. In the next few hours, I will send your official quote to your WhatsApp with your project's direction.",
    quoteThanksInstagramCta: "Follow Insigne on Instagram",
    quoteThanksNewQuoteCta: "Create another quote",
    quoteThanksWhatsappCta: "Message me on WhatsApp",
    quoteThanksDataSaved: "Your basic details are saved so your next quote is faster.",
    commonBack: "Back",
  },
} as const;

export type SiteCopyKey = keyof (typeof SITE_COPY)["es"];

export function detectLanguage(): SiteLanguage {
  if (typeof window === "undefined") return "es";
  const lang = window.navigator.language.toLowerCase();
  return lang.startsWith("en") ? "en" : "es";
}
