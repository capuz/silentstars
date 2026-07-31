---
repo: "kishormorol/ResearchScope"
name: "ResearchScope"
description: "Open-source research intelligence for CS papers — track what matters, who drives it, what to read first, and where the research gaps are."
readmeQualityOk: true
url: "https://github.com/kishormorol/ResearchScope"
homepage: "https://kishormorol.github.io/ResearchScope/"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [44, 26]
topics: ["academic-search", "citation-analysis", "javascript", "nlp", "open-source", "paper-tracking", "python", "research-intelligence", "research-tools", "research-gaps"]
stars: 89
forks: 6
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-04-13T00:17:33Z"
lastCommitAt: "2026-07-31T06:28:51Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 36
maintainers: ["github-actions[bot]", "WhiteHades", "shadril238"]
openGraphImageUrl: "https://opengraph.githubassets.com/f12a864b0973be53d4f91f4f987d86c285306672893d9329e2d722eb11b2be15/kishormorol/ResearchScope"
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

## Install the CLI

The `researchscope` package ships a lightweight command-line tool for searching, saving, and analysing papers…
