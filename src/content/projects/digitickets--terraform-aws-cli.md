---
repo: "digitickets/terraform-aws-cli"
name: "terraform-aws-cli"
description: "Run the AWS CLI, with the ability to run under an assumed role, to access resources and properties missing from the Terraform AWS Provider."
readmeQualityOk: true
url: "https://github.com/digitickets/terraform-aws-cli"
language: "HCL"
languages: ["HCL", "Shell"]
languagePcts: [52, 48]
stars: 32
forks: 12
openIssues: 0
closedIssues: 11
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2020-05-07T14:11:00Z"
lastCommitAt: "2026-11-24T14:04:35Z"
lastReleaseAt: "2026-01-19T09:18:58Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 91
undervaluedScore: 50
maintainers: ["rquadling"]
openGraphImageUrl: "https://opengraph.githubassets.com/80e3fd413d0d5b8d0b933eae23f7cc9ecaa2c5e3299baad292df7dc295a1aa47/digitickets/terraform-aws-cli"
---

# terraform-aws-cli

# Table of contents

- [Plan versus apply](#plan-versus-apply)
  - [Use different IAM identities for plan and apply](#use-different-iam-identities-for-plan-and-apply)
- [Additional requirements](#additional-requirements)
- [cli-read: read-only queries](#cli-read-read-only-queries)
  - [1. Get the desired capacity of an autoscaling group.](#1-get-the-desired-capacity-of-an-autoscaling-group)
  - [2. Assuming a role.](#2-assuming-a-role)
  - [3. Adding your own profile.](#3-adding-your-own-profile)
  - [4. Adding your external ID.](#4-adding-your-external-id)
  - [5. Updating retries parameters.](#5-updating-retries-parameters)
  -…
