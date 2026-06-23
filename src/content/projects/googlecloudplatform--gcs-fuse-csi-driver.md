---
repo: "GoogleCloudPlatform/gcs-fuse-csi-driver"
name: "gcs-fuse-csi-driver"
description: "The Google Cloud Storage FUSE Container Storage Interface (CSI) Plugin."
url: "https://github.com/GoogleCloudPlatform/gcs-fuse-csi-driver"
language: "Go"
languages: ["Go"]
languagePcts: [96]
stars: 165
forks: 60
openIssues: 26
closedIssues: 83
watchers: 26
contributors: 516
recentReleases: 0
createdAt: "2022-11-15T20:01:15Z"
lastCommitAt: "2026-06-23T23:27:49Z"
lastReleaseAt: "2023-12-21T00:13:43Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 42
maintainers: ["uriel-guzman", "Sneha-at", "mattcary"]
openGraphImageUrl: "https://opengraph.githubassets.com/a74bd524d3fc738b1ed06d815078d7df5d2fb095425db6fbf405e0d0ef31d59e/GoogleCloudPlatform/gcs-fuse-csi-driver"
---

# Google Cloud Storage FUSE CSI Driver

The Google Cloud Storage FUSE Container Storage Interface (CSI) Plugin.

> WARNING: Manual deployment of this driver to your GKE cluster is not recommended. Instead users should use GKE to automatically deploy and manage the CSI driver as an add-on feature. See the GKE documentation [Access Cloud Storage buckets with the Cloud Storage FUSE CSI driver](https://cloud.google.com/kubernetes-engine/docs/how-to/persistent-volumes/cloud-storage-fuse-csi-driver).

> DISCLAIMER: Manual deployment of the driver to your cluster is not officially supported by Google.

## Project Overview

[Filesystem in Userspace (FUSE)](https://www.kernel.org/doc/html/next/filesystems/fuse.html) is an interface used to export a filesystem to the Linux kernel. [Cloud Storage FUSE](https://cloud.google.com/storage/docs/gcs-fuse) allows you to mount Cloud Storage buckets as a file system so that applications can access the objects in a bucket using common File IO operations (e.g. open, read, write, close) rather than using cloud-specific APIs.

The Google Cloud Storage FUSE CSI Driver lets you use the Kubernetes API to mount pre-existing Cloud Storage buckets as volumes…
