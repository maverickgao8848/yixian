# Harness Model Dev Protocol

## 三 Agent 开发架构

```
Planner ──sprint contract──► Generator ──► Evaluator
   ▲                                           │
   └─────────── feedback / next sprint ◄───────┘
```

### Roles

| Agent         | 职责                                                          |
| ------------- | ------------------------------------------------------------- |
| **Planner**   | 拆解需求 → 制定 sprint contract → 生成验收标准                |
| **Generator** | 按 contract 实现功能，输出可运行代码                          |
| **Evaluator** | 用 Playwright / Chrome Extension 验收；通过则推进，失败则反馈 |

### Sprint Contract（每轮必须包含）

```
## Sprint #{n}
goal:        # 本轮要实现的单一功能
impl:        # Generator 的实现方案（技术路径）
criteria:    # 可测试的成功标准（≥1 条 Playwright 或 CE 断言）
layer:       # 涉及的依赖层（见下）
blocked_by:  # 依赖的前序 sprint（无则 none）
```

### Evaluator 工具规则

- **UI/交互验收** → Playwright (`tests/e2e/`)
- **扩展/浏览器状态验收** → Chrome Extension (`tools/ce-validator/`)
- 每条 criteria 对应一条自动化断言；无法自动化的须注明手动步骤

---

## 依赖层级（不可逆向依赖）

```
types → config → repo → service → runtime → ui
```

- 上层可引用下层，下层禁止引用上层
- 跨层调用须经由接口（interface / adapter）隔离

---

## 仓库目录结构

```
yixian/
├── CLAUDE.md / AGENTS.md      # Dev protocol（内容同步）
├── user-guide.md
│
├── .agents/                    # Skills & workflows
├── docs/                       # 项目文档
│   ├── xidi-secret-archive/    # PRD / IA / 视觉方案 / tech-stack
│   └── xidi-resource-inventory-2026-04-28.md
│
├── projects/xidi-secret-archive/   # ★ 当前开发项目
│   ├── public/assets/          # 美术素材（brand/characters/scenes/props/effects/audio）
│   ├── src/                    # 按依赖层分包 ↓
│   │   ├── types/              #   L1 类型定义（mission, game）
│   │   ├── config/             #   L2 静态配置（missions, stamps, theme, constants）
│   │   ├── repo/               #   L3 数据访问（localStorage, geo API）
│   │   ├── service/            #   L4 业务逻辑（gameState, posterGenerator）
│   │   ├── runtime/            #   L5 运行时编排（stores/, hooks/）
│   │   └── ui/                 #   L6 界面
│   │       ├── styles/         #     自定义 CSS（流体模糊 / Glitch / 日夜主题）
│   │       ├── pages/          #     MapHome（常驻主页）, Achievement（结算页）
│   │       └── overlays/       #     LBSOverlay, PlotDialog, PuzzleView, StampPanel, StampEffect
│   ├── tests/e2e/              # Playwright E2E 测试
│   ├── index.html              # Vite 入口
│   └── package.json            # React 18 + TS + Vite + Tailwind + Zustand + Framer Motion
│
└── tools/ce-validator/         # Chrome Extension 验收工具（待创建）
```

- 依赖层严格单向：`types → config → repo → service → runtime → ui`，禁止逆向引用
- 视觉规范：双生视界（日间空灵卷轴 ⇄ 夜间赛博遗迹），见 `docs/xidi-secret-archive/xidi-mvp-visual-scheme-2026-04-28.md`
- ★ **视觉升级是开发重点**——严格对标视觉方案中的流体背景、日夜切换、Glitch 动效等要求

> **Note**: `AGENTS.md` 是 `CLAUDE.md` 的副本。Claude Code 读取 `CLAUDE.md`；Kimi 读取 `AGENTS.md`。修改 `CLAUDE.md` 后需手动同步到 `AGENTS.md`（或使用 `protocol-updater` / `claudemd-updater` skill）。

---

## 开发循环 & Worktree 守则

1. 每次对话只执行**一个 sprint**；Evaluator 未通过 → 禁止进入下一 sprint
2. 依赖层违规 → Planner 拒绝 contract，打回重写
3. 所有 worktree 操作统一用 `/sprint-worktree` skill（setup / validate / merge / clean / status）
4. 流程：`setup`（新建 worktree）→ 实现 → `merge` → `clean` → 下一 sprint
5. 禁止用 `EnterWorktree`/`ExitWorktree` 管 sprint worktree（它们管 `.claude/worktrees/`）
6. Worktree 健康检查由 Stop hook 自动运行；也可随时 `/sprint-worktree status`
7. 本项目目前阶段只追求在移动端的网页打开，运行，后续可能转成微信小程序，但只要这条规则存在就默认在移动端网页中跑
