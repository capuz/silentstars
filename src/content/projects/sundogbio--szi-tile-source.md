---
repo: "sundogbio/szi-tile-source"
name: "szi-tile-source"
description: "OpenSeaDragon TileSource for SZI files "
readmeQualityOk: true
url: "https://github.com/sundogbio/szi-tile-source"
homepage: "https://sundogbio.github.io/szi-tile-source/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [87]
stars: 12
forks: 2
openIssues: 1
closedIssues: 5
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-07-16T08:14:40Z"
lastCommitAt: "2026-11-20T11:58:03Z"
lastReleaseAt: "2026-06-12T11:35:35Z"
status: "thriving"
tags: []
healthScore: 72
undervaluedScore: 41
maintainers: ["infovore", "rdtunnicliffe", "Jonesus"]
openGraphImageUrl: "https://opengraph.githubassets.com/2fce5c75ccb93431a3736e4f5a67567cd8ed7511127ed6beb332084da4c1dbda/sundogbio/szi-tile-source"
---

# szi-tile-source

An [OpenSeadragon](https://openseadragon.github.io/) ("OSD") TileSource for remotely hosted
[SZI](https://github.com/smartinmedia/SZI-Format) files, SziTileSource enables the loading of SZI
files into OpenSeadragon from any static webserver that supports
[Range requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Range_requests) by
returning an uncompressed response that includes a `Content-Range` header.

## Motivation

The [Deep Zoom Image](https://en.wikipedia.org/wiki/Deep_Zoom) (DZI) format is widely used as a way
of enabling smooth scrolling and zooming of very large images. It consists of a .dzi file specifying
metadata for the whole image and an accompanying data directory containing subsections of the image
(known as tiles) at a variety of different zoom images. This sort of _image pyramid_ is very
efficient for serving up large images, but the potentially huge number of files involved means that
moving or deleting DZI objects can be tedious, slow, and expensive in environments where cheap bulk
operations aren't available.
