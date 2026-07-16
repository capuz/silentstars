---
repo: "itlackey/openpalm"
name: "openpalm"
description: "Personal AI assistant(s) powered by OpenCode"
readmeQualityOk: true
url: "https://github.com/itlackey/openpalm"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [78]
topics: ["ai-assistant", "chatbot", "discord-bot", "docker", "memory", "opencode", "self-hosted"]
stars: 35
forks: 0
openIssues: 6
closedIssues: 215
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-17T05:56:04Z"
lastCommitAt: "2026-07-16T05:59:34Z"
lastReleaseAt: "2026-02-23T05:18:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 39
maintainers: ["claude", "itlackey", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/47850aff638b674a806ece39590ca5397f9afb81ea5066e0e95d0044dee84dc0/itlackey/openpalm"
---

<p>
  <strong>Your own AI assistant. Private, self-hosted, no hype required.</strong>
</p>

---

## What is this?

OpenPalm is two things: a **harness** and a **stack**.

**The harness** runs on your machine — either as a CLI binary or an Electron desktop app. It manages a single directory (`~/.openpalm/`) that contains plain files you can read and edit:

- Docker Compose files and addon overlays
- Environment variable files (system config, principal secret files, user API keys)
- OpenCode configuration (model, providers, persona)
- AKM configuration (memory, embeddings, knowledge stash)
- Voice and portal configuration

The harness job is unglamorous: download Docker images, place the right content in the right files, and start `docker compose up`. That's the entire control plane. If you prefer, you can skip the harness entirely and manage those files by hand.

**The stack** is what the harness runs. At its core:

- An **OpenCode assistant** in Docker — your AI, talking to whatever model you point it at, with persistent memory and skills via AKM
- A **Guardian** — the only way in from the outside, enforcing principal-authenticated ingress, ownership checks, and rate limiting on…
