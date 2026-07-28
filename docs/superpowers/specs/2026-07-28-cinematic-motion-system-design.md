# Cinematic Motion System Design

## Purpose

Add a cinematic, scroll-driven motion language to the florist portfolio without
turning every section into an equally intense animation. The motion system must
strengthen the premium editorial direction, remain reusable when the template
is adapted for local businesses, and preserve straightforward mobile use.

Motion for React will be added through the current `motion` package and imported
from `motion/react`. It was previously known as Framer Motion.

## Goals

- Give the landing page a deliberate cinematic rhythm.
- Create reusable motion primitives instead of duplicating animation code.
- Use one signature scroll scene for featured products.
- Keep static content, semantic HTML, and SEO-friendly structure intact.
- Preserve simple touch interaction on mobile.
- Respect the visitor's reduced-motion preference.
- Keep Server Components as the default and add Client Components only where
  browser APIs or Motion hooks are required.

## Non-goals

- Animating every element or every hover state.
- Building one global timeline that tightly couples all page sections.
- Using autoplay video or audio.
- Blocking navigation until an opening animation finishes.
- Making mobile visitors complete a long pinned-scroll sequence.
- Adding Motion+ or another paid animation package.

## Motion Direction

The overall character is cinematic rather than playful. Motion should feel
layered, paced, and photographic. Large movement is reserved for a few moments;
supporting sections use restrained reveals so the signature scene remains
special.

### Motion hierarchy

1. **Signature scene:** Featured Products.
2. **Strong supporting scenes:** Hero and About.
3. **Supporting transitions:** Categories, Testimonials, Social, and Footer.

Animations should primarily use `transform`, `opacity`, and carefully bounded
`clip-path` effects. Layout properties such as width, height, top, and left
should not be animated during scroll.

## Section Motion Map

### Header

- Remains sticky and usable throughout the page.
- May later respond subtly to scroll direction or background changes.
- Navigation must not wait for an animation before becoming interactive.

### Hero

- The eyebrow, title, description, and actions enter in a controlled sequence.
- The title uses a line or mask reveal rather than a simple full-block fade.
- The image begins slightly enlarged and settles to its resting scale.
- During scroll, the image moves more slowly than the surrounding content to
  create depth.
- The opening sequence runs once per page visit and does not repeatedly restart
  whenever the Hero re-enters the viewport.

### Categories

- The section heading uses a restrained reveal.
- Category cards enter in sequence with a small stagger.
- Desktop hover may enlarge the image and move the directional indicator.
- Mobile does not depend on hover for content or navigation.
- Categories remain in the normal document flow and do not use a pinned scene.

### Featured Products

Featured Products is the signature cinematic scene.

On desktop:

1. The visitor scrolls vertically into a tall section.
2. A viewport-height inner stage becomes sticky.
3. Vertical scroll progress is measured with `useScroll`.
4. `useTransform` maps that progress to horizontal movement.
5. Product cards travel across the stage from right to left.
6. The card closest to the visual centre can become slightly larger and clearer.
7. After the final product, the page returns to normal vertical flow.

The scene should contain approximately five or six products. Scroll distance
must be derived from the track and item dimensions where practical instead of
being tied to unexplained magic numbers.

On mobile:

- The sticky vertical-to-horizontal conversion is disabled.
- Products use a native horizontal overflow track.
- Touch scrolling remains direct and predictable.
- CSS scroll snapping helps each card settle into position.
- A visible portion of the next card indicates that more content is available.

### About

- Uses a two-column text and image composition on large screens.
- The image reveals through a mask and moves at a slower scroll rate.
- Text stays in normal flow.
- A decorative background word or shape may move at a separate, subtle rate.
- Mobile falls back to a simple stacked layout without aggressive parallax.

### Testimonials

- Reviews reveal progressively as the visitor reaches them.
- Desktop may use a restrained horizontal feeling, but readable text must never
  move too quickly.
- Mobile supports direct swipe when a horizontal track is used.
- Any automatic movement pauses for hover, focus, and reduced-motion users.

### Social

- Images reveal with controlled stagger and varied but consistent timing.
- The section must remain a functional route to the florist's social account,
  not merely a visual collage.

### Footer

- Uses a dark-green closing scene with a large brand wordmark.
- Content enters with a quiet upward reveal.
- Contact and social links remain immediately keyboard-accessible.

## Component Architecture

```text
src/
├── app/
│   └── layout.tsx
├── components/
│   ├── motion/
│   │   ├── MotionProvider.tsx
│   │   ├── Reveal.tsx
│   │   └── ParallaxMedia.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── CategoriesSection.tsx
│   │   ├── FeaturedProductsSection.tsx
│   │   ├── FeaturedProductsScene.tsx
│   │   ├── AboutSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── SocialSection.tsx
│   └── ui/
│       ├── CategoryCard.tsx
│       ├── ProductCard.tsx
│       └── Container.tsx
├── data/
│   ├── categories.ts
│   └── products.ts
├── lib/
│   └── motion.ts
└── types/
    └── index.ts
```

### `MotionProvider`

`MotionProvider` is a Client Component rendered inside the root layout. It wraps
the shared page content through a `children` slot without requiring the root
layout itself to become a Client Component.

Responsibilities:

- Provide site-wide `MotionConfig`.
- Set `reducedMotion="user"`.
- Provide a consistent default transition when appropriate.

### `Reveal`

`Reveal` is a small Client Component that animates an outer wrapper while
accepting server-rendered content through `children`.

Responsibilities:

- Viewport-triggered opacity and transform reveal.
- Optional direction, delay, and duration props.
- A once-only default for editorial content.
- A safe reduced-motion result.

It must not know about categories, products, or page copy.

### `ParallaxMedia`

`ParallaxMedia` is a Client Component that measures its own section progress and
maps that progress to bounded image movement.

Responsibilities:

- Own its DOM ref and Motion scroll values.
- Apply parallax only at suitable viewport sizes.
- Disable positional movement for reduced-motion users.
- Prevent transformed media from creating horizontal page overflow.

### `FeaturedProductsSection`

`FeaturedProductsSection` owns the semantic section heading and provides typed
product data to the animated scene. It remains responsible for content
composition rather than scroll calculations.

### `FeaturedProductsScene`

`FeaturedProductsScene` is a feature-specific Client Component rather than a
premature generic horizontal-scroll abstraction.

Responsibilities:

- Desktop sticky-stage geometry.
- Scroll progress and horizontal transform.
- Mobile overflow and scroll-snap layout.
- Reduced-motion fallback.
- Product-card presentation within the animated track.

### `lib/motion.ts`

This module stores shared design values such as:

- Cinematic easing.
- Reveal duration.
- Stagger interval.
- Standard parallax distance.

It contains no hooks and no browser-dependent logic.

## Server and Client Boundaries

Server Components remain responsible for:

- Route and page structure.
- Semantic section markup.
- Static content and typed data.
- Metadata and SEO.

Client Components are used for:

- Motion hooks such as `useScroll`, `useTransform`, and `useReducedMotion`.
- Browser viewport measurement.
- Scroll-linked transforms.
- Touch or interactive animation behaviour.

Props passed from Server Components to Client Components must remain
serializable. Product and category data therefore use strings, numbers, and
booleans rather than callbacks or component functions.

## Data Flow

```text
Typed data file
    ↓
Server section
    ↓
Serializable props
    ↓
Client motion scene or wrapper
    ↓
Visual component
```

Motion components do not own business content. Product names, descriptions,
images, and links remain in `src/data`.

## Responsive Behaviour

- Base styles target mobile first.
- Mobile uses normal vertical flow and direct horizontal touch scrolling where
  appropriate.
- Sticky cinematic behaviour begins only at a large-screen breakpoint with
  sufficient viewport width and height.
- Resize behaviour must not leave stale scroll distances or clipped content.
- No section may introduce page-level horizontal scrolling.

## Reduced Motion and Failure Behaviour

`MotionConfig` uses the visitor's operating-system preference. Bespoke scenes
also use `useReducedMotion` when the fallback requires structural changes.

For reduced-motion users:

- Parallax is disabled.
- Large x/y and scale transforms are removed.
- Featured Products becomes a normal readable list or horizontal track.
- Opacity may be retained when it helps communicate context.

If animation JavaScript is delayed or unavailable, meaningful text, links, and
images must remain present in the rendered HTML. Animation must never be the
only way to discover content or navigate.

## Performance Boundaries

The project accepts a moderate performance cost for a richer local-business
portfolio experience, but the following limits still apply:

- Prefer GPU-friendly transform and opacity animation.
- Avoid continuous React state updates during scroll.
- Use Motion values rather than rerendering on every scroll event.
- Optimise local images with `next/image`.
- Do not apply `will-change` globally or permanently to every element.
- Test the signature scene on a mid-range mobile device profile.

## Accessibility

- All links and controls remain keyboard-accessible.
- Focus indicators remain visible during and after transforms.
- Motion does not reorder the semantic reading order.
- The mobile product track has an understandable label and usable swipe area.
- Text contrast remains sufficient over animated imagery.
- Reduced-motion behaviour is treated as a required implementation path.

## Verification

Every motion-related branch must include:

- `npm run lint`
- `npm run build`
- Manual verification of `/` and `/contact`
- Mobile, tablet, and desktop viewport checks
- Keyboard navigation checks
- Reduced-motion testing
- Confirmation that there is no page-level horizontal overflow
- Confirmation that sticky scenes enter and exit without jumps
- Confirmation that content remains readable during slow or interrupted motion

## Implementation Branches

1. `feature/categories-ui`
   - Complete the static `CategoryCard` and `CategoriesSection`.
   - Do not install Motion in this branch.

2. `feature/motion-foundation`
   - Install `motion`.
   - Add `MotionProvider`, shared motion values, `Reveal`, and `ParallaxMedia`.
   - Integrate the foundation into Hero and Categories.

3. `feature/featured-products-motion`
   - Add the Product type and product data.
   - Add product imagery and `ProductCard`.
   - Build the desktop sticky horizontal scene.
   - Build the mobile swipe and reduced-motion alternatives.

4. Subsequent feature branches
   - About.
   - Testimonials.
   - Social.
   - Footer.

Each branch is verified, pushed, reviewed through a Pull Request, merged into
`main`, and removed locally before the next branch starts.

## References

- [Motion for React](https://motion.dev/docs/react)
- [Motion horizontal scroll example](https://motion.dev/examples/react-scroll-horizontal)
- [Motion `useScroll`](https://motion.dev/docs/react-use-scroll)
- [Motion `MotionConfig`](https://www.motion.dev/docs/react-motion-config)
- [Next.js Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components)
