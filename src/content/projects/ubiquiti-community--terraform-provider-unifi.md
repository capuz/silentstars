---
repo: "ubiquiti-community/terraform-provider-unifi"
name: "terraform-provider-unifi"
description: "Terraform provider for Unifi :satellite:"
readmeQualityOk: true
url: "https://github.com/ubiquiti-community/terraform-provider-unifi"
homepage: "https://registry.terraform.io/providers/ubiquiti-community/unifi/latest/docs"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["homelab", "terraform", "unifi", "unifi-controller"]
stars: 136
forks: 57
openIssues: 15
closedIssues: 109
watchers: 5
contributors: 57
recentReleases: 0
createdAt: "2024-07-13T10:11:53Z"
lastCommitAt: "2026-08-24T04:21:33Z"
lastReleaseAt: "2026-01-15T20:05:25Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 49
maintainers: ["kallioli", "dependabot[bot]", "appkins"]
openGraphImageUrl: "https://opengraph.githubassets.com/74b7f5fe5c995017c6cb933d0419f285381aed34038bdb89ecef8f61077823ef/ubiquiti-community/terraform-provider-unifi"
discussionCount: 1
---

# Unifi Terraform Provider (terraform-provider-unifi)

> **Note**: You can't (for obvious reasons) configure your network while connected to something that may disconnect (like the WiFi). Use a hard-wired connection to your controller to use this provider.

Functionality first needs to be added to the [go-unifi](https://github.com/ubiquiti-community/go-unifi) SDK.

## Documentation

You can browse documentation on the [Terraform provider registry](https://registry.terraform.io/providers/ubiquiti-community/unifi/latest/docs).

## Supported Unifi Controller Versions

As of version [v0.34](https://github.com/ubiquiti-community/terraform-provider-unifi/releases/tag/v0.34.0), this provider only supports version 6 of the Unifi controller software. If you need v5 support, you can pin an older version of the provider.

The docker, UDM, and UDM-Pro versions are slightly different (the API is proxied a little differently) but for the most part should all be supported. Individual patch versions of the controller are generally not tested for compatibility, just the latest stable versions.

## Using the Provider

### Terraform 1.0 and above

You can use the provider via the [Terraform provider…
