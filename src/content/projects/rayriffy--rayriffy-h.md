---
repo: "rayriffy/rayriffy-h"
name: "rayriffy-h"
description: "The missing piece of nhentai (Now powered by Bun)"
url: "https://github.com/rayriffy/rayriffy-h"
homepage: "https://h.riffy.in.th"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["nsfw", "hentai", "nhentai", "doujinshi", "nanostores", "bun"]
stars: 118
forks: 20
openIssues: 2
closedIssues: 10
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2018-11-05T18:25:43Z"
lastCommitAt: "2026-06-28T06:54:11Z"
lastReleaseAt: "2019-12-12T18:23:40Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 91
undervaluedScore: 41
maintainers: ["rayriffy"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/156263428/94f3b280-1691-11eb-8cd6-61bee90abcda"
---

# Riffy H v7

A decentralized, self-hosted, modularized manga gallery viewer.

This project is a complete overhaul of Riffy H v6. Unlike v6, which was deeply integrated with a single source and made creating new data sources difficult, v7 is designed from the ground up to be modular. We have separated the web client entirely from the API server, enabling you to host the API server yourself and easily integrate multiple distinct data sources.

## Setting Up Your Own Server

1. Initialize a new project and install the `@riffyh/commons` package.

```bash
bun init
bun add @riffyh/commons
```

2. Create a server configuration file named `riffyh.config.ts`. Configure your server and the data sources you wish to add. You can refer to the [example](./example) for a complete server configuration.

3. Install the `@riffyh/server` package and start the server.

```bash
bun add @riffyh/server
bun run server
```

## Adding Your Server to the Web Client

1. Navigate to the [settings page](https://h.riffy.in.th/settings).

2. Add your server to the list of servers. You can also provide extra headers for your requests if your server requires authentication.

## Configuration

The following…
