# /sprint-setup — Sprint Worktree 管理向导

## 简介

这是一个对话式向导，帮你在每次 Sprint 边界处（完成后 / 开始前）完成 Git Worktree 的配置、验证和清理。

**适用时机：**

- Evaluator 验收通过，需要收尾当前 Sprint → 运行 Phase 2
- 准备开始新 Sprint，需要创建隔离环境 → 运行 Phase 3
- 任何时候想检查 worktree 健康状态 → 运行 Phase 1

---

## 使用方式

用户输入 `/sprint-setup` 后，按以下流程引导：

---

## Phase 1：状态审计

**目标**：了解当前所有 worktree 的健康状态。

**执行步骤**：

1. 告知用户："我来检查一下当前所有 worktree 的状态"
2. 引导用户在主 worktree（`journal app/`）中运行：
   ```
   make sprint-audit
   ```
3. 等待用户粘贴输出结果
4. 根据输出解读并给出行动建议：
   - ❌ 错误项 → 先处理错误再继续
   - ⚠️ 警告项 → 询问是否需要修复
   - ✅ 全部通过 → 询问接下来要做什么（Phase 2 收尾 or Phase 3 新建）

---

## Phase 2：Sprint 收尾

**前置条件确认（必须问用户）：**

```
在收尾 Sprint 之前，请确认：
□ Evaluator 的 Playwright 测试全部通过了吗？
□ Generator worktree 中的代码全部提交了吗？
□ 当前在主 worktree（journal app/ 目录，main 分支）吗？
```

只有三项全部确认后才继续。

**执行步骤**：

1. 问用户："本轮是 Sprint 几？功能名称是什么？"
   - 示例答案：Sprint 01，功能：capture
2. 引导运行：
   ```
   make sprint-finish SPRINT=01 FEATURE=capture
   ```
3. 脚本会自动：
   - 再次确认 Evaluator 通过
   - 执行合并
   - 清理 worktree 和分支
4. 收尾完成后提示用户验证：
   ```
   git log --oneline -3
   git worktree list
   ```
5. 询问："是否要继续创建下一个 Sprint 环境？"

---

## Phase 3：新建 Sprint Worktree

**前置条件：**

- 已在 Phase 2 完成收尾（或第一次创建）
- Planner 已输出新的 Sprint Contract

**执行步骤**：

1. 问用户："下一个 Sprint 是几号？要实现什么功能？"
   - 示例：Sprint 02，功能：gallery
2. 确认命名规范：分支将命名为 `sprint/02-gallery`，目录将在 `../sprint-worktrees/sprint-02-generator/`
3. 引导运行：
   ```
   make sprint-create SPRINT=02 FEATURE=gallery
   ```
4. 等待脚本输出，确认成功
5. 提示 Generator 下一步：
   ```
   进入 Generator 工作目录开始实现：
   cd ../sprint-worktrees/sprint-02-generator
   ```
6. 提醒 Generator 记住完成后的收尾规则（见 CLAUDE.md / AGENTS.md 开发循环守则）

---

## 快速帮助

当用户说以下内容时，对应进入哪个 Phase：

| 用户说                                                 | 进入                                                             |
| ------------------------------------------------------ | ---------------------------------------------------------------- |
| "检查 worktree" / "worktree 健康检查"                  | Phase 1                                                          |
| "Sprint 完成了" / "Evaluator 通过了" / "收尾 sprint"   | Phase 2                                                          |
| "开始新 Sprint" / "创建 worktree" / "生成 sprint 环境" | Phase 3                                                          |
| 不确定                                                 | 先问："你需要检查现有状态、收尾当前 Sprint，还是开始新 Sprint？" |

---

## 异常处理

**合并冲突**：

- 不要慌，这是正常情况
- 引导用户：`git status` 查看冲突文件 → 手动解决 → `git add .` → `git commit`
- 冲突解决后手动执行清理：`git worktree remove` + `git branch -d`

**npm install 失败**：

- 确认 Node.js 版本（`node -v`，需要 >=18）
- 改用 `npm ci`（更稳定）

**路径不存在错误**：

- 先运行 `make sprint-audit` 查看实际状态
- 若有残留：`git worktree prune -v` 清理元数据
