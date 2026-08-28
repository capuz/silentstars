---
repo: "nicklambourne/slackblocks"
name: "slackblocks"
description: ":game_die: Native language APIs for building messages using the Slack Block Kit API"
readmeQualityOk: true
url: "https://github.com/nicklambourne/slackblocks"
homepage: "https://nicklambourne.github.io/slackblocks/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [62, 38]
topics: ["slack", "slack-bot", "slack-api", "python", "blocks", "typescript"]
stars: 75
forks: 27
openIssues: 0
closedIssues: 90
watchers: 2
contributors: 23
recentReleases: 0
createdAt: "2019-07-14T13:33:22Z"
lastCommitAt: "2026-08-28T15:34:26Z"
lastReleaseAt: "2024-01-12T00:58:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 55
maintainers: ["nicklambourne", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/38c7f92065f56f2912bfa1106a18c3ae4c87516db7bb518fa0bc1ebc33767b42/nicklambourne/slackblocks"
discussionCount: 2
---

# slackblocks <img src="https://github.com/nicklambourne/slackblocks/raw/master/docs/static/img/sb.png" align="right" width="250px"/>

> **Build Slack messages in Python or TypeScript — without writing JSON by hand.**

Anyone who has built a non-trivial Slack message knows the drill: a wall of nested
[Block Kit](https://docs.slack.dev/block-kit/) JSON, five levels deep, where a typo'd
field name or an over-long string sails silently through your code and only blows up
when Slack rejects the API call. `slackblocks` replaces that JSON with typed objects
that assemble it for you — and that complain at construction time, in your editor and
your tests, rather than in production.

## Why `slackblocks`?

- **Concise** — `SectionBlock("Hello, *world*!")` / `SectionBlock().text("Hello, *world*!").build()`
  instead of a ten-line JSON object.
- **Validated up front** — character limits, required fields, mutually-exclusive options,
  and element-type restrictions are enforced when you construct the block, so you find
  out *before* hitting Slack's API.
- **Typed** — full type hints and `py.typed` in Python; strict types in TypeScript that
  reject typo'd properties at compile time.
- **Plays…
