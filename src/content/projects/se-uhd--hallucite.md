---
repo: "se-uhd/hallucite"
name: "hallucite"
description: "Find fabricated (\"hallucinated\") references in academic paper PDF files."
readmeQualityOk: true
url: "https://github.com/se-uhd/hallucite"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 16
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-05-28T06:59:50Z"
lastCommitAt: "2026-10-29T21:22:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 33
maintainers: ["sbaltes"]
openGraphImageUrl: "https://opengraph.githubassets.com/cffa15d361cbe51d6e3e2eed0826669b367e44770c17721e556a97e825f3c5f9/se-uhd/hallucite"
---

# hallucite

Finds fabricated ("hallucinated") references in academic paper PDF files. Each reference is checked
against academic databases (the offline DBLP mirror, then CrossRef, DOI resolution, arXiv,
OpenAlex and Semantic Scholar); references that no database can confirm are escalated to an interactive
LLM triage step, which writes a report for human review.

Three stages: extract and verify use no LLM (verification queries the online databases unless
`--offline` restricts it to the offline DBLP mirror); triage is the only step that uses an LLM,
which can be a cloud or a local model. See [PLAN.md](https://github.com/se-uhd/hallucite/blob/HEAD/PLAN.md) for the design and architecture.

One repo serves as the runnable project (the mise tasks below) and one shared plugin tree for
Claude Code and Codex CLI. The Claude metadata is under `.claude-plugin/`; the Codex metadata
lives under `.codex-plugin/` and `.agents/plugins/marketplace.json`. The bundled skill in
`skills/hallucite/` drives the same scripts for both tools.

## Setup (once)

Run from this directory.

| Dependency | Needed for | Install |
|---|---|---|
| [mise](https://mise.jdx.dev) | provisions Python and uv | see…
