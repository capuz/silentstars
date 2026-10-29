---
repo: "rsvalerio/ops"
name: "ops"
description: "An opinionated, batteries-included development CLI operator."
readmeQualityOk: true
url: "https://github.com/rsvalerio/ops"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-23T20:23:25Z"
lastCommitAt: "2026-10-29T10:20:09Z"
lastReleaseAt: "2026-04-05T12:24:46Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 55
maintainers: ["rsvalerio", "my-cloud-ci[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8585fd6d379602d6df635fc63c641bc8e08758af9250648fe365203726dd9a4a/rsvalerio/ops"
---

# ops

Batteries-included task runner for any stack

`ops` detects your project's stack and gives it a working set of commands, such as
`build`, `verify` and `qa`, with no configuration. It supports Rust, Vite, Node,
Go, Python (uv), Terraform, Ansible, Java (Maven and Gradle) and a generic
fallback. When the defaults are not enough, you define commands and command
groups once in `.ops.toml` and run them with themed, parallel, fail-fast output.
The same file drives your local gates, your git hooks and CI.

## Table of Contents

- [Security](#security)
- [Background](#background)
- [Install](#install)
  - [Dependencies](#dependencies)
  - [Updating](#updating)
- [Usage](#usage)
  - [CLI](#cli)
- [Configuration](#configuration)
- [Documentation](#documentation)
- [Development](#development)
- [Roadmap](#roadmap)
- [Maintainers](#maintainers)
- [Thanks](#thanks)
- [Contributing](#contributing)
- [License](#license)

## Security

`ops` runs the commands in `.ops.toml` as written, without sanitizing them. It
uses the same trust model as `make` or `npm run`: a project's config is trusted
code, so only run `ops` in directories you trust. To report a vulnerability, see…
