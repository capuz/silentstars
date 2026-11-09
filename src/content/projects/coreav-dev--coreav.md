---
repo: "coreav-dev/coreav"
name: "coreav"
description: "A safe and fast media toolkit, written in Rust"
readmeQualityOk: true
url: "https://github.com/coreav-dev/coreav"
homepage: "https://coreav.dev"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [62, 33]
topics: ["audio", "ffmpeg", "media", "mp4", "rust", "video"]
stars: 6
forks: 0
openIssues: 16
closedIssues: 24
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-28T06:09:16Z"
lastCommitAt: "2026-11-09T03:29:31Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 92
undervaluedScore: 51
maintainers: ["gunwooterry"]
openGraphImageUrl: "https://opengraph.githubassets.com/c79394447192611610f44d8e2cffc314451c0144ba988db9db36e1fd9ec741cb/coreav-dev/coreav"
---

## Highlights

- **Safe.** Every container parser is safe Rust with limits on memory and work, so a damaged or hostile file gives an error, never a crash. [Safety](https://coreav.dev/docs/safety)
- **Fast.** CoreAV reads only the bytes a job needs, from a local file or an `https://` URL, and every speed claim is measured against FFmpeg in the open. [Measurements](https://coreav.dev/docs/measurements)
- **Drop-in.** `coreav ffprobe` and `coreav ffmpeg` take the command lines your scripts already run, and hand any line CoreAV doesn't run natively to the FFmpeg installed on the machine. [Commands](https://coreav.dev/docs/commands)
- **Everywhere.** Native binaries for Linux, macOS and Windows, and an npm package that runs as WebAssembly wherever else Node.js runs. [Platforms](https://coreav.dev/docs/platforms)

## Installation

Today you can only build CoreAV from source. Release binaries and the npm package come with 0.1.0.

With Rust 1.89 or later, git, and a C compiler installed:

```sh
git clone https://github.com/coreav-dev/coreav
cd coreav
cargo install --locked --path crates/coreav-cli --profile dist
```

Cargo puts `coreav` in `~/.cargo/bin`.…
