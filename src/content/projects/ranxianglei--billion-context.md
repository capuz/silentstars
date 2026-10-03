---
repo: "ranxianglei/billion-context"
name: "billion-context"
description: "Basically stable and usable. A context-compression plugin for small context windows (a 100K context is enough), token savings (5x fewer tokens), and month-long single sessions (billions of tokens). A context compression plugin that handles small windows (100k context is sufficient), token savings (5x token savings), and ultra-long sessions (month-scale billions of tokens in a single session). billion-context is all you need"
originalDescription: "基本稳定可用 A context-compression plugin for small context windows (a 100K context is enough), token savings (5x fewer tokens), and month-long single sessions (billions of tokens).上下文压缩插件，兼顾小窗口(100k上下文足矣)省token(省5倍token)和超长会话(数月级别几十亿token单会话)。billion-context is all you need"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ranxianglei/billion-context"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["dsh-plugin"]
stars: 478
forks: 49
openIssues: 41
closedIssues: 752
watchers: 1
contributors: 21
recentReleases: 10
createdAt: "2026-08-06T08:27:34Z"
lastCommitAt: "2026-10-03T09:22:49Z"
lastReleaseAt: "2026-08-08T09:53:34Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 98
undervaluedScore: 28
maintainers: ["ranxianglei", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/98c9848adf0160d7582d7d3a165b09e71b71f99abc6e111da399f34b35b328eb/ranxianglei/billion-context"
discussionCount: 1
---

# billion-context

</p>

<code>npm install -g billion-context</code>
</p>

</p>

---

> **Cache health at a glance:** a healthy session keeps a **95–97%** prefix-cache hit rate — compression itself costs ≤2%. Sustained lower? Check attribution with `/acp` or `/acp-cache` (see [FAQ](#faq)); usual causes, in order: upstream cache TTL expiry · model switch · a bili bug (please report) · other/unknown.

## Community

QQ Group:
1056132097 (full)
1108730198 (open)

---

## 📄 Paper / Preprint

- **[Model-Driven Incremental Hierarchical Compression: Training-Free Multi-Generational Context Management for Long-Lived Coding Agents](https://github.com/ranxianglei/billion-context/blob/HEAD/paper/model-driven-incremental-hierarchical-compression-training-free-multi-generational-context-management-for-long-lived-coding-agents.md)** (English, v0.2)

> 📝 **The paper itself is open-sourced under the MIT License as part of the codebase (`paper/`). It is a living document — anyone may edit it; improvements are welcome via pull request.**

A production-scale longitudinal study: 4.5 months, three hosts, 174,327 model calls, 18.76B cumulative input tokens (~24.7B across all hosts), zero window…
