---
repo: "prefix-dev/parselmouth"
name: "parselmouth"
description: "This is an automated mapping for PyPI to and from conda for conda-forge and other channels."
readmeQualityOk: true
url: "https://github.com/prefix-dev/parselmouth"
homepage: "https://prefix-dev.github.io/parselmouth/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [72, 27]
topics: ["conda", "conda-forge", "mapping", "pypi-packages"]
stars: 22
forks: 9
openIssues: 8
closedIssues: 1
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2024-02-21T12:46:21Z"
lastCommitAt: "2026-07-14T05:53:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 59
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/307d13eb5e1c16783de5dab413aa70f6f972ae45290a2fb1fa2a03911da995f6/prefix-dev/parselmouth"
---

<h1>
  </a>
</h1>

<h1 align="center">

[license-badge]: https://img.shields.io/badge/license-BSD--3--Clause-blue?style=flat-square
[build-badge]: https://img.shields.io/github/actions/workflow/status/prefix-dev/parselmouth/updater.yml?style=flat-square&branch=main
[build]: https://github.com/prefix-dev/parselmouth/actions
[chat-badge]: https://img.shields.io/discord/1082332781146800168.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2&style=flat-square
[chat-url]: https://discord.gg/kKV8ZxyzY4

</h1>

# parselmouth: Conda mapping runner

## Overview

`parselmouth` is a utility designed to facilitate the mapping of Conda package names to their corresponding PyPI names and the inverse. This tool automates the process of generating and updating mappings on an hourly basis, ensuring that users have access to the most accurate and up-to-date information.

## Local Testing

Test the complete pipeline locally with MinIO (S3-compatible storage):

```bash
# One-command start (recommended) - starts MinIO + interactive mode
pixi run test-interactive

# Or run manually with more control:

# 1. Start MinIO
docker-compose up -d

# 2. Run with defaults (pytorch, noarch,…
