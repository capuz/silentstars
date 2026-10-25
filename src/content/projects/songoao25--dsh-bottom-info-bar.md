---
repo: "songoao25/dsh-bottom-info-bar"
name: "dsh-bottom-info-bar"
description: "DeepSeek Harness (DSH) plugin: replaces the stats row under the composer with provider and model, balance or subscription quota, peak/off-peak pricing, and session spend."
readmeQualityOk: true
url: "https://github.com/songoao25/dsh-bottom-info-bar"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["balance", "deepseek-harness", "dsh", "plugin", "usage-tracking", "web", "deepseekharness", "dsh-plugin", "dsh-plugins", "awesome-dsh-plugin"]
stars: 52
forks: 4
openIssues: 0
closedIssues: 13
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-08-15T00:39:20Z"
lastCommitAt: "2026-10-25T02:47:58Z"
lastReleaseAt: "2026-08-20T11:24:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 37
maintainers: ["songoao25"]
openGraphImageUrl: "https://opengraph.githubassets.com/971f19d5ad7a0f044a8ee1571a1676e780685fa0202699ec40aa96ff65ef9d3f/songoao25/dsh-bottom-info-bar"
discussionCount: 0
---

# Bottom Info Bar

**English** | [**中文**](https://github.com/songoao25/dsh-bottom-info-bar/blob/HEAD/README.zh-CN.md)

### Join the DeepThinking beta group

Bugs, questions and feature requests get answered fastest in the group — scan the code, say what you hit or what you want next, and it moves up the queue. The QR code expires periodically; open an issue if it has stopped working.

A DeepSeek Harness plugin that adds an account information row under the composer: provider and model, real balance or subscription quota, peak/off-peak pricing, and what this session has cost.

## What it shows

The bar follows the active session and picks one of three readings per provider (mutually exclusive, nothing to switch by hand): **balance** shows the real balance from the provider's own API, **subscription quota** shows each quota window's remaining allowance with its reset countdown (an exhausted window stays visible at 0% instead of disappearing, flagged low), and **cloud billing** shows this month's real spend from the official billing API. On top of that come four spend tallies — this session, today, last 30 days, all time — plus extras such as time and custom text. All four come from…
