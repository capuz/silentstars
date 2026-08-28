---
repo: "cloudposse/terraform-aws-backup"
name: "terraform-aws-backup"
description: "Terraform module to provision AWS Backup, a fully managed backup service that makes it easy to centralize and automate the back up of data across AWS services such as EBS volumes, RDS databases, DynamoDB tables, EFS file systems, and AWS Storage Gateway volumes."
readmeQualityOk: true
url: "https://github.com/cloudposse/terraform-aws-backup"
homepage: "https://cloudposse.com/accelerate"
language: "HCL"
languages: ["HCL"]
languagePcts: [82]
topics: ["hcl2", "aws", "terraform", "terraform-modules", "terraform-module", "backup", "backups", "aws-dynamodb", "aws-efs", "efs"]
stars: 118
forks: 67
openIssues: 4
closedIssues: 17
watchers: 19
contributors: 31
recentReleases: 0
createdAt: "2019-10-07T22:02:37Z"
lastCommitAt: "2026-08-28T14:23:01Z"
lastReleaseAt: "2021-02-06T02:24:57Z"
status: "thriving"
tags: ["legacy_hero", "funded", "fork_magnet"]
healthScore: 93
undervaluedScore: 30
maintainers: ["RoseSecurity"]
openGraphImageUrl: "https://opengraph.githubassets.com/be1f11d1671607a4371835b1f3d940b6945d15ddc2249d3e3c68950fc584bafa/cloudposse/terraform-aws-backup"
fundingLinks: ["GITHUB:https://github.com/cloudposse"]
---

</p>

Terraform module to provision [AWS Backup](https://aws.amazon.com/backup), a fully managed backup service that makes it easy to centralize and automate
the back up of data across AWS services such as Amazon EBS volumes, Amazon EC2 instances, Amazon RDS databases, Amazon DynamoDB tables,
Amazon EFS file systems, and AWS Storage Gateway volumes.

> [!NOTE]  
> The syntax of declaring a backup schedule has changed as of release `0.14.0`, follow the instructions in the [0.13.x to 0.14.x+ migration guide](https://github.com/cloudposse/terraform-aws-backup/blob/HEAD/docs/migration-0.13.x-0.14.x+.md).

> [!WARNING]
> The deprecated variables have been fully deprecated as of `1.x.x`. Please use the new variables as described in the [0.13.x to 0.14.x+ migration guide](https://github.com/cloudposse/terraform-aws-backup/blob/HEAD/docs/migration-0.13.x-0.14.x+.md).

> [!TIP]
> #### 👽 Use Atmos with Terraform
> Cloud Posse uses [`atmos`](https://atmos.tools) to easily orchestrate multiple environments using Terraform. <br/>
> Works with [Github Actions](https://atmos.tools/integrations/github-actions/), [Atlantis](https://atmos.tools/integrations/atlantis), or…
