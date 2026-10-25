---
repo: "LiteLDev/LeviOptimize"
name: "LeviOptimize"
description: "A performance optimization plugin for Minecraft Bedrock Server"
readmeQualityOk: true
url: "https://github.com/LiteLDev/LeviOptimize"
language: "C++"
languages: ["C++"]
languagePcts: [98]
topics: ["levilamina", "bedrock-dedicated-server", "bedrock-dedicated-server-modding", "bedrock-dedicated-server-plugins"]
stars: 66
forks: 6
openIssues: 8
closedIssues: 15
watchers: 1
contributors: 14
recentReleases: 0
createdAt: "2023-12-12T13:34:19Z"
lastCommitAt: "2026-10-25T09:00:56Z"
lastReleaseAt: "2024-04-05T10:42:08Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 68
undervaluedScore: 31
maintainers: ["ShrBox", "futrime", "zimuya4153"]
openGraphImageUrl: "https://opengraph.githubassets.com/f93c9957adf3431f4f5f28835661df83a6794c81863d512a43e3252f0b3c43a0/LiteLDev/LeviOptimize"
---

# LeviOptimize

LeviOptimize is a performance mod for Minecraft Bedrock Dedicated Server and the Bedrock client, built on
[LeviLamina](https://github.com/LiteLDev/LeviLamina). It targets low server TPS by replacing hot native paths with
cheaper ones: chunk publishing, entity broadcasts, redstone updates, locator labels, random ticks and async worker
scheduling.

Features are independent: each one has its own switch and can be enabled or disabled at runtime with `/lo`.

## Table of Contents

- [Security](#security)
- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
- [Features](#features)
- [Diagnostics](#diagnostics)
- [Building from source](#building-from-source)
- [Contributing](#contributing)
- [License](#license)

## Security

LeviOptimize is an independent project, not affiliated with or supported by Mojang or Microsoft. It is open source and
free to use. Use it at your own risk; the authors are not liable for any damage to servers or data.

## Installation

### Using Lip

```sh
lip install github.com/LiteLDev/LeviOptimize
```

### Manual installation

1. Download the latest release from the [Releases…
