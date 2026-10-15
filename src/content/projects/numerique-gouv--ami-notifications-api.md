---
repo: "numerique-gouv/ami-notifications-api"
name: "ami-notifications-api"
description: "This is the AMI (Application Mobile Interministérielle) notifications API, providing entry points to create and list notifications, and to store push URLs registered from clients (web or mobile)."
readmeQualityOk: true
url: "https://github.com/numerique-gouv/ami-notifications-api"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [44, 42]
stars: 13
forks: 2
openIssues: 192
closedIssues: 626
watchers: 5
contributors: 20
recentReleases: 0
createdAt: "2025-04-01T13:04:13Z"
lastCommitAt: "2026-10-15T08:32:52Z"
lastReleaseAt: "2026-07-08T16:10:21Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 65
maintainers: ["frederic-peters", "zebuline", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bfec51b8635d72bde765dba262d18c7f4a08f3dd850ef81590190266b549b1b0/numerique-gouv/ami-notifications-api"
---

# AMI notifications API

This is the AMI (Application Mobile Interministérielle) notifications API,
providing entry points to create and list notifications, and to store push URLs
registered from clients (web or mobile) amongst other things.

## Tech stack

### Language: python

[python](https://docs.python.org) using
[pyright](https://github.com/microsoft/pyright).

### Package and project manager: uv

[uv](https://docs.astral.sh/uv/) is "An extremely fast Python package and
project manager, written in Rust.", and is used to setup and manage the project.

Please follow the [installation
instructions](https://docs.astral.sh/uv/getting-started/installation/) to set it
up on your machine.

Once it's installed, it should be used for everything project related:
- adding more dependencies: `uv add (--dev) <dependency, eg: requests>`
- running a script (or editor) in the project's python environment: `uv run
<command, eg: code>`

### Linter and formatter: ruff

[ruff](https://docs.astral.sh/ruff/) is "An extremely fast Python linter and
code formatter, written in Rust."

Ruff is used both for linting and formatting:
```shell
make lint-and-format
```

### Linter: biome…
