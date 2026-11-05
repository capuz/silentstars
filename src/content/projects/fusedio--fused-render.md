---
repo: "fusedio/fused-render"
name: "fused-render"
description: "Local file explorer with Python-interactive HTML views"
readmeQualityOk: true
url: "https://github.com/fusedio/fused-render"
homepage: "https://render.fused.io"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [54, 36]
stars: 19
forks: 3
openIssues: 2
closedIssues: 3
watchers: 1
contributors: 10
recentReleases: 0
createdAt: "2026-07-06T10:49:12Z"
lastCommitAt: "2026-11-05T11:24:50Z"
lastReleaseAt: "2026-07-17T14:37:54Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 44
maintainers: ["vasu2001", "AkshilVT", "iamsdas"]
openGraphImageUrl: "https://opengraph.githubassets.com/501026450aeee3c9038403e3e29db3329e8ebe77ab1e99580e1b8a56dd9d0bfe/fusedio/fused-render"
---

# fused-render

**[Download for macOS and Linux →](https://render.fused.io)**

A desktop app for running AI agents, local models and your own apps on your
own machine. Open a folder and it is browsable; open an `.html` file and it
runs with a tiny injected runtime that can call a Python `main()`, local AI
models and the agents installed on your computer. Describe an app in a
sentence and Claude Code builds it. Give a bot a browser and a task and watch
it work, or text it from your phone.

Everything is served from `127.0.0.1`, state lives in plain folders under
`~/Fused`, and the AI you use is either a model running on your hardware or an
agent CLI signed in with your own account.

- [Privacy first](#privacy-first)
- [What you can do](#what-you-can-do)
- [Install](#install)
- [Run](#run)
- [Build your own pages](#build-your-own-pages)
- [Claude Code plugin](#claude-code-plugin)

## Privacy first

fused-render is a local-first, single-user tool. The posture, stated plainly:

- **No accounts, no telemetry.** Nothing is required to sign up for. The app
  has no analytics, crash reporting is written to a local log, and the
  diagnostics bundle is a zip on your Desktop that you decide…
