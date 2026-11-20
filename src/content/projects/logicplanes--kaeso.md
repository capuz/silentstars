---
repo: "logicplanes/kaeso"
name: "kaeso"
description: "Self-hosted AI gateway in Rust: one OpenAI-, Anthropic-, Gemini- and ElevenLabs-compatible API for chat, images, video, speech and music on every provider, with SSO, roles, budgets, alias routes, request logs, a playground and an MCP portal."
readmeQualityOk: true
url: "https://github.com/logicplanes/kaeso"
homepage: "https://kaeso.app"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [59, 37]
topics: ["ai-gateway", "anthropic", "kaeso", "openai", "rust", "self-hosted", "llms", "ai-proxy", "litellm-alternative", "llm-gateway"]
stars: 19
forks: 3
openIssues: 1
closedIssues: 226
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-10-16T04:45:52Z"
lastCommitAt: "2026-11-20T12:14:07Z"
lastReleaseAt: "2026-10-21T18:03:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 56
maintainers: ["dvnold", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7455a2e1303a93aad4d47df4123bc7cf48f309489648e6166474f17526881342/logicplanes/kaeso"
discussionCount: 0
---

## Install

On a server or your computer with Docker and Compose 2.24 or newer:

```sh
curl -fsSL https://kaeso.app/install.sh | sh
```

It installs Kaeso with PostgreSQL, ClickHouse and Valkey into `./kaeso`, starts it at `https://localhost` and prints the link that creates the first user. Add `-s -- --domain kaeso.example.com` to serve your own domain. The [quick start](https://docs.kaeso.app/get-started/quick-start) continues from there, and [install by hand](https://docs.kaeso.app/self-hosting/installation#install-by-hand) shows each step.

On a cloud or a hosting platform, the [platform templates](https://docs.kaeso.app/self-hosting/platforms) run the same release:

## Send your first request

Point the OpenAI SDK at Kaeso and call any model in your project, Claude included:

```python
from openai import OpenAI
client = OpenAI(base_url="https://kaeso.example.com/v1", api_key="sk-kso-…")
print(client.responses.create(model="claude-haiku-5-5", input="Hello").output_text)
```
