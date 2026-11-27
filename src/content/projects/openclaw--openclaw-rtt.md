---
repo: "openclaw/openclaw-rtt"
name: "openclaw-rtt"
description: "RTT timing measurements across OpenClaw npm releases."
readmeQualityOk: true
url: "https://github.com/openclaw/openclaw-rtt"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 35
forks: 9
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 25
recentReleases: 0
createdAt: "2026-05-01T08:29:22Z"
lastCommitAt: "2026-11-27T12:57:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 39
maintainers: ["github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5caab8141c750f46b2f12c9683361ce7b1efbbe105914ef7ebe330d8c9e1bab2/openclaw/openclaw-rtt"
fundingLinks: ["GITHUB:https://github.com/openclaw"]
---

# OpenClaw RTT

**Channel round-trip timing data for OpenClaw.** This repo stores normalized QA results and publishes the dashboard below; the harness itself lives in `openclaw/openclaw`.

Automated imports publish measurements and dashboard updates through pull requests, then verify the squash merge before reporting success. Report jobs share one writer queue; RSS backfills publish each completed version separately. If a workflow reports a retained branch or PR, resolve that report before rerunning from `main`: later imports hold rather than overwrite its measurements.

Each row measures how long a real channel takes to receive an OpenClaw agent reply after the test driver sends a controlled message. So yes: a Discord row is the agent-turn reply time observed back in Discord; Telegram, Slack, WhatsApp, and future channels measure the same loop in their own channel/scenario.

RTT covers the whole observed path, not just model time:

```text
channel test driver -> OpenClaw channel transport -> gateway/agent turn -> outbound channel send -> reply observed by driver
```
