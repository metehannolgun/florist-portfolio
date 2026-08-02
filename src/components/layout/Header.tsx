"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import { Container } from  "@/components/ui/Container";
import { navigationItems } from "@/data/navigation";

export function Header() {
    function handleHomeClick(event: MouseEvent<HTMLAnchorElement>) {
        if (window.location.pathname !== "/") {
            return;
        }

        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <header className=" sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
            <Container>
                <div className="flex h-20 items-center justify-between">
                    <Link
                    href="/"
                    className="text-xl font-semibold tracking-[0.18em] uppercase"
                    >
                        Flora
                    </Link>
                    <nav aria-label="Ana navigasyon" className="hidden md:block">
                        <ul className="flex items-center gap-8">
                            {navigationItems.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        onClick={item.href === "/#top" ? handleHomeClick : undefined}
                                        className="text-sm font-medium text-muted transition-colors hover:text-foreground"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Link
                        href="/contact"
                        className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent"
                    >
                        Sipariş Ver
                    </Link>
                </div>
            </Container>
        </header>
    )
}
