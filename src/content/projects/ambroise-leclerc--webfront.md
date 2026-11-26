---
repo: "ambroise-leclerc/WebFront"
name: "WebFront"
description: "C++’s missing standard GUI. One reactive TypeScript UI for every C++23 target: a native window on the desktop, any browser for headless and embedded devices. Header-only, no Node.js or npm. Scriptable by humans and LLM agents."
readmeQualityOk: true
url: "https://github.com/ambroise-leclerc/WebFront"
language: "C++"
languages: ["C++"]
languagePcts: [72]
topics: ["cpp", "typescript", "ui", "websocket", "ai-agents", "cpp23", "desktop-app", "developer-tools", "embedded", "gui"]
stars: 47
forks: 10
openIssues: 11
closedIssues: 289
watchers: 6
contributors: 20
recentReleases: 8
createdAt: "2019-02-19T12:06:05Z"
lastCommitAt: "2026-11-26T11:59:28Z"
lastReleaseAt: "2026-10-21T19:55:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "release_machine"]
healthScore: 99
undervaluedScore: 60
maintainers: ["ambroise-leclerc", "AM-L", "webfront-release[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e1e7bfa6698b325d0e9cc0b6c4854ca9f1d9e1d99a0450bbe6acd47bc361bb6/ambroise-leclerc/WebFront"
discussionCount: 0
---

# <img src="https://raw.githubusercontent.com/ambroise-leclerc/WebFront/HEAD/docs/images/webfront-icon.svg" width="24" height="24" alt=""> WebFront

[English](https://github.com/ambroise-leclerc/WebFront/blob/HEAD/README.md) · [Français](https://github.com/ambroise-leclerc/WebFront/blob/HEAD/README.fr.md) · [简体中文](https://github.com/ambroise-leclerc/WebFront/blob/HEAD/README.zh-CN.md)

WebFront is a C++ UI framework that produces modern, reactive interfaces. It is a header-only C++23 library: your application logic stays in C++, the UI is built with TypeScript, React and browser-compatible packages, and the finished application ships as a single executable.

Your application can open its own development environment with `app.bootstrap("developer")`. In that window, `wf` builds and previews the UI, checks types and runs Jasmine tests. You can work in the terminal or let a coding agent drive the same workflow over MCP. Node.js and npm are unnecessary.

When the UI is ready, embed its assets in the executable. This produces a compact, self-contained app that runs offline in a native window or via a web browser on embedded and headless systems.
