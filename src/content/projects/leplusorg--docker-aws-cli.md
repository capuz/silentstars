---
repo: "leplusorg/docker-aws-cli"
name: "docker-aws-cli"
description: "Multi-platform Docker container to run the AWS CLI and related tools (cfn-policy-validator, jq, Git, ZIP, python, perl...)."
readmeQualityOk: true
url: "https://github.com/leplusorg/docker-aws-cli"
homepage: "https://hub.docker.com/r/leplusorg/aws-cli"
language: "Dockerfile"
languages: ["Dockerfile"]
languagePcts: [74]
topics: ["docker", "docker-container", "docker-image", "dockerfile", "aws", "aws-cli", "cli"]
stars: 7
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2020-12-29T20:57:33Z"
lastCommitAt: "2026-08-29T17:27:58Z"
lastReleaseAt: "2024-04-19T00:23:50Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 79
maintainers: ["dependabot[bot]", "thomasleplus"]
openGraphImageUrl: "https://opengraph.githubassets.com/7cc0cd5b615c1afaebaf7f45d2aa4b666be62957df35cc5242f497f86d709cfa/leplusorg/docker-aws-cli"
---

# AWS CLI

Multi-platform Docker container to run the AWS CLI and related tools (`cfn-policy-validator`, `jq`, `git`, `zip`, `python`, `perl`...).

## Rational

This image is based on the latest official
[public.ecr.aws/amazonlinux/amazonlinux](https://gallery.ecr.aws/amazonlinux/amazonlinux)
image. This image's default entrypoint is a shell (`bash`)
in which you can run not only `aws` but also other commands typically
useful when building a more advanced CI/CD pipeline. For example this
image includes the `jq` utility often very useful to process the
output of the `aws` command. The tool `cfn-policy-validator` is also
included to run IAM policies from a CloudFormation template through
IAM Access Analyzer checks.

Another significant difference with the official AWS images is that this
image is not running using the `root` user. Running as `root` should
not be necessary for CI/CD activities and it is considered a security
risk.

## Usage

To run the AWS CLI using this image:

```bash
docker run --rm -i leplusorg/aws-cli aws --version
```

## Software Bill of Materials (SBOM)

To get the SBOM for the latest image (in SPDX JSON format), use the
following command:

```bash
docker…
