---
repo: "yao1987825/travel-planner"
name: "travel-planner"
description: "Travel guide and trip planning Skill: links 12306 train tickets, metro transfers in 55 cities, real-time bus data in 579 cities, and China Weather Network weather alerts into a single travel timeline, with attraction and food recommendations and money-saving tips. Zero third-party dependencies, zero API keys."
originalDescription: "旅游攻略与出行规划 Skill：把 12306 火车票、55 城地铁换乘、579 城公交实时、中国天气网天气预警串成一条出行时间线，含景点美食推荐与省钱攻略。零第三方依赖、零 API Key。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/yao1987825/travel-planner"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-04-09T16:08:36Z"
lastCommitAt: "2026-11-06T12:17:45Z"
lastReleaseAt: "2026-11-06T12:17:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 58
maintainers: ["github-actions[bot]", "yaojiwei520", "yao1987825"]
openGraphImageUrl: "https://opengraph.githubassets.com/81fee017d77b49f5d2a1a0b96e84d1af706a6a1eed8c8da52118a50ece2f8c44/yao1987825/travel-planner"
---

# travel-planner —— Travel Assistant Skill (Itinerary Planning + Public Transit + Weather)

This packages "travel" as an AI skill. Once loaded, the model knows which command to run, how to pass its parameters, which fields in the output are directly usable, and which pitfalls to avoid.

> Skill name `travel-planner`; repository name `travel-planner`.
> **Zero third-party dependencies, zero API keys**: just install python3 and it runs.

## Core Idea

A trip is not four unrelated features. It is **a journey made up of several legs**:

```
Origin ──[train/high-speed rail]──→ Arrival station ──[metro/bus]──→ Destination ──[walk]──→ Attraction
                            ↑                    ↑
                    first/last train bottlenecks        weather, alerts, fares
```

So the main entry point is **`transit.py journey`**. It links 12306 train tickets, metro transfers in 55 cities, real-time bus data in 579 cities, and China Weather Network weather alerts into **a single timeline with times**, and performs cross-mode checks (transfer buffers, last-train bottlenecks, weather alerts).

## Features

- 🧭 **End-to-end trip orchestration**: train + metro + bus + weather combined into…
