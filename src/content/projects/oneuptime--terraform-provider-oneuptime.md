---
repo: "OneUptime/terraform-provider-oneuptime"
name: "terraform-provider-oneuptime"
description: "Terraform Provider for OneUptime "
readmeQualityOk: true
url: "https://github.com/OneUptime/terraform-provider-oneuptime"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 5
forks: 4
openIssues: 0
closedIssues: 15
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-06-13T21:17:23Z"
lastCommitAt: "2026-11-02T17:23:03Z"
lastReleaseAt: "2025-06-25T21:38:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 92
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/76eb102c38792d36ccf5154194ab300c4415555d687c93c0c01e6e5513b48101/OneUptime/terraform-provider-oneuptime"
---

# Terraform Provider for Oneuptime

OpenAPI specification for OneUptime. This document describes the API endpoints, request and response formats, and other details necessary for developers to interact with the OneUptime API.

## Requirements

- [Terraform](https://www.terraform.io/downloads.html) >= 1.0 **or** [OpenTofu](https://opentofu.org/docs/intro/install/) >= 1.6
- [Go](https://golang.org/doc/install) >= 1.21

## Building The Provider

1. Clone the repository
```sh
git clone https://github.com/oneuptime/terraform-provider-oneuptime
cd terraform-provider-oneuptime
```

2. Build the provider using the Go `install` command:
```sh
go build
```

## Using the Provider

```terraform
terraform {
  required_providers {
    oneuptime = {
      source  = "oneuptime/oneuptime"
      version = "~> 14.0"
    }
  }
}

provider "oneuptime" {
  oneuptime_url = "https://oneuptime.com" # or your self-hosted instance URL
  api_key       = var.oneuptime_api_key
}
```

The source address carries no registry hostname on purpose: OpenTofu resolves it against `registry.opentofu.org` and Terraform against `registry.terraform.io`, and the provider is published to both. Drive it with `tofu` or…
