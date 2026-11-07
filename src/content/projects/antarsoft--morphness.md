---
repo: "Antarsoft/morphness"
name: "morphness"
description: "Self-improving multi-agent harness for Claude Code. A Technical Lead plans, Full-stack builds, QA verifies, and retros turn lessons into rules that fit your project. Stack-agnostic."
readmeQualityOk: true
url: "https://github.com/Antarsoft/morphness"
homepage: "https://morphness.dev/"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["agent-harness", "agentic-workflow", "agents-md", "ai-agents", "ai-coding", "anthropic", "claude", "claude-code", "claude-code-plugin", "claude-md"]
stars: 7
forks: 1
openIssues: 10
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-10-12T18:15:18Z"
lastCommitAt: "2026-11-07T13:55:33Z"
lastReleaseAt: "2026-10-19T17:38:09Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 50
maintainers: ["ziadantar90", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1415972142/931b7063-26fd-4995-93aa-f3b40f6e10d5"
discussionCount: 3
---

# Morphness

**A fail-closed guard for Claude Code, with a process on top that learns from your project**

🛡️ **Guard** · 🧭 **Plan** → 🛠️ **Build** → ✅ **Check** → 🔁 **Retro** → ✂️ **Prune**

It starts generic and morphs into your project's own harness,<br>
one retro and one prune at a time.

🌐 [Website](https://morphness.dev) · 🚀 [Install](#-install) · 🔒 [The guard](#-the-guard) · ✨ [Why](#-why-use-it) · 🧠 [How it works](#-how-it-works) · 📦 [What you get](#-what-you-get) · 🧰 [Make it yours](#-make-it-yours) · 🦋 [How it morphs](#-how-it-morphs) · 🌍 [Community](#-community-lessons) · 🤝 [Contributing](https://github.com/Antarsoft/morphness/blob/HEAD/CONTRIBUTING.md) · <img src="https://cdn.simpleicons.org/discord/5865F2" alt="" height="14"> [Discord](https://discord.gg/zcZTAQq)

---

**Morphness** is an open-source harness for [Claude Code](https://claude.com/claude-code). Its core is
a **guard**: a hook that checks Bash, file, Grep, WebFetch and MCP tool calls before they run, blocks
the ones that could hurt a shared environment or leak a secret, asks you before deploys, publishes and
merges, and blocks the call when it can't run its check.

On top of the guard sits a…
