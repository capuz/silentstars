---
repo: "bnomei/kirby-janitor"
name: "kirby-janitor"
description: "Kirby Plugin for running commands like cleaning the cache from within the Panel, PHP code, CLI or a cronjob"
readmeQualityOk: true
url: "https://github.com/bnomei/kirby-janitor"
homepage: "https://forum.getkirby.com/t/kirby3-janitor-plugin/23573"
language: "PHP"
languages: ["PHP"]
languagePcts: [91]
topics: ["cache", "job-runner", "cronjob", "button", "cli", "repl", "maintenance-mode", "backup", "command", "maintenance"]
stars: 93
forks: 10
openIssues: 1
closedIssues: 102
watchers: 4
contributors: 10
recentReleases: 0
createdAt: "2018-12-06T18:28:50Z"
lastCommitAt: "2026-11-26T15:24:06Z"
lastReleaseAt: "2018-12-29T18:46:46Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 29
maintainers: ["ampagent"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0c6a2374042b3c0020d3497818bd090c292e23760d7a793e1daf50bf5e6924f/bnomei/kirby-janitor"
---

# Kirby Janitor

Janitor is a Kirby CMS Plugin for running commands.

- It is a Panel Button!
- It has commands built-in for cleaning the cache, sessions, create zip-backup, pre-generate thumbs, open URLs, refresh the current Panel page and more.
- You can define your own commands (call API hooks, play a game, hack a server, ...)
- It can be triggered in your frontend code, with the official kirby CLI and a CRON.

## Install

Janitor 6 requires Kirby 6 and PHP 8.3 or newer. On Kirby 5, stay on Janitor 5 (`^5`). From your Kirby 6 project, install Janitor and its local CLI dependency with Composer:

```bash
composer require bnomei/kirby-janitor:^6
```

> **Warning**
>
> You need to install the CLI with composer into your project and not use the global version. Since Janitor depends on the CLI to be available, installing only the janitor plugin via submodules or via ZIP is NOT supported.

The Panel assets are included. To rebuild them, use Node 24+ and run `npm ci && npm run build`.

## Setup

### CLI Command

In any blueprint create a janitor field with your command, browse to that page in panel and press the button.
