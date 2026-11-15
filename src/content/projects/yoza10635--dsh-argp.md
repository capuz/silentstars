---
repo: "yoza10635/dsh-argp"
name: "dsh-argp"
description: "Context compaction plugin for dsh (DeepSeek Harness): deterministic entity-label pruning of tool results (0 LLM), LLM prose summaries only inside compaction transactions, verbatim recall of pruned text by label, over-window requests compacted before sending."
originalDescription: "dsh 的上下文压缩插件：工具结果按实体标签确定性剪枝（0 LLM），对话正文只在压缩事务内 LLM 摘要，剪掉的原文可按标签逐字召回，必超窗的请求先压后发。 Context compaction plugin for dsh (DeepSeek Harness): deterministic entity-label pruning of tool results (0 LLM), LLM prose summaries only inside compaction transactions, verbatim recall of pruned text by label, over-window requests compacted before sending."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/yoza10635/dsh-argp"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [77, 23]
topics: ["dsh-plugin", "compaction", "context-compression", "agent", "cordis", "dsh", "llm", "deepseek-harness", "context-management", "prompt-caching"]
stars: 15
forks: 2
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-08-17T03:55:09Z"
lastCommitAt: "2026-11-15T08:25:58Z"
lastReleaseAt: "2026-08-22T10:31:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 55
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/fa25e67f26efaaecae5038bff62c446cef399333eb3ff1a3c81654fd696dba5f/yoza10635/dsh-argp"
discussionCount: 0
---

[English](https://github.com/yoza10635/dsh-argp/blob/HEAD/README.en.md) | Chinese

# dsh-argp — Entity-label context compaction: deterministic pruning of tool results by label (0 LLM) + LLM summarization of conversation prose during compaction

**Long sessions fill the context window, and per-turn LLM summaries are expensive and break the prefix cache.** This plugin is a context compaction plugin for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (dsh). It only **deterministically prunes (0 LLM)** tool results that are stale, superseded, or from non-focus turns, tagged by entity label. The pruned original text stays in the log and can be retrieved verbatim by label. Conversation prose is summarized by an LLM only inside the compaction transaction. When context crosses the threshold, it is condensed automatically, and when a request is rejected for exceeding the window, pruning is retried automatically.

46-turn measurement: wall clock 43.3 min · DeepSeek off-peak reference price 3.69 CNY · prefix cache hit rate 97.8% (n=1, see the note below the table).

## Installation

```bash
dsh plugin --profile <name> add dsh-argp
```

**Works immediately after…
