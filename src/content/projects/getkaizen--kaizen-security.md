---
repo: "getkaizen/kaizen-security"
name: "kaizen-security"
description: "Runtime security for the AI agents you build. Learns each agent's normal behavior and blocks what it never does."
url: "https://github.com/getkaizen/kaizen-security"
language: "Python"
languages: ["Python"]
languagePcts: [78]
stars: 13
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-23T08:39:42Z"
lastCommitAt: "2026-06-26T06:46:26Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 38
maintainers: ["kjayashr"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7b39bafb23f5967391189b01d4e1fb4256b791cb1e904c3283d0933275f4d12/getkaizen/kaizen-security"
---

# Kaizen Security

> [!IMPORTANT]
> **Introducing the Kaizen Sandbox:** it decides in your tenant, only the verdict leaves. The deepest deployment runs the whole decision inside a microVM next to your agent, with your own model key, so your behavioral data never leaves your environment. [Read more](https://docs.getkaizen.io/case-studies/kaizen-sandbox/)

**Runtime security for the AI agents you build.** Kaizen inspects every action an agent takes (a tool call, a connection, a file or data access), learns its normal behaviour, and catches what falls outside it. It blocks known-bad and flags the rest, in your own environment, as it happens.

> **Sandboxes make agents safe to run. Kaizen makes them safe to trust.** A sandbox contains an agent and blocks unknown hosts; it cannot tell you the agent exfiltrated to an *allowed* host, or that it stopped acting like itself. That is Kaizen.

These are the open Kaizen clients. The managed control plane and console are at **[getkaizen.io](https://getkaizen.io)**. Full docs: **[docs.getkaizen.io](https://docs.getkaizen.io)**.

## Install

```bash
pip install kaizen-security      # Python
npm install kaizen-security      # TypeScript
```

##…
