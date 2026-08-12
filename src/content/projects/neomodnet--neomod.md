---
repo: "neomodnet/neomod"
name: "neomod"
description: "cookie clicker with extra features"
readmeQualityOk: true
url: "https://github.com/neomodnet/neomod"
homepage: "https://neomod.net"
language: "C++"
languages: ["C++"]
languagePcts: [83]
topics: ["mcosu", "osu", "osugame"]
stars: 45
forks: 5
openIssues: 98
closedIssues: 100
watchers: 1
contributors: 15
recentReleases: 0
createdAt: "2025-05-01T13:08:47Z"
lastCommitAt: "2026-08-12T05:15:17Z"
lastReleaseAt: "2025-09-17T18:47:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 53
maintainers: ["whrvt", "kiwec"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a6a70537bf7d60a010be146d44097165af6df865453c2b49a90d53a768c72cc/neomodnet/neomod"
---

# neomod

This is a third-party fork of McKay's [McOsu](https://store.steampowered.com/app/607260/McOsu/).

If you need help, contact `kiwec` or `spec.ta.tor` on Discord, either by direct message or on [the neomod server](https://discord.com/invite/YWPBFSpH8v).

### Building

The recommended way to build (and the way releases are made) is using gcc/gcc-mingw.

- (Only necessary if manually adding/removing sources) For all *nix systems, run `./autogen.sh` in the top-level folder (once) to generate the build files.
- Create and enter a build subdirectory; e.g. `mkdir build && cd build`
- On Linux, for Linux -> run `../configure`, then `make install`
  - This will build and install everything under `./dist/bin-$arch`, configurable with the `--prefix` option to `configure`
- On Linux/WSL, for Windows -> run ` ../configure --host=x86_64-w64-mingw32`, then `make install`

For an example of a GCC (Linux) build on Debian, see the [Linux](https://github.com/neomodnet/neomod/blob/master/.github/workflows/linux-multiarch.yml) Actions workflow (and [associated](https://github.com/neomodnet/neomod/blob/9c49f3f0d8924989092252ece4aeb9dec3f0c8bd/.github/workflows/docker/Dockerfile)…
