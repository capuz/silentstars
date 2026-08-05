---
repo: "hashicorp/terraform-provider-hcp"
name: "terraform-provider-hcp"
description: "Terraform provider for HashiCorp Cloud Platform."
readmeQualityOk: true
url: "https://github.com/hashicorp/terraform-provider-hcp"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["terraform-provider"]
stars: 62
forks: 64
openIssues: 1
closedIssues: 85
watchers: 226
contributors: 1532
recentReleases: 0
createdAt: "2021-01-07T18:33:58Z"
lastCommitAt: "2026-08-05T06:08:36Z"
lastReleaseAt: "2021-07-15T22:04:25Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 90
undervaluedScore: 40
maintainers: ["dependabot[bot]", "Amrithnath", "rselbach"]
openGraphImageUrl: "https://opengraph.githubassets.com/22efcead296ef9d3461382ea1ca7d71b38ba4776e08764985bb350f9fb422002/hashicorp/terraform-provider-hcp"
---

</p>

# HashiCorp Cloud Platform (HCP) Terraform Provider

Available in the [Terraform Registry](https://registry.terraform.io/providers/hashicorp/hcp/latest).

The HashiCorp Cloud Platform (HCP) Terraform Provider is a plugin for Terraform that allows for the full lifecycle management of HCP resources. This provider is maintained internally by the HashiCorp Cloud Services team.

## Requirements

- [Terraform](https://www.terraform.io/downloads.html) >= 1.1.5

## Using the Provider

See the [HashiCorp Cloud Platform (HCP) Provider documentation](https://registry.terraform.io/providers/hashicorp/hcp/latest/docs) to get started using the provider.

## Contributing

See the [`contributing`](https://github.com/hashicorp/terraform-provider-hcp/blob/HEAD/contributing/) directory for more developer documentation.

## Design

See the [`design`](https://github.com/hashicorp/terraform-provider-hcp/blob/HEAD/design/) for documents capturing certain key design decisions made for this provider as a platform.

## Example

Below is a complex example that creates a HashiCorp Virtual Network (HVN), an HCP Consul cluster within that HVN, and peers the HVN to an AWS VPC.
```hcl
// Configure the…
