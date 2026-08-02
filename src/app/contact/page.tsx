import { Container } from "@/components/ui/Container";
import { contactInfo, whatsappUrl } from "@/data/contact";

export default function ContactPage() {
  return (
    <main>
      <section className="overflow-hidden py-16 sm:py-20 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch lg:gap-16">
            <div className="flex flex-col justify-center py-4 lg:pr-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Bize ulaşın
              </p>

              <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                Güzel bir tasarım, iyi bir sohbetle başlar.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                Aklınızdaki çiçek tasarımını, teslim tarihini
                veya merak ettiklerinizi WhatsApp üzerinden
                bizimle paylaşın. Size en kısa sürede dönüş
                yapalım.
              </p>

              <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Flora Atelier ile WhatsApp üzerinden iletişime geç"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  WhatsApp&apos;tan yaz
                  <span
                    aria-hidden="true"
                    className="ml-3 text-lg leading-none"
                  >
                    ↗
                  </span>
                </a>

                <p className="max-w-xs text-sm leading-6 text-muted">
                  Hazır mesajla WhatsApp&apos;a yönlendirilirsiniz.
                  Sitede kişisel veri saklanmaz.
                </p>
              </div>
            </div>

            <aside className="flex flex-col justify-between rounded-[2rem] bg-foreground p-7 text-background sm:p-9 lg:p-10">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                  Flora Atelier
                </p>

                <h2 className="mt-5 max-w-md text-3xl font-semibold tracking-tight sm:text-4xl">
                  Bir mesaj kadar yakınız.
                </h2>
              </div>

              <address className="mt-16 space-y-6 not-italic sm:mt-20">
                <div className="border-t border-white/15 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                    Telefon
                  </p>
                  <a
                    href={contactInfo.phoneHref}
                    className="mt-2 inline-block text-lg font-medium text-white transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background"
                  >
                    {contactInfo.phoneDisplay}
                  </a>
                </div>

                <div className="border-t border-white/15 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                    E-posta
                  </p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="mt-2 inline-block break-all text-lg font-medium text-white transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background"
                  >
                    {contactInfo.email}
                  </a>
                </div>

                <div className="border-t border-white/15 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                    Atölye
                  </p>
                  <p className="mt-2 text-lg leading-7 text-white/80">
                    {contactInfo.address.street}
                    <br />
                    {contactInfo.address.district}
                  </p>
                </div>
              </address>

              <p className="mt-10 border-t border-white/15 pt-5 text-xs leading-5 text-white/55">
                Bu sayfadaki iletişim bilgileri portfolyo
                gösterimi için hazırlanmış örnek verilerdir.
              </p>
            </aside>
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-24 lg:pb-32">
        <Container>
          <div className="mb-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end sm:mb-14">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Atölyemiz
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Bizi Moda&apos;da ziyaret edin.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-muted">
                Çiçekleri yakından görmek ve tasarımınızı
                birlikte planlamak için çalışma saatlerimizde
                atölyemize uğrayabilirsiniz.
              </p>
            </div>

            <dl className="w-full min-w-72 rounded-3xl border border-border bg-surface p-6 md:w-auto">
              {contactInfo.workingHours.map((item) => (
                <div
                  key={item.day}
                  className="flex justify-between gap-8 border-b border-border py-3 first:pt-0 last:border-b-0 last:pb-0"
                >
                  <dt className="text-sm text-muted">{item.day}</dt>
                  <dd className="shrink-0 text-sm font-semibold text-foreground">
                    {item.hours}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative min-h-[26rem] overflow-hidden rounded-[2rem] border border-border bg-surface sm:min-h-[32rem]">
            <iframe
              src={contactInfo.mapEmbedUrl}
              title="Flora Atelier Moda Kadıköy konumu"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </Container>
      </section>
    </main>
  );
}
