---
repo: "dizys/t3code-docker"
name: "t3code-docker"
description: "A docker recipe for running t3code with batteries included."
readmeQualityOk: true
url: "https://github.com/dizys/t3code-docker"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [83]
stars: 7
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-09-08T19:02:13Z"
lastCommitAt: "2026-10-21T08:49:33Z"
lastReleaseAt: "2026-10-15T07:05:33Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 59
maintainers: ["dizys", "0libote"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3d5e68a4216741572efe910ae58eda45274b8be2e7b701d2d9b176f4fed481d/dizys/t3code-docker"
---

with coding agents and language toolchains installed on first start.</strong></p>

T3 Code is a control surface for coding agents. The server runs the agents, git
and your terminals; the desktop, web and phone apps connect to it. This image
packages that server with the agent CLIs, language toolchains, a headless
browser, and a **setup page** for pairing devices, signing agents in and
keeping everything up to date, all without a shell in the container.

> [!NOTE]
> T3 Code is alpha software and changes quickly, and so does this image.

## Quick start

```bash
mkdir -p workspace
docker run -d --name t3code --restart unless-stopped \
  -p 127.0.0.1:3773:3773 -p 127.0.0.1:3774:3774 \
  -v t3-home:/home/t3 -v "$PWD/workspace:/workspace" \
  -e PUID="$(id -u)" -e PGID="$(id -g)" \
  --shm-size 1g \
  dizys/t3code-docker
```

1. **Get the setup key:** `docker logs t3code 2>&1 | grep -A1 T3_SETUP_KEY`
2. **Open <http://localhost:3774>** and enter it. **Overview** walks you through
   the rest: set a public URL, pair a device with a QR code, and sign agents in.
3. **In T3 Code**, turn the agents on under **Settings → Providers**.

On first start, the agents and toolchains install onto the…
