---
repo: "Sanne/incus-spawn"
name: "incus-spawn"
description: "CLI and TUI wrapper to manage sandboxing containers for agentic development"
readmeQualityOk: true
url: "https://github.com/Sanne/incus-spawn"
language: "Java"
languages: ["Java"]
languagePcts: [93]
stars: 40
forks: 22
openIssues: 39
closedIssues: 155
watchers: 2
contributors: 18
recentReleases: 0
createdAt: "2026-04-07T07:54:32Z"
lastCommitAt: "2026-09-27T09:28:20Z"
lastReleaseAt: "2026-04-21T16:18:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 42
maintainers: ["Sanne-ai-bot", "yrodiere", "zakkak"]
openGraphImageUrl: "https://opengraph.githubassets.com/46efd9b1da404ca36237bdcd7f0129146e8fb79a12eb5c19bc2d4dd934a25dff/Sanne/incus-spawn"
---

# isx

**Give your AI coding agents their own machines — not your credentials.**

You're about to hand an AI agent a terminal. On your laptop, that terminal can read your API keys, your GitHub token, your `~/.ssh`, and every repo you have checked out — and anything it writes, your IDE and build tools will happily execute.

isx onboards agents the way you'd onboard a new teammate:

- **A real machine of their own.** Each agent gets a full Linux workstation — its own filesystem, init system, networking, and process tree. It can `dnf install`, run Docker Compose, use `strace` and nested containers — everything works, because it *is* a real system, not an app container. Hardware-isolated KVM virtual machines are one flag away for untrusted code.
- **Zero credential exposure.** API keys and tokens never enter the environment in any form. A host-side TLS proxy injects real credentials upstream, so `claude`, `pi`, `gh`, `git`, and `curl` work unmodified inside — with nothing worth stealing. See [Credential Isolation](#credential-isolation).
- **Disposable in seconds.** Branch a prepared template like you'd branch a repo — instant copy-on-write clones. Use them, throw them away, branch…
