---
repo: "yiwenlu66/codoxear"
name: "codoxear"
description: "mobile handoff for Codex TUI sessions"
readmeQualityOk: true
url: "https://github.com/yiwenlu66/codoxear"
language: "Python"
languages: ["Python"]
languagePcts: [74]
stars: 21
forks: 16
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-02-01T14:46:53Z"
lastCommitAt: "2026-10-24T08:09:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 95
undervaluedScore: 62
maintainers: ["yiwenlu66"]
openGraphImageUrl: "https://opengraph.githubassets.com/5faff766f6273ad3501c7ddffb87d0b8ad091f469c9c0278b65466c646df9fa8/yiwenlu66/codoxear"
---

# Codoxear

Unofficial mobile handoff for local CLI agent sessions.

Codoxear runs a small web server on your computer and exposes a phone-friendly UI for continuing the same live CLI agent session from mobile. Your environment stays local (filesystem, tools, credentials). The phone is a view/controller.

Currently supported agent backends:

- Codex
- Pi (default backend)
- Claude Code (`cc` backend; launches the `claude` CLI)

Name: "codoxear" = "codex dogear" (dog-ear a page so you can pick up where you left off), meaning you can seamlessly continue the same work from different devices.

Not affiliated with OpenAI, the Pi Coding Agent project, or Anthropic. "Codex", "Pi", and "Claude" are referenced only for CLI compatibility.

## Platform support

Supported:

- Linux (uses `/proc`, PTYs)
- macOS (uses `lsof`/`pgrep`, PTYs)

Not supported:

- Windows (no POSIX PTY/termios model; use WSL2 if you want a Linux environment)

## Quick start

Requires Python 3.10+.

Optional but recommended: install `ffmpeg` / `ffprobe` if you want incompatible local videos (`.mkv`, `.mov`, `.avi`, etc.) transcoded into browser-safe MP4 previews in the file viewer. Without ffmpeg, browser-native…
