---
repo: "AgOpenGPS-Official/AgOpenWeb"
name: "AgOpenWeb"
description: "Web-first agricultural GPS guidance — browser client + headless .NET host. Independent fork of AgOpenGPS-Official/AgValoniaGPS."
readmeQualityOk: true
url: "https://github.com/AgOpenGPS-Official/AgOpenWeb"
language: "C#"
languages: ["C#"]
languagePcts: [92]
stars: 63
forks: 41
openIssues: 26
closedIssues: 163
watchers: 8
contributors: 19
recentReleases: 6
createdAt: "2026-06-20T10:36:08Z"
lastCommitAt: "2026-11-09T11:59:26Z"
lastReleaseAt: "2026-11-09T01:30:18Z"
status: "thriving"
tags: ["release_machine", "fork_magnet"]
healthScore: 97
undervaluedScore: 45
maintainers: ["chriskinal", "claude", "weblate"]
openGraphImageUrl: "https://opengraph.githubassets.com/3343db8c763947ef21bc20e226b04de3e3505bc32348f43cf3a68ebd510b4ea9/AgOpenGPS-Official/AgOpenWeb"
discussionCount: 4
---

# AgOpenWeb

> **⬇️ Download the [Beta build](https://github.com/AgOpenGPS-Official/AgOpenWeb/releases/tag/beta). It is rebuilt from `develop` as fixes land and has all the latest fixes. Please install it, and check the problem still happens on it, before you open an issue.**

Cross-platform agricultural GPS guidance — a rewrite of [AgOpenGPS](https://github.com/farmerbriantee/AgOpenGPS) using HTML/JS, .NET 10, and C#. The UI is a web page served up by the backend host and shown in each platform's own web view.

## Download & run

Get the [**Beta**](https://github.com/AgOpenGPS-Official/AgOpenWeb/blob/HEAD/../../releases/tag/beta) build. It is rebuilt from `develop` on demand and
daily when there are changes, and it is the build to use and report issues against. Everything is a self-contained app (no .NET install needed). Pick the set that matches how you'll run it — in
every mode the host also serves `http://<host>:5174` on the LAN, so cab phones/tablets connect
in a browser.

**🖥️ Desktop** — a window with the guidance UI (host runs in-process):

| OS | Download | Run |
|---|---|---|
| Windows x64 | `agopenweb-win-x64.zip` | run `AgOpenWeb.Desktop.exe` |
| macOS (Apple silicon)…
