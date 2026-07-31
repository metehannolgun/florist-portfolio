import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative min-h-[30rem] overflow-hidden rounded-[2rem] bg-surface sm:min-h-[38rem]">
            <Image
              src="/images/about/flora-atelier.jpg"
              alt="Atölyede mevsim çiçeklerinden özenle buket hazırlayan çiçekçi"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-foreground/45 via-transparent to-transparent" />

            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/30 bg-white/80 p-5 backdrop-blur-md sm:inset-x-auto sm:bottom-8 sm:left-8 sm:max-w-xs sm:p-6">
              <p className="text-sm leading-6 text-foreground">
                Her tasarım, çiçeğin doğal karakterini
                koruyarak elde hazırlanır.
              </p>
            </div>
          </div>

          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Hikâyemiz
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Çiçekleri değil, hisleri tasarlıyoruz.
            </h2>

            <div className="mt-6 space-y-5 leading-7 text-muted">
              <p>
                Flora, doğanın kendine özgü güzelliğini
                günlük yaşamın küçük ve özel anlarıyla
                buluşturan bir çiçek atölyesidir.
              </p>

              <p>
                Her buketi mevsimin sunduğu çiçekleri,
                doğal dokuları ve kişisel hikâyeleri
                düşünerek özenle hazırlıyoruz.
              </p>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-6 border-y border-border py-6">
              <div>
                <dt className="text-sm text-muted">
                  Tasarım yaklaşımı
                </dt>
                <dd className="mt-2 font-semibold text-foreground">
                  Mevsimsel ve özgün
                </dd>
              </div>

              <div>
                <dt className="text-sm text-muted">
                  Hazırlama biçimi
                </dt>
                <dd className="mt-2 font-semibold text-foreground">
                  Tamamen el işçiliği
                </dd>
              </div>
            </dl>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Atölyemizle iletişime geç
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}