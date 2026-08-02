import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { contactInfo, whatsappUrl } from "@/data/contact";
import { navigationItems } from "@/data/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 lg:grid-cols-[1.3fr_0.7fr_1fr_1fr] lg:gap-12 lg:py-14">
          <div className="col-span-2 max-w-sm lg:col-span-1">
            <Link
              href="/"
              className="inline-block text-2xl font-semibold uppercase tracking-[0.2em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background"
            >
              Flora
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-white/60">
              Mevsimin çiçeklerini kişisel hikâyeler ve
              doğal dokularla buluşturan butik çiçek
              atölyesi.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Flora'yı Instagram'da takip et"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 px-4 text-sm font-semibold text-background transition-colors hover:border-white/40 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background"
              >
                <FaInstagram
                  aria-hidden="true"
                  className="size-[1.125rem]"
                />
                Instagram
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Flora ile WhatsApp'ta iletişime geç"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 px-4 text-sm font-semibold text-background transition-colors hover:border-white/40 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background"
              >
                <FaWhatsapp
                  aria-hidden="true"
                  className="size-[1.125rem]"
                />
                WhatsApp
              </a>
            </div>
          </div>

          <nav aria-label="Alt navigasyon">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
              Menü
            </h2>

            <ul className="mt-4 space-y-2.5">
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

            <address className="mt-4 space-y-2.5 text-sm not-italic leading-6 text-white/70">
              <p>
                {contactInfo.address.street}
                <br />
                {contactInfo.address.district}
              </p>

              <p>
                <a
                  href={contactInfo.phoneHref}
                  className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background"
                >
                  {contactInfo.phoneDisplay}
                </a>
              </p>

              <p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="break-all transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background"
                >
                  {contactInfo.email}
                </a>
              </p>
            </address>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
              Çalışma saatleri
            </h2>

            <dl className="mt-4 space-y-2.5 text-sm text-white/70">
              {contactInfo.workingHours.map((item) => (
                <div
                  key={item.day}
                  className="flex justify-between gap-4"
                >
                  <dt>{item.day}</dt>
                  <dd className="shrink-0">{item.hours}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/15 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Flora Atelier. Tüm hakları
            saklıdır.
          </p>

          <p>
            Portfolyo amacıyla hazırlanmış örnek marka.
          </p>
        </div>
      </Container>
    </footer>
  );
}
