
import type { Category } from "@/types"
import Image from "next/image";
import Link from "next/link";

type CategoryCardProps = {
    category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
    return (
        <article>
            <Link href={category.href}
            className = "group relative block min-h-[28rem] overflow-hidden rounded-[2rem] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent "
            >
                <Image
                    src={category.image}
                    alt={category.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-foreground/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                    <h3 className="text-2xl font-semibold">
                        {category.title}
                    </h3>
                    <p className="mt-3 max-w-sm leading-6 text-white/80">
                        {category.description}
                    </p>
                    <span className="mt-6 inline-flex items-center text-sm font-semibold">
                        İncele
                        <span
                            aria-hidden="true"
                            className="ml-2 transition-transform group-hover:translate-x-1"
                            >
                                →
                        </span>
                    </span>
                </div>
            </Link>
        </article>
    )
}