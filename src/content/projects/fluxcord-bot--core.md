---
repo: "Fluxcord-Bot/core"
name: "core"
description: "[MIRROR] A Discord <-> Fluxer bridge."
readmeQualityOk: true
url: "https://github.com/Fluxcord-Bot/core"
homepage: "https://fluxcord.jbcrn.dev"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [94]
topics: ["bridge", "discord", "fluxer", "discord-bridge", "discord-fluxer-bridge", "fluxer-bridge"]
stars: 6
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-04-14T09:33:49Z"
lastCommitAt: "2026-11-05T14:04:40Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 62
maintainers: ["jbcarreon123", "StuxieDev"]
openGraphImageUrl: "https://opengraph.githubassets.com/36e0e2c89aafbd2d3449765ce4e620c42e8c378b5e8188eb5976100c2a723d24/Fluxcord-Bot/core"
---

# Fluxcord

A set-and-forget Discord <-> Fluxer bridge.

## Features

- Basic message bridging
- Voice bridging
- Edit/Delete bridging
- Reply bridging
- Emoji bridging
- Embed bridging
- Attachment bridging
- Sticker bridging
- Pin bridging
- Bulk deletion bridging
- Thread and forum bridging
- Channel topic and forum tag synchronization
- Typing indicator bridging
- Announcement channel auto-publishing
- Per-server/community opt-in enforcement for users who opted out globally

## Self hosted setup

Check https://fluxcord.jbcrn.dev/self-hosting for self hosting docs

The Discord bot needs the **Message Content** privileged intent enabled.

## Development

Firstly, this requires both Node.js and PNPM installed.

**Do not pull this repo directly.** Instead, pull the Fluxcord Dev repository:

```
git pull https://git.gay/Fluxcord/dev Fluxcord
```

then initialize it:

```bash
cd Fluxcord
pnpm run init
```

If you use VSCode or a fork, you can find a code-workspace file here that can help you with stuff.
