---
repo: "fenio/modern-fs-benchmark"
name: "modern-fs-benchmark"
description: "Continuous benchmarks for multi-device CoW filesystems (btrfs, ZFS, bcachefs): snapshots, aging, compression, redundancy layouts"
readmeQualityOk: true
url: "https://github.com/fenio/modern-fs-benchmark"
homepage: "http://bartosz.fenski.pl/modern-fs-benchmark/"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [57, 40]
topics: ["bcachefs", "benchmark", "btrfs", "copy-on-write", "ext4", "filesystem", "xfs", "zfs", "lvm", "raid"]
stars: 47
forks: 0
openIssues: 2
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-07-12T11:45:15Z"
lastCommitAt: "2026-09-20T08:45:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 83
undervaluedScore: 32
maintainers: ["fenio"]
openGraphImageUrl: "https://opengraph.githubassets.com/e23f724b0f60aea3930230a3dbb98b66a23592a277b859543da517218f028233/fenio/modern-fs-benchmark"
fundingLinks: ["GITHUB:https://github.com/fenio", "KO_FI:https://ko-fi.com/fenio"]
---

# modern-fs-benchmark

Continuous benchmarks for **multi-device, copy-on-write filesystems** — btrfs,
ZFS, bcachefs — measuring the things single-device ext4-style benchmarks
(Phoronix et al.) never touch: redundancy layouts, snapshot aging and scaling,
transparent compression, encryption (native vs LUKS), reflinks, fsync tail
latency, degraded operation and rebuild, corruption self-healing, and
near-full/ENOSPC behavior — with ext4/xfs over md/LVM as the classic-stack
baselines.

## Why

Classic filesystem benchmarks run fio on one device with default mkfs options.
That says nothing about what modern filesystems are actually deployed for.
This suite benchmarks the *machinery*:

| Phase | What it measures |
|---|---|
| host calibration | fio on the runner's own disk *before* any filesystem exists — a VM-noise anchor |
| seq / rand write, rand read | baseline throughput on the chosen redundancy layout |
| trivial-op latency under load | "how long until my prompt comes back": a 4k write+fsync every 200ms (shell history, editor swap), p99 and worst case — idle, then while a 1M streaming writer floods the filesystem; CoW commit storms live here |
| source-tree ops | create / cold `cp…
