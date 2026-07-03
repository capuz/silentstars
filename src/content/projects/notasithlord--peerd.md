---
repo: "NotASithLord/peerd"
name: "peerd"
description: "The first AI agent harness native to the browser. A Chrome/Firefox extension that runs the agent loop in your browser — drives your tabs, spins up sandboxed compute (JS notebooks, WASM Linux VMs, client-side apps), and shares what it builds peer-to-peer. BYOK · no backend · no telemetry."
url: "https://github.com/NotASithLord/peerd"
homepage: "https://peerd.ai"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [72, 23]
topics: ["agentic", "ai-agent", "browser-extension", "chrome-extension", "firefox-extension", "llm", "manifest-v3", "p2p", "webassembly", "webrtc"]
stars: 287
forks: 30
openIssues: 2
closedIssues: 17
watchers: 1
contributors: 12
recentReleases: 7
createdAt: "2026-06-22T05:55:13Z"
lastCommitAt: "2026-07-03T06:24:42Z"
lastReleaseAt: "2026-06-29T20:46:17Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 97
undervaluedScore: 32
maintainers: ["NotASithLord", "jonybur", "mariazuheros"]
openGraphImageUrl: "https://opengraph.githubassets.com/dce5baa3ebfb3bda29ef231764940b4e17c3707fca6b2bfc7c5d10d8f37c0560/NotASithLord/peerd"
---

</p>

<!-- types badge: STATIC while the repo is private (shields can't fetch raw.githubusercontent on a private repo → "resource not found"). At public launch, swap the line below for the auto-updating endpoint badge — the JSON is already generated + drift-gated:

**peerd is the first AI agent harness native to the browser.** It's a
Chrome/Firefox extension that runs a full agent loop *inside* the
browser you already use, with your existing tabs and sessions.
It reads and drives your pages, spins up sandboxed compute (JS
Notebooks, full Linux VMs compiled to WebAssembly, personal client-side
apps), and (on the preview channel) shares what it builds over a
peer-to-peer WebRTC network built for agent-to-agent communication. BYOK
to the model provider of your choice. **No backend, no telemetry, no
cloud component in the data path.**

https://github.com/user-attachments/assets/d2e4c285-6952-4c95-bf5a-d06087de084d

</p>

peerd uses *the browser* as its runtime and its security model. It builds
on decades of hardened browser platform work (V8 isolates for sandboxing,
WebCrypto for the vault, WebAuthn passkeys to unlock it, opaque-origin
iframes, Subresource Integrity) and writes none…
