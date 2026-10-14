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
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-08-25T14:08:14Z"
lastCommitAt: "2026-10-14T08:58:04Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 58
maintainers: ["github-actions[bot]", "XBsleepy", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9bae3f84e1343b176ad93e252dff47e5b7c6005f370f199387212bca19b0dca/XBsleepy/daily-agent-benchmarks"
---

# Daily Agent Benchmarks

**Live site: https://xbsleepy.github.io/daily-agent-benchmarks/** · [Archive](https://xbsleepy.github.io/daily-agent-benchmarks/archive.html) · [Atom feed](https://xbsleepy.github.io/daily-agent-benchmarks/feed.xml)

A daily, searchable list of new **AI / LLM agent benchmarks** on arXiv — web agents, GUI & computer-use agents, coding / SWE agents, tool use, multi-agent, embodied, and agent safety evaluations. Each paper gets a page with authors, abstract, field, citation count, and arXiv PDF / HTML links. Updated automatically every day via GitHub Actions.

Collects Agent Benchmark papers from [arXiv](https://arxiv.org) daily and organizes them into a static site that can be deployed to GitHub Pages.

The site displays entries in reverse chronological order of submission date: name, authors, abstract, categories, and PDF / HTML links. Each day has a bilingual Chinese-English briefing. In-browser ranked search uses **BM25**.

## What this repository does

1. **Runs once a day** (GitHub Actions, or manually run locally) and calls the arXiv API.
2. **Keeps only Agent Benchmarks**: first recalls papers with agent + benchmark related queries, then filters them…
