---
repo: "karlkfi/claude-bouncer"
name: "claude-bouncer"
description: "Guard rails for Claude Code: workspace boundaries, protected branches, production targets, lost exit status, and foreground time."
readmeQualityOk: true
url: "https://github.com/karlkfi/claude-bouncer"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["agentic-ai", "ai-agents", "anthropic", "bash", "claude-code", "claude-code-hooks", "claude-code-marketplace", "claude-code-plugin", "developer-tools", "git"]
stars: 14
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-08-22T06:26:57Z"
lastCommitAt: "2026-11-26T23:35:09Z"
lastReleaseAt: "2026-09-12T23:25:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 54
maintainers: ["karlkfi", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1342511266/987b91b3-5a66-4110-9f66-b3816f020857"
---

# claude-bouncer

🛡️ **Guard rails for Claude Code: five `PreToolUse` guard plugins in one marketplace.**

> The bouncer doesn't care what name you go by.
> He only cares how you behave.

Claude Code's permission rules judge a shell command by its name, and a name is a bad ID. 

- `Bash(grep:*)` can't tell an in-repo grep from one reading `~/.aws/credentials`.
- `Bash(git push:*)` can't tell `claude/fix-42` from `main`.
- `Bash(kubectl:*)` can't tell your local kind cluster from the one your customers are on.

So you either trust every command, or you answer a prompt every time.

These five plugins are `PreToolUse` hooks that read the command arguments instead.
They work five different doors and ask five different questions:

- Are you in the right workspace?
- Are you in the right branch?
- Are you in the right infrastructure environment?
- Are you hiding your exit status?
- Are you blocking the session's main thread?

## Install

```
/plugin marketplace add karlkfi/claude-bouncer
```

Then install whichever you want.
They're independent and work in any combination:
