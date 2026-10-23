---
repo: "pastawithpesto/PS5-14.10-Jailbreak-Research"
name: "PS5-14.10-Jailbreak-Research"
description: "WebKit jailbreak research for PlayStation 5 firmware 14.10"
readmeQualityOk: true
url: "https://github.com/pastawithpesto/PS5-14.10-Jailbreak-Research"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [76, 20]
stars: 120
forks: 15
openIssues: 6
closedIssues: 0
watchers: 8
contributors: 4
recentReleases: 0
createdAt: "2026-10-18T04:11:40Z"
lastCommitAt: "2026-10-23T08:47:19Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 63
undervaluedScore: 18
maintainers: ["pastawithpesto", "cobrajet302gt"]
openGraphImageUrl: "https://opengraph.githubassets.com/a6e63898e740a1b76ec47f8a24ab942203cfa9b3753c7ae03ac8e4ddb8bad272/pastawithpesto/PS5-14.10-Jailbreak-Research"
discussionCount: 0
---

Inspired by [remote_lua_loader](https://github.com/n0llptr/remote_lua_loader) and [Y2JB](https://github.com/Gezine/Y2JB), the loader runs in WebKit userland and accepts payloads over TCP on port **9027**. Kernel exploits are optional payloads, not a prerequisite for the loader.

## Setup

Run the PC host from a checkout or use the bundled Python script / Windows
executable from a release:

```sh
sudo python3 host.py
```

The default DNS and HTTPS ports are 53 and 443 (elevated privileges may be needed).
Set the PS5's primary DNS to the PC's LAN IP, then open **Settings → User's Guide**.
Restore automatic DNS when finished.

For a homescreen installation, send `webkit-remote-loader-installer_v*.elf` through
an existing ELF loader. It serves an AppCache installer on port 18180 and installs
the homescreen shortcut (`WKRL00001`). See [installer/README.md](https://github.com/pastawithpesto/PS5-14.10-Jailbreak-Research/blob/HEAD/installer/README.md).

## Sending payloads

```sh
python3 tools/send.py <PS5_IP> 9027 payloads/hello_world.js
python3 tools/send.py <PS5_IP> 9027 payloads/notify.js --arg "Hello PS5"
python3 tools/send.py <PS5_IP> 9027 --status
```

See…
