---
repo: "candelahq/candela"
name: "candela"
description: "🕯️ OTel-native LLM observability platform. Trace, cost, and evaluate your LLM calls."
readmeQualityOk: true
url: "https://github.com/candelahq/candela"
homepage: "https://www.candelahq.com/"
language: "Go"
languages: ["Go", "Rust"]
languagePcts: [51, 26]
stars: 9
forks: 5
openIssues: 274
closedIssues: 124
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-30T03:15:59Z"
lastCommitAt: "2026-08-24T04:21:27Z"
lastReleaseAt: "2026-05-19T19:54:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 85
undervaluedScore: 53
maintainers: ["brucearctor", "Jah-yee"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1195760459/12ca3e35-d19f-4ff8-9520-d968b7526105"
discussionCount: 2
---

<h1>Candela</h1>
</div>
**Open-source, OTel-native LLM Observability & Engineering Platform.**

Candela is a production-grade observatory for your LLM applications. It captures every trace, calculates every cent, and evaluates every output with deep integration into **OpenTelemetry**, **Google Cloud (Vertex AI)**, and the wider GenAI ecosystem.

---

  <h3>📸 Dashboard Preview</h3>
  <p><em>Dark theme · Warm amber accent · Real-time LLM observability</em></p>
</div>

| Today | Traces |
|:---:|:---:|
|  |  |

| Trace Detail | Admin Budgets |
|:---:|:---:|
|  |  |

</div>

---

## 🚀 Two Ways to Get Observability

Candela offers a dual-mode ingestion strategy to fit any stage of your project:

### 1. Zero-Code Proxy Mode (Quick Start)
Drop Candela into your existing app by just changing your `base_url`. No instrumentation needed.
- **OpenAI**: `http://localhost:8181/proxy/openai/v1`
- **Google Gemini**: `http://localhost:8181/proxy/google/`
- **Gemini (OpenAI-compat)**: `http://localhost:8181/proxy/gemini-oai/v1`
- **Anthropic (via Vertex AI)**: `http://localhost:8181/proxy/anthropic/`
- **Anthropic Vertex (native)**: `http://localhost:8181/proxy/anthropic-vertex` _(Claude Code via…
