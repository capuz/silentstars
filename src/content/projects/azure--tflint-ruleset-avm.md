---
repo: "Azure/tflint-ruleset-avm"
name: "tflint-ruleset-avm"
description: "TFLint ruleset for Azure Verified Modules"
readmeQualityOk: true
url: "https://github.com/Azure/tflint-ruleset-avm"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["azure", "terraform", "tflint", "tflint-ruleset", "azureverifiedmodules"]
stars: 16
forks: 14
openIssues: 0
closedIssues: 19
watchers: 4
contributors: 19
recentReleases: 0
createdAt: "2024-01-16T02:48:19Z"
lastCommitAt: "2026-09-04T08:11:08Z"
lastReleaseAt: "2024-06-26T01:44:12Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 75
undervaluedScore: 57
maintainers: ["jaredfholgate", "dependabot[bot]", "matt-FFFFFF"]
openGraphImageUrl: "https://opengraph.githubassets.com/0383896d535eb182c3b39bbbb06c9dc97e30fcd94c439c2c1f1f98243c35d533/Azure/tflint-ruleset-avm"
---

# Azure Verified Modules TFLint Ruleset

This repository contains the TFLint ruleset for Azure Verified Modules.

## Embedded AzAPI tag capabilities

The `avm_azapi_resource_tags_required` rule uses a standalone, embedded snapshot at
`internal/tagcapability/data/azapi_tags_v1.json`; it does not download schemas
at runtime or depend on the AzAPI provider. The snapshot records its
MIT-licensed upstream sources and exact revisions. The weekly/manual
[`Update AzAPI Tag Snapshot`](https://github.com/Azure/tflint-ruleset-avm/blob/HEAD/.github/workflows/update-azapi-tag-snapshot.yml)
workflow regenerates it from `azure-rest-api-specs` through
`bicep-types-az`, validates it, and opens or updates a deterministic PR only
when the data changes.

For writable resource types, the rule requires a consumer-settable `tags`
argument but permits any Terraform expression so modules can implement the
standard module-wide fallback and per-resource override contract. Resource
types with read-only or unsupported tags must omit the argument.

When a module exposes per-resource or submodule tag overrides, the
`avm_interface_resource_tags` rule validates the typed recursive
`resource_tags` interface. The…
