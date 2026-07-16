---
repo: "wiedymi/restty"
name: "restty"
description: "Powerful, lightweight web terminal. Batteries included. Powered by libghostty-vt, WebGPU, and text-shaper."
readmeQualityOk: true
url: "https://github.com/wiedymi/restty"
homepage: "https://restty.pages.dev/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ghostty", "pty", "terminal", "text-shaping", "typescript", "wasm", "webgl2", "webgpu", "zig"]
stars: 367
forks: 20
openIssues: 1
closedIssues: 14
watchers: 3
contributors: 2
recentReleases: 2
createdAt: "2026-02-07T09:08:16Z"
lastCommitAt: "2026-07-16T06:00:34Z"
lastReleaseAt: "2026-07-16T05:47:22Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 25
maintainers: ["wiedymi"]
openGraphImageUrl: "https://opengraph.githubassets.com/fcb9e215a976b40138d2ac62f0e2ce43c2f11a234fc5ebdf9e30e1c2131f228f/wiedymi/restty"
---

# restty

Browser terminal rendering for web apps, powered by `libghostty-vt` in WASM,
WebGPU with WebGL2 fallback, and TypeScript text shaping.

- Demo: <https://restty.pages.dev/>
- Canonical docs: <https://restty.pages.dev/docs>
- npm: <https://www.npmjs.com/package/restty>
- Issues: <https://github.com/wiedymi/restty/issues>

`restty` is early-release software. The high-level API is usable, but some APIs may still change
while the developer experience settles.

## Install

```bash
npm i restty
```

## Quick Start

```html
```

```ts
import { Restty } from "restty";

const restty = new Restty({
  root: document.getElementById("terminal") as HTMLElement,
});

restty.connectPty("ws://localhost:8787/pty");
```

`new Restty(...)` creates the pane DOM, canvas, and hidden IME input for you.

## Main Entrypoints

- `restty`: primary API (`Restty`, `createRestty`, themes, fonts, PTY helpers, plugin types).
- `restty/xterm`: focused xterm.js-style compatibility wrapper.
- `restty/headless`: DOM-free WASM terminal core wrapper for replay, tests, and backend-owned sessions.
- `restty/esm`: standalone browser ESM bundle for script/CDN usage.
- `restty/internal`, `restty/internal/runtime`,…
