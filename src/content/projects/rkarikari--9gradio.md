---
repo: "rkarikari/9GRadio"
name: "9GRadio"
description: "9GRadio is an Android SDR app for RTL-SDR USB dongles.  It's  for radio-spectrum monitoring/analysis and decoding of analog/HAM Radio/aviation/marine radio traffic."
readmeQualityOk: true
url: "https://github.com/rkarikari/9GRadio"
language: "Kotlin"
languages: ["Kotlin", "C++", "C"]
languagePcts: [51, 27, 21]
stars: 45
forks: 6
openIssues: 0
closedIssues: 6
watchers: 2
contributors: 1
recentReleases: 10
createdAt: "2026-07-05T08:32:43Z"
lastCommitAt: "2026-09-20T08:46:19Z"
lastReleaseAt: "2026-09-16T22:26:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 38
maintainers: ["rkarikari"]
openGraphImageUrl: "https://opengraph.githubassets.com/611a3289ac689f5b354982860fc3a68dc7d8606237465f519d0f02b2ee16e11d/rkarikari/9GRadio"
---

# 9GRadio — Full-Featured Android SDR App

A complete, production-quality Android SDR application written in Kotlin, purpose-built  
for the **RTL-SDR V4** dongle family (RTL2832U + R828D or R828S, 28.8 MHz TCXO) — including  
both the original **V4** (R828D) and the **V4L / "V4 Lite"** (R828S).

**Package:** `com.radiosport.ninegradio`  
**Version:** 1.72

---

 | 

---

## Input & Output Modes

At its core, 9GRadio pulls in an IQ signal from one of three **input** sources, then does one or
more of four things with it as **output** — these can be mixed and combined (e.g. listen on the
internal decoder, feed an external decoder, and record to an IQ file, all from the same live USB
source, at the same time).

**Input — where the IQ signal comes from** (set via the **Source** dropdown in **Device Info**):

| # | Mode | Details |
|---|---|---|
| 1 | **USB** | A local RTL-SDR V4/V4L or generic RTL-compatible dongle connected directly via a USB OTG cable |
| 2 | **TCP** | A network IQ stream speaking the `rtl_tcp` wire protocol — either an on-device **Android RTL driver app** (reached over loopback) or a remote **`rtl_tcp` server** elsewhere on the network (see [rtl_tcp Server…
