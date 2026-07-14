---
repo: "eclipse-score/tooling"
name: "tooling"
description: "Tooling for Eclipse S-CORE"
readmeQualityOk: true
url: "https://github.com/eclipse-score/tooling"
language: "Rust"
languages: ["Rust", "Starlark", "Python"]
languagePcts: [39, 30, 26]
stars: 6
forks: 28
openIssues: 15
closedIssues: 30
watchers: 6
contributors: 234
recentReleases: 0
createdAt: "2025-02-20T07:49:46Z"
lastCommitAt: "2026-07-14T05:53:41Z"
lastReleaseAt: "2025-04-15T09:48:59Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 91
undervaluedScore: 81
maintainers: ["hoe-jo", "melodyoncode", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f102cbd230278ca4801c8a74e1a2b5fbcced411e2974723a1a69861669599e16/eclipse-score/tooling"
---

# Score Tooling

A unified Bazel module containing development tools and utilities for building, testing, and maintaining code quality.

## Quick Start

Add this module to your `MODULE.bazel`:

```starlark
bazel_dep(name = "score_tooling", version = "1.0.0")
```

## Available Tools

Each tool maintains its own documentation and examples in their respective subdirectories.
See the individual README files for detailed usage instructions and configuration options.

| Tool | Description | Documentation |
|------|-------------|---------------|
| **cli_helper** | Command-line interface utilities | [README](https://github.com/eclipse-score/tooling/blob/HEAD/cli_helper/README.md) |
| **cr_checker** | Code review and compliance checking | [README](https://github.com/eclipse-score/tooling/blob/HEAD/cr_checker/README.md) |
| **dash** | Eclipse Dash license scanning | [README](https://github.com/eclipse-score/tooling/blob/HEAD/dash/README.md) |
| **format_checker** | Code formatting validation | [README](https://github.com/eclipse-score/tooling/blob/HEAD/format_checker/README.md) |
| **python_basics** | Python development utilities and testing |…
