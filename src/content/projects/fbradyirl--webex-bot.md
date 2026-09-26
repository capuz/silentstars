---
repo: "fbradyirl/webex_bot"
name: "webex_bot"
description: "Python package for a Webex Bot based on websockets."
readmeQualityOk: true
url: "https://github.com/fbradyirl/webex_bot"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 92
forks: 56
openIssues: 5
closedIssues: 39
watchers: 10
contributors: 17
recentReleases: 0
createdAt: "2021-03-15T17:22:19Z"
lastCommitAt: "2026-09-26T08:46:16Z"
lastReleaseAt: "2022-03-11T15:48:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 47
maintainers: ["dependabot[bot]", "fbradyirl", "jgomezve"]
openGraphImageUrl: "https://opengraph.githubassets.com/431d2ade9e1b1246960d1de5bfe7ef51129ca8b5929876138027e73e921d2c10/fbradyirl/webex_bot"
---

# Introduction

> [!IMPORTANT]
> This repository is only sporadically maintained. Breaking API changes will be maintained on a best efforts basis.
>
> Collaborators are welcome, as are PRs for enhancements.
>
> Bug reports unrelated to API changes may not get the attention you want.

By using this module, you can create a [Webex][5] messaging bot quickly in just a couple of lines of code.

This module does not require you to set up an ngrok tunnel to receive incoming messages when behind a firewall or
inside a LAN. This package instead uses a websocket to receive messages from the Webex cloud.

## Features

* Uses the [websockets][1] module to receive incoming messages, thus avoiding the need to have a public IP or use
  incoming webhooks.
* Simply add 'commands' which are just strings which instruct the bot to perform some action and reply with some result.
* Allows for single or multi-post responses. This is useful if you want to reply with a lot of data, but it won't all
  fit in a single response.
* Restrict bot to certain users or domains.
* Uses the [webexpythonsdk][2] package to send back replies from the bot.

## 🚀 Getting started

---

### ✨ Sample Project

You can find…
