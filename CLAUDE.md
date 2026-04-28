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
├── user-guide.md              # 给用户的详细工作流指南
│
├── .agents/
│   ├── skills/                # 可复用 skill 定义 (SKILL.md × N)
│   └── workflows/             # 工作流定义 (*.md)
│
├── docs/                      # 项目文档
│   ├── xidi-secret-archive/   # 西递秘档：PRD、IA、视觉方案、tech-stack
│   └── xidi-resource-inventory-2026-04-28.md  # 美术素材资源清单（62项）
│
├── projects/xidi-secret-archive/  # 当前开发项目
│   ├── public/assets/         # 美术素材（brand/characters/scenes/props/effects/audio）
│   ├── src/                   # 按依赖层分包：types → config → repo → service → runtime → ui
│   │   └── ui/overlays/      # ★ 弹窗交互层（LBSOverlay, PlotDialog, PuzzleView, StampPanel）
│   ├── tests/e2e/             # Playwright E2E 测试
│   └── index.html             # 现有 HTML 原型（待重构）
│
└── tools/ce-validator/        # Chrome Extension 验收工具
```

- src/ 子目录严格对应依赖层级：`types → config → repo → service → runtime → ui`
- UI 页面：MapHome（沉浸式地图主页，唯一常驻）、Achievement（结算成就页）
- 弹窗层：LBSOverlay → PlotDialog / PuzzleView / StampPanel / StampEffect
- 视觉规范：双生视界（日间空灵卷轴 ⇄ 夜间赛博遗迹），见 `docs/xidi-secret-archive/xidi-mvp-visual-scheme-2026-04-28.md`
- ★ 当前 UI 为基础原型，**视觉升级是开发重点**——严格对标视觉方案中的流体背景、日夜切换、Glitch 动效等要求

> **Note**: `AGENTS.md` 是 `CLAUDE.md` 的副本。Claude Code 读取 `CLAUDE.md`；Kimi 读取 `AGENTS.md`。修改 `CLAUDE.md` 后需手动同步到 `AGENTS.md`（或使用 `protocol-updater` / `claudemd-updater` skill）。

---

## 开发循环 & Worktree 守则

1. 每次对话只执行**一个 sprint**；Evaluator 未通过 → 禁止进入下一 sprint
2. 依赖层违规 → Planner 拒绝 contract，打回重写
3. 所有 worktree 操作统一用 `/sprint-worktree` skill（setup / validate / merge / clean / status）
4. 流程：`setup`（新建 worktree）→ 实现 → `merge` → `clean` → 下一 sprint
5. 禁止用 `EnterWorktree`/`ExitWorktree` 管 sprint worktree（它们管 `.claude/worktrees/`）
6. Worktree 健康检查由 Stop hook 自动运行；也可随时 `/sprint-worktree status`
