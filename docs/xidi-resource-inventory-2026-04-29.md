# 西递秘档：明经遗梦 — 资源清单

> **生成日期**: 2026-04-29
> **项目阶段**: 开发期
> **判断依据**: `docs/` 设计文档（PRD / IA / 视觉方案）齐全；`projects/` 源代码框架（React + TS + Vite）已搭建；`tests/e2e/` 已有 Playwright 测试用例；美术资源仅 `map.png` 落盘，其余 40+ 项均为空目录。
> **资源关注重心**: 补充全部缺失美术资源 + 动效/音频素材

---

## 全局风格参数（即梦提示词通用锚点）

| 参数 | 值 |
|---|---|
| 风格大类 | 数字水彩 · 水墨晕染 · 青绿山水 · 金箔高光 |
| 流派/运动 | Digital Ink Wash Painting, Blue-Green Landscape |
| 媒介/技法 | Watercolor on textured rice paper with gold leaf highlights |
| 参照系 | Wang Ximeng《千里江山图》, Studio Ghibli atmosphere, Contemporary Chinese digital art |
| 色调 | 统一单色调：赭石淡金 / 青绿山水，夜间仅降低明度 |
| 精细度 | 精细 |
| 排除指令 | `--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光` |

**提示词公式**：
```
{主体描述}，Digital Ink Wash Painting，Blue-Green Landscape，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，Studio Ghibli atmosphere，Contemporary Chinese digital art，赭石淡金色调，青绿山水，柔和漫射光，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光
```

**⚠️ 人物/物品素材透明背景规则**：
所有 **角色立绘（NPC）、道具物品、谜题人物画像** 的提示词，必须在主体描述开头加入以下关键词，确保生成结果为单独人物/物品、无场景背景：
- **人物类**：`透明背景，单独人物无背景，isolated character on transparent background, no scenery, no environment, character only`
- **物品类**：`透明背景，物品独立无背景，isolated object on transparent background, no background, object only`
- **输出格式**：统一使用 **PNG** 格式（透明通道），禁止 JPG
- 带有场景背景需求的素材（如场景美术、全景底图）**不适用**此规则

---

## 1. 品牌资源

| # | 资源名称 | 状态 | 描述 | 即梦提示词 |
|---|---|---|---|---|
| 1.1 | 品牌主视觉封面 | [待创建] | 入场页全屏背景，"西递秘档"主标题底图 | 西递古村落全景鸟瞰图，白墙黛瓦马头墙层层叠叠，远山如黛，晨雾缭绕，Digital Ink Wash Painting，Blue-Green Landscape，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，Studio Ghibli atmosphere，赭石淡金色调，青绿山水，柔和漫射光，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 1.2 | 通关分享海报模板 | [待创建] | 终章结算后生成分享图底版 | 徽州古建长卷展开构图，五枚金色印章悬于画面上方，洒金宣纸底纹，Digital Ink Wash Painting，Blue-Green Landscape，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，金箔高光，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 1.3 | Logo / 应用图标 | [待创建] | 小程序/App 图标，需在小尺寸下可辨识 | 方形印章构图，中央篆书"秘"字，外框徽派马头墙轮廓，金箔描边，Digital Ink Wash Painting，Watercolor on textured rice paper with gold leaf highlights，赭石淡金色调，青绿山水，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |

---

## 2. 角色美术（NPC 立绘）

| # | 资源名称 | 状态 | 描述 | 即梦提示词 |
|---|---|---|---|---|
| 2.1 | npc_0_hulaofuzi.png | [待创建] | 胡老夫子：白须老者，手持竹杖，青色儒衫，引导NPC | 透明背景，单独人物无背景，isolated character on transparent background, no scenery, no environment, character only, 一位白须飘逸的徽州老儒者，手持竹杖，身着青色宽袖长衫，面容慈祥睿智，眉眼含笑，侧身站立，Digital Ink Wash Painting，Blue-Green Landscape，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，Studio Ghibli atmosphere，赭石淡金色调，青绿山水，柔和漫射光，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 2.2 | npc_1_huwenguang.png | [待创建] | 胡文光：明代官服，正色端坐，神情威严而亲和 | 透明背景，单独人物无背景，isolated character on transparent background, no scenery, no environment, character only, 一位身着明代绯红色官服的中年男子，正襟危坐，头戴乌纱帽，面容方正威严又不失亲和，Digital Ink Wash Painting，Blue-Green Landscape，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，Studio Ghibli atmosphere，赭石淡金色调，青绿山水，柔和漫射光，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 2.3 | npc_4_huwenzhao.png | [待创建] | 胡文照：儒雅长者，身着便服，气度从容 | 透明背景，单独人物无背景，isolated character on transparent background, no scenery, no environment, character only, 一位身着素色便服的清代儒雅长者，面容清癯，气质从容淡定，双手负于身后，Digital Ink Wash Painting，Blue-Green Landscape，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，Studio Ghibli atmosphere，赭石淡金色调，青绿山水，柔和漫射光，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 2.4 | npc_5_huguansan.png | [待创建] | 胡贯三：清代巨商，富甲一方 | 透明背景，单独人物无背景，isolated character on transparent background, no scenery, no environment, character only, 一位身着华贵暗纹绸缎的清代富商，体态微胖，面容和气中透着精明，手持翡翠扳指，Digital Ink Wash Painting，Blue-Green Landscape，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，Studio Ghibli atmosphere，赭石淡金色调，青绿山水，柔和漫射光，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 2.5 | npc_5_hushangyan.png | [待创建] | 胡尚熷：清二品官，手持书卷，儒雅端庄 | 透明背景，单独人物无背景，isolated character on transparent background, no scenery, no environment, character only, 一位身着清二品官服的中年文官，手持书卷，面容儒雅端庄，目光深邃，Digital Ink Wash Painting，Blue-Green Landscape，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，Studio Ghibli atmosphere，赭石淡金色调，青绿山水，柔和漫射光，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 2.6 | npc_4_xiulou_sister.png | [待创建] | 绣楼小姐：手持团扇，笑容温婉，支线NPC | 透明背景，单独人物无背景，isolated character on transparent background, no scenery, no environment, character only, 一位身着淡粉襦裙的徽州少女，手持团扇半遮面容，笑容温婉羞涩，Digital Ink Wash Painting，Blue-Green Landscape，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，Studio Ghibli atmosphere，赭石淡金色调，青绿山水，柔和漫射光，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |

---

## 3. 场景美术

| # | 资源名称 | 状态 | 描述 | 即梦提示词 |
|---|---|---|---|---|
| 3.1 | map.png | [已有: projects/xidi-secret-archive/public/assets/map.png] | 西递导览地图底图 | 已有文件，约 9.5MB |
| 3.2 | 入场页背景 | [待创建] | 移动端全屏沉浸底图，古信展开前展示 | 西递古村落晨雾全景，白墙黛瓦马头墙层叠于青山绿水之间，薄雾缭绕，一只白鹭飞过水面，Digital Ink Wash Painting，Blue-Green Landscape，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，Studio Ghibli atmosphere，赭石淡金色调，青绿山水，柔和漫射光，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 3.3 | 胡文光牌楼场景 | [待创建] | 第一幕解谜浮层背景，牌楼正面全景 | 明代石牌坊正面全景，四柱三间五楼，雕刻精美的鹤鹿龙虎狮石雕，白墙黛瓦为背景，Digital Ink Wash Painting，Blue-Green Landscape，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，青绿山水，柔和漫射光，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 3.4 | 瑞玉庭场景 | [待创建] | 第二幕解谜浮层背景，商字形建筑 | 徽派老宅正面全景，门楼如商字上部，天井如口，两侧厢房对称，青石板院，Digital Ink Wash Painting，Blue-Green Landscape，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，青绿山水，柔和漫射光，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 3.5 | 敬爱堂场景 | [待创建] | 第三幕解谜浮层背景，胡氏宗祠 | 宏大宗祠建筑正面，高大门楼，门槛厚重，天井上方长方形蓝天，Digital Ink Wash Painting，Blue-Green Landscape，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，青绿山水，柔和漫射光，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 3.6 | 大夫第场景 | [待创建] | 第四幕解谜浮层背景，门额"作退一步想" | 徽派宅院临街立面，门额石刻"作退一步想"，二楼阁楼略向后缩，Digital Ink Wash Painting，Blue-Green Landscape，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，青绿山水，柔和漫射光，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 3.7 | 履福堂场景 | [待创建] | 第五幕解谜浮层背景，正厅楹联 | 徽派官宅正厅大门，两侧楹联高悬，门扇雕花，Digital Ink Wash Painting，Blue-Green Landscape，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，青绿山水，柔和漫射光，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 3.8 | 村口食摊场景 | [待创建] | 第一幕特产触发点，黄山烧饼摊 | 古村落村口小吃摊，蒸笼冒着热气，黄山烧饼整齐码放，青石板路，Digital Ink Wash Painting，Blue-Green Landscape，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，青绿山水，柔和漫射光，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 3.9 | 前街茶坊场景 | [待创建] | 第二幕特产触发点，黄山毛峰茶坊 | 徽派茶坊内景，木质茶桌，青瓷茶具，黄山毛峰茶叶翠绿，窗外竹影婆娑，Digital Ink Wash Painting，Blue-Green Landscape，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，青绿山水，柔和漫射光，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 3.10 | 终章观景台场景 | [待创建] | 荷花池边俯瞰西递全景 | 西递村尾观景台视角，荷花池前景，全村白墙黛瓦尽收眼底，夕阳洒金，Digital Ink Wash Painting，Blue-Green Landscape，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，金箔高光，青绿山水，柔和漫射光，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |


## 4. UI / 界面

| # | 资源名称 | 状态 | 描述 | 即梦提示词 |
|---|---|---|---|---|
| 4.1 | ui_jintian_letter.png | [待创建] | 序章古信展开背景，泛黄信纸质感 | 一张泛黄的古信笺，边缘微微卷曲，洒金暗纹底，上有淡墨晕染痕迹，留白处可叠字，Digital Ink Wash Painting，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，金箔微光，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 4.2 | ui_seal_frame.png | [待创建] | 终章五印排列框，印章展示底版 | 方形印章排列框，古木纹理边框，内衬洒金宣纸，五处凹槽隐约可见，Digital Ink Wash Painting，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，金箔高光，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 4.3 | ui_checkpoint_frame.png | [待创建] | 拍照打卡相框，叠加在玩家照片上 | 徽派窗棂纹样的方形相框，木质雕花，四角祥云纹，Digital Ink Wash Painting，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，金箔描边，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 4.4 | ui_share_poster.png | [待创建] | 通关分享海报模板底图 | 竖版海报底图，西递全景淡墨晕染为背景，底部洒金留白区，Digital Ink Wash Painting，Blue-Green Landscape，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，金箔高光，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 4.5 | ui_mibao_banner.png | [待创建] | 秘档揭晓横幅背景 | 横向卷轴展开构图，古书卷轴两端有玉轴，卷面留白，Digital Ink Wash Painting，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，金箔微光，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 4.6 | ui_map_icons.png | [待创建] | 地图功能图标集（罗盘、背包、百科、地标标记） | 一套徽派风格功能图标，罗盘为圆形司南样式，背包为书箱样式，百科为卷轴样式，地标为马头墙轮廓，单色线描，Digital Ink Wash Painting，Watercolor on textured rice paper，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，青绿山水，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |

---

## 5. 道具 / 物品

| # | 资源名称 | 状态 | 描述 | 即梦提示词 |
|---|---|---|---|---|
| 5.1 | item_0_genealogy.png | [待创建] | 序章初始道具：族谱残页，泛黄纸张 | 透明背景，物品独立无背景，isolated object on transparent background, no background, object only, 一张泛黄的胡氏族谱残页，边缘破损，毛笔字迹隐约可见，洒金底纹，Digital Ink Wash Painting，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 5.2 | item_0_magnifier.png | [待创建] | 序章初始道具：古铜放大镜 | 透明背景，物品独立无背景，isolated object on transparent background, no background, object only, 一枚古铜色圆形放大镜，手柄雕刻云纹，镜片略带弧度反光，Digital Ink Wash Painting，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 5.3 | item_0_compass.png | [待创建] | 序章初始道具：简易罗盘 | 透明背景，物品独立无背景，isolated object on transparent background, no background, object only, 一枚圆形木质罗盘，刻有八卦方位，指针为铜制，盘面有淡淡墨迹，Digital Ink Wash Painting，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 5.4 | item_1_stamp_zuǐ.png | [待创建] | 第一幕奖励：忠字印（注：PRD 称"忠"，目录写"读"，以 PRD 为准） | 透明背景，物品独立无背景，isolated object on transparent background, no background, object only, 一枚方形金色印章，印文篆书"忠"字，印面朱红色，边缘有云纹浮雕，Digital Ink Wash Painting，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，金箔高光，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 5.5 | item_2_stamp_qín.png | [待创建] | 第二幕奖励：勤字印 | 透明背景，物品独立无背景，isolated object on transparent background, no background, object only, 一枚方形金色印章，印文篆书"勤"字，印面朱红色，边缘有云纹浮雕，Digital Ink Wash Painting，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，金箔高光，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 5.6 | item_3_stamp_hé.png | [待创建] | 第三幕奖励：和字印 | 透明背景，物品独立无背景，isolated object on transparent background, no background, object only, 一枚方形金色印章，印文篆书"和"字，印面朱红色，边缘有云纹浮雕，Digital Ink Wash Painting，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，金箔高光，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 5.7 | item_4_stamp_xiào.png | [待创建] | 第四幕奖励：孝字印 | 透明背景，物品独立无背景，isolated object on transparent background, no background, object only, 一枚方形金色印章，印文篆书"孝"字，印面朱红色，边缘有云纹浮雕，Digital Ink Wash Painting，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，金箔高光，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 5.8 | item_5_stamp_jìng.png | [待创建] | 第五幕奖励：读字印（注：PRD 称"读"，目录写"敬"，以 PRD 为准） | 透明背景，物品独立无背景，isolated object on transparent background, no background, object only, 一枚方形金色印章，印文篆书"读"字，印面朱红色，边缘有云纹浮雕，Digital Ink Wash Painting，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，金箔高光，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |

---

## 6. 谜题素材（img_01_quiz）

| # | 资源名称 | 状态 | 描述 | 即梦提示词 |
|---|---|---|---|---|
| 6.1 | quiz_1_paifang_overview.jpg | [待创建] | 第一幕牌坊填空主图：牌楼正面全景 | 明代石牌坊正面全景，四柱三间五楼，雕刻精美的鹤鹿龙虎狮石雕，白墙黛瓦为背景，Digital Ink Wash Painting，Blue-Green Landscape，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，青绿山水，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 6.2 | quiz_1_paifang_marker.png | [待创建] | 第一幕牌坊提示图：标注柱子/门洞/楼阁 | 牌坊局部特写，柱子、门洞、楼阁处有淡金色光圈标注，Digital Ink Wash Painting，Blue-Green Landscape，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，青绿山水，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 6.3 | quiz_2_angle_a.jpg | [待创建] | 第二幕商字选择题：错误选项A（侧面角度） | 徽派老宅侧面视角，无法看出商字结构，Digital Ink Wash Painting，Blue-Green Landscape，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，青绿山水，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 6.4 | quiz_2_angle_b.jpg | [待创建] | 第二幕商字选择题：正确选项B（正面全景） | 徽派老宅正面全景，门楼如商字上部亠，天井如口，两侧厢房如下半部分，Digital Ink Wash Painting，Blue-Green Landscape，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，青绿山水，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 6.5 | quiz_2_angle_c.jpg | [待创建] | 第二幕商字选择题：错误选项C（俯视角度） | 徽派老宅俯视视角，屋顶瓦片纹理为主，Digital Ink Wash Painting，Blue-Green Landscape，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，青绿山水，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 6.6 | quiz_2_cuozi_couplet.jpg | [待创建] | 第二幕错字联找茬主图：楹联特写 | 徽派厅堂楹联特写，黑底金字对联"快乐每从辛苦得，便宜多自吃亏来"，书法行书，Digital Ink Wash Painting，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，青绿山水，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 6.7 | quiz_3_xiaozi_left.png | [待创建] | 第三幕孝字拼图：左侧（猴脸部分） | 朱熹书法"孝"字左半部分特写，形似猴脸，水墨晕染，Digital Ink Wash Painting，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 6.8 | quiz_3_xiaozi_right.png | [待创建] | 第三幕孝字拼图：右侧（后生作揖部分） | 朱熹书法"孝"字右半部分特写，形似拱手作揖的后生，水墨晕染，Digital Ink Wash Painting，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 6.9 | quiz_3_ancestor_tang.png | [待创建] | 第三幕祖先排序卡：唐朝·胡昌翼 | 透明背景，单独人物无背景，isolated character on transparent background, no scenery, no environment, character only, 唐代文人画像，胡昌翼，身着唐代圆领袍，手持书卷，面容清秀，Digital Ink Wash Painting，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 6.10 | quiz_3_ancestor_ming.png | [待创建] | 第三幕祖先排序卡：明朝·胡文光 | 透明背景，单独人物无背景，isolated character on transparent background, no scenery, no environment, character only, 明代官员画像，胡文光，身着绯红官服，头戴乌纱帽，Digital Ink Wash Painting，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 6.11 | quiz_3_ancestor_qing.png | [待创建] | 第三幕祖先排序卡：清朝·胡贯三 | 透明背景，单独人物无背景，isolated character on transparent background, no scenery, no environment, character only, 清代富商画像，胡贯三，身着华贵绸缎，面容和气，Digital Ink Wash Painting，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 6.12 | quiz_5_zhuimu_overview.jpg | [待创建] | 第五幕门神填空总览图：追慕堂正门 | 追慕堂正门全景，两扇大门，门神画像高悬，Digital Ink Wash Painting，Blue-Green Landscape，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，青绿山水，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 6.13 | quiz_5_doorgod_white.jpg | [待创建] | 第五幕白脸门神判断图：秦叔宝 | 透明背景，单独人物无背景，isolated character on transparent background, no scenery, no environment, character only, 白脸门神秦叔宝画像特写，身披铠甲，手持金锏，Digital Ink Wash Painting，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 6.14 | quiz_5_doorgod_black.jpg | [待创建] | 第五幕黑脸门神判断图：尉迟恭 | 透明背景，单独人物无背景，isolated character on transparent background, no scenery, no environment, character only, 黑脸门神尉迟恭画像特写，身披铠甲，手持钢鞭，Digital Ink Wash Painting，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |


## 7. 美食场景（img_03_food）

| # | 资源名称 | 状态 | 描述 | 即梦提示词 |
|---|---|---|---|---|
| 7.1 | food_1_huanshan_cake.jpg | [待创建] | 第一幕特产图：黄山烧饼特写 | 一碟金黄酥脆的黄山烧饼，表面撒满芝麻，置于青瓷盘中，旁有茶叶点缀，Digital Ink Wash Painting，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 7.2 | food_1_huanshan_cake_scene.jpg | [待创建] | 第一幕食摊场景图 | 古村落村口小吃摊，蒸笼冒着热气，黄山烧饼整齐码放，青石板路，Digital Ink Wash Painting，Blue-Green Landscape，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，青绿山水，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 7.3 | food_2_maofeng_tea.jpg | [待创建] | 第二幕特产图：黄山毛峰茶叶特写 | 一捧翠绿黄山毛峰茶叶，芽尖带白毫，置于竹制茶则中，旁有紫砂壶，Digital Ink Wash Painting，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 7.4 | food_2_maofeng_tea_scene.jpg | [待创建] | 第二幕茶坊场景图 | 徽派茶坊内景，木质茶桌，青瓷茶具，黄山毛峰茶叶翠绿，窗外竹影婆娑，Digital Ink Wash Painting，Blue-Green Landscape，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，青绿山水，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |

---

## 8. 支线 / 彩蛋（img_06_special）

| # | 资源名称 | 状态 | 描述 | 即梦提示词 |
|---|---|---|---|---|
| 8.1 | special_4_xiulou_scene.png | [待创建] | 第四幕支线绣楼场景 | 徽派绣楼二层，雕花窗棂，一位少女手持团扇倚窗而立，楼下青石板路，Digital Ink Wash Painting，Blue-Green Landscape，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，青绿山水，柔和漫射光，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 8.2 | special_4_xiangrikui_ball.png | [待创建] | 第四幕支线绣球道具 | 透明背景，物品独立无背景，isolated object on transparent background, no background, object only, 一枚精致的徽州绣球，红绸为底，绣有花鸟纹样，流苏垂坠，Digital Ink Wash Painting，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，金箔高光，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 8.3 | special_6_xiayi_tombstone.png | [待创建] | 第六印支线碑刻线索 | 一块古老的石碑，碑面刻有模糊的文字，青苔斑驳，置于竹林深处，Digital Ink Wash Painting，Blue-Green Landscape，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，青绿山水，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 8.4 | special_caidan_matouqiang.jpg | [待创建] | 马头墙彩蛋图 | 徽派马头墙特写，五阶形制层层叠起，白墙黛瓦，天空为背景，Digital Ink Wash Painting，Blue-Green Landscape，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，青绿山水，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |

---

## 9. 特效 / 动效参考图

> 注：以下为动效设计参考图/概念图，非即梦直接生成素材，但可用即梦生成风格一致的参考底图。

| # | 资源名称 | 状态 | 描述 | 即梦提示词（参考图） |
|---|---|---|---|---|
| 9.1 | 印章浮现动效参考 | [待创建] | 金色印章从虚空中浮现，金光四射 | 一枚金色印章悬浮于洒金宣纸之上，周围有淡金色光晕和粒子飘散，Digital Ink Wash Painting，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，金箔高光，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 9.2 | 绣球抛出动效参考 | [待创建] | 绣球从绣楼窗口抛出，弧线优美 | 一枚红色绣球从徽派绣楼雕花窗口抛出，红绸在空中划出弧线，Digital Ink Wash Painting，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |
| 9.3 | 秘档展开动效参考 | [待创建] | 古卷轴缓缓展开，文字浮现 | 一卷泛黄古卷轴缓缓展开，卷面有淡墨字迹逐渐浮现，洒金底纹，Digital Ink Wash Painting，Watercolor on textured rice paper with gold leaf highlights，Wang Ximeng Thousand Li of Rivers and Mountains，赭石淡金色调，金箔微光，精细，--no 现代建筑, 西方元素, 粗糙笔触, 低分辨率, 卡通化, 3D渲染, 写实照片, 霓虹灯, 赛博朋克荧光 |

---

## 10. 音频资源

> 音频资源不生成即梦提示词，以下为风格参考描述。

| # | 资源名称 | 状态 | 描述 | 风格参考 |
|---|---|---|---|---|
| 10.1 | bgm_prologue.mp3 | [待创建] | 序章背景音乐 | 古琴泛音开场，渐入箫声，节奏舒缓，营造神秘古朴氛围，时长约 3 分钟可循环 |
| 10.2 | bgm_explore.mp3 | [待创建] | 探索/地图背景音乐 | 竹笛与古筝合奏，轻快悠扬，模拟行走于古村石板路的节奏感，时长约 3 分钟可循环 |
| 10.3 | bgm_puzzle.mp3 | [待创建] | 解谜背景音乐 | 古琴独奏，节奏略紧，带有思考感，答对时自然过渡到泛音收尾，时长约 2 分钟可循环 |
| 10.4 | bgm_finale.mp3 | [待创建] | 终章背景音乐 | 编钟与古琴合奏，庄严而温暖，高潮处有弦乐铺底，时长约 4 分钟 |
| 10.5 | sfx_click.mp3 | [待创建] | 点击音效 | 清脆的竹板敲击声 |
| 10.6 | sfx_unlock.mp3 | [待创建] | 解锁音效 | 金石相击的清脆声响，如印章盖下的声音 |
| 10.7 | sfx_error.mp3 | [待创建] | 错误音效 | 低沉的古琴滑音，略带警示感 |
| 10.8 | sfx_success.mp3 | [待创建] | 成功音效 | 编钟单音 + 泛音回响，温暖明亮 |
| 10.9 | sfx_seal_appear.mp3 | [待创建] | 印章浮现音效 | 金石摩擦声 + 金光粒子音效 |
| 10.10 | sfx_letter_open.mp3 | [待创建] | 古信展开音效 | 宣纸摩擦的沙沙声 |
| 10.11 | sfx_page_turn.mp3 | [待创建] | 翻页音效 | 书页翻动的轻响 |
| 10.12 | sfx_item_get.mp3 | [待创建] | 道具获取音效 | 玉石碰撞的清脆声 |
| 10.13 | sfx_camera_shutter.mp3 | [待创建] | 拍照音效 | 仿古相机快门声，带木质质感 |
| 10.14 | sfx_ball_catch.mp3 | [待创建] | 接住绣球音效 | 绸缎飘动声 + 轻巧的落地声 |
| 10.15 | voice_hulaofuzi.mp3 | [待创建] | 胡老夫子语音（5 句，总时长 ≤ 2 分钟） | 老年男性，温和慈祥，略带徽州方言韵味，语速舒缓 |
| 10.16 | voice_huwenguang.mp3 | [待创建] | 胡文光语音（5 句，总时长 ≤ 2 分钟） | 中年男性，威严中透着亲和，标准官话，语调庄重 |
| 10.17 | voice_huwenzhao.mp3 | [待创建] | 胡文照语音（5 句，总时长 ≤ 2 分钟） | 老年男性，儒雅从容，语速不紧不慢，带书卷气 |
| 10.18 | voice_hushangyan.mp3 | [待创建] | 胡尚熷语音（5 句，总时长 ≤ 2 分钟） | 中年男性，清贵端庄，语调平和中带着自信 |

---

## 11. 文案资源

> 以下为从设计文档中提取的文案需求清单，需在代码中落地。

| # | 资源名称 | 状态 | 描述 |
|---|---|---|---|
| 11.1 | 序章对话文本 | [待创建] | 胡老夫子开场白 + 玩家选项A/B 分支对话，约 500 字 |
| 11.2 | 第一幕对话文本 | [待创建] | 胡老夫子引导 + 胡文光剧情对话 + 石雕科普，约 800 字 |
| 11.3 | 第二幕对话文本 | [待创建] | 胡老夫子引导 + 错字联解读对话，约 600 字 |
| 11.4 | 第三幕对话文本 | [待创建] | 胡老夫子引导 + 孝字解读 + 祖先排序对话，约 600 字 |
| 11.5 | 第四幕对话文本 | [待创建] | 胡文照对话 + 退让情景题分支，约 500 字 |
| 11.6 | 第五幕对话文本 | [待创建] | 胡尚熷对话 + 断句理解题，约 500 字 |
| 11.7 | 终章对话文本 | [待创建] | 胡老夫子终章独白 + 五枚印章排列 + 家训揭晓，约 800 字 |
| 11.8 | 百科条目文案 | [待创建] | 10 条百科，每条 300-500 字，含一句话总结 / 详细解读 / 趣味冷知识 |
| 11.9 | 物品描述文案 | [待创建] | 族谱残页 / 放大镜 / 罗盘 / 五枚明经印 / 特产 / 碎片，各 50-100 字 |
| 11.10 | 成就/称号文案 | [待创建] | 寻访者 / 明经有缘人 / 徽味行者 / 明经知音 / 巷陌行者 / 迷宫旅人 / 西递通 等 |
| 11.11 | 分享文案 | [待创建] | 通关分享 / 特产分享 / 绣球支线分享 / 徽墨支线分享，各 1 条 |
| 11.12 | 教程/提示文案 | [待创建] | 首次使用引导、道具说明、地图操作提示、拍照教程等 |

---

## 📊 资源清单统计摘要

| 类别 | 条目数 | 已有 | 待创建 | 需更新 |
|---|---:|---:|---:|---:|
| 品牌资源 | 3 | 0 | 3 | 0 |
| 角色美术 | 6 | 0 | 6 | 0 |
| 场景美术 | 10 | 1 | 9 | 0 |
| UI / 界面 | 6 | 0 | 6 | 0 |
| 道具 / 物品 | 8 | 0 | 8 | 0 |
| 谜题素材 | 14 | 0 | 14 | 0 |
| 美食场景 | 4 | 0 | 4 | 0 |
| 支线 / 彩蛋 | 4 | 0 | 4 | 0 |
| 特效 / 动效 | 3 | 0 | 3 | 0 |
| 音频 | 18 | 0 | 18 | 0 |
| 文案 | 12 | 0 | 12 | 0 |
| **合计** | **88** | **1** | **87** | **0** |

### 关键发现

1. **唯一已有资源**: `public/assets/map.png`（约 9.5MB），其余 `assets/` 下所有分类目录（img_01_quiz ~ img_06_special）均为空目录，仅有 README.md。
2. **印章名称不一致**: `RESOURCE_CATALOG.md` 与 `assets-manifest.json` 中第一幕印章记为"读"、第五幕记为"敬"，但 PRD 与 `xidi-secret-archive-dev-version.md` 中明确为"忠"和"读"。**建议以 PRD 为准统一命名**。
3. **P0 核心交付缺口**: img_01_quiz（14 张）、img_02_item（8 张）、img_03_food（4 张）全部为待创建状态，这些是 MVP 核心体验的最优先美术需求。
4. **音频完全空白**: 4 首 BGM + 14 个音效/语音均未准备，需尽快确定配音演员或 TTS 方案。

### 使用建议

- **批量生成优先级**: P0（谜题 + 道具 + 美食）> P1（NPC + UI）> P2（支线 + 彩蛋）
- **即梦提示词复用**: 所有美术类提示词共享同一套风格锚点三元组，仅需替换 `{主体描述}` 即可批量生成
- **夜间变体**: 因选择"统一单色调"，无需为同一张图生成两套素材，夜间效果可通过前端降低明度/饱和度实现
