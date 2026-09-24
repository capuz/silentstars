---
repo: "Jesse0502/CopperOS"
name: "CopperOS"
description: "Open Source agentic browsing assistant for Chromium-based browsers"
readmeQualityOk: true
url: "https://github.com/Jesse0502/CopperOS"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [49, 40]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-09-17T17:32:02Z"
lastCommitAt: "2026-09-24T08:40:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 27
maintainers: ["Jesse0502"]
openGraphImageUrl: "https://opengraph.githubassets.com/d4e856196954da172064687a10ffb3d2b7df687588e6f6fb4d6f6a8b71bf672d/Jesse0502/CopperOS"
---

**Beta.** Interfaces, config format, and stored-session layout may still
change between versions. See [Known limits](#known-limits) before assuming
something is a bug, and [Contributing](#contributing) if you'd like to help.

Prompt-driven browser agent. You type a task, a local Ollama model drives a real
Chrome tab — in your own profile, with your existing logins.

Perception is accessibility-tree first (cheap, exact), with badged screenshots
escalated automatically only when the tree goes blind. Input goes through CDP
so events are genuinely trusted rather than synthesized in page JS.

```
┌─────────────────────┐   WebSocket    ┌──────────────────────┐
│  broker/  (Node/TS) │◄──────────────►│  extension/  (MV3)   │
│  • Ollama /v1 API   │  {id,op,params}│  • chrome.debugger   │
│  • tool definitions │                │  • ref → coordinates │
│  • agent loop       │  {id,ok,data}  │  • humanized input   │
│  • holds API key    │                │  • AX snapshots      │
└─────────────────────┘                └──────────────────────┘
```

The extension is hands only — it holds no config and makes no decisions. The
broker is brains only — it never sees a pixel coordinate.

The model…
