---
repo: "jayminwest/warren"
name: "warren"
description: "Coolify for coding agents. Control plane for your agents that operate in isolation, self-manage, self-repair, and self-improve all on your infrastructure."
readmeQualityOk: true
url: "https://github.com/jayminwest/warren"
homepage: "https://app.warren.run"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["agent-orchestration", "ai-agents", "autonomous-agents", "bun", "claude", "control-plane", "developer-tools", "devops", "kubernetes", "sandbox"]
stars: 281
forks: 67
openIssues: 9
closedIssues: 29
watchers: 1
contributors: 12
recentReleases: 6
createdAt: "2026-05-08T19:04:57Z"
lastCommitAt: "2026-08-08T04:33:55Z"
lastReleaseAt: "2026-05-14T04:20:09Z"
status: "thriving"
tags: ["needs_contributors", "funded", "release_machine"]
healthScore: 95
undervaluedScore: 32
maintainers: ["warren-run-bot", "jayminwest", "alloutflo"]
openGraphImageUrl: "https://opengraph.githubassets.com/17b7bb8d2635cc3bbef251855c61640faca0e7ba62e330e587a525cd013d599e/jayminwest/warren"
fundingLinks: ["GITHUB:https://github.com/jayminwest"]
---

</p>

# Warren

Spawn cloud agents at your GitHub repos. Watch them work live, steer them mid-run, get a branch back.

[**Watch the demo**](https://youtu.be/daa7y8g9BkM) — a run dispatched, streamed, steered, and reaped.

[**Watch it live**](https://app.warren.run) — the public read-only instance. Real projects, real runs, live event streams, no login.

> The Coolify of coding agents. Self-hosted control plane: point it at a repo, bring your own key, agents run in sandboxes on your infra, PRs come out.

Warren is a self-hostable control plane for ephemeral coding agents. It is harness-agnostic — run pi, Claude Code, and other agents behind one interface — on your own infrastructure with your own API keys.

Every run is short-lived and sandboxed. A run completes a task, validates the changes, pushes a branch, and exits. **One container, one volume, one HTTP API, one UI.**

## Quickstart

Warren publishes a prebuilt image to `ghcr.io/jayminwest/warren`. Nothing to clone, nothing to compile:

```bash
export WARREN_API_TOKEN=$(openssl rand -hex 32)
export BURROW_TOKEN=$(openssl rand -hex 32)
export ANTHROPIC_API_KEY=sk-ant-...     # your key
export GITHUB_TOKEN=ghp_...             #…
