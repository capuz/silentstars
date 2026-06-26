---
repo: "santosr2/TerraTidy"
name: "TerraTidy"
description: "A comprehensive quality platform for Terraform and Terragrunt"
url: "https://github.com/santosr2/TerraTidy"
homepage: "https://santosr2.github.io/TerraTidy/"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["formatter", "hclfmt", "linter", "opa-policy-bundle", "terraform", "terragrunt", "tflint", "tflint-ruleset", "stylelint", "policy"]
stars: 27
forks: 1
openIssues: 1
closedIssues: 9
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2025-12-16T21:59:22Z"
lastCommitAt: "2026-06-26T21:31:28Z"
lastReleaseAt: "2026-04-04T06:13:19Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 47
maintainers: ["santosr2", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/289c704f40ada4147e45f2a34232f7b60060154621b124f15f5718727a87d250/santosr2/TerraTidy"
discussionCount: 1
---

<picture>
</picture>

<b>A comprehensive quality platform for Terraform and Terragrunt</b>

</div>

## Overview

TerraTidy is a single-binary quality platform for Terraform and Terragrunt that provides:

- **Formatting** -- Format `.tf` and `.hcl` files using the HCL formatter
- **Style Checking** -- Custom style rules for layout, ordering, and conventions
- **Linting** -- 11 built-in AST rules plus optional TFLint integration for provider-specific checks
- **Policy Enforcement** -- OPA policy checks for compliance

### Key Features

- **Single Binary** -- No external dependencies for core functionality
- **Library-first Architecture** -- Uses Go libraries (hclwrite, OPA SDK) directly instead of shelling out
- **Extensible** -- Custom rules in Go, YAML, Rego, or Bash
- **Modular Config** -- Split large configs into organized files with glob imports
- **Auto-fix** -- Automatically fix formatting and style issues
- **Suppression Annotations** -- Inline comments to suppress specific findings per-line or per-block
- **Multiple Output Formats** -- Text, table, JSON, SARIF, HTML, JUnit, Markdown, GitHub Actions annotations
- **Multi-platform** -- Linux, macOS, Windows (amd64 and arm64)…
