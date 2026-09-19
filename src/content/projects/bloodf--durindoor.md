---
repo: "bloodf/durindoor"
name: "durindoor"
description: "DurinDoor is a self-hosted AI gateway that gives developer tools and applications one stable API in front of many upstream AI providers. "
readmeQualityOk: true
url: "https://github.com/bloodf/durindoor"
homepage: "https://durindoor.vercel.app/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["ai", "chatgpt", "claude-code", "gatewa", "node"]
stars: 7
forks: 1
openIssues: 6
closedIssues: 117
watchers: 0
contributors: 21
recentReleases: 10
createdAt: "2026-07-03T20:31:31Z"
lastCommitAt: "2026-09-19T01:17:25Z"
lastReleaseAt: "2026-07-08T05:21:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 99
undervaluedScore: 67
maintainers: ["bloodf", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c03a54d62bbb67f94d3f5b7f0f43415e7b401bc0cc63ca00a29c5a21542fced/bloodf/durindoor"
fundingLinks: ["GITHUB:https://github.com/bloodf"]
---

</a>
</p>

  </a>
</p>

</p>

  <b>One self-hosted gateway. Every AI provider. Your keys never leave your machine.</b>
</p>

</p>

---

## 🚪 What is DurinDoor?

DurinDoor is a self-hosted AI gateway that unifies **236 providers** behind one OpenAI-compatible API. Add credentials once in the dashboard, point every tool, script, and IDE integration at `http://localhost:20128/v1`, and stop hand-wiring provider SDKs into every app you build. It runs entirely on your own machine or server: credentials, logs, and usage data stay in your `DATA_DIR`, never on someone else's cloud.

It is a fork of [9router](https://github.com/decolua/9router), rebuilt with a Postgres option, an MCP gateway, a management REST API, quota-aware account fallback, a proxy timeline, and a full documentation site, while staying a drop-in upgrade for existing 9router installs.

## 🤔 Why DurinDoor?

Every provider speaks its own dialect. OpenAI wants `messages`, Anthropic wants `messages` shaped differently and a separate `max_tokens`, Gemini wants `contents`, Ollama wants its own JSON, and half the AI coding tools on your machine only know how to talk to one of them. The usual fix is either vendor lock-in or a…
