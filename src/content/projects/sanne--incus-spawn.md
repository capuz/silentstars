---
repo: "Sanne/incus-spawn"
name: "incus-spawn"
description: "Give your AI coding agents their own machines — not your credentials. Isolated Linux workstations with full autonomy, on Linux and macOS."
readmeQualityOk: true
url: "https://github.com/Sanne/incus-spawn"
homepage: "https://isx.run"
language: "Java"
languages: ["Java"]
languagePcts: [94]
topics: ["agentic-ai", "agentic-sandbox", "claude-code", "codex", "git", "graalvm", "kvm", "lxc-containers", "maven", "quarkus"]
stars: 50
forks: 29
openIssues: 63
closedIssues: 724
watchers: 2
contributors: 22
recentReleases: 0
createdAt: "2026-04-07T07:54:32Z"
lastCommitAt: "2026-11-11T19:49:55Z"
lastReleaseAt: "2026-04-21T16:18:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 48
maintainers: ["Sanne-ai-bot", "edeandrea"]
openGraphImageUrl: "https://opengraph.githubassets.com/c142e1f05b78157dccea5635bc8675bffa41ab8c30502d623868eec924a2d19c/Sanne/incus-spawn"
discussionCount: 0
---

# isx

**Give your AI coding agents their own machines, not your credentials.**

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
  Use it, throw it away, branch again from a clean state.
- **Full…
