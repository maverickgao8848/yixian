# Visual Scheme: 西递秘档 (Xidi Secret Archive)

> *《西递秘档》不仅是一个旅游导览，它是一份承载着明经胡氏宗族契约与历史回响的机密数字档案。*

## 1. 🎭 Moodboard & Aesthetic Foundation
**Direction Name**: Neo-Oriental Archival (新东方野兽派档案风)
**Core Emotion**: 宗族契约，肃杀机密，历史考察
**Visual Keywords**: 极简高反差、物理噪点、机密红印、碑石水汽

这套设计彻底抛弃了廉价的“新中式”文旅模板，通过极端克制的黑白灰体系与极具攻击性的红色/荧光绿撞击，营造出一种“现代考察终端读取古老徽派记忆”的肃杀感与高级质感。日间模式犹如一份盖有朱红印章的徽墨白纸契约，夜间模式则像是一块常年隐没在水汽与青苔中的古老碑石。

---

## 2. 🌌 Immersive Background & Motion Strategy (The Core)
*The background elements that define the site's premium feel.*

### Main Hero / Scroll Scene
- **Concept**: 界面底层永远漂浮着一层极细微的 Film Grain（胶片噪点），在关键页面背景深处，有极高对比度的徽派古建局部黑白摄影（如马头墙、天井）作为底图。
- **AI Video/Image Prompt**: 
  > `High contrast macro black and white photography of Hui-style architecture horse-head wall, highly detailed texture of old bricks and tiles, extremely dark shadows, film grain, cinematic lighting, brutalist composition, stark minimalism --ar 16:9 --v 6.0`
- **Frontend Integration Guide**:
  - `Position`: Fixed, `z-index`: -1
  - `Behavior`: 滚动时，背景的胶片噪点持续微弱闪烁（CSS animated noise）。照片随滚动产生非常缓慢的视差效果（Parallax），并使用硬切（Hard Cut）作为转场。
  - `Fallback`: Static high-res B&W image with CSS `mix-blend-mode: multiply` (light mode) or `screen` (dark mode) and a static SVG noise overlay.

---

## 3. 🎨 Design System: Colors & Tokens

**日间模式 (Light Mode): 黛瓦与朱泥 (Ink Tile & Cinnabar Seal)**
- Primary (黛瓦灰): `#1A1C1D` - 界面重要图形和粗体重标题色
- Secondary (徽墨): `#2B2D2F` - 辅助文本色
- Accent / Disruptor (朱泥大红): `#D32F2F` - **绝对视觉核心**。用于印章、警告、绝密高亮，刺破黑白。
- Background Core (Light): `#EBE8E3` - (剥落粉墙) 带有风化质感的暖白，主背景色。
- Surface/Card (Light): `#F5F3F0` - 卡片和交互区域底色。

**夜间模式 (Dark Mode): 苔藓与碑石 (Moss & Stele)**
- Primary (湿碑阴): `#131615` - 主背景色，极深的冷绿色调黑。
- Secondary (阴刻灰): `#29332D` - 卡片底色，带有石灰岩的粗糙质感。
- Accent / Disruptor (荧光苔藓): `#A9C25D` - **酸性生命力**。用于扫描仪、进度条、罗盘焦点。
- Foreground Primary Text (石英白): `#C1CAC5` - 带有微绿冷调的白色文字，冰冷锐利。
- Aura/Glow (古井水汽): `#3B4D44` - 用于地图迷雾的微弱渐变光晕。

---

## 4. 🔤 Design System: Typography

**Fonts**
- **Heading Font**: Noto Serif SC (思源宋体)
  - Feel: 极其锋利、优雅的古典宋体，传达历史文献的庄重感与碑刻感。
- **Body Font**: Noto Sans SC (思源黑体)
  - Feel: 无衬线体确保在移动端和复杂背景下的小字可读性。
- **Mono/Technical Font (if used)**: JetBrains Mono 或 IBM Plex Mono
  - Feel: 极度机械、冰冷的等宽字体，代表现代解析工具和坐标数据。

**Typography Rules**
- *Headlines*: 极大的字号对比，中文字间距（Letter-spacing）拉大（如 0.05em），宋体字重强制使用 Heavy 或 Black，像刀刻一样锐利。
- *Technical Text*: GPS 坐标、档案编号强制使用 Mono 字体，字号通常较小（10-12px），采用全大写（Uppercase），常置于页面边缘作为装饰。
- *Redaction*: 敏感或未解锁信息使用 `background-color: var(--primary)` 直接遮盖文本，仅在 hover 或通关后滑动揭开。

---

## 5. 🧱 Design System: Layout & Components

**Spacing & Grids**
- 采用打破常规的**阶梯式网格系统**，呼应徽派建筑马头墙“跌落式”的视觉特征。模块与模块之间不是规整对齐的，而是有刻意的错位和极端的留白。

**UI Components (Buttons / Cards)**
- **Shape/Radius**: 极其锋利，`border-radius: 0px`。坚决不用圆角，维持档案的硬核感。
- **Shadows/Depth**: 摒弃柔和的高斯模糊阴影。使用 1px 实线边框作为容器边界（Opacity 15%），或者极其硬朗的纯色实体阴影（如 `box-shadow: 4px 4px 0px var(--primary)`）。
- **State Changes (Hover/Active)**: 交互瞬间没有任何柔和的过渡缓动，`transition: none`，或者极短的 `0.1s`。Hover 时颜色瞬间反转（Invert），伴随类似相机快门的硬朗体验。

---

## 6. 🚦 Do's and Don'ts

### ✅ Do
- 坚持绝对的克制。整个画面只有黑白灰，仅在最关键的印章或坐标点使用刺目的红色或荧光绿。
- 使用强烈的材质对比：粗糙的噪点底图 vs 锐利的矢量文字。
- 将UI元素（如导航、提示）做得像工业仪表的刻度或物理档案袋的标签。

### 🚫 Don'ts
- 绝对不要使用“水墨晕染”、“祥云”、“泛黄古卷”等烂俗的新中式素材。
- 坚决避免任何圆润、可爱的 UI 形状和柔和的投影特效。
- 不要让画面充满颜色，Disruptor color（朱红/荧光绿）在全局的占比不得超过 5%。
