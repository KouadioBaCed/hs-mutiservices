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
  phoneDisplay2: "+225 05 74 92 83 42",
  phoneRaw2: "+2250574928342",
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
    facebook: "https://www.facebook.com/share/1Cq1bDDoqe/?mibextid=wwXIfr",
    linkedin: "https://www.linkedin.com/in/victorine-haidara-59b85a112?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    instagram: "https://www.instagram.com/victoire_haidara?utm_source=qr",
  },
} as const;

export function whatsappLink() {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;
}
