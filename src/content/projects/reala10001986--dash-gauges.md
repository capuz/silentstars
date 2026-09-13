---
repo: "realA10001986/Dash-Gauges"
name: "Dash-Gauges"
description: "Building instructions and firmware for the Dash Gauges (\"Plutonium gauges\") as known from the Delorean Time Machine"
readmeQualityOk: true
url: "https://github.com/realA10001986/Dash-Gauges"
homepage: "https://circuitsetup.us/product/delorean-time-machine-dash-gauge-control-board/"
language: "C"
languages: ["C", "C++"]
languagePcts: [59, 40]
topics: ["bttf", "delorean", "esp32", "gauges", "plutonium", "deloreantimemachine", "dtm", "dashgauges", "mcfly", "time-machine"]
stars: 7
forks: 3
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 1
recentReleases: 3
createdAt: "2023-10-03T05:41:17Z"
lastCommitAt: "2026-09-13T08:29:54Z"
lastReleaseAt: "2026-08-25T19:02:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 92
maintainers: ["realA10001986"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/699675862/1b34fbc4-7263-4c38-a374-41e5b98ad816"
discussionCount: 1
---

# Dash Gauges (Delorean Time Machine)

This [repository](https://dg.out-a-ti.me) holds 
- [instructions](https://github.com/realA10001986/Dash-Gauges/blob/HEAD/Hardware.md) for building a Dash Gauge panel, as seen in the Delorean Time Machine,
- and a suitable firmware.

This panel is meant as an add-on for the CircuitSetup [Time Circuits Display](https://circuitsetup.us/product/complete-time-circuits-display-kit/) as it relies on the TCD's keypad to control many of its functions.

[<img src="img/mydg1.jpg">](https://github.com/realA10001986/Dash-Gauges/blob/HEAD/img/mydg1_l.jpg)
[<img src="img/mydg2.jpg">](https://github.com/realA10001986/Dash-Gauges/blob/HEAD/img/mydg2_l.jpg)

| [](https://youtu.be/R2M2wp6kowQ) |
|:--:|
| Click to watch the video |

For information on the hardware, please see [here](https://github.com/realA10001986/Dash-Gauges/blob/HEAD/Hardware.md).

Firmware features include
- support for analog gauges (with software-controlled arbitrary pointer position) and digital gauges (Empty/Full, without arbitrary pointer position)
- selectable "full" percentages per analog gauge (besides for fun, useful for adjusting inaccurate readings)
- selectable threshold…
