---
repo: "ChrisVip001/Jeeves"
name: "Jeeves"
description: "Jeeves — a local-first personal assistant for complex, persistent, verifiable work."
readmeQualityOk: true
url: "https://github.com/ChrisVip001/Jeeves"
homepage: "https://github.com/ChrisVip001/Jeeves/releases"
language: "Rust"
languages: ["Rust"]
languagePcts: [76]
topics: ["agent", "agent-framework", "ai-agent", "evals", "json-rpc", "llm", "local-first", "mcp", "memory", "personal-assistant"]
stars: 112
forks: 1
openIssues: 4
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-09-20T17:09:01Z"
lastCommitAt: "2026-11-20T12:21:23Z"
lastReleaseAt: "2026-11-12T18:22:47Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 74
undervaluedScore: 6
maintainers: ["ChrisVip001"]
openGraphImageUrl: "https://opengraph.githubassets.com/df8c3d7377bd410fecf15beebc1e4c5b762d2fffcf5ab1e30e6eaa0eb821b327/ChrisVip001/Jeeves"
discussionCount: 1
---

English | [简体中文](https://github.com/ChrisVip001/Jeeves/blob/HEAD/README.zh.md)

# Jeeves — a local agent whose memory you can open

**A personal assistant that runs on your own machine, with a memory you can inspect.**
Use the main chat for everyday conversation, delegating work and following up on an existing task. [Main chat and task threads](https://github.com/ChrisVip001/Jeeves/blob/HEAD/docs/design/main-entry.md)
Rust owns the agent loop, memory and tools; TypeScript carries the shared clients, chat gateways and the isolated browser adapter. Conversations, `state.db` and API keys stay on your machine. The dashboard speaks English and Chinese.

Pair a device by public key and revoke its grant through the [device protocol](https://github.com/ChrisVip001/Jeeves/blob/HEAD/docs/protocol.md#device-pairing-and-revocation). The cockpit’s [global emergency stop](https://github.com/ChrisVip001/Jeeves/blob/HEAD/docs/protocol.md#global-emergency-stop) freezes managed task browsers across restarts. Take over a task browser from your phone or desktop and [save a download to that task](https://github.com/ChrisVip001/Jeeves/blob/HEAD/docs/protocol.md#remote-browser-input-and-downloads).
