import { CategoryCard } from "@/components/ui/CategoryCard";
import { Container } from "@/components/ui/Container";
import { categories } from "@/data/categories";


export function CategoriesSection() {
    return (
        <section id="collection" className="pb-20 pt-12 sm:pb-24 sm:pt-16 lg:pb-32 lg:pt-20">
            <Container>
                <div className="mb-8 max-w-2xl sm:mb-10">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                        Koleksiyonlarımız
                    </p>
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        Her ana eşlik eden tasarımlar
                    </h2>
                    <p className="mt-5 leading-7 text-muted">
                        Günlük mutluluklardan özel kutlamalara kadar, her ihtiyaca uygun özenli çiçek seçeneklerini keşfedin.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {categories.map((category) => (
                        <CategoryCard
                        key={category.title}
                        category={category}
                        />
                    ))}
                </div>
            </Container>
        </section>
    )
}