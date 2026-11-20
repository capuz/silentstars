---
repo: "tmiland/kernel-installer"
name: "kernel-installer"
description: "Build and install optimized Linux kernels on Debian, Ubuntu, Fedora and RHEL: use-case profiles, CachyOS BORE, Clang LTO, CPU tuning, named kernels, and QEMU boot verification."
readmeQualityOk: true
url: "https://github.com/tmiland/kernel-installer"
homepage: "https://tmiland.github.io/kernel-installer/"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["debian", "debian-linux", "kernel", "kernel-install", "kernel-installation", "boot-testing", "bore", "cachyos", "clang", "deb"]
stars: 28
forks: 9
openIssues: 0
closedIssues: 36
watchers: 2
contributors: 3
recentReleases: 2
createdAt: "2022-05-17T19:49:27Z"
lastCommitAt: "2026-11-20T11:58:06Z"
lastReleaseAt: "2026-10-26T13:34:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 71
maintainers: ["tmiland-lab[bot]", "davmonk", "tmiland"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/493393302/8fbc1aa3-e7c3-44db-abe5-31387fdbf564"
fundingLinks: ["GITHUB:https://github.com/tmiland"]
discussionCount: 5
---

# kernel-installer
Automatic install script for [The Linux kernel](https://www.kernel.org)

Inspired by [LinuxKernelBuild](https://github.com/Angristan/LinuxKernelBuild)

### Build and install optimized Linux kernels on Debian, Ubuntu, Fedora and RHEL

Use-case profiles, CachyOS source + BORE, Clang LTO, CPU tuning, named kernels, and QEMU boot verification.

### Highlights

- **Use-case profiles** — `--profile desktop|workstation|gaming|server|laptop` applies HZ/preempt/MGLRU/BBR/cgroup settings for the workload.
- **CachyOS source + BORE** — `--source cachyos --sched bore` builds the pinned CachyOS 7.3.4-1 source with `CONFIG_CACHY` and `CONFIG_SCHED_BORE`.
- **CPU tuning** — `--cpu generic|native|zen4|x86-64-v3|x86-64-v4`. `native` needs compiler support; with CachyOS’s Rust config it also needs a rustc with APXF support, otherwise use `x86-64-v3`/`zen4`.
- **Clang LTO** — `--lto thin|full` with `clang`/`lld`.
- **Named kernels** — automatic localversion (`7.3.4-cachyos-workstation-bore`) and `--kernel-tag`.
- **Boot verification** — QEMU boot smoke test in CI for every distro target.
