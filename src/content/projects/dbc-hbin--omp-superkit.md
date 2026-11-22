---
repo: "dbc-hbin/omp-superkit"
name: "omp-superkit"
description: "Model-specific prompts, code mode, and native ULW workflows for Oh My Pi (OMP)."
readmeQualityOk: true
url: "https://github.com/dbc-hbin/omp-superkit"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [72]
stars: 23
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-09T10:12:00Z"
lastCommitAt: "2026-11-22T11:51:35Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 35
maintainers: ["dbc-hbin"]
openGraphImageUrl: "https://opengraph.githubassets.com/b643c3f8bddcbdb6d1e2b105c4294dddf1cfd5fb8dbd2c95608121944cdbb321/dbc-hbin/omp-superkit"
---

# omp-superkit

English | [한국어](https://github.com/dbc-hbin/omp-superkit/blob/HEAD/README.ko.md) | [简体中文](https://github.com/dbc-hbin/omp-superkit/blob/HEAD/README.zh-CN.md)

Model-specific prompts, code mode and native ULW workflows for [Oh My Pi (OMP)](https://github.com/can1357/oh-my-pi). OMP retains control of tools, permissions and execution; this extension adapts working methods and adds planning, research and specialist skills.

## Getting started

With Git, Bun and OMP installed:

```bash
git clone --recurse-submodules https://github.com/dbc-hbin/omp-superkit.git
bun ./omp-superkit/upstream/materialize-frontend-refs.mjs
omp -e ./omp-superkit
```

In the interactive TUI, enter `/ulw <task>` or `ulw <task>` to activate ULW and a native goal. Existing goals, including paused or budget-limited ones, are preserved. RPC clients must create native goals separately.

Commands must start the input; mentions such as `Explain /ulw` do not activate them. Plain ULW does not automatically enable specialized workflows. Restart OMP after changing the installed extension.
