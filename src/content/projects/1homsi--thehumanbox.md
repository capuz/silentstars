---
repo: "1homsi/thehumanbox"
name: "thehumanbox"
description: "Civilization sandbox in your browser. Tribes invent their own languages, cultures and wars, from the stone age to computers. Built in Rust and WebAssembly, runs entirely on your device."
readmeQualityOk: true
url: "https://github.com/1homsi/thehumanbox"
homepage: "https://thehumanbox.com"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [59, 37]
topics: ["agent-based-simulation", "alife", "artificial-life", "browser-game", "civilization", "electron", "emergent-behavior", "game", "open-source-game", "procedural-generation"]
stars: 82
forks: 6
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-05-07T11:56:08Z"
lastCommitAt: "2026-10-25T08:40:23Z"
lastReleaseAt: "2026-05-18T11:33:57Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 36
maintainers: ["1homsi"]
openGraphImageUrl: "https://opengraph.githubassets.com/b103ed969dad44d6c5a783d36ea18dc0c6cab34244b1ecf6f82635bd008c929a/1homsi/thehumanbox"
---

Tribes invent their own languages, cultures and wars, from the stone age to computers.<br />
  Nothing is scripted. Only world laws.

  &nbsp;·&nbsp;
  &nbsp;·&nbsp;

Autonomous people learn, form tribes, develop language, build cities, found
religions, declare wars, sign treaties, invent computers and pass culture across
generations, through 45 eras. Watch, or play god: answer their prayers, reshape
the land, send blessings, plagues and disasters.

The whole simulation is Rust compiled to WebAssembly and runs on your device,
with nothing to sign up for. Every thought, conversation and chronicle is
written by the simulation itself. Your world saves locally and can be exported.

## Structure

```
thehumanbox/
├── apps/
│   ├── web/        React/Vite frontend; the pixel map is drawn with xipjs (WebGL2)
│   ├── desktop/    Electron app that wraps the web client and the native simulation
│   └── server/     Rust WebSocket server around the engine (what the desktop app runs)
├── crates/
│   ├── sim-core/   The simulation engine (native + WebAssembly)
│   └── headless/   Deterministic headless runs: sweeps, perf gate
├── scripts/        Dev and CI helpers, and the published desktop…
