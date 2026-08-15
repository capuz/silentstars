---
repo: "taoyunan/palworld-paldeck-cn"
name: "palworld-paldeck-cn"
description: "简体中文幻兽帕鲁图鉴"
readmeQualityOk: true
url: "https://github.com/taoyunan/palworld-paldeck-cn"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-08T07:14:14Z"
lastCommitAt: "2026-08-15T04:02:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e282b6329a1acf42cf8ac015306778de5ad9fe7c68ad57723baf20a5bb95627f/taoyunan/palworld-paldeck-cn"
---

# 幻兽帕鲁中文图鉴

一个面向中文玩家的《幻兽帕鲁》静态工具项目，包含帕鲁总览、物品图鉴、建造图鉴、独立互动地图、配种计算、互动科技树、MOD 推荐、属性与工作适应性图标、掉落物、技能信息，以及白天 / 夜晚栖息区域互动地图。

在线访问：

- 图鉴地址：<https://taoyunan.github.io/palworld-paldeck-cn/>
- 配置工具：<https://taoyunan.github.io/palworld-config-cn/>

## 项目特点

- 纯静态页面，不需要后端服务。
- 右上角导航统一为：帕鲁、物品、建造、地图、配种计算器、科技树、MOD推荐、配置工具、github。
- 总览页支持名称、编号、英文名搜索。
- 属性筛选支持多选，并且是“同时拥有这些属性”才会展示。
- 工作适应性支持多选筛选。
- 配种计算器支持两个亲代算子代、指定子代查父母组合、指定一个亲代查看可配结果。
- 配种数据保存在本地，页面运行时不依赖外部接口。
- 科技树收录 1—80 级全部科技，采用接近游戏内界面的等级分栏布局；悬停可查看介绍、解锁内容及所需材料。
- 物品图鉴收录武器、帕鲁球、防具、饰品、素材、消耗品、弹药、食材、重要物品、滑翔伞与设计图等资料，支持分类、稀有度、名称筛选和悬停详情。
- 建造图鉴收录生产、帕鲁、收纳、食物、基础设施、照明、建筑、防御、家具与其他设施，悬停可查看科技等级、工作适应性、说明和建造材料。
- 独立地图页收录帕洛斯群岛和世界树点位，支持分类筛选、点位搜索、缩放和拖拽。
- MOD 推荐页收录 3DM MOD站 2026 年 7 月 10 日之后发布的《幻兽帕鲁》模组，支持类型与关键词筛选。
- 属性、工作适应性在所有相关位置都带有对应图标。
- 详情页包含图鉴介绍、伙伴技能、基础资料、工作适应性、掉落物、主动技能。
- 栖息区域使用互动地图，并区分白天与夜晚。
- 包含泰拉瑞亚联动等无编号帕鲁，并在总览中单独分组。

## 页面入口

| 页面 | 说明 |
| --- | --- |
| `index.html` | 默认入口，内容与总览页一致 |
| `pals.html` | 帕鲁总览页 |
| `breed.html` | 帕鲁配种计算器 |
| `items.html` | 物品图鉴、分类与稀有度筛选 |
| `construction.html` | 建造设施分类与材料图鉴 |
| `map.html` | 帕洛斯群岛与世界树互动地图 |
| `technologies.html` | 游戏界面风格互动科技树 |
| `mods.html` | 3DM《幻兽帕鲁》MOD 推荐 |
| `paldeck.html?pal=lamball` | 帕鲁详情页示例 |

## 本地运行…
