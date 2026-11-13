---
repo: "WeActStudio/WeActStudio.PowerMonitorV1"
name: "WeActStudio.PowerMonitorV1"
description: "PowerMonitorMiniV1 base INA226, 36V/10A(5mΩ±1%)"
readmeQualityOk: true
url: "https://github.com/WeActStudio/WeActStudio.PowerMonitorV1"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 38
forks: 5
openIssues: 5
closedIssues: 3
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2026-02-06T07:42:23Z"
lastCommitAt: "2026-11-13T05:41:19Z"
status: "thriving"
tags: []
healthScore: 62
undervaluedScore: 17
maintainers: ["YXZhu", "WeActStudio"]
openGraphImageUrl: "https://opengraph.githubassets.com/5470a4cdb4ab3017771735ec524465051031b30359a19b28b3cf8b194529ef67/WeActStudio/WeActStudio.PowerMonitorV1"
---

* [中文版本](https://github.com/WeActStudio/WeActStudio.PowerMonitorV1/blob/HEAD/README_zh.md)

# WeActStudio.PowerMonitorMiniV1

A USB PD/QC trigger + power monitor with a screen. Plug in a charger and it negotiates the voltage for you, then measures voltage, current, power and accumulated energy and shows them on the display. The same data is available over a serial port.

Input and output are the same rail, with a 5 mΩ shunt in between: connect the supply to the input (USB-C or IN), the load to the output (OUT).

| Item | Value |
| --- | --- |
| Input | USB-C (PD 2.0/3.x incl. EPR AVS, QC 2.0) or IN external input (only one at a time), 36 V max (PD requests go up to 28 V) |
| Output | OUT, 5 mΩ shunt |
| Display | 1 mV / 0.1 mA / 1 mW resolution, 50 ms acquisition |
| Energy | mAh / mWh accumulation, resettable, not saved on power loss |
| Communication | USB CDC virtual COM port + 3.3 V TTL UART (9600–460800 bps) |
| Screen | Adjustable brightness, optional 10 s auto screen-off |

## Documents

- [User manual (English)](https://github.com/WeActStudio/WeActStudio.PowerMonitorV1/blob/HEAD/Doc/PowerMonitorMiniV1-User-Manual-EN.md): every screen, all setup items, PC software and…
