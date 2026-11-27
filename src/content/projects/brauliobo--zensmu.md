---
repo: "brauliobo/zensmu"
name: "zensmu"
description: "Safety-first Rust CLI, live TUI, and unprivileged GUI for AMD Ryzen SMU control and telemetry on Linux"
readmeQualityOk: true
url: "https://github.com/brauliobo/zensmu"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["amd", "curve-optimizer", "gui", "linux", "overclocking", "pbo", "phoronix-test-suite", "rust", "ryzen", "smu"]
stars: 17
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-11-26T22:13:46Z"
lastCommitAt: "2026-11-27T16:27:26Z"
lastReleaseAt: "2026-11-26T23:59:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 26
maintainers: ["brauliobo"]
openGraphImageUrl: "https://opengraph.githubassets.com/afda7d0545c7407e04136422a54a56f41e556dfe6660c0dfa00de59a37f20616/brauliobo/zensmu"
---

# zensmu

**Safety-first Rust CLI, live TUI (`zensmu top`), and unprivileged desktop GUI (`zensmu-gui`) for AMD Ryzen SMU control and telemetry on Linux.**

Uses the standard [`ryzen_smu`](https://github.com/amkillam/ryzen_smu) DKMS kernel module (`/sys/kernel/ryzen_smu_drv`) — no custom kernel required.

### Live TUI (`zensmu top`)

### Desktop GUI (`zensmu-gui`)

---

## Highlights

- **CLI, TUI, and GUI in one workspace:** scriptable `zensmu` (with `--json`), `btop`-style `zensmu top`, and unprivileged `zensmu-gui` (elevates narrowly via `pkexec` only on demand).
- **Hardware-safe SMU transport:** defeats `ryzen_smu 0.1.7`'s `smu.c:213` false-OK bug via read-only SMN RSP + read-after-write verification, serializes mailbox calls with `flock`, cross-checks `CPUID`, discovers harvested cores automatically, and guards writes with `--dry-run`, `--confirm-within`, snapshots/rollback, and a boot-loop crash guard.
- **Full Desktop & Mobile APU tuning:** Curve Optimizer (per-core, all-core, iGPU), Zen 5 15-point Curve Shaper, PBO (`PPT`, `TDC`, `EDC`, `Tctl`, `Scalar`, `Fmax`), APU DPTC limits, and `systemd` boot/resume persistence.
