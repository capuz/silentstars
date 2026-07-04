---
repo: "wren-creator/web3270"
name: "web3270"
description: "Web 3270 client with lots of great features and AI assist "
readmeQualityOk: true
url: "https://github.com/wren-creator/web3270"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [74]
topics: ["3270", "dockerfile", "javascript", "open-source-project", "ai-agentic"]
stars: 18
forks: 3
openIssues: 1
closedIssues: 8
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-06T00:04:17Z"
lastCommitAt: "2026-07-04T22:53:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 46
maintainers: ["wren-creator"]
openGraphImageUrl: "https://opengraph.githubassets.com/327544425b8ba97c1e44477244b8336cb09b10a9a7a0240a720354388159825e/wren-creator/web3270"
discussionCount: 1
---

# WebTerm/3270

A Node.js WebSocket bridge that connects a browser-based 3270 terminal emulator to mainframe LPARs over TN3270(E). No plugins, no Java — just a browser and a small Node server (or Docker container).

```
Browser (public/tn3270-client.html + public/js/*.js)
    │  WebSocket JSON  ws://localhost:8081
    ▼
server.js  (HTTP + WebSocket on the same port)
    ├── tn3270/session.js ──── TCP :23 / :992 ──► Mainframe LPAR
    ├── macros/engine.js
    └── copilot/copilot-handler.js ──────────────► AI provider
```

---

## Features

- Full TN3270(E) protocol — Telnet negotiation, LU binding, WSF QueryReply, EBCDIC ↔ ASCII
- IND$FILE file transfer (z/VM upload + download) and TSO EDIT upload (z/OS)
- Multi-session tabs, LPAR profile dropdown (with CRUD), PF1–PF12 / PA1–PA2 toolbar
- Split-screen mode — two live sessions side by side for settings comparison (⊞ toggle)
- Macro recorder/replayer (screen-synchronised, JSON-persisted)
- Multi-provider AI Assist panel (Anthropic, OpenAI, Gemini, GitHub Models, Ollama) — live model list auto-loads on provider switch; manual refresh busts cache
- NONDISPLAY field masking (password fields hidden; "Show passwords" toggle)
- 5 colour…
