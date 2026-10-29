---
repo: "meshcloud/meshstack-hub"
name: "meshstack-hub"
description: "Ready to use building blocks that you can use in your meshStack!"
readmeQualityOk: true
url: "https://github.com/meshcloud/meshstack-hub"
homepage: "https://hub.meshcloud.io"
language: "HCL"
languages: ["HCL"]
languagePcts: [84]
topics: ["platform-engineering", "terraform"]
stars: 6
forks: 1
openIssues: 7
closedIssues: 1
watchers: 1
contributors: 15
recentReleases: 0
createdAt: "2025-03-19T10:20:54Z"
lastCommitAt: "2026-10-29T14:06:57Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 70
maintainers: ["florianow", "henryde", "malhussan"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ebb82f4a822cf68bd1082e7aff194f42c334b7b5b7edaa7ad7f7561cc48c9b7/meshcloud/meshstack-hub"
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
