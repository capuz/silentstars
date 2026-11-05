---
repo: "e-breuninger/terraform-provider-netbox"
name: "terraform-provider-netbox"
description: "Terraform provider to interact with Netbox"
readmeQualityOk: true
url: "https://github.com/e-breuninger/terraform-provider-netbox"
homepage: "https://registry.terraform.io/providers/e-breuninger/netbox/latest/docs"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["netbox", "terraform", "terraform-provider"]
stars: 300
forks: 210
openIssues: 106
closedIssues: 191
watchers: 14
contributors: 122
recentReleases: 0
createdAt: "2020-08-19T12:00:13Z"
lastCommitAt: "2026-11-05T11:25:05Z"
lastReleaseAt: "2020-12-24T13:44:33Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 85
undervaluedScore: 33
maintainers: ["dependabot[bot]", "fbreckle", "rfranks-securenet"]
openGraphImageUrl: "https://opengraph.githubassets.com/00ae6f72ed13b0863eef89502d93631a6046d670a59f479a6d59fb3ea950f75d/e-breuninger/terraform-provider-netbox"
---

# terraform-provider-netbox

The Terraform Netbox provider is a plugin for Terraform that allows for the full lifecycle management of [Netbox](https://netboxlabs.com/docs/netbox/) resources.
This provider is maintained by E. Breuninger.

See: [Official documentation](https://registry.terraform.io/providers/e-breuninger/netbox/latest/docs) in the Terraform registry.

## Requirements

- [Terraform](https://www.terraform.io/downloads.html) >= 1.0

## Supported netbox versions

Netbox often makes breaking API changes even in non-major releases. Check the table below to see which version a provider was tested against. It is generally recommended to use the provider version matching your Netbox version. We aim to always support the latest minor version of Netbox.

Since version [1.6.6](https://github.com/e-breuninger/terraform-provider-netbox/commit/0b0b2fffa54d4ab2e5f1677e948b01e56ba211c8), each version of the provider has a built-in list of all Netbox versions it supports at release time. Upon initialization, the provider will probe your Netbox version and include a (non-blocking) warning if the used Netbox version is not supported.

| Netbox version  | Provider version |
|…
