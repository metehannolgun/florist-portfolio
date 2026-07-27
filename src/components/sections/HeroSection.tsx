import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
    return (
        <section className="overflow-hidden py-16 sm:py-20 lg:py-28">
            <Container>
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Metin Alanı ( bunu üstteki grid sayesinde yaptık) */}
                    <div className="max-w-2xl">
                        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                            Her anı güzelleştiren çiçekler
                        </p>
                        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-7xl">
                            Duygularınızı çiçeklerle anlatın.
                        </h1>
                        <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">
                            Özel günlerden küçük mutluluklara kadar, her anınıza özenle hazırlanan çiçek tasarımlarıyla eşlik ediyoruz.
                        </p>
                        <div className="mt-8 grid max-w-lg grid-cols-1 gap-4 sm:grid-cols-2">
                            <Link
                                href="/#collection"
                                className="inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-accent "
                            >
                                Koleksiyonu keşfet
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground"
                            >
                                Bize ulaşın
                            </Link>
                        </div>
                    </div>
                    {/*Gorsel Alanı */}
                    <div className="relative min-h-96 overflow-hidden rounded-[2rem] bg-surface lg:min-h-[34rem]">
                        <Image
                            src="/images/hero/hero-florist.jpg"
                            alt="Özenle hazırlanmış mevsim çiçeklerinden oluşan buket"
                            fill
                            priority
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-cover"
                            />
                       <div className="absolute inset-0 bg-linear-to-t from-foreground/45 via-transparent to-transparent" />

                       <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/40 bg-white/80 p-5 backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-xs sm:p-6">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                                Günün seçimi
                            </p>

                            <p className="text-lg font-semibold text-foreground sm:text-xl mt-2">
                                Mevsim çiçekleriyle hazırlanan özel buket
                            </p>
                    </div>
                </div>
            </div>
            </Container>
        </section>
        
    )
}