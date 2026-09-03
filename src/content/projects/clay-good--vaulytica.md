---
repo: "clay-good/vaulytica"
name: "vaulytica"
description: "Always free deterministic linter for legal documents."
readmeQualityOk: true
url: "https://github.com/clay-good/vaulytica"
homepage: "https://vaulytica.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["audit-trail", "browser-based", "compliance-as-code", "contract-analysis", "contract-management", "deterministic", "document-automation", "docx-parser", "legal-compliance", "legal-documents"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-10-14T00:38:21Z"
lastCommitAt: "2026-09-03T08:12:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 58
maintainers: ["clay-good"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ad7599b0768ba353b3fbc97919d7daa1645d3c9a04e47ad80731f287917c9c5/clay-good/vaulytica"
---

# Vaulytica

> The free, deterministic, runs-entirely-in-your-browser contract checker. A linter for legal documents. No login, no API key, no telemetry, no server. Drop in a contract, get back a Word document you can cite. That is the entire product.

**Vaulytica is the second pair of eyes you can cite.**

`1,825 deterministic rules` · `20 cross-document checks` · `5 pre-disclosure checks` · `3 execution-readiness reconciliations` · `5 derived-deadline families` · `16 document sub-domains` · `88 state-law overlays (non-compete · security deposit · usury · will formalities)` · `10 export formats` · `0 servers` · `0 AI` · `13,688+ passing tests` · `v9.406.0` · `MIT`

---

## The one idea

Every other contract tool leans on a language model. The output is fluent, confident, and **different every time you run it** — a senior partner cannot sign off on it, an auditor cannot trace it, a client cannot reproduce it.

Vaulytica is the opposite. It is a **pure function**:

```
report = engine(documents, DKB, playbook)
```

Same document + same engine version + same Deterministic Knowledge Base version → **byte-identical report on any machine, at any time.** The report carries a…
