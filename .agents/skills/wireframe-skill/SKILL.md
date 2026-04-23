---
name: wireframe
description: Generates ASCII wireframes for website pages using a consistent notation system. Use this skill whenever someone needs a page layout sketch, wireframe, or low-fidelity mockup — whether for a single page or a set of key pages. Trigger on phrases like "wireframe the homepage", "sketch the layout for", "draw a low-fi mockup", "画线框图", "给我画一个页面草图", or when ia-conversation-skill requests wireframes in Phase 3. Also useful when someone says "show me what the page should look like" and they don't need full visual design yet.
---

# Wireframe Skill

Generate ASCII wireframes that communicate page layout, content hierarchy, and interactive elements — clearly enough that a designer or developer can immediately understand what goes where and why.

ASCII wireframes work because they're fast to read, free to produce, and version-controllable. The notation below is designed to be instantly parseable: someone unfamiliar with the notation can still understand a wireframe in 30 seconds.

---

## Notation

These symbols are chosen to visually suggest what they represent. Use them consistently.

```
[ Label ]        → Button or CTA
{ Label }        → Text content / heading / copy block  
( placeholder )  → Input field or form element
~~~ Label ~~~    → Image or media placeholder
«Label»          → Badge or tag
▼ Label          → Dropdown / select
<icon>           → Icon reference (e.g. <search>, <menu>, <user>)
[✓] / [ ]       → Checkbox state
[ON] / [OFF]     → Toggle state
~Link text~      → Inline text link
─ ─ ─            → Visual separator
```

For layout structure, use box-drawing characters:
```
┌──────────────────────────┐
│  SECTION NAME             │  ← section labels in ALL CAPS
│  ┌──────────┐ ┌────────┐ │  ← sub-columns when needed
│  │          │ │        │ │
│  └──────────┘ └────────┘ │
└──────────────────────────┘
```

For the full notation reference with edge cases and examples, see:
→ `references/notation.md`

---

## Output Format

For each page, produce:

```markdown
### Wireframe: [Page Name]
> Layout: [type — e.g., single column, two-column split, full-bleed hero]
> User goal: [what the user is trying to accomplish on this page, in one sentence]

[ASCII diagram here]

### Section Notes: [Page Name]
| Section | Purpose | Key Elements |
|---|---|---|
| ...     | ...     | ...          |
```

The Section Notes table matters — it's where you explain *why* each section exists, not just what's in it. Designers use it to understand intent, not just placement.

---

## Scope

By default, generate wireframes only for the **key pages identified in the IA planning session** (typically 3-5). These are the pages where layout decisions matter most — homepage, primary conversion page, core product/content page.

If someone asks for additional pages, generate them. But when in doubt, quality over quantity: a careful wireframe for 3 pages is more useful than rushed sketches for 10.

**Width target**: Keep diagrams within ~70 characters wide. This ensures they render cleanly in markdown editors, terminal windows, and GitHub.

**Mobile**: If the desktop layout changes significantly on mobile (e.g., a side-by-side becomes stacked, a nav becomes a hamburger), add a short note: `[Mobile: stacks vertically / hamburger nav]`. Don't draw a separate full mobile wireframe unless asked.

---

## Examples

See `examples/wireframe-example.md` for two complete page wireframes (Homepage and Product Detail Page) with notation and section notes.
