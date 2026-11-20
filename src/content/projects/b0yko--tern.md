---
repo: "B0yko/tern"
name: "tern"
description: "Search a video archive by what was said, what was on screen, or what the scene looked like."
readmeQualityOk: true
url: "https://github.com/B0yko/tern"
homepage: "https://boiko.ai/work/tern/"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [62, 23]
topics: ["apple-silicon", "apple-vision", "chromadb", "fastapi", "fcpxml", "ffmpeg", "local-first", "macos", "multimodal-search", "ocr"]
stars: 118
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-24T17:31:47Z"
lastCommitAt: "2026-11-20T12:22:26Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 63
undervaluedScore: 14
maintainers: ["B0yko"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1386049876/17fa8468-c54a-42e3-bc14-af182d9ea39a"
---

Local search for podcast and video archives.<br>
  Find any moment by what was <b>said</b>, what was <b>on screen</b>, or what was <b>in the frame</b>, on-device, on Apple Silicon.

*Visual search: no transcript and no filename to match, only the frame. The
clip is then trimmed in place, ready to export.*

## Contents

- [What it does](#what-it-does)
- [How it works](#how-it-works)
- [Engineering notes](#engineering-notes)
- [Running it from source](#running-it-from-source)
- [Tests](#tests)
- [Layout](#layout)
- [Status](#status)
- [License](#license)

## What it does

Point Tern at a folder of audio, video and photos. It indexes every file
three ways and answers a query from all three at once:
