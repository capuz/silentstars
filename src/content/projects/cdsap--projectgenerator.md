---
repo: "cdsap/ProjectGenerator"
name: "ProjectGenerator"
description: "Generation of modularized Gradle projects in different logic layers with CLI or website https://cdsap.github.io/ProjectGenerator/"
readmeQualityOk: true
url: "https://github.com/cdsap/ProjectGenerator"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [98]
stars: 98
forks: 1
openIssues: 5
closedIssues: 44
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2023-09-06T23:21:58Z"
lastCommitAt: "2026-11-22T02:11:51Z"
lastReleaseAt: "2025-08-02T00:30:14Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 46
maintainers: ["renovate[bot]", "cdsap"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0c543421112cc5fcf40f85e3cc42d142acf96bd50c5232b1d524a6ec1f33066/cdsap/ProjectGenerator"
---

# Project Generator
CLI generating modularized Gradle projects based on different shapes

If you need to create small or medium projects (<300 modules), you can use the web generator: https://cdsap.github.io/ProjectGenerator/

# Usage
## CLI
### Install

#### Homebrew
```bash
brew tap cdsap/tap
brew trust cdsap/tap   # required on Homebrew 7+
brew install project-generator
```

#### Manual download
```
curl -L https://github.com/cdsap/ProjectGenerator/releases/download/v0.7.1/projectGenerator  --output projectGenerator
chmod 0755 projectGenerator
```
Requires a JDK on `PATH` (Java 23+).

### Modes

#### 1. Generate Project (default)
```bash
./projectGenerator generate-project --modules 100
```
This command generates a project with the specified shape, layers, and modules. All options below can be combined with this mode.

#### 2. Generate YAML Versions File
```bash
./projectGenerator generate-yaml-versions
```

This command generates a `versions.yaml` file template for custom dependency versions.
Then, you can use the versions.yaml in the `generate-project` command:
```
./projectGenerator generate-project --shape triangle --layers 5 --modules 100 --versions-file versions.yaml
```
