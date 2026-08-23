---
repo: "Tosuke-sama/DesktopFriends"
name: "DesktopFriends"
description: " A desktop companion for Live2D driven by agent system."
readmeQualityOk: true
url: "https://github.com/Tosuke-sama/DesktopFriends"
homepage: "https://tosuke-sama.github.io/DesktopFriends/"
language: "Vue"
languages: ["Vue", "TypeScript"]
languagePcts: [51, 44]
stars: 28
forks: 6
openIssues: 2
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-12-13T15:35:09Z"
lastCommitAt: "2026-08-23T04:09:42Z"
lastReleaseAt: "2026-03-01T15:04:06Z"
status: "thriving"
tags: []
healthScore: 68
undervaluedScore: 23
maintainers: ["Tosuke-sama"]
openGraphImageUrl: "https://opengraph.githubassets.com/30f21f20c4960054e46786943e680fb5458a59d8b34179eb9c23cc55c5ba593c/Tosuke-sama/DesktopFriends"
---

# DesktopFriends / TableFri

> [中文](https://github.com/Tosuke-sama/DesktopFriends/blob/HEAD/README_zh.md)

</p>

A cross-platform AI-powered Live2D desktop pet for **desktop (macOS)** and **mobile (Android)**. Beyond LLM conversations and LAN pet networking, TableFri gives the pet a sense of time through an agent-managed schedule and a local heartbeat, allowing it to plan and initiate interactions instead of only replying.

Turn your old phone into an AI companion that lives on your desk.

## Demo

Thanks to [@Carbon](https://github.com/CoderSerio) for the Live2D model — it's adorable!

  

## Highlight: From Reactive Chat to Proactive Companionship

Most AI characters wait for the user to speak first. TableFri's **Timemap system** lets the agent schedule semantic tasks, while a local heartbeat wakes it when an entry becomes due:

```text
“Remind me to drink water at 3pm”
        ↓
Agent creates a 15:00 timemap entry
        ↓
Local heartbeat checks every 60 seconds (no token cost per check)
        ↓
Entry becomes due → Agent acts in character → Chat bubble appears proactively
```

The same mechanism supports user reminders and autonomous greetings or break prompts. One-time…
