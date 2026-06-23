---
repo: "a-streetcoder/agent-deck"
name: "agent-deck"
description: "Agent Deck"
url: "https://github.com/a-streetcoder/agent-deck"
homepage: "https://agentdeck.site"
language: "Swift"
languages: ["Swift"]
languagePcts: [99]
topics: ["agents", "llm", "llm-agents", "llms", "models", "pi", "prompts", "skills"]
stars: 61
forks: 4
openIssues: 5
closedIssues: 10
watchers: 3
contributors: 3
recentReleases: 10
createdAt: "2026-04-29T18:15:12Z"
lastCommitAt: "2026-06-23T22:56:18Z"
lastReleaseAt: "2026-06-02T23:24:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 40
maintainers: ["acorvi"]
openGraphImageUrl: "https://opengraph.githubassets.com/114e8fa5e981cc897cd077d0c15c7e732869117e2d741f57133265820a3e003b/a-streetcoder/agent-deck"
---

<strong>A native macOS platform for agentic coding workflows, powered by <a href="https://github.com/earendil-works/pi">Pi</a>.</strong><br>
  Manage agents, skills, prompts, subagents, worktrees, and GitHub work in one signed Swift app that runs the installed <code>pi</code> CLI in the background.
</p>

</p>

</p>

---

## Stop juggling terminals. Start commanding agents.

Agent Deck does not replace Pi or embed its own agent runtime. It launches the installed `pi` CLI in JSONL RPC mode, manages the surrounding resources and UI, and passes Pi exactly the flags it needs. The result is both a native control surface for Pi sessions and a platform for organizing the agents, skills, prompts, and workflows you run through it.

## Install

One command installs everything on a fresh Mac — the [Pi CLI](https://github.com/earendil-works/pi) if it's missing (and Node if Pi needs it), then the app itself, with the download checksum verified and Agent Deck copied to `/Applications`:

```bash
curl -fsSL https://raw.githubusercontent.com/a-streetcoder/agent-deck/main/install.sh | bash
```

The script is [`install.sh`](install.sh) in this repository — read it (and its history) before piping it…
