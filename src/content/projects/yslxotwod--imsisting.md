---
repo: "yslxotwod/IMSIsting"
name: "IMSIsting"
description: "GTK4 cellular security toolkit for Linux. 59 modules covering 2G GSM, 3G UMTS, 4G LTE and 5G NR - air interface, core network, SIM and identity, RF tracking, and the attack and analysis work around them, in one place. Some modules need specific hardware. THIS IS WIP"
readmeQualityOk: true
url: "https://github.com/yslxotwod/IMSIsting"
homepage: "http://baseband.surge.sh"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [46, 42]
topics: ["5g", "5g-security", "baseband", "cellular", "cellular-security", "gsm", "gsm-security", "gtk4", "imsi-catcher", "lte"]
stars: 16
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 5
createdAt: "2026-10-13T14:15:28Z"
lastCommitAt: "2026-10-25T02:47:53Z"
lastReleaseAt: "2026-10-24T23:05:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 51
maintainers: ["yslxotwod"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1417208933/188315eb-38ec-4616-8e5a-5a5adc978d9a"
discussionCount: 1
---

# IMSIsting

A GTK4 cellular security toolkit for Linux, with a full CLI behind it. Shell
modules covering 2G/GSM, 3G/UMTS, 4G/LTE and 5G/NR, plus passive analysis over
captures and per-generation CVE kits.

Every module is a standalone script. The GUI is a view over them, not a
container — nothing is locked behind the interface.

> **Early development, and honest about it.** No module in this tree has been
> run against a real radio. There is no SDR on the machine it was built on, so
> every over-the-air path is written and reviewed but *not* tested. The section
> [What actually works](#what-actually-works) says exactly which is which, and
> it is worth reading before you file a bug.

---

## Why this exists

Cellular tooling is split by layer and by generation. `gr-gsm` is 2G. `srsRAN`
is 4G/5G. `Osmocom` is the stack underneath. Wireshark dissects what you
captured but will not capture it, and none of them share a target view.

This tree is wide on purpose: one desk, one launcher, one place where a cell
survey, a NAS decode, a Diameter message and a cipher audit all land in the
same TSV.

The other thing it does differently: **most tools tell you they worked.** This
one is…
