---
repo: "dam-agents/dam"
name: "dam"
description: "Run long lived AI agents in isolated pods with runtime credential injection, scheduled triggers, and Slack native access."
readmeQualityOk: true
url: "https://github.com/dam-agents/dam"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [72]
topics: ["hacktoberfest", "innersource"]
stars: 33
forks: 13
openIssues: 245
closedIssues: 2976
watchers: 1
contributors: 22
recentReleases: 7
createdAt: "2026-04-30T09:34:44Z"
lastCommitAt: "2026-10-21T08:29:32Z"
lastReleaseAt: "2026-10-12T08:29:13Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 50
maintainers: ["JanPokorny", "dam-application[bot]", "xjacka"]
openGraphImageUrl: "https://opengraph.githubassets.com/f506d00fb2ead855239ab030b8b2ea25c97fb9ed3c230804dcb09892f5954b3f/dam-agents/dam"
discussionCount: 3
---

The open platform for running AI agents: any harness, any model, on Kubernetes

  DAM provides the infrastructure for running agents securely and at scale:
  isolated sandboxes, credential isolation, durable workspaces, orchestration,
  scheduled and Slack based triggers, and cost visibility.

  ·

---

## Why DAM?

Every team running agents ends up building the same infrastructure.
DAM provides it as a platform.

* **🛡️ Security enforced by infrastructure.** Agents run in isolated sandboxes with no credentials or cluster access.
  A paired gateway injects credentials and is the only network exit, enforced by Kubernetes NetworkPolicy.
  Risky actions can require human approval.

* **🔋 Always on.** Agents run in the cluster and continue working after your laptop closes.
  Persistent workspaces preserve files, memory, and learned context across restarts and long running sessions.

* **🤝 Built for teams.** Agents can live in Slack or Telegram and be shared across teammates.
  The web UI and `dam` CLI connect to the same live sessions.

* **🧠 Any harness, any model.** Use Claude Code, Codex, Pi Agent, Bob, GitHub Copilot, or any ACP compatible runtime with your own model…
