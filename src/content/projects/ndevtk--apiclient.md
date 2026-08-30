---
repo: "NDevTK/APIClient"
name: "APIClient"
description: "API Security Researcher"
readmeQualityOk: true
url: "https://github.com/NDevTK/APIClient"
homepage: "https://chromewebstore.google.com/detail/api-security-researcher/ahbikcjdhmpbgolbheekhkdfgfodfaoa"
language: "C"
languages: ["C"]
languagePcts: [91]
stars: 15
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-12T09:41:19Z"
lastCommitAt: "2026-08-30T09:26:15Z"
lastReleaseAt: "2026-04-04T13:37:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 64
undervaluedScore: 39
maintainers: ["claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/4470e23f9b3fffccf856c568d5a9d57ade649f736ce4a851a1401fc9b3e76414/NDevTK/APIClient"
---

# API Security Researcher

A Chrome extension (MV3) that reverse-engineers a site's API surface and finds client-side XSS by **running the page's own JavaScript bundle for real** — under forced, multi-path exploration on a forked QuickJS-ng engine (compiled to WebAssembly) with a real Lexbor spec DOM. No debugger, no proxy, no `webRequest`.

The one sentence: **a browser with a BFS time-travel solver.** The browser half (Lexbor DOM + patched quickjs-ng, in C) is spec-faithful and boring by design; the solver half — forced multi-path concolic execution over record/replay snapshots — is the novel part, and it does one thing no scanner does: compute the **logged-in API surface while logged out**, and construct **replay-verified XSS PoCs**, from code that never ran.

## How It Works

Browse any site. In the background:

1. **The engine runs the bundle.** The unmodified JavaScript executes on the forked QuickJS-ng (WASM) inside an offscreen Web Worker, over a real Lexbor DOM/CSS/`URL`. Closures, prototypes, `Function.prototype.call/apply/bind`, `Proxy`, async, and framework state machines (jQuery `$.ajax`, axios, react-query) all evaluate with exact ECMAScript semantics because it *is*…
