---
repo: "atelier-fashion/adlc-toolkit"
name: "adlc-toolkit"
description: "Shared SDLC skills and templates for Claude Code"
readmeQualityOk: true
url: "https://github.com/atelier-fashion/adlc-toolkit"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [62, 27]
stars: 173
forks: 43
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2026-03-18T13:40:16Z"
lastCommitAt: "2026-10-29T21:26:08Z"
lastReleaseAt: "2026-06-08T19:59:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 34
maintainers: ["brettluelling"]
openGraphImageUrl: "https://opengraph.githubassets.com/f54833156b8d427a9a92cb5ee48fc4c0c180d561916e0b098751b7e4d1d4cf5b/atelier-fashion/adlc-toolkit"
---

# ADLC Toolkit

Skills, agents, and templates for spec-driven development with [Claude Code](https://claude.com/claude-code). Stack-agnostic at the core, with optional preset configs for common stacks (iOS+Firebase+Cloud Run, etc.).

## Install

Two commands, run in your own terminal:

```bash
claude plugin marketplace add atelier-fashion/adlc-toolkit
claude plugin install adlc@adlc-toolkit
```

This repo is both the marketplace (`adlc-toolkit`) and the plugin (`adlc`). Start a new Claude Code session after installing. On this route every skill is namespaced: type `/adlc:<skill>`, for example `/adlc:init`, `/adlc:spec` or `/adlc:proceed`. The toolkit's agents are registered as `adlc:<name>`. The skill table below uses the bare names; add the `adlc:` prefix on the plugin route.

The plugin's version is pinned to this repo's `VERSION`, so it changes only when a release is cut, not on every merge; you get a new release when you update (see [Updating](#updating)). Contributors and the maintainer use a symlink live install instead, described under [Contributing and live install](#contributing-and-live-install). Use one route per machine, not both (see [Known…
