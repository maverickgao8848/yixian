# Visual Scheme: 西递秘档：明经遗梦 (MVP版)

> *基于真实物理时钟的双生视界设计。白天是诗意消散的流体古卷，夜晚则是被荧光和数据重构的赛博遗迹。我们用极端的对比拉开这场实景探索的体验张力。*

## 1. 🎭 Moodboard & Aesthetic Foundation
**Direction Name**: 双生视界 (Ethereal Vellum ⇄ Cyber-Antiquity)
**Core Emotion**: 神秘、诗意、硬核解密
**Visual Keywords**: 流体模糊 (Fluid Blur), 极致留白 (Extreme Whitespace), 荧光扫描线 (Neon Wireframe), 字体碰撞 (Font Clash)

这个项目摒弃了传统的“旅游导览UI”。白天，整个应用呈现出美术馆级别的空灵感，UI元素没有生硬的边界，仿佛悬浮在雾中；而当夜幕降临（如 18:00 之后），应用瞬间切换为“夜视仪”视角，深邃的黑底上闪烁着锐利的荧光青绿线条，古典的村落被解构为数字化的情报终端，给玩家极强的黑客浸入感。

---

## 2. 🌌 Immersive Background & Motion Strategy (The Core)
*背景不只是一张图，它是动态的呼吸容器。*

### ☀️ 日间主视界：空灵流体卷轴 (Day Mode)
- **Concept**: 一张失去焦点的水墨摄影，在底层像水波一样极其缓慢地流淌（Fluid Mist）。
- **AI Video/Image Prompt**: 
  > `Abstract macro photography of ancient Chinese rice paper with slow ink dispersion, pale beige and warm light gray, soft gaussian blur, ethereal lighting, minimalist design background, 8k resolution --ar 16:9`
- **Frontend Integration Guide**:
  - `Position`: Fixed, `z-index`: -1
  - `Behavior`: CSS `filter: blur(20px)` 加上极缓慢的 `transform: scale(1.1) translate(...)` 循环平移，模拟流体。当弹窗出现时，blur 半径激增。

### 🌙 夜间主视界：东方未来主义 (Night Mode)
- **Concept**: 三维线框 (Wireframe) 风格的徽派建筑结构，悬浮在深色背景中，随着呼吸频率闪烁荧光。
- **AI Video/Image Prompt**: 
  > `Wireframe hologram of ancient Chinese Hui style architecture, glowing neon green lines on deep obsidian black background, cyber-antiquity aesthetic, UI design background, 3D render, dark glassmorphism, 8k --ar 16:9`
- **Frontend Integration Guide**:
  - `Position`: Fixed, `z-index`: -1
  - `Behavior`: 叠加极轻微的 CSS `mix-blend-mode: screen` 和周期性的 `.1s` Glitch 闪烁动画（触发条件为：GPS定位更新或任务刷新时）。

---

## 3. 🎨 Design System: Colors & Tokens

### ☀️ Day Mode Tokens (空灵卷轴)
**Primary Palette**
- Primary (大面积底图): `#C4C8C2` - 青石板灰 (Hui Architecture Gray)
- Secondary (主背景色): `#EBEAE5` - 奶白宣纸 (Warm Rice Paper)
- Accent / Glow: `#D87F72` - 褪色朱砂 (Faded Cinnabar, 用于目标点大范围高斯模糊光晕)
- Disruptor: `#8B2F22` - 暗红印泥 (Dark Seal Red, 用于极端重要的盖章、强引导CTA)

**Neutral Base**
- Surface/Card: `rgba(235, 234, 229, 0.6)` + `backdrop-filter: blur(24px)` (毛玻璃)
- Foreground Primary Text: `#2B2C2A` - 深岩墨黑
- Foreground Subtle Text: `#8D8E8A` - 浅墨灰

### 🌙 Night Mode Tokens (东方未来主义)
**Primary Palette**
- Primary (弹窗底色): `#121C22` - 古厝暗影 (Dark Slate)
- Secondary (深渊背景): `#05090C` - 极寒黑 (Obsidian Void)
- Accent / Glow: `#00FFAA` - 幽光青绿 (Neon Jade, 用于扫描线、导航光标)
- Disruptor: `#FFB800` - 液态暗金 (Liquid Gold, 用于稀有线索、成就)

**Neutral Base**
- Surface/Card: `rgba(18, 28, 34, 0.7)` + `backdrop-filter: blur(24px)` + `border: 1px solid rgba(0, 255, 170, 0.3)`
- Foreground Primary Text: `#E4EDF2` - 冷冽银灰
- Foreground Subtle Text: `#5C7785` - 铁蓝灰

---

## 4. 🔤 Design System: Typography

**Fonts**
- **Heading/Plot Font**: **Noto Serif SC** (思源宋体)
  - Feel: 承载剧情对话和关卡标题，带来神圣、克制、古典的美感。
- **UI/Technical Font**: **JetBrains Mono** 或 **Space Grotesk**
  - Feel: 用于时间戳、任务代号 (`MISSION_01`)、GPS坐标、加载进度等，带来机械无情的数字终端感。

**Typography Rules**
- *Headlines*: 大幅拉开字间距 (`letter-spacing: 0.1em` 至 `0.2em`)，古典字体的排版需要呼吸感。
- *Font Clash*: 坚决执行“宋体+等宽”的字体对撞。例如：`[ 任务：寻找胡文光牌楼 ]`，括号使用等宽字体，中文使用宋体。
- *Line Height*: 正文剧情 `line-height: 1.8`，保证户外行走的阅读体验。

---

## 5. 🧱 Design System: Layout & Components

**日夜切换逻辑 (Time-based Toggle)**
- 系统读取当前时间。
- `06:00 - 17:59` 自动应用 `theme-day` (无边框悬浮风格)。
- `18:00 - 05:59` 自动应用 `theme-night` (锐利发光线框风格)。

**UI Components (Buttons / Cards)**
- **日间组件形制 (Day)**: 
  - **边界**: 绝对禁止使用 `1px` 实线边框。所有卡片通过 `box-shadow` (例如 `0 12px 48px rgba(0,0,0,0.05)`) 和 `backdrop-filter` 浮动。
  - **动效**: 极为平滑的弹性呼吸 (`transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1)`)。
- **夜间组件形制 (Night)**: 
  - **边界**: 必须有 `1px` 实线边框，且边框带有发光色 (`#00FFAA`)。边角可加入机甲风的 `[ ]` 准星设计。
  - **动效**: 带有机械故障感的瞬发切换 (`transition: none` 或极短的 `0.1s`)，Hover 时立刻反色 (Invert)。

---

## 6. 🚦 Do's and Don'ts

### ✅ Do
- **必须利用高斯模糊** (`backdrop-filter: blur`)：无论是白天的水墨底色，还是夜晚的暗影弹窗，必须建立强烈的层级空间感。
- **必须拉开字体差异**：严格贯彻古典宋体与无情机械等宽字体的排版对撞。
- **必须保持极简主界面**：地图主界面的按钮要极其克制，不要让屏幕布满UI，把所有视觉留给沉浸式的流动背景。

### 🚫 Don't
- **绝不使用平庸的系统默认组件**：禁止使用标准的白底黑字对话框、默认的微信圆角按钮样式。
- **绝不使用大面积纯黑/纯白**：即使是夜间模式，底色也是 `#05090C` 而非 `#000000`；日间底色是 `#EBEAE5` 而非 `#FFFFFF`。
- **绝不滥用动效**：动画只在 LBS 触发、盖章、或日夜交替的决定性瞬间爆发，平时必须保持绝对的克制与静谧。
