---
repo: "yuyuejia/datay"
name: "datay"
description: "DataY is a lightweight, high-performance data platform: a single JAR with a self-developed unified stream-batch processing engine and a self-developed distributed scheduling framework. On a 2-core, 4 GB machine, it can run the full pipeline of data integration → data modeling → data development → task scheduling → data application."
originalDescription: "DataY 是一套轻量、高性能的数据平台，一个 JAR、自研流批一体处理引擎，自研分布式调度框架，在 2 核 4G 的机器上 就能跑通 数据集成 → 数据建模 → 数据开发 → 任务调度 → 数据应用 的完整链路。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/yuyuejia/datay"
homepage: "http://datay.yuyuejia.com.cn/"
language: "Java"
languages: ["Java"]
languagePcts: [67]
topics: ["data-pipeline", "data-platform", "etl", "etl-pipeline"]
stars: 31
forks: 11
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 3
createdAt: "2026-09-26T14:01:34Z"
lastCommitAt: "2026-10-31T09:53:32Z"
lastReleaseAt: "2026-10-30T14:06:50Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 53
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/e5634f3c9d5f7881bf3bfcc44d725f35c06e39a8b8cd852079b1a29bfdf03c76/yuyuejia/datay"
---

# DataY · Lightweight Data Platform

> A data platform can be small without sacrificing features. With DataY running, you get data integration, dimensional modeling, task scheduling, a high-performance data warehouse, and intelligent data Q&A, all in one.

🌐 **Product homepage**: [http://datay.yuyuejia.com.cn/](http://datay.yuyuejia.com.cn/)

## Why DataY?

Traditional data platforms often require a dozen or more machines and hundreds of GB of memory, with complex deployment and high operating costs. DataY's philosophy is: **use a highly refined technology stack to slim things down, and deliver the most complete data capabilities.**

| Traditional approach | DataY |
|---|---|
| Requires multiple system components such as Hadoop / Spark / distributed schedulers | One JAR, in-house engine, all-in-one deployment, no component hell |
| Requires multiple servers to start | **2 cores, 4 GB** is enough to run the full pipeline from data integration → data warehouse → data Q&A |
| Complex tech stack and high operations barrier, requires dedicated big data engineers | Zero-dependency startup, development environment set up in 10 minutes |

**DataY = DataX + Nifi + DolphinScheduler**, but…
