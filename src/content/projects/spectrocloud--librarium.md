---
repo: "spectrocloud/librarium"
name: "librarium"
description: "Palette/VerteX documentation"
readmeQualityOk: true
url: "https://github.com/spectrocloud/librarium"
homepage: "https://docs.spectrocloud.com"
language: "MDX"
languages: ["MDX"]
languagePcts: [61]
topics: ["documentation", "education", "kubernetes", "palette", "vertex"]
stars: 27
forks: 42
openIssues: 0
closedIssues: 21
watchers: 8
contributors: 114
recentReleases: 0
createdAt: "2020-05-01T13:54:56Z"
lastCommitAt: "2026-10-29T12:25:50Z"
lastReleaseAt: "2023-02-24T22:51:43Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 100
undervaluedScore: 73
maintainers: ["Linus-SpectroCloud", "benradstone", "spectro-gh-kdawn"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/260471399/9258d68b-1e1c-47ce-af0d-9aa194766a14"
---

# Spectro Cloud Documentation

Welcome to the Spectro Cloud documentation repository. This repository contains the source for
[docs.spectrocloud.com](https://docs.spectrocloud.com).

The PaletteAI product has its own documentation site. Refer to the
[PaletteAI documentation](https://docs.palette-ai.com/).

Use this README as a quick start for contributing. For deeper guidance, see the contributor guides linked below.

For internal Spectro Cloud users, review the
[contributions](https://spectrocloud.atlassian.net/wiki/spaces/DE/pages/1765572627/Contribution) section of the
Documentation & Education team's home page.

## Quick Start

The recommended local development path uses Docker.

1. Install the required software listed in the
   [Local Development](https://github.com/spectrocloud/librarium/blob/HEAD/docs/contributing/local-development.md#prerequisites) guide.

2. Initialize the repository.

   ```shell
   make init
   ```

3. (Optional) To preview pack pages locally, add your Palette API key to the `.env` file and change
   `DISABLE_PACKS_INTEGRATIONS` to `false`. Without these values, the server still starts and pack pages redirect to the
   Integrations page.

   ```shell…
