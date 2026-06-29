---
repo: "databricks/cli"
name: "cli"
description: "Databricks CLI"
url: "https://github.com/databricks/cli"
language: "Go"
languages: ["Go"]
languagePcts: [86]
topics: ["command-line-interface", "databricks"]
stars: 359
forks: 188
openIssues: 88
closedIssues: 696
watchers: 20
contributors: 99
recentReleases: 0
createdAt: "2022-05-13T12:12:36Z"
lastCommitAt: "2026-06-29T07:14:46Z"
lastReleaseAt: "2022-11-25T13:25:41Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 97
undervaluedScore: 40
maintainers: ["pietern", "denik", "simonfaltum"]
openGraphImageUrl: "https://avatars.githubusercontent.com/u/4998052?s=400&v=4"
---

# Databricks CLI

Documentation is available at https://docs.databricks.com/dev-tools/cli/databricks-cli.html.

## Installation

This CLI is packaged as a dependency-free binary executable and may be located in any directory.
See https://github.com/databricks/cli/releases for releases and
the [Databricks documentation](https://docs.databricks.com/en/dev-tools/cli/install.html) for detailed information about installing the CLI.

------
### Homebrew

We maintain a [Homebrew tap](https://github.com/databricks/homebrew-tap) for installing the Databricks CLI. You can find instructions for how to install, upgrade and downgrade the CLI using Homebrew [here](https://github.com/databricks/homebrew-tap/blob/main/README.md).

------
### Docker
You can use the CLI via a Docker image by pulling the image from `ghcr.io`. You can find all available versions
at: https://github.com/databricks/cli/pkgs/container/cli.
```
docker pull ghcr.io/databricks/cli:latest
```

Example of how to run the CLI using the Docker image. More documentation is available at https://docs.databricks.com/dev-tools/bundles/airgapped-environment.html.
```
docker run -e DATABRICKS_HOST=$YOUR_HOST_URL -e…
