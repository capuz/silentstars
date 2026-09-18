---
repo: "Azure/terraform-azurerm-avm-res-storage-storageaccount"
name: "terraform-azurerm-avm-res-storage-storageaccount"
description: "Terraform Azure Verified Resource Module for Storage Account"
readmeQualityOk: true
url: "https://github.com/Azure/terraform-azurerm-avm-res-storage-storageaccount"
homepage: "https://registry.terraform.io/modules/Azure/avm-res-storage-storageaccount"
language: "HCL"
languages: ["HCL"]
languagePcts: [100]
topics: ["avm", "azure-verified-modules"]
stars: 39
forks: 80
openIssues: 3
closedIssues: 126
watchers: 8
contributors: 23
recentReleases: 0
createdAt: "2023-07-19T07:08:06Z"
lastCommitAt: "2026-09-18T14:03:27Z"
lastReleaseAt: "2024-08-30T16:59:24Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 93
undervaluedScore: 68
maintainers: ["azure-verified-modules[bot]", "myaschmitz", "jaredfholgate"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd0168fd379f877503e73976ae5e877493a0aea15c51b45553e66ce538415fb4/Azure/terraform-azurerm-avm-res-storage-storageaccount"
---

# Terraform Azure Storage Account Module

This Terraform module is designed to create Azure Storage Accounts and its related resources, including blob containers, queues, tables, and file shares. It also supports the creation of a storage account private endpoint which provides secure and direct connectivity to Azure Storage over a private network.

> [!WARNING]
> Major version Zero (0.y.z) is for initial development. Anything MAY change at any time. A module SHOULD NOT be considered stable till at least it is major version one (1.0.0) or greater. Changes will always be via new versions being published and no changes will be made to existing published versions. For more details please go to <https://semver.org/>

## Features

* Create a storage account with various configuration options such as account kind, tier, replication type, network rules, and identity settings.
* Create blob containers, queues, tables, and file shares within the storage account.
* Support for customer-managed keys for encrypting the data in the storage account.
* Enable private endpoint for the storage account, providing secure access over a private network.

## Limitations

* The storage account name must…
