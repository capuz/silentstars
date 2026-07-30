---
repo: "bones-bones/hellfall"
name: "hellfall"
description: "It's the hellfall search engine + hellscube related content"
readmeQualityOk: true
url: "https://github.com/bones-bones/hellfall"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 5
forks: 6
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 6
recentReleases: 3
createdAt: "2023-07-22T21:47:47Z"
lastCommitAt: "2026-07-30T06:09:03Z"
lastReleaseAt: "2026-06-20T02:21:56Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 100
maintainers: ["bones-bones", "dracofulmen"]
openGraphImageUrl: "https://opengraph.githubassets.com/47f488624f91efe242673fddac385ee8b4def928f97f09149571574960dfba2c/bones-bones/hellfall"
---

# It's hellfall

Like scryfall but for Hellscube. Also other stuff.

This is a yarn workspace monorepo

## [hellfall frontend UI](https://github.com/bones-bones/hellfall/blob/HEAD/packages/frontend/)

Core hellfall application

## [server](https://github.com/bones-bones/hellfall/blob/HEAD/packages/server/)

Serverless Discord OAuth login. Deploy to Cloud Run (or similar); set `REACT_APP_AUTH_API_URL` in the main app to show “Login with Discord” in the header.

## [shared](https://github.com/bones-bones/hellfall/blob/HEAD/packages/shared/)

The types, glue, and data that is used by the UI and server

## ["backend"](https://github.com/bones-bones/hellfall/blob/HEAD/packages/backend/)

Not the true backend, but this folder handles all the fetching, parsing, and transforming from the google sheet.

## [TODO](https://github.com/bones-bones/hellfall/blob/HEAD/TODO.md)

todo list

# Getting started/How to guides

You want to contribute? Great!

## Onetime setup

1. Download [VS Code](https://code.visualstudio.com/download), it is a great dev environment
2. Install [Node.js 20](https://nodejs.org/) (see `.node-version` / `.nvmrc`). Use `nvm use`, `fnm use`, or `asdf install` in the repo…
