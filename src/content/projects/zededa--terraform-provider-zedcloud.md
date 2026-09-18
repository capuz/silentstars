---
repo: "zededa/terraform-provider-zedcloud"
name: "terraform-provider-zedcloud"
description: "Terraform ZedCloud provider"
readmeQualityOk: true
url: "https://github.com/zededa/terraform-provider-zedcloud"
homepage: "https://registry.terraform.io/providers/zededa/zedcloud/"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["terraform", "terraform-provider", "opentofu-provider"]
stars: 10
forks: 12
openIssues: 13
closedIssues: 12
watchers: 6
contributors: 21
recentReleases: 0
createdAt: "2021-09-15T20:57:21Z"
lastCommitAt: "2026-09-18T08:26:56Z"
lastReleaseAt: "2022-04-11T02:12:54Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 80
undervaluedScore: 58
maintainers: ["ikurakin-zededa", "zed-rishabh", "xyuria-zededa"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/406922590/46384e4b-6640-4960-b356-a933318e31a6"
discussionCount: 2
---

# terraform-provider-zedcloud

## Overview

The Terraform Provider for Zededa Cloud enables infrastructure automation for Zededa's edge computing platform. It provides seamless integration with Zededa's public API, allowing you to manage your edge computing resources through Infrastructure as Code.

## Supported Resources

- [x] Enterprise
- [x] Edge-Node (Device-Config)
- [x] Edge-Node Cluster
- [x] Edge-App
- [x] Edge-App-Instance
- [x] Network
- [x] Network-Instance
- [x] Datastore
- [x] Volume-Instance
- [x] User
- [x] Role
- [x] Credential
- [x] Patch Envelope
- [x] Project
- [x] Deployment
- [ ] Image

## Quickstart

1. **Installation**
```
go install github.com/zededa/terraform-provider-zedcloud/v2@latest
```

2. **Configuration**

Set the following environment variables to use the provider:
```
export TF_VAR_zedcloud_url="zedcontrol.zededa.net"
export TF_VAR_zedcloud_token=<YOUR-API-TOKEN>
export TF_LOG=ERROR
export TF_LOG_PATH=./terraform.log
```

The following environment variables are optional:
``` 
export TF_HTTP_SESSION_DEBUG=true

NOTE: Enabling this debug will cause each HTTP request & response to be dumped as TF log messages 
      with "logging level" `DEBUG`.…
