---
repo: "nadeko-bot/nadekobot"
name: "nadekobot"
description: "NadekoBot is an open source discord bot."
readmeQualityOk: true
url: "https://github.com/nadeko-bot/nadekobot"
homepage: "https://nadeko.bot"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 80
forks: 31
openIssues: 1
closedIssues: 18
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2025-02-22T04:38:19Z"
lastCommitAt: "2026-10-24T05:59:29Z"
lastReleaseAt: "2025-03-19T20:29:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 54
maintainers: ["konnokai"]
openGraphImageUrl: "https://opengraph.githubassets.com/de8b40c0c3ccb8fad35f733182f2c851c9499d20097079a6c90705528b29bebe/nadeko-bot/nadekobot"
---

# NadekoBot

NadekoBot is an open source Discord bot. It is written in C# and is built on .NET 8.

If you want to run your own instance of NadekoBot, please check out the [Self hosting Guides and Docs](https://docs.nadeko.bot).

If you have any questions, please visit our [Discord support server](https://discord.nadeko.bot).

## Installation

### Default option

You may want to consider using [upeko](https://github.com/nadeko-bot/upeko/releases) if you want to run bot on your PC.+

### Hosting on a linux server

If you want your bot to be online 24/7, you should [host it on a linux vps](https://docs.nadeko.bot/guides/linux-guide).

### Docker

There is an official Docker image for a [simple setup](https://docs.nadeko.bot/guides/docker-guide/)
Short version:
  ```sh
    docker run -d --name nadeko ghcr.io/nadeko-bot/nadekobot:v6 -e bot_token=YOUR_TOKEN_HERE -v "./data:/app/data" && docker logs -f --tail 500 nadeko
  ```

## Contributing to NadekoBot

We love your input! We want to make contributing to this project as easy as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

###…
