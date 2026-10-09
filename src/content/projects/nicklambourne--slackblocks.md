---
repo: "nicklambourne/slackblocks"
name: "slackblocks"
description: ":game_die: Native language APIs for building messages using the Slack Block Kit API"
readmeQualityOk: true
url: "https://github.com/nicklambourne/slackblocks"
homepage: "https://nicklambourne.github.io/slackblocks/"
language: "Rust"
languages: ["Rust"]
languagePcts: [41]
topics: ["slack", "slack-bot", "slack-api", "python", "blocks", "typescript"]
stars: 78
forks: 27
openIssues: 0
closedIssues: 90
watchers: 2
contributors: 23
recentReleases: 0
createdAt: "2019-07-14T13:33:22Z"
lastCommitAt: "2026-10-09T10:51:04Z"
lastReleaseAt: "2024-01-12T00:58:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 55
maintainers: ["nicklambourne", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d600e39c7b733d7f36d41cf5a629befc1b01fe6af5a674443343a83d10f2df1/nicklambourne/slackblocks"
discussionCount: 2
---

# slackblocks <img src="https://github.com/nicklambourne/slackblocks/raw/master/docs/static/img/sb.png" align="right" width="250px"/>

> **Build Slack messages in Python, TypeScript, Go, Java, C#, Ruby, or Rust — without writing JSON by hand.**

Anyone who has built a non-trivial Slack message knows the drill: a wall of nested
[Block Kit](https://docs.slack.dev/block-kit/) JSON, five levels deep, where a typo'd
field name or an over-long string sails silently through your code and only blows up
when Slack rejects the API call. `slackblocks` replaces that JSON with typed objects
that assemble it for you — and that complain at construction time, in your editor and
your tests, rather than in production.

## Why `slackblocks`?

- **Concise** — `SectionBlock("Hello, *world*!")` / `SectionBlock.builder().markdownText("Hello, *world*!").build()` / `new SectionBlock(text: "Hello, *world*!")`
  instead of a ten-line JSON object.
- **Validated up front** — character limits, required fields, mutually-exclusive options,
  and element-type restrictions are enforced when you construct the block, so you find
  out *before* hitting Slack's API.
- **Typed** — full type hints and `py.typed` in…
