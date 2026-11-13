---
repo: "openclaw/slacrawl"
name: "slacrawl"
description: "cli terminal app for slack with sqlite backend"
readmeQualityOk: true
url: "https://github.com/openclaw/slacrawl"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["cli", "openclaw", "slack", "slack-api", "slackbot", "terminal"]
stars: 238
forks: 29
openIssues: 2
closedIssues: 25
watchers: 2
contributors: 30
recentReleases: 0
createdAt: "2026-03-07T23:49:16Z"
lastCommitAt: "2026-11-13T11:27:09Z"
lastReleaseAt: "2026-05-18T06:52:58Z"
status: "thriving"
tags: ["funded"]
healthScore: 97
undervaluedScore: 32
maintainers: ["vincentkoc", "steipete", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1175609689/4cd1e0ab-b0d8-49b8-b81e-8bbb5a9dfee3"
fundingLinks: ["GITHUB:https://github.com/vincentkoc", "BUY_ME_A_COFFEE:https://buymeacoffee.com/vincentkoc"]
---

# slacrawl 💾 — Your Slack history, on your terms.

`slacrawl` mirrors Slack workspace data into local SQLite for full-text search, terminal browsing, reporting, and read-only SQL. It is for people who want a queryable Slack archive that stays under their control.

## Install

Homebrew is the shortest path on macOS or Linux:

```sh
brew install openclaw/tap/slacrawl
```

The tap can trail the newest release. [GitHub Releases](https://github.com/openclaw/slacrawl/releases/latest) provides signed and notarized macOS archives, Linux archives, and Debian/RPM packages for AMD64 and ARM64.

To build the latest source, install Go 1.27.0 or newer, then run:

```sh
git clone https://github.com/openclaw/slacrawl.git
cd slacrawl
make build
./bin/slacrawl --help
```

macOS binaries require macOS 13 or newer.

The repository also includes a [`Dockerfile`](https://github.com/openclaw/slacrawl/blob/HEAD/Dockerfile) for container builds.

## Quick start

Set `SLACK_BOT_TOKEN`, or `SLACK_USER_TOKEN` for user-only API sync, to a token that can read the workspace. Then replace the example workspace and channel IDs:

```sh
slacrawl init --workspace T01234567
slacrawl doctor
slacrawl sync --source bot…
