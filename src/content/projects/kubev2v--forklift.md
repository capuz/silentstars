---
repo: "kubev2v/forklift"
name: "forklift"
description: "Toolkit for migrating VMs from VMware, OVA, EC2, HyperV, oVirt and OpenStack to KubeVirt"
readmeQualityOk: true
url: "https://github.com/kubev2v/forklift"
homepage: "https://kubev2v.github.io/forklift-documentation/"
language: "Go"
languages: ["Go"]
languagePcts: [89]
topics: ["kubernetes", "kubevirt", "migration", "openstack", "ovirt", "virt-v2v", "vmware", "vsphere", "ova", "ovf"]
stars: 188
forks: 99
openIssues: 80
closedIssues: 90
watchers: 6
contributors: 64
recentReleases: 1
createdAt: "2022-09-08T10:27:58Z"
lastCommitAt: "2026-07-29T06:14:40Z"
lastReleaseAt: "2026-06-30T05:23:16Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 90
undervaluedScore: 45
maintainers: ["red-hat-konflux[bot]", "amitosw15", "Hazanel"]
openGraphImageUrl: "https://opengraph.githubassets.com/952c30ee945bd05c6486f6b9fa3533666d8c3a840deccd95f437e3fa39eec1a8/kubev2v/forklift"
discussionCount: 10
---

&nbsp;&nbsp;[](https://codecov.io/gh/kubev2v/forklift)

# Forklift
Migrates virtual machines at scale to Kubernetes KubeVirt.
Migrations are performed in a few simple steps, first by providing source and destination credentials,
then mapping the source and destination infrastructure and creating a choreographed plan, and finally,
executing the migration effort.

## Features
- **Warm migration** using Change Block Tracking/Incremental Backup to reduce the downtime, supported in VMware and oVirt migrations.
- For VMware migrations, the Forklift uses [virt-v2v](https://libguestfs.org/virt-v2v.1.html) **guest conversions** which installs the virtio drivers and edits the guest to run on QEMU-KVM.
- Migrating to **remote clusters**, user can install the Forklift on one cluster and orchestrate other cluster to do the migration.
- Migrating VMs **between clusters** using the KubeVirt [Export API](https://kubevirt.io/user-guide/storage/export_api/).
- **Validations** of the Virtual Machines to let users know if migration plan has issues that need to be addressed before running.
---

## Deploy
Deploy the Forklift operator index to the cluster.

Create the target namespace first (it is not…
