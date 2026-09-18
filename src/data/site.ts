export const brand = {
  name: "Caminho do Bem",
  legalName: "Projeto Social Caminho do Bem",
  tagline: "Projeto Social Caminho do Bem",
  foundedYear: 2012,
  phoneDisplay: ["(51) 99924-7503", "(51) 98546-2095", "(51) 99158-3420", "(51) 99667-2314"],
  phoneWhatsapp: "5551999247503",
  facebook: "https://www.facebook.com/ProjetoSocialCaminhodoBem",
  instagram: "https://instagram.com/caminhodobemofc",
  linkedin: "https://www.linkedin.com/company/caminhodobem",
  contacts: [
    { name: "Thaís Guedes", role: "Presidente", phone: "(51) 999247503", whatsapp: "5551999247503" },
    { name: "Gilmar Roza", role: "Assistente Social", phone: "(51) 985462095" },
    { name: "Luana Fernandes", role: "Coordenadora Bagé", phone: "(51) 991583420" },
    { name: "Carmem Freitas", role: "Coordenadora Mathias Velho", phone: "(51) 996672314" },
  ],
  address: {
    street: "Avenida Dezessete de Abril, 100",
    extra: "Setor 6, Bairro Guajuviras",
    city: "Canoas",
    state: "RS",
    cep: "92415-000",
  },
} as const;

export function toWhatsAppHref(phone: string) {
  const digits = phone.replace(/\D/g, "");
  const withCountry = digits.startsWith("55") ? digits : `55${digits}`;
  return `https://wa.me/${withCountry}`;
}
