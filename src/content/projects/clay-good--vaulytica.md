---
repo: "clay-good/vaulytica"
name: "vaulytica"
description: "Always free deterministic linter for legal documents."
readmeQualityOk: true
url: "https://github.com/clay-good/vaulytica"
homepage: "https://vaulytica.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["audit-trail", "browser-based", "compliance-as-code", "contract-analysis", "contract-management", "deterministic", "document-automation", "docx-parser", "legal-compliance", "legal-documents"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-10-14T00:38:21Z"
lastCommitAt: "2026-07-18T05:49:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 56
maintainers: ["clay-good"]
openGraphImageUrl: "https://opengraph.githubassets.com/e57437a5a7c1c57ff4cd274cd8b2d7eac4999dac0e1a95cdb50c43afa10d6b90/clay-good/vaulytica"
---

# Vaulytica

> The free, deterministic, runs-entirely-in-your-browser contract checker. A linter for legal documents. No login, no API key, no telemetry, no server. Drop in a contract, get back a Word document you can cite. That is the entire product.

**Vaulytica is the second pair of eyes you can cite.**

`1,065 deterministic rules` · `20 cross-document checks` · `5 pre-disclosure checks` · `3 execution-readiness reconciliations` · `5 derived-deadline families` · `16 document sub-domains` · `88 state-law overlays (non-compete · security deposit · usury · will formalities)` · `10 export formats` · `0 servers` · `0 AI` · `4,260 passing tests` · `v9.41.0` · `MIT`

---

## The one idea

Every other contract tool leans on a language model. The output is fluent, confident, and **different every time you run it** — a senior partner cannot sign off on it, an auditor cannot trace it, a client cannot reproduce it.

Vaulytica is the opposite. It is a **pure function**:

```
report = engine(documents, DKB, playbook)
```

Same document + same engine version + same Deterministic Knowledge Base version → **byte-identical report on any machine, at any time.** The report carries a `result_hash`…
