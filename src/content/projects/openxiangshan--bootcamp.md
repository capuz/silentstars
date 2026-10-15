---
repo: "OpenXiangShan/bootcamp"
name: "bootcamp"
description: "XiangShan bootcamp"
readmeQualityOk: true
url: "https://github.com/OpenXiangShan/bootcamp"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [86]
stars: 7
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 27
recentReleases: 1
createdAt: "2025-09-02T09:40:53Z"
lastCommitAt: "2026-10-15T08:32:12Z"
lastReleaseAt: "2026-10-15T03:19:28Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 83
undervaluedScore: 58
maintainers: ["happy-lx", "ngc7331", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bad331aebad04dba3b4e196b41f1aa803443d4f03caed9be01fe2ddd43b271ae/OpenXiangShan/bootcamp"
---

# XiangShan bootcamp

Accelerate your agile hardware development with XiangShan!
This bootcamp teaches you how to build, run, and experiment with the XiangShan out-of-order processor, giving you hands-on experience with one of the most advanced open-source CPUs.

## Prerequisites

### Bare metal

- Install Python.
- Install Jupyter Notebook.
- Run `download_assets.sh` to download/extract necessary assets from our GitHub release page.
- Use [Jupyter extension](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter) in [VSCode](https://code.visualstudio.com)/[code-server](https://github.com/coder/code-server) is recommended.
- Install dependencies to run/build XiangShan (e.g. `gcc`, `libsqlite3-dev`), please refer to [xs-env](https://docs.xiangshan.cc/zh-cn/latest/tools/xsenv) documentation for details.

### Code-server (Docker)

- Install Docker & Docker compose.
- Run `docker-compose up -d` to start the code-server container.
- Access code-server at `http://localhost:8443` (default no password).

#### Enviroment variables

Basically inherited from [linuxserver/code-server](https://github.com/linuxserver/docker-code-server#usage)

| Env | Default | Description |
|…
