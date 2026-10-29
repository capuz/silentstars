---
repo: "cloudamqp/terraform-provider-cloudamqp"
name: "terraform-provider-cloudamqp"
description: "Terraform Provider for CloudAMQP"
readmeQualityOk: true
url: "https://github.com/cloudamqp/terraform-provider-cloudamqp"
homepage: "https://registry.terraform.io/providers/cloudamqp/cloudamqp"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["cloudamqp", "terraform", "rabbitmq"]
stars: 39
forks: 43
openIssues: 21
closedIssues: 187
watchers: 11
contributors: 53
recentReleases: 0
createdAt: "2018-06-19T06:25:55Z"
lastCommitAt: "2026-10-29T14:07:19Z"
lastReleaseAt: "2020-03-06T11:51:42Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 66
maintainers: ["tbroden84", "dependabot[bot]", "weistrand"]
openGraphImageUrl: "https://opengraph.githubassets.com/e48e596236fafb3a3fbfd8501a5b33a915e7a6bde32d1eccd16f46a37bfa121c/cloudamqp/terraform-provider-cloudamqp"
---

# Terraform Provider for CloudAMQP

Manage your [CloudAMQP](https://www.cloudamqp.com/) LavinMQ and RabbitMQ instances with Terraform. The provider is
published to the [Terraform Registry](https://registry.terraform.io/providers/cloudamqp/cloudamqp).

---

## Prerequisites

1. **Terraform** >= 0.13 — [Installation guide](https://developer.hashicorp.com/terraform/downloads)
2. **CloudAMQP API key** — Sign up at https://www.cloudamqp.com/, then create a key at https://customer.cloudamqp.com/apikeys

> The API key grants access to the Customer API, which manages instances and proxies calls to the per-instance API
(alarms, notifications, plugins, etc.) using the same key.

---

## Example Usage

```hcl
terraform {
  required_providers {
    cloudamqp = {
      source = "cloudamqp/cloudamqp"
    }
  }
}

provider "cloudamqp" {
  apikey = var.cloudamqp_apikey   # or set CLOUDAMQP_APIKEY env var
}

resource "cloudamqp_instance" "this" {
  name   = "my-rabbitmq"
  plan   = "lemur"
  region = "amazon-web-services::us-east-1"
}
```

> **Note on plan changes between shared and dedicated**
> Switching between a shared plan (e.g. `lemur`) and a dedicated plan (e.g. `bunny`) forces destruction…
