import Image from "next/image";
import { Container } from "@/components/ui/Container";

const socialImages = [
  {
    src: "/images/products/powder-garden.jpg",
    alt: "Pastel tonlarda hazırlanmış mevsim buketi",
  },
  {
    src: "/images/about/flora-atelier.jpg",
    alt: "Çiçek atölyesinde buket hazırlama süreci",
  },
  {
    src: "/images/products/minimal-orchid.jpg",
    alt: "Minimal seramik saksıda beyaz orkide",
  },
  {
    src: "/images/categories/arrangements.jpg",
    alt: "Özel gün için hazırlanmış çiçek aranjmanı",
  },
];

export function SocialSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="mb-10 flex flex-col gap-6 sm:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Atölyeden kareler
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Flora&apos;nın dünyasını keşfedin.
            </h2>
          </div>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 w-fit items-center justify-center rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            aria-label="Instagram profilini yeni sekmede aç"
          >
            Instagram&apos;da takip et
            <span
              aria-hidden="true"
              className="ml-2"
            >
              ↗
            </span>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2 sm:gap-4">
          {socialImages.map((image, index) => (
            <figure
              key={image.src}
              className={`relative overflow-hidden rounded-[1.5rem] bg-surface ${
                index === 0
                  ? "col-span-2 min-h-80 md:row-span-2 md:min-h-[28rem]"
                  : index === 3
                    ? "col-span-2 min-h-64 md:min-h-0"
                    : "min-h-56 md:min-h-0"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={
                  index === 0 || index === 3
                    ? "(min-width: 768px) 50vw, 100vw"
                    : "(min-width: 768px) 25vw, 50vw"
                }
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
