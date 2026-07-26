import type {NavigationItem} from "@/types"
import type { Category } from "@/types/index";

export const navigationItems: NavigationItem[] = [
{  
    label: "Ana Sayfa",
    href: "/"
},
{
    label: "Koleksiyon",
    href: "/#collection",

},
{
    label: "Hakkımızda",
    href: "/#about"
},
{
    label: "İletişim",
    href: "/contact",
},
];

export const categories: Category[] = [
    {
    title: "Özel Buketler",
    description: "Her duyguyu anlatan, mevsim çiçekleriyle hazırlanan buketler.",
    href: "/contact",
    image: "/images/categories/bouquets.jpg",
    imageAlt: "Pastel tonlarda mevsim çiçeklerinden hazırlanmış buket",
  },
  {
    title: "Özel Tasarımlar",
    description: "Kutlamalar ve unutulmaz anlar için hazırlanan aranjmanlar.",
    href: "/contact",
    image: "/images/categories/arrangements.jpg",
    imageAlt: "Özel bir kutlama için hazırlanmış çiçek aranjmanı",
  },
  {
    title: "Yeşil Bitkiler",
    description: "Yaşam alanlarına doğallık ve sakinlik katan seçkin bitkiler.",
    href: "/contact",
    image: "/images/categories/plants.jpg",
    imageAlt: "Dekoratif saksılarda sergilenen yeşil salon bitkileri",
  },

]
