---
repo: "meshcloud/meshstack-hub"
name: "meshstack-hub"
description: "Ready to use building blocks that you can use in your meshStack!"
readmeQualityOk: true
url: "https://github.com/meshcloud/meshstack-hub"
homepage: "https://hub.meshcloud.io"
language: "HCL"
languages: ["HCL"]
languagePcts: [78]
topics: ["platform-engineering", "terraform"]
stars: 5
forks: 0
openIssues: 3
closedIssues: 1
watchers: 1
contributors: 15
recentReleases: 0
createdAt: "2025-03-19T10:20:54Z"
lastCommitAt: "2026-07-20T06:33:16Z"
status: "thriving"
tags: []
healthScore: 83
undervaluedScore: 71
maintainers: ["JohannesRudolph", "grubmeshi", "henryde"]
openGraphImageUrl: "https://opengraph.githubassets.com/d174a7978fcecdb1516056a8307ebbe9189a46009423ab722819207172cd870c/meshcloud/meshstack-hub"
---

# meshStack Hub

The meshStack Hub provides a collection of ready-to-use Terraform modules that can directly be
used in your meshStack as Building Blocks.

See what's out there on [hub.meshcloud.io](https://hub.meshcloud.io)!

## 📦 Available Modules

We recommend looking at all available modules on [hub.meshcloud.io](https://hub.meshcloud.io).
Alternatively, you can find all available modules in the `modules/` directory separated by platform.

Example modules:

AWS S3 Module – Provision S3 buckets with encryption and logging.

## 🏗️ Reference Architectures

Reference architectures show how to combine multiple building blocks into a complete
platform capability. See the [`reference-architectures/`](https://github.com/meshcloud/meshstack-hub/blob/HEAD/reference-architectures/) directory
for curated, end-to-end blueprints.

## 🏢️ Structure

All Terraform modules are listed in the `modules/` directory.
This directory is split into subdirectories for each platform.
In a platform's directory, you will find all modules that are available for that platform.
Additionally, you might also find a `meshstack_integration.tf` and `README.md` file in a platform
directory. These allow you to…
