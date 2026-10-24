---
repo: "boxlite-ai/vmmlite"
name: "vmmlite"
description: "The smallest VMM that boots Linux: 190 lines of C on KVM. For learning only."
readmeQualityOk: true
url: "https://github.com/boxlite-ai/vmmlite"
language: "C"
languages: ["C"]
languagePcts: [100]
topics: ["kvm", "linux", "virtualization", "vmm", "x86-64"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-10-22T09:17:06Z"
lastCommitAt: "2026-10-24T08:21:18Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 26
maintainers: ["DorianZheng"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e1250f70b617c0f6bf86dd5956e3f2fce9d2be5706f66c4053c683b27844987/boxlite-ai/vmmlite"
---

# vmmlite

> [!WARNING]
> **For learning only. Do not use vmmlite in production.** It skips what a production VMM needs: it
> does not validate its input files or guest addresses, runs without a sandbox, and emulates only a
> serial port, a virtio console and a reset. To run code in a micro-VM, use a production VMM such as
> Firecracker or Cloud Hypervisor, or a sandbox such as [BoxLite](https://github.com/boxlite-ai/boxlite).

## TL;DR

266 lines of C, not counting comments, that boot a stock x86_64 Linux kernel on KVM to a PID 1 that
prints one line through a virtio console and reboots.

## Run it

You need x86_64 Linux with KVM, access to `/dev/kvm` (on Ubuntu, join the `kvm` group), and gcc
with static glibc and cpio (on Ubuntu, `sudo apt install gcc libc6-dev cpio`).

```sh
gcc -O2 -Wall -Wextra -pthread -o vmmlite vmmlite.c
gcc -O2 -Wall -Wextra -static -o init init.c
echo init | cpio -o -H newc > initramfs.cpio
sudo install -m 644 /boot/vmlinuz-$(uname -r) bzImage
./vmmlite bzImage initramfs.cpio
```

Trimmed output:

```text
[    0.000000] Command line: earlycon=uart8250,io,0x3f8 console=hvc0 panic=-1 virtio_mmio.device=4K@0xd0000000:5
[    0.047285] found SMP MP-table at…
