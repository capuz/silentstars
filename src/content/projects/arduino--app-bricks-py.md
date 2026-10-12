---
repo: "arduino/app-bricks-py"
name: "app-bricks-py"
description: "The code of the Arduino App Lab Bricks"
readmeQualityOk: true
url: "https://github.com/arduino/app-bricks-py"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 32
forks: 36
openIssues: 2
closedIssues: 11
watchers: 2
contributors: 24
recentReleases: 0
createdAt: "2025-10-09T13:31:54Z"
lastCommitAt: "2026-10-12T11:15:31Z"
lastReleaseAt: "2026-02-19T14:20:20Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 96
undervaluedScore: 66
maintainers: ["robgee86", "dsammaruga", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d55cd0c4c721648e104ec868f357f9ab0d8da9aaf4fc687237e7a9e02f88114f/arduino/app-bricks-py"
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
