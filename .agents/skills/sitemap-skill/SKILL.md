---
name: sitemap
description: Generates clean Mermaid-based Sitemap diagrams for websites. Use this skill whenever someone needs a visual representation of a website's page hierarchy, navigation structure, or site map — whether standalone or as part of an IA planning session. Trigger on phrases like "make a sitemap", "show me the site structure", "draw the page hierarchy", "generate a mermaid sitemap", or when ia-conversation-skill requests it in Phase 3. Also trigger when someone pastes a list of pages and asks to visualize how they connect.
---

# Sitemap Skill

Take a website's page list and hierarchy, and render it as a clean, readable **Mermaid `graph TD` diagram** with a Page Index table below it.

The goal of the sitemap is to give anyone — designer, developer, client — an instant grasp of what pages exist and how they relate. Node shapes carry meaning: at a glance, you can tell which pages require auth, which are overlays, and where the entry points are without reading any text.

---

## Node Shapes

Use these shapes consistently. They carry semantic meaning — don't use them decoratively.

| Page Type | Syntax | Why this shape |
|---|---|---|
| Home / Root | `[[Label]]` | Stadium shape signals "start here" |
| Standard Page | `[Label]` | The default — plain rectangle |
| Auth Pages (Login, Register) | `(Label)` | Rounded rect — softer, signals user-facing gate |
| Modal / Drawer / Overlay | `>Label]` | Asymmetric — it's not a full page, it layers on top |
| External Link | `{{Label}}` | Hexagon — visually "outside" the main graph |

## Connection Types

| Relationship | Syntax |
|---|---|
| Standard navigation | `-->` |
| Requires auth / conditional | `-.->` |
| Bidirectional reference | `<-->` |

---

## Output Format

Produce two things:

**1. The Mermaid diagram** — inside a fenced `mermaid` code block, with:
- A `subgraph` grouping if the site has 2+ distinct sections (e.g., marketing site vs. app)
- Short node IDs (A, B, C, or logical abbreviations like `PDP`)
- Labels that use the user-facing page name, not internal technical names

**2. A Page Index table** below the diagram:

| ID | Page Name | Level | Auth Required | Notes |
|---|---|---|---|---|

---

## Example

For a quick reference, see `examples/sitemap-example.md` — it shows a complete e-commerce sitemap with subgraphs, auth gates, and modal overlays.

---

## A Few Things to Watch For

- **Auth-gated pages**: Use dashed arrows (`-.->`) to any page that requires login. This catches edge cases where a page looks like part of the public site but is actually behind auth.
- **Maximum depth**: Render up to Level 3. Deeper pages can be noted as `[... and N more sub-pages]` rather than cluttering the graph.
- **Large sites**: Use `subgraph` to group 5+ pages that belong to the same section — it dramatically improves readability.
