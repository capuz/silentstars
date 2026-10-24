---
repo: "ImranR98/DSCPLN"
name: "DSCPLN"
description: "Every data backup and sync workflow in one place. D$CPLN is a monorepo of small always-on Node apps — one per function — served behind a single host (or on their own ports) with a portal at /."
readmeQualityOk: true
url: "https://github.com/ImranR98/DSCPLN"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [90]
topics: ["backup", "docker", "homelab", "nextcloud", "nodejs", "self-hosted", "whatsapp"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-10-01T04:27:35Z"
lastCommitAt: "2026-10-24T00:15:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 62
maintainers: ["ImranR98"]
openGraphImageUrl: "https://opengraph.githubassets.com/94fe848a43c95b77afdf94f2fdd8eeec0eb25942b4de1bf3bdddd59e6093078e/ImranR98/DSCPLN"
---

# D$CPLN

**Self-hosted apps for your personal data.**

D$CPLN is a set of small web apps that run on your own machine or server. Use
one app or run several behind a single portal: track a budget in Excel, organize
photos and voice notes, browse WhatsApp exports, and run scheduled backup or
sync tasks.

Each app is independent and configured at runtime, so your paths, accounts and
data stay out of the code and images.

**In a hurry?**

- [Run it with Docker Compose](#quick-start)
- [Choose an app](#apps)
- [Configure it](https://github.com/ImranR98/DSCPLN/blob/HEAD/docs/CONFIGURATION.md)
- [Deploy and operate it](https://github.com/ImranR98/DSCPLN/blob/HEAD/docs/OPERATIONS.md)

## Quick start

You need Docker with Compose. To develop locally, you also need Node.js 26+.

```sh
git clone https://github.com/ImranR98/DSCPLN.git
cd DSCPLN

# Start from the configuration template.
cp -r config-template dscpln-config
cp dscpln-config/secrets.example.json dscpln-config/secrets.json

# Edit paths and settings, then start the stack.
# docker-compose.example.yaml mounts ./dscpln-config.
docker compose -f docker-compose.example.yaml up -d
```

Open <http://localhost:8080> for the portal. The…
