---
repo: "tphakala/go-wav"
name: "go-wav"
description: "Pure-Go WAV/RIFF reader and writer with RF64 and BW64 support for files past 4 GiB"
readmeQualityOk: true
url: "https://github.com/tphakala/go-wav"
homepage: "https://pkg.go.dev/github.com/tphakala/go-wav"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["audio", "audio-container", "audio-processing", "bw64", "cgo-free", "go", "golang", "pcm", "pure-go", "rf64"]
stars: 5
forks: 2
openIssues: 5
closedIssues: 29
watchers: 1
contributors: 1
recentReleases: 3
createdAt: "2026-07-20T08:41:28Z"
lastCommitAt: "2026-11-26T13:00:07Z"
lastReleaseAt: "2026-11-26T13:01:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 47
maintainers: ["tphakala", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cce343a780b7d662b31bd5a4b6a7d53df7dac192b1ce097097bb5e87faa32fc5/tphakala/go-wav"
---

# go-wav

A pure-Go library for reading and writing WAV audio, including the 64-bit RF64
and BW64 extensions for files past 4 GiB (both are read, RF64 is written). No
cgo, no runtime dependencies.

It is the WAV member of a family that also covers
[FLAC](https://github.com/tphakala/go-flac),
[Opus](https://github.com/tphakala/go-opus),
[AAC](https://github.com/tphakala/go-aac) and
[M4A](https://github.com/tphakala/go-m4a), and it presents the same API shape as
its siblings, so a program that already speaks one of them speaks this one too.

## Install

```
go get github.com/tphakala/go-wav
```

Requires Go 1.26 or newer.
