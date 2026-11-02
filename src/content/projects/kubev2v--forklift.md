---
repo: "kubev2v/forklift"
name: "forklift"
description: "Toolkit for migrating VMs from VMware, OVA, EC2, HyperV, oVirt and OpenStack to KubeVirt"
readmeQualityOk: true
url: "https://github.com/kubev2v/forklift"
homepage: "https://kubev2v.github.io/forklift-documentation/"
language: "Go"
languages: ["Go"]
languagePcts: [90]
topics: ["kubernetes", "kubevirt", "migration", "openstack", "ovirt", "virt-v2v", "vmware", "vsphere", "ova", "ovf"]
stars: 211
forks: 119
openIssues: 84
closedIssues: 91
watchers: 6
contributors: 70
recentReleases: 0
createdAt: "2022-09-08T10:27:58Z"
lastCommitAt: "2026-11-02T11:36:11Z"
lastReleaseAt: "2026-06-30T05:23:16Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 90
undervaluedScore: 43
maintainers: ["red-hat-konflux[bot]", "mnecas", "Hazanel"]
openGraphImageUrl: "https://opengraph.githubassets.com/d67944a1c9faad652f44656c2080830d74592c4aefd05c8c3a55f85ad5bdabea/kubev2v/forklift"
discussionCount: 10
---

&nbsp;&nbsp;[](https://codecov.io/gh/kubev2v/forklift)

# Forklift
Migrates virtual machines at scale to Kubernetes KubeVirt.
Migrations are performed in a few simple steps, first by providing source and destination credentials,
then mapping the source and destination infrastructure and creating a choreographed plan, and finally,
executing the migration effort.

## Supported providers
- VMware (cold, warm, offload copy)
- oVirt (cold, warm)
- OpenStack (cold)
- Nutanix (cold)
- HyperV (cold)
- Kubevirt (cold, live)

## Features
- **Warm migration** using Change Block Tracking/Incremental Backup to reduce the downtime, supported in VMware and oVirt migrations.
- For VMware migrations, the Forklift uses [virt-v2v](https://libguestfs.org/virt-v2v.1.html) **guest conversions** which installs the virtio drivers and edits the guest to run on QEMU-KVM.
- Migrating to **remote clusters**, user can install the Forklift on one cluster and orchestrate other cluster to do the migration.
- Migrating VMs **between clusters** using the KubeVirt [Export API](https://kubevirt.io/user-guide/storage/export_api/).
- **Validations** of the Virtual Machines to let users know if migration plan has…
