---
repo: "alipourhabibi/Hades"
name: "Hades"
description: "Open source Buf compatible schema registry."
readmeQualityOk: true
url: "https://github.com/alipourhabibi/Hades"
language: "Go"
languages: ["Go"]
languagePcts: [80]
topics: ["golang", "protocol-buffers", "shcema-registry", "buf", "cloud-native", "cloudnative", "kubernetes", "self-host", "selfhost"]
stars: 17
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-11-24T06:42:40Z"
lastCommitAt: "2026-09-13T08:29:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 60
maintainers: ["alipourhabibi", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c40f1236755be67df24039e255369d480dd6e0ab97d839b4f96cb0db0fa35e6f/alipourhabibi/Hades"
---

# Hades

An open-source [Buf](https://github.com/bufbuild/buf)-compatible schema registry for managing and versioning Protocol Buffer definitions.

<table width="100%">
  <tr>
    <td width="50%" align="center">
      <br/><sub><b>Module Overview</b> (latest commit, buf.yaml and visibility)</sub>
    </td>
    <td width="50%" align="center">
      <br/><sub><b>Generated SDKs</b> (per-language install commands with version selector)</sub>
    </td>
  </tr>
</table>

<video src="https://github.com/user-attachments/assets/a9758133-1611-4e75-b801-a9b55e341319" autoplay loop muted playsinline width="100%"></video>

## Quickstart

**Run with no external dependencies (SQLite + local filesystem):**

```bash
go run ./cmd/hades serve --config config/dev.yaml
```

The default `config/dev.yaml` uses SQLite for metadata and local disk for git and artifacts. No Docker required.

**Run with Postgres:**

```bash
docker compose -f development/docker-compose-minimal.yaml up -d
make migrate-up
go run ./cmd/hades serve --config config/dev.yaml
```

See [DEVELOPMENT.md](https://github.com/alipourhabibi/Hades/blob/HEAD/DEVELOPMENT.md) for the full development guide.

## Storage tools

Storage backends…
