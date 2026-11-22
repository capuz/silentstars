---
repo: "terraform-yacloud-modules/terraform-yandex-kms"
name: "terraform-yandex-kms"
description: "Terraform module to manage KMS resources within the Yandex.Cloud."
readmeQualityOk: true
url: "https://github.com/terraform-yacloud-modules/terraform-yandex-kms"
language: "HCL"
languages: ["HCL"]
languagePcts: [100]
topics: ["iac", "terraform", "terraform-module", "yandex", "yandex-cloud", "hacktoberfest", "hacktoberfest2025", "yacloud"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2023-02-25T21:37:43Z"
lastCommitAt: "2026-11-22T11:50:52Z"
lastReleaseAt: "2025-10-10T15:15:34Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 55
maintainers: ["gitflow-action", "dependabot[bot]", "patsevanton"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b674fa80e46ca96ad82c0891b271e9da5c2171c22fe3a3cacddf08624861320/terraform-yacloud-modules/terraform-yandex-kms"
---

# Yandex Cloud KMS Terraform module

Terraform module which creates Yandex Cloud KMS symmetric key resources.

**Reference:** [yandex_kms_symmetric_key](https://yandex.cloud/ru/docs/terraform/resources/kms_symmetric_key)

## Input Validation

This module includes input validation to catch configuration errors early and provide clear error messages:

- **`default_algorithm`**: Must be one of `AES_128`, `AES_192`, or `AES_256`
- **`rotation_period`**: Must be a valid duration string (e.g., `8760h`, `24h`, `30m`) or `null` to disable rotation
- **`name`**: Must be 1-63 characters long (Yandex Cloud accepts various characters including special symbols)
- **`description`**: Must be 256 characters or less or `null`

**Note**: The `folder_id` field does not have client-side validation as Yandex Cloud accepts various formats. Validation occurs during `terraform apply`.

These validations help catch configuration errors early during `terraform plan` rather than during `terraform apply`.
