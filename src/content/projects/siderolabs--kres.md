---
repo: "siderolabs/kres"
name: "kres"
description: "Tool to automate build instructions generation"
readmeQualityOk: true
url: "https://github.com/siderolabs/kres"
language: "Go"
languages: ["Go"]
languagePcts: [98]
stars: 42
forks: 28
openIssues: 2
closedIssues: 45
watchers: 4
contributors: 27
recentReleases: 0
createdAt: "2020-08-06T19:10:16Z"
lastCommitAt: "2026-09-07T08:32:27Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 61
maintainers: ["frezbo", "smira", "Slessi"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ca3c1856f58ff743ba976709a675fbc7bbe0611d2a7d8278c8ef95490c98ca2/siderolabs/kres"
---

# Kres

Kres is a tool to automate generation of build instructions based on project structure.

At the moment only Go projects are supported.
Kres is opinionated, that's by design.

Following output files are generated automatically:

* `Makefile`
* `Dockerfile`
* `.dockerignore`
* `.gitignore`
* `.golangci.yml`
* `.markdownlint.json`
* `.golangci.yaml`
* `.codecov.yml`
* `LICENSE`

## Access Tokens

Kres can leverage API access tokens to set up build environment or settings for the project:

* `GITHUB_TOKEN` environment variable should contain GitHub API personal access token with `repo` scope.

## Running Kres

When running Kres for the first time, run it manually via Docker container:

    docker run --rm -v ${PWD}:/src -w /src -e GITHUB_TOKEN ghcr.io/siderolabs/kres:latest

To update build instructions:

    make rekres
