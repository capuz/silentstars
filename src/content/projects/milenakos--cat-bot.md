---
repo: "milenakos/cat-bot"
name: "cat-bot"
description: "Discord Cat Bot Source Code"
readmeQualityOk: true
url: "https://github.com/milenakos/cat-bot"
homepage: "https://catbot.link"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 134
forks: 103
openIssues: 0
closedIssues: 0
watchers: 6
contributors: 36
recentReleases: 0
createdAt: "2022-12-23T18:19:32Z"
lastCommitAt: "2026-11-05T08:04:55Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 90
undervaluedScore: 48
maintainers: ["milenakos", "RegonGaming", "MonkeysWithPie"]
openGraphImageUrl: "https://opengraph.githubassets.com/f6b74379a666ec7f1b35d455d58eb9a8852618f7a7d83532a990889abb1123f1/milenakos/cat-bot"
---

#  Cat Bot [](https://top.gg/bot/966695034340663367) [](https://discord.gg/staring) [](https://catbot.wiki)

Discord Cat Bot Source Code

# Development

Please note that self-hosting is hacky and isn't supported; instructions below are for testing/development/messing around. I won't stop you, but you WILL have to mess around with the code a bunch for it to work good, so be warned.

## Prerequisites

- Python 3.10+
- PostgreSQL

## Instructions

1. Clone/download the repository.

2. `pip install -r requirements.txt` (use venv if desired)

3. You can add all the emojis you want with `python emojis.py` (needs your `TOKEN` configured first, see step 6). Alternatively, download [the emojis](https://github.com/staring-cat/emojis/releases/latest/download/emojis.zip) and upload them to "App Emojis" in Discord Dev Portal by hand.

   `emojis.py` can also download optional themed spawn emoji sets (birthday, halloween, old) - enable the ones you want in the `SPAWN_EMOJI_THEMES` dict at the top of the file, then set `config.EMOJI` to match.

4. Setup your Postgres: (example instructions)
 - `CREATE ROLE cat_bot WITH LOGIN PASSWORD 'password'; CREATE DATABASE cat_bot OWNER cat_bot;`
 - `psql…
