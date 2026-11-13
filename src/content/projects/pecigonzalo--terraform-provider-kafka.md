---
repo: "pecigonzalo/terraform-provider-kafka"
name: "terraform-provider-kafka"
description: "Terraform Kafka Provider"
readmeQualityOk: true
url: "https://github.com/pecigonzalo/terraform-provider-kafka"
homepage: "https://registry.terraform.io/providers/pecigonzalo/kafka/latest"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["terraform-provider", "kafka", "terraform", "aws", "msk", "aws-msk"]
stars: 8
forks: 4
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-10-20T08:15:31Z"
lastCommitAt: "2026-11-13T11:22:44Z"
lastReleaseAt: "2026-07-15T12:21:10Z"
status: "thriving"
tags: []
healthScore: 91
undervaluedScore: 82
maintainers: ["pecigonzalo", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/16c1a3eb9d3ff50c9bc66afd7f7b7d241b83e8179523fce59239dac5fae152ec/pecigonzalo/terraform-provider-kafka"
---

# Terraform Kafka Provider

A Terraform provider for Kafka powered by [kafka-go](https://github.com/segmentio/kafka-go).

## State
- [x] Migrate to use `kafka-go` directly instead of `topicctl` wrappers
- [x] Authentication
  - [x] SASL
    - [x] IAM
    - [x] SCRAM
    - [x] PLAINTEXT
  - [x] PLAINTEXT
- [x] Topic management
- [x] ACL management
- [x] Quota management
- [x] Development
  - [x] Local acceptance testing Kafka
  - [x] Automated release process
  - [x] Automated testing process

## Requirements

- [Terraform](https://www.terraform.io/downloads.html) >= 1.0
- [Go](https://golang.org/doc/install) >= 1.25

### Optional

- [direnv](https://direnv.net/)
- [Nix](https://nixos.org/) with [Flakes](https://nixos.wiki/wiki/Flakes)

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
go…
