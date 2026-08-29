---
repo: "0xTwyne/root-archetype"
name: "root-archetype"
description: "Template repo for seeding governance root repos with swarm coordination"
readmeQualityOk: true
url: "https://github.com/0xTwyne/root-archetype"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [76, 20]
stars: 6
forks: 2
openIssues: 2
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-10T23:42:12Z"
lastCommitAt: "2026-08-29T10:20:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 81
undervaluedScore: 51
maintainers: ["pestopoppa"]
openGraphImageUrl: "https://opengraph.githubassets.com/452ce466480b0963ed586eebd042db03f659b517c35edbed95e86823840a171d/0xTwyne/root-archetype"
---

# {{PROJECT_NAME}} — Root Governance Repository

An archetype for creating governed, multi-repo workspaces where AI agents
(Claude Code, Codex, or others) operate under shared policy, hooks, and
knowledge management. No application code lives here — this repo coordinates
child repos that contain it.

## How It Works

1. **Clone this archetype** and run `init-project.sh` to scaffold a new governance root
2. **A log repo is created automatically** inside `repos/` for session logs, notes, and handoffs
3. **Register child repos** — your actual application code — under this root
4. **AI agents read `AGENT.md`** (engine-neutral) for operating instructions, then
   engine-specific pointers (`CLAUDE.md`, `CODEX.md`) wire hooks and skills

## Prerequisites

- bash, git, python3, jq
- Optional: [GitHub CLI](https://cli.github.com/) (`gh`) for session PRs and user detection

## Quick Start

```bash
# Create a new governed project (in-place, after cloning the archetype)
git clone <archetype-url> my-project && cd my-project
./init-project.sh my-project

# Or with child repos and guided wizard
./init-project.sh my-project \
  --repos "api:/path/to/api,web:/path/to/web" \
  --guided

# Copy mode…
