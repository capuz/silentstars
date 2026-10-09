---
repo: "keithrbennett/cov-loupe"
name: "cov-loupe"
description: "Refines Ruby Simplecov test coverage data as CLI, MCP server, and library"
readmeQualityOk: true
url: "https://github.com/keithrbennett/cov-loupe"
homepage: "https://keithrbennett.github.io/cov-loupe/"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [99]
stars: 48
forks: 6
openIssues: 0
closedIssues: 3
watchers: 5
contributors: 4
recentReleases: 0
createdAt: "2025-09-13T17:05:11Z"
lastCommitAt: "2026-10-09T10:50:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 57
maintainers: ["keithrbennett", "sferik", "cbillen"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d600e39c7b733d7f36d41cf5a629befc1b01fe6af5a674443343a83d10f2df1/keithrbennett/cov-loupe"
---

CovLoupe

  An MCP server, command line utility, and library for Ruby SimpleCov test coverage analysis.

## What is cov-loupe?

**cov-loupe** makes SimpleCov coverage data queryable and actionable through three interfaces:

- **CLI** - command-line execution of single reports or queries
- **MCP server** - stdio (localhost nonnetwork) server assists AI analysis of your coverage
- **Ruby library** - Programmatic API for custom tooling

Reads SimpleCov's `coverage.json`, the documented JSON formatter output that SimpleCov 1.0.0 and later write alongside the HTML report—no runtime dependency on your test suite.

### Key Features

- ✅ **Multiple interfaces** - CLI, MCP server, and Ruby API
- **Annotated source code** - `-s full|uncovered|none` / `--source full|uncovered|none` with `-n N` / `--context-lines N` for context lines
- ✅ **Staleness detection** - Identify outdated coverage (missing files, timestamp mismatches, line count changes)
- ✅ **Multi-suite aware** - Reads SimpleCov's already-merged `coverage.json`, so RSpec + Cucumber (etc.) appear as one coverage map
- ✅ **Flexible path resolution** - Works with absolute or relative paths
- ✅ **Comprehensive error handling** -…
