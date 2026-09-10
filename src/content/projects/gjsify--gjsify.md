---
repo: "gjsify/gjsify"
name: "gjsify"
description: "The full JavaScript ecosystem, native on GNOME"
readmeQualityOk: true
url: "https://github.com/gjsify/gjsify"
homepage: "https://gjsify.github.io/gjsify/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [68, 21]
topics: ["canvas", "dom", "fetch", "gjs", "gjsify", "gnome", "javascript", "nodejs", "typescript", "web"]
stars: 22
forks: 4
openIssues: 35
closedIssues: 105
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-21T09:45:09Z"
lastCommitAt: "2026-09-10T08:21:38Z"
lastReleaseAt: "2026-04-11T06:57:53Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 95
undervaluedScore: 46
maintainers: ["JumpLink", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5251cbecdd9bd22ca3a5db472d888a57afd2a03653e3d0b24cdffc9c0d4a1810/gjsify/gjsify"
---

# gjsify

**The JavaScript ecosystem you already know — running natively on GNOME.**

**[Documentation](https://gjsify.github.io/gjsify/)** · [Project status](https://github.com/gjsify/gjsify/blob/HEAD/status/) · [Architecture & contributor guide](https://github.com/gjsify/gjsify/blob/HEAD/AGENTS.md)

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

| You write… | gjsify runs it on… |
|---|---|
| `node:fs`, `node:net`, `node:crypto` | `Gio`, `GLib` |
| `fetch`, `WebSocket`, `XMLHttpRequest` | `Soup 3` |
| `<canvas>` 2D / WebGL | `Cairo` / `Gtk.GLArea` (OpenGL ES) |
| `WebRTC`, `WebAudio`, `<video>` | `GStreamer` |
|…
