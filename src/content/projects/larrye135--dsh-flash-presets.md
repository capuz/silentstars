---
repo: "LarryE135/dsh-flash-presets"
name: "dsh-flash-presets"
description: "Reducing Token consumption of Deepseek v4.1flash / Raising Token efficiency without lossing performance (Works for v4.1flash)"
originalDescription: "降低Deepseek v4.1flash的Token消耗/Raising Token efficiency without lossing performance(Works for v4.1flash)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/LarryE135/dsh-flash-presets"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [94]
topics: ["dsh-plugin", "token-efficiency", "dsh"]
stars: 140
forks: 9
openIssues: 2
closedIssues: 4
watchers: 0
contributors: 3
recentReleases: 8
createdAt: "2026-09-22T16:27:57Z"
lastCommitAt: "2026-11-06T12:17:16Z"
lastReleaseAt: "2026-11-06T11:39:00Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 93
undervaluedScore: 32
maintainers: ["LarryE135", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c373a758ae3f43eb8d4c7cdc34765df51e014204d3a5faac248d9ca9d75c16e/LarryE135/dsh-flash-presets"
---

# dsh-flash-presets

Agent presets for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (DSH), tuned for DeepSeek V4.1 Flash.

It does something simple: it compresses context earlier, keeps only the head and tail of overly long tool outputs, leaves unused tools out of the system prompt, and merges scattered tool calls into a single `run_code` where possible. The model does not become smarter as a result. What changes is how much a session reads, how many detours it takes, and when it wraps up.

The whole package ships as a DSH bundle (`dsh.bundle`): it inserts preset lines into the profile without changing host code or touching the shared tool registry.

> Current version: v0.2.6 (2026-11-06) · Presets v3 lite / v3 balance · Plan mode plan-mode v1 (1.0.0) · Requires DSH ≥ 0.2.1-rc; tested with 0.2.1-rc.5 and 0.2.2-rc.1
>
> The latest version on npm is still 0.2.5, which cannot create new sessions on DSH 0.2.2-rc.1. Until 0.2.6 is published to npm, install from GitHub or the Release attachments (see [Installation](#安装)).

## Who it's for and who it isn't

**Good fit**

- Tasks with clear goals and acceptance criteria: changing code, running scripts, organizing…
