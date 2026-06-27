---
repo: "jimmy-guzman/gitzy"
name: "gitzy"
description: "Conventional commits and branch CLI"
url: "https://github.com/jimmy-guzman/gitzy"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["conventional-commits", "cli", "git", "commitlint", "branch", "commits"]
stars: 13
forks: 2
openIssues: 1
closedIssues: 14
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2021-01-16T17:59:56Z"
lastCommitAt: "2026-06-27T00:37:12Z"
lastReleaseAt: "2021-05-06T23:45:19Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 91
undervaluedScore: 71
maintainers: ["jimmy-guzman", "semantic-release-bot", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b29aacc3b6e7cb3e117f171d52bdd8e1629f4219a70c18803899c5eca8a7c165/jimmy-guzman/gitzy"
---

# gitzy 🪄

> [Conventional commits][conventional-commits] and branch CLI

  <sub>Recorded with <a href="https://github.com/MrMarble/termsvg">termsvg</a> (glyphs look better IRL)</sub>
</p>

![actions][actions-badge]

## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [Subcommands](#subcommands)
- [Configuration](#configuration)
- [Config Options](#config-options)

## Features

- Interactive conventional commit flow (`type`, `scope`, `subject`, `body`, `breaking`, `issues`)
- Branch name generation from conventional commit prompts
- Partial commitlint configuration support
- Config validation via schema
- Multiple breaking-change formats (`!`, `footer`, `both`)
- Flexible emoji control (`emoji.enabled` config or `GITZY_NO_EMOJI` env var)
- Customizable type descriptions and emojis
- Dynamic scopes and types (string shorthand or full `{ name, description }` objects)
- Jira and GitHub issue reference patterns
- Co-author support via `--co-author`
- Sign-off (DCO) support via `--signoff` / `-s` (derives your git identity, or pass an override)
- Retry (`--retry`), dry-run (`--dry-run`), amend (`--amend`), and hook (`--hook`) modes
- JSON output (`--json`) for scripting…
