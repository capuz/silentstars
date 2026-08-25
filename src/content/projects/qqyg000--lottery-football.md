---
repo: "qqyg000/lottery-football"
name: "lottery-football"
description: "彩票预测-竞彩足球"
readmeQualityOk: true
url: "https://github.com/qqyg000/lottery-football"
language: "Java"
languages: ["Java", "JavaScript"]
languagePcts: [55, 32]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-14T02:18:02Z"
lastCommitAt: "2026-08-25T04:08:41Z"
status: "thriving"
tags: []
healthScore: 79
undervaluedScore: 48
maintainers: ["qqyg000"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5a6f3120a20e7b31b09430c358a9ec0ea5ab3c29108d30b2c6ab9277ae61c21/qqyg000/lottery-football"
---

# lottery-football

竞彩足球胜平负概率预测与推荐回测程序。后端使用 Spring Boot，前端使用 Vue 2，支持按赛事和日期查询赛程、赛果、体彩赔率及模型预测结果。

> 当前内置比赛数据快照更新至 2026-08-13，球队名映射更新至 2026-08-23。项目仅用于数据分析、算法学习和开发验证，不构成投注建议。

## 主要功能

- 支持 18 类赛事，按赛事和日期查询近期赛程、完场比分与比赛状态
- 使用泊松分布和蒙特卡洛模拟计算常规及让球胜平负概率
- 展示双方期望进球、总进球数和比分预测
- 读取中国体彩网开售状态、让球数及胜平负赔率
- 使用统一球队名映射关联历史数据、赛程、体彩赔率和页面展示
- 点击球队名称查看主队近况、双方历史交锋和客队近况，每栏最多 10 场；近况球队名统一采用体彩标准名
- 每类赛事维护“本届/含上届 × 稳健/激进”四套独立参数档案
- 前端动态配置进球系数、让球阈值、赔率阈值和比赛类型权重，修改后自动重算
- 提供参数说明提示、异步数据更新、推荐回测及进度展示
- 回测展示场均投注、场均返奖、采样率、命中率和 ROI

模型统一使用 90 分钟加伤停补时的全场比分，不把加时赛和点球大战计入常规赛果。

## 支持的赛事

| 赛事 | 代码 |
|---|---|
| 世界杯 | `WORLD_CUP` |
| 欧洲杯 | `EUROPEAN_CHAMPIONSHIP` |
| 美洲杯 | `COPA_AMERICA` |
| 世俱杯 | `CLUB_WORLD_CUP` |
| 欧罗巴 | `EUROPA_LEAGUE` |
| 欧冠 | `CHAMPIONS_LEAGUE` |
| 英超 | `PREMIER_LEAGUE` |
| 西甲 | `LA_LIGA` |
| 德甲 | `BUNDESLIGA` |
| 意甲 | `SERIE_A` |
| 法甲 | `LIGUE_1` |
| 葡超 | `PRIMEIRA_LIGA` |
| 荷甲 | `EREDIVISIE` |
| 阿甲 | `ARGENTINE_PRIMERA_DIVISION` |
| 瑞超 | `SWEDISH_ALLSVENSKAN` |
| 芬超 | `FINNISH_VEIKKAUSLIIGA` |
| 韩职 | `K_LEAGUE_1` |
| 苏足总杯 | `SCOTTISH_FA_CUP` |

前端支持多选具体赛事。多选时参数区展示首个所选赛事的参数方案并禁止编辑具体数值，但仍允许统一切换稳健/激进方案；普通预测和推荐回测会按比赛所属赛事分别使用所选方案下各自的参数档案。推荐回测接口同时兼容 `ALL` 或逗号分隔的多个赛事代码，供脚本批量调用。

## 技术栈与数据

- Java…
