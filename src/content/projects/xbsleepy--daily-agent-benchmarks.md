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
lastCommitAt: "2026-10-22T08:51:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 49
maintainers: ["github-actions[bot]", "XBsleepy", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/d489d52a627832a64a77fe4b719d1e9376f2eba5109289cfa86633989b96c20c/XBsleepy/daily-agent-benchmarks"
---

# Daily Agent Benchmarks

**Live site: https://xbsleepy.github.io/daily-agent-benchmarks/** · [Archive](https://xbsleepy.github.io/daily-agent-benchmarks/archive.html) · [Atom feed](https://xbsleepy.github.io/daily-agent-benchmarks/feed.xml)

A daily, searchable list of new **AI / LLM agent benchmarks** on arXiv — web agents, GUI & computer-use agents, coding / SWE agents, tool use, multi-agent, embodied, and agent safety evaluations. Each paper gets a page with authors, abstract, field, citation count, and arXiv PDF / HTML links. Updated automatically every day via GitHub Actions.

Collects **Agent Benchmark** papers from [arXiv](https://arxiv.org) daily and organizes them into a static site that can be deployed to GitHub Pages.

The site lists entries in reverse order of submission date: name, authors, abstract, category, and PDF / HTML links. Each day has a bilingual Chinese–English digest; ranked search runs in the browser using **BM25**.

## What this repository does

1. **Runs once a day** (via GitHub Actions; can also be run manually locally) and calls the arXiv API.
2. **Keeps only Agent Benchmark papers:** first retrieves candidates with agent + benchmark–related queries,…
