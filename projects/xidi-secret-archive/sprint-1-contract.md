# Sprint 1 Contract — 西递秘档 MVP

## Goal
建立移动端优先的设计系统，完成入场页视觉重设计 + 互动地图主框架（含序章自动触发入口）。

## Implementation
1. **设计系统 (Design System)**
   - 在 `tailwind.config.ts` 扩展双生视界配色（日间/夜间 CSS 变量）
   - 在 `src/index.css` 定义全局 CSS 变量、字体引入（Noto Serif SC / Noto Sans SC / JetBrains Mono）、移动端安全区适配
   - 添加移动端容器限制（max-width: 430px 居中，模拟手机屏）
   - 全局重置：禁止标准阴影，使用 border/glow；按钮 hover 使用 scale + border ripple

2. **类型层 (types)**
   - `src/types/game.ts`：定义 `GamePhase`, `ChapterId`, `Item`, `Stamp`, `EncyclopediaEntry` 等核心类型
   - `src/types/ui.ts`：定义 `DialogueLine`, `NPCId`, `ViewMode` (day/night)

3. **配置层 (config)**
   - `src/config/theme.ts`：导出主题 token（颜色、字体、间距）
   - `src/config/assets.ts`：资产路径映射表（引用 dist/assets/ 下的图片）
   - `src/config/chapters.ts`：MVP 地标配置（仅胡文光牌楼可交互，其余锁定）

4. **运行时层 (runtime)**
   - `src/runtime/stores/gameStore.ts`：Zustand store，管理 `phase`, `currentChapter`, `inventory`, `unlockedEncyclopedia`, `dialogueIndex`
   - `src/runtime/hooks/useMediaQuery.ts`：检测 prefers-color-scheme（备用）

5. **UI 层 (ui)**
   - `src/ui/styles/global.css`：全局动画（letter unfold, seal appear, ink ripple）
   - `src/ui/components/MobileFrame.tsx`：移动端外框容器（430px max-width）
   - `src/ui/components/Compass.tsx`：左上角罗盘挂件
   - `src/ui/components/SideActions.tsx`：右侧悬浮背包/百科按钮
   - `src/ui/pages/EntryPage.tsx`：入场页（全屏背景图 + 标题 + "进入西递秘档"按钮）
   - `src/ui/pages/MapPage.tsx`：地图页（背景图 + 玩家标记 + 地标标记 + 序章自动触发逻辑）
   - `src/ui/overlays/PrologueOverlay.tsx`：序章浮层（首次进入地图自动弹出，含古信展开动画 + "继续"按钮 → 道具弹窗 → NPC对话，仅做框架和第一步古信展开，后续对话留到 Sprint 2）
   - `src/ui/overlays/BackpackPanel.tsx`：背包面板（占位：显示基础道具点亮状态）
   - `src/ui/overlays/EncyclopediaPanel.tsx`：百科面板（占位：列表显示，已解锁高亮）
   - `src/App.tsx`：路由配置（React Router：/ → EntryPage, /map → MapPage）

6. **public 资产**
   - 将 `dist/assets/` 下的图片/audio复制到 `public/assets/`（确保 dev 时可用）
   - 更新 `index.html` 添加 Google Fonts 预连接

## Criteria (验收标准)
- [ ] `npm run build` 通过，无 TS 错误
- [ ] 在桌面浏览器打开页面，显示为居中 430px 宽手机框，内部内容正确
- [ ] 入场页：全屏背景图、标题"西递秘档"、副标题、"进入西递秘档"按钮可见且可点击
- [ ] 点击按钮后路由跳转到 /map
- [ ] 地图页：左上角罗盘、右侧背包/百科悬浮按钮、地图背景图、玩家小人图标、"村口"和"胡文光牌楼"标记可见
- [ ] 首次进入地图页（store 中 `hasSeenPrologue === false`），自动弹出 PrologueOverlay 遮罩
- [ ] PrologueOverlay 中古信展开动画播放，点击"继续"后关闭遮罩，store 标记 `hasSeenPrologue = true`
- [ ] 点击背包/百科按钮弹出对应面板，面板内显示占位内容
- [ ] 视觉风格符合双生视界：宣纸白背景、古墨灰文字、远山黛边框、无圆角（图标除外）、Noto Serif SC 标题 + Noto Sans SC 正文

## Layer
ui → runtime → config → types（按依赖层正向构建）

## Blocked By
无（首个 Sprint）

## Notes
- 所有 NPC 立绘使用 `dist/assets/img_01_npc/` 下的透明 PNG
- 地图背景使用 `dist/assets/img_02_scene/scene_entrance.png` 或 `scene_paifang.png`
- 不使用 WebGL/Canvas 背景（MVP 简化），改用静态图 + CSS 微动效
- 移动端优先：所有交互元素最小 44px 点击区域
