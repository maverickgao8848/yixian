---
name: visual-brief
description: Compiles Visual Explorer session outputs into three distinct visual direction briefs. Use this skill when all creative brainstorming (color moods, photography, graphics, motion) has been completed and it's time to synthesize everything into concrete, choosable visual proposals. Trigger when visual-explorer requests it in Phase 4, or when someone says "give me the three concepts", "compile the visual directions", "整理成视觉提案", "给我三套方案". Each brief is a complete creative direction a design team can act on immediately.
---

# Visual Brief Skill

Take all outputs from a Visual Explorer creative session — color palettes, photography direction, graphic language, motion concepts — and synthesize them into **three distinct, complete visual direction briefs** that a design team or client can choose between.

Each brief must feel like a **coherent world**, not a random collection of design choices. The color, type, photography, graphics, and motion must all speak the same language inside each proposal.

---

## Input You Need

Before generating, you must have available:
- **IA context**: site type, key pages, target audience, north star action
- **Style Discovery findings**: style keywords, brand assets analysis (if any), audience emotional world, constraints
- **Color mood boards**: the 3 palettes from `color-mood-skill`
- **Photography directions**: the 2-3 directions from Visual Explorer Phase 3
- **Graphic language sketch**: shapes, textures, spatial principles
- **Motion concepts**: the 5-dimension concepts from `motion-concept-skill`
- **User's axis choice**: Refined Elegance, Avant-Garde, or Radical/Brutalist

---

## How to Assign Palettes and Directions

Each of the three proposals should draw from the color mood boards and creative directions, but they must be **distinct from each other**:

- If the user chose **Refined Elegance**: Proposals A/B/C should focus on extreme polish, perfect proportions, subtle interactions, and high-end editorial aesthetics. No safe corporate templates.
- If the user chose **Avant-Garde**: Proposals A/B/C should be highly experimental, pushing the boundaries of WebGL, non-linear navigation, and unexpected color tensions.
- If the user chose **Radical/Brutalist**: Proposals A/B/C should intentionally break rules — raw, chaotic, exposing the grid, using oversized clashing typography, or aggressive motion.

Assign one primary color mood board to each proposal, then adapt the other creative dimensions to match.

---

## Output Format

For each of the three proposals, use this structure:

```markdown
---

## Proposal [A / B / C]: [Name]
> *[One evocative sentence — what does this visual world feel like? Who is it for?]*

### 🏷️ Direction Tag
[Refined Elegance / Avant-Garde / Radical] · [1-2 keywords that uniquely define this proposal vs. the others]

---

### 🎨 Color
**Palette name**: [From color-mood-skill output]
**Primary**: `#______` — [Name] — [one-word emotion]
**Secondary**: `#______` — [Name] — [one-word emotion]
**Accent**: `#______` — [Name] — [one-word emotion]
**Neutral Dark**: `#______` · **Neutral Light**: `#______`

> [1 sentence on how color is *used* in this proposal — e.g., "Primary owns all hero backgrounds; Accent is reserved exclusively for CTAs and active states"]

---

### 🔤 Typography
**Heading typeface**: [Font name or style descriptor] — [personality note, e.g., "geometric sans, cold and precise"]
**Body typeface**: [Font name or style descriptor] — [personality note]
**Typographic signature**: [What makes the type usage distinctive in this proposal? e.g., "Extreme scale contrast with 120px headings and 12px body", "Mixing classical serif with mechanical mono in the same headline", "Variable font weight responding to scroll"]

---

### 📷 Photography
**Direction**: [Name from Phase 3, or adapted version]
**Visual language**: [3-5 keywords]
**Subject focus**: [What gets photographed and how?]
**Processing / edit style**: [Color grading direction — e.g., "desaturated highlights, warm shadows", "high-key daylight, minimal retouching"]
**Avoid**: [Specific visual tropes]

---

### 🔷 Graphic Language
**Form vocabulary**: [What shapes/lines/structures define this proposal? e.g., "3D glassmorphism with refraction", "Brutalist exposed wireframes", "Bento grid with floating 3D elements", "Organic fluid masks"]
**Texture / surface**: [Grain? Acid metal reflection? Bioluminescent glow? Matte void?]
**Space principle**: [How is whitespace used? e.g., "Asymmetrical balance", "Content bleeding off canvas", "Dynamic spacing based on scroll velocity"]
**Graphic signature**: [One distinctive recurring element — e.g., "A thin horizontal rule at 1px opacity runs through every section header", "High-frequency noise applied to all background surfaces"]

---

### 🎬 Motion Signature
**Personality**: [How does motion feel in this proposal? e.g., "Slow, deliberate, theatrical", "Snappy and precise", "Organic and fluid"]
**Key interactions**: [2-3 specific motion concepts from motion-concept-skill that this proposal leans into most]
**Signature moment**: [One standout motion concept unique to this proposal — the thing that makes it memorable]
**Restraint note**: [What motion does this proposal deliberately avoid, and why?]

---

### 🌌 Background Asset Strategy
**Concept**: [The core idea for the background imagery/video for this specific proposal]
**AI Prompt Framework**: `[Specific artistic prompt keywords for Midjourney/nanobanana/Runway that fit this proposal's aesthetics]`
**Integration Approach**: [How this background interacts with the DOM elements, e.g., 'Parallax scroll behind content', 'Fixed with 30% black overlay']

---

### 💡 Best For
[When would a client choose this over the other two? What audience or business context does this serve best?]

### ⚠️ Watch Out For
[What's the risk or trade-off of this direction? Be honest.]
```

---

## After Presenting All Three

End with a brief **comparison table** to help the user choose:

```markdown
---

## At a Glance

| | Proposal A | Proposal B | Proposal C |
|---|---|---|---|
| **Name** | | | |
| **Axis** | | | |
| **Color temperature** | | | |
| **Motion intensity** | | | |
| **Best for audience** | | | |
| **Complexity to build** | Low / Med / High | Low / Med / High | Low / Med / High |
```

Then invite the user to respond:
> "这三套方案，你最直觉上被哪一套吸引？或者有没有想把哪两套的元素混在一起的感觉？"

---

## Compilation Rules

- **Each proposal must be visually coherent**: Don't mix a warm, organic color palette with cold, geometric graphic language unless that tension is explicitly intentional and named as such.
- **The three proposals must be meaningfully different**: If someone can't tell proposals apart at a glance, push the differentiation harder.
- **Be specific, not vague**: "Clean typography" is useless. "DM Sans at 72px, tracked at -2%, with a hanging numeral for section count" is useful.
- **Name everything**: Font names, hex codes, texture descriptions, timing values. Specificity is what makes a brief actionable.
- **The motion signature must match the visual personality**: A minimal, restrained proposal should have minimal, restrained motion. An expressive proposal should have expressive motion. Inconsistency breaks trust.
