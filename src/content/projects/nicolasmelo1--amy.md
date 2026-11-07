---
repo: "nicolasmelo1/amy"
name: "amy"
description: "State machine. Drives agents to success, one step at a time"
readmeQualityOk: true
url: "https://github.com/nicolasmelo1/amy"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 21
forks: 1
openIssues: 0
closedIssues: 10
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-04T20:51:09Z"
lastCommitAt: "2026-11-07T22:52:03Z"
lastReleaseAt: "2026-09-06T01:30:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 51
maintainers: ["nicolasmelo1"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d2466df69c50d1c89820f69edfaffa7bb7430380faff977d0b91e4feb377df9/nicolasmelo1/amy"
---

---

**Leave it running, and it does the long part of your work while you are
somewhere else — built the way *you* work, not the way somebody else does.**

## Install

```sh
npm install -g @amykit/cli
amy init
amy doctor
amy discover && amy tick
```

One install per machine. `amy init` writes the config and installs only the
packages that configuration names; `doctor` checks them before a ticket moves.
Run `tick` until you trust it, then `amy start --every 60` leaves the loop
running in the background.

→ [Quickstart](https://github.com/nicolasmelo1/amy/blob/HEAD/docs/start/quickstart.md) · [Installation](https://github.com/nicolasmelo1/amy/blob/HEAD/docs/start/installation.md) · [Configuration](https://github.com/nicolasmelo1/amy/blob/HEAD/docs/start/configuration.md)

## What it is

Writing code is not the long part of a ticket. Reading it, clarifying it,
running checks, opening the pull request, answering review, and handing it on
are the work that waits on people. amy is a small machine that keeps that work
moving one step at a time.

The process is yours: a workflow is a small directory that says what happens
next and how each step runs. Plugins connect the tracker, code…
