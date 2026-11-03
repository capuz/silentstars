---
repo: "dgokcin/claude-pokemon-mod"
name: "claude-pokemon-mod"
description: "A pixel Pokémon that lives above the prompt in Claude Code"
readmeQualityOk: true
url: "https://github.com/dgokcin/claude-pokemon-mod"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [80, 20]
topics: ["claude-code-mod", "claude-code-mods"]
stars: 36
forks: 6
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-03T10:33:04Z"
lastCommitAt: "2026-11-03T10:52:08Z"
lastReleaseAt: "2026-10-11T17:20:17Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 99
undervaluedScore: 47
maintainers: ["dgokcin", "mbcha", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/259d83b091262660c22bb584a266f133485b27f018bd4677268b96913757905f/dgokcin/claude-pokemon-mod"
---

# claude-pokemon

**A pixel Pokémon that lives above your Claude Code prompt, in the terminal or the desktop app, and reacts to everything Claude does.**

```bash
claude plugin marketplace add dgokcin/claude-pokemon-mod
claude plugin install pokemon@claude-pokemon
```

Then pick your starter, like `/pokemon charmander`. Bulbasaur, Charmander, Squirtle, and Pikachu are on offer, and the rest you catch in the wild.

> [!TIP]
> It works best in kitty, Ghostty, or a recent iTerm2, which draw images, so the small band keeps every pixel. iTerm2 also needs images turned on in the `env` block of `~/.claude/settings.json`:
>
> ```json
> {
>   "env": {
>     "CLAUDE_CODE_FORCE_TERMINAL_IMAGES": "1"
>   }
> }
> ```

## Why you'll keep it on

- 🔎 **It watches Claude work.** A pencil for edits, a magnifier for reads, `>_` for shell commands, a TM disc for skills.
- ⚪ **Every subagent is a Poké Ball.** It drops when the subagent starts, a mon from your box steps out to work beside yours, and it goes back in when the subagent reports back.
- ❗ **It tells you when Claude needs you.** A red "!" for questions, plan approvals, and permission prompts.
- 💦 **It flinches when a tool fails.** A shake…
