---
repo: "A3Boy/dsh-web-tools"
name: "dsh-web-tools"
description: "Multi-provider Web Search & Fetch for DeepSeek Harness — 8 deeply adapted providers, SearchHints, resilient fallback, and native X / Xiaohongshu retrieval."
readmeQualityOk: true
url: "https://github.com/A3Boy/dsh-web-tools"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [52, 48]
topics: ["ai-agent", "deepseek-harness", "dsh-plugin", "exa", "firecrawl", "searxng", "self-hosted", "tavily", "typescript", "web-search"]
stars: 32
forks: 7
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-08-15T15:58:53Z"
lastCommitAt: "2026-09-29T08:10:14Z"
lastReleaseAt: "2026-09-03T03:08:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 49
maintainers: ["A3Boy", "coolxll"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0f1b019ccf16f839d114da4f125d7fb757072d77a4253187fa32a01b237653b/A3Boy/dsh-web-tools"
---

</p>

# dsh-web-tools

Empower DeepSeek Harness with unified search and deep content extraction across the open web and social platforms.

**Native-Capability Adaptation Across 8 Web Providers · SearchHints Semantic Compilation · Multi-Source Resilience · Xiaohongshu & Twitter / X Retrieval**

  </a>
  </a>
  </a>
</p>

**English** | [简体中文](https://github.com/A3Boy/dsh-web-tools/blob/HEAD/README.zh-CN.md)

</div>

## What problem does it solve?

When web access depends on a single provider, exhausted quota, rate limits, or timeouts can interrupt retrieval. Wrapping multiple APIs with a naive proxy often flattens them to a lowest common denominator, failing to leverage each provider's specialized search modes, categories, freshness, domain rules, and extraction capabilities.

dsh-web-tools connects Exa, Tavily, Firecrawl, Parallel, Brave, You.com, Jina, SearXNG, Xiaohongshu, and Twitter / X to DSH’s standard `web_search` / `web_fetch` interface.

While keeping the tool interface unified, dsh-web-tools normalizes search intents through SearchHints and compiles queries into native provider-specific parameters. This leverages each engine's native categories, freshness filters, domain…
