---
repo: "lambdaclass/tekton"
name: "tekton"
description: "Tekton is a self-hosted platform for running background AI coding agents at scale. The goal is infrastructure that builds things for you."
readmeQualityOk: true
url: "https://github.com/lambdaclass/tekton"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [52, 36]
stars: 27
forks: 0
openIssues: 62
closedIssues: 23
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-02-05T19:32:49Z"
lastCommitAt: "2026-11-02T15:17:38Z"
status: "thriving"
tags: []
healthScore: 83
undervaluedScore: 15
maintainers: ["fedacking", "jrchatruc"]
openGraphImageUrl: "https://opengraph.githubassets.com/79fd6997d7593509a4260e41f7236ad409b7e5feaa7f8bd80a7047995a82156e/lambdaclass/tekton"
---

# Tekton

> *tekton* (τέκτων): Greek for "builder"

Tekton is a self-hosted platform for running background AI coding agents at scale. You describe what you want, agents write the code, open the PR, and deploy a preview. Not a chatbot. Infrastructure that builds things for you.

It runs on NixOS with isolated systemd-nspawn containers on bare metal.

Inspired by [Michael Stapelberg's post on running coding agents in NixOS](https://michael.stapelberg.ch/posts/2026-02-01-coding-agent-microvm-nix/).

## Why self-hosted

Most AI coding tools are SaaS. You pay per seat, your code leaves your network, and you're locked into one model. Tekton runs on your own hardware.

- **Your infrastructure.** Bare metal servers you control, not shared cloud VMs.
- **Your API keys.** Bring your own accounts, switch models, no markup.
- **No per-seat pricing.** One server handles your whole team.
- **Full isolation.** Each agent gets its own NixOS container with no access to other tasks.
- **Reproducible.** The entire stack is defined in Nix, from the host OS to every container.

## How it works

```
1. You submit a task            "Add pagination to the users endpoint"
2. Tekton spins up a container…
