---
repo: "vashhdev/onepace"
name: "onepace"
description: "I made a script to watch One Pace, efficiently through your terminal with minimalistic TUI. I made it because I didn't want to download the files cause I watch quickly and then remove those files, also I love my local player \"mpv\". What more reasons do you need. Let's sail"
readmeQualityOk: true
url: "https://github.com/vashhdev/onepace"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["cli", "mpv", "one-pace", "one-piece", "pixeldrain", "python"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-07-23T17:20:31Z"
lastCommitAt: "2026-07-25T06:02:10Z"
lastReleaseAt: "2026-07-23T17:36:31Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 15
maintainers: ["vashhdev"]
openGraphImageUrl: "https://opengraph.githubassets.com/6556dfa0f91a5cffac19220ef522f0b695d9ee4c7e7ade08fdd02b6d1369a10c/vashhdev/onepace"
---

# onepace

Stream any [One Pace](https://onepace.net) arc straight into [mpv](https://mpv.io) - no downloading, no clunky web player. Pick an arc with a fuzzy, arrow-key terminal picker, choose sub/dub and quality, and it hands mpv a playlist of every episode in order.

- **Zero dependencies** - pure Python standard library.
- **Interactive picker** - type to filter arcs live, `↑`/`↓` to move, `Enter` to select. Works on Windows, macOS, and Linux.
- **Always current** - scrapes the live One Pace watch page each run, so new arcs and re-encodes just show up.
- **Non-interactive mode** - script everything with flags.

## How it works

1. Fetches `https://onepace.net/en/watch` and maps each arc → sub/dub → quality → its [pixeldrain](https://pixeldrain.com) list id.
2. Resolves that list via `https://pixeldrain.net/api/list/<id>` into the ordered episode file ids.
3. Launches `mpv` with every `https://pixeldrain.net/api/file/<id>` as a playlist.

No files touch your disk - mpv streams each episode directly.

## Requirements

- **Python 3.8+**
- **mpv** - if it's not on your `PATH`, onepace offers to install it for you (via `winget`/`scoop`/`choco` on Windows, `brew` on macOS,…
