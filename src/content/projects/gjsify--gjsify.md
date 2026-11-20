---
repo: "gjsify/gjsify"
name: "gjsify"
description: "The full JavaScript ecosystem, native on GNOME"
readmeQualityOk: true
url: "https://github.com/gjsify/gjsify"
homepage: "https://gjsify.org/gjsify/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [71, 20]
topics: ["canvas", "dom", "fetch", "gjs", "gjsify", "gnome", "javascript", "nodejs", "typescript", "web"]
stars: 28
forks: 3
openIssues: 100
closedIssues: 180
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-21T09:45:09Z"
lastCommitAt: "2026-11-20T11:20:05Z"
lastReleaseAt: "2026-04-11T06:57:53Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded"]
healthScore: 93
undervaluedScore: 47
maintainers: ["JumpLink", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ba75fdbdc8b357b8808043735c32521e04cbc6731815cff0d88a105f837b3fa/gjsify/gjsify"
fundingLinks: ["GITHUB:https://github.com/gjsify", "LIBERAPAY:https://liberapay.com/JumpLink", "CUSTOM:https://paypal.me/JumpLink"]
---

# gjsify

**The JavaScript ecosystem you already know — running natively on GNOME.**

**[Documentation](https://gjsify.org/gjsify/)** · [Project status](https://github.com/gjsify/gjsify/blob/HEAD/status/) · [Architecture & contributor guide](https://github.com/gjsify/gjsify/blob/HEAD/AGENTS.md) · [Docs index](https://github.com/gjsify/gjsify/blob/HEAD/docs/README.md)

---

## What is gjsify?

GNOME desktop apps can be written in JavaScript through **GJS** (GNOME's
JavaScript runtime, powered by SpiderMonkey). But GJS is not Node.js and it is
not a browser: there is no `node:fs`, no `fetch`, no `<canvas>`, no npm ecosystem
waiting for you. Whole categories of libraries — an HTTP client, a game engine,
a crypto library, a WebRTC stack — simply assume APIs that GJS doesn't have.

**gjsify fills that gap.** It reimplements the Node.js, Web, and DOM APIs *on top
of GNOME's own libraries*, so the code and packages you already know just work
when you build a native GNOME application:
