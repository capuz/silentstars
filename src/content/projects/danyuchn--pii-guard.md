---
repo: "danyuchn/pii-guard"
name: "pii-guard"
description: "繁體中文（台灣）個人資料去識別化工具，讓業務文件可以安全地送進 AI 處理 / Reversible Traditional-Chinese (Taiwan) PII de-identification for LLM workflows — fully local"
readmeQualityOk: true
url: "https://github.com/danyuchn/pii-guard"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["anonymization", "claude-code", "gdpr", "llm", "ollama", "pii", "presidio", "privacy", "taiwan", "traditional-chinese"]
stars: 67
forks: 7
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-30T08:35:00Z"
lastCommitAt: "2026-08-21T04:11:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 16
maintainers: ["danyuchn"]
openGraphImageUrl: "https://opengraph.githubassets.com/aeca1b507ed1374495fac267417bf81d07ad1af1dd552149c4d32ed2204db508/danyuchn/pii-guard"
---

# pii-guard

繁體中文（台灣）個人資料去識別化工具。把文件裡的個資換成可還原的代號，讓你能用雲端 AI 處理機敏文件，處理完再換回來。**偵測與還原全程在你自己的機器上跑。**

---

**English summary** — Reversible PII de-identification for Traditional Chinese (Taiwan) documents.

Most tools that strip PII before an LLM call are network gateways ([LiteLLM + Presidio](https://www.litellm.ai/), [PrivAiTe](https://github.com/crp4222/PrivAiTe), [AI Security Gateway](https://github.com/aisecuritygateway/aisecuritygateway)) and they work well. None of them handle Taiwanese PII: national ID and ARC numbers, 統一編號 business IDs, local phone formats, or Traditional Chinese personal and organisation names — which need CKIP's Chinese NER rather than an English model with the locale switched.

This fills that gap, and differs in one more way: it produces a **redacted file you can keep and hand to someone**, not a per-request proxy. Detection is Presidio + CKIP BERT + Taiwan regex; substitution and restoration are plain code, so restoration is exact. A bundled Claude Code skill runs the whole thing without letting the cloud agent read the original.

Everything below is in Traditional Chinese. Start at [安裝](#安裝).

---

## 為什麼還要一個？

處理「送進 LLM…
