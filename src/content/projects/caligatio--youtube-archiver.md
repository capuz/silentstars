---
repo: "Caligatio/youtube-archiver"
name: "youtube-archiver"
description: "Local YouTube downloader/archive Docker image"
readmeQualityOk: true
url: "https://github.com/Caligatio/youtube-archiver"
language: "Python"
languages: ["Python"]
languagePcts: [67]
stars: 11
forks: 2
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2020-04-17T06:28:30Z"
lastCommitAt: "2026-08-24T04:23:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 45
maintainers: ["Caligatio"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c83ad311f2ec25e81c14e3a8745b5ab52a69e8f8c9a6afe8b479e078eae4b8c/Caligatio/youtube-archiver"
---

# YouTube Archiver

YouTube Archiver is a clean HTML 5 web interface with a Python 3.10+ asyncio
multithreaded [yt-dlp] backend capable of downloading audio and/or video
from any source that yt-dlp supports. It targets a Docker-based deployment
but can be run without the use of Docker with some work.

## Usage

If you would like to use the pre-built image:

```console
# You may want to mount a volume into /data, it needs to be globally R/W
docker run -ti -p 8080:8080 ghcr.io/caligatio/youtube-archiver:master
```

If you would like to build the image yourself:

```console
git clone https://github.com/Caligatio/youtube-archiver.git
cd youtube-archiver
docker build . -t youtube-archiver

# You may want to mount a volume into /data, it needs to be globally R/W
docker run -ti -p 8080:8080 youtube-archiver
```

You should now be able to browse to http://localhost:8080 or equivalent
hostname/IP.

## Motivation

For those familiar with command line interfaces, yt-dlp is a great way of
downloading audio and/or video from a host of websites. This project seeks to
use a number of "best practice" settings to simplify yt-dlp's usage as well
as bundle dependencies such as FFmpeg. If you're…
