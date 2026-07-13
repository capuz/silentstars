---
repo: "Gemini2350/ptp-wallclock"
name: "ptp-wallclock"
description: "This is a simple Wallclock for Raspberry Pi with a LED Display"
readmeQualityOk: true
url: "https://github.com/Gemini2350/ptp-wallclock"
language: "C++"
languages: ["C++"]
languagePcts: [97]
stars: 92
forks: 10
openIssues: 5
closedIssues: 4
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-01-01T10:17:39Z"
lastCommitAt: "2026-07-13T06:38:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 64
undervaluedScore: 9
maintainers: ["Gemini2350", "geerlingguy"]
openGraphImageUrl: "https://opengraph.githubassets.com/aaf3328c2e5cf808c7b96dced477b07da4a1a05382057e7ceceb364d8621f1cf/Gemini2350/ptp-wallclock"
---

# ptp-wallclock

# ptp-wallclock

`ptp-wallclock` is a C++ application for Raspberry Pi that acts as a PTP
(IEEE 1588 Precision Time Protocol, PTPv2) client and displays the
synchronized wall-clock time on an attached LED matrix display.

The project is intended as a lightweight, hardware-based visualization of PTP
time synchronization, useful for experiments, demos, and educational purposes.
I've used it to demonstrate that PTP is really distributing the Time at my Speech at Chaos Computer Club,
[Excuse me, what precise time is It?](https://media.ccc.de/v/39c3-excuse-me-what-precise-time-is-it).

---

## Features

- Real PTPv2 (IEEE 1588) client with the end-to-end delay mechanism:
  Sync / Follow_Up are correlated with their local arrival time, Delay_Req /
  Delay_Resp measure the network path delay, and the displayed time is
  corrected accordingly (correction fields included, one-step and two-step
  masters supported)
- Best Master Clock Algorithm (BMCA): every master announcing in the domain
  is tracked, the best one is elected via the IEEE 1588 dataset comparison
  (priority 1, clock class, accuracy, variance, priority 2, identity — and
  steps removed for redundant paths…
