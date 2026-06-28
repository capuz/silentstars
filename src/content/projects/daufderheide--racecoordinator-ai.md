---
repo: "daufderheide/racecoordinator_ai"
name: "racecoordinator_ai"
description: "RaceCoordinator 2.0 built with google antigravity"
url: "https://github.com/daufderheide/racecoordinator_ai"
language: "TypeScript"
languages: ["TypeScript", "Java"]
languagePcts: [53, 30]
stars: 5
forks: 7
openIssues: 36
closedIssues: 309
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-01-13T04:05:35Z"
lastCommitAt: "2026-06-28T03:06:57Z"
lastReleaseAt: "2026-05-28T18:48:49Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 97
undervaluedScore: 79
maintainers: ["crxed9"]
openGraphImageUrl: "https://opengraph.githubassets.com/358b25687508f8f110e0a716410fec62a4cca7c5f585a13e580df9be5794058d/daufderheide/racecoordinator_ai"
discussionCount: 1
---

# racecoordinator_ai
RaceCoordinator 2.0 built with google antigravity

## How to Run

### How to Run (Linux/Mac)

#### First Time Setup
The `run_server_headless.sh` script handles dependency downloading (including `protoc`) automatically.
The `run_client.sh` script handles `npm install` automatically if `node_modules` is missing or the client dependency manifest changed.

- Check permissions: `chmod +x run_server_headless.sh run_client.sh`
- Run Server: `./run_server_headless.sh`
- Run Client: `./run_client.sh` (will take a moment to install dependencies first time)

**Note:** The script incrementally compiles. If you need a clean build (e.g., weird compilation errors), run `cd server && mvn clean` manually, then run `./run_server_headless.sh` again.

### How to Run (Windows)

#### First Time Setup
The `run_server_headless.ps1` script handles dependency downloading (including `protoc`) automatically.
The `run_client.ps1` script handles `npm install` automatically if `node_modules` is missing or the client dependency manifest changed.

- Run Server: `.\run_server_headless.ps1`
- Run Client: `.\run_client.ps1` (will take a moment to install dependencies first time)

**Note:** If…
