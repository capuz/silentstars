---
repo: "icepie/rdev"
name: "rdev"
description: "the fastest remote tools"
originalDescription: "the fastest remote tools"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/icepie/rdev"
homepage: "https://r.niceaigc.cn/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [40, 36]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-13T10:48:08Z"
lastCommitAt: "2026-11-08T10:41:30Z"
lastReleaseAt: "2026-06-14T09:51:10Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 55
maintainers: ["icepie"]
openGraphImageUrl: "https://opengraph.githubassets.com/65242f66c70f58598c0e51732352f34d13a57fb937b0c4bf3c82c60419de7ed5/icepie/rdev"
---

# RDev - Remote Debug over SSH

Remotely debug connected devices over SSH. After the client (on the device side) connects to the server, others can access the device's shell and filesystem through standard SSH/SCP/SFTP/Rsync, and port forwarding is supported.

## Architecture

```
┌──────────────┐  TCP/KCP/WS channel  ┌──────────────┐
│  rdev-client │ ◄──────────────► │  rdev-server │ ◄── SSH Client (debugger)
│  (debugged   │    control channel + data    │  SSH+Web UI  │
│   device)    │                   │              │
└──────────────┘                   └──────────────┘
```

- **Client** runs on the debugged device and connects to the server over TCP, KCP/UDP, or WebSocket. `--server` accepts a comma-separated list of fallback addresses.
- **Server** runs on a publicly reachable machine and exposes the SSH port and Web UI.
- **Debugger** connects to the server using standard SSH/SCP/SFTP, with username = device ID.

## Features

| Feature | Description |
|------|------|
| SSH Shell | Interactive terminal with PTY support (cross-platform) |
| SSH Exec | Remote command execution |
| SCP upload/download | Via the SFTP subsystem |
| SFTP | Full SFTP file operations |
| Rsync |…
