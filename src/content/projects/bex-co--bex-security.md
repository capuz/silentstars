---
repo: "bex-co/bex-security"
name: "bex-security"
description: "Open-source AI security scanner for Codex, Claude Code, and ACP-compatible coding agents—kept current with OpenAI Codex Security."
readmeQualityOk: true
url: "https://github.com/bex-co/bex-security"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [58, 29]
topics: ["acp", "agent-client-protocol", "ai-security", "application-security", "claude-code", "code-scanning", "code-security", "codex", "coding-agents", "devsecops"]
stars: 41
forks: 11
openIssues: 0
closedIssues: 17
watchers: 1
contributors: 49
recentReleases: 2
createdAt: "2018-12-11T22:57:29Z"
lastCommitAt: "2026-09-02T08:03:17Z"
lastReleaseAt: "2026-08-29T00:01:50Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 62
maintainers: ["mldangelo-oai", "puncsky", "ianw-oai"]
openGraphImageUrl: "https://opengraph.githubassets.com/4893fc2283390261d26cfff4080ecc798021ee300bff6bb99c170ed687470b87/bex-co/bex-security"
---

# Bex Security

**Open security workflows for every coding agent and model.**

Bex Security is an upstream-first fork of
[OpenAI Codex Security](https://github.com/openai/codex-security). It keeps the
proven workflow for finding, validating, and fixing vulnerabilities while
working toward an open agent layer based on the
[Agent Client Protocol (ACP)](https://github.com/agentclientprotocol/agent-client-protocol).

Our north star is simple: run a consistent, evidence-driven security workflow
with the agent and model that fit your repository, without falling behind
upstream security improvements.

> ⭐ If you want security tooling that is portable across agents, editors, and
> models, star this repository and watch the roadmap.

## Supported Agents

Run the same evidence-driven security workflow with your preferred coding
agent. Codex is the default; Claude Code, Kimi Code, Muse Code, Qwen Code, and
MiMo Code support is currently alpha.

<p>
</p>

## Quick start

Requires Node.js 22.13.0 or later in the 22.x release line, Node.js 24.x or
Node.js 26.x, and Python 3.10 or later.

```bash
npm install --global @bex-co/bex-security
bex-security scan /path/to/repository --agent claude
```…
