import type { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";



type ProductCardProps = {
  product: Product;
};

export function ProductCard({
    product,
}: ProductCardProps) {
    return (
        <article>
            <Link
                href={product.href}
                className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-surface">
                    <Image
                        src={product.image}
                        alt={product.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
                <div className="pt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                        {product.category}
                    </p>
                    <div className="mt-2 flex items-start justify-between gap-4">
                        <h3 className="text-xl font-semibold text-foreground">
                            {product.title}
                        </h3>
                        <span className="shrink-0 text-sm font-semibold text-foreground">
                            {product.price}
                        </span>
                    </div>
                </div>
            </Link>
        </article>
    )
}