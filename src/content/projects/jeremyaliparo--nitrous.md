---
repo: "jeremyaliparo/nitrous"
name: "nitrous"
description: "Pure, zero-bloat hardware control for Acer Nitro laptops—the lightweight NitroSense alternative."
readmeQualityOk: true
url: "https://github.com/jeremyaliparo/nitrous"
homepage: "https://jeremyaliparo.github.io/nitrous/"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["acer", "acer-nitro", "nitro", "nitrosense", "nitrous", "windows", "fan-control", "overclock", "overclocking", "power-control"]
stars: 25
forks: 3
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 9
createdAt: "2026-08-12T02:21:11Z"
lastCommitAt: "2026-11-14T10:48:34Z"
lastReleaseAt: "2026-08-27T15:44:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 53
maintainers: ["jcaliparo", "jeremyaliparo"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1331529737/a998c92a-af2b-4982-bd53-3988f3975aad"
---

### Pure hardware control for Acer Nitro laptops.
*No OEM service stack. No telemetry daemon. Just the firmware.*

[**Features**](#key-features) • [**Quick Start**](#quick-start) • [**Compatibility**](#compatibility) • [**Safety & Design**](#safety--non-destructive-design) • [**Troubleshooting**](#troubleshooting) • [**Build**](#building-from-source)

---

## Why Nitrous?

OEM control centers install heavy background service stacks, telemetry daemons, and wake your discrete GPU just to read a temperature sensor. **Nitrous** replaces all of it with a single portable executable:

- **Zero Idle dGPU Wake:** GPU telemetry is only polled while the GPU tab is actively open, and sleeping (`D3`) GPUs are checked via free Windows PnP state queries so battery life is never tanked.
- **Reversible Changes:** CPU power limits, processor boost mode, and disabled Acer services are backed up before they are touched and restored with one click.
- **Portable & Lightweight:** Ships as a single framework-dependent `.exe` with silent tray boot, configurable global hotkeys, and SHA-256 verified updates.

---

## Key Features

| Subsystem | Capabilities |
| :--- | :--- |
| **Cooling** | • **Granular Fan…
