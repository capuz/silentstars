---
repo: "ruaan-deysel/vault"
name: "vault"
description: "Vault is a backup and restore daemon for Unraid servers. It protects Docker containers, VMs, ZFS datasets, folders, and plugins by backing them up to different storage destinations — local disk, SFTP, SMB, NFS, WebDAV, or S3-compatible object storage."
readmeQualityOk: true
url: "https://github.com/ruaan-deysel/vault"
language: "Go"
languages: ["Go"]
languagePcts: [79]
topics: ["backups", "unraid"]
stars: 48
forks: 2
openIssues: 9
closedIssues: 149
watchers: 0
contributors: 4
recentReleases: 4
createdAt: "2026-02-28T06:19:39Z"
lastCommitAt: "2026-08-10T05:06:40Z"
lastReleaseAt: "2026-06-07T08:41:56Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 42
maintainers: ["ruaan-deysel", "dependabot[bot]", "0x1917"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d4853812d707e2f8c1b160d5b9b1d3c11f8868f4c9185e1153a14b735d775c5/ruaan-deysel/vault"
---

# Vault

Vault is a backup and restore daemon for [Unraid](https://unraid.net/) servers. It protects Docker containers, libvirt VMs, ZFS datasets, folders, and plugins by backing them up to pluggable storage destinations — local disk, SFTP, SMB, NFS, WebDAV, or S3-compatible object storage. Vault ships with a REST API, an MCP server for AI assistants, WebSocket progress streaming, and an integrated web UI built with Svelte 5.

## Features

**Backup sources**

- Docker containers — image, XML template, and every mapped appdata volume; per-container path exclusions
- libvirt VMs — live snapshot or cold mode, with NVRAM preservation
- ZFS datasets — native `zfs send`/`receive` with snapshot management
- Folders and plugins — any path on the host, plus all installed Unraid plugins
- Stale-item detection — flags items that disappear from the host so jobs stay clean

**Storage destinations**

- Local, SFTP, SMB, NFS, WebDAV, and S3-compatible (AWS S3, Backblaze B2, MinIO, Cloudflare R2, Wasabi, MEGA, IDrive E2)
- Bandwidth throttling per remote destination
- Test-connection and storage-health probes
- Scan + import for backups produced by other Vault instances or AppData Backup…
