---
repo: "ministryofjustice/opg-digideps"
name: "opg-digideps"
description: "Digideps: Managed by opg-org-infra & Terraform"
readmeQualityOk: true
url: "https://github.com/ministryofjustice/opg-digideps"
language: "PHP"
languages: ["PHP"]
languagePcts: [70]
stars: 12
forks: 3
openIssues: 1
closedIssues: 2
watchers: 16
contributors: 125
recentReleases: 0
createdAt: "2019-08-05T09:09:18Z"
lastCommitAt: "2026-09-01T07:50:04Z"
lastReleaseAt: "2024-01-18T13:46:44Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch"]
healthScore: 92
undervaluedScore: 59
maintainers: ["jamesrwarren", "renovate[bot]", "iqpalm"]
openGraphImageUrl: "https://opengraph.githubassets.com/108123ab1edb1ebdf4f354851d6c6a4e61cdfda3dda2b4d5e3fc386cadafb58c/ministryofjustice/opg-digideps"
---

# Complete the deputy report

This app is the [Complete the deputy report][service] service. It provides an online reporting service that has a publicly available frontend used by deputies to submit their reports, and a VPN restricted admin area for case managers to review submitted reports.

## Quicker start

If you have `make` and `brew` installed it is suggested that you run the following command;

```shell
make setup-mac-development-tools
```

Currently only the pre-commit setup steps are automated.
Please add further automation to `Makefile.devsetup.mk` and update the documentation to reflect the changes.

## Requirements

### 1. Docker

You must have Docker installed.

> **N.B.** If you have an M1 macOS running Monterey 12.2 or higher, or you have an Intel based macOS running Monterey 12.3 or higher then there are some Docker setting you can enable which improves I/O performance for operations on volumes.

#### M1 macOS Monterey ≥ 12.2 | Intel macOS Monterey ≥ 12.3 Docker settings

* `Docker settings -> General -> make sure 'Use the new Virtualization framework' is ticked`
* `Docker settings -> General -> tick 'VirtioFS' for file sharing`
* `Docker settings -> General ->…
