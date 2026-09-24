---
repo: "AgentsDanceAI/AIStore"
name: "AIStore"
description: "Accounts, credits and cloud agent workspaces for DeepSeek Harness — run it as a hosted product, or self-host in 5 minutes."
readmeQualityOk: true
url: "https://github.com/AgentsDanceAI/AIStore"
homepage: "https://aistore.best"
language: "Python"
languages: ["Python"]
languagePcts: [72]
topics: ["ai-agent", "deepseek", "deepseek-harness", "docker-compose", "fastapi", "llm", "open-core", "self-hosted", "cordis", "dsh"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-08-21T16:14:49Z"
lastCommitAt: "2026-09-24T08:42:05Z"
lastReleaseAt: "2026-09-14T10:40:52Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 57
maintainers: ["AgentsDancePro"]
openGraphImageUrl: "https://opengraph.githubassets.com/e047ff1e8d5f2aa15740a827745e39337f24c35c80b04c8e21b766d9bcc445e4/AgentsDanceAI/AIStore"
---

# AI Store

**Thirty-three open-source AI products behind one account—hosted, or pulled onto
your own machine with a single command.**

DeepSeek Harness, ComfyUI, Dify, OpenManus… each slot is its own workspace.
This repo is the layer behind them: accounts, a server-side model gateway,
metering and billing, teams, and the workspace orchestration—with the upstream
key never leaving the server.

Release: [`0.4.0`](https://github.com/AgentsDanceAI/AIStore/blob/HEAD/release/release.json)

[中文](https://github.com/AgentsDanceAI/AIStore/blob/HEAD/README.zh-CN.md) · [Architecture](https://github.com/AgentsDanceAI/AIStore/blob/HEAD/docs/architecture.md) ·
[Self-host](https://github.com/AgentsDanceAI/AIStore/blob/HEAD/docs/deploy.md) · [Editions](https://github.com/AgentsDanceAI/AIStore/blob/HEAD/docs/editions.md) ·
[Security](https://github.com/AgentsDanceAI/AIStore/blob/HEAD/SECURITY.md) · [Support](https://github.com/AgentsDanceAI/AIStore/blob/HEAD/SUPPORT.md)

</div>

---

Boot the whole Community Edition locally with one command (Docker required):

```bash
npx --yes @agentsdanceai/dsh-cloud start
```

Put your model upstream key into `./dsh-cloud/.env` (`UPSTREAM_API_KEY=`), run
the…
