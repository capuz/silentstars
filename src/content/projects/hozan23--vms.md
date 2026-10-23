---
repo: "hozan23/vms"
name: "vms"
description: "A simple tool that uses QEMU to create, run, and manage headless virtual machines."
readmeQualityOk: true
url: "https://github.com/hozan23/vms"
language: "Shell"
languages: ["Shell"]
languagePcts: [99]
topics: ["qemu", "qemu-kvm", "vms", "virtual-machine", "ai-sandbox", "sandboxing", "vibecoding"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 5
createdAt: "2024-07-08T01:43:10Z"
lastCommitAt: "2026-10-23T09:32:48Z"
lastReleaseAt: "2026-10-10T14:21:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 56
maintainers: ["hozan23"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3af3f9573dc0b008a12420eb5572d1a35436f26a0af06999577bc4cb93c7cd8/hozan23/vms"
---

# vms - simple headless VM manager

vms is a small bash script to manage multiple headless QEMU VMs.
Each VM has its own config file, which holds the QEMU options. A VM
can be locked as a read-only base for disposable sandboxes.

## Requirements

`qemu-img` and `qemu-system-x86_64`, or the `qemu-system-*` matching
the VM's `arch`.

Optional: `socat`, to use `vms monitor`, `vms console` and a graceful
`vms stop`.

## Installation

Enter the following command:

```sh
make PREFIX=~/.local install
```

## Usage

The first invocation creates `~/vms` to hold VM images and configs.

Create a new VM image:

```sh
vms create arch 50G
```

Extra arguments are passed straight to qemu-img, e.g. to use
qcow2 with nocow:

```sh
vms create arch 50G -f qcow2 -o nocow=on
```

Review or tweak the VM config in `$EDITOR`, then boot from an ISO:

```sh
vms edit arch
vms boot arch ~/downloads/arch.iso
```

Once installed, the VM is started and stopped with:

```sh
vms start arch
vms stop arch
vms status arch
```

Extra arguments go to qemu, e.g. discard disk writes on exit:

```sh
vms start arch -snapshot
```

`boot` passes extra arguments to qemu the same way.

List all VMs, or just their port…
