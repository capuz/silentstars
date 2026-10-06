---
repo: "nhs-england-tools/terraform-aws-opennext"
name: "terraform-aws-opennext"
description: "🧱 💻 ☁️ A Terraform module for deploying a Next.js application built with OpenNext to AWS"
readmeQualityOk: true
url: "https://github.com/nhs-england-tools/terraform-aws-opennext"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [93]
topics: ["aws", "engineering", "github", "nhs-digital", "nhs-england", "open-next", "terraform-module", "nextjs"]
stars: 134
forks: 32
openIssues: 7
closedIssues: 1
watchers: 7
contributors: 9
recentReleases: 0
createdAt: "2023-06-02T09:39:07Z"
lastCommitAt: "2026-10-06T10:41:34Z"
lastReleaseAt: "2024-01-17T15:19:10Z"
status: "thriving"
tags: []
healthScore: 68
undervaluedScore: 22
maintainers: ["sandyforresternhs", "dependabot[bot]", "jslb-nhs"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd39c111f704aa3d95d425510e3e644729dcf64f8f1c682320f3c10d2cd707dd/nhs-england-tools/terraform-aws-opennext"
---

# OpenNext Terraform Module for AWS

This is a Terraform module for deploying a Next.js application built with [OpenNext](https://open-next.js.org/).

## Table of Contents

- [OpenNext Terraform Module for AWS](#opennext-terraform-module-for-aws)
  - [Table of Contents](#table-of-contents)
  - [Example](#example)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
  - [Usage](#usage)
  - [Architecture](#architecture)
    - [Diagrams](#diagrams)
    - [Configuration](#configuration)
  - [Contributing](#contributing)
  - [Contacts](#contacts)
  - [Licence](#licence)

## Example

The example app in `example/` is deployed using the latest version of this Terraform module to [terraform-aws-opennext.tools.engineering.england.nhs.uk](https://terraform-aws-opennext.tools.engineering.england.nhs.uk/).

## Installation

Copy and paste the following into your Terraform configuration, edit the variables, and then run `terraform init`.

```tf
module "opennext" {
  source  = "nhs-england-tools/opennext/aws"
  version = "1.0.0" # Use the latest release from https://github.com/nhs-england-tools/terraform-aws-opennext/releases

  prefix              = "opennext"…
