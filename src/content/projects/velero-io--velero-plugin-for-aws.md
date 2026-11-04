---
repo: "velero-io/velero-plugin-for-aws"
name: "velero-plugin-for-aws"
description: "Plugins to support Velero on AWS"
readmeQualityOk: true
url: "https://github.com/velero-io/velero-plugin-for-aws"
language: "Go"
languages: ["Go"]
languagePcts: [86]
topics: ["velero-plugin", "velero"]
stars: 296
forks: 185
openIssues: 0
closedIssues: 0
watchers: 11
contributors: 44
recentReleases: 0
createdAt: "2019-10-09T14:54:44Z"
lastCommitAt: "2026-11-04T08:04:24Z"
lastReleaseAt: "2022-02-11T05:13:17Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 83
undervaluedScore: 36
maintainers: ["blackpiglet", "sseago", "kaovilai"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/213946861/a70b5a82-570e-4baa-b012-c07a2e4a4696"
---

# Velero plugins for AWS

## Overview

This repository contains these plugins to support running Velero on AWS:

- An object store plugin for persisting and retrieving backups on AWS S3. Content of backup is kubernetes resources and metadata files for CSI objects, progress of async operations.  
  It is also used to store the result data of backups and restores include log files, warning/error files, etc.

- A volume snapshotter plugin for creating snapshots from volumes (during a backup) and volumes from snapshots (during a restore) on AWS EBS.
  - Since v1.4.0 the snapshotter plugin can handle the volumes provisioned by CSI driver `ebs.csi.aws.com`

## Compatibility

Below is a listing of plugin versions and respective Velero versions that are compatible.

| Plugin Version | Velero Version |
|----------------|----------------|
| v1.14.x        | v1.18.x        |
| v1.13.x        | v1.17.x        |
| v1.12.x        | v1.16.x        |
| v1.11.x        | v1.15.x        |
| v1.10.x        | v1.14.x        |
| v1.9.x         | v1.13.x        |

## Non-AWS S3 compatible provider known issues with plugin v1.13.x (aws-sdk-go-v2):
| Cloud Provider      |Notes|Velero Issue|Cloud Provider…
