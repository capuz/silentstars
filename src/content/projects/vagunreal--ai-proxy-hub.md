---
repo: "vagunreal/ai-proxy-hub"
name: "ai-proxy-hub"
description: "WorkBuddy/CodeBuddy → OpenAI-compatible API proxy: multi-account pool, auto failover, daily check-in, visual quota panel"
originalDescription: "WorkBuddy/CodeBuddy → OpenAI-compatible API proxy: multi-account pool, auto failover, daily check-in, visual quota panel"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/vagunreal/ai-proxy-hub"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-09-11T18:51:25Z"
lastCommitAt: "2026-10-17T07:59:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 14
maintainers: ["vagunreal"]
openGraphImageUrl: "https://opengraph.githubassets.com/82ac35cf603b521e215871691932ed770ceeb07013bd545eb2176e0efa4ef452/vagunreal/ai-proxy-hub"
---

# ai-proxy-hub

> Multi-channel AI reverse-proxy aggregation (WorkBuddy / TraeWork / Qoder / OpenCodeZen)

## 📢 Version Update Announcements

| Version | Date | Status | Changes |
|------|------|------|----------|
| **V1.2.2** | 2026-09-29 | **Current version** | Panel refinement and data accuracy: traffic monitoring refactor (channels and models merged, +/− zoom, per-channel card points), request logs persisted independently (clearing stats does not clear logs; paginated, filterable, searchable), one-click check-in (including TraeWork / Qoder), Trae filters models without multipliers and fixes cache and points statistics, overview stats grouped by platform |
| V1.2.1 | 2026-09-29 | Historical version | Fixed deepseek-family models on the Qoder channel that "connect but are always interrupted after a few conversation turns": the Qoder gateway does not accept assistant messages with multiple `tool_calls` (parallel tool calls) or `content:null`, so messages sent to that channel are now normalized |
| V1.2 | 2026-09-29 | Historical version | Upgraded to a multi-channel aggregated reverse proxy: added TraeWork / Qoder / OpenCodeZen channels and platform-specific endpoints…
