---
repo: "NotASithLord/peerd"
name: "peerd"
description: "The first AI agent harness native to the browser. A browser extension that runs a full agent loop where you already work: it drives your tabs, spins up sandboxed compute (JS notebooks, WASM Linux VMs, client-side apps), and shares what it builds peer-to-peer. BYOK, no backend, no telemetry."
readmeQualityOk: true
url: "https://github.com/NotASithLord/peerd"
homepage: "https://peerd.ai"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [66, 31]
topics: ["agentic", "ai-agent", "browser-extension", "chrome-extension", "firefox-extension", "llm", "manifest-v3", "p2p", "webassembly", "webrtc"]
stars: 387
forks: 38
openIssues: 17
closedIssues: 72
watchers: 2
contributors: 13
recentReleases: 10
createdAt: "2026-06-22T05:55:13Z"
lastCommitAt: "2026-08-15T04:04:36Z"
lastReleaseAt: "2026-07-05T18:01:26Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 96
undervaluedScore: 30
maintainers: ["NotASithLord", "jonybur", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/046047bf941394b640f1bc7dd453d64e0a46c6dc1ca77e2cedcf033375d4f75d/NotASithLord/peerd"
---

<br>
  <br>
  <br>
</p>

# The first web-native AI agent harness

peerd is the first general-purpose agent runtime built directly on browser primitives: Workers, origins, sandboxing, OPFS, WASM/WASI, WebRTC, WebAuthn, and WebExtensions. It runs completely inside Chrome and Firefox, with your tabs, signed-in sessions, web apps, and local compute.

**While agent platforms are trying to pull the browser into the harness. peerd pulls the harness into the browser.**

For actual inference you can choose a supported hosted model provider, a local model using localhost, or check out preliminary support for local WebGPU models (we're keeping an eye on WebNN as well).

No peerd account, hosted browser, or tool-server connection is required. Current
builds send no product telemetry to peerd.

[Install](#install) · [peerd.ai](https://peerd.ai) ·
[Architecture](#architecture) · [Security](https://github.com/NotASithLord/peerd/blob/HEAD/SECURITY.md)

## Features

- **Works in the browser you already use.** The agent can read and drive your
  tabs, web apps, signed-in sessions, and page content.
- **Builds reusable site clients.** The web actor can learn a site once and use
  that client again…
