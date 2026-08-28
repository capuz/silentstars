---
repo: "hmcts/azure-public-dns"
name: "azure-public-dns"
description: "Module and utilities to manage public DNS zones and records on Azure"
readmeQualityOk: true
url: "https://github.com/hmcts/azure-public-dns"
language: "HCL"
languages: ["HCL"]
languagePcts: [87]
stars: 7
forks: 6
openIssues: 1
closedIssues: 1
watchers: 126
contributors: 261
recentReleases: 0
createdAt: "2019-11-25T13:09:54Z"
lastCommitAt: "2026-08-28T15:29:39Z"
status: "watched"
tags: ["legacy_hero", "community_watch", "fork_magnet"]
healthScore: 88
undervaluedScore: 47
maintainers: ["bancey", "renovate[bot]", "hanimao"]
openGraphImageUrl: "https://opengraph.githubassets.com/30e238b059429b1e6cf36ea7401045ce81197a5f8589d05f1611b31f716890a9/hmcts/azure-public-dns"
---

# Azure Public DNS

This repository contains the Terraform code/module, DNS configuration files and shutter configuration files for the Azure Public DNS zones on HMCTS.

The repository is responsible for creating the zone and each record type within that zone.

The repository covers multiple environments and is deployed via [Azure DevOps](https://dev.azure.com/hmcts/PlatformOperations/_build?definitionId=278&_a=summary)

## Terraform Module

This repository contains a module designed to carry out all the creation necessary for the DNS zone:

- Creates the zone
- Creates records of each type within the zone
- Updates the records based on shutter config as/when required

### Limitations

This module supports only the following DNS record types:

- A
- CNAME
- MX
- NS
- SRV
- TXT

## Example Usage

### `components/demo/demo-platform.tf`

```terraform
data "local_file" "demo-platform-configuration" {
  filename = "${path.cwd}/../../environments/demo/demo-platform-hmcts-net.yml"
}

data "local_file" "demo-platform-configuration-shutter" {
  filename = "${path.cwd}/../../shuttering/demo/demo-platform-hmcts-net.yml"
}

module "demo-platform" {
  source              =…
