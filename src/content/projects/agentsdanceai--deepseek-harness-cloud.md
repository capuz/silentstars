---
repo: "AgentsDanceAI/deepseek-harness-cloud"
name: "deepseek-harness-cloud"
description: "Accounts, credits and cloud agent workspaces for DeepSeek Harness — run it as a hosted product, or self-host in 5 minutes."
readmeQualityOk: true
url: "https://github.com/AgentsDanceAI/deepseek-harness-cloud"
homepage: "https://dshcloud.online"
language: "Python"
languages: ["Python"]
languagePcts: [70]
topics: ["ai-agent", "deepseek", "deepseek-harness", "docker-compose", "fastapi", "llm", "open-core", "self-hosted", "cordis", "dsh"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-08-21T16:14:49Z"
lastCommitAt: "2026-09-08T08:18:10Z"
lastReleaseAt: "2026-09-03T16:18:19Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 56
maintainers: ["AgentsDancePro"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc9890c0b6e79fd5335a555230b054efad9ea12e4d6b9cab3683e5439d768232/AgentsDanceAI/deepseek-harness-cloud"
---

# DSH Cloud

**Managed cloud agents and a self-hostable platform around DeepSeek Harness.**

Accounts, a server-side model gateway, usage policy, teams, and an optional
browser workspace—without distributing an upstream model key to every client.

Release: [`0.3.0`](https://github.com/AgentsDanceAI/deepseek-harness-cloud/blob/HEAD/release/release.json)

[中文](https://github.com/AgentsDanceAI/deepseek-harness-cloud/blob/HEAD/README.zh-CN.md) · [Architecture](https://github.com/AgentsDanceAI/deepseek-harness-cloud/blob/HEAD/docs/architecture.md) ·
[Self-host](https://github.com/AgentsDanceAI/deepseek-harness-cloud/blob/HEAD/docs/deploy.md) · [Editions](https://github.com/AgentsDanceAI/deepseek-harness-cloud/blob/HEAD/docs/editions.md) ·
[Security](https://github.com/AgentsDanceAI/deepseek-harness-cloud/blob/HEAD/SECURITY.md) · [Support](https://github.com/AgentsDanceAI/deepseek-harness-cloud/blob/HEAD/SUPPORT.md)

</div>

---

Boot the whole Community Edition locally with one command (Docker required):

```bash
npx --yes @agentsdanceai/dsh-cloud start
```

Put your model upstream key into `./dsh-cloud/.env` (`UPSTREAM_API_KEY=`), run
the same command again, and open…
