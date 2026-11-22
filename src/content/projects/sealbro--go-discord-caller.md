---
repo: "sealbro/go-discord-caller"
name: "go-discord-caller"
description: "Self-hosted Discord shot caller & voice relay bot — broadcasts one caller's voice live to many channels and servers. Go, mix-minus mixing, DAVE E2EE."
readmeQualityOk: true
url: "https://github.com/sealbro/go-discord-caller"
homepage: "https://go-discord-caller.sealbro.dev/"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["bot", "caller", "discord", "go", "voice", "free", "discord-bot", "discord-voice", "gaming", "golang"]
stars: 20
forks: 4
openIssues: 0
closedIssues: 8
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-03-21T07:20:35Z"
lastCommitAt: "2026-11-22T11:50:10Z"
lastReleaseAt: "2026-04-22T18:58:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 55
maintainers: ["sealbro"]
openGraphImageUrl: "https://opengraph.githubassets.com/70b06ec2471d90d608d9fc89e8a53cb24977ae7bbf7acf651b291674a3a20257/sealbro/go-discord-caller"
fundingLinks: ["GITHUB:https://github.com/sealbro"]
discussionCount: 2
---

# go-discord-caller

A Go Discord bot that captures voice audio and relays it live to every bound speaker bot — across one or multiple Discord servers simultaneously. Supports single-caller broadcast and full multi-channel conference modes with mix-minus audio mixing.

If this project is useful to you, please consider giving it a ⭐ on GitHub — it helps others discover the project and motivates continued development.

## Try it out

Don't want to host anything? Click the **Try the bot** badge above to invite the hosted owner bot to your server, then follow [Discord app setup → step 2](#2-finish-the-bot-setup) to bind roles and add speaker bots via `/setup`.

> The hosted bot is ready to use — invite it and run `/setup`. It is free and runs at
> the maintainer's expense, so it has a limited number of speakers, and at peak times,
> when load is high, its capacity may be limited. Want unlimited speakers or full
> control? Self-host it with your own owner + speaker bot tokens.

## How it works

[Voice Flow](https://github.com/sealbro/go-discord-caller/blob/HEAD/docs/VOICE_FLOW.md) – detailed signal flow and component interaction diagrams
