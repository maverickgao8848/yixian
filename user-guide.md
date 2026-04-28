### 阶段一：前期筹备（依靠持久化文档交接，避免过度设计）

1. **方向收敛**：调用 `/crazy-realist-friend` 提出初始点子并完成多角度调查分析，收敛出一个核心业务方向。
2. **极简需求定调（Minimal PRD）**：使用 `/patient-pm` 完成需求分析。不要急于设计底层细节，仅让此 Agent 输出轻量级的 PRD（核心 MVP 范围与重点 User Story）并保存到 `docs/{project}/PRD.md` 中。**👉 (千万不要在此时生成架构图和时序图！)**
3. **架构语义与视觉配方**：使用 `/ia-planner` 读取 PRD 以生成基础高密度的内容体系流向（无需且禁止画 ASCII 几何图）；然后通过呼叫 `/visual-explorer` 对接，输出前端友好且包含强约束 Design Tokens 的规范。

4. **技术决策与架构对齐**：使用 `tech-stack` 工具或步骤决定技术选型后，再根据现在的 PRD 和 IA 生成**系统架构图**。关键约束：**此处生成的架构设计必须严格依照 `AGENTS.md` 中设定的依赖层级（`types → config → repo → service → runtime → ui`）进行六层规划。**

5. **项目启动配置**：使用 `ready-to-start` skill 完成项目启动（包括文件夹结构配置，确保检查基础配置：Node，Python，Git，Docker，以及 hooks，Playwright，Chrome Extension，CLAUDE.md / AGENTS.md 等等）。

6. 使用/resource-inventory来准备所有需要的素材资源

### 阶段二：三 Agent 循环开发

项目启动以后开始使用三 agent 架构完成敏捷开发，遵循单一职责与即时生成原则：

- **Planner 拆解与局部设计**：每次 Sprint 认领一个单一需求，Planner 制定 sprint contract。**如果涉及复杂逻辑交互，Planner 在此时按需仅生成该局部特性的时序图/流程图**，防止早期的宏大发散造成记忆污染。随后调用 `/sprint-worktree setup` 创建隔离环境。
- **Generator 实现**：在 worktree 中严格根据底层向上原则实现具体代码。
- **Evaluator 验收**：跑查通过后 → `/sprint-worktree merge` 并在确认后 `/sprint-worktree clean` → 进入下一个 sprint。
- 每次 Claude 停止时 Stop hook 会自动检查 worktree 健康状态；也可随时用 `/sprint-worktree status` 或 `validate` 主动检查。

定期使用garbage-collection skill来检查项目是否存在冗余文件或者矛盾，并进行清理

出错时/或者claude.md（AGENTS.md）的项目目录结构部分需要更新时使用claudemd-updater skill（Kimi 用户使用 protocol-updater）（当卡住，思考what tool is missing）来工程化避免错误

