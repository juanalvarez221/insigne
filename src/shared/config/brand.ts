/** Marca y contacto — Insigne Corpus / Leandro */
export const BRAND_ASSETS = {
  instagramIcon: "/brand/instagram-orange.png",
  whatsappIcon: "/brand/whatsapp-orange.png",
} as const;

export const BRAND = {
  name: "INSIGNE CORPUS",
  shortName: "Insigne",
  artist: "Leandro",
  tagline: "Realismo · Black & Grey",
  studio: "Insigne Corpus Tattoo",
  location: "Itagüí, Antioquia · Área metropolitana de Medellín",
  instagram: {
    handle: "leandrobxu",
    url: "https://www.instagram.com/leandrobxu/",
  },
  whatsapp: {
    phone: "573104798643",
    quoteMessage: "Hola Leandro, quiero cotizar una idea en Insigne Corpus.",
    thanksMessage: "Hola Leandro, acabo de enviar mi solicitud en Insigne Corpus.",
  },
} as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${BRAND.whatsapp.phone}?text=${encodeURIComponent(message)}`;
}
