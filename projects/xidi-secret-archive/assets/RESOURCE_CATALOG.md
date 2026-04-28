# Xidi Secret Archive 资源目录

> 说明：本文件用于维护 `assets/` 的主索引；详细文案下沉到各子目录 `README.md`。
> 最优管理：物理目录按素材类别；逻辑组织按时间线；程序消费读取 `assets-manifest.json`。

```text
assets/
├── map.png                         # 西递导览地图底图
├── RESOURCE_CATALOG.md
├── assets-manifest.json            # 机器可读资源清单（推荐程序读取）
├── img_01_quiz/                 # 谜题游戏图（14张）【P0-核心交付】
│   ├── README.md
│   ├── quiz_1_paifang_overview.jpg    # 第一幕牌坊填空主图
│   ├── quiz_1_paifang_marker.png      # 第一幕牌坊提示图
│   ├── quiz_2_angle_a.jpg             # 第二幕商字选择题错误选项A
│   ├── quiz_2_angle_b.jpg             # 第二幕商字选择题正确选项B
│   ├── quiz_2_angle_c.jpg             # 第二幕商字选择题错误选项C
│   ├── quiz_2_cuozi_couplet.jpg       # 第二幕错字联找茬主图
│   ├── quiz_3_xiaozi_left.png         # 第三幕孝字拼图左侧
│   ├── quiz_3_xiaozi_right.png        # 第三幕孝字拼图右侧
│   ├── quiz_3_ancestor_tang.png       # 第三幕祖先排序卡-唐
│   ├── quiz_3_ancestor_ming.png       # 第三幕祖先排序卡-明
│   ├── quiz_3_ancestor_qing.png       # 第三幕祖先排序卡-清
│   ├── quiz_5_zhuimu_overview.jpg     # 第五幕门神填空总览图
│   ├── quiz_5_doorgod_white.jpg       # 第五幕白脸门神判断图
│   └── quiz_5_doorgod_black.jpg       # 第五幕黑脸门神判断图
├── img_02_item/                 # 道具图标（8个）【P0-核心交付】
│   ├── README.md
│   ├── item_0_genealogy.png          # 序章初始道具-族谱残页
│   ├── item_0_magnifier.png          # 序章初始道具-放大镜
│   ├── item_0_compass.png            # 序章初始道具-简易罗盘
│   ├── item_1_stamp_zuǐ.png          # 第一幕奖励-读字印
│   ├── item_2_stamp_qín.png          # 第二幕奖励-勤字印
│   ├── item_3_stamp_hé.png           # 第三幕奖励-和字印
│   ├── item_4_stamp_xiào.png         # 第四幕奖励-孝字印
│   └── item_5_stamp_jìng.png         # 第五幕奖励-敬字印
├── img_03_food/                 # 美食场景（4张）【P0-核心交付】
│   ├── README.md
│   ├── food_1_huanshan_cake.jpg      # 第一幕特产图-黄山烧饼
│   ├── food_1_huanshan_cake_scene.jpg # 第一幕食摊场景图
│   ├── food_2_maofeng_tea.jpg        # 第二幕特产图-黄山毛峰
│   └── food_2_maofeng_tea_scene.jpg  # 第二幕茶坊场景图
├── img_04_npc/                  # NPC立绘（6张）【P1-增强内容】
│   ├── README.md
│   ├── npc_0_hulaofuzi.png           # 引导NPC-胡老夫子
│   ├── npc_1_huwenguang.png          # 第一幕NPC-胡文光
│   ├── npc_4_huwenzhao.png           # 第四幕NPC-胡文照
│   ├── npc_5_huguansan.png           # 第五幕NPC-胡贯三
│   ├── npc_5_hushangyan.png          # 第五幕NPC-胡尚熷
│   └── npc_4_xiulou_sister.png       # 第四幕支线NPC-绣楼小姐
├── img_05_ui/                   # UI界面图（6张）【P1-增强内容】
│   ├── README.md
│   ├── ui_seal_frame.png             # 终章五印排列框
│   ├── ui_map_icons.png              # 地图功能图标集
│   ├── ui_checkpoint_frame.png       # 拍照打卡相框
│   ├── ui_share_poster.png           # 通关分享海报模板
│   ├── ui_mibao_banner.png           # 秘档揭晓横幅背景
│   └── ui_jintian_letter.png         # 序章古信展开背景
└── img_06_special/              # 支线/彩蛋图（4张）【P2-可选交付】
    ├── README.md
    ├── special_4_xiulou_scene.png    # 第四幕支线绣楼场景
    ├── special_4_xiangrikui_ball.png # 第四幕支线绣球道具
    ├── special_6_xiayi_tombstone.png # 第六印支线碑刻线索
    └── special_caidan_matouqiang.jpg # 马头墙彩蛋图
```

## 按时间线目录结构

```text
timeline/
├── 序章
│   ├── ui_jintian_letter.png          # 开篇古信动画背景（img_05_ui）
│   ├── npc_0_hulaofuzi.png            # 胡老夫子引导（img_04_npc）
│   ├── item_0_genealogy.png           # 初始道具-族谱残页（img_02_item）
│   ├── item_0_magnifier.png           # 初始道具-放大镜（img_02_item）
│   └── item_0_compass.png             # 初始道具-简易罗盘（img_02_item）
├── 第一幕
│   ├── npc_1_huwenguang.png           # 第一幕NPC-胡文光（img_04_npc）
│   ├── quiz_1_paifang_overview.jpg    # 牌坊填空主图（img_01_quiz）
│   ├── quiz_1_paifang_marker.png      # 牌坊提示图（img_01_quiz）
│   ├── item_1_stamp_zuǐ.png           # 第一幕奖励-读字印（img_02_item）
│   ├── food_1_huanshan_cake.jpg       # 第一幕特产图（img_03_food）
│   └── food_1_huanshan_cake_scene.jpg # 第一幕食摊场景图（img_03_food）
├── 第二幕
│   ├── quiz_2_angle_a.jpg             # 商字选择题错误选项A（img_01_quiz）
│   ├── quiz_2_angle_b.jpg             # 商字选择题正确选项B（img_01_quiz）
│   ├── quiz_2_angle_c.jpg             # 商字选择题错误选项C（img_01_quiz）
│   ├── quiz_2_cuozi_couplet.jpg       # 错字联找茬主图（img_01_quiz）
│   ├── item_2_stamp_qín.png           # 第二幕奖励-勤字印（img_02_item）
│   ├── food_2_maofeng_tea.jpg         # 第二幕特产图（img_03_food）
│   └── food_2_maofeng_tea_scene.jpg   # 第二幕茶坊场景图（img_03_food）
├── 第三幕
│   ├── npc_0_hulaofuzi.png            # 胡老夫子引导（img_04_npc）
│   ├── quiz_3_xiaozi_left.png         # 孝字拼图左侧（img_01_quiz）
│   ├── quiz_3_xiaozi_right.png        # 孝字拼图右侧（img_01_quiz）
│   ├── quiz_3_ancestor_tang.png       # 祖先排序卡-唐（img_01_quiz）
│   ├── quiz_3_ancestor_ming.png       # 祖先排序卡-明（img_01_quiz）
│   ├── quiz_3_ancestor_qing.png       # 祖先排序卡-清（img_01_quiz）
│   └── item_3_stamp_hé.png            # 第三幕奖励-和字印（img_02_item）
├── 第四幕
│   ├── npc_4_huwenzhao.png            # 第四幕NPC-胡文照（img_04_npc）
│   ├── item_4_stamp_xiào.png          # 第四幕奖励-孝字印（img_02_item）
│   ├── npc_4_xiulou_sister.png        # 第四幕支线NPC（img_04_npc）
│   ├── special_4_xiulou_scene.png     # 第四幕支线绣楼场景（img_06_special）
│   └── special_4_xiangrikui_ball.png  # 第四幕支线绣球道具（img_06_special）
├── 第五幕
│   ├── npc_5_huguansan.png            # 第五幕NPC-胡贯三（img_04_npc）
│   ├── npc_5_hushangyan.png           # 第五幕NPC-胡尚熷（img_04_npc）
│   ├── quiz_5_zhuimu_overview.jpg     # 门神填空总览图（img_01_quiz）
│   ├── quiz_5_doorgod_white.jpg       # 白脸门神判断图（img_01_quiz）
│   ├── quiz_5_doorgod_black.jpg       # 黑脸门神判断图（img_01_quiz）
│   └── item_5_stamp_jìng.png          # 第五幕奖励-敬字印（img_02_item）
├── 终章
│   ├── npc_0_hulaofuzi.png            # 终章引导（img_04_npc）
│   ├── ui_seal_frame.png              # 五印排列框（img_05_ui）
│   ├── ui_mibao_banner.png            # 秘档揭晓横幅背景（img_05_ui）
│   └── ui_share_poster.png            # 通关分享海报模板（img_05_ui）
├── 全局
│   ├── map.png                        # 西递导览地图底图（assets 根目录）
│   ├── ui_map_icons.png               # 地图图标集（img_05_ui）
│   └── ui_checkpoint_frame.png        # 拍照打卡相框（img_05_ui）
└── 彩蛋/后续
    ├── special_6_xiayi_tombstone.png  # 第六印支线碑刻线索（img_06_special）
    └── special_caidan_matouqiang.jpg  # 马头墙彩蛋图（img_06_special）
```
