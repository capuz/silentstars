---
repo: "newdee/unifyterm"
name: "unifyterm"
description: "One terminal for Windows, macOS and Linux: the same Unix commands everywhere, a command history you can search as you type, pictures and markdown in the terminal, built for agents."
readmeQualityOk: true
url: "https://github.com/newdee/unifyterm"
homepage: "https://dfine.tech/unifyterm/"
language: "Rust"
languages: ["Rust"]
languagePcts: [79]
topics: ["coreutils", "cross-platform", "gpui", "linux", "macos", "mcp", "rust", "terminal", "terminal-emulator", "windows"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-11-18T06:38:10Z"
lastCommitAt: "2026-11-25T03:16:01Z"
lastReleaseAt: "2026-11-24T16:39:55Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 55
maintainers: ["newdee", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f72000e657cec85ad30971dccf5a5ebc4980bfac3264af42bb73e8052f97b105/newdee/unifyterm"
---

# UnifyTerm

One terminal for Windows, macOS and Linux. The page that introduces it: [dfine.tech/unifyterm](https://dfine.tech/unifyterm/).

- **The same Unix commands everywhere.** `cat`, `ls`, `grep`, `jq`, `find`, `sed` and the rest of 99 commands (114 on Linux) come with it (`ut`): on Windows too, and before PowerShell's aliases. Paths are printed with `/`.
- **A command history you can search as you type.** Every command a shell runs is kept (without secrets) with its directory and exit code; a list of matches shows while you type.
- **Help with commands.** A corrected command when one is not found, guessed on your machine from the commands it knows. With a model you name and agree to once: better corrections, what each part of a command means (Ctrl-Shift-E), the rest of a command in grey, and a command for what you say in words (`# the five largest files here`, then Enter). The model is a service, a model server on your machine, or an agent's command line you already have (Claude Code, Codex, pi).
- **Pictures, video and markdown in the terminal.** `ut view photo.png`, `ut view clip.mp4`, `ut md README.md`.
