---
repo: "fsvreddit/bot-bouncer"
name: "bot-bouncer"
description: "A Dev Platform rewrite of BotDefense"
readmeQualityOk: true
url: "https://github.com/fsvreddit/bot-bouncer"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["devvit", "devvit-app"]
stars: 31
forks: 25
openIssues: 11
closedIssues: 447
watchers: 5
contributors: 3
recentReleases: 0
createdAt: "2024-11-13T08:24:43Z"
lastCommitAt: "2026-11-05T14:05:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 67
maintainers: ["fsvreddit", "CR29-22-2805"]
openGraphImageUrl: "https://opengraph.githubassets.com/4fa4ac900c89bfdb3f2013399b36c2f046a265b0bbc115869ef44ee12edba0d9/fsvreddit/bot-bouncer"
---

Bot Bouncer is a Dev Platform app that bans bots and other harmful accounts from subreddits that use it. It is heavily inspired by BotDefense, which wrapped up operations in 2023.

Bots are classified via submissions on [/r/BotBouncer](https://www.reddit.com/r/BotBouncer/), via a mix of automated and human classification.

If you add Bot Bouncer to your sub via the Dev Platform app directory, it will watch for all new submissions and comments from users, and if the account is classified as a bot by the app, it will be banned or the content removed/filtered, depending on settings.

Bot Bouncer is open source. [You can find the source code on GitHub here](https://github.com/fsvreddit/bot-bouncer). Bot Bouncer has a [wiki] that describes in more detail how the app operates.

## The ban process

If a user creates a post or comment on your subreddit and the user is classified as a bot already, the post or comment will be removed immediately and the user banned. Newly classified bots will also be banned if they have posted or commented on your subreddit within the past week shortly after being classified.

Mods can choose to configure the app to report or filter users rather than ban…
