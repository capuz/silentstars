---
repo: "WindXRan/fangcun-write"
name: "fangcun-write"
description: "AI 驱动的网文仿写引擎，从源文输入到全书量产，0 人工"
readmeQualityOk: true
url: "https://github.com/WindXRan/fangcun-write"
homepage: "https://windxran.github.io/fangcun-write/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["ai-writing", "automation", "deepseek", "llm", "novel-generator", "python", "content-generation-platform"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-06-15T07:18:19Z"
lastCommitAt: "2026-08-28T15:33:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: ["WindXRan"]
openGraphImageUrl: "https://opengraph.githubassets.com/61dc9f5a46160aa524369505f8c81844ed3a1ebc092e782a3489d6f95e9176f4/WindXRan/fangcun-write"
discussionCount: 1
---

# 方寸写作 · AI 仿写工作室

把「一本源书 → 一本可发布的新书」的整条流水线装进一个仓库：
给定源书（小说或剧本），自动产出剧情 100% 原创、风格一致的番茄风长篇，
并走完发布准备（定书名 / 投稿信息 / 出封面 / 汇总）。

**这个项目的默认用法是让 AI 替你跑，不是你自己敲命令行。**
你只需要用自然语言说出想做的事，AI 会自己翻 `skills/fangcun-imitate/`（agent 操作手册）和 `tools/` 下的脚本，
决定怎么执行、带什么参数。所以这份介绍不再堆命令——**细节留给 AI**。

- 人类看本文件（README）：知道「能做到什么」和「红线在哪」。
- AI 定位仓库先读 `INDEX.md`（唯一导航入口 + AI 写码红线），操作手册与安全铁律在 `skills/fangcun-imitate/SKILL.md`（原 `AGENT_RULES.md` 已退役，规则迁入技能目录）。

---

## 一句话是什么

```
源书(小说/剧本) → 事件表 → 故事骨架(独创新剧情) → 改编策略 → 剧本 → 番茄风小说 → 发布准备
```

仿写 ≠ 洗稿：借结构不借内容，专名零复用，剧情 100% 原创。

---

## 能做到什么（说人话就行）

| 你想做的事 | 你就这样说 |
|---|---|
| 拿一本小说仿写成新书 | 「把 素材/ 里某本书仿写成新书」（纯扩写：集数跟随源书当前章数） |
| 拿一个剧本仿写成新书 | 「把某个剧本仿写成新书」 |
| 忠实改编，保留原剧情人物 | 「把某书忠实改编成剧本 / 小说」 |
| 看现在什么题材火 | 「扫一下现在什么题材火」 |
| 中途断了补跑 | 「把某书剩下的集数补完」 |
| 发布前定稿 | 「把某书定稿发布：书名、投稿信息、封面、汇总」 |
| 一键投稿到蛙蛙 | 「把某书投稿/一键投稿到蛙蛙」（自动填表+传正文/封面，停在提交前等人确认） |
| 查/登记征文活动 | 「有什么征文能投」「登记这个征文活动」（台账：`config/contests/registry.json` + `config/征文台账.md`） |
| 挑适合仿写的书 | 「帮我在书库挑书」 |
| 下载源书 | 「把某本书下载下来」 |

这些能力都有现成脚本，AI 会自己找到并带上正确的参数执行——**你不需要记任何命令**。

---

## 核心概念（一句话版）

- **仿写 vs 改编**：同一套管线，由项目里 `出品/用户需求.md` 第一行的意图决定，AI 会自动识别切换，零命令行开关。
- **源可以是小说或剧本**：小说按「第N章」、剧本按「第N集」拆分，AI 自动处理，对上层透明。
-…
