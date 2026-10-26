---
repo: "dckiller51/bodymiscale"
name: "bodymiscale"
description: "Home Assistant integration that calculates body composition (body fat, muscle, water, BMR…) from any weight and impedance sensor. Supports Xiaomi Mi Scale 2 and S400 dual-frequency, with Zepp Life, Xiaomi Home and scientific formulas."
readmeQualityOk: true
url: "https://github.com/dckiller51/bodymiscale"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["xiaomi", "miscale", "esphome", "ble-monitor", "custom-component", "home-assistant", "homeassistant", "hacs", "bioimpedance", "body-composition"]
stars: 347
forks: 50
openIssues: 7
closedIssues: 140
watchers: 7
contributors: 21
recentReleases: 0
createdAt: "2020-12-08T10:46:48Z"
lastCommitAt: "2026-10-26T09:18:42Z"
lastReleaseAt: "2021-09-21T07:25:22Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 96
undervaluedScore: 38
maintainers: ["dckiller51", "pre-commit-ci[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec03b5b4f6e177c2b11e6f354528123c7c659b60fb444b724dbd2677031ceddc/dckiller51/bodymiscale"
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
