---
repo: "dativo-io/talon"
name: "talon"
description: "Control plane for company AI use cases — one self-hosted operating layer for shared budgets, policies, reliability, and session understanding, with verifiable evidence. EU-friendly: self-host, PII controls, data residency."
readmeQualityOk: true
url: "https://github.com/dativo-io/talon"
homepage: "https://dativo.io"
language: "Go"
languages: ["Go"]
languagePcts: [88]
topics: ["ai-agents", "ai-compliance", "data-sovereignty", "eu-ai-act", "gdpr", "llm-gateway", "llmops", "mcp", "opa", "openai-proxy"]
stars: 18
forks: 12
openIssues: 62
closedIssues: 241
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-02-15T16:58:32Z"
lastCommitAt: "2026-11-07T22:51:28Z"
lastReleaseAt: "2026-02-26T13:12:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 58
maintainers: ["sergeyenin"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1158615079/5531ec50-a56c-4ff3-9b67-0d541835ba2f"
---

# Dativo Talon

**Enforce company AI policy across AI use cases — before model access and consequential actions, with verifiable proof.**

**Open source vs Enterprise:** Talon OSS is a complete Apache-2.0 enforcement and evidence core—not a limited trial. A separate Enterprise edition is being developed for corporate OIDC/domain and reviewer administration, SIEM/SOC integrations, existing approval workflows, supported deployment profiles and commercial support. **Those Enterprise integrations are not released features.** See [edition boundaries](https://github.com/dativo-io/talon/blob/HEAD/docs/explanation/oss-enterprise-boundary.md) and the [public editions overview](https://dativo.io/enterprise/).\n\nEvery AI use case — a customer-support assistant, a coding assistant, a document summarizer — needs to obey the same company rules even when teams choose different models or runtimes. **Dativo Talon** is an Apache-2.0, self-hosted control plane that resolves company policy plus use-case-specific rules and enforces them at supported boundaries. On routed model traffic, it governs provider access, data, budgets, retry/fallback and sessions. On consequential actions, the shipped **HTTP…
