---
repo: "TheDarthMole/upswake"
name: "upswake"
description: "UPSWake reads data from a UPS Nut Server and uses it to dynamically send Wake on Lan packets to servers"
readmeQualityOk: true
url: "https://github.com/TheDarthMole/upswake"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["docker", "golang", "nut", "ups", "wake-on-lan", "wol"]
stars: 21
forks: 2
openIssues: 1
closedIssues: 5
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-10-04T21:39:01Z"
lastCommitAt: "2026-10-31T15:59:02Z"
lastReleaseAt: "2025-05-23T14:49:39Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 62
maintainers: ["TheDarthMole", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/da68f625d6e98f6439ad229c87fc09d5fe64a60edcf63c14f79454d60a1621b9/TheDarthMole/upswake"
discussionCount: 0
---

A Wake on Lan application that dynamically wakes servers based on the status of a NUT UPS server using the Rego policy language.

## 📜 Highlights

### ⚡ Efficiency

- 🌐 Lightweight API server to handle Wake on Lan requests
- 📦 Small Docker image size and low footprint
- 🥧 Can be run on a Raspberry Pi or other small computer

### 🛠️ Flexibility

- 📝 Define dynamic rules using the Rego policy language
- 📦 Multi-arch Docker image can run on any platform
- ⚙️ CLI tool to manually wake a server
- 📡 Connect to multiple NUT servers and wake multiple servers

### 🛡️ Attention to Security

```bash
cosign verify ghcr.io/thedarthmole/upswake:latest \
    --certificate-identity-regexp https://github.com/TheDarthMole/upswake/.github/workflows/release.yml \
    --certificate-oidc-issuer https://token.actions.githubusercontent.com
```

```bash
cosign verify docker.io/thedarthmole/upswake:latest \
    --certificate-identity-regexp https://github.com/TheDarthMole/upswake/.github/workflows/release.yml \
    --certificate-oidc-issuer https://token.actions.githubusercontent.com
```

> [!NOTE]
> This only proves that the Docker image is from this repository, assuming that no one hacks into…
