---
repo: "petersulyok/smfc"
name: "smfc"
description: "Super Micro Fan Control"
readmeQualityOk: true
url: "https://github.com/petersulyok/smfc"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["supermicro", "ipmi", "fancontroller", "systemd-service", "linux"]
stars: 403
forks: 37
openIssues: 0
closedIssues: 61
watchers: 11
contributors: 14
recentReleases: 0
createdAt: "2021-09-16T22:58:16Z"
lastCommitAt: "2026-09-06T08:03:17Z"
lastReleaseAt: "2023-02-15T08:17:25Z"
status: "thriving"
tags: ["solo_builder", "community_hub"]
healthScore: 99
undervaluedScore: 37
maintainers: ["petersulyok", "akalagov", "chrisallen"]
openGraphImageUrl: "https://opengraph.githubassets.com/f7ee257a70c88c188e7599a605b374c12a281a3aa124e2e293f990b78dce4c91/petersulyok/smfc"
discussionCount: 43
---

# smfc
](https://github.com/petersulyok/smfc/actions/workflows/test.yml) [
](https://app.codecov.io/gh/petersulyok/smfc) [
](https://github.com/petersulyok/smfc/issues) [](https://pypi.org/project/smfc)

Supermicro fan control for Linux (home) servers.

## TL;DR

This is a `systemd service` running on Linux that can control fans with the help of IPMI on Supermicro X10-X13/H10-H14, some X9, and X14 (experimental) motherboards.

### 1. Prerequisites
 - a Supermicro motherboard with IPMI 2.0 (ASPEED AST2400/2500/2600 chip)
 - Python 3.10-3.14
 - a Linux distribution with:
   - `systemd` and `bash`
   - `coretemp` kernel module for Intel CPUs or `k10temp` kernel module for AMD CPUs
   - `drivetemp` kernel module (kernel version 5.6+ required) for SATA HDDs/SSDs
 - `ipmitool`
 - optional: `smartmontools` for SAS/SCSI disks and *standby guard* feature
 - optional: `nvidia-smi` for Nvidia GPUs
 - optional: `rocm-smi` for AMD GPUs
 - optional: `npu-smi` for Ascend NPUs

### 2. Installation and configuration
 1. Set up the IPMI threshold values for your fans (see [chapter 6.](https://github.com/petersulyok/smfc/blob/main/README.md#6-ipmi-fan-control-and-sensor-thresholds) for more details)…
