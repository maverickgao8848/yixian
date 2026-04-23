---
name: worktree-manager
description: >-
  管理 Harbor Journal 三 Agent 开发中的 Git Worktree 生命周期。每次 Sprint 结束后创建/清理 worktree、验证配置正确性。
  触发词：worktree、sprint worktree、创建分支环境、清理 sprint、worktree 检查、sprint 收尾、新建 sprint 环境。
---

# 🌳 Git Worktree Manager — Harbor Journal

你是 Harbor Journal 项目的 Worktree 管理专家，负责在三 Agent 开发循环（Planner → Generator → Evaluator）中维护每个 Sprint 的 Git Worktree 生命周期。

---

## 项目 Worktree 规范

### 目录结构约定

```
journal app/                        ← 主 worktree（main 分支）— Planner 驻扎
../sprint-worktrees/
└── sprint-{N}-generator/           ← 当前 Sprint 的 Generator worktree
    （如需 Evaluator 独立）
└── sprint-{N}-evaluator/           ← Evaluator worktree（进阶模式）
```

> ⚠️ Windows 路径长度限制：worktree 必须放在主目录的**同级**，不能放在子目录内。

### 分支命名规范

```
sprint/{N}-{功能简称}
示例：sprint/01-capture / sprint/02-gallery / sprint/03-prompt-page
```

### Worktree 生命周期（单 worktree 模式）

```
Sprint 开始
  ↓
make sprint-create SPRINT=N FEATURE=功能简称
  ↓
Generator 在 ../sprint-worktrees/sprint-N-generator/ 实现代码
  ↓
Evaluator 在同一 worktree 中验收（运行 Playwright / CE Validator）
  ↓
验收通过
  ↓
make sprint-finish SPRINT=N FEATURE=功能简称  （在主 worktree 中执行）
  ↓
Sprint 结束，进入下一个循环
```

---

## Phase 1：审计现有 Worktree

**当用户说"检查 worktree"或"worktree 审计"时，执行以下操作：**

### 步骤 1：列出所有 worktree
```bash
git worktree list
```

**解读输出**：
- 每行格式：`路径  commit哈希  [分支名]`
- 主 worktree 应该在 `journal app/` 目录，分支为 `main`
- Sprint worktree 应该在 `../sprint-worktrees/` 下，分支格式为 `sprint/N-功能`

### 步骤 2：调用审计脚本
```powershell
# 在主 worktree 目录中运行
make sprint-audit
```

脚本会检查：
- ✅ 目录存在 + git 引用有效 + 分支命名符合规范
- ⚠️ 目录存在但 `node_modules` 缺失（需要 `npm install`）
- ❌ git 元数据指向不存在的目录（需要 `git worktree prune`）

### 步骤 3：根据检查结果处理

| 问题类型 | 处理命令 |
|---|---|
| 孤儿 git 引用（目录已删但引用还在） | `git worktree prune -v` |
| 路径断开（手动移动过目录） | `git worktree repair <路径>` |
| 依赖未安装 | `cd <worktree>/frontend && npm install` |
| 分支命名不规范 | 删除重建（见 Phase 3） |

---

## Phase 2：Sprint 收尾（Evaluator 通过后执行）

> **触发时机**：Evaluator 验收通过，准备将代码合并到 main 并清理环境

### 前置检查
在执行前，确认以下条件全部满足：
- [ ] Evaluator Playwright 测试全部通过
- [ ] Generator worktree 中的代码已提交（无未提交修改）
- [ ] 当前目录是主 worktree（`journal app/`，分支为 `main`）

### 执行命令
```powershell
# 替换 N 为 Sprint 编号，功能简称
make sprint-finish SPRINT=01 FEATURE=capture
```

脚本自动执行：
1. 检查当前目录是主 worktree
2. `git merge sprint/01-capture` — 合并到 main
3. `git worktree remove ../sprint-worktrees/sprint-01-generator` — 移除 generator worktree
4. `git worktree remove ../sprint-worktrees/sprint-01-evaluator`（如存在）
5. `git branch -d sprint/01-capture` — 删除本地 sprint 分支
6. `git worktree prune` — 清理残留元数据

### 验证收尾成功
```bash
git worktree list          # 应只剩主 worktree
git branch                 # 应看不到 sprint/01-capture
git log --oneline -3       # 应看到合并提交
```

---

## Phase 3：为下一个 Sprint 创建 Worktree

> **触发时机**：Sprint 收尾完成后，Planner 制定了新的 Sprint Contract

### 执行命令
```powershell
# 替换为下一个 Sprint 的编号和功能简称
make sprint-create SPRINT=02 FEATURE=gallery
```

脚本自动执行：
1. 检查 `sprint/02-gallery` 分支不存在（避免重复）
2. 创建目录 `../sprint-worktrees/` 如不存在
3. `git worktree add -b sprint/02-gallery ../sprint-worktrees/sprint-02-generator main`
4. 在新 worktree 的 `frontend/` 中运行 `npm install`
5. 输出成功报告和 Generator 需要进入的目录路径

### 验证创建成功
```bash
git worktree list
# 期望输出（示例）：
# /c/.../journal app       abc1234 [main]
# /c/.../sprint-02-generator  abc1234 [sprint/02-gallery]
```

---

## 常见错误处理

### 错误 1：分支已存在
```
fatal: A branch named 'sprint/02-gallery' already exists.
```
**解决**：
```bash
git branch -D sprint/02-gallery   # 删除旧分支（确认不需要了）
```
然后重新执行 `make sprint-create`。

### 错误 2：Worktree 路径已存在
```
fatal: '../sprint-worktrees/sprint-02-generator' already exists
```
**解决**：
```bash
Remove-Item -Recurse -Force ../sprint-worktrees/sprint-02-generator
git worktree prune
```
然后重新执行 `make sprint-create`。

### 错误 3：Merge 冲突
```
Auto-merging frontend/src/xxx
CONFLICT (content): Merge conflict in frontend/src/xxx
```
**解决**：
1. 先解决冲突：`git status` 查看冲突文件，手动编辑后 `git add .`
2. `git commit` 完成合并
3. 继续 `git worktree remove` 等清理步骤

### 错误 4：Windows 路径太长
**症状**：npm install 失败，提示路径过长  
**解决**：
```powershell
# 开启 Windows 长路径支持（需要管理员权限）
git config --global core.longpaths true
```

---

## 进阶模式：双 Worktree（Generator + Evaluator 分离）

当 Sprint 效率提升，需要并行验收上一个 Sprint 同时开发下一个时：

```bash
# Generator worktree（开发中的 Sprint）
git worktree add -b sprint/03-prompt-page ../sprint-worktrees/sprint-03-generator main

# Evaluator worktree（验收上一个 Sprint，只读）
git worktree add ../sprint-worktrees/sprint-02-evaluator sprint/02-gallery
```

> 注意：两个 worktree 的 dev server 需要使用不同端口，避免冲突：
> - Generator: `vite --port 5174`
> - Evaluator: `vite --port 5175`

---

## 快速参考卡

| 场景 | 命令 |
|---|---|
| 查看所有 worktree | `make sprint-list` |
| 检查配置是否正确 | `make sprint-audit` |
| 创建新 Sprint 环境 | `make sprint-create SPRINT=N FEATURE=xxx` |
| 完成并清理 Sprint | `make sprint-finish SPRINT=N FEATURE=xxx` |
| 清理孤儿 git 引用 | `make sprint-prune` |
