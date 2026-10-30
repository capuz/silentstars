---
repo: "kosli-dev/cli"
name: "cli"
description: "A CLI client for reporting compliance events to  https://kosli.com"
readmeQualityOk: true
url: "https://github.com/kosli-dev/cli"
language: "Go"
languages: ["Go"]
languagePcts: [84]
topics: ["continuous-compliance", "devops"]
stars: 17
forks: 9
openIssues: 16
closedIssues: 126
watchers: 3
contributors: 24
recentReleases: 0
createdAt: "2021-04-13T11:15:48Z"
lastCommitAt: "2026-10-30T10:23:23Z"
lastReleaseAt: "2021-10-27T10:18:08Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 70
maintainers: ["dependabot[bot]", "AlexKantor87", "mbevc1"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d0a7032a623424ac39b7cd31f8da2f1596142d3f3cf80d227e8c7aa37801527/kosli-dev/cli"
---

# Kosli CLI

The Kosli CLI records and queries software delivery events with [Kosli](https://www.kosli.com), giving you a tamper-evident record of how your software was built, tested, and deployed.

With it you can:

* **Fingerprint artifacts** — compute the SHA256 of files, directories, and OCI/Docker images.
* **Record attestations and evidence** — bind test results, security scans (Snyk, SonarQube), pull-request approvals, Jira issues, and custom evidence to your flows and trails.
* **Snapshot running environments** — report what is actually running in Kubernetes, ECS, Lambda, S3, Docker, Azure Web Apps, GCP Cloud Run, servers, and filesystem paths.
* **Query and assert compliance** — search and diff snapshots, and gate your CI/CD pipelines with `kosli assert` commands.

See the [documentation site](https://docs.kosli.com/) for the full command reference and usage guides.

## Installation

Install with whichever method suits your platform. After installing, run `kosli version` to verify.

### Install script (Linux / macOS)

```sh
curl -sSL https://raw.githubusercontent.com/kosli-dev/cli/main/install-cli.sh | sh
```

The script detects your OS and architecture and installs the…
