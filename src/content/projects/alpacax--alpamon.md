---
repo: "alpacax/alpamon"
name: "alpamon"
description: "System agent for Alpacon to enable secure remote access and monitoring."
readmeQualityOk: true
url: "https://github.com/alpacax/alpamon"
homepage: "https://www.alpacax.com/alpacon/"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["agent", "alpacon", "go", "golang", "websocket", "pty"]
stars: 13
forks: 1
openIssues: 31
closedIssues: 173
watchers: 3
contributors: 12
recentReleases: 0
createdAt: "2024-09-26T07:51:21Z"
lastCommitAt: "2026-09-29T08:10:53Z"
lastReleaseAt: "2024-10-25T12:44:06Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 70
maintainers: ["jisung-02", "eunyoung14", "geunwoonoh"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c34be57c690f3857afe3f4ae4c44f16cb5d42cbd98aead67e1a13fa813cc5b6/alpacax/alpamon"
---

# Alpamon

**Alpamon** is the open-source server agent for [Alpacon](https://alpacon.io), the AI-native PAM that governs *what* humans, AI agents, and CI/CD pipelines execute on your servers.

Installed on each managed server, Alpamon establishes an outbound-only connection to the Alpacon control plane (no inbound ports, no firewall changes) and enforces server-side decisions locally: Websh terminals, file transfers, remote command execution, and sudo verification (via the optional [alpamon-pam](https://github.com/alpacax/alpamon-pam) module). Every action runs inside a scoped work session and is recorded for audit—same shape whether the actor is human, AI agent, or CI/CD pipeline.

## Supported platforms

| Platform | Minimum version | Arch |
| --- | --- | --- |
| Linux | Ubuntu 18.04+, Debian 11+, RHEL / Rocky / AlmaLinux 8+, Oracle Linux 8+, Amazon Linux 2 / 2023, Fedora (current or previous), Raspberry Pi OS (64-bit) | amd64, arm64 |
| Linux (best-effort) | openSUSE Leap 15+, SLES 15+ | amd64, arm64 |
| macOS | 11 (Big Sur) or later | amd64, arm64 (Apple Silicon) |
| Windows | Windows 10 (1803+) / Windows 11, Windows Server 2019 or later | amd64 |

**System requirements**:…
