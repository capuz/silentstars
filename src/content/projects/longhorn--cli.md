---
repo: "longhorn/cli"
name: "cli"
description: "Longhorn CLI is a headless way for preflighting, operating and troubleshooting Longhorn cluster."
readmeQualityOk: true
url: "https://github.com/longhorn/cli"
language: "Go"
languages: ["Go"]
languagePcts: [98]
stars: 42
forks: 29
openIssues: 0
closedIssues: 0
watchers: 8
contributors: 23
recentReleases: 0
createdAt: "2023-09-15T08:18:59Z"
lastCommitAt: "2026-11-19T05:05:16Z"
lastReleaseAt: "2024-10-09T09:05:52Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 87
undervaluedScore: 56
maintainers: ["renovate[bot]", "derekbit", "sudeepr34"]
openGraphImageUrl: "https://opengraph.githubassets.com/6323b0d2eaa0206c77c5e1d8401027dc3d19431cf1120c21f8d8aa6293866258/longhorn/cli"
---

# Longhorn Commandline Interface (longhornctl)

This repository contains the source code for `longhornctl`, a CLI (command-line interface) designed to simplify Longhorn manual operations.

## What Can You Do With `longhornctl`?

- Install and verify prelight requirements.
- Execute one-time Longhorn operations.
- Gain insight into your Longhorn system.
- Diagnose the health of your Longhorn system.

## Usage

For detailed usage information and examples, please refer to the [document](https://github.com/longhorn/cli/blob/HEAD/docs/longhornctl.md) run `longhornctl --help`.

You can obtain `longhornctl` either through downloading a prebuilt binary or by building it from source.

### Prebuilt Binary

1. Remove any previous `longhornctl` installation.

    ```
    rm -rf /usr/local/bin/longhornctl
    ```

2. Download the command-line tool release suitable for your operating system and machine architecture from the [GitHub release page](https://github.com/longhorn/cli/releases).
