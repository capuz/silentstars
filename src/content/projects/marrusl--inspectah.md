---
repo: "marrusl/inspectah"
name: "inspectah"
description: "Tool for converting package based Fedora/CentOS/RHEL to bootc versions. Create build-ready migration artifacts. Docs: https://marrusl.github.io/inspectah/"
readmeQualityOk: true
url: "https://github.com/marrusl/inspectah"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [78, 20]
stars: 14
forks: 4
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-26T16:28:04Z"
lastCommitAt: "2026-11-20T22:38:38Z"
lastReleaseAt: "2026-06-27T21:53:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 59
maintainers: ["marrusl"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b6659d309d0a37a62b6ca4705ccce92fcef115068cb6a42123c05a9dfba748e/marrusl/inspectah"
---

# inspectah

inspectah scans a running RHEL, CentOS Stream, or Fedora host and generates everything you need to rebuild it as a [bootc](https://containers.github.io/bootc/) container image. bootc images are full operating system images managed and deployed as OCI containers — update your OS the same way you update your apps, with atomic upgrades and built-in rollback. inspectah figures out what you added to the base OS — packages, configs, services, users, cron jobs, container workloads — and generates only the delta. The output is a ready-to-build Containerfile, a config tree, an audit report, and an HTML audit report.

> **Status:** inspectah is an active prototype. It handles common RHEL 9, CentOS Stream, and Fedora configurations well, but expect rough edges on unusual setups. It targets RPM-based systems only — no Debian, no RHEL 7, no live/in-place migration.

## Quick Start

```bash
# 1. Install inspectah
sudo dnf copr enable mrussell/inspectah
sudo dnf install inspectah
```

```bash
# 2. Scan your system (run on the host you want to migrate)
sudo inspectah scan
```

```bash
# 3. Review the output
ls -lh *.tar.gz
tar tzf hostname-*.tar.gz | head -20
```
