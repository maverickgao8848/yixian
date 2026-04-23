# Wireframe Notation Reference

Full notation details for `wireframe-skill`. The SKILL.md covers the essentials — this file has edge cases, extended examples, and guidance for complex layouts.

---

## Complete Symbol Reference

| Symbol | Meaning | When to use |
|---|---|---|
| `[ Label ]` | Button / CTA | Any clickable element that triggers an action |
| `{ Label }` | Text / heading / copy | Heading, paragraph, label, any static text |
| `( placeholder )` | Input field | Text inputs, search bars, textareas |
| `~~~ Label ~~~` | Image / media | Photos, videos, illustrations, maps |
| `«Label»` | Badge / tag | Status indicators, category tags, notification counts |
| `▼ Label` | Dropdown / select | Select menus, filter dropdowns |
| `<icon>` | Icon reference | Navigation icons, action icons (use descriptive names) |
| `[✓] / [ ]` | Checkbox | Form checkboxes, feature lists |
| `[ON] / [OFF]` | Toggle | Settings toggles, boolean switches |
| `~Link text~` | Text link | Inline anchor links within prose |
| `─ ─ ─` | Visual separator | Horizontal rule between sections |
| `░░░░░░` | Loading / skeleton | Placeholder for async content |
| `☰` | Hamburger menu | Mobile navigation trigger |

---

## Layout Patterns

### Single column (landing page, blog post, simple form)
```
┌─────────────────────────────┐
│  SECTION A                  │
│  [content]                  │
├─────────────────────────────┤
│  SECTION B                  │
│  [content]                  │
└─────────────────────────────┘
```

### Two-column split (product page, dashboard, settings)
```
┌────────────────────────────────────────┐
│  ┌──────────────────┐ ┌─────────────┐  │
│  │  LEFT COLUMN     │ │ RIGHT COLUMN│  │
│  │  (wider)         │ │ (sidebar)   │  │
│  └──────────────────┘ └─────────────┘  │
└────────────────────────────────────────┘
```

### Three-column grid (feature listing, cards)
```
┌────────────────────────────────────────┐
│  FEATURE GRID                          │
│  ┌──────────┐ ┌──────────┐ ┌────────┐ │
│  │ Card 1   │ │ Card 2   │ │ Card 3 │ │
│  │ {Title}  │ │ {Title}  │ │{Title} │ │
│  │ {Body}   │ │ {Body}   │ │{Body}  │ │
│  │ [CTA]    │ │ [CTA]    │ │[CTA]   │ │
│  └──────────┘ └──────────┘ └────────┘ │
└────────────────────────────────────────┘
```

### Navbar patterns
```
Horizontal nav (desktop):
│  {Logo}    [Nav 1] [Nav 2] [Nav 3]    [ CTA Button ] │

Mobile nav header:
│  ☰   {Logo}   <cart>  │
```

### Form patterns
```
┌────────────────────────────┐
│  FORM                      │
│  { Label }                 │
│  ( input field )           │
│                            │
│  { Another Label }         │
│  ( ▼ Select Option )       │
│                            │
│  [✓] { I agree to terms }  │
│                            │
│  [ Submit Button ]         │
└────────────────────────────┘
```

---

## Annotation Conventions

### Section labels
Use ALL CAPS inside the wireframe box to name sections. This makes it easy to cross-reference with the Section Notes table:
```
│  HERO SECTION    ← matches "Hero Section" in the notes table
```

### Mobile notes
Add inline after the relevant section, indented:
```
│  [Mobile: stacks vertically, image goes below text]
```

### Interaction notes
For complex interactions, add a note below the related element:
```
│  [ Add to Cart ]
│  ↳ triggers Cart Drawer overlay
```

### Content that varies
Use ellipsis for repeated items:
```
│  { Product title }  $00.00
│  { Product title }  $00.00
│  { Product title }  $00.00
│  ... (N more items)
```

---

## Width Management

Target ~70 characters wide. To count: the outer `┌` and `┐` plus everything between them should be ≤70 chars.

For complex layouts that naturally want more space, abbreviate labels rather than extending width:
- `{ Headline text goes here }` → `{ Headline }`
- `[ Sign Up For Free ]` → `[ Sign Up ]`
- `~~~ Full-width Hero Image ~~~` → `~~~ Hero Img ~~~`

---

## What *Not* to Wireframe

- Exact colors (write `{CTA: primary color}` if it matters)
- Precise fonts or sizes (describe in Section Notes if important)
- Hover states (note them in Section Notes as "hover: X")
- Pixel values (describe proportions: "wider left column, narrow sidebar")

Wireframes communicate structure and intent, not visual design. If you find yourself worrying about pixels, you've gone too far.
