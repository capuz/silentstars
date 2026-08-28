---
repo: "spbkaizo/tidlr"
name: "tidlr"
description: "Golang based Tidal FLAC/MQA Downloader"
readmeQualityOk: true
url: "https://github.com/spbkaizo/tidlr"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["golang", "tidal", "flac"]
stars: 21
forks: 1
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 2
recentReleases: 5
createdAt: "2019-12-18T19:31:26Z"
lastCommitAt: "2026-08-28T15:32:49Z"
lastReleaseAt: "2026-08-28T15:33:02Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "release_machine"]
healthScore: 83
undervaluedScore: 40
maintainers: ["spbkaizo"]
openGraphImageUrl: "https://opengraph.githubassets.com/9c48161fc5fa19ebbb74de984d511acd401514d35d5e4b922af831a9aaab313f/spbkaizo/tidlr"
---

# tidlr

A fast, native-Go pipeline for building a lossless music library from Tidal.

`tidlr` downloads albums, playlists and individual tracks from Tidal as
**lossless FLAC**, converts
them to **ALAC** (`.m4a`) with embedded cover art and tags, and files them under
a tidy `<Artist>/<Album>/` tree. It can also keep up with new releases
automatically by scraping [AnyDecentMusic](http://www.anydecentmusic.com)'s
"Recent Releases" chart and downloading everything new.

Everything Tidal — authentication, search, edition matching, and downloading —
is implemented natively in Go. There is **no Python and no external downloader**;
the only runtime dependency is `ffmpeg`.

---

## Features

- **Lossless first.** Downloads FLAC and transcodes to ALAC (a lossless Apple
  format). Prefers a lossless **stereo** master, transparently avoiding lossy
  Dolby Atmos editions even when Tidal's API defaults to them.
- **Smart edition matching.** When resolving an album by name, `tidlr` searches
  Tidal and then scans the artist's catalogue to pick the best edition —
  lossless over Atmos, explicit (original) over clean, newest over oldest —
  finding lossless masters that Tidal's own search hides.…
