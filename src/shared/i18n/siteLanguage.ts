"use client";

export type SiteLanguage = "es" | "en";

export const LANGUAGE_STORAGE_KEY = "insigne.language";

export const SITE_COPY = {
  es: {
    languageTitle: "Elige tu idioma",
    languageSubtitle: "Quiero que vivas la experiencia en tu idioma.",
    languageEs: "Español",
    languageEn: "English",
    wordmarkEyebrow: "Arte corporal · Precision",
    wordmarkOrnament: "Insigne",
    heroSubtitle: "Tatuaje de autor para la cultura del motor",
    heroMotoLine:
      "Creo piezas con mirada editorial: composicion cuidada, tecnica impecable y una conexion real con quien vive las motos como estilo de vida.",
    heroCta: "Quiero cotizar mi diseño",
    heroScroll: "Desliza hacia abajo",
    identityTag: "Manifiesto",
    identityTitle: "Arte, oficio y pasion por el motor",
    identityP1:
      "Soy Leandro, artista de Insigne Corpus. Uno mi disciplina de estudio con una vida ligada a las motos para crear tatuajes con identidad, elegancia y permanencia.",
    identityP2:
      "Cada proyecto es un proceso curado: conceptualizacion, equilibrio visual y una ejecucion que honra tu historia sin recurrir a cliches.",
    identityP3:
      "Desde retratos mecanicos hasta simbologia motera refinada, cada pieza se construye con criterio artistico y estandares profesionales.",
    identityCard1Title: "Vision creativa",
    identityCard1Body:
      "Conceptos con personalidad propia, pensados para envejecer con solidez y lectura clara.",
    identityCard2Title: "Lenguaje del motor",
    identityCard2Body:
      "Comprendo la estetica, la maquina y el significado detras de cada referencia que traes.",
    identityCard3Title: "Excelencia tecnica",
    identityCard3Body:
      "Trazo firme, sombras controladas y acabados de nivel profesional en cada sesion.",
    introPhoto1Alt: "Leandro en retrato editorial con motocicleta",
    introPhoto1Title: "Retrato editorial",
    introPhoto1Caption:
      "Luz natural, presencia serena y la misma exigencia estetica que aplico en cada diseno.",
    introPhoto2Alt: "Leandro tatuando en Insigne Corpus Studio",
    introPhoto2Title: "Proceso en estudio",
    introPhoto2Caption:
      "Enfoque absoluto, ritual de trabajo y respeto por cada detalle de tu pieza.",
    projectsTag: "Portafolio",
    projectsTitle: "Obra en movimiento",
    projectsBody:
      "Una seleccion de procesos y resultados donde narrativa visual, contraste y caracter conviven con criterio profesional.",
    projectsPill1: "Direccion artistica",
    projectsPill2: "Propuesta personalizada",
    projectsPill3: "Seguimiento profesional",
    projectsCtaTag: "Siguiente paso",
    projectsCtaTitle: "Construyamos tu proxima pieza",
    projectsCtaBody:
      "Recibe una cotizacion clara, con vision creativa y enfoque profesional desde el primer contacto.",
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
      "Ej: moto custom en blackwork, composicion vertical y sombras suaves.",
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
    carouselPrev: "Anterior",
    carouselNext: "Siguiente",
    carouselPause: "Pausar carrusel",
    carouselPlay: "Reproducir carrusel",
    carouselSlide: "Elemento {n} de {total}",
    carouselHint: "Arrastra o usa las flechas",
  },
  en: {
    languageTitle: "Choose your language",
    languageSubtitle: "I want you to experience this in your language.",
    languageEs: "Spanish",
    languageEn: "English",
    wordmarkEyebrow: "Body art · Precision",
    wordmarkOrnament: "Insigne",
    heroSubtitle: "Author tattoo for motorcycle culture",
    heroMotoLine:
      "I create pieces with an editorial eye: refined composition, flawless technique, and a genuine bond with those who live motorcycles as a lifestyle.",
    heroCta: "I want to quote my design",
    heroScroll: "Scroll down",
    identityTag: "Manifesto",
    identityTitle: "Art, craft, and engine passion",
    identityP1:
      "I am Leandro, artist at Insigne Corpus. I merge studio discipline with a life around motorcycles to create tattoos with identity, elegance, and longevity.",
    identityP2:
      "Every project is a curated process: concept development, visual balance, and execution that honors your story without relying on cliches.",
    identityP3:
      "From mechanical portraits to refined moto symbolism, each piece is built with artistic criteria and professional standards.",
    identityCard1Title: "Creative vision",
    identityCard1Body:
      "Concepts with a distinct voice, designed to age with strength and clarity.",
    identityCard2Title: "Engine language",
    identityCard2Body:
      "I understand the aesthetics, the machine, and the meaning behind every reference you bring.",
    identityCard3Title: "Technical excellence",
    identityCard3Body:
      "Confident linework, controlled shading, and professional finishes in every session.",
    introPhoto1Alt: "Leandro editorial portrait with motorcycle",
    introPhoto1Title: "Editorial portrait",
    introPhoto1Caption:
      "Natural light, calm presence, and the same aesthetic rigor I bring to every design.",
    introPhoto2Alt: "Leandro tattooing at Insigne Corpus Studio",
    introPhoto2Title: "Studio process",
    introPhoto2Caption:
      "Absolute focus, work ritual, and respect for every detail of your piece.",
    projectsTag: "Portfolio",
    projectsTitle: "Work in motion",
    projectsBody:
      "A selection of processes and results where visual narrative, contrast, and character meet professional standards.",
    projectsPill1: "Art direction",
    projectsPill2: "Tailored proposal",
    projectsPill3: "Professional follow-up",
    projectsCtaTag: "Next step",
    projectsCtaTitle: "Let's build your next piece",
    projectsCtaBody:
      "Receive a clear quote with creative vision and professional focus from the first contact.",
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
      "Ex: custom bike in blackwork, vertical composition, and soft shading.",
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
    carouselPrev: "Previous",
    carouselNext: "Next",
    carouselPause: "Pause carousel",
    carouselPlay: "Play carousel",
    carouselSlide: "Item {n} of {total}",
    carouselHint: "Drag or use arrows",
  },
} as const;

export type SiteCopyKey = keyof (typeof SITE_COPY)["es"];

export function detectLanguage(): SiteLanguage {
  if (typeof window === "undefined") return "es";
  const lang = window.navigator.language.toLowerCase();
  return lang.startsWith("en") ? "en" : "es";
}
