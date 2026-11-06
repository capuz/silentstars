---
repo: "kino516/HyperPower"
name: "HyperPower"
description: "Pengpai Charge Control HyperPower: a KernelSU / APatch module that closed-loop controls charging speed based on battery temperature (Rust engine + WebUI)"
originalDescription: "澎湃充控 HyperPower —— 按电池温度闭环控制充电速度的 KernelSU / APatch 模块（Rust 引擎 + WebUI）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/kino516/HyperPower"
language: "Rust"
languages: ["Rust"]
languagePcts: [75]
topics: ["apatch", "battery", "charging", "kernelsu", "rust", "thermal", "webui"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-20T14:07:14Z"
lastCommitAt: "2026-11-06T02:43:04Z"
lastReleaseAt: "2026-10-27T08:32:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 40
maintainers: ["kino516"]
openGraphImageUrl: "https://opengraph.githubassets.com/03be914cd6c2b5b92ea913a6fcb9d15ea5aa7f4f26a385e6b6b8c64f3aceb25e/kino516/HyperPower"
---

# Pengpai Charge Control HyperPower

A **KernelSU / APatch module** that closed-loop controls charging speed based on battery temperature, and can set a charging limit.

| Item | Value |
|---|---|
| Display name | **Pengpai Charge Control HyperPower** (since 2026-10-20; formerly 温控充 ThermoCharge) |
| Module id | `a_hyperpower` (the `a_` prefix **sorts it near the top** of the KernelSU module list); data directory **`/data/adb/hyperpower`** (a fresh project that does not inherit old `thermo_charge` configuration); when upgrading from the old id, **uninstall the old module first** |
| Form | Root-resident native daemon + WebUI (the APP is maintained in a separate repository) |
| Engine | Rust (stable), single binary |
| Supported baseline | **Android 12 (API 31) and above**, **arm64-v8a only** |
| Current version | **1.0.5** (adjusted temperature gating per the user's final decision: **when battery temperature < hardware protection temperature, charging is fully suppressed regardless of charge pump temperature; only handed over to the official mechanism when reaching or exceeding the hardware protection temperature**. The hardware protection temperature uses the value from the…
