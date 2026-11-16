---
repo: "manishkumar1601/muse-ai-api"
name: "muse-ai-api"
description: "Convert Muse AI web into OpenAI & Anthropic compatible API. Zero auth, cross-platform, single file."
readmeQualityOk: true
url: "https://github.com/manishkumar1601/muse-ai-api"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["ai", "ai-agents", "meta", "muse", "muse-ai"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-02T07:55:43Z"
lastCommitAt: "2026-11-16T11:54:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 40
maintainers: ["manishkumar1601"]
openGraphImageUrl: "https://opengraph.githubassets.com/f88b6fc1dd2a7bc6816eecdb35a7fad00d7cee805f130ec55206d8cd8561a0a9/manishkumar1601/muse-ai-api"
---

# muse-ai-api

Reverse-engineered Node.js client + OpenAI/Anthropic-compatible proxy for Meta's **muse.ai** (Hatch) personal agent.

Lets you call the Muse Spark model (and the agent behind it) from any OpenAI or Anthropic SDK by pointing it at a local proxy.

## ⚠️ Status, scope, and legal

- **Research / interop demo, not a product.** Everything here was figured out by observing the browser from the outside: no insider info, no Meta source. It is _fragile_ by construction — Meta ships hatch-web updates frequently and any of them can break things.
- **Uses your own Meta login.** You authenticate to muse.ai in a browser as yourself, dump the session cookies, and the code impersonates _your_ browser. The server sees your real account the whole time.
- **No bypass of pay/auth.** Anything the muse.ai web UI lets you do, this lets you script. Anything behind an ACL (e.g. certain `/chat/stream` ACLs) still returns 403 for us too.
- **Meta's ToS and your local law apply.** Reverse-engineering of client protocols sits in a gray area in most jurisdictions. If your use case needs legal certainty, use Meta's official [Model API](https://dev.meta.ai/) — same underlying model, documented,…
