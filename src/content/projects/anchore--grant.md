---
repo: "anchore/grant"
name: "grant"
description: "A license scanner for container images and filesystems."
readmeQualityOk: true
url: "https://github.com/anchore/grant"
language: "Go"
languages: ["Go"]
languagePcts: [92]
topics: ["compliance", "license", "sbom", "golang", "static-analysis"]
stars: 191
forks: 18
openIssues: 25
closedIssues: 18
watchers: 9
contributors: 18
recentReleases: 0
createdAt: "2022-12-06T14:54:51Z"
lastCommitAt: "2026-10-01T10:23:07Z"
lastReleaseAt: "2024-11-21T15:05:53Z"
status: "thriving"
tags: []
healthScore: 85
undervaluedScore: 37
maintainers: ["dependabot[bot]", "anchore-oss-update-bot", "wagoodman"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4e8da748e7d7e02fe2f66198e8fd4c185810328fee89190f1a56591bdbbf370/anchore/grant"
discussionCount: 0
---

</p>

# Grant

**A CLI tool and Go library for checking licenses in container images, SBOMs, and filesystems. Works seamlessly with [Syft](https://github.com/anchore/syft) for license investigation and policy enforcement.**

</p>

## Features

- Check licenses in **container images**, **SBOMs**, and **filesystems**
- Categorize licenses by risk level (permissive, weak copyleft, strong copyleft)
- Define and enforce [license policies](https://oss.anchore.com/docs/guides/license/policies/) with allow/deny lists
- Works seamlessly with [Syft](https://github.com/anchore/syft) SBOMs
- Multiple output formats (**table**, **JSON**) for CI/CD integration

> [!TIP]
> **New to Grant? Check out the [Getting Started guide](https://oss.anchore.com/docs/guides/license/getting-started) for a walkthrough!**

## Installation

The quickest way to get up and going:
```bash
curl -sSfL https://get.anchore.io/grant | sudo sh -s -- -b /usr/local/bin
```

> [!TIP]
> **See [Installation docs](https://oss.anchore.com/docs/installation/grant/) for more ways to get Grant!**

## The basics

List licenses within a container image or directory:

```bash
# container image
grant list redis:latest

# directory…
