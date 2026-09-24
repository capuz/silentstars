---
repo: "tadoku/tadoku"
name: "tadoku"
description: "Tadoku is a friendly foreign-language reading contest aimed at building a habit of reading in your non-native languages."
readmeQualityOk: true
url: "https://github.com/tadoku/tadoku"
homepage: "https://tadoku.app"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [53, 35]
topics: ["language-learning", "contest-platform"]
stars: 28
forks: 6
openIssues: 57
closedIssues: 186
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2019-01-08T11:18:02Z"
lastCommitAt: "2026-09-24T08:42:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 62
maintainers: ["antonve", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9ad51289f5ba02782041cd5bad56672deb2c7f9a78f11c19f3cdf6aa6708e55/tadoku/tadoku"
---

# Tadoku Monorepo

Tadoku had a significant rewrite and the documentation hasn't been updated yet to reflect these changes.
The documentation for this repository can be found at https://tadoku.github.io/tadoku/.

## Dev Environment

New here? Start with the [agent verification guide](https://github.com/tadoku/tadoku/blob/HEAD/.agents/skills/verify-tadoku/SKILL.md)
and [feature map](https://github.com/tadoku/tadoku/blob/HEAD/.agents/skills/verify-tadoku/references/features/README.md).
They explain how to find a user journey, select your branch, prove a change in
the browser, and clean up. Agents can use `$verify-tadoku` when repository skill
discovery is supported, or read the linked guide directly; no global skill is required.

Use **DevCLI v0.4.0+** for webv2, auth, admin and native Tadoku API development on
[https://tadoku.dev.lab](https://tadoku.dev.lab). See
[the development runbook](https://github.com/tadoku/tadoku/blob/HEAD/.dev/README.md) for installation, shared-stack
prerequisites, branch databases, routing and cleanup.

```sh
dev doctor
make dev-seed  # shared synthetic users and base fixtures
DEV_OWNER=anton make dev-up
# In another terminal, same checkout:
dev url…
