---
repo: "v587d/capital-generation"
name: "capital-generation"
description: "面向中国股市散户的金融投资智能体。Next-Gen AI-Driven Capital Generation."
readmeQualityOk: true
url: "https://github.com/v587d/capital-generation"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [66, 34]
topics: ["deepseek-harness", "byok", "dsh-plugin-web", "dsh-plugin", "finance", "anysearch"]
stars: 8
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-16T08:08:18Z"
lastCommitAt: "2026-09-17T08:50:50Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 23
maintainers: []
openGraphImageUrl: "https://repository-images.githubusercontent.com/1335734923/02a68430-d217-4cd3-a4d6-f12eb3cf96d6"
discussionCount: 1
---

</p>

</p>
</p>
</p>

> [!IMPORTANT]
> 本项目长期处于探索阶段，不提供任何形式的金融服务，不承诺任何投资回报，投资需审慎。 盈亏自负，与本项目一概无关。
>
> 愿大家的财富数字就像"text generation"一样，不断增长，永不停止。

> [!NOTE]
> 先安装 [Deepseek Harness(DSH)](https://github.com/deepseek-ai/deepseek-harness) ，目前已适配 DSH`@0.1.5-rc.1` 。
> LLM 建议 **Deepseek/deepseek-flash** 搭配本项目， GPT / Claude 尚未充分测试，理论亦可。

# Slogan
Next-Gen AI-Driven Capital Generation.

# What
Capital Generation 是面向中国散户，适用于日常证券研究的 DSH 插件，简单地说：
1. Agent preset（人设）：面向金融场景的 Capital 模式，与 DSH 默认的标准、PTC、极简、创造模式并列。

2. 所有 Agent，包括主 Agent 均不能直接接触原始结构数据（行情、财务报表细目等），需要时 Agent 可按需提取再提炼发送消息至主 Agent。
目前覆盖以下 Subagent（data_analyst 为预留角色，暂未启用）：
  - data_collector: 主 Agent 直属下级（spawn），负责根据上级指令收集金融财经类结构化数据，目前支持 同花顺（fuyao）约61个数据 API接口。
  - data_junior: 主 Agent 直属下级（spawn），负责根据上级指令清洗、整理出有效数据、基础描述性统计以及数据透视，目的是阐述数据背后的“故事”。
  - data_analyst: 主 Agent 直属下级，负责根据上级指令，通过运用编程技能分析上游数据（**仍在开发中**，委派行 disabled，暂不启用）。
  - web_retriever: 主 Agent 直属下级（spawn），负责根据上级指令，运用网络搜索和抓取能力，获取外部非结构化数据，目前支持 AnySearch(search/fetch) API 数据接口和 Wind Alice 相关服务。
  - visualization_specialist: 主 Agent 的孙 Agent（data_junior 的 one-shot 前台子 Agent），由 data_junior 在 profile 完成后的可视化 gate 中按需创建；只接收 `profile_ref`、有限 profile 事实与短期 `chart_source_ref`，使用受控…
