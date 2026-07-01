---
repo: "complytime/complyctl"
name: "complyctl"
description: "A command-line tool for streamlining end-to-end compliance workflows on local systems."
url: "https://github.com/complytime/complyctl"
language: "Go"
languages: ["Go"]
languagePcts: [91]
stars: 34
forks: 19
openIssues: 23
closedIssues: 69
watchers: 5
contributors: 17
recentReleases: 0
createdAt: "2024-11-08T13:14:24Z"
lastCommitAt: "2026-07-01T07:05:53Z"
lastReleaseAt: "2025-01-13T17:38:32Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 60
maintainers: ["dependabot[bot]", "hbraswelrh", "jpower432"]
openGraphImageUrl: "https://opengraph.githubassets.com/60388182d9e911f47daee4e9be03251a200db834b25c10f90bc531f01a4b4ed3/complytime/complyctl"
discussionCount: 0
---

# complyctl

A lightweight compliance runtime that pulls [Gemara](https://gemara.openssf.org/) policies from an OCI registry and executes scans via providers.

## Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│  Host                                                            │
│                                                                  │
│  ┌──────────────┐      complyctl get   ┌───────────────────────┐ │
│  │ OCI Registry │ ◄──────────────────  │                       │ │
│  │              │  ───────────────────►│    complyctl CLI      │ │
│  │  Gemara      │   catalog + policy   │                       │ │
│  │  policies    │   layers (YAML)      │ init / get / list     │ │
│  └──────────────┘                      │ generate / scan       │ │
│                                        │ doctor / providers    │ │
│                                        │ version               │ │
│                                        └─────┬────────┬────────┘ │
│                                              │        │          │
│                                 ┌────────────┘        │          │
│                                 │…
