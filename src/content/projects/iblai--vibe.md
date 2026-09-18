---
repo: "iblai/vibe"
name: "vibe"
description: "Developer toolkit for vibe coding AI apps on the ibl.ai platform. Scaffold a production-ready Next.js app with iblai-app-cli and the @iblai/iblai-js SDK: SSO auth, AI chat, profiles, notifications, and analytics wired up out of the box. Pre-built components, Claude Code skills, and a hosted backend at iblai.app. Deploy in minutes."
readmeQualityOk: true
url: "https://github.com/iblai/vibe"
homepage: "https://ibl.ai/join"
language: "JavaScript"
languages: ["JavaScript", "Rust"]
languagePcts: [31, 29]
topics: ["agentic-ai", "ai", "ai-agents", "anthropic", "boilerplate", "claude", "claude-code", "cli", "developer-tools", "generative-ai"]
stars: 15
forks: 5
openIssues: 2
closedIssues: 3
watchers: 0
contributors: 15
recentReleases: 5
createdAt: "2026-03-27T23:48:36Z"
lastCommitAt: "2026-09-18T14:03:39Z"
lastReleaseAt: "2026-08-04T15:32:23Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 56
maintainers: ["null-crafter", "github-actions[bot]", "Joetib"]
openGraphImageUrl: "https://opengraph.githubassets.com/78cf90ac693211f95ccedfffc7a89a34408883fc15d3551f883394996ac6ba75/iblai/vibe"
---

# iblai/vibe

Ship AI-powered apps fast — and run the platform behind them. Backend included.

</div>

> **Note:** This toolkit runs against the hosted `iblai.app` environment. If you'd like a license to the full platform codebase to run locally or self-host, reach out to our team at [ibl.ai/contact](https://ibl.ai/contact).

---

Build the app you actually need on [ibl.ai](https://ibl.ai) — sign-in, an AI
agent to talk to, users and admins, custom data, memory, analytics, billing —
as a website and as macOS, Windows, iOS, and Android apps. Or run the platform
with no UI at all. One install; your coding agent does the rest.

## Three steps

**1. Install the skills** in the agent you already use.

```bash
npx skills add iblai/vibe --all        # Claude Code, OpenAI Codex, Cursor, OpenCode, Copilot …
```

Claude Code users can install the plugin instead (same skills, plus the SDK-docs
MCP server, updated with `/plugin update`): `/plugin marketplace add iblai/vibe`
then `/plugin install iblai-vibe@iblai`.

**2. Say hello.**

```text
/iblai-vibe-start
```

Four questions — new project or existing code · one organization, many, or none ·
who signs in · what it's about (users · memories…
