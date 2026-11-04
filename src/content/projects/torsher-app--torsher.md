---
repo: "torsher-app/torsher"
name: "torsher"
description: "Your home cinema in one container: a TV showcase, your own library, playback while the file downloads, and new episodes that arrive on their own. Self-hosted, built for the TV first."
readmeQualityOk: true
url: "https://github.com/torsher-app/torsher"
homepage: "https://torsher.app"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [72, 23]
topics: ["bittorrent", "docker", "golang", "home-media", "media-server", "nodejs", "self-hosted", "smart-tv", "torznab", "vue"]
stars: 40
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-10-19T12:52:27Z"
lastCommitAt: "2026-11-04T08:03:41Z"
lastReleaseAt: "2026-11-04T06:33:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 41
maintainers: ["antonreshetov"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1425611369/293978d7-710e-4318-bd7b-e916a26bb30a"
fundingLinks: ["CUSTOM:paypal.me/antongithub"]
discussionCount: 1
---

Your home cinema in one container.

  Self-hosted and open source, built for the TV first.

## Support

Torsher is open source and built by one developer. Donations are its only funding: there are no paid features, no ads and no telemetry. Donations pay for development time and test hardware and have nothing to do with content or the sources you connect.

See the [Donate](https://torsher.app/donate) page.

## About

Torsher started when I bought a mini PC with an Intel N150 as a home server and set up the usual self-hosted media stack on it: Jellyfin, Sonarr, Radarr, Prowlarr and Seerr. It worked, but I got tired of keeping it together. Each app has its own interface, settings and database, they all have to be wired to each other, and the TV is only the last link in the chain.

So I built the one thing I wanted instead: a media center in one Docker container, on a mini PC, a NAS or a desktop. One process with one database and one interface does the jobs of a torrent client, a media server, series and movie managers and a request app, and the TV comes first. The indexer stays outside: Torsher connects to any Torznab indexer, for example Prowlarr or Jackett.

## Features

### Watch…
