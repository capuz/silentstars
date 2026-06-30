---
repo: "cloudfoundry/terraform-provider-cloudfoundry"
name: "terraform-provider-cloudfoundry"
description: "Terraform provider to manage Cloud Foundry resources using v3 APIs"
url: "https://github.com/cloudfoundry/terraform-provider-cloudfoundry"
homepage: "https://registry.terraform.io/providers/cloudfoundry/cloudfoundry/latest"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 19
forks: 15
openIssues: 8
closedIssues: 135
watchers: 5
contributors: 26
recentReleases: 0
createdAt: "2024-08-28T10:15:58Z"
lastCommitAt: "2026-06-30T06:49:32Z"
lastReleaseAt: "2025-06-23T09:05:43Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 75
maintainers: ["ANUGRAHG", "dependabot[bot]", "lechnerc77"]
openGraphImageUrl: "https://opengraph.githubassets.com/362c96a05d51066092774c052ee4286841156e24154864c98d1fdc88b6304b21/cloudfoundry/terraform-provider-cloudfoundry"
discussionCount: 4
---

# Terraform Provider for Cloud Foundry

## About This Project

The Terraform provider for [Cloud Foundry](https://www.cloudfoundry.org/) allows the management of resources via [Terraform](https://terraform.io/).

This provider makes use of the [go-cfclient](https://github.com/cloudfoundry/go-cfclient) to interact with the Cloud Foundry Cloud Controller [v3 APIs](https://v3-apidocs.cloudfoundry.org/version/3.159.0/index.html) and take advantages of the same. Additionally, the [v2 APIs are deprecated](https://apidocs.cloudfoundry.org/16.22.0/).

You can find usage examples in the [examples folder](examples/) of this repository.

Check the [Authentication](Authentication.md) documentation for supported approaches.

## Developing & Contributing to the Provider

The [developer documentation](DEVELOPER.md) file is a basic outline on how to build and develop the provider.

For more information about how to contribute, the project structure, and additional contribution information, see our [Contribution Guidelines](CONTRIBUTING.md).

## Prerequisites and Usage of the Provider

For the best experience using the Terraform Provider for Cloud Foundry, we recommend applying the common best…
