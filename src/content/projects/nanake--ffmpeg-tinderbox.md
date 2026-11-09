---
repo: "nanake/ffmpeg-tinderbox"
name: "ffmpeg-tinderbox"
description: "a Docker-based build environment for compiling recent git versions of FFmpeg"
readmeQualityOk: true
url: "https://github.com/nanake/ffmpeg-tinderbox"
language: "Shell"
languages: ["Shell"]
languagePcts: [97]
topics: ["ffmpeg", "docker", "cross-compiling", "win64"]
stars: 77
forks: 9
openIssues: 0
closedIssues: 10
watchers: 3
contributors: 1
recentReleases: 2
createdAt: "2021-01-02T10:30:41Z"
lastCommitAt: "2026-11-09T03:29:36Z"
lastReleaseAt: "2026-09-30T00:14:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 51
maintainers: ["nanake", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bdc18c6e2cb161f8e1af65da21aa91709866f71d30d8c9f21d82b938c0e7c74f/nanake/ffmpeg-tinderbox"
---

# FFmpeg Build Environment

This repository provides a Docker-based build environment for compiling recent git versions of FFmpeg, including optional GPL and non-free libraries such as `libfdk-aac`, `libfdk-xhe-aac`, `libmpeghdec`, `LCEVCdec`, and `DeckLink`.

The project automates dependency compilation and FFmpeg builds for supported targets.

## Requirements

Make sure the following tools are installed:

- Bash
- Docker

## Build Configuration

### Targets

| Target | Description |
|----------|-------------|
| `win64` | 64-bit Windows |

### Variants

| Variant | Description |
|----------|-------------|
| `lgpl` | Builds FFmpeg with LGPL-compatible libraries only |
| `gpl` | Includes all LGPL libraries plus GPL components |
| `nonfree` | Includes GPL libraries and non-free components such as libfdk-aac, libfdk-xhe-aac, LCEVCdec,  libmpeghdec, and DeckLink |

### Add-ins

| Add-in | Description |
|---------|-------------|
| `debug` | Embeds GDB-compatible debug symbols |

## Building Docker Images

### Build the Base Image

```bash
docker build \
    -t base-win64:latest \
    images/base-win64
```

### Generate the Target Dockerfile

```bash
./generate.sh <target> <variant>
```…
