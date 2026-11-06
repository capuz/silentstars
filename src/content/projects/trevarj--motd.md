---
repo: "trevarj/motd"
name: "motd"
description: "Modern native Android IRC client"
readmeQualityOk: true
url: "https://github.com/trevarj/motd"
homepage: "http://trevs.site/motd/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [94]
topics: ["android", "chat-application", "irc", "irc-client", "ircv3", "messaging", "messenger"]
stars: 37
forks: 5
openIssues: 13
closedIssues: 40
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2026-07-08T13:33:41Z"
lastCommitAt: "2026-11-06T11:23:19Z"
lastReleaseAt: "2026-07-13T04:26:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 40
maintainers: ["trevarj", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ce0ea7ad04e3752013323abbcabbe1ce5f9fabac3007fcb59cc71030a61ecc73/trevarj/motd"
---

motd is built in Kotlin with Jetpack Compose and Material 3. It speaks IRCv3
and works best paired with a [soju](https://soju.im) bouncer — capabilities are
detected over CAP and enabled automatically — but it connects fine to plain
networks too, falling back to local-only history and a persistent socket.

- [Screenshots](#screenshots)
- [Features](#features)
- [Install](#install)
- [Connecting](#connecting)
- [Development](#development)
- [Community](#community)
- [License](#license)
- [Donations](#donations)

## Screenshots

Each frame is split diagonally between the Ayu Light and Ayu Dark themes. See
them in motion on the [landing page](https://trevs.site/motd/).

## Features

- **Telegram-style chat** — unified chat list, grouped bubbles, day separators, event pills, inline images, and link previews
- **Infinite scrollback** — `draft/chathistory` paging through a bouncer, local-only history on plain networks
- **Cross-device read state** — `draft/read-marker` sync
- **Multi-network** — several networks over one bouncer connection (`soju.im/bouncer-networks`)
- **Push or persistent socket** — UnifiedPush + `soju.im/webpush` with on-device decryption, or a foreground service
-…
