---
repo: "codecast-sh/codecast"
name: "codecast"
description: "Real-time sync for Claude Code, Codex, Gemini, and Cursor.  Watch your agent work from any device, share sessions with your team, and give it memory across every session."
readmeQualityOk: true
url: "https://github.com/codecast-sh/codecast"
homepage: "https://codecast.sh"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["agents", "claude", "claude-code", "codex", "cursor", "gemini", "orchestration"]
stars: 9
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2025-12-10T02:44:09Z"
lastCommitAt: "2026-07-04T22:19:38Z"
lastReleaseAt: "2026-01-29T04:32:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 50
maintainers: ["ashot", "samvit", "JasonBenn"]
openGraphImageUrl: "https://opengraph.githubassets.com/64b99ec90258c048d0a842708cf937b3b0302c58e0fb743674489ad2799c1027/codecast-sh/codecast"
---

</p>

<h1 align="center">codecast</h1>

  <strong>The operating system for AI coding agents.</strong><br/>
  Sync, search, orchestrate, and collaborate across every agent conversation — in real time.
</p>

</p>

</p>

---

Codecast integrates your coding agents (Claude Code, Codex CLI, Cursor, Gemini) into a shared system with global session memory, tasks, plans, documents, and team collaboration. The CLI installs into each agent's config, giving every agent access to the full history of what your team has built — and the ability to create tasks, schedule follow-up work, and orchestrate multi-agent plans.

A background daemon syncs every conversation in real time. You get a web dashboard, a native desktop app, a mobile app, and a CLI that works both from your terminal and from inside agent sessions.

## Install

```bash
curl -fsSL codecast.sh/install | sh
cast setup
cast start
```

On Windows:

```powershell
irm codecast.sh/install.ps1 | iex
```

That's it. The installer ships a prebuilt binary — no runtime required. The daemon runs in the background, watching your agent history files and syncing conversations as they happen.

**Requirements:** macOS, Linux, or Windows

##…
