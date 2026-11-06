---
repo: "stanfish06/skillquarium"
name: "skillquarium"
description: "A curated ecosystem of installable agent skills"
readmeQualityOk: true
url: "https://github.com/stanfish06/skillquarium"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [62, 22]
stars: 12
forks: 5
openIssues: 378
closedIssues: 548
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-06-09T12:36:45Z"
lastCommitAt: "2026-11-06T12:19:16Z"
status: "thriving"
tags: []
healthScore: 91
undervaluedScore: 49
maintainers: ["stanfish06", "github-actions[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/84168f5beca7fdcf86343efb4db4939ae37b644da471678fd5b4f3359e6ab378/stanfish06/skillquarium"
discussionCount: 0
---

# Skillquarium

A collection of AI agent skills, organized as an Obsidian vault for easier human navigation.

- managed by vercel's skills
- place at `~/.agents` (the repo root _is_ the skills CLI's home; skill folders live in `skills/`)

## Screenshot

## Setup

```bash
mkdir -p ~/.agents && cd ~/.agents
git init
git remote add origin git@github.com:stanfish06/skillquarium.git
git fetch origin
git checkout -f master
./skillquarium install
```

`install` symlinks every vault skill into each agent's skills folder
(`npx skills add . -s '*' -g`). It needs [Bun](https://bun.sh); the `skillquarium`
launcher installs the CLI's own dependencies on first run.

**gstack**, **career-ops**, and **UI/UX Pro Max** are optional and are
**skipped by default**. Opt in with `--extras`:

```bash
./skillquarium install --extras gstack          # Garry Tan's gstack workflow
./skillquarium install --extras career          # career-ops workspace
./skillquarium install --extras ui-ux           # UI/UX Pro Max seven-skill bundle
./skillquarium install --extras gstack career ui-ux
./skillquarium install --extras all             # all optional extras
./skillquarium install --extras=gstack,ui-ux    # comma…
