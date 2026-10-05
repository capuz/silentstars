---
repo: "arhen/agents"
name: "agents"
description: "My virtual Pair Programmer"
readmeQualityOk: true
url: "https://github.com/arhen/agents"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-16T06:01:36Z"
lastCommitAt: "2026-10-05T10:46:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 42
maintainers: ["arhen"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e1c1736d809cefdc98d5d0300a18715c88ed00778b37ab636d52ae67e441fdc/arhen/agents"
---

# ~/.agents — Arhen's global agent config

Single source of truth for agent instructions + curated skills. Cloned to `~/.agents/`, symlinked by pi and Claude Code.

## Contents

- `AGENTS.md` — global instructions (rtk token efficiency, fff search, caveman ultra mode)
- `skills/` — 10 curated global skills (caveman family, compress, impeccable, find-skills)

## Setup on a new machine

```sh
git clone git@github.com:arhen/agents.git ~/.agents

# pi
ln -s ~/.agents/AGENTS.md ~/.pi/agent/AGENTS.md
ln -s ~/.agents/AGENTS.md ~/.claude/CLAUDE.md

# skills (symlink farm, one per entry)
cd ~/.pi/agent/skills && for e in ~/.agents/skills/*; do ln -s "../../../.agents/skills/$(basename "$e")" "$(basename "$e")"; done
cd ~/.claude/skills && for e in ~/.agents/skills/*; do ln -s "../../.agents/skills/$(basename "$e")" "$(basename "$e")"; done
```

## Update

Edit `AGENTS.md` or `skills/` locally → `git push` → pull on other machines. Symlinks mean no re-link needed after update.
