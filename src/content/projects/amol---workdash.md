---
repo: "amol-/workdash"
name: "workdash"
description: "Central dashboard to coordinate development work"
readmeQualityOk: true
url: "https://github.com/amol-/workdash"
language: "Python"
languages: ["Python"]
languagePcts: [89]
stars: 13
forks: 1
openIssues: 39
closedIssues: 58
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-05T15:48:36Z"
lastCommitAt: "2026-11-17T14:43:51Z"
lastReleaseAt: "2026-08-17T15:08:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 87
undervaluedScore: 42
maintainers: ["amol-"]
openGraphImageUrl: "https://opengraph.githubassets.com/f4c15b359f05ac1c59b94dc2aff6ef2ed92f8e3ae99805d3049e6ea899b33e70/amol-/workdash"
---

# workdash

Text-based GitHub work triage dashboard ( <https://alessandro.molina.fyi/workdash/> )

`workdash` pulls together the issues and pull requests that matter to you across
your GitHub repositories, suggests what to pick up next, and makes it easy to
jump into a work item — either for a quick review, a deeper AI-assisted
analysis, or a full coding session in a dedicated worktree.

## Platform

Linux and macOS. `workdash` uses a configured viewer and expects `zellij`
for the interactive dashboard and terminal-backed work actions. It has not
been tested on Windows.

## Requirements

- Python `>=3.12`.
- Authenticated [`gh`](https://cli.github.com/) for GitHub access.
  `workdash --configure` installs a local copy when `gh` is not available.
- An executable viewer command for opening links and rendered analyses (for example
  `xdg-open`, `open`, a terminal viewer, or a clipboard wrapper).
- `zellij` for the interactive dashboard, terminal panes, and agent sessions.
  `workdash --configure` installs a local copy when `zellij` is not available.
- Global `gh` and `zellij` binaries are preferred; configured local copies are
  used as fallbacks.
- At least one agent command-line…
