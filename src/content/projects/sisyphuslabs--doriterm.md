---
repo: "sisyphuslabs/doriterm"
name: "doriterm"
description: "Doriterm: your devices, one terminal. Every machine you own, linked through an end-to-end encrypted mesh: the shells and coding agents on your machines in a browser tab, a phone and a desktop app, through a relay that only sees ciphertext."
readmeQualityOk: true
url: "https://github.com/sisyphuslabs/doriterm"
homepage: "https://doriterm.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["ai-agents", "bun", "cloudflare-workers", "e2ee", "electron", "ghostty", "herdr", "hono", "libghostty", "pwa"]
stars: 17
forks: 1
openIssues: 94
closedIssues: 342
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2026-11-03T00:45:22Z"
lastCommitAt: "2026-11-06T13:20:13Z"
lastReleaseAt: "2026-11-06T01:24:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 54
maintainers: ["code-yeongyu"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e822f3fe0e6b0d47caa564eb2e296b72a5b9cffb551f08cc357320261dafbcd/sisyphuslabs/doriterm"
---

Every machine you own, linked through an end-to-end encrypted mesh.

---

**Doriterm puts the shells and coding agents on your machines in a browser tab, a phone and a desktop app.** A host runs
beside [herdr-core](https://github.com/herdrdev/herdr-core) (`hc`) where the work actually happens, your machines link into
one mesh, and every session is encrypted end to end with Noise: the relay in the middle forwards ciphertext and holds no key
that opens it.

Because that host pipes `hc`'s own JSON-RPC and framed terminal protocol through byte for byte, every `hc` feature works
without Doriterm re-implementing it — and what crosses the network is a Noise session, not a remote-desktop stream.

## What you get

- **Your terminals, on every screen.** The browser tab, the phone's home screen and the desktop app open the same workspace: the
  same tabs, panes and layout.
- **Agents that say when they need you.** The sidebar groups every session as _needs you_, _working_, _idle_, _done_ or
  _offline_, so you read the list instead of cycling through panes looking for the one that stopped.
- **One window, many machines.** Machines in your [mesh](#a-mesh-of-your-machines) show up in each…
