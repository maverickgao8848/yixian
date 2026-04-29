# Harness Model Dev Protocol

## 三 Agent 开发架构

```
Planner ──sprint contract──► Generator ──► Evaluator
   ▲                                           │
   └─────────── feedback / next sprint ◄───────┘
```

### Roles

| Agent | 职责 |
|---|---|
| **Planner** | 拆解需求 → sprint contract → 验收标准 |
| **Generator** | 按 contract 实现，输出可运行代码 |
| **Evaluator** | Playwright / Chrome Extension 验收；通过推进，失败反馈 |

### Sprint Contract（每轮必须）

```
goal: / impl: / criteria: / layer: / blocked_by:
```

每条 criteria 对应一条自动化断言；无法自动化的须注明手动步骤。

### Evaluator 工具规则

- **UI/交互** → Playwright (`tests/e2e/`)；**扩展/浏览器** → Chrome Extension (`tools/ce-validator/`)

---

## 依赖层级（不可逆向）

```
types → config → repo → service → runtime → ui
```
上层可引用下层，跨层须经接口（interface / adapter）隔离。

---

## 仓库目录结构

```
yixian/
├── CLAUDE.md / AGENTS.md      # Dev protocol（内容同步）
├── README.md / user-guide.md
├── xidi-secret-archive-dev-version.md  # ★ 完整项目遵循此文档
│
├── .agents/                    # Skills（22）& workflows（5）
│   ├── skills/                 #   brainstorm / color-mood / garbage-collection / html-upgrader
│   │                           #   ia-document / motion-concept / pm-* / protocol-updater
│   │                           #   ready-to-start / researcher / resource-inventory / reviewer
│   │                           #   sitemap / skill-creator / sprint-worktree / visual-*
│   │                           #   wireframe / worktree-manager
│   └── workflows/              #   crazy-realist / ia-planner / patient-pm / sprint-setup / visual-explorer
│
├── docs/xidi-secret-archive/   # 项目文档
│   ├── PRD_xidi_mvp.md         #   ★ MVP 开发遵循此文档
│   ├── xidi-mvp-visual-scheme-2026-04-28.md  # ★ 视觉遵循
│   └── xidi-secret-archive-ia-2026-04-29.md  # ★ 视觉遵循
│
├── projects/xidi-secret-archive/   # ★ 当前开发项目
│   ├── entry.html / map.html / puzzle.html  # 静态 HTML 原型
│   ├── public/assets/          #   素材（双视图：物理按类别 + 逻辑按时间线）
│   │   ├── RESOURCE_CATALOG.md / assets-manifest.json  # 人读+机读索引（待创建）
│   │   └── img_01~06/          #     quiz(P0) / item(P0) / food(P0) / npc(P1) / ui(P1) / special(P2)（待创建）
│   ├── src/                    #   依赖层分包 ↓（待创建）
│   │   └── types/ → config/ → repo/ → service/ → runtime/ → ui/
│   ├── tests/e2e/              #   Playwright E2E（待创建）
│   └── package.json / index.html  # Vite + React 18 + TS + Tailwind + Zustand（待创建）
```

- 视觉：双生视界（日间空灵卷轴 ⇄ 夜间赛博遗迹），★ **视觉升级是开发重点**
- `AGENTS.md` 是 `CLAUDE.md` 副本；修改后须手动同步（或用 `protocol-updater` / `claudemd-updater` skill）

---

## 开发循环 & Worktree 守则

1. 每次对话只执行**一个 sprint**；Evaluator 未通过 → 禁止下一 sprint
2. 依赖层违规 → Planner 拒绝 contract；worktree 操作统一用 `/sprint-worktree`
3. 禁止 `EnterWorktree`/`ExitWorktree` 管 sprint worktree
4. 本项目目前只追求移动端网页，后续可能转微信小程序

## 资源管理

1. 素材变更须同步更新 `public/assets/RESOURCE_CATALOG.md` 与 `public/assets/assets-manifest.json`
2. 物理目录按类别（`img_01`~`img_06`），禁止按章节建并行目录；章节通过时间线索引
3. 引用素材优先用 manifest `path`，提交前做一致性检查

## 其他
所有前端开发一律调用 frontend-design skill
