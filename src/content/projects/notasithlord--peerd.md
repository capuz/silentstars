---
repo: "NotASithLord/peerd"
name: "peerd"
description: "The first AI agent harness native to the browser. A browser extension that runs a full agent loop where you already work: it drives your tabs, spins up sandboxed compute (JS notebooks, WASM Linux VMs, client-side apps), and shares what it builds peer-to-peer. BYOK, no backend, no telemetry."
readmeQualityOk: true
url: "https://github.com/NotASithLord/peerd"
homepage: "https://peerd.ai"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [60, 38]
topics: ["agentic", "ai-agent", "browser-extension", "chrome-extension", "firefox-extension", "llm", "manifest-v3", "p2p", "webassembly", "webrtc"]
stars: 425
forks: 48
openIssues: 30
closedIssues: 84
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2026-06-22T05:55:13Z"
lastCommitAt: "2026-10-29T12:25:48Z"
lastReleaseAt: "2026-07-05T18:01:26Z"
status: "thriving"
tags: []
healthScore: 92
undervaluedScore: 25
maintainers: ["NotASithLord", "jonybur", "lordofthemodels"]
openGraphImageUrl: "https://opengraph.githubassets.com/3e48707679de73f1eb03b0d298e9b738ce0c62217048ec2c36d8568c8cce9d21/NotASithLord/peerd"
---

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
  that client again on later tasks.
- **Runs…
