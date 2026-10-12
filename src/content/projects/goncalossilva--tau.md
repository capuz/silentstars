---
repo: "goncalossilva/tau"
name: "tau"
description: "Batteries-included distribution for Pi"
readmeQualityOk: true
url: "https://github.com/goncalossilva/tau"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
stars: 11
forks: 1
openIssues: 4
closedIssues: 11
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-29T14:09:05Z"
lastCommitAt: "2026-10-12T11:14:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 47
maintainers: ["goncalossilva"]
openGraphImageUrl: "https://opengraph.githubassets.com/95276aa3417e52707b9f0f333b4b997c4dddd87a905bd98dabe461e62ffd9577/goncalossilva/tau"
---

# Tau

Tau is a batteries-included distribution for [Pi](https://pi.dev), a brilliant coding agent by @badlogic that's barebones yet highly (and elegantly) extensible by design.

It takes Pi's minimal core and turns it into an opinionated, complete, polished experience, adding `websearch` and `subagent` tools to complement the default built-in tools, plus several useful skills and tasteful extensions, split into purpose-driven packages:

| Package            | Purpose         |
| ------------------ | --------------- |
| `tau-coding-agent` | Coding package. |
| `tau-all-agent`    | Full package.   |

## Install

[Install Pi](https://pi.dev/docs/latest#quick-start), and then:

```bash
pi install npm:tau-coding-agent
# or
pi install npm:tau-all-agent
```

Project-local install allows you to pin Tau for everyone working on the project:

```bash
pi install -l npm:tau-coding-agent
```

## Agent configuration

The published packages do not include agent configuration; those files are highly personal.

Check out [goncalossilva/.agents](https://github.com/goncalossilva/.agents) for my `AGENTS.md`, `settings.json`, `sandbox.json`, etc.

## Extensions

| Extension…
