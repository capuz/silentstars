---
repo: "PaloAltoNetworks/terraform-azurerm-swfw-modules"
name: "terraform-azurerm-swfw-modules"
description: "Terraform Reusable Modules for Software Firewalls on Azure"
readmeQualityOk: true
url: "https://github.com/PaloAltoNetworks/terraform-azurerm-swfw-modules"
homepage: "https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/azurerm"
language: "HCL"
languages: ["HCL"]
languagePcts: [98]
topics: ["azure", "software-firewalls", "swfw", "terraform", "vmseries"]
stars: 28
forks: 28
openIssues: 2
closedIssues: 71
watchers: 12
contributors: 24
recentReleases: 0
createdAt: "2024-01-08T12:10:13Z"
lastCommitAt: "2026-09-08T08:16:48Z"
lastReleaseAt: "2024-10-10T10:07:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 79
undervaluedScore: 50
maintainers: ["acelebanski", "dependabot[bot]", "stefanskid"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ec97fc36f6c07e5de14405ca8e268f7a4c759f37d29d95dda6f316e0449eb99/PaloAltoNetworks/terraform-azurerm-swfw-modules"
---

# Terraform Modules for Palo Alto Networks Software Firewalls on Azure Cloud

## Overview

A set of modules for using **Palo Alto Networks Software Firewalls** to provide control and protection
to your applications running on Azure Cloud. It deploys Software Firewalls and it configures
aspects such as virtual networks, subnets, network security groups, storage accounts, service principals,
Panorama virtual machine instances, and more.

The design is heavily based on the [Reference Architecture Guide for Azure VM-Series](https://www.paloaltonetworks.com/resources/guides/azure-architecture-guide) and [Reference Architecture Guide for Azure CloudNGFW](https://www.paloaltonetworks.com/resources/guides/securing-apps-with-cloud-ngfw-for-azure-design-guide).

For copyright and license see the LICENSE file.

## Structure

This repository has the following directory structure:

* `modules` - this directory contains several standalone, reusable, production-grade Terraform modules. Each module is individually documented.
* `examples` - this directory shows examples of different ways to combine the modules contained in the
  `modules` directory. \
  Notice, **this code should NOT be used…
