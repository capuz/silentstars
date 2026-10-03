---
repo: "yeomyeonggeori/blueclaw"
name: "blueclaw"
description: "A POSIX-isolated agent host: a Go daemon that runs an AI agent harness on behalf of the person who asked, executes every tool call as that person's own unprivileged Linux user, holds side-effecting calls at an approval gate, and writes every step to a durable event ledger."
readmeQualityOk: true
url: "https://github.com/yeomyeonggeori/blueclaw"
language: "Go"
languages: ["Go"]
languagePcts: [85]
topics: ["acp", "agent-host", "ai-agents", "approval-workflow", "audit-log", "chatops", "golang", "least-privilege", "posix", "self-hosted"]
stars: 5
forks: 0
openIssues: 8
closedIssues: 24
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-02-17T17:29:15Z"
lastCommitAt: "2026-10-03T09:23:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 57
maintainers: ["eastriverlee", "chakki-the-potato"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad1456b67548967a93f4dbf29bab6cb5c90aa51789e35df4688bdb6d4cd0884e/yeomyeonggeori/blueclaw"
---

# blueclaw

*A self-hosted agent host: each requester's tool calls run as their own unprivileged POSIX user, side effects wait at an approval gate, and every step lands in a durable ledger.*

> **Status: pre-alpha.** The interfaces, the wire grammar, the configuration keys and the database schema change without notice. Pin a commit and expect to read diffs.

```bash
git clone --recursive https://github.com/yeomyeonggeori/blueclaw.git
cd blueclaw
go build ./...
```

The [quickstart](https://blueclaw.intern.kim/docs/quickstart) configures the standalone runtime and policy before starting the daemon. The full reference is [DOCS.md](https://github.com/yeomyeonggeori/blueclaw/blob/HEAD/DOCS.md), published at [blueclaw.intern.kim](https://blueclaw.intern.kim).

| path | holds |
|---|---|
| `cmd/` | the daemon, the setuid POSIX helper, the terminal client, backup and restore, the scenario runner |
| `internal/` | connectors, intake, agent runtime, approvals, security, policy, identity, memory, scheduler, HTTP |
| `.dependency/bluecollar` | [bluecollar](https://github.com/yeomyeonggeori/bluecollar), the bundled agent loop and the shared `agentcontract` |
| `.dependency/bluememo` |…
