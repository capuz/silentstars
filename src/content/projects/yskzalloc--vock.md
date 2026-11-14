---
repo: "yskzalloc/vock"
name: "vock"
description: "A lightweight kernel coverage runner that wraps any command powered by LD_PRELOAD for fork/pthread interception using KCOV & HW Trace Buffer."
readmeQualityOk: true
url: "https://github.com/yskzalloc/vock"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["coverage", "kcov", "kernel", "linux"]
stars: 74
forks: 4
openIssues: 4
closedIssues: 1
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2025-09-22T14:37:29Z"
lastCommitAt: "2026-11-14T22:01:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 24
maintainers: ["yskzalloc"]
openGraphImageUrl: "https://opengraph.githubassets.com/37e772de470921614e00143bd9667412bdc456e7e094e75d51c6eaa4e26ee0d9/yskzalloc/vock"
---

# vock

## Hardware mode demo on generic Debian Kernel

## KCOV mode demo on [virtme-ng](https://github.com/arighi/virtme-ng) with KCOV enabled upstream Kernel

Map any userspace program to the exact kernel code it exercises.

## Presentation

1. [Linux security summit EU 26](https://lsseu2026.sched.com/event/2QmUR/vock-mapping-kernel-attack-surface-with-zero-configuration-coverage-yunseong-kim-ericsson-software-technology) [slide](https://hosted-files.sched.co/lsseu2026/de/lss_eu26_vock-v2.pdf?_gl=1*rr6qs5*_gcl_au*MTk1NDg0MTk3LjE3ODc3NjczMTIuMTc1OTM5MTE1Mi4xNzg3NzY5OTY1LjE3ODc3Njk5ODYuMTk1Mzg1MjE3OC4xNzg3NzY5OTY1LjE3ODc3Njk5ODY.*FPAU*MTk1NDg0MTk3LjE3ODc3NjczMTI.)
3. [Mini-DebConf UK, Cambridge 26](https://wiki.debian.org/DebianEvents/gb/2026/MiniDebConfCambridge/Kim1?pow_referer=) [slide](https://github.com/user-attachments/files/34545796/Mini-debconf-26-Cambridge-UK-vock.pdf)
```bash
sudo ./vock.bin --vmlinux vmlinux /bin/ip addr show
# → kerncov.log + coverage.html
```

vock is written in Rust, a full port of the original C/Python, with no C
remaining and `libc` as the only crate dependency. `make` produces `./vock.bin`
and the `mode/kcov.so` LD_PRELOAD coverage shim.…
