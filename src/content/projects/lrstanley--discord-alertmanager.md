---
repo: "lrstanley/discord-alertmanager"
name: "discord-alertmanager"
description: "alertmanager silence management bot for Discord"
readmeQualityOk: true
url: "https://github.com/lrstanley/discord-alertmanager"
language: "Go"
languages: ["Go"]
languagePcts: [97]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-05-28T04:22:39Z"
lastCommitAt: "2026-11-22T11:46:37Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 47
undervaluedScore: 27
maintainers: ["lrstanley"]
openGraphImageUrl: "https://opengraph.githubassets.com/8dcb6eeae77e3ce41872bad2e29d62bfe8ecf950120f3ad1686c0811fe128c37/lrstanley/discord-alertmanager"
fundingLinks: ["GITHUB:https://github.com/lrstanley"]
discussionCount: 0
---

## :link: Table of Contents

  - [Why](#grey_question-why)
  - [Installation](#computer-installation)
    - [Container Images (ghcr)](#whale-container-images-ghcr)
    - [Source](#toolbox-source)
  - [Usage](#gear-usage)
    - [Slash Commands](#green_book-slash-commands)
    - [Message Commands](#speech_balloon-message-commands)
  - [Support &amp; Assistance](#raising_hand_man-support--assistance)
  - [Contributing](#handshake-contributing)
  - [License](#balance_scale-license)

## :grey_question: Why

I utilize the direct integration between **AlertManager** and **Discord**, via webhooks. I also
wanted a way of managing my silences directly from the same channels where those alerts were
being posted, thus why I created this bot. The bot allows you to both manage silences directly
via Discords [slash commands](https://support.discord.com/hc/en-us/articles/1500000368501-Slash-Commands-FAQ),
as well as interact with AlertManagers webhook messages, to silence specific alerts,
pre-configuring the silence with content from that specific alert.
