# 西递秘档资源生成执行计划

## 任务概述
根据 `xidi-resource-inventory-2026-04-29.md` 资源清单，生成全部87个缺失素材。
**核心约束**：所有人物（角色立绘）和道具（物品/UI/道具类）必须使用透明背景。

## 输出目录结构
`/mnt/agents/output/xidi-assets/`
- `img_00_brand/` — 品牌资源（3个，不透明）
- `img_01_npc/` — 角色立绘（6个，**透明**）
- `img_02_scene/` — 场景美术（9个，不透明）
- `img_03_ui/` — UI界面（6个，**透明**）
- `img_04_item/` — 道具物品（8个，**透明**）
- `img_05_quiz/` — 谜题素材（14个，部分透明）
- `img_06_food/` — 美食场景（4个，不透明）
- `img_07_special/` — 支线彩蛋（4个，部分透明）
- `img_08_fx/` — 特效动效参考（3个，**透明**）
- `audio/` — 音频资源（18个，音效/语音/BGM）

## 阶段规划

### Stage 1 — 透明背景素材生成（并行）
人物+道具+UI+透明谜题+透明支线+特效，总计约35个透明素材
- **子代理A**: NPC角色立绘 × 6（2:3竖版透明）
- **子代理B**: 道具物品 × 8（1:1方形透明）
- **子代理C**: UI界面 × 6（混合比例透明）
- **子代理D**: 谜题透明素材 × 5 + 支线绣球 × 1 + 特效 × 3 = 9个（混合比例透明）

### Stage 2 — 场景/背景类素材生成（并行）
场景+品牌+美食+非透明谜题+非透明支线，总计约37个不透明素材
- **子代理E**: 品牌资源 × 3 + 场景美术 × 3 = 6个（16:9/4:3场景）
- **子代理F**: 场景美术 × 3 + 美食 × 2 = 5个（16:9/4:3场景）
- **子代理G**: 场景美术 × 3 + 美食 × 2 = 5个（16:9/4:3场景）
- **子代理H**: 谜题场景素材 × 9 + 支线场景 × 3 = 12个（混合比例场景）
- **子代理I**: 美食场景图 × 2 + 品牌/分享海报 × 2 = 4个（混合比例场景）

### Stage 3 — 音频资源生成（并行）
18个音频文件（BGM + 音效 + 语音）
- **子代理J**: BGM × 4 + 音效 × 5 = 9个音频
- **子代理K**: 音效 × 5 + 语音 × 4 = 9个音频

### Stage 4 — 汇总验证
- 检查所有文件已按正确目录落盘
- 确认透明背景素材使用PNG格式
- 确认非透明素材使用JPG格式
- 输出资源清单对照表

## 透明背景素材清单（必须使用PNG+transparent）
| 编号 | 文件名 | 比例 | 类别 |
|---|---|---|---|
| 2.1 | npc_0_hulaofuzi.png | 2:3 | 角色 |
| 2.2 | npc_1_huwenguang.png | 2:3 | 角色 |
| 2.3 | npc_4_huwenzhao.png | 2:3 | 角色 |
| 2.4 | npc_5_huguansan.png | 2:3 | 角色 |
| 2.5 | npc_5_hushangyan.png | 2:3 | 角色 |
| 2.6 | npc_4_xiulou_sister.png | 2:3 | 角色 |
| 4.1 | ui_jintian_letter.png | 2:3 | UI |
| 4.2 | ui_seal_frame.png | 1:1 | UI |
| 4.3 | ui_checkpoint_frame.png | 1:1 | UI |
| 4.4 | ui_share_poster.png | 2:3 | UI |
| 4.5 | ui_mibao_banner.png | 3:2 | UI |
| 4.6 | ui_map_icons.png | 1:1 | UI |
| 5.1 | item_0_genealogy.png | 1:1 | 道具 |
| 5.2 | item_0_magnifier.png | 1:1 | 道具 |
| 5.3 | item_0_compass.png | 1:1 | 道具 |
| 5.4 | item_1_stamp_zhong.png | 1:1 | 道具 |
| 5.5 | item_2_stamp_qin.png | 1:1 | 道具 |
| 5.6 | item_3_stamp_he.png | 1:1 | 道具 |
| 5.7 | item_4_stamp_xiao.png | 1:1 | 道具 |
| 5.8 | item_5_stamp_du.png | 1:1 | 道具 |
| 6.2 | quiz_1_paifang_marker.png | 1:1 | 谜题 |
| 6.7 | quiz_3_xiaozi_left.png | 2:3 | 谜题 |
| 6.8 | quiz_3_xiaozi_right.png | 2:3 | 谜题 |
| 6.9 | quiz_3_ancestor_tang.png | 2:3 | 谜题 |
| 6.10 | quiz_3_ancestor_ming.png | 2:3 | 谜题 |
| 6.11 | quiz_3_ancestor_qing.png | 2:3 | 谜题 |
| 8.2 | special_4_xiangrikui_ball.png | 1:1 | 支线道具 |
| 9.1 | fx_seal_appear.png | 1:1 | 特效 |
| 9.2 | fx_ball_throw.png | 3:2 | 特效 |
| 9.3 | fx_scroll_open.png | 3:2 | 特效 |

## 非透明素材清单（JPG/PNG opaque）
品牌、场景、美食、谜题场景、支线场景等。

## 命名修正说明
- 原清单5.4注"PRD称忠" → 采用 `item_1_stamp_zhong.png`
- 原清单5.8注"PRD称读" → 采用 `item_5_stamp_du.png`
- 特效参考图按功能命名：`fx_seal_appear.png`, `fx_ball_throw.png`, `fx_scroll_open.png`
