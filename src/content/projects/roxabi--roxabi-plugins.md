---
repo: "Roxabi/roxabi-plugins"
name: "roxabi-plugins"
description: "Open-source Claude Code plugins by Roxabi — context engineering tools for teams using Claude Code."
readmeQualityOk: true
url: "https://github.com/Roxabi/roxabi-plugins"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [68]
topics: ["agents", "agpl", "claude-code", "open-source", "roxabi", "self-hostable", "skills", "typescript"]
stars: 10
forks: 1
openIssues: 25
closedIssues: 405
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-02-28T07:56:51Z"
lastCommitAt: "2026-11-07T22:50:44Z"
lastReleaseAt: "2026-07-20T20:38:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 58
maintainers: ["MickaelV0"]
openGraphImageUrl: "https://opengraph.githubassets.com/dbe710dc614013aab081ade1b0a7993fb358501d6607ee62707936dcd00dff6c/Roxabi/roxabi-plugins"
fundingLinks: ["KO_FI:https://ko-fi.com/0xrabi"]
---

# Roxabi Plugins

Open-source plugins maintained by Roxabi for Claude Code and Oh My Pi (OMP).

## Install

```bash
# Claude Code: issue-triage
claude plugin marketplace add Roxabi/roxabi-plugins
claude plugin install issue-triage

# OMP: issue-triage or omp-build
omp plugin marketplace add Roxabi/roxabi-plugins
omp plugin install issue-triage@roxabi-marketplace
omp plugin install omp-build@roxabi-marketplace
```

Restart OMP after installing or upgrading a plugin; do not use `/reload-plugins`.

## Retained plugins

| Plugin | Host | Description |
|--------|------|-------------|
| [issue-triage](https://github.com/Roxabi/roxabi-plugins/blob/HEAD/plugins/issue-triage/README.md) | Claude Code, OMP | Autonomous GitHub triage CLI plus an importable complete-observation writer, guarded native close/reopen effects and κ tier calculator; labels and native relations, no Projects V2. |
| [omp-build](https://github.com/Roxabi/roxabi-plugins/blob/HEAD/plugins/omp-build/README.md) | OMP | Criterion-id delivery with evidence-backed verdicts, versioned inherited constraints, explicit child coverage and bottom-up calculated completion; live canonical Spec currentness, fresh whole-observation…
