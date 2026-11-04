---
repo: "velero-io/velero-plugin-for-gcp"
name: "velero-plugin-for-gcp"
description: "Plugins to support Velero on Google Cloud Platform (GCP)"
readmeQualityOk: true
url: "https://github.com/velero-io/velero-plugin-for-gcp"
language: "Go"
languages: ["Go"]
languagePcts: [81]
topics: ["velero-plugin", "velero"]
stars: 86
forks: 91
openIssues: 0
closedIssues: 0
watchers: 9
contributors: 35
recentReleases: 0
createdAt: "2019-10-11T20:37:29Z"
lastCommitAt: "2026-11-04T08:04:00Z"
lastReleaseAt: "2022-02-11T06:09:09Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 73
undervaluedScore: 40
maintainers: ["blackpiglet", "reasonerjt", "ywk253100"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/214524700/ce5066df-5d2d-4672-8ea7-4cec78f78e77"
---

# Plugins for Google Cloud Platform (GCP)

## Overview

This repository contains these plugins to support running Velero on GCP:

- An object store plugin for persisting and retrieving backups and restores on Google Cloud Storage. Content of backup includes log files, warning/error files, CSI related resources list, Velero native snapshots list, Velero PodVolumeBackup list, k8s resources list, k8s resources YAMLs and files created by uploader (Restic and Kopia). Content of restore includes restore logs, warning/error files and coming k8s resources list.

- A volume snapshotter plugin for creating snapshots from volumes (during a backup) and volumes from snapshots (during a restore) on Google Compute Engine Disks.

  - Since v1.4.0, the snapshotter plugin can handle the volumes provisioned by CSI driver `pd.csi.storage.gke.io`.

You can run Kubernetes on Google Cloud Platform in either:

* Kubernetes on Google Compute Engine virtual machines
* Google Kubernetes Engine

For common use-cases, take a look at the [Examples][10] page.

## Compatibility

Below is a listing of plugin versions and respective Velero versions that are compatible.

| Plugin Version  | Velero Version |…
