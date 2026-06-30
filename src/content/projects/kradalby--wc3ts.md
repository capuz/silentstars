---
repo: "kradalby/wc3ts"
name: "wc3ts"
description: "Automatically discover and join Warcraft III LAN games across your Tailscale network"
url: "https://github.com/kradalby/wc3ts"
language: "Go"
languages: ["Go"]
languagePcts: [97]
stars: 12
forks: 2
openIssues: 3
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2026-01-15T10:13:21Z"
lastCommitAt: "2026-06-30T06:50:33Z"
lastReleaseAt: "2026-06-22T11:27:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 46
undervaluedScore: 21
maintainers: ["kradalby"]
openGraphImageUrl: "https://opengraph.githubassets.com/2dd4af64c656deccfdd6216966bd0ee8a3786b030c9d27708b3a62c8c092b9a7/kradalby/wc3ts"
---

# wc3ts - Warcraft III LAN over Tailscale

Automatically discover and join Warcraft III LAN games across your Tailscale network.

Built for classic pre-Reforged Warcraft III (1.26-1.29) - the version we use at LAN parties.

## Features

- **Automatic discovery**: No manual IP configuration needed
- **Peer-to-peer**: All nodes run the proxy, games appear automatically
- **Raw packet forwarding**: Preserves exact game data including HostCounter
- **Real-time updates**: Uses Tailscale IPN bus for instant peer notifications
- **Cross-platform**: Works on macOS, Linux, and Windows

## Architecture

```
┌─────────────┐    Tailscale    ┌─────────────┐
│   Host PC   │◄───────────────►│  Client PC  │
│   (WC3)     │                 │   (WC3)     │
│   wc3ts     │                 │   wc3ts     │
└─────────────┘                 └─────────────┘
```

Each machine runs `wc3ts` alongside Warcraft III. The proxies:

1. Subscribe to Tailscale peer updates via the IPN bus
2. Probe peers for hosted games using WC3 LAN protocol
3. Respond to queries from remote peers with local game info
4. Broadcast remote games to the local LAN (raw packets)
5. Proxy TCP connections to remote game hosts

##…
