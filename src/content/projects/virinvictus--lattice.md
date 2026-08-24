---
repo: "VirInvictus/Lattice"
name: "Lattice"
description: "CLI/TUI for music collections: ~20 read-only audit/visualization modes (library trees, integrity checks, cover/metadata audit, stats, playlists), plus seven write-capable companion scripts that *do* mutate (`retag`, `genre_tidy`, `cleaner`, `genre_foldermap`, `rerate`, `replaygain`, `apestrip`)."
readmeQualityOk: true
url: "https://github.com/VirInvictus/Lattice"
homepage: "https://virinvictus.github.io/codex/lattice/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["audio", "cli", "cover-art", "ffmpeg", "flac", "id3", "metadata", "mp3", "music", "music-collection"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-08-10T19:31:41Z"
lastCommitAt: "2026-08-24T04:23:21Z"
lastReleaseAt: "2026-03-27T03:50:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 66
maintainers: ["VirInvictus"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f316c30c8699b90b45e4e889c843865629fc9b387901c96bc4ffdc8469a9f86/VirInvictus/Lattice"
---

</p>

</p>

</p>

A CLI/TUI toolkit for music collectors who manage their own libraries. Lattice handles library visualization, integrity verification, cover art extraction, and metadata auditing, built on `mutagen` and `tqdm`, with `flac` and `ffmpeg` shelled out for integrity checks.

> **Lattice is read-only.** It reads tags and decodes audio, and it writes only reports, playlists, and extracted cover art. It never modifies the metadata inside your audio files. The optional companion scripts in `scripts/` are the deliberate exception: they **do** modify files (tags, rating bytes, folder layout) and must be used with caution. See [Companion scripts](#companion-scripts).

> **Note:** This is considered completed software. It is effectively feature complete; bug fixes will be addressed as they come, but no new features are planned. It has been thoroughly tested and is known to be fully functional on the primary development environment: **Fedora Linux 44 (Workstation Edition)**, kernel `7.0.9-205.fc44.x86_64`, on **Python 3.14**, with `flac` and `ffmpeg` from the Fedora repositories. While it is pure Python and should be cross-platform, this specific setup is the only officially…
