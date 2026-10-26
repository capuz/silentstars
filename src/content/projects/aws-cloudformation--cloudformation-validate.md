---
repo: "aws-cloudformation/cloudformation-validate"
name: "cloudformation-validate"
description: "AWS CloudFormation Validate"
readmeQualityOk: true
url: "https://github.com/aws-cloudformation/cloudformation-validate"
homepage: "https://aws.amazon.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [78]
topics: ["amazon", "aws", "aws-cloudformation", "cloudformation", "template", "validate", "lint", "iac", "infrastructure-as-code"]
stars: 11
forks: 6
openIssues: 4
closedIssues: 53
watchers: 0
contributors: 8
recentReleases: 4
createdAt: "2026-06-02T18:50:25Z"
lastCommitAt: "2026-10-26T20:59:54Z"
lastReleaseAt: "2026-09-08T20:57:08Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 68
maintainers: ["satyakigh", "github-actions[bot]", "badmintoncryer"]
openGraphImageUrl: "https://opengraph.githubassets.com/e54379b258b2b5d3d3f030a5970caeb5a1c151146e8d61b85a260eab42b6a574/aws-cloudformation/cloudformation-validate"
---

# AWS CloudFormation Validate

Fast, offline, embeddable validation for AWS CloudFormation templates.

`cloudformation-validate` parses a CloudFormation template (JSON or YAML) and returns structured diagnostics - schema
violations, semantic errors, security concerns, and best-practice suggestions - before you deploy. It runs entirely
offline: every rule and resource schema is compiled into the binary, so there is no network access, no credentials, and
no runtime fetching.

It ships as a Rust CLI, an embeddable Rust library, a Node.js package (WASM), a Python package, a Go module, and a
JVM library (Kotlin/Java) - all backed by the same validation core.

## Features

- **Offline-first.** Rules and AWS resource schemas are baked into the binary. Nothing is fetched at runtime.
- **Structured diagnostics.** Every finding carries a stable rule ID, severity, precise source span (line/column),
  resource path, and an optional suggested fix - designed for IDEs, CI, and agents, not just humans.
- **Standalone engines.** The [Rego](https://www.openpolicyagent.org/docs/latest/policy-language/) and
  [CEL](https://cel.dev/) engines independently evaluate the same built-in rule set and…
