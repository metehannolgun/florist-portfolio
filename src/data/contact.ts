export const contactInfo = {
  phoneDisplay: "+90 212 000 00 00",
  phoneHref: "tel:+902120000000",

  whatsappNumber: "905550000000",
  whatsappMessage:
    "Merhaba, çiçek siparişi hakkında bilgi almak istiyorum.",

  email: "hello@floraatelier.com",

  address: {
    street: "Moda Caddesi No: 24",
    district: "Kadıköy, İstanbul",
  },

  workingHours: [
    {
      day: "Pazartesi–Cuma",
      hours: "09.00–19.00",
    },
    {
      day: "Cumartesi",
      hours: "10.00–18.00",
    },
    {
      day: "Pazar",
      hours: "Kapalı",
    },
  ],

  mapEmbedUrl:
    "https://www.google.com/maps?q=Moda%20Kad%C4%B1k%C3%B6y%20%C4%B0stanbul&output=embed",
} as const;

export const whatsappUrl =
  `https://wa.me/${contactInfo.whatsappNumber}` +
  `?text=${encodeURIComponent(contactInfo.whatsappMessage)}`;