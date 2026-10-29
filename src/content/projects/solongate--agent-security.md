---
repo: "solongate/agent-security"
name: "agent-security"
description: "Local-first, open-source security gateway for AI coding agents. Enforce tool-call policies, detect secrets, and audit actions on-device."
readmeQualityOk: true
url: "https://github.com/solongate/agent-security"
homepage: "https://solongate.com"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["ai-agent-security", "ai-agents", "claude-code", "codex", "dlp", "local-first", "policy-enforcement", "security-gateway"]
stars: 158
forks: 25
openIssues: 89
closedIssues: 24
watchers: 2
contributors: 12
recentReleases: 3
createdAt: "2026-09-27T10:48:40Z"
lastCommitAt: "2026-10-29T21:24:58Z"
lastReleaseAt: "2026-10-14T14:00:32Z"
status: "newborn"
tags: ["needs_contributors"]
healthScore: 84
undervaluedScore: 30
maintainers: ["codeyevsky", "tnalbant", "qarademir"]
openGraphImageUrl: "https://opengraph.githubassets.com/82e6e59bd0e9d59a47318b83b12930da83b93f5c6d1f0542b9900832cd8c448e/solongate/agent-security"
---

---

**SolonGate Agent Security** is SolonGate's open source, local first security
gateway for AI coding agents. It checks tool calls against your policies before
they run, with secret detection, rate limits and a local audit trail.

This repository is the Agent Security gateway. The rest of the portfolio is at
[solongate.com](https://solongate.com).

Everything stays on the machine. The policy is a file, the audit trail is a
file, and the guard makes no network calls. No account, no telemetry.

## Install and use

Requires `git` to clone this repo. Go 1.26+ is needed too; `install.sh`
downloads the official go.dev build for you if it is not already there,
regardless of OS.

```bash
git clone https://github.com/solongate/agent-security.git
cd agent-security
./scripts/install.sh
solongate
```

Then open a new terminal. Hooks load when a session starts, so an already open
one is not guarded yet.

## What it looks like when it fires

A real Claude Code session: the agent reaches for a `.env`, the guard refuses it,
and the agent says so rather than quietly working around it.

## What it does

| Layer | What it does |
| --- | --- |
| **Policy rules** | Allow or deny by path, command,…
