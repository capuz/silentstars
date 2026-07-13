---
repo: "smrafiz/claude-supercharger"
name: "claude-supercharger"
description: "The essential safety and workflow layer that every Claude Code user installs first and never thinks about again."
readmeQualityOk: true
url: "https://github.com/smrafiz/claude-supercharger"
language: "Shell"
languages: ["Shell"]
languagePcts: [97]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-03-30T17:37:10Z"
lastCommitAt: "2026-07-13T06:37:11Z"
lastReleaseAt: "2026-05-07T04:01:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 49
maintainers: ["smrafiz"]
openGraphImageUrl: "https://opengraph.githubassets.com/94ea39e18d1979161fb0b5892fb0f4673353469e1172f14321075a2183e16b95/smrafiz/claude-supercharger"
---

# Claude Supercharger

Shell-level enforcement for Claude Code. Safety hooks that run **outside Claude's process** — before commands execute, invisible to the model, impossible to prompt-engineer around. Zero context-window cost: rules live in the shell, not in your prompt.

   

```
[claude-sonnet-4-6] myproject | main | TypeScript | Eco: Lean | Agent: Debugger | MCP: context7 | +156/-23
████████████░░░░░░░░ Context: 60% (120.5K/200K) | 115.2K in / 5.3K out | cache 92% (~103.7K saved)
Cost: $2.45 | Time: 8m 12s | Session: 24% (resets: 3h 42m) · Weekly: 15%
```

```bash
git clone https://github.com/smrafiz/claude-supercharger.git && cd claude-supercharger && ./install.sh
```

Or install without keeping the repo around — clones to a temp dir, installs, cleans up:

```bash
bash -c 'TMP=$(mktemp -d) && git clone https://github.com/smrafiz/claude-supercharger.git "$TMP/cs" && "$TMP/cs/install.sh" && rm -rf "$TMP"'
```

30 seconds. Backs up your config. `./uninstall.sh` reverses everything.

Want plain Claude for a task? **`/sc off`** switches to default Claude Code (guards, memory, statusline all off), **`/sc on`** restores it — no uninstall, nothing deleted.

---

## The problem…
