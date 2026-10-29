---
repo: "Azure/terraform-azurerm-avm-res-desktopvirtualization-hostpool"
name: "terraform-azurerm-avm-res-desktopvirtualization-hostpool"
description: "Terraform Azure Verified Resource Module for Azure Virtual Desktop (AVD) Host Pool"
readmeQualityOk: true
url: "https://github.com/Azure/terraform-azurerm-avm-res-desktopvirtualization-hostpool"
homepage: "https://registry.terraform.io/modules/Azure/avm-res-desktopvirtualization-hostpool"
language: "HCL"
languages: ["HCL"]
languagePcts: [100]
topics: ["avm", "azure-verified-modules"]
stars: 16
forks: 18
openIssues: 4
closedIssues: 14
watchers: 7
contributors: 16
recentReleases: 0
createdAt: "2023-10-18T16:36:31Z"
lastCommitAt: "2026-10-29T14:07:21Z"
lastReleaseAt: "2025-06-06T12:49:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 70
maintainers: ["azure-verified-modules[bot]", "jaredfholgate"]
openGraphImageUrl: "https://opengraph.githubassets.com/26f0d3f23c4ea38bcca983652811d63dd932c57912cb7dde9046bba76db69546/Azure/terraform-azurerm-avm-res-desktopvirtualization-hostpool"
---

# terraform-azurerm-avm-res-desktopvirtualization-hostpool

Module to deploy Azure Virtual Desktop Host Pool and associated resources.

## Features
- Azure Virtual Desktop Host Pool
  - RDP Properties
  - Properties
  - Scheduled agent updates
  - Optional Private Endpoint
S

## Requirements

The following requirements are needed by this module:

- <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) (>= 1.9, < 2.0)

- <a name="requirement_azapi"></a> [azapi](#requirement\_azapi) (~> 2.12)

- <a name="requirement_azurerm"></a> [azurerm](#requirement\_azurerm) (>= 4.0.0, <5.0)

## Resources

The following resources are used by this module:

- [azapi_resource.telemetry](https://registry.terraform.io/providers/Azure/azapi/latest/docs/resources/resource) (resource)
- [azurerm_monitor_diagnostic_setting.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/monitor_diagnostic_setting) (resource)
- [azurerm_private_endpoint.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/private_endpoint) (resource)
-…
