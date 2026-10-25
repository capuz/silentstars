---
repo: "nagyesta/file-barj"
name: "file-barj"
description: "A file backup and restore utility written in Java."
readmeQualityOk: true
url: "https://github.com/nagyesta/file-barj"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 5
forks: 3
openIssues: 2
closedIssues: 32
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-09-26T21:23:54Z"
lastCommitAt: "2026-10-25T09:00:40Z"
lastReleaseAt: "2024-02-02T22:20:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 88
maintainers: ["renovate[bot]", "github-actions[bot]", "nagyesta"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/697005344/ac9cb23b-3161-4e4d-9624-078cd404e728"
discussionCount: 0
---

[<img src="https://raw.githubusercontent.com/snyk-labs/secure-developer-sample-repo/main/Scanned_By_Snyk.png" alt="Scanned By Snyk Badge" width="10%" style="display: inline-block;">](https://snyk.io/?utm_source=open-source&utm_medium=pg-ptr&utm_campaign=ref-2501-osp&utm_content=pg-cta)

File BaRJ (File Backup and Restore Java) is a multi-platform backup utility for files. It is intended to be a highly configurable tool
that can create secure backups of preconfigured files and folders and can be easily scheduled.

> [!WARNING]
> File BaRJ is a free tool that is provided "as is", **without warranty of any kind**. It might be the perfect tool you need, or leave you
> with gigabytes of encrypted hot mess instead of your precious data. By using it, you accept the risk of data loss (among others).

## Features

### Already supported

File BaRJ comes with the following features

- Full backups of folders or files
- Incremental backups of folders or files
- Optional encryption using
  - an RSA key pair
  - a password
  - AES-256 keys for each file and the archive contents
- Change detection based on:
  - file size,
  - last modification time,
  - configurable hash algorithms
- Compression…
