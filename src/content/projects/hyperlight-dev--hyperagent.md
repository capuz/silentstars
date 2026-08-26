---
repo: "hyperlight-dev/hyperagent"
name: "hyperagent"
description: "An AI agent with sandboxed JavaScript execution, powered by Hyperlight micro-VMs and the GitHub Copilot SDK. Ask it to compute things — it writes and runs JS in hardware-isolated VMs with no filesystem, no network, no escape."
readmeQualityOk: true
url: "https://github.com/hyperlight-dev/hyperagent"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
stars: 14
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-03-20T18:13:13Z"
lastCommitAt: "2026-08-26T04:16:24Z"
lastReleaseAt: "2026-04-23T20:08:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 44
maintainers: ["dependabot[bot]", "simongdavies"]
openGraphImageUrl: "https://opengraph.githubassets.com/0a075ef33eaf97f88580137197e42839b28b97039cc936b9015b09f69defaa05/hyperlight-dev/hyperagent"
---

# HyperAgent

HyperAgent is a sandboxed code-acting AI agent runtime: it writes JavaScript handlers, validates them, and runs them inside hardware-isolated [Hyperlight](https://github.com/hyperlight-dev/hyperlight) micro-VMs using the [GitHub Copilot SDK](https://github.com/github/copilot-sdk).

It is built for useful, bounded work: data analysis, document generation, API workflows, secure file output, and tool use through plugins and MCP servers. The model can write code, but the code runs in a sandbox with no direct filesystem, shell, or network access unless you explicitly enable narrowly scoped host capabilities.

> **Warning:** HyperAgent is pre-release software created by AI. Not for production use. Be careful where you run it and what you do with it. Consider running it in a container.
>
> **Platform note:** HyperAgent requires hardware virtualization: Linux with KVM, Azure Linux with MSHV, Windows with WHP, or WSL2 with KVM. It does not currently run on macOS [because of this Hyperlight issue](https://github.com/hyperlight-dev/hyperlight/issues/45).

## Quick Install

```bash
# Authenticate with GitHub (Copilot access required)
gh auth login

# Install and run
npm install…
