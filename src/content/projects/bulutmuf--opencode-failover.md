---
repo: "bulutmuf/opencode-failover"
name: "opencode-failover"
description: "OpenCode plugin for automatic API-key failover and rotation across multiple provider keys"
readmeQualityOk: true
url: "https://github.com/bulutmuf/opencode-failover"
homepage: "https://www.npmjs.com/package/opencode-failover"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["api-keys", "failover", "llm", "opencode", "opencode-plugin", "provider", "rate-limit", "rotation"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-07-04T12:32:02Z"
lastCommitAt: "2026-07-04T23:15:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 45
maintainers: ["bulutmuf"]
openGraphImageUrl: "https://opengraph.githubassets.com/745f037d6e3cbc4fef47e8f8ec7bf9e7eb7a6669814f2a27f8796f0d81539805/bulutmuf/opencode-failover"
---

# opencode-failover

[OpenCode](https://opencode.ai) plugin for automatic API-key failover and rotation across multiple provider keys.

<p>
</p>

</a>
</p>

**opencode-failover** is a [OpenCode](https://opencode.ai) plugin that automatically rotates API keys across multiple provider credentials. When a key hits a rate limit, the plugin quarantines it and switches to the next available key -- zero downtime, zero manual intervention.

- Multiple keys per provider with weighted round-robin distribution
- Automatic quarantine on [rate-limit (429)](#error-classification) with [exponential backoff](#quarantine-schedule)
- Permanent disable on [auth failure (401/403)](#error-classification)
- Works with [NVIDIA NIM](https://build.nvidia.com), [OpenRouter](https://openrouter.ai), [Anthropic](https://console.anthropic.com), [OpenAI](https://platform.openai.com), and any OpenCode-compatible provider

## Quick Start

```bash
opencode plugin opencode-failover
```

Set your API keys. Ask the LLM in the TUI (natural language):

> Add these NVIDIA API keys for failover rotation: nvapi-xxx, nvapi-yyy, nvapi-zzz

The plugin saves keys to `.env` and restarts opencode to activate.

Or create `.env`…
