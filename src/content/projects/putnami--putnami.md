---
repo: "Putnami/putnami"
name: "putnami"
description: "Putnami: a deterministic, observable workspace toolchain and application framework for Go, TypeScript and Python."
readmeQualityOk: true
url: "https://github.com/Putnami/putnami"
language: "Go"
languages: ["Go"]
languagePcts: [80]
topics: ["build-system", "developer-tools", "go", "monorepo", "observability", "typescript"]
stars: 9
forks: 1
openIssues: 18
closedIssues: 278
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2026-10-01T12:14:57Z"
lastCommitAt: "2026-11-05T08:04:52Z"
lastReleaseAt: "2026-11-04T13:10:57Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 99
undervaluedScore: 58
maintainers: ["fdumay"]
openGraphImageUrl: "https://opengraph.githubassets.com/19c6a6b0e6dece53ca482b497a17ff9b0a2039ee7af14e6fca6a8e411afd5571/Putnami/putnami"
---

> **Build systems, not apps.**
> Putnami is designed for your teams and their coding agents to build and run a
> multi-service system in one repository, and to keep it working as both grow.
> It is polyglot by design: Go and TypeScript ship today, and every boundary
> between languages is a tested contract.

**Status:** 0.2.0, released 2026-10-01, is the first public release, after
years of private development and use. The repository history starts at that
release.
A failure in the [supported core](#supported-core) is a bug, and we fix it:
[report it](https://github.com/putnami/putnami/issues/new?template=bug_report.md).
This repository is free, and stays free. See [What is free](#what-is-free).

## Quick Start

On macOS or Linux, on `amd64` or `arm64`, from an empty directory:

```bash
curl -fsSL https://putnami.dev/install.sh | bash
export PATH="$HOME/.putnami/bin:$PATH"
putnami init --project webapp --extension ts
putnami serve webapp
```

On Windows 10 version 1803 or later, or Windows 11, on `amd64`, in PowerShell:

```powershell
irm https://putnami.dev/install.ps1 | iex
putnami init --project webapp --extension ts
putnami serve webapp
```

Open the local URL that `putnami…
