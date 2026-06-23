---
repo: "w1ne/labwired-core"
name: "labwired-core"
description: "Deterministic firmware simulator for ARM Cortex-M and RISC-V — with hardware-validated parity"
url: "https://github.com/w1ne/labwired-core"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["ai-agents", "arm", "cortex-m", "deterministic", "embedded", "embedded-systems", "emulator", "esp32", "firmware", "gdb"]
stars: 7
forks: 3
openIssues: 6
closedIssues: 6
watchers: 0
contributors: 3
recentReleases: 8
createdAt: "2026-02-10T12:30:44Z"
lastCommitAt: "2026-06-23T23:28:23Z"
lastReleaseAt: "2026-06-22T11:21:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 60
maintainers: ["w1ne"]
openGraphImageUrl: "https://opengraph.githubassets.com/74f2e8098a0ee1c7c2d08e350a8a4de6cb1718f51416f68099a6a4b6ec9c5272/w1ne/labwired-core"
---

# LabWired Core

Deterministic firmware simulator for ARM Cortex-M, RISC-V, and Xtensa (ESP32 / ESP32-S3) — the same ELF runs on hardware and in the simulator.

## Why this exists

Most firmware simulators let you boot a binary and stop there. LabWired goes further:

- **Hardware-validated reset + UART parity.** A real NUCLEO-H563ZI board is captured via OpenOCD+GDB and diffed against the simulator running the same firmware ELF. The committed report — [`determinism_report_h563.json`](examples/nucleo-h563zi/golden-reference/determinism_report_h563.json) — documents the verified scope (post-reset architectural alignment + UART byte parity over the smoke run) and explicitly notes what isn't verified (step-by-step PC sequence past reset — OpenOCD's sampling can't resolve every executed instruction on real silicon). For deeper byte-parity evidence under continuous execution, see the NUCLEO-L476RG survival traces (`firmware-l476-demo/`).
- **Deterministic by construction.** Same firmware → same trace, byte-for-byte, across runs and machines. Trace SHA-256 hashes are CI-gated.
- **Production-grade debug.** GDB Remote Serial Protocol stub *and* a native VS Code Debug Adapter Protocol…
