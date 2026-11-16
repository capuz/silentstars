---
repo: "prskr/dark-factory"
name: "dark-factory"
description: "Paperclip clone with focus and security and resource consumption in Rust"
readmeQualityOk: true
url: "https://github.com/prskr/dark-factory"
homepage: "http://www.dark-factory.eu/"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["homelab", "k8s", "k8s-at-home", "kubernetes", "llm", "llm-agents", "llm-tools", "orchestrator", "orchestrator-engine"]
stars: 11
forks: 0
openIssues: 23
closedIssues: 21
watchers: 0
contributors: 6
recentReleases: 6
createdAt: "2026-10-19T07:13:24Z"
lastCommitAt: "2026-11-16T10:54:17Z"
lastReleaseAt: "2026-11-13T10:37:46Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 88
undervaluedScore: 53
maintainers: ["prskr", "claude", "renovate-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/bcfa28bd7239eeafea47ec7632569234566103c39b634501a8836d96028f7c55/prskr/dark-factory"
---

# Dark Factory

A lightweight, Kubernetes-native control plane for AI coding agents that work as "employees" on software projects. It is an opinionated rethink of Paperclip for a homelab: small, compiled, single-tenant.

Status: **pre-MVP**. Core crates exist (control plane, agent runtime, gateway, Forgejo and GitHub plugins), but there are no releases and no production installations. Breaking changes are expected.

## What it does

You give Dark Factory a project (a Git repository, an issue tracker and a sandbox image). You then create tasks and assign them to agents. Agents work on them in isolated sandboxes and open draft pull requests in your forge. Features marked *planned* are designed but not built yet (see the [roadmap](https://github.com/prskr/dark-factory/blob/HEAD/product/iterations/roadmap.md)).

- **Tasks and chats**: create tasks and follow them with a live transcript and follow-up messages. *Planned*: a "CEO" chat per agent and project, and subtasks with dependencies (an implementation task, then a review task that wakes when the first one ends).
- **Sandboxed runs**: every run gets its own Kubernetes pod. A Rust runtime inside runs Claude Code (or another…
