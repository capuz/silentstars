---
repo: "OpenRouterTeam/terraform-provider-openrouter"
name: "terraform-provider-openrouter"
description: "Official Terraform provider for OpenRouter — manage API keys, guardrails, workspaces, BYOK credentials, and observability destinations as infrastructure-as-code"
readmeQualityOk: true
url: "https://github.com/OpenRouterTeam/terraform-provider-openrouter"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["infrastructure-as-code", "openrouter", "terraform", "terraform-provider"]
stars: 13
forks: 11
openIssues: 1
closedIssues: 9
watchers: 0
contributors: 15
recentReleases: 0
createdAt: "2026-07-16T14:51:33Z"
lastCommitAt: "2026-11-12T05:41:55Z"
lastReleaseAt: "2026-07-24T21:43:22Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 59
maintainers: ["openrouter-docs-sync[bot]", "xehl"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5ca54a3fb4d3e520f64565e4081f6b4d435c4df9e8df2f8c9e071b9fc17b029/OpenRouterTeam/terraform-provider-openrouter"
---

# OpenRouter Terraform Provider

The [OpenRouter Terraform Provider](https://registry.terraform.io/providers/OpenRouterTeam/openrouter/latest) lets you manage OpenRouter as infrastructure-as-code: API keys, guardrails, workspaces, BYOK provider credentials, and observability destinations — with full lifecycle support, drift detection, and import.

To learn more about the underlying platform, check out the [OpenRouter Documentation](https://openrouter.ai/docs). Reference docs for every resource and data source are on the [Terraform Registry](https://registry.terraform.io/providers/OpenRouterTeam/openrouter/latest/docs).

## Installation

To install this provider, copy and paste this code into your Terraform configuration. Then, run `terraform init`.

```hcl
terraform {
  required_providers {
    openrouter = {
      source  = "OpenRouterTeam/openrouter"
      version = "0.3.246"
    }
  }
}

provider "openrouter" {
  server_url = "..." # Optional
}
```

## Provider Usage

Authenticate with a [Management API key](https://openrouter.ai/settings/management-keys) (`sk-or-mgmt-...`) — management keys administer resources but cannot spend inference credits.

```hcl
provider "openrouter"…
