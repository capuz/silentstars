---
repo: "librempeg/librempeg"
name: "librempeg"
description: "A complete, cross-platform solution to record, convert, filter and stream audio and video."
readmeQualityOk: true
url: "https://github.com/librempeg/librempeg"
language: "C"
languages: ["C"]
languagePcts: [90]
topics: ["multimedia", "audio", "audio-processing", "streaming", "video", "video-processing"]
stars: 137
forks: 17
openIssues: 16
closedIssues: 109
watchers: 4
contributors: 1561
recentReleases: 0
createdAt: "2022-07-02T19:49:14Z"
lastCommitAt: "2026-09-19T08:07:44Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 44
maintainers: ["michaelni", "richardpl", "jamrial"]
openGraphImageUrl: "https://opengraph.githubassets.com/00ae248fec8e939be8e156b274dcee5dc5b9a003c8a8517c54b2a6adefeb2693/librempeg/librempeg"
discussionCount: 10
---

Librempeg README
=============

Librempeg is a collection of libraries and tools to process multimedia content
such as audio, video, subtitles and related metadata.

## Libraries

* `libavcodec` provides implementation of a wider range of codecs.
* `libavformat` implements streaming protocols, container formats and basic I/O access.
* `libavutil` includes hashers, decompressors and miscellaneous utility functions.
* `libavfilter` provides means to alter decoded audio and video through a directed graph of connected filters.
* `libavdevice` provides an abstraction to access capture and playback devices.
* `libswresample` implements audio mixing and resampling routines.
* `libswscale` implements color conversion and scaling routines.

## Tools

* `ffmpeg` is a command line toolbox to manipulate, convert and stream multimedia content.
* `ffplay` is a minimalistic multimedia player.
* `ffprobe` is a simple analysis tool to inspect multimedia content.
* Additional small tools such as `aviocat`, `ismindex` and `qt-faststart`.

## Documentation

The offline documentation is available in the **doc/** directory.

### Examples

Coding examples are available in the **doc/examples** directory.…
