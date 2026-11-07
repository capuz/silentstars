---
repo: "vahmoh/Veda"
name: "Veda"
description: "The Agentic-Native Operating System"
readmeQualityOk: true
url: "https://github.com/vahmoh/Veda"
homepage: "https://www.vedaos.org"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["agentic-ai", "agentic-operating-system", "ai-agent", "ai-assistants", "ai-operating-system", "artificial-intelligence", "autonomous-agents", "conversational-ai", "desktop-environment", "desktop-os"]
stars: 103
forks: 16
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-03T04:01:30Z"
lastCommitAt: "2026-11-07T22:48:01Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 31
maintainers: ["vahmoh"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1402635154/b887beba-a5d6-4c83-95f6-5a4d402f9948"
---

# Veda

**The Agentic-Native Operating System**

An operating system written in Rust, with a voice agent built into the system.

[Screenshots](#screenshots) · [Quick start](#quick-start) · [Make an app agentic](#make-an-app-agentic) · [Architecture](#architecture) · [Documentation](#documentation)

Say *"Hey Veda, switch my wallpaper to the dunes"* and it is done. The agent
works in every application through the same code as your keyboard and
mouse, and asks you before anything that is hard to undo. Everything here
is Rust, from the UEFI bootloader and the microkernel to the window system
and the applications.

## Screenshots

## Quick start

Veda builds on an x86-64 Linux machine with KVM. Install
[Rust](https://rustup.rs) and the build tools:

```bash
sudo apt install qemu-system-x86 qemu-system-gui qemu-system-modules-opengl ovmf \
  build-essential bc curl rsync m4 flex bison meson ninja-build cmake nasm \
  libgmp-dev libmpfr-dev libmpc-dev python3 python3-mako python3-packaging python3-yaml
```

The driver VM also needs KVM's nested virtualization (`kvm_intel nested=1`).

Then build Veda and boot it:

```bash
cargo automation doctor      # check the tools
cargo automation…
