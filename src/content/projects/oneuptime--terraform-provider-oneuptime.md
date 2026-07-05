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
forks: 2
openIssues: 6
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-06-13T21:17:23Z"
lastCommitAt: "2026-07-05T06:33:49Z"
lastReleaseAt: "2025-06-25T21:38:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 76
undervaluedScore: 75
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/b5210fa3b97b297f1905019b13bf99ce84c81d5c50199719a840acdfbfbefc8f/OneUptime/terraform-provider-oneuptime"
---

# Terraform Provider for Oneuptime

OpenAPI specification for OneUptime. This document describes the API endpoints, request and response formats, and other details necessary for developers to interact with the OneUptime API.

## Requirements

- [Terraform](https://www.terraform.io/downloads.html) >= 1.0
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
      source = "oneuptime/oneuptime"
      version = "1.0.0"
    }
  }
}

provider "oneuptime" {
  oneuptime_url = "https://api.oneuptime.com"
  api_key       = var.oneuptime_api_key
}
```

## Developing the Provider

If you wish to work on the provider, you'll first need [Go](http://www.golang.org) installed on your machine (see [Requirements](#requirements) above).

To compile the provider, run `go build`. This will build the provider and put the provider binary in the current directory.

To generate or update…
