---
repo: "cookrew/cookrew-app"
name: "cookrew-app"
description: "Open-source workspace where AI agents talk, drive browsers, and recruit help — terminals, notes, and live browsers wired together on one canvas. Cables are the permissions; every agent speaks one CLI."
readmeQualityOk: true
url: "https://github.com/cookrew/cookrew-app"
homepage: "https://cookrew.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["agent-teams", "ai-agents", "claude-code", "codex", "developer-tools", "electron", "infinite-canvas", "multi-agent"]
stars: 5
forks: 0
openIssues: 3
closedIssues: 19
watchers: 0
contributors: 3
recentReleases: 8
createdAt: "2026-07-22T15:13:47Z"
lastCommitAt: "2026-11-16T11:53:53Z"
lastReleaseAt: "2026-11-06T03:54:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 66
maintainers: ["favon24"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1308961728/6d5de6d1-8b67-4b14-9a0c-4e55428b17d5"
---

# Cookrew

A desktop app for running a crew of AI coding agents on your own machine. One view
zooms from your devices down to a single agent's terminal, your phone reaches the
same crew, and every agent gets a `cookrew` CLI to talk to the others.

[cookrew.dev](https://cookrew.dev)

## Download

**[Get the latest release](https://github.com/cookrew/cookrew-app/releases/latest)**

| Platform | File |
| --- | --- |
| macOS, Apple Silicon | `Cookrew-<version>-arm64.dmg` |
| Windows (preview) | `Cookrew-<version>-windows-preview-x64.exe` |

There is no Intel Mac or Linux release. Windows is a preview: agents end when the app
closes, and the `cookrew` CLI is not supported there.

> **Not notarized yet.** Releases up to and including 0.5.1 are unsigned, so macOS
> stops them on first launch. Until a release says it is notarized, drag Cookrew to
> Applications and clear the quarantine flag before opening it:
>
> ```bash
> xattr -dr com.apple.quarantine /Applications/Cookrew.app
> ```
>
> An unsigned Mac build cannot install its own updates: it tells you when a new
> release is out, in the ⋯ menu, and opens the download page. The 0.4.0 download
> also leaves `cookrew` out of its…
