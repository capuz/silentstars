---
repo: "TianZuo555/pi-extensions"
name: "pi-extensions"
description: "pi coding agent extensions: per-repo model, per-repo skill toggles, image cache"
readmeQualityOk: true
url: "https://github.com/TianZuo555/pi-extensions"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 10
forks: 5
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-07-21T08:07:46Z"
lastCommitAt: "2026-09-14T09:13:02Z"
lastReleaseAt: "2026-09-02T08:29:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 65
maintainers: ["TianZuo555", "github-actions[bot]", "Alx8g"]
openGraphImageUrl: "https://opengraph.githubassets.com/8900ba372cd0866e3b959b4fc01ee303348cceb5b7d2b8d58522c705fc5dac46/TianZuo555/pi-extensions"
---

# pi-tian-extensions

A collection of independent extensions for the [pi coding agent](https://pi.dev),
published as npm packages from a pnpm workspace monorepo.

Each extension has its own package and its own README under
[`packages/`](https://github.com/TianZuo555/pi-extensions/blob/HEAD/packages/) — this file is only an index.

## Extensions

| Package | Commands / Tools | What it does |
|---|---|---|
| [pi-repo-model](https://github.com/TianZuo555/pi-extensions/blob/HEAD/packages/pi-repo-model/README.md) | `/repo-model`, `/repo-model-unset`, `/repo-model-list` | Per-repo default model + thinking level, auto-applied at session start. |
| [pi-repo-skills](https://github.com/TianZuo555/pi-extensions/blob/HEAD/packages/pi-repo-skills/README.md) | `/skills`, `/skills-list`, `/skills-reset` | Per-repo skill toggles via checkbox TUI; disabled skills leave the prompt. |
| [pi-commit](https://github.com/TianZuo555/pi-extensions/blob/HEAD/packages/pi-commit/README.md) | `/commit`, `/commit-all` | Git commits written by a separately configured model. |
| [pi-token-speed](https://github.com/TianZuo555/pi-extensions/blob/HEAD/packages/pi-token-speed/README.md) | `/tps` | Live tok/s meter…
