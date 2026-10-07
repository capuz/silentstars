---
repo: "nbardy/buddies"
name: "buddies"
description: "A local, git-worktree multi-agent swarm orchestrator for Codex, Claude, Gemini, and OpenCode"
readmeQualityOk: true
url: "https://github.com/nbardy/buddies"
homepage: "https://nbardy.github.io/buddies/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [69]
stars: 13
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-03-07T06:22:24Z"
lastCommitAt: "2026-10-07T10:23:01Z"
lastReleaseAt: "2026-10-05T13:09:22Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 53
maintainers: ["nbardy"]
openGraphImageUrl: "https://opengraph.githubassets.com/a6e8dd67cd0f33a959827cbc0d050df6277b87b495420a4c72f565a81c9b48ea/nbardy/buddies"
---

# Buddies

> Vim is open source and it's still here decades later. Agent software should be too.

**Free, open source, multi-harness agent team orchestration.**

- **Free, private, open source.** Fork it, add features, run it locally.
- **Bring your own harness.** Use the best agent CLI for each model.
- **Teams with memory.** Buddies share channels and tasks and remember across sessions.

## Quick Start

```bash
git clone --recursive https://github.com/nbardy/buddies && cd buddies && pnpm install && pnpm dev
```

Needs Node 22.13+ and pnpm. Opens at http://localhost:7489.

## The core objects

- **Buddies.** A persistent agent with a name, a role and its own memory. Pick the harness and model per Buddy (Claude Code, Codex, Gemini). Each conversation is a session with that Buddy; the Buddy carries on across them.
- **Messages.** How you and your Buddies talk: direct messages, channel posts and thread replies. Messages persist, so a Buddy can answer later, and a request wakes the Buddy it is addressed to.
- **Channels.** Shared rooms for a workspace. Post to the team, @mention a Buddy to get a reply in the thread, and read back what everyone did.
- **Tasks.** A unit of work with an…
