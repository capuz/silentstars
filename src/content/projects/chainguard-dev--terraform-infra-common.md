---
repo: "chainguard-dev/terraform-infra-common"
name: "terraform-infra-common"
description: "A repository containing a collection of \"glue\" modules for encapsulating common Cloud Run patterns."
readmeQualityOk: true
url: "https://github.com/chainguard-dev/terraform-infra-common"
homepage: "https://registry.terraform.io/modules/chainguard-dev/common/infra/latest"
language: "HCL"
languages: ["HCL", "Go"]
languagePcts: [58, 42]
stars: 29
forks: 45
openIssues: 22
closedIssues: 15
watchers: 3
contributors: 146
recentReleases: 0
createdAt: "2023-12-09T16:47:26Z"
lastCommitAt: "2026-10-25T02:43:32Z"
lastReleaseAt: "2024-02-02T22:59:20Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 78
undervaluedScore: 67
maintainers: ["lranjbar", "markusthoemmes", "chainguard-factory[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/126bd4c9f1486ba16eae4f07a552786ad57d931aacb705988c1141563c05a8b8/chainguard-dev/terraform-infra-common"
---

# terraform-infra-common

[<img alt="Static Badge" src="https://img.shields.io/badge/terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white&link=https%3A%2F%2Fregistry.terraform.io%2Fmodules%2Fchainguard-dev%2Fcommon%2Finfra%2Flatest">](https://registry.terraform.io/modules/chainguard-dev/common/infra/latest)

A collection of common infrastructure modules that encapsulate Cloud Run and
GCP patterns.

## Modules

See [MODULES.md](https://github.com/chainguard-dev/terraform-infra-common/blob/HEAD/MODULES.md) for a summary of all available modules.

## Go helpers

The [httpmetrics package](https://github.com/chainguard-dev/terraform-infra-common/blob/HEAD/pkg/httpmetrics/README.md) provides HTTP instrumentation
and opt-in serving-revision metadata for HTTP and gRPC services.

The [memusage package](https://github.com/chainguard-dev/terraform-infra-common/blob/HEAD/pkg/memusage/README.md) logs Linux process and container
memory high-water marks, including peaks between monitoring samples.

## Usage

To use components in this library, you must provide the `project` in a
`provider.google` resource in your top-level main.tf:

```hcl
provider "google" {
  project =…
