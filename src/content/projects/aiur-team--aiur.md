---
repo: "aiur-team/aiur"
name: "aiur"
description: "AI Unit Runtime for Executors."
readmeQualityOk: true
url: "https://github.com/aiur-team/aiur"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [82]
stars: 5
forks: 3
openIssues: 564
closedIssues: 2736
watchers: 0
contributors: 9
recentReleases: 6
createdAt: "2026-05-18T00:26:04Z"
lastCommitAt: "2026-10-27T12:13:38Z"
lastReleaseAt: "2026-10-25T11:50:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 71
maintainers: ["its-applekid"]
openGraphImageUrl: "https://opengraph.githubassets.com/2851f604c643cccfe1dfe0bb20ffaffd7015f73af766616da0631d20e44c20c1/aiur-team/aiur"
---

# AIUR

Oversee a fleet of coding agents that coordinate via events.

## Install

```bash
npm install --global aiur-cli
```

## Usage

```bash
cd your-repo
aiur init     # interactive setup wizard
aiur
```

`aiur init` scaffolds `.aiur/config` and provisions the repo: tracker and
repository, agent backends and routing, concurrency and turn limits, the GitHub
token, and the `agent:*` lifecycle labels. Re-running resumes from your saved
answers. When setup finishes, label the issues you want worked `agent:todo` and
run `aiur`.

To have a coding agent operate the run as its Executor, install the repository's
[`aiur-intro`, `aiur-run`, and `aiur-monitor` skills](https://aiur.team/docs/skills#executor-skills)
through the agent's supported skill mechanism, then ask it to "run aiur." The npm
package installs the CLI, not those skills. [Learn about the Executor role](https://aiur.team/docs/concepts/executor).

## Features

- **Issue Monitoring** — Dispatch agents automatically via GitHub or Linear tickets.
- **Shared Bus** — Agents auto-pub/sub to dependency events, unblocking work early.
- **Optimize Effort** — Story points guide model sizes and skills across Claude and Codex.
- **Take…
