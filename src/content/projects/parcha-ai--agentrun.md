---
repo: "Parcha-ai/agentrun"
name: "agentrun"
description: "AgentRun is an open-source platform that supercharges your agents. It adds self-improvement, durable execution and a control plane on top of your favorite agent harness. Your agents become smarter, more fault tolerant and use fewer tokens with every run."
readmeQualityOk: true
url: "https://github.com/Parcha-ai/agentrun"
homepage: "https://agentrun.ai"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [50, 45]
stars: 459
forks: 36
openIssues: 43
closedIssues: 78
watchers: 1
contributors: 2
recentReleases: 5
createdAt: "2026-09-23T00:27:34Z"
lastCommitAt: "2026-11-11T19:40:09Z"
lastReleaseAt: "2026-11-11T18:43:02Z"
status: "newborn"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 92
undervaluedScore: 28
maintainers: ["claudio-michel[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d47c038c62778783f5d97906e2561830249b81bf965eaf0ce18190f3b749e129/Parcha-ai/agentrun"
---

# AgentRun

**AgentRun is an open-source platform that supercharges your agents. It adds self-improvement, durable execution and a
control plane on top of your favorite agent harness. Your agents become smarter, more fault tolerant and use fewer
tokens with every run.**

Bring your agent on the harness it runs best on: Claude Code, Codex, OpenCode or pi. AgentRun does everything around
it. It keeps every run in one store, so a crash doesn't lose it. It gives the agent a computer to work on, holds it to
your approvals and a spend cap, and keeps what it learned in a git folder that the next run starts from. Run it on your
laptop with one command, in one container, or as a server with runners. Apache-2.0.

## Start in three steps

You need Node 24.11 or newer, on macOS or Linux.

1. Start the server:

   ```sh
   npx @parcha/agentrun
   ```

   It starts the server and one runner on port 7340 (or the next free one), keeps everything in `~/.agentrun`, and
   opens the console in your browser.

2. In the console, set a password, then add one model key under **Settings → Model keys**. One `OPENROUTER_API_KEY`
   gives every harness a model. An Anthropic key runs pi and Claude Code; an…
