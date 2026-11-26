---
repo: "Sanne/incus-spawn"
name: "incus-spawn"
description: "Give your AI coding agents their own machines — not your credentials. Isolated Linux workstations with full autonomy, on Linux and macOS."
readmeQualityOk: true
url: "https://github.com/Sanne/incus-spawn"
homepage: "https://isx.run"
language: "Java"
languages: ["Java"]
languagePcts: [92]
topics: ["agentic-ai", "agentic-sandbox", "claude-code", "codex", "git", "graalvm", "kvm", "lxc-containers", "maven", "quarkus"]
stars: 66
forks: 32
openIssues: 70
closedIssues: 919
watchers: 2
contributors: 27
recentReleases: 0
createdAt: "2026-04-07T07:54:32Z"
lastCommitAt: "2026-11-26T12:57:36Z"
lastReleaseAt: "2026-04-21T16:18:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 45
maintainers: ["Sanne-ai-bot", "isx-upstream[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b85b82b218d33b186c6d00eca59f8dd5b27041db75ae58e1f3a7708af0cca76/Sanne/incus-spawn"
discussionCount: 0
---

# isx

**Give your AI coding agents their own machines, not your credentials.**
[isx.run](https://isx.run) is the website, with the full documentation.

An AI agent in your terminal can read your API keys, your GitHub token, your `~/.ssh` and every repo you have checked out.
Your IDE and build tools execute anything the agent writes.

isx onboards agents the way you'd onboard a new teammate:

- **A real machine of their own.**
  Each agent gets a full Linux workstation: its own filesystem, init system, networking and process tree.
  It can `dnf install`, run Docker Compose, use `strace` and nested containers, because it is a real system, not an app container.
  One flag gives the agent a hardware-isolated KVM virtual machine instead, when you want the strongest isolation.
- **Zero credential exposure.**
  API keys and tokens never enter the machine in any form.
  A proxy on your host adds them to the agent's requests as the requests leave the machine, so `claude`, `pi`, `gh`, `git` and `curl` work unmodified inside it.
  See [Credential Isolation](#credential-isolation).
- **Instant branches.**
  Branch a prepared template like you'd branch a repo: an instant copy-on-write clone.
