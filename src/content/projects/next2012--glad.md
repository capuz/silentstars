---
repo: "Next2012/Glad"
name: "Glad"
description: "Glad is a local-first Web interface for terminal-based AI coding tools."
readmeQualityOk: true
url: "https://github.com/Next2012/Glad"
language: "JavaScript"
languages: ["JavaScript", "Go"]
languagePcts: [46, 45]
stars: 17
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-14T15:30:55Z"
lastCommitAt: "2026-11-27T12:55:03Z"
lastReleaseAt: "2026-05-18T12:43:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 50
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/f3f9bad209a7686880b2f50f6f49a701360a1ae0dfc31e6c476728c0b6c54cc8/Next2012/Glad"
---

Glad is a local-first Web interface for terminal-based AI coding tools.

It runs the official **Codex**, **Claude Code**, and **Antigravity** CLIs on your machine, then exposes their structured sessions through a clean browser UI on desktop or mobile devices.

### Demo Video

Watch how Glad brings terminal AI tools to your mobile device seamlessly:

> **Note**
>
> Glad is derived from [termly-cli](https://github.com/termly-dev/termly-cli), but the current project is intentionally focused on a simpler model: local execution, local network access, and a lightweight Web UI for terminal-native AI tools.

## How it works

Glad's core working principle:
1. Glad runs on the machine where the official Codex, Claude, or Antigravity CLI is installed and authenticated.
2. Once started, Glad is accessible on your local machine and LAN via port 3000 (or a port selected with `--port`).
3. If you use Tailscale or ZeroTier for intranet penetration, you can control it remotely from anywhere.
4. All terminal tasks run locally within the Glad daemon, so your mobile device disconnecting won't affect task execution.
