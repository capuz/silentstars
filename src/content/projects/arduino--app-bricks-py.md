---
repo: "arduino/app-bricks-py"
name: "app-bricks-py"
description: "The code of the Arduino App Lab Bricks"
readmeQualityOk: true
url: "https://github.com/arduino/app-bricks-py"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 31
forks: 34
openIssues: 2
closedIssues: 11
watchers: 2
contributors: 23
recentReleases: 0
createdAt: "2025-10-09T13:31:54Z"
lastCommitAt: "2026-09-22T08:44:49Z"
lastReleaseAt: "2026-02-19T14:20:20Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 95
undervaluedScore: 64
maintainers: ["rjtokenring", "github-actions[bot]", "robgee86"]
openGraphImageUrl: "https://opengraph.githubassets.com/51f814a5af5fa7b2d7d342fc2568932465174bf8589c4f85872740bcffe40f9b/arduino/app-bricks-py"
---

# Arduino Apps Brick Library

The library is composed of configurable and reusable 'Bricks', based on optional infrastructure (executed via Docker Compose) and wrapping Python® code (to simplify code usage).

## What is a Brick?

A **Brick** is a modular, reusable building block that provides specific functionality for Arduino applications. Each Brick is self-contained with standardized configuration, consistent APIs, and optional Docker service definitions.

## Directory Structure

Every Brick must follow this standardized directory structure:

```
src/arduino/app_bricks/brick_name/
├── __init__.py                 # Required: Public API exports
├── brick_config.yaml          # Required: Brick metadata
├── brick_compose.yaml         # Optional: Docker services
├── README.md                  # Required: Documentation
├── [implementation_files.py]  # Brick logic
└── [assets]                   # Static resources
```

Brick usage examples live in the [app-bricks-examples](https://github.com/arduino/app-bricks-examples) repository, under the `bricks/` folder.

## Configuration variables

| Variable  | Description |
| ------------- | ------------- |
| APP_HOME  | Base application…
