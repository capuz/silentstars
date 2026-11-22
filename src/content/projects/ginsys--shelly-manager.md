---
repo: "ginsys/shelly-manager"
name: "shelly-manager"
description: "A comprehensive Golang application for managing Shelly smart home devices with CLI interface, REST API, WiFi provisioning, and DHCP integration."
readmeQualityOk: true
url: "https://github.com/ginsys/shelly-manager"
language: "Go"
languages: ["Go"]
languagePcts: [73]
stars: 7
forks: 0
openIssues: 4
closedIssues: 318
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-08-07T16:38:11Z"
lastCommitAt: "2026-11-22T11:43:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 77
maintainers: ["srgvg"]
openGraphImageUrl: "https://opengraph.githubassets.com/e5edd995b6966c585746947c1c05e298f7df603c777e5db98f46f6b277978097/ginsys/shelly-manager"
discussionCount: 0
postedAt: "2026-11-20T12:12:55.935Z"
---

# Shelly Device Manager

A Golang application for managing Shelly smart home devices. **In development.**

## Architecture

- **Dual-binary design**: API server (containerized) + provisioning agent (host-based)
- **Multi-provider database**: SQLite, PostgreSQL, MySQL
- **Plugin-based export/import**: SMA, Terraform, Ansible, Kubernetes, Docker Compose, JSON, CSV
- **Template engine**: Sprig v3 with security controls and inheritance

## Features

- Device discovery and management (Gen1 & Gen2+ devices)
- Configuration templates with inheritance and validation
- Registry-backed export and preview across multiple formats
- Real-time metrics via WebSocket
- Web UI with configuration wizards and diff tools
- Multi-channel notifications (email, webhook, Slack)

## Export Formats

Shelly Manager supports multiple export formats for backing up and sharing device configurations:

### Database Backup (`.db`)
- **Use Case**: Full system backup including all data
- **Format**: SQLite database file
- **Compression**: GZIP or ZIP
- **Best For**: Disaster recovery, system migration
