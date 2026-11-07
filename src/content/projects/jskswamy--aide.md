---
repo: "jskswamy/aide"
name: "aide"
description: "Stop babysitting your agent. One command, any agent — sandboxed, reproducible, zero decision fatigue"
readmeQualityOk: true
url: "https://github.com/jskswamy/aide"
homepage: "https://github.com/jskswamy/aide"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["claude", "cli", "codex", "coding-agent", "context-manager", "golang", "sandbox", "secrets-management", "sops"]
stars: 19
forks: 2
openIssues: 3
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-21T16:05:15Z"
lastCommitAt: "2026-11-07T09:29:15Z"
lastReleaseAt: "2026-03-25T20:29:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 46
maintainers: ["jskswamy"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a0535c4aca0c6bb4554d68df826bd9cac2d9559990f351f76524950ab7c4266/jskswamy/aide"
---

# aide

Stop babysitting your agent.

One command. Any agent. Sandboxed, reproducible, macOS and Linux.

---

You planned the work. You know what needs to happen. But instead of letting your agent execute, you're stuck evaluating every file read, every shell command, every network call. That's not autonomy - that's babysitting with extra steps.

OS-native sandboxing fixes the catastrophic case - the agent physically can't touch your SSH keys or a production kubeconfig (your Kubernetes cluster credentials). But that's the floor, not the ceiling. Once a rogue write is off the table, you're still switching CLIs and env vars per agent, losing track of which sandbox mode is even active mid-session, leaking API keys into `.env` files, and reinstalling the same plugin set by hand on every new machine.

aide bundles the sandbox with five other things below, all behind one command. It enforces the sandbox natively on both macOS (Seatbelt, Apple's kernel-level sandboxing) and Linux (Landlock + seccomp, with a bubblewrap fallback on older kernels) - equally supported, not macOS-first with Linux bolted on.

aide covers six things:

- **Sandbox** - OS-native guardrails, zero config, macOS and…
