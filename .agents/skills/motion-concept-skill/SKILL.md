---
name: motion-concept
description: Generates creative motion and interaction design concepts for websites. Use this skill when a visual direction needs dynamic, interactive, or animation design thinking — whether standalone or as part of a Visual Explorer session. Trigger when someone says "how should the site move", "I want scroll animations", "help me think through the interactions", "我想做一些有创意的动态效果", "网站能不能有沉浸式体验", or when visual-explorer requests it in Phase 3. Also trigger when someone describes an experiential concept (like video-driven scrolling) and wants it turned into a concrete interaction design.
---

# Motion Concept Skill

Take a website's type, key pages, style direction, and audience — and generate **concrete, creative motion and interaction concepts** across five design dimensions.

Motion is not decoration. It's the pacing, rhythm, and emotional arc of how someone experiences a site. Good motion design makes a site feel alive, purposeful, and worth spending time in. Bad motion design is noise.

The goal here is *concept* — not code. You're giving a creative director and developer enough direction to feel excited and clear about what to build.

---

## Input You Need

Before generating, you need (at minimum):
- **Site type and industry** — automotive? SaaS? fashion? portfolio?
- **Key pages** — which pages carry the most interaction weight?
- **Style direction** — what's the overall visual feeling? (Minimal, bold, immersive, editorial…)

Optional but helpful:
- Existing motion references (sites or products they admire)
- Target audience (how tech-savvy? How much patience for slow-loading animations?)
- Any specific interaction ideas the user has mentioned

---

## The Five Motion Dimensions

For each website, evaluate and generate concepts across **all five** of the following:

---

### 1. 🎬 Scroll Storytelling

**What it is**: Content, video, or scenes that progress as the user scrolls. The page becomes a timeline. The user controls the pace. Most powerful for: product reveals, brand narratives, immersive experiences.

**Examples of this pattern**:
- Automotive site: scrolling through the exterior 360° view, then into the interior, then the cockpit
- SaaS product: as you scroll, the dashboard UI fills in feature by feature
- Fashion: a lookbook where each scroll advances to the next look, with a fabric-texture transition

**What to consider**:
- What is the story being told? What's the beginning, middle, and end?
- Is it video-driven (pre-recorded playback synced to scroll position) or DOM-driven (CSS/JS animated elements)?
- Is it an entire section, or one hero moment?
- Performance: video-driven scroll storytelling is bandwidth-heavy — is the audience on reliable connections?

**Output format**: Describe the scroll story as a scene-by-scene sequence. Who/what does the user see at scroll position 0%? 25%? 50%? 75%? 100%?

---

### 2. 🖱️ Cursor Choreography

**What it is**: The cursor position drives visual changes — parallax depth shifts, magnetic pull effects, spotlight reveals, texture following. The cursor becomes part of the visual composition.

**Examples of this pattern**:
- Hovering over a product image makes layers shift at different speeds, creating fake depth
- Moving the cursor left/right shifts the balance of a split-screen layout
- A "spotlight" cursor reveals hidden text or image beneath a dark overlay
- CTA buttons that magnetically pull the cursor when it gets within 80px

**What to consider**:
- This is desktop-only — mobile users won't experience cursor effects. Is there a touch equivalent?
- Not appropriate for fast-paced functional interfaces (it adds friction). Best for experiential, brand-forward pages.
- Overuse is tiring — this is a signature moment, not background behavior.

**Output format**: Name the cursor effect, describe the trigger zone, and describe the visual response.

---

### 3. 🎭 Transition Theater

**What it is**: The animation *between* states — page to page, section to section, component to component. Transitions communicate hierarchy, flow, and cause-and-effect.

**Examples of this pattern**:
- Clicking a product card: the camera zooms through the card's image into the next page space (non-linear, cinematic).
- Navigating between pages: liquid distortion or glass refraction effects warp the current view before revealing the new one.
- Opening a modal: everything else blurs with a heavy depth-of-field effect, the modal scales up with physical inertia.
- Hovering a nav item: a highly stylized, inverted masking effect reveals an alternate layer of the layout.

**What to consider**:
- Duration: fast site = faster transitions (150–300ms). Immersive brand site = slower, more theatrical (400–800ms).
- Easing: ease-out feels natural and intentional. Ease-in-out feels polished. Linear feels robotic.
- Transition should communicate *spatial relationship* — where did the new content come from?

**Output format**: For each key transition, describe: trigger → animation → result.

---

### 4. 🌊 Ambient Motion

**What it is**: Background or environmental animation that plays continuously without user interaction. It makes a page feel alive even when the user is just reading.

**Examples of this pattern**:
- Particle systems that drift slowly across the hero background
- A gradient that slowly hue-shifts over 8 seconds
- A mesh or fabric texture that breathes in and out at 0.3s intervals
- A grid that subtly warps when the mouse enters different quadrants
- Smoke, fog, or fluid simulation as a hero background

**What to consider**:
- This is the easiest motion to overdo. It must be subtle enough that it doesn't distract from content.
- Performance: complex WebGL effects should be opt-out for low-power devices (use `prefers-reduced-motion`)
- Ambient motion sets the *baseline emotional temperature* of the site. Choose to match the brand frequency.

**Output format**: Describe the visual element, its behavior cycle (if looping), and its emotional function.

---

### 5. ✨ Interaction Rituals

**What it is**: The micro-moments of feedback when a user takes action — hover states, button presses, form submissions, loading states, success confirmation. These are the "feel" of the site.

**Examples of this pattern**:
- Button hover: magnetic physics pull the button toward the cursor with spring tension (mass and inertia).
- Typography interaction: hovering near text dynamically alters its variable font weight or tracking based on proximity.
- Navigation item hover: brutalist, instantaneous color inversion with zero transition time to create a sharp, mechanical feel.
- Image hover: 3D tilt effect driven by cursor coordinates with a reflective sheen overlaid.
- Form submit: the submit button breaks apart into particles that reform into a success message.

**What to consider**:
- Rituals must be consistent — every interactive element of the same type should behave the same way.
- Speed matters here: interaction feedback should be near-instant (50–150ms) to not feel lagged.
- These are the details users remember subconsciously. A site with good rituals feels "expensive" even if its layout is simple.

**Output format**: Component type → hover/active/focus state → animation description + timing.

---

### 6. 🌌 Immersive Background Assets (The Core)

**What it is**: High-end websites rely on breathtaking, cinematic background imagery or video to establish mood before a single word is read. This is the "soul" of the site. It’s what separates a template from a premium brand experience.

**Examples of this pattern**:
- High-end tech: A WebGL fluid simulation or glowing particle system that reacts to mouse velocity and scroll speed.
- Architecture firm: Monolithic 3D geometry that slowly rotates and distorts lighting angles throughout the day via shaders.
- A.I. Startup: A generative, bioluminescent neural network acting as a glass-morphism backing layer.

**What to consider**:
- Does the user have their own assets? If not, you MUST provide explicit, highly artistic AI prompts for them to generate these backgrounds (e.g., using Midjourney for images, Runway/Luma/nanobanana for video).
- How does the background hook into the DOM? (E.g., fixed position with `mix-blend-mode`, opacity fading on scroll).
- Performance: Assume lazy-loading, provide fallback image concepts.

**Output format**: Describe the concept. Most importantly, provide the **AI Video/Image Prompt (English)** for the user, and a brief **Integration Guide** on how it behaves in the browser.

---

## Output Structure

After evaluating all five dimensions, produce:

```markdown
## Motion Concepts for [Site Name / Type]

### Approach Philosophy
[2-3 sentences: What is the overall motion language of this site? Is it theatrical? Precise? Organic? Why?]

---

### 1. Scroll Storytelling
**Recommended**: [Yes / Partial / No — and why]
[If yes: describe the scene sequence for the key page(s) where this applies]

### 2. Cursor Choreography
**Recommended**: [Yes / Partial / No — and why]
[If yes: name the effect + describe trigger zone + visual response, for 1-2 key moments]

### 3. Transition Theater
**Recommended**: [Yes — always has some value]
[Describe 2-3 key transitions with trigger → animation → result]

### 4. Ambient Motion
**Recommended**: [Yes / Partial / No — and why]
[If yes: describe the element, its cycle, and its emotional function]

### 5. Interaction Rituals
**Recommended**: [Yes — always has some value]
[List 4-6 key component interactions with animation descriptions and timings]

### 6. Immersive Background Assets (The Core)
**Recommended**: [Yes — critical for premium feel]
**Concept**: [Describe the visual scene, e.g., 'Macro gears unfolding']
**AI Generation Prompt (Image/Video)**: `[Highly detailed, artistic prompt in English for Midjourney/Runway/nanobanana]`
**Integration Guide**: [How should the user implement this in code? e.g., 'Place as fixed background video, z-index -1, fade opacity to 0.5 on scroll']

---

### Priority & Complexity

| Concept | Impact | Complexity | Priority |
|---|---|---|---|
| [Scroll Storytelling] | High | High | Build first |
| [Transition Theater] | High | Medium | Build first |
| [Interaction Rituals] | Medium | Low | Build first |
| [Ambient Motion] | Medium | Medium | Build second |
| [Cursor Choreography] | Low-Medium | Medium | Build second |
| [Immersive Backgrounds] | Highest | Medium | Critical Asset |
```

---

## A Note on Restraint

Not every pattern belongs on every site. A healthcare booking platform does not need scroll-driven video storytelling. A luxury automobile brand does.

For each dimension, be honest: **if it doesn't serve this site's users or purpose, say so and explain why**. A concept that doesn't fit the context is worse than no concept.

The goal is a motion system that feels inevitable — like it couldn't have been designed any other way for this particular site and brand.
