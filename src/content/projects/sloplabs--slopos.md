---
repo: "SlopLabs/slopos"
name: "slopos"
description: "An operating system fully designed and written by AI agents."
readmeQualityOk: true
url: "https://github.com/SlopLabs/slopos"
homepage: "https://slopos.sloplabs.net/"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["operating-system", "vibe-coded", "kernel", "rust"]
stars: 26
forks: 1
openIssues: 1
closedIssues: 16
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2025-10-10T18:20:19Z"
lastCommitAt: "2026-10-07T09:21:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 60
maintainers: ["nil0ft", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/242ce1eb126054294ca2446f8282e4a42a1213d1d830ad0c8a385ae059dc9b48/SlopLabs/slopos"
---

Armed with Rust, mass AI token consumption, and zero fear of <code>unsafe</code>,<br/>
  they built an operating system that boots—when the Wheel of Fate allows it.</i>

  Lose → reboot and try again.<br/>
  The house always wins. Eventually.</b>

---

## This Is Not QEMU

That is a real laptop. The desktop — compositor, terminal, text editor, file
manager, system monitor, image viewer — is drawn by our own Intel Xe display driver.
The keyboard and I²C-HID touchpad were discovered by walking the firmware's
actual AML tables with our own ACPI interpreter, then driven over our own
I²C and GPIO drivers. The slop has escaped the sandbox.

---

## Get It Running

> **You need:** QEMU, xorriso, e2fsprogs, [`just`](https://github.com/casey/just) — plus Go ≥ 1.22 if you want `just test`, and `openssl` for `just test-host`'s TLS interop tests

```bash
# macOS
brew install qemu xorriso e2fsprogs just go

# Debian/Ubuntu
sudo apt install qemu-system-x86 xorriso e2fsprogs golang
cargo install just  # or: https://github.com/casey/just#installation

# Arch (btw)
sudo pacman -S qemu-full xorriso e2fsprogs just go

# Then:
just setup          # installs the pinned rust nightly + the forked…
