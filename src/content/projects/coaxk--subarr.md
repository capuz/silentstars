---
repo: "coaxk/subarr"
name: "subarr"
description: "The coordination, measurement, and quality layer that subgen never had. A peer service for the *arr family that adds calibrated audio-language detection, provider success leaderboards, and (v1.1) an in-app Whisper tuning lab."
url: "https://github.com/coaxk/subarr"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [70, 27]
topics: ["arr-stack", "bazarr", "docker", "fastapi", "plex", "radarr", "sonarr", "subtitles", "tautulli", "whisper"]
stars: 101
forks: 0
openIssues: 21
closedIssues: 123
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-27T09:31:28Z"
lastCommitAt: "2026-06-28T03:09:13Z"
lastReleaseAt: "2026-06-12T16:36:46Z"
status: "newborn"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 97
undervaluedScore: 35
maintainers: ["coaxk", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/30b6fc141d9eb6c21985b863d4dbbafa0a173cdd6ef7729fbacb2b146df594a8/coaxk/subarr"
---

# subarr

The coordination layer for the *arr subtitle stack. Stands beside Bazarr.

Subarr decides what subtitles are actually missing across your library, which providers are worth your time, and when it is worth running Whisper. Bazarr finds and downloads. Subgen transcribes. Subarr coordinates.

> Built with AI assistance from Claude. Code is open, every PR is human-reviewed. Telemetry, security scans, and a published test count are how we stay honest about that.

---

## New in 2.2

Filling more gaps, finding more controls, and a deep reliability pass. Non-breaking — upgrades transparently.

- **Blacklist a bad sub without leaving subarr.** When a provider sub is broken, blacklist it from Aftercare or the Library tree and Bazarr stops re-fetching that release. A shared panel shows the file's Bazarr download history and blacklists the offending provider sub through Bazarr's own API.
- **Transcribe a full sub on forced-only files.** A file whose only English sub is *forced* (foreign-dialogue-only) used to sit in a "subgen will skip" bucket. Now each row has a **Transcribe full sub** button that generates a complete subtitle for just that file, without flipping subgen's global…
