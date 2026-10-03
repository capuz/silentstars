---
repo: "dckiller51/bodymiscale"
name: "bodymiscale"
description: "Custom_components Body Metrics for Xiaomi Miscale 1 and 2 (esphome or BLE monitor for Homeassistant)"
readmeQualityOk: true
url: "https://github.com/dckiller51/bodymiscale"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["xiaomi", "miscale", "esphome", "ble-monitor", "mitemp-bt", "custom-component", "home-assistant", "homeassistant", "hacs"]
stars: 344
forks: 48
openIssues: 20
closedIssues: 123
watchers: 8
contributors: 20
recentReleases: 0
createdAt: "2020-12-08T10:46:48Z"
lastCommitAt: "2026-10-03T09:22:04Z"
lastReleaseAt: "2021-09-21T07:25:22Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 93
undervaluedScore: 37
maintainers: ["dckiller51", "pre-commit-ci[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c6100b23854866019add1884f5e756ee7f31ec267a3b9abb81495dec7cbfe747/dckiller51/bodymiscale"
fundingLinks: ["GITHUB:https://github.com/dckiller51", "KO_FI:https://ko-fi.com/dckiller"]
discussionCount: 19
---

# Bodymiscale

## Track your body composition closely with Bodymiscale

With this Home Assistant integration, track your body composition closely using data from your weight sensor. You will get detailed information for accurate tracking.

**How it works**

BodyMiScale calculates advanced body composition metrics based on your scale's data (Weight and/or Impedance). Unlike simple calculators, it offers three distinct calculation engines tailored to your hardware and preferences:

- **Xiaomi Mode:** Faithful to the original 2017 algorithms for consistency with legacy apps (Zepp Life/Mi Fit).
- **Science Mode:** Uses international health standards like **Schofield (WHO)** for BMR and **Pace & Rathbun** for body water.
- **S400 Mode:** A clinical-grade dual-frequency engine (50/250 kHz) utilizing **Deurenberg** and **Janssen** models for precise compartmental analysis.

Here's a breakdown of the process:

1. **Data Input:** Bodymiscale relies on data provided by your configured weight sensor (Weight and optionally Impedance). This can be a `sensor` or an `input_number` entity.

2. **Smart Calculation Engine:** Depending on your configuration, Bodymiscale applies one of three…
