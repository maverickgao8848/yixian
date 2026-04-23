---
name: color-mood
description: Generates color mood boards for website visual design. Use this skill when a visual direction needs color palettes with emotional grounding — whether standalone or as part of a Visual Explorer session. Trigger when someone says "give me a color palette", "I need color direction", "帮我做色彩情绪板", "选一下配色方案", or when visual-explorer requests it in Phase 3. Also useful standalone when someone has a brand description or style keywords and wants a concrete palette to react to.
---

# Color Mood Skill

Take a website's brand direction, style keywords, target audience, and industry context — and generate **emotionally grounded color palettes** that a design team can immediately use as a starting point.

Color isn't decoration. It's the first and most persistent emotional signal a brand sends. Each palette here must have a *why* — not just hex codes, but the reasoning behind every choice.

---

## Input You Need

Before generating, you need (at minimum):
- **Style direction** — key words or phrases describing the desired feeling (e.g., "minimal luxury", "energetic tech", "warm and organic")
- **Industry** — what kind of site/brand is this? (e-commerce, SaaS, portfolio, F&B, automotive, healthcare…)
- **Target audience** — who are the visitors, and what visual world do they already inhabit?

Optional but helpful:
- Existing brand colors (logo, guidelines)
- Sites or brands they admire
- Hard constraints or禁区 (colors to avoid)

---

## Output Format

Generate **3 distinct color mood boards**. Each one should feel like a different world — not just a different shade of the same idea.

For each board:

```markdown
### 🎨 Palette [N]: [Name]
> [One evocative sentence — what does this color world feel like? What does it say?]

| Role         | Swatch    | Hex       | Name           | Emotion / Usage Note                        |
|---|---|---|---|---|
| Primary      | ████████ | #______   | [Color Name]   | [What does this color do / feel like?]     |
| Secondary    | ████████ | #______   | [Color Name]   | [When and why to use it]                   |
| Aura / Glow  | ████████ | #______   | [Color Name]   | [Used for gradients, glowing effects, ambient light] |
| Disruptor    | ████████ | #______   | [Color Name]   | [Unexpected, high-contrast accent for breaking rules and drawing eyes] |
| Neutral Dark | ████████ | #______   | [Color Name]   | [Text, dark backgrounds]                   |
| Neutral Light| ████████ | #______   | [Color Name]   | [White space, light backgrounds]           |

**Mood tags**: [tag1] · [tag2] · [tag3] · [tag4]

**Best for**: [Which type of page or section would this palette shine on? e.g., "homepage hero, full-bleed sections, dark-mode-first layouts"]

**Combine with**: [What photography style, typography weight, or graphic texture pairs well with this palette?]

**Watch out for**: [Any misuse risk — e.g., "avoid using Primary at small sizes", or "never pair Disruptor against Secondary without a Neutral buffer"]
```

---

## Color Design Rules

Follow these when composing palettes:

**Contrast**: Ensure at minimum AA accessibility contrast between text colors and their backgrounds. When in doubt, test Primary or Accent on both Neutral Light and Neutral Dark.

**Color Tension**: Force unexpected combinations. Pair colors that shouldn't conventionally work but do when balanced correctly (e.g., deep chartreuse with charcoal, bioluminescent pink against pitch black). Safe, boring colors (like corporate blue and white) are strictly prohibited unless heavily stylized.

**Avoid generic defaults**: Don't reach for plain red, blue, or green. Use hue-shifted, saturated, or tinted variants that feel intentional and avant-garde.

**Each palette must have a distinct identity**: If palettes feel like they could be interchanged by adjusting brightness, they're not distinct enough. Push the differences in hue, temperature, and saturation to extremes.

**Name colors meaningfully**: "Toxic Neon" communicates more than "Light Green". Names help designers remember and reference colors correctly.

**The Disruptor is a weapon**: Every palette's Disruptor (formerly Accent) should be a striking, unconventional color that cuts through the layout like a knife.

---

## Matching to Context

Different industries have different color traditions — acknowledge them, then decide how closely to follow:

| Industry | Common direction | Opportunity to stand out |
|---|---|---|
| Fintech / Banking | Navy, white, conservative | Warm neutrals + confident accent |
| Health / Wellness | Greens, soft blues, white | Rich earth tones or deep jewel tones |
| Luxury / Fashion | Black, white, gold, nude | Unexpected dark accent with restraint |
| SaaS / Tech | Blues, purples, grays | Warm tones (stand out in a cold category) |
| Food & Beverage | Warm reds, oranges, earth | Cool, editorial palettes for premium positioning |
| Automotive | Dark, metallic, blue | High-contrast monochrome or bold single accent |
| Creative Agency | Anything goes | Use this as a signal: go boldest here |

---

## A Note on Dark vs. Light

If the site's design direction allows, lean into a dark-mode-first or dark-section-heavy approach to allow Aura/Glow colors to pop:
- Neutral Dark should be rich, deep, and atmospheric (avoid pure black — use `#050505` to `#0D0D0D` range with a hint of the primary hue).
- Neutral Light should function as a stark, high-contrast surface.
- Disruptor colors must vibrate against dark backgrounds.
- Aura/Glow colors should be used for radial gradients, blurred background elements, or glassmorphism backing.
