---
repo: "zfleeman/ffmpeg4discord"
name: "ffmpeg4discord"
description: "ffmpeg4discord is a Python package tailored for Two-Pass encoding, enabling efficient video compression to meet desired file sizes. Ideal for users seeking to compress videos for Discord sharing within file size limitations."
readmeQualityOk: true
url: "https://github.com/zfleeman/ffmpeg4discord"
homepage: "https://pypi.org/project/ffmpeg4discord/"
language: "Python"
languages: ["Python"]
languagePcts: [84]
topics: ["ffmpeg", "discord", "encoding", "libx264", "codecs", "ffmpeg-python", "video", "video-processing", "flask", "h264"]
stars: 113
forks: 8
openIssues: 7
closedIssues: 48
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2020-12-17T00:03:54Z"
lastCommitAt: "2026-10-21T21:15:10Z"
lastReleaseAt: "2025-12-26T04:37:22Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 88
undervaluedScore: 43
maintainers: ["zfleeman", "rostuhan", "Rayan-and-beyond"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a79beed546e09ff03d59aa5ee7b14a7231fff8c3b3c8daff4c459ee05656e62/zfleeman/ffmpeg4discord"
---

# ffmpeg4discord (`ff4d`) -- Target File Size Video Compression for Discord with FFmpeg

`ff4d` is a command-line tool that compresses video files to fit under a specified file size, making them easy to share on Discord and other platforms with file size limits. It is especially useful for quickly preparing large video clips (such as NVIDIA ShadowPlay recordings) for upload, without needing a visual editor.

The package provides a convenient interface for FFmpeg, including a 2-pass encoding workflow (via the `TwoPass()` class) and support for advanced video filters like cropping and resolution scaling. This makes it adaptable to a wide range of audio/video processing needs.

## Installation

This package requires Python >= 3.9. For Windows users, ensure that Python is added to your system's PATH. I highly recommend that you use the [python.org](https://python.org) Python installation.

Install this package with the following command.

```
pip install ffmpeg4discord
```

You must first have FFmpeg installed on your system. `ffmpeg` needs to be registered in your PATH. macOS or Linux users can use their favorite package manager to do this, but this process is a little more tricky…
