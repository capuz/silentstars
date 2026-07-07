---
repo: "unpod-ai/unpod-python-sdk"
name: "unpod-python-sdk"
description: "SDK to use unpod's calling infra and speech pipeline"
readmeQualityOk: true
url: "https://github.com/unpod-ai/unpod-python-sdk"
homepage: "https://unpod.ai"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["voice-agent-framework", "voice-agents"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 1
createdAt: "2026-06-05T13:01:44Z"
lastCommitAt: "2026-07-07T05:08:06Z"
lastReleaseAt: "2026-06-08T06:59:37Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 54
maintainers: ["parvbhullar", "ankitai-s", "ArshpreetSingh0922"]
openGraphImageUrl: "https://opengraph.githubassets.com/d120e343313f33dae9885fcf4fd8d304eb3911822469d4461f1f5b340de92a0a/unpod-ai/unpod-python-sdk"
---

# Unpod Python SDK

Developer SDK for [Unpod](https://unpod.ai) voice infrastructure — management, connectivity, and adapters for building voice agents that talk over real phone calls, browsers, and WebRTC.

**Single architectural commitment:** the wire between Unpod infrastructure and your code carries **text, not audio**. You bring the brain; Unpod brings the voice.

## Installation

```bash
pip install unpod

# With superdialog integration (recommended)
pip install "unpod[dialog]"

# With LangChain adapter
pip install "unpod[langchain]"

# With MCP adapter
pip install "unpod[mcp]"
```

Or with [uv](https://docs.astral.sh/uv/): `uv add unpod` (extras: `uv add "unpod[dialog]"`).

To install the latest unreleased code from source:

```bash
pip install "unpod @ git+https://github.com/unpod-ai/unpod-python-sdk"
```

## What's Inside

```
unpod
├── Management SDK (REST)   numbers, voice profiles, speech pipes, calls,
│                           sessions, trunks, recordings, transcripts, api keys
├── Connectivity SDK (WSS)  AgentRunner, Session, CallContext, hooks
└── Adapters                superdialog, LangChain, OpenAI, Anthropic, HTTP, MCP
```

- **Management SDK** — CRUD against…
