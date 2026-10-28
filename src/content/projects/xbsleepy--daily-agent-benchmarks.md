---
repo: "XBsleepy/daily-agent-benchmarks"
name: "daily-agent-benchmarks"
description: "a website to show daily agent benchmarks appearing on arXiv"
originalDescription: "a website to show daily agent benchmarks appearing on arXiv"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/XBsleepy/daily-agent-benchmarks"
homepage: "https://xbsleepy.github.io/daily-agent-benchmarks/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-08-25T14:08:14Z"
lastCommitAt: "2026-10-28T09:57:20Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 49
maintainers: ["github-actions[bot]", "XBsleepy"]
openGraphImageUrl: "https://opengraph.githubassets.com/a16fc81cf2d780a8ad3e4ca3157865bfe16972d7b17cc2a180c71a7c46882add/XBsleepy/daily-agent-benchmarks"
---

# Daily Agent Benchmarks

**Live site: https://xbsleepy.github.io/daily-agent-benchmarks/** · [Archive](https://xbsleepy.github.io/daily-agent-benchmarks/archive.html) · [Atom feed](https://xbsleepy.github.io/daily-agent-benchmarks/feed.xml)

A daily, searchable list of new **AI / LLM agent benchmarks** on arXiv — web agents, GUI & computer-use agents, coding / SWE agents, tool use, multi-agent, embodied, and agent safety evaluations. Each paper gets a page with authors, abstract, field, citation count, and arXiv PDF / HTML links. Updated automatically every day via GitHub Actions.

Collects **Agent Benchmark** papers from [arXiv](https://arxiv.org) daily and organizes them into a static site that can be deployed to GitHub Pages.

The site displays entries in reverse submission-date order: name, authors, abstract, category, and PDF / HTML links. Each day has a bilingual Chinese–English briefing. Ranked search in the browser uses **BM25**.

## What This Repository Does

1. **Runs once a day** (GitHub Actions, or manually run locally) and calls the arXiv API.
2. **Keeps only Agent Benchmarks**: first recalls candidates with agent + benchmark-related queries, then filters them with…
