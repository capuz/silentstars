---
repo: "kzcharm/qqbot-saki-chan"
name: "qqbot-saki-chan"
description: "a qq bot for csgo kz"
readmeQualityOk: true
url: "https://github.com/kzcharm/qqbot-saki-chan"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["nonebot2"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2024-06-26T08:29:22Z"
lastCommitAt: "2026-10-30T10:22:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 74
undervaluedScore: 65
maintainers: ["cinyan10"]
openGraphImageUrl: "https://opengraph.githubassets.com/76a677e19fe4776088157e10dac0813d70de66a8efc37a928475a69b3005fe83/kzcharm/qqbot-saki-chan"
---

# GOKZ Bot — QQ and Discord

One NoneBot application runs the official QQ and Discord adapters. Alconna defines the commands once; shared services fetch data and apply feature rules, while QQ uses Chinese Markdown/keyboards and Discord uses English embeds/buttons. The existing repository, image, Compose project, and SQLite path are retained.

## Discord quick start

1. Sign in with Steam at [GOKZ.TOP](https://gokz.top/settings/binding-code) and generate a binding code.
2. Send `/bind code:KZTOP…` to Sakiko. The code is case-sensitive and expires at the time shown on the website. The response is private.
3. Use `/help`, `/mode`, `/profile`, `/kz`, `/pb`, `/pr`, `/wr`, `/rank`, `/daily`, `/server`, `/rate`, or `/comment`.

Both platforms verify codes with `QQ_BOT_SECRET`. Discord bindings and mode preferences are stored locally under platform-qualified account IDs. This does not modify the website's Discord social links. Modes and daily map assignments are independent across platforms. Automatic voice compliments are QQ-only.

## Adapter configuration

Set `QQ_BOTS` and/or `DISCORD_BOTS` and optionally `BOT_PLATFORMS=qq,discord`. Omit `BOT_PLATFORMS` to enable configured accounts…
