---
repo: "ForestAdmin/forest-express"
name: "forest-express"
description: "🧱 Dependency of Express Lianas for Forest Admin"
readmeQualityOk: true
url: "https://github.com/ForestAdmin/forest-express"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [92]
topics: ["admin", "admin-dashboard", "administration", "forest", "package", "expressjs"]
stars: 69
forks: 21
openIssues: 7
closedIssues: 45
watchers: 9
contributors: 50
recentReleases: 0
createdAt: "2016-04-14T10:05:50Z"
lastCommitAt: "2026-10-30T10:23:01Z"
lastReleaseAt: "2020-04-14T12:09:11Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 86
undervaluedScore: 36
maintainers: ["forest-bot", "matthv", "Scra3"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b7a209365a6f362c57e39e8b299409930ccd592f978db38a3f1ca3bcd0bce3d/ForestAdmin/forest-express"
---

> [!IMPORTANT]
> **This is the shared core of the Forest v1 Express agents, in maintenance mode.** It receives fixes but no new features.
> **Starting a new project?** Use [agent-nodejs](https://github.com/ForestAdmin/agent-nodejs), the current Node.js agent.
> **Already on a v1 Express agent?** Follow the [v1 to v2 migration guide](https://docs.forest.app/guides/migration/from-v1/overview).

## You probably don't need to install this package

`forest-express` is not used on its own. It holds the routes, authentication, permissions and serialization shared by the two v1 Express agents, which depend on it:

| Your ORM | Install |
|---|---|
| Sequelize (SQL) | [forest-express-sequelize](https://github.com/ForestAdmin/forest-express-sequelize) |
| Mongoose (MongoDB) | [forest-express-mongoose](https://github.com/ForestAdmin/forest-express-mongoose) |

Setup instructions are in the README of each one.

## Requirements

| | |
|---|---|
| Node.js | `>= 16` (CI runs on 24) |

## Documentation

| | |
|---|---|
| Install a v1 Express agent | https://docs.forest.app/legacy/javascript-agents/how-tos/setup/install |
| v1 reference guide |…
