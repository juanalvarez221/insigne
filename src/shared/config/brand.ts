/** Marca y contacto — Insigne Corpus / Leandro */
export const BRAND = {
  name: "INSIGNE CORPUS",
  shortName: "Insigne",
  artist: "Leandro",
  tagline: "Tattoo Artist Profesional",
  studio: "Insigne Corpus Studio",
  location: "Medellín, Colombia",
  instagram: {
    handle: "insigne_corpus",
    url: "https://www.instagram.com/insigne_corpus/",
  },
  whatsapp: {
    phone: "573104798643",
    quoteMessage: "Hola Insigne, quiero continuar mi cotizacion.",
    thanksMessage: "Hola Insigne, quiero seguir con mi proceso.",
  },
} as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${BRAND.whatsapp.phone}?text=${encodeURIComponent(message)}`;
}
