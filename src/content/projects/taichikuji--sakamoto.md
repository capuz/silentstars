---
repo: "taichikuji/Sakamoto"
name: "Sakamoto"
description: "A fun, easy to use Music Bot for Discord!"
readmeQualityOk: true
url: "https://github.com/taichikuji/Sakamoto"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["discord-bot", "moderation", "python", "bot", "discord", "discord-py", "modular", "music", "slash-commands"]
stars: 8
forks: 1
openIssues: 1
closedIssues: 39
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2020-06-07T12:03:30Z"
lastCommitAt: "2026-11-08T10:40:50Z"
lastReleaseAt: "2026-06-26T14:02:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 75
maintainers: ["taichikuji", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/270293116/02faca22-2625-4faf-8fcd-19141097bbb2"
---

# Sakamoto

Sakamoto is a Python Discord bot inspired by the *Nichijou* character. Has modularity, administrative tools, and even voice features. Intended for small-to-medium servers and communities.

This project has come a long way. Originally called Miia-Py, then Ui-Py.

## Run

See the [setup guide](https://github.com/taichikuji/Sakamoto/wiki/How-to-get-the-bot-working/) and [configuration reference](https://github.com/taichikuji/Sakamoto/wiki/Configuration-Guide#setting-environment-variables) for integration-specific tokens.

### Docker Compose

```bash
export TOKEN='YOUR_DISCORD_BOT_TOKEN'
./init-docker.sh
```

By default, Docker Compose builds Sakamoto locally. On an existing installation
with root-owned data from an older release, migrate the volume ownership once
before running `./init-docker.sh`:

```bash
docker compose run --rm --user root --entrypoint chown discord -R sakamoto:sakamoto /usr/src/app/data
```

To enable automatic updates, uncomment the published `ghcr.io/taichikuji/sakamoto:latest` image, the Watchtower label, and the `updater` service in `docker-compose.yml`. The updater uses the maintained `nickfedor/watchtower` fork, only watches labelled containers,…
