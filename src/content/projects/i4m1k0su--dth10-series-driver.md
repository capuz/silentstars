---
repo: "i4M1k0SU/DTH10-series-driver"
name: "DTH10-series-driver"
description: "BUFFALO DTH10/DTH30 series user-mode driver"
originalDescription: "BUFFALO DTH10/DTH30 series user-mode driver"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/i4M1k0SU/DTH10-series-driver"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 8
forks: 0
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-10-31T21:12:22Z"
lastCommitAt: "2026-11-14T10:48:49Z"
lastReleaseAt: "2026-11-06T20:26:52Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 52
maintainers: ["i4M1k0SU", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c8e428f70a084ad0f660e8e186af55c8e7494570887a8627c19ae0acfdf30767/i4M1k0SU/DTH10-series-driver"
---

# DTH10/DTH30 series driver

BUFFALO DTH10/DTH30 series user-mode implementation

## Supported models

The USB VID is `0x0411` (BUFFALO) and is common across the series.

Some kits (such as LGDT3305) were implemented by analyzing the vendor driver, and the models they are installed in are unknown.

### DTH10 series

| Model | PID | Release date | Reception | Verified | Notes |
|-----------------|----------|---------|--------------|:--:|-------|
| DT-H10/U2       | `0x015F` | 2009-06 | Terrestrial  | ✅ | - |
| DT-H10/PCI      | `0x016B` | 2009-06 | Terrestrial  | -  | - |
| DT-H10/U7       | `0x017B` | 2009-10 | Terrestrial  | -  | - |
| DT-H33/U2       | `0x017C` | 2009-11 | Terrestrial  | -  | - |
| DT-H33/PCI      | `0x017D` | 2009-11 | Terrestrial  | -  | - |
| DT-F100/U2      | `0x0186` | 2009-12 | Terrestrial  | ✅ | No raw mode |
| DT-H55/U2W      | `0x0187` | 2010-04 | Terrestrial x2 | -  | - |
| DT-H70/U2       | `0x0199` | 2010-06 | Terrestrial, BS, CS | ✅ | - |
| DT-H70/PCIE     | `0x01BE` | 2010-10 | Terrestrial, BS, CS | -  | - |
| DT-F110/U2      | `0x01D2` | 2010-11 | Terrestrial  | -  | - |
| DT-H11/U2       | `0x01DA` | 2010-11 | Terrestrial  | ✅ | - |
| DT-F200/U2W…
