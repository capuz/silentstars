---
repo: "Schwponaco-org/lapse"
name: "lapse"
description: "Subtitle sync engine \"Language-Agnostic Playback Synchronization Engine\""
readmeQualityOk: true
url: "https://github.com/Schwponaco-org/lapse"
language: "C++"
languages: ["C++"]
languagePcts: [81]
stars: 37
forks: 2
openIssues: 2
closedIssues: 15
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-05-14T08:34:14Z"
lastCommitAt: "2026-10-25T09:00:46Z"
lastReleaseAt: "2026-08-10T15:01:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 44
maintainers: ["rs-jensen", "cowmuncher"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ec3b59ca9bb60446f62f2ff2f2acbe933ae9d3a687681a97e60da03e996e93f/Schwponaco-org/lapse"
discussionCount: 0
---

# LAPSE

**Language-Agnostic Playback Synchronization Engine**

Automatically fixes subtitle sync in your media library. Detects how far off your subtitles are and corrects them, including linear drift caused by framerate mismatches between the video and the subtitle file.

The `lapse` binary is a C++ engine built on FFmpeg, libfvad and FFTW3. It syncs one file at a time by default, or a whole stack of them in one process with `--batch`. The Docker image wraps that engine with a Python watcher that scans your library, matches subtitles to video and keeps a SQLite record so nothing gets processed twice. Run the binary by hand for a single file, or run the container to keep a whole library synced on its own.

## Try it in the browser

This is the same engine compiled to WebAssembly, not a separate implementation. It runs in the tab, so a video never leaves the machine it is on.

### [schwponaco.org/lapse](https://schwponaco.org/lapse/)

Good for a file or two. A library still wants the binary or the Docker image above, since neither of those forgets what it already synced.

A Jellyfin plugin is available at…
