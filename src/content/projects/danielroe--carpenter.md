---
repo: "danielroe/carpenter"
name: "carpenter"
description: "LLM-powered automations for triaging Nuxt issues"
readmeQualityOk: true
url: "https://github.com/danielroe/carpenter"
homepage: "https://github.com/nuxt/nuxt"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["bot", "llm", "webhook"]
stars: 76
forks: 0
openIssues: 5
closedIssues: 6
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-04-23T14:38:24Z"
lastCommitAt: "2026-11-02T13:38:24Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 88
undervaluedScore: 47
maintainers: ["renovate[bot]", "danielroe"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3ebe61fcde502d9a9e3397d1193a2f8cc515e40cc7966294d031550dedf2f75/danielroe/carpenter"
fundingLinks: ["GITHUB:https://github.com/danielroe"]
---

# 🔨 Carpenter

> An LLM-powered GitHub bot for issue triage automation in the Nuxt ecosystem

Carpenter is an automated assistant that helps with issue triage in the [Nuxt GitHub repository](https://github.com/nuxt/nuxt). It uses AI to analyse issues, categorise them, detect missing reproductions, handle reopened issues, and translate non-English content.

## What it does

On `issues.opened`:

- Categorises the issue (bug / enhancement / documentation / spam) and sets the GitHub issue type
- Labels bugs without a reproduction as `needs reproduction`, vague reports as `needs details`, and reports with a minimal StackBlitz/CodeSandbox reproduction as `✨ good reproduction`
- Labels possible regressions and Nitro server engine issues
- Labels bugs with the major version they are reported against (`3.x`, `4.x`, `5.x`), based on the Nuxt version in the environment section
- Labels the affected area (`pages`, `components`, `layers`, `kit`, `types`, ...), non-default bundler (`bundler:webpack`, `bundler:rspack`) and platform (`platform:windows`, `platform:bun`) when the issue is specific to them
- Adds `pending triage` when nothing else applies
- Transfers spam issues to a separate…
