---
repo: "reindertpelsma/kayfabe"
name: "kayfabe"
description: "The GPU your VM believes in. A stock NVIDIA driver runs against fabricated hardware; real compute is forwarded to a host GPU. Hypervisor-agnostic, multi-tenant, unprivileged per-process isolates. Rust."
readmeQualityOk: true
url: "https://github.com/reindertpelsma/kayfabe"
language: "Rust"
languages: ["Rust"]
languagePcts: [71]
stars: 25
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-07-24T14:11:42Z"
lastCommitAt: "2026-10-26T18:06:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 43
maintainers: ["reindertpelsma"]
openGraphImageUrl: "https://opengraph.githubassets.com/e386d4b5b35741003054ae6a7a9e6b93dd92b5db07cc1201fff9a8ced2fee4b3/reindertpelsma/kayfabe"
---

# kayfabe

**Share an NVIDIA GPU with virtual machines that run the stock NVIDIA driver, while the host keeps using it.**

Kayfabe is a QEMU device that shows a guest an emulated NVIDIA GPU. The guest loads NVIDIA's real, unmodified driver (Windows or Linux);
kayfabe reads what that driver asks for and has the real host GPU do the work, from an **unprivileged** host process that talks to the host driver
as an ordinary client. Written in Rust.

**Status: research, 2026-10-21.** It runs real applications, but there is no installer, no stable interface, and no security audit yet.
Master is the current working version (relay fix `89fc8a222`, 2026-10-21); newer experiments, the Blackwell display work and further performance work live on branches.

## Why it is interesting

| | host keeps the GPU | safe for untrusted guests | guest driver | needs |
|---|---|---|---|---|
| VFIO passthrough | no, one VM owns it | yes | stock | any GPU |
| NVIDIA vGPU | no, VMs share it, the host does not | yes | vendor vGPU driver | data-centre GPU, licence |
| API forwarding ([nvkvm-pv](https://github.com/reindertpelsma/nvkvm-pv) / virtio-nvgpu) | yes | possible, but fragile for multi-tenant VMs | a…
