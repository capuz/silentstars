---
repo: "osism/release"
name: "release"
description: "OSISM release details"
readmeQualityOk: true
url: "https://github.com/osism/release"
homepage: "https://osism.tech/docs/release-notes/"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 12
forks: 3
openIssues: 1
closedIssues: 49
watchers: 3
contributors: 13
recentReleases: 0
createdAt: "2017-10-04T14:22:09Z"
lastCommitAt: "2026-10-23T08:47:38Z"
lastReleaseAt: "2024-03-28T06:51:12Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 75
maintainers: ["ideaship", "renovate[bot]", "berendt"]
openGraphImageUrl: "https://opengraph.githubassets.com/10ec2b27f0e030a5de8ff3572ab1b4855b7a040b9e1c030d23eab99f1aaa1a8c/osism/release"
---

# OSISM release repository

Release notes published at https://osism.tech/docs/release-notes/

## Overview

This repository is the central place for managing OSISM releases. It pins all component
versions (container images, Ansible collections, Python packages, GitHub repositories) for
each release and provides the tooling to create new releases, tag components, and generate
changelogs.

## Repository structure

```
.
├── latest/              # Current development versions (continuously updated)
│   ├── base.yml         # Core component versions
│   ├── ceph-*.yml       # Ceph-specific versions (quincy, reef, squid)
│   ├── ceph.yml         # Symlink → default Ceph version (newest active Ceph release)
│   ├── openstack-*.yml  # OpenStack-specific versions (2024.1, 2024.2, 2025.1, 2025.2)
│   └── openstack.yml    # Symlink → default OpenStack version (newest SLURP release)
├── <VERSION>/           # Pinned release versions (e.g. 10.0.0/, 9.5.0/)
│   └── base.yml         # Frozen component versions for this release
├── next/                # SBOMs and metadata for upcoming builds
├── archive/             # Historical versions
├── etc/                 # Reference metadata
│   ├──…
