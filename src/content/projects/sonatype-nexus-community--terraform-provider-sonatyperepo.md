---
repo: "sonatype-nexus-community/terraform-provider-sonatyperepo"
name: "terraform-provider-sonatyperepo"
description: "Terraform Provider for configuring Sonatype Nexus Repository Manager"
url: "https://github.com/sonatype-nexus-community/terraform-provider-sonatyperepo"
homepage: "https://registry.terraform.io/providers/sonatype-nexus-community/sonatyperepo/latest"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["sonatype-nexus", "terraform-provider", "nexus-repository", "nexus-repository-manager", "sonatype-nexus-repository-manager-3"]
stars: 16
forks: 15
openIssues: 14
closedIssues: 222
watchers: 8
contributors: 13
recentReleases: 0
createdAt: "2024-05-01T07:43:41Z"
lastCommitAt: "2026-07-01T07:05:36Z"
lastReleaseAt: "2025-10-14T06:56:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 77
maintainers: ["madpah", "HazemElAgaty", "marknl"]
openGraphImageUrl: "https://opengraph.githubassets.com/48a7a6b73b8ee6fe78a5a37d8d732a6e3a7a12c3b16c04010a978a1969d48081/sonatype-nexus-community/terraform-provider-sonatyperepo"
discussionCount: 2
---

# Terraform Provider for Sonatype Nexus Repository Manager

![shield_tf_version]

---

This Terraform Provider allows you to use Configuration-as-Code (CasC) practises for managing the configuration of Sonatype Nexus Repository Manager.

This provider does not provide functionality for actually deploying Sonatype Nexus Repository Manager (i.e. Infrastructure or Application installation). For deployment and installation, see  the [official Help Documentation](https://help.sonatype.com/en/sonatype-nexus-repository.html).

## Upgrading from v0.x.x to v1.x.x

See the [Migration Guide](./MIGRATION-1.0.md).

## Version Support

We test this Provider against a range of Terraform versions and Sonatype Nexus Repository Manager versions as noted below.

### Sonatype Nexus Repository Manager

This Provider is tested on Sonatype Nexus Repository Manager versions that have not yet entered Extendend Maintenance. 

See [Sonatype Nexus Repository 3 Versions Status](https://help.sonatype.com/en/sonatype-nexus-repository-3-versions-status.html) for details.

### Terraform Version support

We test on the latest patch release of each the earliest and latest version of Terraform i.e. `1.7.x` and…
