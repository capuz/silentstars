---
repo: "olivertgwalton/photon-server"
name: "photon-server"
description: "A media server for films and television, written in Go"
readmeQualityOk: true
url: "https://github.com/olivertgwalton/photon-server"
language: "Go"
languages: ["Go"]
languagePcts: [78]
stars: 11
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-05T11:30:47Z"
lastCommitAt: "2026-10-21T17:31:29Z"
lastReleaseAt: "2026-10-17T18:47:55Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 58
maintainers: ["olivertgwalton", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/77624b0a85b091db82cb9f785535803c15f6a2c7461499df8c532dc3cb2a5f7a/olivertgwalton/photon-server"
---

# photon-server

A media server for films and television, written in Go.

Official support is at [photon.oliverwalton.uk](https://photon.oliverwalton.uk). On iPhone, iPad,
Mac, Apple TV and Apple Vision Pro, play from it with
[Photon Player](https://apps.apple.com/gb/app/photon-player/id6804291311) on the App Store.

| Films | A film | A show |
|---|---|---|
|  |  |  |

https://github.com/user-attachments/assets/6e3b3d94-8076-4d41-aa39-83e45a2d9409

## Tech stack

- **Server**: Go, PostgreSQL (pgx, goose migrations), Valkey
- **Media**: FFmpeg (jellyfin-ffmpeg in the image, with VAAPI, Quick Sync, NVIDIA and Vulkan)
- **Metadata**: TMDB, TheTVDB, OMDb, MDBList, Kodi NFO; subtitles from OpenSubtitles, theme tunes
  from ThemerrDB
- **Web**: SvelteKit (static build served by the Go server), Tailwind, bits-ui, Bun, Biome,
  Playwright

## Performance

[docs/08-reference/04-performance.md](https://github.com/olivertgwalton/photon-server/blob/HEAD/docs/08-reference/04-performance.md) measures photon against Jellyfin, Plex and silo on one host
with one library: API latency and throughput, page data and memory.

## Deploy

The image is `ghcr.io/olivertgwalton/photon-server` (amd64 and…
