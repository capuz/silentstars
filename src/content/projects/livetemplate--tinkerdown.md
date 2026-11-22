---
repo: "livetemplate/tinkerdown"
name: "tinkerdown"
description: "Interactive documentation tool for building tutorials, guides, and playgrounds using markdown with embedded executable code blocks"
readmeQualityOk: true
url: "https://github.com/livetemplate/tinkerdown"
language: "Go"
languages: ["Go"]
languagePcts: [92]
stars: 31
forks: 1
openIssues: 93
closedIssues: 77
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2025-11-12T21:07:22Z"
lastCommitAt: "2026-11-22T11:54:13Z"
lastReleaseAt: "2026-11-18T23:05:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 76
undervaluedScore: 49
maintainers: ["adnaan"]
openGraphImageUrl: "https://opengraph.githubassets.com/b082b242940a0594e68000b652dfbd5903d277504ecb7fbd4b0dca3d30acaee2/livetemplate/tinkerdown"
---

# Tinkerdown

> **v0.4.x — early but tagged. Expect breaking changes between minors.**

**Internal UIs cheap enough to throw away. Describe what you need, get a live app against your real data, delete it when you're done.**

Tinkerdown turns a single markdown file — frontmatter for data sources, prose for content, declarative attributes for interactivity — into a live, themed, URL-routable web app. Built on [LiveTemplate](https://github.com/livetemplate/livetemplate).

## The problem

Internal tooling gets built like a product: one bloated "UI for everyone," a permanent feature backlog, and never enough engineering capacity. Every PM, engineer, and TPM wants their own variation, and the cost per variation is high enough that most are simply never built.

That cost assumption is what changed. An LLM can write a working UI in seconds — but only if the target is a *small, constrained* vocabulary rather than an open-ended framework, and only if it's pointed at data that's already wired up. Tinkerdown is that target: a markdown file, a fixed attribute set, and live data sources. Cheap enough that the answer to "could we get a view for this?" stops being a backlog item.
