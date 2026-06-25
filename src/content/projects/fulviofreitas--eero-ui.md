---
repo: "fulviofreitas/eero-ui"
name: "eero-ui"
description: "Modern web dashboard for managing Eero mesh networks - Built with Svelte + FastAPI"
url: "https://github.com/fulviofreitas/eero-ui"
language: "Svelte"
languages: ["Svelte", "Python"]
languagePcts: [46, 34]
topics: ["dark-theme", "docker", "eero", "fastapi", "mesh-network", "python", "self-hosted", "svelte", "sveltekit", "typescript"]
stars: 9
forks: 3
openIssues: 1
closedIssues: 7
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-01-15T04:29:27Z"
lastCommitAt: "2026-06-25T02:08:45Z"
lastReleaseAt: "2026-01-16T05:26:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 53
maintainers: ["ff-renovate[bot]", "fulviofreitas", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/adb69fef76f88da221d937d107a74b53f554fd8559eaa7e7714d6ed01a4fa06b/fulviofreitas/eero-ui"
---

# 🖥️ Eero UI

**A sleek dashboard for managing your Eero mesh network**

---

_A modern, responsive web dashboard for Eero network management._  
_Built for operators who want fast, efficient network control._

[Get Started](#-quick-start) · [Documentation](#-documentation) · [Features](#-features) · [License](#-license)

</div>

---

## 📸 Screenshots

| Dark Theme | Light Theme |
|:----------:|:-----------:|
|  |  |

| Devices | Eeros | Profiles |
|:-------:|:-----:|:--------:|
|  |  |  |

| Topology | Network | Login |
|:--------:|:-------:|:-----:|
|  |  |  |

---

## ✨ Features

| 📊 Monitor | 🎛️ Control | 🎨 Experience |
|-----------|-----------|--------------|
| Network health & speed tests | Block/unblock devices | Dark theme dashboard |
| Device listing & search | Pause/unpause profiles | Real-time filtering |
| Eero node status | Reboot nodes | Optimistic UI updates |

---

## 🚀 Quick Start

```bash
# Pull and run
docker run -d --name eero-ui -p 8000:8000 \
  -v eero-data:/data \
  -e EERO_DASHBOARD_SESSION_SECRET=$(openssl rand -hex 32) \
  ghcr.io/fulviofreitas/eero-ui:latest
```

Open **http://localhost:8000** 🎉

> 💡 Or clone & run locally: `./start.sh`

---

##…
