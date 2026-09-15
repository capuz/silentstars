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
openIssues: 0
closedIssues: 30
watchers: 2
contributors: 1
recentReleases: 3
createdAt: "2020-06-07T12:03:30Z"
lastCommitAt: "2026-09-15T08:54:56Z"
lastReleaseAt: "2026-06-26T14:02:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 83
maintainers: ["taichikuji", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/270293116/d6d53e49-8a1a-4f38-a9eb-6fe794c8dcd1"
---

# Sakamoto

Sakamoto is a modular Python Discord bot inspired by the *Nichijou* character. It focuses on voice features for small-to-medium communities.

It is a Python rewrite intended to apply stronger modular design than earlier projects.

</p>

## Run

See the [setup guide](https://github.com/taichikuji/Sakamoto/wiki/How-to-get-the-bot-working/) and [configuration reference](https://github.com/taichikuji/Sakamoto/wiki/Configuration-Guide#setting-environment-variables) for integration-specific tokens.

### Docker Compose

```bash
export TOKEN='YOUR_DISCORD_BOT_TOKEN'
./init-docker.sh
```

By default, Docker Compose builds Sakamoto locally.

To enable automatic updates, uncomment the published `ghcr.io/taichikuji/sakamoto:latest` image, the Watchtower label, and the `updater` service in `docker-compose.yml`. The updater uses the maintained `nickfedor/watchtower` fork, only watches labelled containers, and removes old images after successful updates.

Watchtower checks daily at midnight UTC by default. Override its six-field cron expression with `WATCHTOWER_SCHEDULE`.

### Docker image

```bash
docker build -t sakamoto:latest .
docker run -e TOKEN='YOUR_DISCORD_BOT_TOKEN'…
