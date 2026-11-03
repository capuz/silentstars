---
repo: "pir0c0pter0/fedora-vivobook-x1407q"
name: "fedora-vivobook-x1407q"
description: "Running Fedora Linux on ASUS Vivobook 14 X1407Q (Qualcomm Snapdragon X X1-26-100). Custom ISO, firmware extraction, DTB workarounds, DKMS fixes — and QNN/HTP inference running on the Hexagon NPU."
readmeQualityOk: true
url: "https://github.com/pir0c0pter0/fedora-vivobook-x1407q"
language: "Shell"
languages: ["Shell", "Batchfile"]
languagePcts: [61, 25]
stars: 9
forks: 1
openIssues: 2
closedIssues: 11
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-03-12T17:38:00Z"
lastCommitAt: "2026-11-03T19:05:07Z"
lastReleaseAt: "2026-08-24T23:45:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 53
maintainers: ["pir0c0pter0"]
openGraphImageUrl: "https://opengraph.githubassets.com/9004313c156a2ed3a34ee2ac9178f50e689193d2e3ed6d243957202ba9906170/pir0c0pter0/fedora-vivobook-x1407q"
---

&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;

A community-maintained Fedora image and hardware support stack for the
**ASUS VivoBook 14 X1407QA**, powered by the Snapdragon X1-26-100. The project
turns the machine into a usable Fedora workstation while the remaining
model-specific support works its way upstream.

> [!WARNING]
> This project targets the **X1407QA only**. Keep Secure Boot disabled, use
> `s2idle` instead of `deep` suspend, and keep the live USB available for
> recovery.

## Download the ISO

### [Download the latest release →](https://github.com/pir0c0pter0/fedora-vivobook-x1407q/releases/tag/fedora44-x1407qa-2026.08.24)

| Image | Value |
|---|---|
| File | `Fedora-44-X1407QA-Linux-7.2-all-2026-08-24.iso` |
| Size | 2,982,281,216 bytes |
| SHA-256 | `00c1660804557c666bf98312a8290f440f28b246ca6cc424894ab25e5bc3bd37` |
| Source snapshot | `caaa24b0a789891417f42345983875f0e4739bab` |

The release is distributed as two XZ parts so every GitHub asset stays below
2 GiB. Download both parts and all checksum files into the same directory:

```bash
sha256sum -c Fedora-44-X1407QA-Linux-7.2-all-2026-08-24.iso.xz.parts.sha256
cat…
