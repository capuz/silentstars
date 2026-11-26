---
repo: "VictoriaMetrics/terraform-provider-victoriametricscloud"
name: "terraform-provider-victoriametricscloud"
description: "Terraform Provider for VictoriaMetrics Cloud"
readmeQualityOk: true
url: "https://github.com/VictoriaMetrics/terraform-provider-victoriametricscloud"
homepage: "https://registry.terraform.io/providers/VictoriaMetrics/victoriametricscloud/latest/docs"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["api", "cloud", "metrics", "monitoring", "observability", "terraform", "terraform-provider", "victoriametrics"]
stars: 8
forks: 3
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 7
recentReleases: 2
createdAt: "2025-11-04T10:23:01Z"
lastCommitAt: "2026-11-26T13:01:37Z"
lastReleaseAt: "2026-11-26T13:03:51Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 77
maintainers: ["AndrewChubatiuk", "dependabot[bot]", "Amper"]
openGraphImageUrl: "https://opengraph.githubassets.com/dc2731516494849964ab131af9866bc8be7b448dd2456714d61b14d6df22a8fe/VictoriaMetrics/terraform-provider-victoriametricscloud"
---

# Terraform Provider for VictoriaMetrics Cloud

Manage [VictoriaMetrics Cloud](https://victoriametrics.cloud/) deployments, access tokens, rule files, and notifiers with Terraform. 
This provider wraps the [VictoriaMetrics Cloud API](https://docs.victoriametrics.com/victoriametrics-cloud/api/) and exposes both resources and data sources so you can manage infrastructure as code alongside the rest of your stack.

## Getting Started

- Add the provider to your configuration:

```hcl
terraform {
  required_providers {
    victoriametricscloud = {
      source  = "VictoriaMetrics/victoriametricscloud"
      version = "0.1.0"
    }
  }
}

provider "victoriametricscloud" {
  api_key = var.api_key
}
```

- Save your VictoriaMetrics Cloud API key in Terraform locals, variables, or use the `VMCLOUD_API_KEY` environment variable.
- Initialize and apply as usual: `terraform init && terraform apply`.

## Authentication & Configuration

- `api_key` – required unless `VMCLOUD_API_KEY` is set. Marked sensitive inside Terraform state.
