---
repo: "platacard/terraform-provider-superset"
name: "terraform-provider-superset"
description: "Terraform provider to manage Apache Superset Server resources"
readmeQualityOk: true
url: "https://github.com/platacard/terraform-provider-superset"
homepage: "https://registry.terraform.io/providers/platacard/superset/latest"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["infrastructure-as-code", "superset", "terraform", "terraform-provider"]
stars: 17
forks: 14
openIssues: 6
closedIssues: 4
watchers: 0
contributors: 9
recentReleases: 1
createdAt: "2024-05-24T11:07:01Z"
lastCommitAt: "2026-11-08T10:41:39Z"
lastReleaseAt: "2026-10-05T11:29:52Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 76
undervaluedScore: 59
maintainers: ["jshahverdiev", "alionar", "kris-walsh-LR"]
openGraphImageUrl: "https://opengraph.githubassets.com/3e8c6ea540d5898d5d178c50f9cd2160b462a8025a59296738a293b983bd6730/platacard/terraform-provider-superset"
---

# Terraform Provider Apache Superset

- A resource and a data source (`internal/provider/`),
- Examples (`examples/`) and generated documentation (`docs/`),
- Miscellaneous meta files.

## Requirements

- [Terraform](https://developer.hashicorp.com/terraform/downloads) >= 1.0
- [Go](https://golang.org/doc/install) >= 1.21

## Building The Provider

1. Clone the repository
1. Enter the repository directory
1. Build the provider using the Go `install` command:

```shell
go install .
```

## Adding Dependencies

This provider uses [Go modules](https://github.com/golang/go/wiki/Modules).
Please see the Go documentation for the most up to date information about using Go modules.

To add a new dependency `github.com/author/dependency` to your Terraform provider:

```shell
go get github.com/author/dependency
go mod tidy
```

Then commit the changes to `go.mod` and `go.sum`.

## Using the provider

Fill this in for each provider

## Developing the Provider

If you wish to work on the provider, you'll first need [Go](http://www.golang.org) installed on your machine (see [Requirements](#requirements) above).

To compile the provider, run `go install`. This will build the provider and put…
