---
repo: "490720818/qq-pet-copilot"
name: "qq-pet-copilot"
description: "基于 uiautomator2 控件定位的 QQ 宠物自动化工具，支持真机、模拟器，支持多开、后台运行。"
readmeQualityOk: true
url: "https://github.com/490720818/qq-pet-copilot"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["adb", "pet", "pp-ocrv6", "qq", "qqpet", "rapidocr", "scrapy", "uiautomator2", "qq-pet"]
stars: 77
forks: 4
openIssues: 4
closedIssues: 11
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-07-31T14:25:41Z"
lastCommitAt: "2026-08-28T14:20:07Z"
lastReleaseAt: "2026-08-13T15:09:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 74
undervaluedScore: 32
maintainers: ["490720818"]
openGraphImageUrl: "https://opengraph.githubassets.com/206147352bbd9819f2f613afeaabd70d60f5b76c423d7eb9ed89fbabf283998f/490720818/qq-pet-copilot"
---

# QQ 宠物自动化助手（qq-pet-copilot）

基于 uiautomator2 控件定位 + RapidOCR 文字识别的 QQ 宠物自动托管工具（分辨率无关）。
PyQt6 图形界面内嵌 scrcpy 实时画面，任务队列自动调度，按金币和**学习/工作时长**规则推进，
并自动处理**被雇佣召回**、**体力/清洁照顾**、**好友护理/雇佣**等日常。

> **游戏机制注意：护理相关勋章如果要拿的话不能一键！！！**
> 一键护理不计入勋章进度，要拿勋章必须把护理方式配成"ocr检测"手动喂食/洗澡
> （配置项 `care.method` / `friend_care.method`）。

推荐使用调度任务中设置时间段来规划每天的任务。推荐配置：

| 玩家类型 | 推荐配置 |
| --- | --- |
| 战力玩家 | 每天学习 19 小时左右，剩下 5 小时优先完成 600 次冒险（设置跳过天色；有条件的话用一个小号给大号一直护理），还有剩余可以小号雇佣大号 |
| 均衡玩家 | 每天学习 15 小时，5 小时冒险 600 次（设置跳过天色），4 小时被小号雇佣 |
| 职业玩家 | 优先打工拿工分升级职业，职业升级卡住了再去学习 |
| 勋章玩家 | 无推荐配置，按勋章要求来即可 |

## 功能

- **任务队列调度（默认 `task_queue`）**：按 `tasks.order` 顺序扫描执行，每个任务独立
  enabled / trigger（interval 间隔 / daily 每日时间点窗口）/ 执行时间窗 / 成功失败退避
  （失败退避统一由设置页"任务失败重试间隔"`tasks.failure_interval` 控制）；
  冒险/学习/打工/雇佣好友互斥，作为主任务组统一调度且**非阻塞延时收尾**（进行中 OCR 剩余
  时间登记 pending，到点自动收尾计数，期间先跑其他任务）；踩踩/PK/好友护理/被雇佣检查按各自
  定时与次数排期，失败自动延后重试。另有旧 `legacy` 引擎（顺序写死）可切换。
- **学习场景**：出门 → 学校 → OCR 识别学园阶段（初级/中级/高级/进修，选课顺序自动适配）→
  归位选课（力量/智力/魅力）→ 上课 → 下课计数；毕业自动切下一阶段课程。
  每节按学园累计学习时长：初级 10 / 中级 20 / 高级 30 / 进修 45 分钟。
- **打工场景**：出门 → 小镇 → OCR 识别打工地点进入（设置页下拉可选 8 个地点）→
  按 `work.duration` 选时长（10分钟/45分钟/2小时）→ 顺带雇佣好友 → 开工。
  每次按所选时长累计打工时长。
-…
