---
repo: "zzjcool/krd"
name: "krd"
description: "macOS desktop in a terminal pane over SSH: ScreenCaptureKit capture, kitty graphics rendering, no VNC/codec/extra port"
readmeQualityOk: true
url: "https://github.com/zzjcool/krd"
homepage: "https://github.com/zzjcool/krd#readme"
language: "Swift"
languages: ["Swift"]
languagePcts: [91]
topics: ["kitty-graphics", "macos", "remote-desktop", "screencapturekit", "ssh", "swift", "terminal"]
stars: 129
forks: 4
openIssues: 0
closedIssues: 110
watchers: 1
contributors: 3
recentReleases: 4
createdAt: "2026-10-29T12:27:34Z"
lastCommitAt: "2026-11-02T17:57:16Z"
lastReleaseAt: "2026-11-02T08:13:52Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 38
maintainers: ["zzjcool", "zzj"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f4776c200cfb51929c07da21f0c8bcd40f8308230326f05f9f940794003f0ca/zzjcool/krd"
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
