---
repo: "FadeHack/strypt"
name: "strypt"
description: "Remove metadata from photos, PDFs, Office documents, audio and video. Strips EXIF, GPS location, camera serial numbers, author names and timestamps. A desktop app and command-line tool, written in Rust, that works offline."
readmeQualityOk: true
url: "https://github.com/FadeHack/strypt"
language: "Rust"
languages: ["Rust"]
languagePcts: [76]
topics: ["anonymity", "cli", "command-line-tool", "exif", "exif-remover", "gps", "journalism", "metadata", "metadata-removal", "offline"]
stars: 33
forks: 1
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-08-18T22:46:27Z"
lastCommitAt: "2026-10-22T08:52:31Z"
lastReleaseAt: "2026-09-25T06:58:55Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 69
undervaluedScore: 34
maintainers: ["FadeHack"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1338896507/45434acd-af10-49c9-91d0-86a28eac5165"
---

Photos carry GPS coordinates and camera serial numbers. PDFs carry author names, organisation
names, and editing timestamps. Word documents carry all of that plus the editing sessions they
were written in, and the photographs pasted into them arrive with their own GPS still attached.
None of it is visible in a normal viewer, and all of it survives to publication. strypt finds it
and strips it out.

A single self-contained binary. Memory-safe Rust. **No network access in any code path.**

> **Status: `0.3.0`. No external audit.** 0.1.1 and earlier could drop a page from a PDF whose
> page tree named one object twice, and 0.1.0 left the Exif of photos inside PDFs; see
> [`CHANGELOG.md`](https://github.com/FadeHack/strypt/blob/HEAD/CHANGELOG.md). Read
> [`docs/KNOWN_LIMITATIONS.md`](https://github.com/FadeHack/strypt/blob/HEAD/docs/KNOWN_LIMITATIONS.md) before relying on strypt.
> Phases 0–6 are complete: binaries, a Homebrew tap and crates.io, with install steps tested on
> fresh CI runners, a desktop app tried by non-technical people on macOS and Linux, and right-click
> entries on Linux and Windows…
