---
name: visual-schema
description: Compiles the final chosen visual direction into a comprehensive Visual Scheme Document (.md). Use this skill exclusively at the end of the Visual Explorer workflow once the user has finalized their choice. Trigger when the workflow reaches Phase 4, or when the user says "generate the final visual document", "输出视觉档案".
---

# Visual Schema Skill

You are responsible for generating the ultimate deliverable of the Visual Explorer workflow: a comprehensive, developer-ready **Visual Scheme Document**. This document translates abstract moodboard concepts into concrete design system tokens, layout strategies, and most importantly, specific instructions for generating immersive background assets (image/video).

---

## Input You Need

Before generating, you must have available:
- **IA Context**: Site type, key pages, target audience.
- **The Chosen Visual Direction**: The specific proposal (from `visual-brief-skill`) the user selected, potentially including any custom adjustments they made.
- **Workflow State**: The previous generations from `color-mood-skill` and `motion-concept-skill` that apply to this choice.

---

## Output Format

You must format your output as a complete Markdown document (`[project]-visual-scheme-[date].md`) and instruct the system to write it out to the appropriate directory using the document content.

The document must strictly follow this structure:

```markdown
# Visual Scheme: [Project Name]

> *[1-2 sentences summarizing the core visual philosophy of this project]*

## 1. 🎭 Moodboard & Aesthetic Foundation
**Direction Name**: [Chosen Direction]
**Core Emotion**: [Emotion]
**Visual Keywords**: [3-5 Keywords]

[Write a paragraph painting a picture of how the website feels. E.g., "The site feels like a high-end editorial magazine, blending deep monolithic textures with precise, fast-paced cinematic motion..."]

---

## 2. 🌌 Immersive Background & Motion Strategy (The Core)
*The background elements that define the site's premium feel.*

### Main Hero / Scroll Scene
- **Concept**: [Describe the scene. E.g., 'A fluid, slow-moving liquid metal simulation that responds to user scroll.' or 'Surreal geometric structures floating in an endless void']
- **AI Video/Image Prompt**: 
  > `[Provide a very detailed, artistic prompt in English for tools like Midjourney v6 / Runway Gen-2 / Nanobanana. Include lighting, camera angle, texture, focal length, and motion/speed instructions.]`
  *(e.g., `Macro 8k shot of complex watch gears made of iridescent glass, cinematic lighting, pitch black background, bioluminescent glow, slow unfolding rotation motion, photorealistic, unreal engine 5 render --ar 16:9 --v 6.0`)*
- **Frontend Integration Guide**:
  - `Position`: Fixed, `z-index`: -1
  - `Behavior`: [E.g., opacity scales from 1.0 to 0.2 down the scroll timeline, or WebGL distortion on mousemove]
  - `Fallback`: Static high-res image with CSS `mix-blend-mode: soft-light`

---

## 3. 🎨 Design System: Colors & Tokens

**Primary Palette**
- Primary: `#[Hex]` - [Name/Usage]
- Secondary: `#[Hex]` - [Name/Usage]
- Accent: `#[Hex]` - [Heavy CTA usage]

**Neutral Base**
- Background Core (Dark): `#[Hex]`
- Surface/Card (Dark): `#[Hex]`
- Foreground Primary Text: `#[Hex]`
- Foreground Subtle Text: `#[Hex]`

*(Include any suggested Tailwind config overrides if applicable: e.g., `colors: { brand: '...', surface: '...' }`)*

---

## 4. 🔤 Design System: Typography

**Fonts**
- **Heading Font**: [Font Name] (e.g., *Playfair Display*, *Inter*)
  - Feel: [Why this font?]
- **Body Font**: [Font Name]
  - Feel: [Why this font?]
- **Mono/Technical Font (if used)**: [Font Name]

**Typography Rules**
- *Headlines*: [E.g., "Extreme scale contrast (e.g., 144px for desktop), tracking-tight (-3%), mixing a classical serif word inside a mechanical sans-serif sentence."]
- *Paragraphs*: [E.g., "Line-height 1.6, max-width 65ch for readability, but positioned asymmetrically."]
- *Variable Fonts (if used)*: [E.g., "Font weight animates from 100 to 900 on scroll velocity."]

---

## 5. 🧱 Design System: Layout & Components

**Spacing & Grids**
- [Describe the spatial approach. E.g., "Asymmetrical and tension-driven. We use a 12-column grid but frequently break it for full-bleed images that spill off the canvas. Gap sizes should jump significantly (e.g., from 16px straight to 120px) for dramatic contrast."]

**UI Components (Buttons / Cards)**
- **Shape/Radius**: [E.g., "Strictly 0px border-radius, brutalist approach" OR "Extreme pill-shapes mixed with sharp cut corners"]
- **Shadows/Depth**: [Are elements flat, or elevated with soft shadows? E.g., "No CSS box-shadows. Use faint 1px borders (opacity 10%) or heavy, high-contrast brutalist drop shadows (e.g., 8px 8px 0px #000)."]
- **State Changes (Hover)**: [E.g., "Buttons invert colors instantly with no transition, harsh and technical" OR "Magnetic physical pull with liquid deformation."]

---

## 6. 🚦 Do's and Don'ts

### ✅ Do
- [Rule 1]
- [Rule 2]
- [Rule 3]

### 🚫 Don't
- [Rule 1]
- [Rule 2]
- [Rule 3]

```

## Agent Instructions for writing the file:
When you use this skill, present the result to the user, and if they approve, you must write the resulting markdown out using your file creation tools into the user's current project directory, typically named `[project-name]-visual-scheme-[date].md`.
