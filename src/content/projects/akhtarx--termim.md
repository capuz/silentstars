---
repo: "akhtarx/termim"
name: "termim"
description: "Stop fighting your ↑ Up Arrow key to find the command you ran yesterday. Termim solves this by keeping your history isolated by directory and ranking commands deterministically. Zero-daemon, zero-database, and lightning-fast."
readmeQualityOk: true
url: "https://github.com/akhtarx/termim"
homepage: "https://akhtarx.github.io/termim/"
language: "Rust"
languages: ["Rust", "Shell"]
languagePcts: [59, 24]
topics: ["history", "powershell", "productivity", "rust", "shell", "terminal", "terminal-history", "terminal-history-manager"]
stars: 20
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 6
createdAt: "2026-03-31T19:17:58Z"
lastCommitAt: "2026-09-15T08:54:11Z"
lastReleaseAt: "2026-09-15T08:35:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 75
undervaluedScore: 38
maintainers: ["itsmimakhtar"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1197664718/c7cbc310-e3eb-4612-8cea-c5cbe3b5b117"
fundingLinks: ["GITHUB:https://github.com/itsmimakhtar", "BUY_ME_A_COFFEE:https://buymeacoffee.com/itsmimakhtar"]
discussionCount: 0
---

</p>

<h1 align="center">Termim</h1>

  <strong>Directory & Context-Aware Terminal History. Lightning-fast, zero-daemon, private.</strong>
</p>

</p>

</p>

---

## 🚀 Quick Install

**Unix/macOS (Bash, Zsh, Fish):**
```bash
curl -fsSL https://raw.githubusercontent.com/akhtarx/termim/main/installer/install.sh | bash
```

**Windows (PowerShell):**
```powershell
iex (iwr -useb https://raw.githubusercontent.com/akhtarx/termim/main/installer/install.ps1)
```

---

## 🧠 The Problem
Your shell history is a giant, noisy list that doesn't know where you are. You press **Up Arrow** 20 times just to find a `docker` command you ran yesterday, only to be buried under irrelevant garbage from:
- Different side projects
- One-off system settings
- Typos and "noisy" commands

## 🛠️ The Solution: Context-Aware History
Termim isolates your history **per working directory**, giving your terminal a "memory" of where you are.

- **Up Arrow** → Priority access to commands ran in the *current directory*.
- **The Escape Path** → Need a global command? Just keep pressing **Up**. Once you've cycled through your directory context, Termim seamlessly switches to your global history.
- **Contextual…
