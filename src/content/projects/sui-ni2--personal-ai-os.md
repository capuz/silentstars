---
repo: "sui-ni2/personal-ai-os"
name: "personal-ai-os"
description: "A privacy-first, provider-neutral personal AI workbench with chat, memory, auditable tools, MCP, and isolated project plugins."
readmeQualityOk: true
url: "https://github.com/sui-ni2/personal-ai-os"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [66, 30]
topics: ["ai-workbench", "anthropic", "developer-tools", "mcp", "ollama", "personal-ai", "privacy", "self-hosted", "openai"]
stars: 17
forks: 5
openIssues: 2
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-08-11T12:38:07Z"
lastCommitAt: "2026-08-17T04:19:40Z"
lastReleaseAt: "2026-08-15T09:45:18Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 92
undervaluedScore: 46
maintainers: ["sui-ni2", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/35edffa0bbab79a10f741eedb1b6af1d2338558d144d8b1e32e46d369c1c7d9d/sui-ni2/personal-ai-os"
---

# Personal AI OS

**Personal AI OS is a local-first, provider-neutral workspace for long-running AI work.**
Projects, context, reviewed memory, tools, and auditable execution belong to the workspace rather
than to any single model provider. Users can change AI services without making the project itself
belong to that service. The community edition runs locally today; managed-cloud account and billing
boundaries remain fail-closed until their identity infrastructure is ready.

It is not an account switcher and it is not a thin chat client. The goal is a durable personal AI
work layer in which model providers are replaceable execution engines while project state remains
under the user's control.

## Early testers wanted

Personal AI OS `v0.2.0` is now the first stable tagged release. **You do not need a paid API key to help test it.**

- **No API key:** follow [Try without an API key](https://github.com/sui-ni2/personal-ai-os/blob/HEAD/docs/try-without-api.md) or run `python scripts/release-provider-smoke.py --provider openai --no-key-only` after installing the Python dependencies. This makes no billable model call.
- **Have your own provider credential:** use [Issue…
