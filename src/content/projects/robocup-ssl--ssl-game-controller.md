---
repo: "RoboCup-SSL/ssl-game-controller"
name: "ssl-game-controller"
description: "The game controller for matches in the RoboCup Small Size league"
readmeQualityOk: true
url: "https://github.com/RoboCup-SSL/ssl-game-controller"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [46, 37]
stars: 28
forks: 58
openIssues: 10
closedIssues: 17
watchers: 9
contributors: 36
recentReleases: 0
createdAt: "2018-08-04T16:31:23Z"
lastCommitAt: "2026-07-14T05:54:20Z"
lastReleaseAt: "2018-09-13T21:37:12Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 64
maintainers: ["renovate[bot]", "g3force", "EvanJayChou"]
openGraphImageUrl: "https://opengraph.githubassets.com/619b0c7470196817d611655974c21e913b5999abed8534f2feca319a938a4bb7/RoboCup-SSL/ssl-game-controller"
---

# ssl-game-controller

The game controller for matches in the RoboCup Small Size league, introduced at RoboCup 2019 as a replacement of
the [ssl-refbox](https://github.com/RoboCup-SSL/ssl-refbox).

## Add your team name

If you are a new team, please add your team name to [internal/app/engine/config.go](https://github.com/RoboCup-SSL/ssl-game-controller/blob/HEAD/internal/app/engine/config.go).

## Usage

If you just want to use this app, simply download the
latest [release binary](https://github.com/RoboCup-SSL/ssl-game-controller/releases/latest). The binary is
self-contained. No dependencies are required.

You can also use pre-build docker images:

```shell script
docker pull robocupssl/ssl-game-controller
# Run GC with default configuration
docker run -p 8081:8081 robocupssl/ssl-game-controller -address :8081
# Mount local directories
docker run -p 8081:8081 \
  # Local config dir
  -v "$(pwd)"/config:/config \
  # Local data dir (current state)
  -v "$(pwd)"/data:/data \
  robocupssl/ssl-game-controller
```

The controller will generate a default config to [config/](https://github.com/RoboCup-SSL/ssl-game-controller/blob/HEAD/config/) on the first start. Afterwards, you can…
