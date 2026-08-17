---
repo: "cherry-embedded/CherryAVP"
name: "CherryAVP"
description: "CherryAVP is a tiny and beautiful, low-memory and high-performance audio and video processing library designed for MCUs."
readmeQualityOk: true
url: "https://github.com/cherry-embedded/CherryAVP"
language: "C"
languages: ["C"]
languagePcts: [90]
topics: ["aec", "agc", "audio-processing", "sonic"]
stars: 23
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-08-05T07:35:27Z"
lastCommitAt: "2026-08-17T04:19:52Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 11
maintainers: ["sakumisu"]
openGraphImageUrl: "https://opengraph.githubassets.com/7071860a6491da8d23eb477df32fc55924bd664f594ac4d5437553f3060b3004/cherry-embedded/CherryAVP"
---

**English | [Simplified Chinese](https://github.com/cherry-embedded/CherryAVP/blob/HEAD/README_zh.md)**

<h1 align="center" style="margin: 30px 0 30px; font-weight: bold;">CherryAVP</h1>
</p>

CherryAVP is a tiny and beautiful, low-memory and high-performance audio and video processing library designed for MCUs.

## Reasons for doing this project

- Most chip companies use open‑source libraries, but they do not open‑source their own modifications or additions. I don't understand this—it's just like toolchain vendors who keep their DSP instructions proprietary.
- There is no unified framework or API, so switching to a different chip requires re‑adaptation of the entire codebase.
- The sources of the open‑source libraries used are often disorganised(we only rely on official libraries with specific commit hashes).
- I want to use it.

## Features

- Support audio codec
- Support video codec
- Support Multiple audio front-end algorithms
- Support Multiple audio effects algorithms
- Support sample-rate, channel, bit-depth, data weaver conversion

## Encoders

### Audio Encoding

#### ADPCM

#### AAC

#### AMR

#### FLAC

#### G711

#### G722

#### MP3

#### Opus

#### Vorbis

### Video…
