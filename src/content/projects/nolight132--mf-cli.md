---
repo: "nolight132/mf-cli"
name: "mf-cli"
description: "Lightweight CLI to control Arturia Minifuse's otherwise hardware-only features"
readmeQualityOk: true
url: "https://github.com/nolight132/mf-cli"
language: "Rust"
languages: ["Rust", "Nix"]
languagePcts: [44, 29]
stars: 21
forks: 6
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 4
recentReleases: 2
createdAt: "2026-01-05T18:28:49Z"
lastCommitAt: "2026-10-26T18:06:46Z"
lastReleaseAt: "2026-10-26T17:45:57Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 76
undervaluedScore: 34
maintainers: ["nolight132", "yamplum", "andreanero"]
openGraphImageUrl: "https://opengraph.githubassets.com/e94f7262bd61b9aee2626202769dae7558a84ce8014d7c1a3167ed368066233c/nolight132/mf-cli"
---

# mf-cli

`mf-cli` is a lightweight Linux command-line utility and kernel module written in Rust and C for controlling hardware features of the Arturia MiniFuse 1/2/4 audio interface. It allows you to toggle hardware settings that are normally only accessible via the proprietary "MiniFuse Control Center" software on Windows or macOS.

By default, manipulating USB interfaces from userspace interrupts the active audio stream. `mf-cli` ships with a custom DKMS kernel module that perfectly integrates with the Linux kernel to send commands to the device **seamlessly**, without any audio dropouts!

## Key Features

- Phantom Power (+48V)
- Direct Mono (MiniFuse 1/2)
- Instrument Mode (INST), per input on the MiniFuse 4
- Seamless control without audio interruption (via DKMS kernel module)
- Non-Sudo Operation (both native and via fallback)
- Chain multiple commands at once

## ⚠️ Important Note on Secure Boot

To achieve seamless, interruption-free audio toggling, this tool utilizes a custom DKMS kernel module. If you have **Secure Boot enabled** in your BIOS, the Linux kernel will block this unsigned module from loading.

You will either need to disable Secure Boot or sign the DKMS…
