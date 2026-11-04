---
repo: "velero-io/velero-plugin-for-microsoft-azure"
name: "velero-plugin-for-microsoft-azure"
description: "Plugins to support Velero on Microsoft Azure"
readmeQualityOk: true
url: "https://github.com/velero-io/velero-plugin-for-microsoft-azure"
language: "Go"
languages: ["Go"]
languagePcts: [83]
topics: ["velero-plugin", "velero"]
stars: 116
forks: 102
openIssues: 0
closedIssues: 0
watchers: 9
contributors: 39
recentReleases: 0
createdAt: "2019-10-11T20:37:01Z"
lastCommitAt: "2026-11-04T08:03:32Z"
lastReleaseAt: "2021-11-22T12:12:22Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 78
undervaluedScore: 36
maintainers: ["blackpiglet", "reasonerjt", "kaovilai"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/214524630/ee52e44a-4467-4ef6-a3d0-f465627e3d49"
---

# Velero plugins for Microsoft Azure

## Overview

This repository contains these plugins to support running Velero on Microsoft Azure:

- An object store plugin for persisting and retrieving backups on Azure Blob Storage. Content of backup is kubernetes resources and metadata files for CSI objects, progress of async operations. It is also used to store the result data of backups and restores include log files, warning/error files, etc.

- A volume snapshotter plugin for creating snapshots from volumes (during a backup) and volumes from snapshots (during a restore) on Azure Managed Disks.
  - Since v1.4.0 the snapshotter plugin can handle the volumes provisioned by CSI driver `disk.csi.azure.com`.
  - Since v1.5.0 the snapshotter plugin can handle the zone-redundant storage(ZRS) managed disks which can be used to support backup/restore across different available zones.

## Compatibility

Below is a listing of plugin versions and respective Velero versions that are compatible.

| Plugin Version | Velero Version |
|----------------|----------------|
| v1.13.x        | v1.17.x        |
| v1.12.x        | v1.16.x        |
| v1.11.x        | v1.15.x        |
| v1.10.x        | v1.14.x…
