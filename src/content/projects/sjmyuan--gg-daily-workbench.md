---
repo: "sjmyuan/gg-daily-workbench"
name: "gg-daily-workbench"
description: "A collection of prompts used in my daily work"
readmeQualityOk: true
url: "https://github.com/sjmyuan/gg-daily-workbench"
language: "Python"
languages: ["Python"]
languagePcts: [94]
stars: 7
forks: 6
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2023-06-02T12:34:14Z"
lastCommitAt: "2026-11-17T12:14:22Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 89
undervaluedScore: 79
maintainers: ["sjmyuan"]
openGraphImageUrl: "https://opengraph.githubassets.com/ced163b34e69fe9039a824cb37819336648776cf9ec1eccfc5b992bc412bdc47/sjmyuan/gg-daily-workbench"
---

# gg-daily-workbench
A collection of agents and skills used in my daily work

## Installing agents & skills

Use [`install-agents-skills.sh`](https://github.com/sjmyuan/gg-daily-workbench/blob/HEAD/install-agents-skills.sh) to install the
agents and skills in this repo into a workspace or your user profile for
**Copilot** (VS Code), **OpenCode**, and/or **Claude Code**:

```sh
./install-agents-skills.sh <target> <platform> [options]

# Install everything for all three tools into your user profile
./install-agents-skills.sh user all

# Install claude agents + skills into a specific project
./install-agents-skills.sh workspace claude --project ~/work/my-app

# Preview what would happen without changing anything
./install-agents-skills.sh user all --dry-run
```

- `<target>`: `user` | `workspace`
- `<platform>`: `copilot` | `opencode` | `claude` | `all`
- Options: `--project <path>` (workspace), `--scope agents|skills|all`,
  `--force`, `--dry-run`

Agents and skills are **symlinked as whole folders** into place (never copied),
so the repo remains the source of truth — `git pull` here updates every
installed agent and skill automatically. Targets already linked to this repo
are left…
