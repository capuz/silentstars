---
repo: "0Bu/rpi-k3s-cluster"
name: "rpi-k3s-cluster"
description: "GitOps-driven dual-stack k3s cluster and automated homelab setup for Raspberry Pi"
readmeQualityOk: true
url: "https://github.com/0Bu/rpi-k3s-cluster"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["k3s", "k8s", "raspberry-pi", "adguard", "argocd", "grafana", "home-assistant", "homebridge", "metallb", "mosquitto"]
stars: 7
forks: 0
openIssues: 1
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2021-05-05T10:56:51Z"
lastCommitAt: "2026-11-02T17:57:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 66
maintainers: ["0Bu", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/552a8d119a340006cbb340701d64b6443cf3d9033f6a88950ba770d8fc002ccf/0Bu/rpi-k3s-cluster"
---

# Installing [k3s](https://k3s.io) on [Raspberry Pi OS](https://www.raspberrypi.com/software/operating-systems/)

### Enable cgroups
- append `cgroup_enable=cpuset cgroup_memory=1 cgroup_enable=memory` to `/boot/firmware/cmdline.txt`
- *optional*: append `arm_64bit=1` to `/boot/config.txt` under `[all]` on 32-bit Raspberry Pi OS ([arm_64bit](https://www.raspberrypi.com/documentation/computers/config_txt.html#arm_64bit))

## [NFS](https://www.digitalocean.com/community/tutorials/how-to-set-up-an-nfs-mount-on-ubuntu-20-04-de)
#### Client
```
sudo apt update
sudo apt install nfs-common
```
#### Server
```
sudo apt update
sudo apt install nfs-kernel-server
sudo mkdir /nfs
sudo chown -R nobody:nogroup /nfs
```
#### NFS export config
```
sudo vim /etc/exports
/nfs 192.168.1.0/24(rw,async,no_subtree_check,no_root_squash)
```
> `async` instead of `sync`: required due to ~370 ms fsync latency of the DRAM-less NVMe (otherwise initdb takes >15 min). Data-loss window ~5–30 s on power failure — covered by the hourly `pg_dump` CronJob.
```
sudo systemctl restart nfs-kernel-server
```

#### NFS client mount
```
sudo mkdir /mnt/nfs
sudo mount <HOST_IP>:/nfs /mnt/nfs
```

## Dual stack…
