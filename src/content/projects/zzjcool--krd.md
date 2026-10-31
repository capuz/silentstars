---
repo: "zzjcool/krd"
name: "krd"
description: "macOS desktop in a terminal pane over SSH: ScreenCaptureKit capture, kitty graphics rendering, no VNC/codec/extra port"
readmeQualityOk: true
url: "https://github.com/zzjcool/krd"
homepage: "https://github.com/zzjcool/krd#readme"
language: "Swift"
languages: ["Swift"]
languagePcts: [87]
topics: ["kitty-graphics", "macos", "remote-desktop", "screencapturekit", "ssh", "swift", "terminal"]
stars: 100
forks: 3
openIssues: 34
closedIssues: 54
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2026-10-29T12:27:34Z"
lastCommitAt: "2026-10-31T02:00:20Z"
lastReleaseAt: "2026-10-29T14:43:49Z"
status: "newborn"
tags: ["under_pressure"]
healthScore: 88
undervaluedScore: 34
maintainers: ["zzjcool", "zzj"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1454851f90b5d6020bd19b04e5077373a92143fd78d2d61a0bd20dc6690e3d7/zzjcool/krd"
---

# krd — your Mac's desktop, inside a terminal

English | [简体中文](https://github.com/zzjcool/krd/blob/HEAD/README.zh-CN.md)

> **Work in progress.** krd is under active development — features are still landing and behaviour
> can change between releases. Bug reports and rough edges are welcome; see
> [CONTRIBUTING.md](https://github.com/zzjcool/krd/blob/HEAD/CONTRIBUTING.md).

ScreenCaptureKit grabs the screen, kitty graphics escapes carry it to the terminal, and mouse and
keyboard come back on stdin and are injected with `CGEvent`. No VNC, no codec, no extra port, no
client to install — the SSH session you already have *is* the client.

```bash
ssh -t host krd --fps 20        # exit with Ctrl-\
```

## Install

```bash
curl -fsSL https://raw.githubusercontent.com/zzjcool/krd/main/install.sh | sh
```

The script downloads the latest release (one universal binary, Apple Silicon + Intel), verifies its
checksum, signs it locally with a stable identity and drops it in `~/bin/krd`.

```bash
curl -fsSL … | sh -s -- --prefix /usr/local/bin      # somewhere else
curl -fsSL … | sh -s -- --version v0.1.1             # a specific release
curl -fsSL … | sh -s -- --from-source                #…
