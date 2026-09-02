---
repo: "fortytwoservices/terraform-azurerm-selfhostedrunnervmss"
name: "terraform-azurerm-selfhostedrunnervmss"
description: "Module for creating a simple virtual machine scale set for Azure DevOps and GitHub self hosted runners"
readmeQualityOk: true
url: "https://github.com/fortytwoservices/terraform-azurerm-selfhostedrunnervmss"
language: "HCL"
languages: ["HCL", "Shell"]
languagePcts: [60, 34]
stars: 7
forks: 4
openIssues: 2
closedIssues: 10
watchers: 6
contributors: 7
recentReleases: 0
createdAt: "2023-09-15T06:21:08Z"
lastCommitAt: "2026-09-02T08:04:57Z"
lastReleaseAt: "2023-09-21T06:36:22Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 58
maintainers: ["dependabot[bot]", "4t2-marvin", "mysteq"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b3792e9fa93874d698d68a951da3d910fd982f248caee8e4e003090e6f0ebe0/fortytwoservices/terraform-azurerm-selfhostedrunnervmss"
---

# Self Hosted Runners Virtual Machine Scale Set

| :exclamation: NB!                                                              |
| ------------------------------------------------------------------------------ |
| The SKU windows2019-latest is deprecated and no new versions will be released. |
| It will be removed on 2027-01-01                                               |

| :exclamation: NB!                                      |
| ------------------------------------------------------ |
| Ubuntu 26.04 ("ubuntu-2604") has been added as preview |

| :exclamation: NB!                                                                             |
| --------------------------------------------------------------------------------------------- |
| Windows 2025 and Windows Latest images will be changed on 2026-08-01 to "windows-2025-vs2026" |

This module deploys a virtual machine scale set for self hosted runners for Azure DevOps and GitHub.

```hcl
provider "azurerm" {
  features {}
}

module "vmss" {
  source                         = "fortytwoservices/selfhostedrunnervmss/azurerm"
  operating_system               = "ubuntu"       # windows or ubuntu
  runner_platform…
