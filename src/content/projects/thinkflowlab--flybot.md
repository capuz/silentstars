---
repo: "ThinkFlowLab/FlyBot"
name: "FlyBot"
description: "Carry your bot messages on the fly"
readmeQualityOk: true
url: "https://github.com/ThinkFlowLab/FlyBot"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 18
forks: 5
openIssues: 47
closedIssues: 416
watchers: 0
contributors: 8
recentReleases: 7
createdAt: "2026-10-14T06:34:33Z"
lastCommitAt: "2026-10-24T08:19:23Z"
lastReleaseAt: "2026-10-23T05:36:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 54
maintainers: ["Birfy", "hsliuustc0106", "HugoXK"]
openGraphImageUrl: "https://opengraph.githubassets.com/20627ede0086fc8d731736cd3d25156232dc534517a4d18804270b1947b2c854/ThinkFlowLab/FlyBot"
---

FlyBot is three plugins on top of a pinned [DS Bot](https://github.com/Fei2411/DeepSeek-Bot) core for
[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness):

- **`@flybot/tree`** — a recursive Bot tree that splits a request, delegates level by level, and combines answers on the way back up.
- **`@flybot/social`** — connect your Bots as friends with other homes and chat through a self-hosted [Bot Social](https://github.com/Birfy/bot-social) server, with owner approvals.
- **`@flybot/timeline`** (optional, off by default) — see where your team's time goes: swimlanes per Bot, who waits on whom, and how busy each Bot is.

## Features

### Tree plugin (`@flybot/tree`)

Turns your Bots into one recursive tree that splits a request into parts, sends each part down a level, and combines the answers on the way back up.

*Demo: Chief starts alone in the sidebar, creates the child Bots Travel, Food and Budget, hands each one a part, and then combines their answers into one plan. Some waiting is sped up.* [Watch the full video (MP4)](https://github.com/ThinkFlowLab/FlyBot/blob/HEAD/docs/images/demo-tree.mp4)

- **One root.** The tree's root is the Main Bot (Chief); no new bot is…
