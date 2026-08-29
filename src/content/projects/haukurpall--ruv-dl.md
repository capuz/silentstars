---
repo: "HaukurPall/ruv_dl"
name: "ruv_dl"
description: "RÚV-DL (ruv-dl) is terminal line client for downloading content from RÚV"
readmeQualityOk: true
url: "https://github.com/HaukurPall/ruv_dl"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 10
forks: 2
openIssues: 0
closedIssues: 0
watchers: 5
contributors: 2
recentReleases: 0
createdAt: "2022-01-22T15:45:41Z"
lastCommitAt: "2026-08-29T10:21:51Z"
lastReleaseAt: "2022-07-28T16:14:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 35
maintainers: ["HaukurPall"]
openGraphImageUrl: "https://opengraph.githubassets.com/61eaa3b432888059acf2a28fa3c9aa7a70bf3220da30313d4df96ed6587b561e/HaukurPall/ruv_dl"
---

# RÚV-DL

RÚV-DL (`ruv-dl`) is terminal line client for downloading content from [RÚV](https://ruv.is/).

It handles the following tasks:

- Query RÚV graphql API for program information
- Wraps ffmpeg to download the video files
- Caches and keeps track of downloaded files
- Assist with some common management tasks

# Installation

- Python version 3.8
- [ffmpeg](https://www.ffmpeg.org/download.html)

Be sure to add `ffmpeg` to `PATH`, especially windows users.

And then:

```
pip install git+https://github.com/HaukurPall/ruv_dl
```

## Motivation

This projected is motivated by [ruvsarpur](https://github.com/sverrirs/ruvsarpur).
The original plan was to fork that repo and improve upon it, but it was easier to approch the problem from scratch.

## Versions

- 1.7.0: Switched HTTP client from `httpx` to the Pydantic-maintained `httpx2`. Requires Python 3.10+. Retry transient (5xx) RÚV API failures with backoff. Tag the audio track with the language declared in the HLS manifest (e.g. `isl`).
- 1.6.1: Support RÚV's newer HLS format where the audio is a separate rendition (video-only variants). Fixed `details` failing to list qualities for these streams.
- 1.6.0: Added parallel…
