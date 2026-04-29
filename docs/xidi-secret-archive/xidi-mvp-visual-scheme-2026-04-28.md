# Visual Scheme: 西递秘档 (Xidi Secret Archive)

> *基于“双生视界”的 Awwwards 级别东方数字美学体验。以水墨流体与古典衬线的剧烈冲突，将徽派古村落重塑为一座空灵与深邃交织的数字遗迹。*

## 1. 🎭 Moodboard & Aesthetic Foundation
**Direction Name**: 极致优雅 (Refined Elegance) —— “流体水墨与纸面张力”
**Core Emotion**: 空灵 (Ethereal)、隽永 (Timeless)、神秘 (Cryptic)
**Visual Keywords**: Fluid Dynamics, Classical-Modern Clash, Twin Visions (Day/Night), Immersive Canvas

西递秘档不仅仅是一个导览工具，而是一张有生命的数字卷轴。在日间，它呈现出纸张的温润和水墨的流淌，极度克制、优雅，运用现代数字 WebGL 技术模拟物理世界的墨晕涟漪，让每一次交互都留下诗意的痕迹。当夜幕降临（或切换至赛博遗迹模式），温润的宣纸被虚空吞噬，原本古朴的元素褪去色彩，化为深邃夜空中的高对比度几何线条，营造出极强的“秘档”解谜氛围。整体排版将古典中式衬线体与极度现代的无衬线体进行剧烈碰撞，打破平庸。

---

## 2. 🌌 Immersive Background & Motion Strategy (The Core)
*The background elements that define the site's premium feel.*

### Main Hero / Background Scene (日间 - 徽州水墨卷轴)
- **Concept**: A fluid, slow-moving watercolor simulation of Hui-style architecture. The static image breathes gently, and user interactions (cursor hover) create soft ink-wash ripples that subtly distort the architecture.
- **AI Image Prompt**: 
  > `An ethereal, ultra-high definition watercolor and ink-wash painting of an ancient Hui-style village (white walls, dark grey tiled roofs) nestled in misty emerald mountains. Soft, warm morning sunlight hitting the eaves. Painted on textured rice paper. Serene, poetic, poetic realism, Studio Ghibli style but more traditional Chinese ink influence, soft edges, masterpiece --ar 16:9 --v 6.0`
- **Frontend Integration Guide**:
  - `Position`: Fixed, `z-index`: -1
  - `Behavior`: Use WebGL (e.g., Curtains.js or OGL) to apply a displacement map shader over the static image. `mousemove` triggers a localized ripple effect.
  - `Motion Math`: `transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1)` for all major state changes.

### Main Hero / Background Scene (夜间 - 赛博数字秘档)
- **Concept**: The paper burns away or inverts into a deep void. The architecture remains only as glowing geometric outlines (wireframe) against pitch black.
- **Frontend Integration Guide**:
  - `Behavior`: A mask-reveal animation (SVG clip-path or WebGL transition) that wipes the daytime scene to reveal the dark mode.
  - `Motion Math`: `transition: background-color 1.2s cubic-bezier(0.85, 0, 0.15, 1)` for dramatic, slightly tense easing.

---

## 3. 🎨 Design System: Colors & Tokens (双生视界)

### 🌞 日间模式 (The Ethereal Scroll)
**Primary Palette**
- Background Core (宣纸白): `#F4EFE6` - Global background, warm rice paper texture.
- Primary Text (古墨灰): `#2A2F33` - Headings and primary text. Not pure black to maintain softness.
- Accent/Secondary (远山黛): `#698173` - Faded mountain green for borders and secondary active states.

**Highlight Palette**
- Glow/Active (晨光金): `#E8CA94` - Used sparingly for puzzle success states, glowing active elements, or hover highlights.
- Ambient (雾空青): `#D6E5ED` - Soft sky blue used for large soft shadows or gradient backdrops behind cards.

### 🌙 夜间模式 (The Cyber Relic)
**Primary Palette**
- Background Core (虚空黑): `#0D1114` - Global background, abyss-like deep grey/black.
- Primary Text (月华白): `#E6E9EB` - Ash white for primary text, low eye-strain.
- Accent/Secondary (荧光黛): `#4CF09D` - Neon glitch green. Replaces the mountain green for UI borders and digital accents.

**Highlight Palette**
- Glow/Active (警告红): `#FF3366` - Glitch pink/red. Used for errors, hidden elements revealed, or high-tension puzzles.
- Ambient (深海蓝): `#1A2A33` - Dark, moody blue for card backgrounds to separate from the abyss base.

*(Tailwind Config override suggested: Map these to CSS variables to allow seamless Day/Night switching without changing utility classes.)*

---

## 4. 🔤 Design System: Typography

**Fonts**
- **Heading Font**: `Noto Serif SC` (思源宋体)
  - Feel: Classical, elegant, carrying the weight of history and literature. Perfect for chapter titles, puzzle names, and NPC quotes.
- **Body Font**: `Inter` or `Noto Sans SC` (思源黑体)
  - Feel: Extremely modern, crisp, and functional. Contrast sharply with the Serif headings to provide a contemporary digital framing to the historical content.
- **Technical/Accent Font**: `JetBrains Mono`
  - Feel: Used exclusively in the UI components (like coordinate tracking, inventory counts, or "Secret Archive" metadata) to reinforce the "Archive/System" narrative.

**Typography Rules**
- *Headlines*: Extreme scale contrast. Large chapter titles (e.g., `text-6xl` to `text-8xl` on desktop) positioned asymmetrically. Use tight tracking (`tracking-tight`) for Sans-serif, and loose tracking (`tracking-widest`) for Serif accents.
- *Paragraphs*: High line-height (`leading-relaxed` or `1.7`), constrained max-width (`max-w-[65ch]`) for optimal readability of the narrative text.
- *Mixing*: Intentionally mix serif and sans-serif within the same layout block. E.g., A large Serif title with a tiny Mono subtitle directly beneath it.

---

## 5. 🧱 Design System: Layout & Components

**Spacing & Grids**
- Asymmetrical and tension-driven. Break the conventional centered box. Elements should feel like ink dropped onto paper—sometimes clustered tightly, sometimes floating with massive empty space (`gap-16` to `gap-32`).

**UI Components (Cards & Overlays)**
- **Shape/Radius**: Sharp and strict. `border-radius: 0px` for all primary containers to mimic paper edges and archival folders. Only circular elements are allowed for specific icons (like the compass or seal).
- **Depth (日间)**: Glassmorphism with a paper twist. Semi-transparent warm white backgrounds (`bg-white/40`) with a heavy background blur (`backdrop-blur-md`), and a subtle, crisp 1px solid border (`border-black/10`).
- **Depth (夜间)**: Brutalist flat. High-contrast neon borders (`border-[#4CF09D]`) on solid dark backgrounds. No shadows, only glow effects (`box-shadow: 0 0 15px rgba(76, 240, 157, 0.4)`).
- **State Changes (Hover)**: Buttons don't just change color; they deform or shift. E.g., text scales up slightly (`scale-105`), and a 1px border expands outwards like a ripple.

---

## 6. 🧑‍🎨 Character & NPC Asset Specification

**核心规则：所有人物/NPC立绘素材必须为透明背景的单独人物，不含任何场景、背景、环境元素。**

### Character Asset Requirements
- **格式**：PNG（透明背景），禁止 JPG
- **内容**：仅人物本体（全身或半身），无场景背景、无环境装饰
- **用途**：NPC立绘叠加在预设场景背景图之上，由前端合成；因此人物素材必须独立、纯净
- **生成 Prompt 规范**：AI 生成人物图时，须在 prompt 中明确指定 `transparent background, isolated character, no background, no scenery, character only`

### NPC 清单（MVP）
| 角色 | 身份 | 立绘要求 |
| --- | --- | --- |
| 胡老夫子 | 序章引导 NPC | 透明背景单独人物，古风老者形象 |
| 胡文光 | 第一幕剧情 NPC | 透明背景单独人物，明代官员形象 |

---

## 7. 🚦 Do's and Don'ts

### ✅ Do
- Do use massive negative space. Let the background WebGL/Images breathe.
- Do implement the strict Day/Night CSS variables. Every component must be built to support this dual-state.
- Do treat transitions as physical movements. Use the `cubic-bezier(0.25, 1, 0.5, 1)` to make things snap gracefully into place, not slide lazily.

### 🚫 Don't
- Don't use standard drop shadows (`shadow-md`, `shadow-lg`). They look cheap and break the paper/digital aesthetic. Use border outlines or glow.
- Don't center-align everything. The layout must feel dynamic and asymmetrical.
- Don't use purely flat, un-animated backgrounds. If WebGL is too heavy, the background must at least have a slow, subtle CSS breathing animation or grain overlay to feel "alive".
