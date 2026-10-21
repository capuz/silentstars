---
repo: "PersonalClaw/PersonalClaw"
name: "PersonalClaw"
description: "Your self-hosted personal AI agent — an agentic OS for one person: chat, autonomous goal loops, memory, knowledge base, skills, automation, MCP in both directions, and a permission-gated app platform. Local-first, provider-agnostic, MIT."
readmeQualityOk: true
url: "https://github.com/PersonalClaw/PersonalClaw"
homepage: "https://personalclaw.dev"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [75, 23]
topics: ["agentic", "ai-agent", "automation", "llm", "local-first", "personal-assistant", "python", "react", "self-hosted", "mcp"]
stars: 7
forks: 7
openIssues: 844
closedIssues: 728
watchers: 1
contributors: 4
recentReleases: 7
createdAt: "2026-07-19T16:15:56Z"
lastCommitAt: "2026-10-21T23:36:41Z"
lastReleaseAt: "2026-10-21T19:12:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 89
undervaluedScore: 71
maintainers: ["keyurgolani"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1305851176/f9375f5b-f219-46f1-a267-6cba54ac3337"
discussionCount: 0
---

# PersonalClaw

**Your self-hosted personal AI agent — an agentic operating system for one person.**

Chat, autonomous goal loops, long-term memory, a knowledge base, skills, scheduled
automation, and channel integrations — all behind one gateway process and one web
dashboard you own. Local-first, provider-agnostic, no analytics, MIT.

---

## <a name="-pre-10-heads-up"></a>⚠️ Pre-1.0 — breaking changes expected

PersonalClaw is at **v0.2.4** and moving fast toward a deeper architecture (see the
roadmap). It follows a **clean-break** engineering doctrine:
when a design is replaced, the old path is removed in the same change rather than carried
along behind compatibility shims. The upshot for you as an early user:

- **The next few minor (0.x) releases may introduce breaking changes with no automatic
  migration of your existing data** — sessions, memory, knowledge, config, and app state
  under `~/.personalclaw` may need to be recreated after an update.
- **Back up before every update.** Run `personalclaw snapshot` to create a portable state
  archive first (restore with `personalclaw restore`), and keep the archive somewhere safe.
- **Don't make this your only system of record…
