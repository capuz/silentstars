---
repo: "picassio/pi-phone"
name: "pi-phone"
description: "pi agent for Android: pi-durable server, React Native app"
readmeQualityOk: true
url: "https://github.com/picassio/pi-phone"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [68, 24]
stars: 62
forks: 2
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-10-17T04:11:23Z"
lastCommitAt: "2026-10-31T15:59:19Z"
lastReleaseAt: "2026-10-31T15:51:16Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 41
maintainers: ["picassio"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a42f780c45514c317e8360b1ca386d9d7af57fde232d9e5eebe22914a0279aa/picassio/pi-phone"
---

English | [简体中文](https://github.com/picassio/pi-phone/blob/HEAD/README.zh-CN.md) | [Tiếng Việt](https://github.com/picassio/pi-phone/blob/HEAD/README.vi.md)

# pi-phone

A coding agent that lives on your Android phone. pi-phone is one app: it carries its own Linux userland (Node.js,
bash, git, gh, ssh, ripgrep, fd, npm), runs the [Pi](https://github.com/earendil-works/pi) agent on
[Pi Durable](https://github.com/earendil-works/pi/tree/main/packages/durable), and shows a mobile web UI in a WebView.
No Termux, no laptop, no cloud VM.

> **Status:** a personal project, built and tested on a Galaxy Z Fold 8 (Android 17). Sideload only (it targets
> Android SDK 28, see [DESIGN.md](https://github.com/picassio/pi-phone/blob/HEAD/DESIGN.md)). Expect rough edges.

## What it does

### The agent
- **A durable agent on the phone.** Sessions, subagents, and tool calls are stored as they happen (SQLite). Kill the
  app or update it mid-run and the work continues where it stopped.
- **Subagents at a glance.** A peek tile lists the subagents at work in its session (3 at most, 1 in the phone's
  strip; **N more** opens the board there), and the subagents board shows a sub-tile for each (6 a…
