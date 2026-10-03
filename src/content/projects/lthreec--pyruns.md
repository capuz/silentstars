---
repo: "LthreeC/pyruns"
name: "pyruns"
description: "A lightweight Python CLI for batch experiments: auto-generate tasks from configs, run in parallel, and track results with real-time monitoring."
originalDescription: "A lightweight Python CLI for batch experiments:  auto-generate tasks from configs, run in parallel,  and track results with real-time monitoring."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/LthreeC/pyruns"
homepage: "https://lthreec.github.io/pyruns/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [75, 24]
topics: ["argparse", "experiment-manager", "experiment-tracking", "grid-search", "hyperparameter-tuning", "machine-learning", "python", "task-manager", "web-ui"]
stars: 24
forks: 1
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2026-02-13T08:43:44Z"
lastCommitAt: "2026-10-03T09:22:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 43
maintainers: ["LthreeC"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1156949280/14ef54be-0aeb-4f0c-90b7-7c3f1e20a35c"
discussionCount: 0
---

# pyruns

[English](https://github.com/LthreeC/pyruns/blob/HEAD/README-en.md) | Simplified Chinese

Pyruns is a disk-first run manager oriented toward reproducing experiments and terminal tasks. It stores commands, configurations, logs, environment, run history, and metrics in the project's `_pyruns_` directory and provides a Git-style one-time CLI and optional Web UI.

## Start in 30 Seconds

```bash
pip install pyruns

# Below uses the short entry pyr; pyruns is completely equivalent
pyr --help

# Run and log a command; shell workspace will be created automatically
pyr exec -n smoke -- python -V

# Query results
pyr ls
pyr show smoke
pyr log smoke

# Re-run the same saved task and preserve new numbered run history
pyr run smoke
```

Here, a task is a reusable saved object; each `run` adds a new numbered run without overwriting old logs.

When you don't need to reference a task by name immediately, you can omit the naming parameter entirely; Pyruns will automatically generate `task_YYYY-MM-DD_HH-MM-SS`. Use `-nt` when you want to preserve the semantic prefix and automatically append a timestamp:

```bash
pyr exec -- python -V
pyr exec -nt smoke -- python -V       #…
