---
repo: "snowflakedb/universal-driver"
name: "universal-driver"
description: "Universal driver"
url: "https://github.com/snowflakedb/universal-driver"
language: "Rust"
languages: ["Rust", "C++"]
languagePcts: [33, 25]
stars: 10
forks: 6
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 34
recentReleases: 8
createdAt: "2025-06-17T10:54:08Z"
lastCommitAt: "2026-07-03T12:38:42Z"
lastReleaseAt: "2026-07-01T15:05:20Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 80
undervaluedScore: 73
maintainers: ["sfc-gh-asolarski", "sfc-gh-ddas", "sfc-gh-rkowalski"]
openGraphImageUrl: "https://opengraph.githubassets.com/eae07918c70f2c9fbcccde184337344e108d25609184fb27c22e7d1ba4aaffee/snowflakedb/universal-driver"
---

# universal-driver

# Disclaimer

This repository contains experimental content provided as-is. Support applies only to functionality that is embedded in an officially supported Snowflake driver and used as part of that driver. All other files, modules, examples, and utilities in this repository are unsupported, may change or be removed without notice, and should be used at your own risk.

# Running Tests

This project contains multiple test suites across different driver implementations. Before running any tests, you'll need to set up common credentials and build the required components.

## Prerequisites

> **_NOTE:_** For snowflake cloud workspace users: the dependencies are managed by nix-shell and direnv

### 1. Decode Secrets

All integration tests require access to Snowflake credentials. To set up the required `parameters.json` file:

```bash
# Install 1Password CLI if not already installed
# Then decode the encrypted parameters file:
./scripts/decode_secrets.sh
```

This will create a `parameters.json` file in the project root containing test credentials.

### Environment: `PARAMETER_PATH`

Some test suites read credentials from `parameters.json` via the `PARAMETER_PATH`…
