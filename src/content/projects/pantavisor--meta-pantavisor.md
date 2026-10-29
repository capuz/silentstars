---
repo: "pantavisor/meta-pantavisor"
name: "meta-pantavisor"
description: "Yocto Layer for Pantavisor.io"
readmeQualityOk: true
url: "https://github.com/pantavisor/meta-pantavisor"
language: "BitBake"
languages: ["BitBake", "Shell"]
languagePcts: [73, 26]
stars: 10
forks: 7
openIssues: 0
closedIssues: 3
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2023-04-20T08:11:36Z"
lastCommitAt: "2026-10-29T14:07:13Z"
lastReleaseAt: "2026-04-01T14:53:18Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 98
undervaluedScore: 80
maintainers: ["ferlzc", "highercomve", "asac"]
openGraphImageUrl: "https://opengraph.githubassets.com/baad029de33ebd886f71fe4ec6dbe7231fea906c35fb2cfeb86da35f031adada/pantavisor/meta-pantavisor"
---

# meta-pantavisor

Yocto/OpenEmbedded layer for building [Pantavisor](https://pantavisor.io), a container-based embedded Linux system runtime. Provides recipes, BitBake classes, and KAS configurations for building complete BSP images with container support.

## Quick Start

```bash
# Interactive configuration menu
kas menu Kconfig

# Build for x86_64 (appengine / Docker)
./kas-container build .github/configs/release/docker-x86_64-scarthgap.yaml

# Build for Raspberry Pi
./kas-container build kas/machines/rpi.yaml:kas/scarthgap.yaml:kas/bsp-base.yaml
```

See [docs/how-to-build/get-started.md](https://github.com/pantavisor/meta-pantavisor/blob/HEAD/docs/how-to-build/get-started.md) for the full guide.
See [docs/how-to-build/pantavisor-development.md](https://github.com/pantavisor/meta-pantavisor/blob/HEAD/docs/how-to-build/pantavisor-development.md) for iterating on Pantavisor source code with the workspace overlay.

## Documentation

| Section | Description |
|---------|-------------|
| [docs/overview/](https://github.com/pantavisor/meta-pantavisor/blob/HEAD/docs/overview/) | Layer architecture, build system, CI/CD |
|…
