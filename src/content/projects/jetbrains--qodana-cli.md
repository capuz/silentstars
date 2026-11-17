---
repo: "JetBrains/qodana-cli"
name: "qodana-cli"
description: "🔧 JetBrains Qodana’s official command line tool"
readmeQualityOk: true
url: "https://github.com/JetBrains/qodana-cli"
homepage: "https://www.jetbrains.com/help/qodana/getting-started.html"
language: "Go"
languages: ["Go"]
languagePcts: [91]
topics: ["javascript", "kotlin", "python", "java", "php", "typescript", "static-code-analysis", "cli", "ci", "code-review"]
stars: 242
forks: 25
openIssues: 1
closedIssues: 3
watchers: 3
contributors: 31
recentReleases: 0
createdAt: "2021-12-26T16:23:54Z"
lastCommitAt: "2026-11-17T11:19:01Z"
lastReleaseAt: "2022-04-10T13:07:14Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 40
maintainers: ["renovate[bot]", "krzysztof-waclawik", "bonepl"]
openGraphImageUrl: "https://opengraph.githubassets.com/f23d052c408f68278f939751becc8cb5a60e8a33e110e8aacec1b91e13a5a633/JetBrains/qodana-cli"
---

# Qodana CLI [<img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=304841&theme=dark&period=daily" alt="" align="right" width="190" height="41">](https://www.producthunt.com/posts/jetbrains-qodana)

`qodana` is a simple cross-platform command-line tool to run [Qodana linters](https://www.jetbrains.com/help/qodana/docker-images.html) anywhere with minimum effort required.

#### tl;dr

[Install](https://github.com/JetBrains/qodana-cli/releases/latest) and run:

```console
qodana scan --show-report
```

You can also add the linter by its name with the `--linter` option (e.g. `--linter jetbrains/qodana-js`).

  * [Installation](#installation)
      * [macOS and Linux](#macos-and-linux)
      * [Windows](#windows)
      * [Anywhere else](#anywhere-else)
  * [Usage](#usage)
    * [Prepare your project](#prepare-your-project)
    * [Analyze your project](#analyze-your-project)
    * [View the report](#view-the-report)
  * [Configuration](#configuration)
  * [Why](#why)

## Installation

> 💡 The Qodana CLI is distributed and run as a binary. The Qodana linters with inspections are [Docker Images](https://www.jetbrains.com/help/qodana/docker-images.html)…
