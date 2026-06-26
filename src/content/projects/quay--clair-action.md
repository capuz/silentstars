---
repo: "quay/clair-action"
name: "clair-action"
description: "Clair in the CI. Github actions, tekton pipelines etc."
url: "https://github.com/quay/clair-action"
language: "Go"
languages: ["Go"]
languagePcts: [93]
topics: ["actions", "ci", "clair", "tekton"]
stars: 14
forks: 11
openIssues: 5
closedIssues: 8
watchers: 10
contributors: 19
recentReleases: 1
createdAt: "2022-05-05T21:46:29Z"
lastCommitAt: "2026-06-26T21:03:05Z"
lastReleaseAt: "2026-06-24T21:35:32Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 67
undervaluedScore: 47
maintainers: ["dependabot[bot]", "crozzy"]
openGraphImageUrl: "https://opengraph.githubassets.com/543cf8986041e0c3c59b16dd48a7b85379cfd24479fc2b5301a5281e0c9259b0/quay/clair-action"
discussionCount: 2
---

## About

*NOTE* - Currently unstable and liable to change.

GitHub Action to statically analyze container images for vulnerabilities using [Claircore](https://github.com/quay/claircore/).

___

- [About](#about)
- [Usage](#usage)
  - [Image path](#image-path)
  - [Image ref](#image-ref)
  - [Image ref with auth](#image-ref-with-auth)
  - [Generating vulnerability DB and using it for report creation](#generating-vulnerability-db-and-using-it-for-report-creation)
    - [Generate the vulnerability DB example:](#generate-the-vulnerability-db-example)
    - [Using generated database:](#using-generated-database)
- [Customizing](#customizing)
  - [inputs](#inputs)
- [Releases](#releases)

## Usage

### Image path

```yaml
name: Clair

on:
  push:
    branches:
      - 'main'
  pull_request:
    branches:
      - 'main'
jobs:
  docker-build:
    name: "Docker Build"
    runs-on: ubuntu-latest
    steps:

      - name: Checkout code
        uses: actions/checkout@v2

      - name: Build an image from Dockerfile
        run: |
          docker build -t a-really/great-app:${{ github.sha }} .

      - name: Save Docker image
        run: |
          docker save -o ${{ github.sha }}…
