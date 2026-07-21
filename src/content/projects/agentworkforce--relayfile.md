---
repo: "AgentWorkforce/relayfile"
name: "relayfile"
description: "Queue-first virtual filesystem-over-REST that ingests noisy external webhooks, projects a durable file tree, and performs conflict-safe   writeback with retries, dead-lettering, and replay."
readmeQualityOk: true
url: "https://github.com/AgentWorkforce/relayfile"
homepage: "https://agentrelay.com/file"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [59, 31]
stars: 7
forks: 0
openIssues: 25
closedIssues: 61
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-02-17T14:48:17Z"
lastCommitAt: "2026-07-21T06:12:03Z"
lastReleaseAt: "2026-04-17T12:01:31Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 52
maintainers: ["khaliqgant", "actions-user", "willwashburn"]
openGraphImageUrl: "https://opengraph.githubassets.com/446b3c242c8d6cc04a9aa3e506811522c78587a127e1514928d4adb9e799053f/AgentWorkforce/relayfile"
---

</p>

**The event layer for AI agents.**

Your SaaS tools are always firing events. When a Linear issue is created, a Notion page edited, or a GitHub PR opened — something should react. But every provider fires webhooks differently: different payload shapes, different auth schemes, different retry semantics. Building that normalization for each provider is the plumbing nobody wants to write.

Relayfile normalizes webhooks from Linear, Notion, GitHub, Slack, HubSpot, Salesforce, and the rest of your SaaS stack into a consistent, ACL'd file tree, then delivers them to your agents. Agents wake up to a ready filesystem, read what changed, and write back — using `cat`, `grep`, and file-write operations they already know. One integration point. Zero webhook parsing.

LLMs are far better at reading files than calling typed tools — the file system is the most-trained-on API in existence. Relayfile leans on that instead of fighting it.

```bash
$ ls mount/
github  linear  notion  slack

$ cat mount/linear/issues/AGE-12.json
{ "identifier": "AGE-12", "title": "Fix login bug", "state": "Todo", ... }

$ echo '{"description":"Updated by reviewer agent"}' \
    > mount/linear/issues/AGE-12.json…
