---
repo: "minter/rod_the_bot"
name: "rod_the_bot"
description: "A Bluesky bot to post game updates for NHL teams"
readmeQualityOk: true
url: "https://github.com/minter/rod_the_bot"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [99]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-10-20T18:53:25Z"
lastCommitAt: "2026-09-19T02:46:08Z"
lastReleaseAt: "2024-12-22T00:02:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 71
maintainers: ["minter", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/869c4f6956dce45a945a358a2341630c72c46f5bfbe0e0f734511ec538e913a0/minter/rod_the_bot"
---

# Rod The Bot

A Bluesky bot to post in-game updates for NHL games

## About This Project

Now that my primary social media home is [Bluesky](https://bsky.app), I wanted to bring in some in-game NHL updates into the timeline. This bot leverages the new [NHL API](https://github.com/Zmalski/NHL-API-Reference) to pull live game data, and post updates to Bluesky.

The project leverages my previous work with a Twitter bot to post automated goal calls to Twitter. It was written to power the Carolina Hurricanes Bluesky account [@canesgameday.bsky.social](https://bsky.app/profile/canesgameday.bsky.social), but should be configurable for accounts following any NHL team.

## Installation

You can install and run raw source code on your server, or use the Docker images (either remotely or by building locally). Remote Docker images are recommended unless you will actively be modifying/developing the software.

### Docker Compose - Remote Images (Easiest)

This method requires you to have [Docker](https://docs.docker.com/get-docker/) and Docker Compose installed, but does not require any of the source code to be located on your system.

1. Create a `.env` file ([see…
