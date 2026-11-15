---
repo: "DomeNinchen/ts6forkmanager"
name: "ts6forkmanager"
description: "Web-based management interface for TeamSpeak servers, fork from clusterzx"
readmeQualityOk: true
url: "https://github.com/DomeNinchen/ts6forkmanager"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 5
forks: 1
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-09-09T17:48:46Z"
lastCommitAt: "2026-11-15T08:19:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 57
maintainers: ["DomeNinchen"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1363032539/29c78b11-542b-465b-a363-237c65969a53"
discussionCount: 2
---

# TS6 Manager

A web interface for running TeamSpeak 6 servers: channels, clients, permissions, music bots, video streaming, automated workflows and embeddable status widgets, all in the browser.

It talks to TeamSpeak over the **WebQuery HTTP API**, the ServerQuery replacement in TeamSpeak 6. Telnet is not used.

> An AI-assisted fork of [clusterzx/ts6-manager](https://github.com/clusterzx/ts6-manager). See [Why This Fork Exists](#why-this-fork-exists).

## Screenshots

### Dashboard
Live users, channels, uptime, ping and bandwidth of a virtual server, plus the support queue at a glance where one is running, with tiles each user can arrange for their own account.

### Music Bots
Several bots per server, each with its own queue and volume, playing radio, YouTube or your own library. A channel that is live right now (a Twitch or Kick channel, a YouTube live) plays as sound with `!play <link>` or from the web player until it is stopped or the channel goes offline; an admin can switch this off or set a time limit under Settings -> Streaming.

### Video Streaming
Streams YouTube, Twitch, Kick, a direct URL or a library video into a channel over WebRTC. YouTube and Twitch videos are…
