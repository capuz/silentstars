---
repo: "m1sk9/babyrite"
name: "babyrite"
description: "A lightweight, fast citation message Discord bot."
readmeQualityOk: true
url: "https://github.com/m1sk9/babyrite"
homepage: "https://babyrite.m1sk9.dev/"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["discord-bot", "rust"]
stars: 5
forks: 1
openIssues: 7
closedIssues: 41
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-08-27T03:50:17Z"
lastCommitAt: "2026-07-30T06:08:52Z"
lastReleaseAt: "2024-01-20T06:09:05Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 95
undervaluedScore: 84
maintainers: ["renovate[bot]", "m1sk9", "m1sk9-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a3a0ac1d8546b1c30ee784bd2225509c08faafd1b549689d02edf594e639664f/m1sk9/babyrite"
fundingLinks: ["GITHUB:https://github.com/m1sk9"]
discussionCount: 3
---

# babyrite

**babyrite** is a lightweight, fast citation message Discord bot.

```shell
# Latest Release
docker pull ghcr.io/m1sk9/babyrite:latest

# Minor Release
docker pull ghcr.io/m1sk9/babyrite:v1

# Specific Release
docker pull ghcr.io/m1sk9/babyrite:v1.0.0
```

[_API Support: requires Discord API v10_](https://discord.com/developers/docs/reference#api-versioning)

[babyrite API Documentation](https://babyrite.api.m1sk9.dev)

## Features

- **Message Previews**: babyrite parses Discord message links and displays messages as embedded content.
- **GitHub Permalink Expansion**: babyrite can expand GitHub permalinks and display the content of the linked file.
- **Lightweight**: babyrite uses [distroless](https://github.com/GoogleContainerTools/distroless) as its base image and
  consists of a very lightweight Docker Image.
- **Fast**: babyrite is developed in Rust and is very fast!
- **OSS**: babyrite is open-source and licensed under the Apache License 2.0. It also provides a way to host it yourself as
  well as publish it as OSS.
- **Easy to Use**: babyrite is very easy to use and can be deployed in seconds.

### Message Previews

Detects Discord message links…
