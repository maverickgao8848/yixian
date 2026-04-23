# Wireframe Examples — E-commerce Fashion Store

> This is a reference example showing the expected output format of `wireframe-skill`.
> Two key pages are shown: Homepage and Product Detail Page.

---

### Wireframe: Homepage
> Layout type: Asymmetric split (hero) → Single column (below fold)
> Key user goal on this page: Discover the brand and navigate to a product or collection

```
┌─────────────────────────────────────────────────────────────┐
│  NAVBAR                                                      │
│  {Logo}        [Shop] [Collections] [Stories] [About]  <search> (Login) [ Cart «2» ] │
│  [Mobile: ☰ hamburger — logo centered — cart icon right]    │
├─────────────────────────────────────────────────────────────┤
│  HERO SECTION                                                │
│  ┌────────────────────────┐  ┌──────────────────────────┐  │
│  │                        │  │  ~~~ Full-bleed Image ~~~│  │
│  │  { H1: Wear the        │  │                          │  │
│  │    Season. }           │  │                          │  │
│  │                        │  │                          │  │
│  │  { Subtext: Curated    │  │                          │  │
│  │    pieces for          │  │                          │  │
│  │    everyday living. }  │  │                          │  │
│  │                        │  │                          │  │
│  │  [ Shop Now ]          │  │                          │  │
│  │  ~View Lookbook~       │  └──────────────────────────┘  │
│  └────────────────────────┘                                 │
│  [Mobile: image on top, text below, full-width button]      │
├─────────────────────────────────────────────────────────────┤
│  FEATURED COLLECTIONS                                        │
│  { Section Label: Shop by Collection }                       │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ ~~~ Img ~~~ │  │ ~~~ Img ~~~  │  │ ~~~ Img ~~~  │      │
│  │ {Summer '26} │  │ {Bestsellers}│  │ {New Arrivals}│      │
│  │ ~Shop →~    │  │ ~Shop →~    │  │ ~Shop →~     │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
├─────────────────────────────────────────────────────────────┤
│  EDITORIAL / STORIES                                         │
│  { Section Label: From the Journal }                         │
│  ┌────────────────────────────┐  ┌────────────────────────┐ │
│  │  ~~~ Wide Story Image ~~~ │  │  { Story Title }        │ │
│  │                            │  │  { Excerpt... }         │ │
│  │                            │  │  ~Read More~            │ │
│  └────────────────────────────┘  └────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│  NEWSLETTER SIGNUP                                           │
│  { Join the list. No noise, just good things. }             │
│  ( Your email address )    [ Subscribe ]                     │
├─────────────────────────────────────────────────────────────┤
│  FOOTER                                                      │
│  {Logo}  [Shop] [About] [Stories] [Contact]                  │
│  {© 2026 Brand Name}  ~Privacy~  ~Terms~                    │
└─────────────────────────────────────────────────────────────┘
```

### Section Notes: Homepage

| Section | Purpose | Key Elements |
|---|---|---|
| Navbar | Global navigation + cart access | Logo, 4 nav links, search, login, cart badge |
| Hero | Brand first impression + primary CTA | H1, subtext, 2 CTAs, full-bleed editorial image |
| Featured Collections | Drive discovery of curated product groups | 3 collection tiles, image + label + link |
| Editorial / Stories | Brand storytelling, builds trust + loyalty | 1 featured article, image + excerpt |
| Newsletter Signup | Email list growth | Email input + submit CTA |
| Footer | Secondary nav + legal | Links, copyright, privacy |

---

### Wireframe: Product Detail Page (PDP)
> Layout type: Two-column (image gallery left, details right)
> Key user goal on this page: Evaluate the product and add it to cart

```
┌─────────────────────────────────────────────────────────────┐
│  NAVBAR  (same as homepage)                                  │
├─────────────────────────────────────────────────────────────┤
│  BREADCRUMB                                                  │
│  ~Home~ › ~Shop~ › ~Dresses~ › { Product Name }             │
├─────────────────────────────────────────────────────────────┤
│  PRODUCT MAIN                                                │
│  ┌──────────────────────────┐  ┌──────────────────────────┐ │
│  │  IMAGE GALLERY           │  │  PRODUCT INFO             │ │
│  │  ┌────────────────────┐  │  │                           │ │
│  │  │ ~~~ Main Image ~~~│  │  │  «New Arrival»            │ │
│  │  │                    │  │  │  { H1: Product Name }     │ │
│  │  └────────────────────┘  │  │  { $128.00 }             │ │
│  │  [Thumb] [Thumb] [Thumb]  │  │  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─   │ │
│  │  [Thumb] [Thumb] [+3]    │  │                           │ │
│  │                           │  │  { Color: Slate Blue }   │ │
│  │                           │  │  [○] [●] [○] [○]        │ │
│  │                           │  │                           │ │
│  │                           │  │  { Size: } ~Size Guide~  │ │
│  │                           │  │  [XS] [S] [M] [L] [XL]  │ │
│  │                           │  │                           │ │
│  │                           │  │  [ Add to Cart ]          │ │
│  │                           │  │  [ ♡ Save to Wishlist ]  │ │
│  │                           │  │                           │ │
│  │                           │  │  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─   │ │
│  │                           │  │  { Description }          │ │
│  │                           │  │  { Material & Care ▼ }   │ │
│  │                           │  │  { Shipping & Returns ▼ } │ │
│  └──────────────────────────┘  └──────────────────────────┘ │
│  [Mobile: images stack on top, info below, sticky cart CTA] │
├─────────────────────────────────────────────────────────────┤
│  YOU MAY ALSO LIKE                                           │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │~~~ Img~~│ │~~~ Img~~│ │~~~ Img~~│ │~~~ Img~~│       │
│  │{Name}   │ │{Name}   │ │{Name}   │ │{Name}   │       │
│  │{$xx}    │ │{$xx}    │ │{$xx}    │ │{$xx}    │       │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘       │
└─────────────────────────────────────────────────────────────┘
```

### Section Notes: Product Detail Page

| Section | Purpose | Key Elements |
|---|---|---|
| Breadcrumb | Orientation + easy back-navigation | Hierarchical trail, last item is current page |
| Image Gallery | Product visualization | Main image + thumbnail strip, up to 8 images |
| Product Info | Purchase decision support | Name, price, color swatch, size picker, add to cart, wishlist |
| Accordion Details | Secondary info without cluttering | Description, Material & Care, Shipping & Returns |
| You May Also Like | Upsell / discovery | 4-product horizontal row, same card format as PLP |
