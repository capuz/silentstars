---
repo: "ithinkihaveacat/dotfiles"
name: "dotfiles"
description: "Shell-related config files and scripts"
readmeQualityOk: true
url: "https://github.com/ithinkihaveacat/dotfiles"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [48, 47]
topics: ["fish", "shell", "dotfiles"]
stars: 48
forks: 10
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2010-06-12T09:05:51Z"
lastCommitAt: "2026-10-30T11:01:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 56
maintainers: ["ithinkihaveacat"]
openGraphImageUrl: "https://opengraph.githubassets.com/d79df23511407e833a807d1300c6c0211c43138e411c0a618ea31794cbd11a42/ithinkihaveacat/dotfiles"
---

# .dotfiles

Public dotfiles for [fish](https://fishshell.com/), [git](https://git-scm.com/),
[jed](https://www.jedsoft.org/jed/), and
[VS Code](https://code.visualstudio.com/) — plus a large collection of
[agent skills](#agent-skills) and command-line tools for AI-assisted development
with agents such as Claude Code, Codex, and Gemini CLI.

## Repository layout

```text
.dotfiles/
├── bin/                 # Shell scripts added directly to $PATH
├── fish/
│   ├── config.fish      # Main fish config; loads .private overlay if present
│   ├── conf.d/          # Fish startup snippets
│   ├── completions/     # Fish completions for bin/ scripts and functions
│   └── functions/       # Fish functions (autoloaded)
├── home/                # Dotfiles symlinked into $HOME by install.sh
├── etc/                 # Tool-specific config (agents, VS Code, etc.)
├── skills/              # Agent skills (see Agent skills below)
├── config/              # Plugins for the skill and permission tools
├── docker/              # Dockerfile + notes for building an image from this repo
├── tests/               # TAP tests for bin/ scripts
└── install.sh           # Idempotent install/update script
```…
