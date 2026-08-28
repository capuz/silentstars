---
repo: "noitavoo/Steamport"
name: "Steamport"
description: "Turn local TCP/UDP games, and services, into seamless multiplayer, with secure hosting, private lobbies and no manual port forwarding through Valve's Steam network."
readmeQualityOk: true
url: "https://github.com/noitavoo/Steamport"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["gameserver", "portforwarding", "steam", "steam-api", "steamworks", "lan-over-steam-api"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-24T21:24:41Z"
lastCommitAt: "2026-08-28T15:35:50Z"
lastReleaseAt: "2026-08-28T01:40:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 48
maintainers: ["noitavoo"]
openGraphImageUrl: "https://opengraph.githubassets.com/b09087175d27d8017f21b59358d41f5202c2eff5f6e7d735aa4f7cae70fa2e86/noitavoo/Steamport"
discussionCount: 0
---

# Steamport

Share local TCP/UDP services with other Steam users over peer-to-peer networking.

</div>

## Requirements

* Windows 10/11
* Steam installed and logged in

## Usage

### Host

1. Start your game or dedicated server.
2. Open **Host** and select the program.
3. Choose ports, access level, and player limit.
4. Click **Start Sharing**.
5. Share the code or invite Steam friends from **Session**.

Only selected ports are forwarded. The session closes automatically when the selected process exits.

### Join

1. Open **Join** and select a session or paste a share code.
2. Approve any password or access prompt.
3. Open **Session** and copy the local address for the game port.
4. Paste it into the game's direct-connect field.

For LAN-browser-only games, enable Automatically enable broadcast-only LAN compatibility in Settings. Steamport forwards compatible UDP broadcast traffic through its normal forwarding sockets.

Forwarded ports bind to `127.0.0.1` by default.
Advanced networking and Steam routing options are available under **Settings → Advanced settings**.

## Build

```powershell
dotnet restore .\Steamport.slnx
dotnet build .\Steamport.slnx -c Debug
dotnet test…
