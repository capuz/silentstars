---
repo: "santiagorod92/foo_js_panel"
name: "foo_js_panel"
description: "JavaScript Panel to personalize foobar into next level. Works with foo_navidrome and foo_ui_panels"
readmeQualityOk: true
url: "https://github.com/santiagorod92/foo_js_panel"
language: "C++"
languages: ["C++"]
languagePcts: [77]
stars: 5
forks: 2
openIssues: 1
closedIssues: 5
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-10-27T12:55:15Z"
lastCommitAt: "2026-11-26T15:26:50Z"
lastReleaseAt: "2026-11-15T03:27:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 62
maintainers: ["santiagorod92", "mark-henry"]
openGraphImageUrl: "https://opengraph.githubassets.com/8dcb6eeae77e3ce41872bad2e29d62bfe8ecf950120f3ad1686c0811fe128c37/santiagorod92/foo_js_panel"
---

# JS Panel (foo_js_panel)

JavaScript panels for **foobar2000 v2** on **Windows (x64, x86, ARM64) and macOS** (universal).
A panel runs a script that draws itself and reacts to the mouse and to playback, with an API
modelled on **Spider Monkey Panel** (`on_paint(gr)`, `gr.FillSolidRect`, `fb.TitleFormat`,
`window.SetInterval`, …). The goal is for themes built on Spider Monkey Panel / JScript Panel,
which only ever ran on Windows, to run on macOS too.

The engine is [QuickJS-ng](https://github.com/quickjs-ng/quickjs) (ES2023), built into the
component. Nothing else needs installing.

> **Status: early.** The engine, the panel on both platforms and most of the Spider Monkey
> Panel API work, and the Eole theme runs as a Panels UI skin ([how](#running-the-eole-theme)).
> See [Roadmap](#roadmap) for what's left.

## Start here

New to foobar2000 scripting? The pieces, in plain words:
