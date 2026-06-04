/**
 * Configuration centrale du site VH Multiservices.
 * Modifiez ces valeurs pour mettre à jour les coordonnées, chiffres clés, etc.
 */

export const siteConfig = {
  name: "VH Multiservices",
  legalForm: "SARL",
  manager: "Victorine HAIDARA",
  managerTitle: "Directrice Gérante",
  slogan: "Votre vision, notre mission",
  phoneDisplay: "+225 01 04 74 55 55",
  phoneRaw: "+2250104745555",
  whatsapp: "2250104745555",
  whatsappMessage:
    "Bonjour VH Multiservices, je souhaite obtenir des informations sur vos prestations.",
  email: "contact@vhmultiservices.ci",
  address: "Abidjan, Côte d'Ivoire",
  country: "Côte d'Ivoire",
  url: "https://www.vhmultiservices.ci",
  description:
    "VH Multiservices accompagne particuliers et entreprises avec des services professionnels de maintenance, nettoyage, commerce général et prestations diverses en Côte d'Ivoire.",
  social: {
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
  },
} as const;

export function whatsappLink() {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;
}
