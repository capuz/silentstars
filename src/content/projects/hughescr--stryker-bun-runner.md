---
repo: "hughescr/stryker-bun-runner"
name: "stryker-bun-runner"
description: "Stryker test runner plugin for Bun with perTest coverage support"
readmeQualityOk: true
url: "https://github.com/hughescr/stryker-bun-runner"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-11T07:19:07Z"
lastCommitAt: "2026-10-10T09:40:05Z"
status: "thriving"
tags: []
healthScore: 83
undervaluedScore: 59
maintainers: ["claude", "hughescr", "j4y-v"]
openGraphImageUrl: "https://opengraph.githubassets.com/de58816773c1deaafcd081fe8b6305382642d82e4ba6ff643e2333fe81150e51/hughescr/stryker-bun-runner"
---

# stryker-bun-runner

Stryker test runner plugin for Bun with perTest coverage support.

## Features

- **Per-test coverage analysis** - Accurately tracks which tests cover which mutants
- **Inspector Protocol integration** - Uses Bun's WebSocket Inspector API for reliable test discovery and tracking
- **Multi-file support** - Works correctly with multiple test files
- **Incremental mode compatible** - Runs only the tests affected by each mutant
- **Infinite-loop protection** - Supports Stryker's hit limit, so a mutant that loops forever is stopped early and scored Timeout without waiting for the timeout (see [Infinite loops: the hit limit](#infinite-loops-the-hit-limit))

## Requirements

### Bun Version

This plugin requires **Bun 1.3.7 or later** for full functionality. Bun 1.3.7 includes the TestReporter WebSocket events (from [PR #25986](https://github.com/oven-sh/bun/pull/25986)) that enable proper test-to-mutant correlation.

**Important:** Bun versions prior to 1.3.7 will NOT work with this plugin due to missing TestReporter events.

At startup the runner executes `bun --version` and fails with a clear message if Bun can't be run or is older than 1.3.7, telling you to…
