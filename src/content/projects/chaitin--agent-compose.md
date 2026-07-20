---
repo: "chaitin/agent-compose"
name: "agent-compose"
description: "docker/docker-compose like daemon for agents"
readmeQualityOk: true
url: "https://github.com/chaitin/agent-compose"
homepage: "https://chaitin.github.io/agent-compose/"
language: "Go"
languages: ["Go"]
languagePcts: [91]
topics: ["agent", "compose", "agent-compose"]
stars: 212
forks: 27
openIssues: 12
closedIssues: 87
watchers: 0
contributors: 20
recentReleases: 10
createdAt: "2026-06-06T08:56:11Z"
lastCommitAt: "2026-07-20T06:34:34Z"
lastReleaseAt: "2026-07-09T08:59:20Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 97
undervaluedScore: 34
maintainers: ["eetoc", "innomentats", "kingfs"]
openGraphImageUrl: "https://opengraph.githubassets.com/903bd7503a6611314b7c746b20c3a461458a53dc0a25fcbb4125b6593e2d775c/chaitin/agent-compose"
---

</a>
  </a>
  </a>
</div>
</p>

**agent-compose is a daemon + CLI control plane that runs AI coding agents in isolated sandboxes.** You describe your agents in an `agent-compose.yml` file, and a long-lived daemon builds, runs, schedules, and proxies an isolated runtime for each one.

> Public preview. APIs, runtime packaging, and deployment defaults may still change. It is suitable for experimentation, local development, and preview deployments — not yet a stable production platform.

📖 中文文档：[中文 README](https://github.com/chaitin/agent-compose/blob/HEAD/README.zh-CN.md)

## What is agent-compose?

If you know Docker Compose, the mental model is familiar: instead of declaring
containers, you declare **agents**. Each agent picks a provider CLI — `codex`,
`claude` (Claude Code), `gemini`, or `opencode` — and the daemon gives it its own
isolated sandbox with a workspace, then runs it on a prompt, a shell command, a
schedule, or an event. Provider API keys stay on the daemon and are never exposed
inside the guest.

You manage the whole lifecycle with a Compose-style CLI (`up`, `run`, `ps`,
`logs`, `down`), and everything is driven by one declarative file.

Concretely, agent-compose…
