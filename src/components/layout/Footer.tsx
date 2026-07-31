import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navigationItems } from "@/data/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <Container>
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr] lg:py-20">
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-block text-2xl font-semibold uppercase tracking-[0.2em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background"
            >
              Flora
            </Link>

            <p className="mt-5 leading-7 text-white/60">
              Mevsimin çiçeklerini kişisel hikâyeler ve
              doğal dokularla buluşturan butik çiçek
              atölyesi.
            </p>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-background underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background"
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

          <nav aria-label="Alt navigasyon">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
              Menü
            </h2>

            <ul className="mt-5 space-y-3">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
              İletişim
            </h2>

            <address className="mt-5 space-y-3 text-sm not-italic leading-6 text-white/70">
              <p>
                Moda Caddesi No: 24
                <br />
                Kadıköy, İstanbul
              </p>

              <p>
                <a
                  href="tel:+902120000000"
                  className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background"
                >
                  +90 212 000 00 00
                </a>
              </p>

              <p>
                <a
                  href="mailto:hello@floraatelier.com"
                  className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background"
                >
                  hello@floraatelier.com
                </a>
              </p>
            </address>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
              Çalışma saatleri
            </h2>

            <dl className="mt-5 space-y-3 text-sm text-white/70">
              <div className="flex justify-between gap-4">
                <dt>Pazartesi–Cuma</dt>
                <dd className="shrink-0">09.00–19.00</dd>
              </div>

              <div className="flex justify-between gap-4">
                <dt>Cumartesi</dt>
                <dd className="shrink-0">10.00–18.00</dd>
              </div>

              <div className="flex justify-between gap-4">
                <dt>Pazar</dt>
                <dd className="shrink-0">Kapalı</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/15 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Flora Atelier. Tüm hakları
            saklıdır.
          </p>

          <p>
            Portfolyo amacıyla hazırlanmış örnek marka.
          </p>
        </div>

        <div
          aria-hidden="true"
          className="overflow-hidden border-t border-white/10"
        >
          <p className="py-8 text-center text-[clamp(4rem,16vw,12rem)] font-semibold leading-[0.75] tracking-[-0.06em] text-white/5">
            FLORA
          </p>
        </div>
      </Container>
    </footer>
  );
}
