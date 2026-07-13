---
repo: "kishormorol/ResearchScope"
name: "ResearchScope"
description: "Open-source research intelligence for CS papers — track what matters, who drives it, what to read first, and where the research gaps are."
readmeQualityOk: true
url: "https://github.com/kishormorol/ResearchScope"
homepage: "https://kishormorol.github.io/ResearchScope/"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [49, 33]
topics: ["academic-search", "citation-analysis", "javascript", "nlp", "open-source", "paper-tracking", "python", "research-intelligence", "research-tools", "research-gaps"]
stars: 86
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-13T00:17:33Z"
lastCommitAt: "2026-07-13T06:36:43Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 31
maintainers: ["github-actions[bot]", "kishormorol"]
openGraphImageUrl: "https://opengraph.githubassets.com/203a8e414908f15ba0d25ab9ead4e7e5c18ba352230406be5122bcc5454fa058/kishormorol/ResearchScope"
---

# ResearchScope

**CS Research Intelligence Platform — 100,000+ papers, scored, ranked, and searchable.**

Stop skimming paper lists. ResearchScope scores papers by impact, surfaces research gaps, recommends venues, and tracks who's driving the frontier — updated daily.

<br/>

</div>

---

## What is ResearchScope?

ResearchScope is an **open research intelligence platform** for computer science and AI. A daily GitHub Actions pipeline fetches papers from **6 data sources** (arXiv, OpenAlex, ACL Anthology, OpenReview, PMLR, CVF, Semantic Scholar), enriches them with multi-signal scores, detects research gaps, and syncs to two backends:

- **Railway PostgreSQL** — full dataset, powers the REST API with full-text search and live browser queries
- **Hugging Face Hub** — public JSONL dataset for LLM training

The frontend is a static site on GitHub Pages backed by a **FastAPI REST API** on Railway.

👉 **[Open ResearchScope](https://kishormorol.github.io/ResearchScope/)** · 📖 **[API Docs](https://researchscope-production.up.railway.app/docs)**

---

## What's New

| Date | Highlight |
|---|---|
| **Jun 2026** | **OpenReview Acceptance Tiers** — oral/spotlight/poster signals captured…
