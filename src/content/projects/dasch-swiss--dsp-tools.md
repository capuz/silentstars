---
repo: "dasch-swiss/dsp-tools"
name: "dsp-tools"
description: "A Python library and tools for the DSP-API "
readmeQualityOk: true
url: "https://github.com/dasch-swiss/dsp-tools"
homepage: "https://docs.dasch.swiss/latest/DSP-TOOLS"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 11
forks: 5
openIssues: 0
closedIssues: 0
watchers: 6
contributors: 22
recentReleases: 0
createdAt: "2019-03-05T12:15:20Z"
lastCommitAt: "2026-07-22T06:10:52Z"
lastReleaseAt: "2021-08-10T14:24:48Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 88
undervaluedScore: 69
maintainers: ["Nora-Olivia-Ammann", "jnussbaum", "daschbot"]
openGraphImageUrl: "https://opengraph.githubassets.com/69f507e9878aa33999466f53e49b7650cd01823f0378346256f50d9f2230cdd6/dasch-swiss/dsp-tools"
---

# DSP-TOOLS - DaSCH Service Platform Tools

DSP-TOOLS is a command line tool that helps you to interact with the DaSCH Service Platform (DSP) API. 
This document is intended for developers who want to work with the code of DSP-TOOLS. 

> [!NOTE]
> This technical document was written as a guide for developers.
> For the end user documentation, please consult [https://docs.dasch.swiss](https://docs.dasch.swiss/latest/DSP-TOOLS).
 
> [!TIP]
> This README contains basic information for getting started. 
> More details can be found in the [developers' documentation](https://docs.dasch.swiss/latest/DSP-TOOLS/developers/).

## Quick Start

To get started quickly, without reading the details, just execute these commands.

- `curl -LsSf https://astral.sh/uv/install.sh | sh`
- `uv sync --all-extras --dev`
- `source .venv/bin/activate`
- `pre-commit install`
- `npm install -g markdown-link-validator`
- `brew install just parallel yamlfmt`
- `echo DSP_USER_PASSWORD="pw" >> .env` (required variable for e2e tests)

The remainder of this README explains these commands in more detail.

## Recommended Setup for Claude Code

### `feature-dev`: A comprehensive, structured workflow for feature…
