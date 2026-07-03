---
repo: "mitos-run/mitos"
name: "mitos"
description: "Millisecond microVM sandbox forking for AI agents on Kubernetes. Firecracker VMs that restore from memory snapshots in milliseconds, fork a running VM into N copies, and persist durable, versioned workspaces. Self-hostable, declarative CRDs."
url: "https://github.com/mitos-run/mitos"
homepage: "https://mitos.run"
language: "Go"
languages: ["Go"]
languagePcts: [71]
topics: ["agent-sandbox", "ai-agents", "code-execution", "copy-on-write", "firecracker", "kubernetes", "kvm", "llm", "microvm", "sandbox"]
stars: 20
forks: 1
openIssues: 40
closedIssues: 165
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-05-26T14:21:14Z"
lastCommitAt: "2026-07-03T06:24:08Z"
lastReleaseAt: "2026-06-22T11:21:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 96
undervaluedScore: 52
maintainers: ["stubbi"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c21ab414e05930dffef8c4cc700246e1595642b6c5fa5d17e33f1cf8a3cd2e2/mitos-run/mitos"
discussionCount: 1
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/assets/mitos-mark-white.svg">
    <source media="(prefers-color-scheme: light)" srcset="docs/assets/mitos-mark-black.svg">
  </picture>
</p>

<h1 align="center">Mitos</h1>

  <b>Isolated, forkable computers for your AI agents.</b><br/>
  Millisecond microVM sandbox forking on Kubernetes: fork a running VM into parallel attempts and restore from memory in tens of milliseconds.
</p>

</p>

</p>

</p>

---

## What is Mitos

Mitos gives every AI agent its own isolated computer: a hardware-isolated Firecracker microVM that runs untrusted code safely and that you can fork while it is running. A live copy-on-write fork branches one warm VM into N independent siblings in tens of milliseconds, so an agent can explore many attempts in parallel from a shared, ready state, and you pay only for the pages each sibling changes.

Run it on your own Kubernetes cluster today, where your agents' code, data, and credentials never leave your infrastructure, or on the hosted API with no nodes to manage. As far as we know, it is the only runtime that is open source, self-hostable, Kubernetes-native, and able to live-fork a running…
