---
repo: "AMD-AGI/PrimusClaw"
name: "PrimusClaw"
description: "LLM agent orchestration on Kubernetes: autonomous coding-agent sessions in per-session sandboxes."
readmeQualityOk: true
url: "https://github.com/AMD-AGI/PrimusClaw"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["agent", "golang", "kubernetes", "llm", "python", "sandbox", "typescript"]
stars: 8
forks: 0
openIssues: 6
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 10
createdAt: "2026-08-28T11:19:31Z"
lastCommitAt: "2026-11-12T05:33:03Z"
lastReleaseAt: "2026-11-07T17:07:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 44
maintainers: ["zoroyihan7", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/79a28d58c3d30102289f3163a85a9f4c5a2f6fea36ca5a7d9b3fd7a96fe93dfd/AMD-AGI/PrimusClaw"
---

# PrimusClaw

PrimusClaw is an open platform for running LLM agents on infrastructure you
control, and for reaching them from the chat you already use. **Claw** is the
agent orchestration platform: an API / Brain / Hands service triad that runs
autonomous agent sessions inside per-session sandboxes. The **personal agent**
is a chat assistant built on Claw: each person gets a standing assistant that
works with their own Claw identity, with Microsoft Teams as its first channel.
The **connector** is a small client for a developer's own machine that lets
Claw, and the assistant through it, drive the Claude Code, Codex or Cursor
sessions on that machine, using outbound HTTPS only.

> **Status: pre-1.0.** Every published package is 0.x. Interfaces, configuration
> and wire formats may change between minor releases; pin what you deploy and
> read the changelogs before upgrading.

## What's in this repository

| Component | What it is | Path | How it ships | Docs |
|---|---|---|---|---|
| **Claw** | Agent orchestration platform: API, Brain (agent loop) and Hands (in-sandbox tool server), in TypeScript | [`claw/`](https://github.com/AMD-AGI/PrimusClaw/blob/HEAD/claw) | Container image…
