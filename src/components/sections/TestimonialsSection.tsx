import { Container } from "@/components/ui/Container";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="bg-foreground py-20 text-background sm:py-24 lg:py-32">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Paylaşılan deneyimler
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Her çiçek, başka bir hikâyeye eşlik eder.
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-white/65">
            Aşağıdaki yorumlar portfolyo gösterimi için
            hazırlanmış temsili içeriklerdir.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={`${testimonial.customer}-${testimonial.occasion}`}
              className="flex h-full flex-col rounded-[2rem] border border-white/15 bg-white/8 p-7 sm:p-8"
            >
              <div
                role="img"
                aria-label="5 üzerinden 5 yıldız"
                className="text-sm tracking-[0.25em] text-accent"
              >
                <span aria-hidden="true">
                  ★★★★★
                </span>
              </div>

              <blockquote className="mt-7 flex-1">
                <p className="text-lg leading-8 text-white/85">
                  “{testimonial.quote}”
                </p>
              </blockquote>

              <footer className="mt-8 border-t border-white/15 pt-5">
                <cite className="not-italic">
                  <span className="block font-semibold text-white">
                    {testimonial.customer}
                  </span>

                  <span className="mt-1 block text-sm text-white/55">
                    {testimonial.occasion}
                  </span>
                </cite>
              </footer>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
