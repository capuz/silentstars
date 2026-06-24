---
repo: "DroneDB/Hub"
name: "Hub"
description: "Web GUI for DroneDB"
url: "https://github.com/DroneDB/Hub"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [90]
stars: 8
forks: 4
openIssues: 9
closedIssues: 56
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2020-12-11T18:45:28Z"
lastCommitAt: "2026-06-24T00:24:50Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 96
undervaluedScore: 77
maintainers: ["HeDo88TH"]
openGraphImageUrl: "https://opengraph.githubassets.com/0bc8160f4a9593c3e7ccfbc7a1ef936deaa0c6681262685f46ab529687761149/DroneDB/Hub"
---

# Hub
JS Client Application for Registry

![image](https://user-images.githubusercontent.com/1951843/101946775-6be59d80-3bbd-11eb-8895-df5a29e47e3f.png)

## Build

The project is compatible with Node.js 18+ (recommended: 22.x LTS).

```bash
git clone https://github.com/DroneDB/Hub --recurse-submodules && cd Hub
npm install
npm run build
```

### Alternative: Direct webpack command

If you prefer to run webpack directly:

```bash
npm install
node --openssl-legacy-provider ./node_modules/webpack/bin/webpack.js
```

> **Note**: The `--openssl-legacy-provider` flag is required for Node.js 17+ due to OpenSSL 3.0 changes. The `npm run build` script handles this automatically.

## Run

```bash
cd build
python -m http.server 8080
```

Open a web browser to http://localhost:8080
