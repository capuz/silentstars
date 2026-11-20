---
repo: "b3sty191/b3sty-skill"
name: "b3sty-skill"
description: "b3sty RedM/FiveM Lua Codex skill"
readmeQualityOk: true
url: "https://github.com/b3sty191/b3sty-skill"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent-skills", "anti-cheat", "cfx", "claude-code", "claude-skill", "fivem", "fxserver", "gta5", "lua", "rdr3"]
stars: 13
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-02T06:04:33Z"
lastCommitAt: "2026-11-20T12:03:43Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 76
undervaluedScore: 23
maintainers: ["b3sty191", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/01dffef1083cef994b6de6872357bc20a938ba823fd066a74b885d6ac4e24e87/b3sty191/b3sty-skill"
---

# b3sty-skill

Reusable rules and working memory for b3sty RedM/FiveM Lua development.

## Install

`SKILL.md` is the skill manifest. It works as a first-class skill in **Claude Code**, **OpenAI Codex**, and on **skills.sh**. Pick your platform.

### Claude Code - plugin (easiest)

Run these two commands inside Claude Code:

```text
/plugin marketplace add b3sty191/b3sty-skill
/plugin install b3sty-skill@b3sty
```

Done - the skill auto-triggers on RedM/FiveM Lua work. Manage or update it later from the `/plugin` menu.

### Claude Code - git clone

Clone straight into a skills directory (personal, all projects):

```bash
# macOS / Linux
git clone https://github.com/b3sty191/b3sty-skill.git ~/.claude/skills/b3sty-skill

# Windows (PowerShell)
git clone https://github.com/b3sty191/b3sty-skill.git "$env:USERPROFILE\.claude\skills\b3sty-skill"

# project-local (this project only)
git clone https://github.com/b3sty191/b3sty-skill.git .claude/skills/b3sty-skill
```

Restart Claude Code (or open a new session) so the skill is loaded. Update any time with:

```bash
git -C ~/.claude/skills/b3sty-skill pull
```
