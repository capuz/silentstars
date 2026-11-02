---
repo: "terraform-linters/tflint-ruleset-opa"
name: "tflint-ruleset-opa"
description: "Experimental: TFLint ruleset plugin for writing custom rules in Rego."
readmeQualityOk: true
url: "https://github.com/terraform-linters/tflint-ruleset-opa"
language: "Go"
languages: ["Go"]
languagePcts: [85]
topics: ["terraform", "tflint", "tflint-ruleset"]
stars: 90
forks: 7
openIssues: 2
closedIssues: 13
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2023-01-02T08:36:03Z"
lastCommitAt: "2026-11-02T15:17:20Z"
lastReleaseAt: "2026-01-10T13:51:02Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 37
maintainers: ["dependabot[bot]", "wata727", "RoseSecurity"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ca3021cc7449a552a9e114139f0b61817249b4b95cb9b022dbc9063405985a4/terraform-linters/tflint-ruleset-opa"
discussionCount: 15
---

# TFLint Ruleset powered by Open Policy Agent (OPA)

TFLint ruleset plugin for writing custom rules in [Rego](https://www.openpolicyagent.org/docs/latest/policy-language/).

NOTE: This plugin is experimental. This means frequent breaking changes.

## Requirements

- TFLint v0.46+

## Installation

You can install the plugin by adding a config to `.tflint.hcl` and running `tflint --init`:

```hcl
plugin "opa" {
  enabled = true
  version = "0.12.0"
  source  = "github.com/terraform-linters/tflint-ruleset-opa"
}
```

Policy files are placed under `~/.tflint.d/policies` or `./.tflint.d/policies`. First create a directory:

```console
$ mkdir -p .tflint.d/policies
```

For more configuration about the plugin, see [Plugin Configuration](https://github.com/terraform-linters/tflint-ruleset-opa/blob/HEAD/docs/configuration.md).

## Getting Started

TFLint plugin system allows you to add custom rules, but plugins can be a pain to maintain when applying a few simple organization policies. This ruleset plugin provides the ability to write policies in Rego, instead of building plugins in Go.

For example, your organization wants to enforce S3 bucket names to always start with `example-com-*`.…
