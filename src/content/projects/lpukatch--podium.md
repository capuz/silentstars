---
repo: "lpukatch/podium"
name: "podium"
description: "Ranks the streams behind your Dispatcharr channels, best first, by measuring them rather than trusting their names."
readmeQualityOk: true
url: "https://github.com/lpukatch/podium"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["dispatcharr", "ffprobe", "iptv", "m3u", "nextjs", "self-hosted", "stream-monitoring"]
stars: 8
forks: 3
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-08-11T01:04:02Z"
lastCommitAt: "2026-11-03T10:52:07Z"
lastReleaseAt: "2026-08-20T19:48:08Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 59
maintainers: ["lpukatch"]
openGraphImageUrl: "https://opengraph.githubassets.com/259d83b091262660c22bb584a266f133485b27f018bd4677268b96913757905f/lpukatch/podium"
---

# Podium

Ranks the streams behind your [Dispatcharr](https://github.com/Dispatcharr/Dispatcharr)
channels, best first, by measuring them rather than trusting their names.

It fetches your channels and streams, works out which streams belong to which
channel, probes each one with `ffprobe`/`ffmpeg`, and writes the ranked order
back. One container, one volume.

One channel, its streams in the order Dispatcharr currently serves them, and
what each one actually is. The stream named `1080p` at #2 measures 720p; the one
named `UHD` at #5 is a black screen; #6 is dead. Matches update as you type, and
nothing is written until you say so.

## Quick start

```sh
docker run -d -p 127.0.0.1:3456:3456 -v podium-data:/app/data \
  -e DISPATCHARR_URL=http://dispatcharr:9191 \
  -e DISPATCHARR_API_KEY=... \
  ghcr.io/lpukatch/podium:latest
```

That publishes the port on loopback only. To reach Podium from another machine
drop the `127.0.0.1:`, and read [who can reach it](https://github.com/lpukatch/podium/blob/HEAD/docs/configuration.md#who-can-reach-it)
first — there is no login, and it holds a Dispatcharr credential.

Or `docker compose up -d` with the [compose…
