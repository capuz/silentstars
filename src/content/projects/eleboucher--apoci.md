---
repo: "eleboucher/apoci"
name: "apoci"
description: "Federated OCI repository"
url: "https://github.com/eleboucher/apoci"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["activitypub", "container-registry", "federation", "go", "oci", "self-hosted"]
stars: 6
forks: 1
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-08T13:56:13Z"
lastCommitAt: "2026-07-03T06:23:29Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 69
undervaluedScore: 40
maintainers: ["eleboucher"]
openGraphImageUrl: "https://opengraph.githubassets.com/e885cfc7f2f75a416910592e5b830eaf2a8b2edb2e3ed7a4fa3045894237124d/eleboucher/apoci"
fundingLinks: ["GITHUB:https://github.com/eleboucher", "KO_FI:https://ko-fi.com/eleboucher", "LIBERAPAY:https://liberapay.com/eleboucher"]
---

</p>

# apoci

> **Status: Beta.** Usable in production with care. APIs may change between minor versions.

A federated, self-hostable container and package registry. Each node is a single-user multi-format registry (OCI, npm, Cargo, PyPI, NuGet) and an ActivityPub actor (`@registry@your.domain`). Push an artifact and it federates to peers who follow you. If your node goes down, your peers still have your artifacts and you can rebootstrap from any of them.

```
  foo.com               bar.com              baz.com
  ┌────────────┐       ┌────────────┐       ┌────────────┐
  │ OCI :5000  │       │ OCI :5000  │       │ OCI :5000  │
  │ SQLite+FS  │◄─────►│ SQLite+FS  │◄─────►│ SQLite+FS  │
  │ AP actor   │       │ AP actor   │       │ AP actor   │
  └────────────┘       └────────────┘       └────────────┘
```

## Install

```bash
go install git.erwanleboucher.dev/eleboucher/apoci/cmd/apoci@latest
```

Or build from source:

```bash
make build        # binary at ./bin/apoci
```

## Configure and run

```bash
cp configs/apoci.example.yaml apoci.yaml
```

```yaml
# apoci.yaml — only endpoint is required
endpoint: "https://foo.com"
```

The domain becomes your identity…
