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
recentReleases: 0
createdAt: "2026-03-30T17:37:10Z"
lastCommitAt: "2026-09-01T08:51:33Z"
lastReleaseAt: "2026-05-07T04:01:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 42
maintainers: ["smrafiz"]
openGraphImageUrl: "https://opengraph.githubassets.com/316e7c0ba18c2a4ed05b40d712f079054fd3508ae1f7b40916c687ac6d37de7a/smrafiz/claude-supercharger"
---

# Claude Supercharger

Safety hooks for Claude Code that run **outside Claude's process** — before commands execute, invisible to the model. Zero context-window cost: the rules live in your shell, not in your prompt.

   

---

## Install

```bash
git clone https://github.com/smrafiz/claude-supercharger.git && cd claude-supercharger && ./install.sh
```

Don't want the repo lying around? This clones to a temp dir, installs, and cleans up:

```bash
bash -c 'TMP=$(mktemp -d) && git clone https://github.com/smrafiz/claude-supercharger.git "$TMP/cs" && "$TMP/cs/install.sh" && rm -rf "$TMP"'
```

Takes about 30 seconds. Your existing config is backed up first, and `./uninstall.sh` restores it exactly.

Prefer Claude Code's native plugin system? See [Install as a plugin](#install-as-a-plugin).

**Requirements:** Claude Code CLI · Bash 3.2+ (macOS, Linux, or Git Bash on Windows) · Python 3.6+ · `jq`

---

## Your first five minutes

Everything else is optional. These five are what you'll actually use day to day.

| Do this | What happens |
|---|---|
| Just work normally | Destructive commands (`rm -rf`, force-push to main, `curl \| bash`, credential leaks) are blocked before they run.…
