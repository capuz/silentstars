---
repo: "rancherlabs/slsactl"
name: "slsactl"
description: "The slsactl is a Command Line Interface (CLI) tool to provide a consolidated experience while handling supply chain aspects of projects across the Rancher ecosystem."
readmeQualityOk: true
url: "https://github.com/rancherlabs/slsactl"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 5
forks: 22
openIssues: 8
closedIssues: 6
watchers: 5
contributors: 20
recentReleases: 0
createdAt: "2024-09-24T13:24:58Z"
lastCommitAt: "2026-11-06T13:20:42Z"
lastReleaseAt: "2025-02-10T13:20:15Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 88
undervaluedScore: 80
maintainers: ["macedogm", "renovate-rancher[bot]", "bk201"]
openGraphImageUrl: "https://opengraph.githubassets.com/b171f4e816ebcd78d08e3d0be26a3a1c23aacae399f824a0bd03256a3e9c060f/rancherlabs/slsactl"
---

# slsactl

The `slsactl` is a Command Line Interface (CLI) tool to provide a consolidated
experience while handling supply chain aspects of projects across the Rancher
ecosystem. 

## Installation

### Go

```bash
go install github.com/rancherlabs/slsactl@latest
```

## Usage

### Provenance
The provenance data can be extracted from an image with the command below.
Note that the image must have been built with a Provenance layer baked to it.

```bash
slsactl download provenance rancher/cis-operator:v1.0.15
slsactl download provenance --format=slsav1 rancher/cis-operator:v1.0.15
```

By default, the returned provenance will be for `linux/amd64`, if one exists.
To select a different platform use `--platform`.

### SBOM
The latest container images have baked into them a layer containing their SPDX
SBOM, which can be extracted with:

```bash
slsactl download sbom rancher/cis-operator:v1.0.15
```

If Cyclonedx is required instead:

```bash
slsactl download sbom -format cyclonedxjson rancher/cis-operator:v1.0.15
```

By default, the returned provenance will be for `linux/amd64`, if one exists.
To select a different platform use `--platform`.

Note that images that haven't got a SBOM…
