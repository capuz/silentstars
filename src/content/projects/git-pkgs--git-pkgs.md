---
repo: "git-pkgs/git-pkgs"
name: "git-pkgs"
description: " About  A git subcommand for analyzing package/dependency usage in git repositories over time"
url: "https://github.com/git-pkgs/git-pkgs"
homepage: "https://git-pkgs.dev"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["dependencies", "git", "git-commands", "package-management"]
stars: 163
forks: 10
openIssues: 11
closedIssues: 55
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2026-01-15T15:41:01Z"
lastCommitAt: "2026-06-28T10:36:51Z"
lastReleaseAt: "2026-01-26T16:03:10Z"
status: "thriving"
tags: ["needs_contributors", "funded"]
healthScore: 94
undervaluedScore: 30
maintainers: ["andrew", "dependabot[bot]", "abhinavgautam01"]
openGraphImageUrl: "https://opengraph.githubassets.com/91337f17d836666da3c35c6d5a9ba27e95d5f1159d1926d7e9de26092b040aba/git-pkgs/git-pkgs"
fundingLinks: ["GITHUB:https://github.com/andrew", "KO_FI:https://ko-fi.com/andrewnez", "BUY_ME_A_COFFEE:https://buymeacoffee.com/andrewnez"]
---

# git-pkgs

A git subcommand for tracking package dependencies across git history. Analyzes your repository to show when dependencies were added, modified, or removed, who made those changes, and why. This is a rewrite of the [original Ruby version](https://github.com/andrew/git-pkgs).

[Installation](#installation) · [Quick start](#quick-start) · [Commands](#commands) · [Plugins](#plugins) · [Configuration](#configuration) · [Contributing](#contributing)

## Why this exists

Your lockfile shows what dependencies you have, but it doesn't show how you got here, and `git log Gemfile.lock` is useless noise. git-pkgs indexes your dependency history into a queryable database so you can ask questions like: when did we add this? who added it? what changed between these two releases? has anyone touched this in the last year?

For best results, commit your lockfiles. Manifests show version ranges but lockfiles show what actually got installed, including transitive dependencies.

It works across many ecosystems (Gemfile, package.json, Dockerfile, GitHub Actions workflows) giving you one unified history instead of separate tools per ecosystem. The database lives in your `.git` directory…
