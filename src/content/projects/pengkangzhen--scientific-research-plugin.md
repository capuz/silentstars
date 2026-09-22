---
repo: "pengkangzhen/scientific-research-plugin"
name: "scientific-research-plugin"
description: "Claude Code Skill for academic review of Operations Research papers"
readmeQualityOk: true
url: "https://github.com/pengkangzhen/scientific-research-plugin"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-08T12:47:22Z"
lastCommitAt: "2026-09-22T05:34:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 26
maintainers: ["pengkangzhen"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6e2c9937537f36c4adfd317c550f71e9a655cad097e9b9e477c810d089fade3/pengkangzhen/scientific-research-plugin"
---

# Scientific Research Plugin

**English** | [简体中文](https://github.com/pengkangzhen/scientific-research-plugin/blob/HEAD/README.zh-CN.md)

Every task is a piece of research — not just papers. A discipline layer (`research-before-build`) brings prior-art surveying to any project; the paper pipeline — literature acquisition → structured reading → paper figures → writing polish → pre-submission review → rebuttal → conference presentation — is its fullest instantiation. Built for OR / ML+OR / supply-chain researchers.

One `skills/` source of truth, distributed to multiple frontends: the Claude Code / ZCode plugin, the Codex plugin, and any assistant that supports `~/.agents/skills` (via halter).

## Research Pipeline

| Stage | Skill / Agent | Form | In one sentence |
|---|---|---|---|
| ⓪ Survey | `research-before-build` | skill | Discipline layer, fires on **any** non-trivial task: L0–L3 graded trigger — check human prior art (official docs / mature libraries / GitHub issues / literature) before building; decides *whether and what* to research |
| ① Retrieve | `zotero-paper-fetch` | skill | Reference list → CrossRef enrichment → Zotero intake → tiered PDF download (OA direct links /…
