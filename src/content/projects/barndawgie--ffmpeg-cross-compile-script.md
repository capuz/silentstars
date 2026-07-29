---
repo: "barndawgie/ffmpeg-cross-compile-script"
name: "ffmpeg-cross-compile-script"
description: "A script to cross-compile FFmpeg for Windows"
readmeQualityOk: true
url: "https://github.com/barndawgie/ffmpeg-cross-compile-script"
language: "Shell"
languages: ["Shell"]
languagePcts: [96]
stars: 11
forks: 7
openIssues: 1
closedIssues: 7
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2019-07-18T21:06:53Z"
lastCommitAt: "2026-07-29T06:14:04Z"
lastReleaseAt: "2026-07-27T16:30:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 54
maintainers: ["barndawgie", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3fec83157f8291fe50c54d37d135ee382ddcc82177406a33e0f09eb7a1e524db/barndawgie/ffmpeg-cross-compile-script"
---

# ffmpeg-cross-compile-script

A script to cross-compile FFmpeg for Windows on Ubuntu 22.04. It's not dissimilar from the widely known ffmpeg-build-helpers, but uses provided mingw packages rather than requiring you to build your own toolchain, and builds everything for 64-bit Windows.

This (non-free) build includes stable releases of:

* x264
* x265
* libfdk-aac
* aom (AV1 codec)
* openjpeg
* SDL (to enable building of ffplay)
* libfreetype, harfbuzz, libfontconfig, and libfribidi (for Drawtext support)
* libass
* openssl 1.1.1
* libxml2

Tested using Ubuntu 22.04 running on WSL.

# Usage

Do a one-time install of all dependencies by running the following command (probably as root/sudo):

`./Prep_System.sh`

Then simply execute the `./Cross-Compile_FFMPEG.sh` script; it will pull required packages down from Git, cross-compile for 64-bit Windows, and deposit the resulting binaries in `./ffmpeg_install/bin/`.
