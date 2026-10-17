---
repo: "smrafiz/claude-supercharger"
name: "claude-supercharger"
description: "The essential safety and workflow layer that every Claude Code user installs first and never thinks about again."
readmeQualityOk: true
url: "https://github.com/smrafiz/claude-supercharger"
language: "Shell"
languages: ["Shell"]
languagePcts: [95]
stars: 15
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-30T17:37:10Z"
lastCommitAt: "2026-10-17T07:58:56Z"
lastReleaseAt: "2026-05-07T04:01:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 41
maintainers: ["smrafiz"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c202ecdfdb8c1a73bbe95127a56e28e40855aa746a36b748030725f603e7879/smrafiz/claude-supercharger"
---

# Claude Supercharger

Safety hooks for Claude Code that run **outside Claude's process** — before commands execute, invisible to the model. The guards cost no context tokens: they live in your shell, not in your prompt.

   [](https://github.com/smrafiz/claude-supercharger/actions/workflows/ci.yml) [](https://github.com/smrafiz/claude-supercharger/actions/workflows/ci.yml)

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

**Requirements:** Claude Code CLI · Bash 3.2+ (macOS, Linux, or Git Bash on Windows) · Python 3.7+ · `jq`

**macOS, optional — the Supercharger app:** notifications show as "Script Editor" by default. To get them as "Claude Supercharger", with a…
