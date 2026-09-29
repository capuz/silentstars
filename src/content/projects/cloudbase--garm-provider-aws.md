---
repo: "cloudbase/garm-provider-aws"
name: "garm-provider-aws"
description: "Garm external provider for EC2"
readmeQualityOk: true
url: "https://github.com/cloudbase/garm-provider-aws"
homepage: "https://github.com/cloudbase/garm-provider-aws"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["amazon", "autoscaler", "ec2", "garm", "github", "runners", "self-hosted"]
stars: 6
forks: 7
openIssues: 1
closedIssues: 4
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2024-01-15T13:22:55Z"
lastCommitAt: "2026-09-29T10:05:08Z"
lastReleaseAt: "2026-04-25T22:51:52Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 88
undervaluedScore: 85
maintainers: ["gabriel-samfira", "dependabot[bot]", "Infinoid"]
openGraphImageUrl: "https://opengraph.githubassets.com/68508c627ec132c4db170a337902a2a7c75eb35f13e7f77ff0fb8eae5eae2642/cloudbase/garm-provider-aws"
---

# Garm External Provider For AWS

The AWS external provider allows [garm](https://github.com/cloudbase/garm) to create Linux and Windows runners on top of AWS virtual machines.

## Build

Clone the repo:

```bash
git clone https://github.com/cloudbase/garm-provider-aws
```

Build the binary:

```bash
cd garm-provider-aws
go build .
```

Copy the binary on the same system where garm is running, and [point to it in the config](https://github.com/cloudbase/garm/blob/main/doc/providers.md#the-external-provider).

## Configure

The config file for this external provider is a simple toml used to configure the AWS credentials it needs to spin up virtual machines.

```bash
region = "eu-central-1"
subnet_id = "sample_subnet_id"

[credentials]
    # Allowed values are: static, role
    # When using IAM roles, you can omit the [credentials.static] section
    credential_type = "static"
    [credentials.static]
    access_key_id = "sample_access_key_id"
    secret_access_key = "sample_secret_access_key"
    session_token = "sample_session_token"
```

If you're running GARM on eks, you can use the IAM role assigned to the eks nodes by setting `credential_type` to `role`. In order for this to…
