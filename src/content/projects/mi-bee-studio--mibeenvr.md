---
repo: "Mi-Bee-Studio/MiBeeNvr"
name: "MiBeeNvr"
description: "Go-based lightweight NVR. Supports RTSP, ONVIF, WebRTC, HTTP-FLV, HLS, RTMP & SRT. Modern embedded web UI, single binary, zero external dependencies, cross-platform & Docker-compatible."
readmeQualityOk: true
url: "https://github.com/Mi-Bee-Studio/MiBeeNvr"
homepage: "https://www.mlsbs.top/#/projects/mibeenvr"
language: "Go"
languages: ["Go"]
languagePcts: [78]
topics: ["golang", "nvr", "onvif", "rtmp", "rtsp"]
stars: 81
forks: 10
openIssues: 5
closedIssues: 28
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-04-27T02:49:31Z"
lastCommitAt: "2026-07-22T05:35:33Z"
lastReleaseAt: "2026-06-15T11:36:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 40
maintainers: ["mickeyzzc"]
openGraphImageUrl: "https://opengraph.githubassets.com/319615294913cfe1eed729b4b31d0d2103d26ee51198d8414c200aa6f69fa722/Mi-Bee-Studio/MiBeeNvr"
---

# MiBee NVR

> **Turn any low-power ARM device into a professional NVR in 60 seconds.**  
> Single binary, zero dependencies, no cloud required. Runs on low-power ARM devices with a 512MB memory budget.

> [**中文**](https://github.com/Mi-Bee-Studio/MiBeeNvr/blob/HEAD/README.zh.md) — [English](https://github.com/Mi-Bee-Studio/MiBeeNvr/blob/HEAD/README.md)

## Quick Start

### One-click Install (Recommended)

```bash
curl -fsSL https://raw.githubusercontent.com/Mi-Bee-Studio/MiBeeNvr/main/install.sh | sudo bash
```

Downloads the binary, creates a system user (`nvr`), generates a config, installs a systemd service, and starts it. Data directory: `/var/lib/mibee-nvr`.

### Option 1: Pre-built Binary

Download the latest binary from [GitHub Releases](https://github.com/Mi-Bee-Studio/MiBeeNvr/releases):

```bash
# AMD64 (most PCs/servers)
wget https://github.com/Mi-Bee-Studio/MiBeeNvr/releases/latest/download/mibee-nvr-amd64
chmod +x mibee-nvr-amd64

# ARM64 (Raspberry Pi 4/5, etc.)
wget https://github.com/Mi-Bee-Studio/MiBeeNvr/releases/latest/download/mibee-nvr-arm64
chmod +x mibee-nvr-arm64

# ARMv7 (Raspberry Pi 2/3, etc.)
wget…
