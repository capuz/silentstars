---
repo: "cyverse/irods-csi-driver"
name: "irods-csi-driver"
description: "CSI driver for iRODS"
readmeQualityOk: true
url: "https://github.com/cyverse/irods-csi-driver"
language: "Go"
languages: ["Go"]
languagePcts: [85]
stars: 5
forks: 3
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2020-06-05T18:51:12Z"
lastCommitAt: "2026-10-29T21:24:35Z"
lastReleaseAt: "2021-08-24T19:31:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 79
maintainers: ["iychoi"]
openGraphImageUrl: "https://opengraph.githubassets.com/a15c509979b376f4dd846462dc359eec8b6f7fdb75232d0b2bfd058faf98f2ca/cyverse/irods-csi-driver"
---

## iRODS CSI Driver

[iRODS](https://irods.org) Container Storage Interface (CSI) Driver implements the [CSI Specification](https://github.com/container-storage-interface/spec/blob/master/spec.md) to provide container orchestration engines (like [Kubernetes](https://kubernetes.io/)) iRODS access.

### CSI Specification Compatibility

iRODS CSI Driver only supports CSI Specification Version v1.2.0 or higher.

### Kubernetes Compatibility

iRODS CSI Driver requires Kubernetes 1.20 or higher, the minimum version supported by the bundled `csi-provisioner` sidecar (v5.3.0).

### Features

iRODS CSI Driver relies on external iRODS clients for mounting iRODS collections.
| Driver Type | iRODS Client     | Volume Provisioning | Server Requirements             |
|-------------|------------------|---------------------|---------------------------------|
| irodsfuse   | iRODS FUSE       | Static, Dynamic     | no                              |
| webdav      | DavFS2           | Static              | requires [iRODS-WebDAV](https://github.com/DICE-UNC/irods-webdav) or [Davrods](https://github.com/UtrechtUniversity/davrods) |
| nfs         | NFS (nfs-common) | Static              | requires…
