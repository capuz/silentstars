---
repo: "Nomadcxx/plex2jellyfin"
name: "plex2jellyfin"
description: "Migrate your Plex library to Jellyfin and keep it clean forever. Mass rename, dedupe, consolidate, then a daemon guards new downloads."
readmeQualityOk: true
url: "https://github.com/Nomadcxx/plex2jellyfin"
homepage: "https://nomadcxx.github.io/plex2jellyfin/docs/"
language: "Go"
languages: ["Go"]
languagePcts: [81]
topics: ["go", "jellyfin", "media-server", "plex", "radarr", "sonarr"]
stars: 5
forks: 0
openIssues: 4
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-07-09T16:29:47Z"
lastCommitAt: "2026-10-18T08:17:45Z"
lastReleaseAt: "2026-08-21T05:04:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 81
undervaluedScore: 56
maintainers: ["Nomadcxx"]
openGraphImageUrl: "https://opengraph.githubassets.com/50adb63d8c8ec81b1902595d9df964b910100f79f7b373801a61d6c61bd32c13/Nomadcxx/plex2jellyfin"
fundingLinks: ["GITHUB:https://github.com/Nomadcxx"]
---

·

## Installation

Each install path ships the same pieces:

| Binary | Role |
| --- | --- |
| `plex2jellyfin` | CLI: setup, scan, duplicates, consolidate, plugin, status |
| `plex2jellyfin-daemon` | Watches download dirs, organizes arrivals, runs periodic scans |
| `plex2jellyfin-web` | Dashboard and setup wizard on `:5522` |
| TUI installer | Terminal setup for paths, services, permissions, AI, systemd |

Config lives at `~/.config/plex2jellyfin/config.toml`.

### Option A - TUI installer

```bash
curl -sSL https://raw.githubusercontent.com/Nomadcxx/plex2jellyfin/main/install.sh | sudo bash
```

Interactive terminal wizard for watch paths, library paths, *arr keys, Jellyfin, AI, permissions, and systemd units. Re-run it to update; it preserves `config.toml`.

Requires Go 1.25+, git, npm, and sudo.

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/Nomadcxx/plex2jellyfin/main/scripts/fresh-build-install.sh)
plex2jellyfin setup
```

Same build path as Option B, then starts `plex2jellyfin-web` and prints the wizard URL.

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/Nomadcxx/plex2jellyfin/main/scripts/fresh-build-install-web.sh)
```

Open the printed URL,…
