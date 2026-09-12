---
repo: "amanofvaly/crowbarr"
name: "crowbarr"
description: "Audit-first subtitle synchronization and speech-aligned transcription for self hosted media library. Non-destructive sidecars powered by Whisper."
readmeQualityOk: true
url: "https://github.com/amanofvaly/crowbarr"
language: "Python"
languages: ["Python"]
languagePcts: [75]
topics: ["bazarr", "homelab", "media-server", "nas", "plex", "radarr", "sonarr", "subtitle", "subtitles", "whisper"]
stars: 23
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-08T12:15:39Z"
lastCommitAt: "2026-09-12T08:05:05Z"
lastReleaseAt: "2026-09-10T04:51:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 37
maintainers: ["amanofvaly"]
openGraphImageUrl: "https://opengraph.githubassets.com/44c03943f3d7c30ccf36d9610b9f970697003c6f8c65a294983099fa33566b99/amanofvaly/crowbarr"
---

# Crowbarr

**Audio-grounded subtitle synchronization and transcription for the `*arr` ecosystem.**

Crowbarr watches your Sonarr and Radarr libraries and keeps subtitles in sync with the
dialogue. It waits for Bazarr to find a human-written subtitle, checks that subtitle's
timing against the audio with Whisper, and corrects it only when the audio says it is
wrong. When no subtitle turns up, it transcribes one.

Results are written as `<filename>.crowbarr.en.srt` next to the video. Your media and
your existing subtitles are never modified.

[workflow.html](https://github.com/amanofvaly/crowbarr/blob/HEAD/workflow.html) walks through the pipeline end to end. Release notes are
in [CHANGELOG.md](https://github.com/amanofvaly/crowbarr/blob/HEAD/CHANGELOG.md).

---

## Features

- Audits existing subtitles against the audio and leaves correct ones alone
- Corrects drift and sync errors instead of replacing the subtitle
- Transcribes from audio when no subtitle is available
- Sonarr and Radarr integration by API polling or webhook
- Configurable grace period for Bazarr, with a notification script for instant handling
- Web dashboard with queues, progress, library search, review and…
