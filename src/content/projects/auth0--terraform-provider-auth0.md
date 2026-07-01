---
repo: "auth0/terraform-provider-auth0"
name: "terraform-provider-auth0"
description: "The Auth0 Terraform Provider is the official plugin for managing Auth0 tenant configuration through the Terraform tool."
url: "https://github.com/auth0/terraform-provider-auth0"
homepage: "https://registry.terraform.io/providers/auth0/auth0/latest/docs"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["dx-cdt"]
stars: 215
forks: 126
openIssues: 11
closedIssues: 509
watchers: 18
contributors: 119
recentReleases: 0
createdAt: "2022-02-01T16:36:05Z"
lastCommitAt: "2026-07-01T07:05:59Z"
lastReleaseAt: "2022-06-22T17:12:44Z"
status: "thriving"
tags: ["community_hub", "fork_magnet"]
healthScore: 97
undervaluedScore: 47
maintainers: ["bkiran6398", "duedares-rvj", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/51d738ecabcfe726b8c67da0a227e50b001ad36863ba1d1f12114c4ad10ff268/auth0/terraform-provider-auth0"
discussionCount: 27
---

<h1>Auth0 Terraform Provider</h1>

</div>

-------------------------------------

The Auth0 Terraform Provider is the official plugin for managing Auth0 tenant configuration through the
[Terraform](https://www.terraform.io/) tool.

📚 [Documentation](#documentation) • 🚀 [Getting Started](#getting-started) • 💬 [Feedback](#feedback)

-------------------------------------

## Documentation

- [Official Docs](https://registry.terraform.io/providers/auth0/auth0/latest/docs)
- Guides
  - [Quickstart](./docs/guides/quickstart.md)
  - [List available triggers for actions](./docs/guides/action_triggers.md)
  - [Zero downtime client credentials rotation](./docs/guides/client_secret_rotation.md)

## Getting Started

### Requirements

- [Terraform](https://www.terraform.io/downloads)
- An [Auth0](https://auth0.com) account

### Installation

Terraform uses the [Terraform Registry](https://registry.terraform.io/) to download and install providers. To install
this provider, copy and paste the following code into your Terraform configuration. Then, run `terraform init`.

```terraform
terraform {
  required_providers {
    auth0 = {
      source  = "auth0/auth0"
      version = ">= 1.0.0" #…
