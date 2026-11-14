---
repo: "electricsheephq/heartbeat2"
name: "heartbeat2"
description: "Give your Hermes agent a working life between messages: wakes, watchers and roles, within daily turn and message caps."
readmeQualityOk: true
url: "https://github.com/electricsheephq/heartbeat2"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-agents", "heartbeat", "hermes-agent", "hermes-plugin", "proactive-agents", "ai-agent", "hermes"]
stars: 15
forks: 3
openIssues: 30
closedIssues: 72
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-11T16:31:30Z"
lastCommitAt: "2026-11-14T10:45:17Z"
lastReleaseAt: "2026-10-13T10:23:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 92
undervaluedScore: 52
maintainers: ["100yenadmin"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1414544284/230d73a7-00ed-4c47-8dbd-deb09a625c1a"
---

# HeartBeat 2.0

**Give your Hermes agent a working life between messages: wakes, watchers and roles, within daily turn and message caps.**

No model runs until there's work: plain code checks every wake and watcher, and the agent gets a turn only when something is due or a watcher's condition is met. `/pulse` shows what's next; `/pulse why <id>` lists an item's recent triggers with their states and reasons.

▶ **[Watch the demo](https://x.com/ElectricSheepIO/status/2119811070089138455)**

https://github.com/user-attachments/assets/135d08af-36e8-46d5-bc7f-7ac5e5326c03

```bash
hermes plugins install electricsheephq/heartbeat2 --enable
```

It needs Hermes ≥ 0.21.6 with a messaging gateway (Telegram, Discord, Slack, WhatsApp and the other gateway platforms) on macOS or Linux, with Python ≥ 3.11. No API keys, and nothing to install beyond what Hermes already ships. Next, allow it to start turns and try it:

## Try it

1. **Allow it to start turns.** Add this Hermes core key to your profile's `config.yaml` (it is kept outside the plugin's own settings on purpose), restart the messaging gateway, and send `/pulse` in your DM. It should say injection is allowed; if not, it shows the…
