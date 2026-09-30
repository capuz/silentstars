---
repo: "Nobook1121/AIBasedTRPG"
name: "AIBasedTRPG"
description: "An AI kp for TRPG"
originalDescription: "An AI kp for TRPG"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Nobook1121/AIBasedTRPG"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [49, 34]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-03-30T15:41:56Z"
lastCommitAt: "2026-09-30T09:57:23Z"
lastReleaseAt: "2026-09-22T15:38:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 43
maintainers: ["Nobook1121"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a56ed5634c71ae27aa52b9b2b52b96ca47b52bb42e94cbacc58bda3d21db86c/Nobook1121/AIBasedTRPG"
---

# AIBasedTRPG

AIBasedTRPG is an AI TRPG assistant tool based on a Flask backend and static HTML/CSS/JavaScript frontend. The current architecture preserves the original pages, interface paths, JSON data formats, and global frontend functions, and gradually splits them into modules that are easier to test and maintain.

## Environment Setup

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

This project also requires `node` to be available on the local machine for building browser-executable scripts from TypeScript source code.

## Startup

After cloning the source code from GitHub, first install dependencies and build the frontend:

```powershell
npm install
npm run build:frontend
```

Then start the backend service:

```powershell
python server.py
```

The service reads the port configuration from `data/config/network.json` by default, and uses `8086` when unconfigured. You can also pass the port via command line:

```powershell
python server.py 8090
```

If the target port is already in use, the service will attempt to find a nearby available port and output the listening address in the logs, for example `listening on…
