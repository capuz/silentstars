---
repo: "Aaron-Lzb/vps-hysteria2"
name: "vps-hysteria2"
description: "A private Hysteria2 VPN deployment solution based on AWS EC2, TLS encryption, and Shadowrocket split routing."
readmeQualityOk: true
url: "https://github.com/Aaron-Lzb/vps-hysteria2"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["hysteria2", "proxy", "quic", "self-hosted", "tls", "ubuntu", "vpn", "vps"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-08-19T15:35:04Z"
lastCommitAt: "2026-09-19T02:46:19Z"
lastReleaseAt: "2026-08-20T22:09:16Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 46
maintainers: ["Aaron-Lzb"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0b0a2dd69483c0572ee14e8a84a019ef57f46cefbe6c3ac554ee5bf55d022d7/Aaron-Lzb/vps-hysteria2"
---

# VPS Hysteria2

English | [简体中文](https://github.com/Aaron-Lzb/vps-hysteria2/blob/HEAD/README_CN.md)

A simple and practical Hysteria2 deployment solution for VPS servers, with TLS, systemd, automatic certificate renewal, status checking, and support for multiple Hysteria2 clients.

Deploy Hysteria2 on a VPS and connect using any compatible Hysteria2 client. Shadowrocket remains a documented client example, but the server deployment is not tied to one client application.

## Contents

- [Status](#status)
- [Features](#features)
- [Architecture](#architecture)
- [Supported VPS providers](#supported-vps-providers)
- [Beginner guide](#beginner-guide)
- [Requirements](#requirements)
- [Quick start](#quick-start)
- [Client configuration](#client-configuration)
- [Server configuration](#server-configuration)
- [Certificate renewal](#certificate-renewal)
- [Health checks](#health-checks)
- [Maintenance tool updates](#maintenance-tool-updates)
- [Documentation](#documentation)
- [Security](#security)

## Status

Current version: **v1.4.0**

**v1.4.0 - Global Maintenance Command** installs the read-only status helper as `hysteria-check`, so routine checks work from any directory. The…
