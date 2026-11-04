---
repo: "i-execute/OBHOD"
name: "OBHOD"
description: "Telegram bot for management Xray (vless) and VK Turn (WG) bypass"
readmeQualityOk: true
url: "https://github.com/i-execute/OBHOD"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-07-06T09:56:24Z"
lastCommitAt: "2026-11-04T11:07:29Z"
lastReleaseAt: "2026-11-04T10:59:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 59
maintainers: ["i-execute", "SkrudjReal", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f516786709b88e6eb5b208d6bf9175ba1bd942dedc4d377ac3edfd989c900ad/i-execute/OBHOD"
---

# OBHOD

Telegram bot over MTProto that manages the server it runs on and hands out post quantum VLESS subscriptions.
It never talks to another machine over SSH: the management channel is loopback only, every agent is a local `argv`.

## Install

```
curl -fsSL https://raw.githubusercontent.com/i-execute/OBHOD/main/get.sh | sudo bash
```

Root only, installs into `/opt/obhod`, state in `/var/lib/obhod`, runs as `obhod.service`.
The installer reads the bot token with `read -r -s`, writes `/etc/obhod/obhod.env` as `0600` inside a `0700`
directory and drops the variables from the shell, so a key never reaches the process list, the history or a log.

## Cores

Nothing is hardcoded to one engine. `BOT/cores.py` is a registry, the home screen is a summary of every core
that is registered, and every button lands on a concrete core.

| Core | Role | Version |
| --- | --- | --- |
| Xray | VLESS inbounds, subscriptions | `latest` from the release api, fallback `v26.10.31` |
| FreeTurn | `vk` call transport engine, `freeturn://` links | `latest` from the release api, fallback `v4.1.2` |

Both answer through the same proto 3 envelope, so one code path parses them. They run side by side and…
