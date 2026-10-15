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
stars: 139
forks: 17
openIssues: 16
closedIssues: 111
watchers: 4
contributors: 1589
recentReleases: 0
createdAt: "2022-07-02T19:49:14Z"
lastCommitAt: "2026-10-15T08:30:36Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 43
maintainers: ["michaelni", "richardpl", "romainhedouin"]
openGraphImageUrl: "https://opengraph.githubassets.com/47a7af89a550962e1f1bbdf8fba4d8bb9ffe8166a37f433e6730625f556a54ff/librempeg/librempeg"
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
* `libswscale` implements color conversion and scaling routines.

## Tools

* `ffmpeg` is a command line toolbox to manipulate, convert and stream multimedia content.
* `ffplay` is a minimalistic multimedia player.
* `ffprobe` is a simple analysis tool to inspect multimedia content.
* Additional small tools such as `aviocat`, `ismindex` and `qt-faststart`.

## Documentation

The offline documentation is available in the **doc/** directory.

### Examples

Coding examples are available in the **doc/examples** directory.

## License

Librempeg codebase is mainly GPLv3-licensed with…
