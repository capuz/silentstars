---
repo: "JamesWoolfenden/terraform-aws-codepipeline"
name: "terraform-aws-codepipeline"
description: "Codepipeline if you must."
readmeQualityOk: true
url: "https://github.com/JamesWoolfenden/terraform-aws-codepipeline"
language: "HCL"
languages: ["HCL"]
languagePcts: [88]
topics: ["aws", "module", "codebuild", "codepipeline", "codecommit", "terraform"]
stars: 28
forks: 18
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2019-03-15T11:09:23Z"
lastCommitAt: "2026-11-09T11:59:36Z"
lastReleaseAt: "2021-01-22T13:55:19Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 75
undervaluedScore: 41
maintainers: ["JamesWoolfenden"]
openGraphImageUrl: "https://opengraph.githubassets.com/84989c177f614598c2a0903f59842acdfcc35867473fc5bd7e5f706cd3ffa0a7/JamesWoolfenden/terraform-aws-codepipeline"
---

# terraform-aws-codepipeline

Terraform module to provision an AWS [`codepipeline`](https://aws.amazon.com/codepipeline/) CI/CD system.
The module also creates the build itself and the example sets a deployment up for a Fargate project. The module has been fully updated to work with Terraform 0.12 and Terraform Cloud.

---

It's 100% Open Source and licensed under the [APACHE2](https://github.com/JamesWoolfenden/terraform-aws-codepipeline/blob/HEAD/LICENSE).

## Usage

Include this repository as a module in your existing Terraform code:

```hcl
module "codepipeline" {
  source         = "JamesWoolfenden/codepipeline/aws"
  version        = "0.4.21"
  artifact_store = var.artifact_store
  common_tags    = var.common_tags
  description    = var.description
  name           = var.name
  stages         = var.stages
}
```

## Costs

From infracost: make cost Makefile target in _example/examplea_

```md
✔ Calculating monthly cost estimate

Project: .

Name Monthly Qty Unit Monthly Cost

aws_s3_bucket.codepipeline
├─ Glacier deep archive
│ ├─ Storage 0 GB-months $0.00
│ ├─ PUT, COPY, POST, LIST requests 0 1k requests $0.00
│ ├─ GET, SELECT, and all other requests 0 1k requests $0.00
│ ├─…
