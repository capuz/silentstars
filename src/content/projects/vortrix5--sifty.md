---
repo: "Vortrix5/sifty"
name: "sifty"
description: "Windows maintenance CLI + TUI that sifts the junk from the keep. Dry-run by default, Recycle Bin only, undo included."
readmeQualityOk: true
url: "https://github.com/Vortrix5/sifty"
homepage: "https://sifty.tech/"
language: "Python"
languages: ["Python"]
languagePcts: [82]
topics: ["productivity", "system-cleaner", "tui", "windows", "clean", "command-line", "junk-cleaner", "optimize", "uninstall"]
stars: 125
forks: 22
openIssues: 10
closedIssues: 13
watchers: 4
contributors: 11
recentReleases: 1
createdAt: "2026-06-12T09:35:58Z"
lastCommitAt: "2026-11-17T12:15:56Z"
lastReleaseAt: "2026-09-16T20:01:15Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 80
undervaluedScore: 32
maintainers: ["Vortrix5", "dependabot[bot]", "avatGit"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1267170260/a9b1d617-40c3-4afd-b9cb-51a9167929d2"
discussionCount: 0
---

**Sifty is an open-source maintenance tool for Windows that is built to be hard
to misuse: it previews every change, deletes only to the Recycle Bin, and can
undo any clean.** It clears junk and caches, analyzes disk usage, finds
duplicate files, and manages apps, startup items and updates. It also cleans the
clutter other cleaners ignore: stray `node_modules` and build output, orphaned
git worktrees, and bloated WSL2 disks. Drive it from a scriptable CLI or a
full-screen terminal UI.

The optional AI assistant runs **locally** via [Ollama]: nothing leaves your
machine, and it only ever sees file *metadata* (names, sizes, paths), never file
contents.

## Safety first

Sifty deletes files and changes system state, so it is built to be hard to misuse:

- **Dry-run by default.** Every destructive command previews what it would do;
  real changes need an explicit `--apply`.
- **Recycle Bin, never permanent delete.** All removals go through one
  `trash()` function backed by Send2Trash, and `sifty undo` restores the last
  clean.
- **Protected paths.** `C:\Windows`, `Program Files`, `ProgramData`, the drive
  root and your profile root are refused even with `--apply --yes`.
- **Audit…
