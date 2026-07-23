# Florist Landing Page Design

## Purpose

Build a portfolio-quality website for a fictional local florist. The site should
present products in a modern, premium storefront and guide visitors toward the
shop's social media channels. It is a catalogue and brand website, not an
e-commerce application.

## Scope

The first version contains:

- A single-page home route at `/`
- A separate contact route at `/contact`
- Product categories and featured products
- A short brand story
- Clearly identified sample customer testimonials
- Social media links, with Instagram as the main secondary action
- Address, opening hours, social links, and a map on the contact page

The first version does not contain:

- Shopping cart or checkout
- User accounts
- Online payment
- Product management dashboard
- Individual product detail routes

## Visual Direction

The design should feel modern and premium:

- Generous whitespace
- Large, high-quality floral photography
- A restrained cream and dark green colour palette
- Strong editorial typography
- Subtle animation used only where it improves hierarchy or feedback
- Responsive layouts designed mobile-first

## Route Architecture

```text
src/app/
├── contact/
│   └── page.tsx
├── globals.css
├── layout.tsx
└── page.tsx
```

- `src/app/page.tsx` composes the landing-page sections.
- `src/app/contact/page.tsx` renders contact and location information.
- `src/app/layout.tsx` contains site-wide document structure and shared layout.

## Component Architecture

```text
src/components/
├── layout/
│   ├── Header.tsx
│   └── Footer.tsx
├── sections/
│   ├── HeroSection.tsx
│   ├── CategoriesSection.tsx
│   ├── FeaturedProductsSection.tsx
│   ├── AboutSection.tsx
│   ├── TestimonialsSection.tsx
│   └── SocialSection.tsx
└── ui/
    ├── Button.tsx
    ├── Container.tsx
    ├── ProductCard.tsx
    └── SectionHeading.tsx
```

- `layout` contains site-wide structural components.
- `sections` contains large, page-level home sections.
- `ui` contains small reusable building blocks.
- A component is extracted only when it has a clear responsibility or reuse
  case. Testimonial cards initially remain inside `TestimonialsSection`.

## Home Page Order

```text
Header
Hero
Categories
Featured Products
About
Testimonials
Social / Instagram
Footer
```

The primary user journey is product discovery. The secondary journey is opening
the florist's social media profile. Header and footer contact links navigate to
`/contact`.

## Data and Types

```text
src/data/
├── navigation.ts
├── categories.ts
├── products.ts
└── testimonials.ts

src/types/
└── index.ts
```

Static content is separated from JSX so components focus on presentation.
TypeScript types describe navigation items, categories, products, and
testimonials. Sample testimonials must be presented as demo content and must not
imply that they came from real customers.

## Data Flow

1. Typed arrays are exported from files in `src/data`.
2. Page sections import the relevant arrays.
3. Sections map over the data and render UI elements such as product cards.
4. Shared UI components receive typed props and do not own business data.

No database or external API is required for the first version.

## Error and Empty States

Because the first version uses local static data, network failures are not in
scope. Components that receive arrays should still render safely when those
arrays are empty. Images require meaningful alternative text, and external
social links must open safely.

The contact page will use an external map embed. If the embed cannot load, the
page will still display the written address and a direct map link.

## Testing and Verification

Each development checkpoint should include:

- ESLint
- TypeScript/build validation
- Manual checks at mobile and desktop widths
- Keyboard navigation checks for links and buttons
- Verification that `/` and `/contact` render without errors
- Checks for image alternative text and visible focus states

## First Implementation Session

The first one-hour implementation session will:

1. Move `Header.tsx` from `components/ui` to `components/layout`.
2. Move `HeroSection.tsx` from `components/ui` to `components/sections`.
3. Create the remaining approved folders and empty component/data files.
4. Implement and explain `Container`.
5. Begin `Header`.
6. Start the semantic Hero structure if time remains.

The user will create and type the implementation with guided explanations so
the project also serves as a Next.js, React, and TypeScript learning exercise.
