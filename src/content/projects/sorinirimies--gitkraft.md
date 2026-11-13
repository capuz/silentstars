---
repo: "sorinirimies/gitkraft"
name: "gitkraft"
description: "A GUI and TUI git IDE written fully in Rust."
readmeQualityOk: true
url: "https://github.com/sorinirimies/gitkraft"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-03-30T17:34:59Z"
lastCommitAt: "2026-11-13T18:33:54Z"
lastReleaseAt: "2026-11-10T17:30:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 65
maintainers: ["sorinirimies", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/35c07ca65ca56b30b4f55b592dd7c94213610f7e41f76bb83a86c88f0fcdd73d/sorinirimies/gitkraft"
---

# ⚡ GitKraft

**A Git IDE written entirely in Rust — desktop GUI & terminal UI**

---

GitKraft ships two front-ends from a single Rust workspace:

| Binary | Use case |
|--------|----------|
| `gitkraft` | Desktop GUI — mouse, drag-to-resize panes, commit graph |
| `gitkraft-tui` | Terminal UI — keyboard-driven, great for SSH & headless machines |

## Preview

### Desktop GUI

### Terminal UI

## The hub: no more forge dashboards

Press `H` in the TUI (or the **Hub** button in the GUI) for pull requests, issues, CI and
notifications of **GitHub, GitLab, Gitea / Forgejo and Codeberg** in one place. `gitkraft-web`
serves the same on localhost.

| | |
|---|---|
| Dashboard | sections are saved queries (`dashboard.toml`): "Review requested", "My PRs", issues, CI of a repo, the inbox |
| Pull requests | description (Markdown), reviews, checks, diff, comments; approve, request changes, comment, merge, close |
| Issues | list, comment, close / reopen |
| CI | runs, jobs, steps, timeline, live log with errors extracted; re-run failed / all, cancel (GitHub / Gitea Actions, GitLab CI) |
| Discussions & wiki | GitHub discussions (list, read, comment); the wiki of GitLab, Gitea, Forgejo and…
