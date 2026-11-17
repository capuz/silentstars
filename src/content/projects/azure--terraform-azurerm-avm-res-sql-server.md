---
repo: "Azure/terraform-azurerm-avm-res-sql-server"
name: "terraform-azurerm-avm-res-sql-server"
description: "Terraform Azure Verified Resource Module for Azure SQL Server"
readmeQualityOk: true
url: "https://github.com/Azure/terraform-azurerm-avm-res-sql-server"
homepage: "https://registry.terraform.io/modules/Azure/avm-res-sql-server"
language: "HCL"
languages: ["HCL"]
languagePcts: [100]
topics: ["avm", "azure-verified-modules"]
stars: 6
forks: 27
openIssues: 4
closedIssues: 22
watchers: 6
contributors: 25
recentReleases: 0
createdAt: "2024-01-12T22:39:12Z"
lastCommitAt: "2026-11-17T12:14:30Z"
lastReleaseAt: "2026-03-19T09:21:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 91
undervaluedScore: 87
maintainers: ["azure-verified-modules[bot]", "jaredfholgate", "abhishekaryams"]
openGraphImageUrl: "https://opengraph.githubassets.com/77680dcd84243c44f4fc17841b221de2cea95ca01539fad324cc14d480ef9094/Azure/terraform-azurerm-avm-res-sql-server"
---

# terraform-azurerm-avm-sql-server

This is a resource module repo for SQL Server on Azure.

Private endpoint locks and role assignments are applied to the endpoint in both DNS-management modes. Endpoints inherit the server's `lock` when no endpoint lock is supplied; set an endpoint's `lock.kind` to `None` to opt out. Existing endpoint names and resource addresses are unchanged.

The endpoint `subresource_name` and IP configuration `member_name` default to `sqlServer`; supplied values are forwarded rather than ignored. `resource_group_name` remains a resource group **name**, not an ID. A role assignment's `skip_service_principal_aad_check = true` selects `ServicePrincipal` when `principal_type` is omitted. AzAPI does not query the directory.

## Telemetry upgrade

Telemetry uses an empty Azure deployment instead of the ModTM provider. When upgrading an existing deployment, keep the old providers available for the first initialization and apply so Terraform can forget `modtm_telemetry.telemetry` and the telemetry-only `random_uuid.telemetry` without destroying them.

Telemetry remains enabled by default and requires `Microsoft.Resources/deployments/read`,…
