---
repo: "openclaw/openclaw-rtt"
name: "openclaw-rtt"
description: "RTT timing measurements across OpenClaw npm releases."
url: "https://github.com/openclaw/openclaw-rtt"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 25
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 53
recentReleases: 0
createdAt: "2026-05-01T08:29:22Z"
lastCommitAt: "2026-06-25T01:38:29Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 89
undervaluedScore: 39
maintainers: ["github-actions[bot]", "vincentkoc"]
openGraphImageUrl: "https://opengraph.githubassets.com/c10bba4434c90d304334961309277f7a4f057afe47b19bd2ab036a25e4e40723/openclaw/openclaw-rtt"
fundingLinks: ["GITHUB:https://github.com/openclaw"]
---

# OpenClaw RTT

**Channel round-trip timing data for OpenClaw.** This repo stores normalized QA results and publishes the dashboard below; the harness itself lives in `openclaw/openclaw`.

Each row measures how long a real channel takes to receive an OpenClaw agent reply after the test driver sends a controlled message. So yes: a Discord row is the agent-turn reply time observed back in Discord; Telegram, Slack, WhatsApp, and future channels measure the same loop in their own channel/scenario.

RTT covers the whole observed path, not just model time:

```text
channel test driver -> OpenClaw channel transport -> gateway/agent turn -> outbound channel send -> reply observed by driver
```

That path can include channel API latency, polling/webhook timing, gateway routing, provider turn time, outbound send, and driver observation delay. `p50` is the median successful sample; `p95` is the tail sample. RSS appears when the importing workflow collected process resource metrics around the sampled command; older release rows stay blank until an RSS backfill run updates only the resource fields.

Treat cross-channel numbers as coverage and regression signal, not a pure transport ranking.…
