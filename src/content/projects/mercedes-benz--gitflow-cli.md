---
repo: "mercedes-benz/gitflow-cli"
name: "gitflow-cli"
description: "Release workflow automation tool built on the gitflow branching model that detects your project type and automatically increments the semantic version."
readmeQualityOk: true
url: "https://github.com/mercedes-benz/gitflow-cli"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["gitflow", "cli", "automation", "devops", "terminal", "deploy", "release", "rollout"]
stars: 16
forks: 4
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 47
recentReleases: 0
createdAt: "2024-10-15T06:19:09Z"
lastCommitAt: "2026-11-12T11:40:34Z"
lastReleaseAt: "2025-10-06T08:29:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 38
maintainers: ["levitin", "Degooya"]
openGraphImageUrl: "https://opengraph.githubassets.com/283de3717476be4d8c44a6cf45861929bd0f5146cf3e9bea574bddbc484e147f/mercedes-benz/gitflow-cli"
---

# Gitflow-CLI

The **gitflow-cli** is a release workflow automation tool built on the [gitflow](https://nvie.com/posts/a-successful-git-branching-model/) branching model. It detects your project type and automatically increments the [semantic version](https://semver.org/), supporting a growing list of [plugins](#available-plugins) out of the box.

## Installation

From within the project directory the **gitflow-cli** can be built, run and installed.

1. **Clone the repository:**

    ```bash
    git clone https://github.com/mercedes-benz/gitflow-cli.git
    cd gitflow-cli
    ```

2. **Install the application:**

   To install and run the application, use the following commands:

   ```bash
   go install
   gitflow-cli --help
   ```

   Make sure you have [Go](https://go.dev/doc/install) installed and that the `go/bin` directory is part of your PATH.

## Usage

Before using **gitflow-cli**, either navigate to your target Git repository or specify it with the `--path` flag.
Make sure the repository meets all [preconditions](#preconditions).

### Release

To initiate a new release, use the following command:

   ```bash
   gitflow-cli release start
   ```

Release start will perform…
