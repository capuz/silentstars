---
repo: "jianyuan/terraform-provider-porkbun"
name: "terraform-provider-porkbun"
description: "Terraform provider for Porkbun"
readmeQualityOk: true
url: "https://github.com/jianyuan/terraform-provider-porkbun"
homepage: "https://registry.terraform.io/providers/jianyuan/porkbun/latest/docs"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["porkbun", "terraform", "terraform-provider"]
stars: 17
forks: 6
openIssues: 2
closedIssues: 2
watchers: 1
contributors: 5
recentReleases: 3
createdAt: "2024-12-21T10:30:50Z"
lastCommitAt: "2026-11-22T02:11:52Z"
lastReleaseAt: "2026-09-21T09:57:07Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 84
undervaluedScore: 74
maintainers: ["jianyuan", "renovate[bot]", "nmarley"]
openGraphImageUrl: "https://opengraph.githubassets.com/5df506a2d01bff6be16d3cc7722914072ce25f6b26a4143b334099577ff9f10a/jianyuan/terraform-provider-porkbun"
fundingLinks: ["GITHUB:https://github.com/jianyuan", "KO_FI:https://ko-fi.com/jianyuan"]
discussionCount: 0
---

# Terraform Provider Porkbun

Unofficial Terraform provider for [Porkbun](https://porkbun.com).

> **Available for consulting.** Need help with Terraform, infrastructure automation or AI agents? Get in touch at [jian.fyi](https://jian.fyi?utm_source=github&utm_medium=readme&utm_campaign=terraform-provider-porkbun).

## Support Development

If you find this provider useful, please consider supporting me through GitHub Sponsorship or Ko-Fi to help with its development.

## Requirements

- [Terraform](https://developer.hashicorp.com/terraform/downloads) >= 1.16
- [Go](https://golang.org/doc/install) >= 1.27

## Building The Provider

1. Clone the repository
1. Enter the repository directory
1. Build the provider using the Go `install` command:

```shell
go install
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
