import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/data/products";



export function FeaturedProductsSection() {
    return (
        <section className="py-20 sm:py-24 lg:py-32">
            <Container>
                <div className="mb-10 flex flex-col gap-5 sm:mb-14 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                            Öne çıkanlar
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                            Bu sezonun seçkin tasarımları
                        </h2>
                    </div>
                    <p className="max-w-md leading-7 text-muted md:text-right">
                        Mevsimin en güzel çiçeklerini modern ve
                        özenli tasarımlarla bir araya getiriyoruz.
                    </p>
                </div>
                <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard
                            key={product.title}
                            product={product}
                        />
                    ))}
                </div>
            </Container>
        </section>
    )
}