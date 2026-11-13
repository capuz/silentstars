---
repo: "soparsio/dotfiles"
name: "dotfiles"
description: "Personal dotfiles managed with chezmoi, including zsh configuration, developer tools, editor settings, and AI assistant instructions."
readmeQualityOk: true
url: "https://github.com/soparsio/dotfiles"
language: "Shell"
languages: ["Shell"]
languagePcts: [75]
topics: ["ai-instructions", "chezmoi", "developer-environment", "dotfiles", "git-config", "macos", "shell-configuration", "vim", "zsh", "cross-platform"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 4
contributors: 5
recentReleases: 0
createdAt: "2026-11-06T14:10:50Z"
lastCommitAt: "2026-11-13T11:19:50Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 54
maintainers: ["soparsio", "goorgainfinity", "jackoracle"]
openGraphImageUrl: "https://opengraph.githubassets.com/69ab7a1995292c447721304ac44837679c7c028bf5f4b47e4ed1617ef3bb7539/soparsio/dotfiles"
---

# Personal dotfiles

This repository manages personal shell, command-line, editor, and AI assistant
configuration with [chezmoi](https://www.chezmoi.io/). Its shell configuration
uses Zsh.

## Getting started

On macOS, Linux, or WSL, run the POSIX shell setup script directly from GitHub:

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/soparsio/dotfiles/main/install.sh)"
```

On native Windows, run the PowerShell setup script:

```powershell
powershell -NoProfile -Command "Invoke-Expression (Invoke-RestMethod 'https://raw.githubusercontent.com/soparsio/dotfiles/main/install.ps1')"
```

Each script installs chezmoi to a user-local directory if needed, initializes
this repository, copies missing machine-local data files from
`examples/.chezmoidata/`, previews the changes, and asks before applying them.
Existing local data files are preserved. Git is required. On macOS, the shell
script uses Homebrew when available and otherwise installs chezmoi to
`~/.local/bin`; it also requires `curl` for the fallback. The PowerShell script
uses PowerShell's web request support. The managed shell configuration is for
Zsh.

If chezmoi is already installed and you prefer to manage the…
