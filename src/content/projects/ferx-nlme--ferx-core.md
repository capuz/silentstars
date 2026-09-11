---
repo: "FeRx-NLME/ferx-core"
name: "ferx-core"
description: "Open-source nonlinear mixed-effects (NLME) modeling engine for population PK/PD and pharmacometrics, with FOCEI, SAEM, analytical PK, and ODE models."
readmeQualityOk: true
url: "https://github.com/FeRx-NLME/ferx-core"
homepage: "https://ferx-nlme.github.io"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["nlme", "nonlinear-mixed-effects", "nonmem", "ode-solver", "pharmacokinetics", "pharmacometrics", "pkpd", "population-pharmacokinetics", "population-pk", "rust"]
stars: 12
forks: 8
openIssues: 168
closedIssues: 434
watchers: 3
contributors: 8
recentReleases: 3
createdAt: "2026-05-11T23:21:14Z"
lastCommitAt: "2026-09-11T08:16:00Z"
lastReleaseAt: "2026-09-02T16:48:20Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 63
maintainers: ["roninsightrx", "TeunP", "hiddevandebeek"]
openGraphImageUrl: "https://opengraph.githubassets.com/4204c2c8f47a18e94a7018845a2e9024b33e852553c5b9661a8e845477b6bcde/FeRx-NLME/ferx-core"
discussionCount: 1
---

# ferx-core

[Website](https://ferx-nlme.github.io/) · [Documentation](https://ferx-nlme.github.io/ferx-core/) · [R package](https://github.com/FeRx-NLME/ferx-r) · [Examples](https://ferx-nlme.github.io/ferx-core/examples/)

ferx-core is an open-source, high-performance nonlinear mixed-effects (NLME)
modeling engine for population pharmacokinetic and pharmacodynamic (PopPK/PD)
analysis. Written in Rust, it implements FOCE/FOCEI, SAEM, importance sampling,
analytical PK solutions, and ODE models for pharmacometric workflows.

Additional features:
- PK-PD and multi-analyte modeling
- BLQ likelihood modeling
- Importance Sampling & SIR
- Deep Compartmental Models & Neural ODEs
- Stochastic differential equations
- Simulation with uncertainty
- Various optimizers
- ... and more

## Quick Start

```bash
# Build (the repo is a cargo workspace; the `ferx` binary lives in `ferx-cli`)
cargo build --release --workspace

# Fit a model
cargo run --release -p ferx-cli -- examples/warfarin.ferx --data data/warfarin.csv

# Fit with simulated data (uses [simulation] block)
cargo run --release -p ferx-cli -- examples/warfarin.ferx --simulate
```

Output files: `{model}-fit.yaml` (parameter…
