---
repo: "patriceckhart/zot"
name: "zot"
description: "Yet another coding agent harness, lightweight and written in go."
readmeQualityOk: true
url: "https://github.com/patriceckhart/zot"
homepage: "https://zot.sh"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["cli", "coding-agent", "coding-assistant", "go", "tui", "ai-agent", "developer-tools", "terminal"]
stars: 299
forks: 27
openIssues: 2
closedIssues: 50
watchers: 1
contributors: 15
recentReleases: 0
createdAt: "2026-04-17T16:21:00Z"
lastCommitAt: "2026-07-30T06:04:06Z"
lastReleaseAt: "2026-04-19T09:37:53Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 29
maintainers: ["patriceckhart", "mi-skam", "ekoeppen"]
openGraphImageUrl: "https://opengraph.githubassets.com/50dfbc6904604cd5bc5c0a5669995ab59b993d2082070b2a9476e2858c52595b/patriceckhart/zot"
discussionCount: 17
---

</a>
</div>
<br>
</p>
</p>

## What is it?

Yet another coding agent harness, lightweight and written (vibe-slopped) in go.

- one static binary.
- built-in providers for Anthropic, OpenAI/Codex/Responses, Kimi, DeepSeek, Google Gemini/Vertex, GitHub Copilot, Bedrock, Azure OpenAI, OpenRouter, Groq, Cerebras, xAI, Together, Hugging Face, Mistral, Moonshot, Z.AI, Xiaomi, MiniMax, Fireworks, Vercel AI Gateway, OpenCode, Cloudflare AI, and Ollama/local models.
- four tools (read, write, edit, bash).
- three run modes (interactive tui, print, json).
- built-in telegram bot.
- extensions in any language via subprocess + json-rpc. None installed by default; opt in with `zot ext install` or `zot --ext`. See [docs/extensions.md](https://github.com/patriceckhart/zot/blob/HEAD/docs/extensions.md).
- user and extension themes via JSON; see [docs/themes.md](https://github.com/patriceckhart/zot/blob/HEAD/docs/themes.md).
- standing instructions via `AGENTS.md` files (global and per-project); see [Persistent instructions](#persistent-instructions-agentsmd).
- reusable instructions via `SKILL.md` files; see [docs/skills.md](https://github.com/patriceckhart/zot/blob/HEAD/docs/skills.md).
-…
