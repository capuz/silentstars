---
repo: "grisuno/FreeDom"
name: "FreeDom"
description: "A free and open-source minimal web browser written in C, focused on Zero Trust and Zero Knowledge principles."
readmeQualityOk: true
url: "https://github.com/grisuno/FreeDom"
homepage: "https://grisuno.github.io/FreeDom/"
language: "C"
languages: ["C"]
languagePcts: [98]
topics: ["browser", "modern-c", "privacy-first", "untraceable", "zero-knowledge", "zero-trust"]
stars: 17
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 2
createdAt: "2026-06-16T05:13:55Z"
lastCommitAt: "2026-07-17T06:02:22Z"
lastReleaseAt: "2026-06-19T19:11:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 46
maintainers: ["grisuno"]
openGraphImageUrl: "https://opengraph.githubassets.com/d931ac80a3f282a84101c2025b90b673c199dec0ddbc7d19dfe4d63da2455986/grisuno/FreeDom"
---

# Freedom

From the creators of LazyOwn Redteam Framework comes a free and open-source minimal web
browser written in C, focused on Zero Trust and Zero Knowledge principles.

## Quick Start

**Easiest way to try Freedom right now:**

```bash
git clone https://github.com/grisuno/FreeDom.git
cd FreeDom
```

### Native build (Linux)

**Dependencies:** `libavformat-dev libavcodec-dev libavutil-dev libswscale-dev`
(FFmpeg for H.264/H.265 video decoding), plus the same as the Dockerfile.

```bash
sudo apt install libavformat-dev libavcodec-dev libavutil-dev libswscale-dev
make
./build/freedom
```

### Docker (strongly recommended for testing)

```bash
sudo docker build -t freedom-browser .

sudo docker run -it \
  --name freedom-test \
  -p 8080:8080 \
  --cap-drop=ALL \
  --security-opt no-new-privileges:true \
  --memory="2g" \
  freedom-browser
```

Then open your browser and go to: http://localhost:8080/vnc.html

## Philosophy

Freedom (Free + DOM) is a lightweight, security-first web browser built from the
ground up in modern C. It prioritizes user privacy, strong isolation, and minimal
attack surface over feature bloat.

The name reflects its core goals:
- **Free**: Libre…
