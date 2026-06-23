---
repo: "rootlyhq/terraform-provider-rootly"
name: "terraform-provider-rootly"
description: "Terraform provider for Rootly - manage incident management, on-call schedules, workflows, and alerts as code"
url: "https://github.com/rootlyhq/terraform-provider-rootly"
homepage: "https://registry.terraform.io/providers/rootlyhq/rootly"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["devops", "go", "golang", "hashicorp", "iac", "incident-management", "incident-response", "infrastructure-as-code", "on-call", "rootly"]
stars: 21
forks: 16
openIssues: 2
closedIssues: 54
watchers: 4
contributors: 49
recentReleases: 0
createdAt: "2022-03-04T21:53:38Z"
lastCommitAt: "2026-06-23T06:41:35Z"
lastReleaseAt: "2022-08-03T13:42:25Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 97
undervaluedScore: 74
maintainers: ["renovate[bot]", "kwent", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6134354e9b8d6994509b724fc53f39002df9edf82e644809b551ce14ed5175d0/rootlyhq/terraform-provider-rootly"
---

# Rootly Provider

The [Rootly](https://rootly.com/) provider is used to interact with the resources supported by Rootly. The provider needs to be configured with the proper credentials before it can be used. It requires terraform 1.0 or later.

## Usage

Please see the [Terraform Registry documentation](https://registry.terraform.io/providers/rootlyhq/rootly/latest/docs) or [examples/](examples).

```terraform
terraform {
  required_providers {
    rootly = {
      source = "rootlyhq/rootly"
    }
  }
}

provider "rootly" {
  # We recommend using the `ROOTLY_API_TOKEN` env var to set the API Token
  # when interacting with Rootly's API.
  # api_token = var.rootly_api_key
}
```

## Migration Script

A migration script is available to help migrate from deprecated Rootly resources to their newer equivalents. The script automates the process of fetching existing resources via the Rootly API and generating Terraform configurations with import statements.

**Currently supported migrations:**
- `alert_routing_rules_to_alert_routes` - Migrate from deprecated `rootly_alert_routing_rule` to `rootly_alert_route`

For detailed usage instructions, see [Migration Script…
