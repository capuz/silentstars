---
repo: "compatibility-fyi/compatibility.fyi"
name: "compatibility.fyi"
description: "Open, source-backed software version compatibility matrices for humans and automation."
readmeQualityOk: true
url: "https://github.com/compatibility-fyi/compatibility.fyi"
homepage: "https://compatibility.fyi"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["compatibility", "metadata", "software-compatibility", "typescript", "cloudflare-workers", "compatibility-matrix", "dependency-management", "open-data", "semver", "version-compatibility"]
stars: 6
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-08T14:23:46Z"
lastCommitAt: "2026-07-29T06:13:22Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 44
maintainers: ["rxbn", "renovate[bot]", "gi8lino"]
openGraphImageUrl: "https://opengraph.githubassets.com/3248217a40c4d3c8eeabacf203933c925529fde211b2acf174a45e7c05b2ae13/compatibility-fyi/compatibility.fyi"
discussionCount: 1
---

# compatibility.fyi

Open, source-backed software compatibility metadata.

compatibility.fyi helps answer whether software versions are known to work together. It collects
compatibility evidence from official documentation, support matrices, release notes, and upstream
sources into a small YAML-backed catalog with a searchable website and JSON API.

The goal is to become for compatibility data what [endoflife.date](https://endoflife.date/) is for
lifecycle data: open, structured, community-maintained, easy to browse, and useful for automation.

## Why

Compatibility information is usually scattered across release notes, Helm charts, support matrices,
CI jobs, source trees, and vendor docs. That makes practical questions hard to answer:

- Is Keycloak 26 compatible with PostgreSQL 17?
- Which Gateway API version is supported by Envoy Gateway 1.8?
- Which OpenShift hosted cluster versions work with a given Red Hat ACM release?
- Is this Renovate, Dependabot, Helm, or GitOps update actually compatible?

compatibility.fyi turns those claims into versioned metadata that people can inspect and tools can
query.

## Project Shape

- Compatibility data is stored as YAML files in `data/`.
-…
