---
repo: "terraform-yacloud-modules/terraform-yandex-security-group"
name: "terraform-yandex-security-group"
description: "Terraform module to manage VPC Security Group resources within the Yandex.Cloud."
readmeQualityOk: true
url: "https://github.com/terraform-yacloud-modules/terraform-yandex-security-group"
language: "HCL"
languages: ["HCL"]
languagePcts: [100]
topics: ["iac", "terraform", "terraform-modules", "yandex", "yandex-cloud", "hacktoberfest", "hacktoberfest2025", "yacloud"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2023-02-16T13:06:18Z"
lastCommitAt: "2026-11-01T10:44:00Z"
lastReleaseAt: "2025-09-14T15:12:53Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 55
maintainers: ["gitflow-action", "dependabot[bot]", "kvendingoldo"]
openGraphImageUrl: "https://opengraph.githubassets.com/95118d3cfa9d8106bedaf127a30fc3be005a6a4bef4436b3c35d1df498863dfe/terraform-yacloud-modules/terraform-yandex-security-group"
---

# Yandex Cloud Security Group Terraform module

Terraform module which creates Yandex Cloud security group resources.

## Examples

Examples codified under
the [`examples`](https://github.com/terraform-yacloud-modules/terraform-yandex-security-group/tree/main/examples) are intended
to give users references for how to use the module(s) as well as testing/validating changes to the source code of the
module. If contributing to the project, please be sure to make any appropriate updates to the relevant examples to allow
maintainers to test your changes and to keep the examples up to date for users. Thank you!

## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 1.3 |
| <a name="requirement_yandex"></a> [yandex](#requirement\_yandex) | >= 0.72.0 |

## Providers

| Name | Version |
|------|---------|
| <a name="provider_yandex"></a> [yandex](#provider\_yandex) | >= 0.72.0 |

## Modules

No modules.

## Resources

| Name | Type |
|------|------|
| [yandex_vpc_security_group.main](https://registry.terraform.io/providers/yandex-cloud/yandex/latest/docs/resources/vpc_security_group) | resource |
|…
