---
repo: "rappdw/sandy"
name: "sandy"
description: "Isolation for your coding agents... Run your coding agent in a Docker sandbox with filesystem isolation, network isolation, and per-project credential sandboxes."
readmeQualityOk: true
url: "https://github.com/rappdw/sandy"
language: "Shell"
languages: ["Shell"]
languagePcts: [94]
stars: 15
forks: 4
openIssues: 22
closedIssues: 49
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-15T23:05:39Z"
lastCommitAt: "2026-08-24T04:20:42Z"
lastReleaseAt: "2026-03-21T21:03:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 47
maintainers: ["rappdw", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/576100b731a2cfa8fd954cd476dba72e07b391afe98e10bba39f2f39e7e63ee0/rappdw/sandy"
discussionCount: 1
---

# sandy — an isolated sibling for your coding agents

When you're giving AI agents real autonomy to write code, run tests, and modify systems, the environment needs OS-enforced boundaries, not permission prompts. Sandy is the tool we built to make that work.

Sandy is **two things at once**: a **security sandbox** that keeps a rogue or prompt-injected agent off your machine, and a **per-project virtual environment** that keeps each project's agent state — plugins, memory, credentials, installed packages — from bleeding into the others. It's the same `venv` mental model you already use for Python, applied to your whole coding-agent setup — and the second half is useful even if you completely trust the agent.

Install it, run it. That's it.

```bash
curl -fsSL https://raw.githubusercontent.com/rappdw/sandy/main/install.sh | bash
cd /path/to/your/project
sandy
```

Sandy runs Claude Code, Gemini CLI, OpenAI Codex CLI, OpenCode (provider-agnostic), or any combination of them side-by-side in a Docker container with agent permission checks disabled — so the agent works without interruption while your system stays protected and each project stays cleanly isolated:

- **Per-project…
