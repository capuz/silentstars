---
repo: "Timtam/rabbit"
name: "rabbit"
description: "A standalone executable to install / update REAPER, OSARA, SWS, ReaPack, ReaKontrol and more in one go"
url: "https://github.com/Timtam/rabbit"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
stars: 17
forks: 3
openIssues: 2
closedIssues: 4
watchers: 6
contributors: 5
recentReleases: 5
createdAt: "2026-05-01T12:30:29Z"
lastCommitAt: "2026-06-30T06:51:19Z"
lastReleaseAt: "2026-06-10T12:48:34Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 91
undervaluedScore: 47
maintainers: ["Timtam", "github-actions[bot]", "math65"]
openGraphImageUrl: "https://opengraph.githubassets.com/39570c66c735f356fc8fef5b690b4bb7a6cd2088556f5c1742daf00180eb4aff/Timtam/rabbit"
---

# RABBIT — REAPER Accessibility Bootstrap & Bundle Installation Tool

RABBIT sets up a fully accessible REAPER on Windows and macOS in a few clicks.
Instead of hunting through download pages, copying files into the right
folders, and fighting installers that fight your screen reader, you launch one
small program and it does the work.

RABBIT installs and keeps up to date:

- **REAPER** — the DAW itself
- **OSARA** — the screen-reader extension that makes REAPER usable with
  NVDA, JAWS, Narrator, and VoiceOver
- **SWS** — the popular SWS Extension
- **ReaPack** — REAPER's package manager
- **ReaKontrol** — Native Instruments Komplete Kontrol support
- **JAWS-for-REAPER scripts** *(Windows only, when JAWS is detected)*
- **FFmpeg** *(Windows only, opt-in)* — the shared FFmpeg runtime
  (`avformat`, `avcodec`, …) that REAPER's video decoder loads from
  `UserPlugins`. Pulled from
  [Gyan.dev](https://www.gyan.dev/ffmpeg/builds/) on x64 and
  [tordona/ffmpeg-win-arm64](https://github.com/tordona/ffmpeg-win-arm64)
  on ARM64. Pinned to the latest stable FFmpeg major REAPER's video
  decoder is known to support (currently 8.x). Unticked by default so
  it doesn't surprise users who…
