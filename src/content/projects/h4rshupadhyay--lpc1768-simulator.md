---
repo: "h4rshupadhyay/LPC1768_simulator"
name: "LPC1768_simulator"
description: "Firmware-driven LPC1768 virtual lab with manual wiring, real-time timers, LCD, keypad, ADC, and PWM."
readmeQualityOk: true
url: "https://github.com/h4rshupadhyay/LPC1768_simulator"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [60, 35]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-10-28T21:02:44Z"
lastCommitAt: "2026-10-29T13:53:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 16
maintainers: ["h4rshupadhyay"]
openGraphImageUrl: "https://opengraph.githubassets.com/51bf89933cf8cdef3eaebe1c44ad49abc7cdb2a3109e0a154806dd0c2706e197/h4rshupadhyay/LPC1768_simulator"
---

# LPC1768 Virtual Embedded Systems Lab

A local simulator of the ALS-SDA-ARMCTXM3-01 board for Labs 6–11. Run real
Cortex-M3 firmware with Unicorn, connect ribbon cables and jumpers, and experiment
with LEDs, switches, LCD, keypad, seven-segment displays, ADC and PWM.

## Screenshots

| Interactive board | C editor |
| --- | --- |
|  |  |

## Build and run

Requires **Windows**, **Python 3.10+**, and **Node.js 20.19+ or 22.12+**.
To compile C, install **Keil ARM Compiler 5** with LPC17xx CMSIS and startup
files at `C:\Keil\ARM`, or set `KEIL_ARM_ROOT` to your installation's `ARM`
directory. Keil is not bundled; uploading a prebuilt `.hex` works without it.

Run these commands from the repository folder in PowerShell:

```powershell
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
npm.cmd ci
npm.cmd run build
.\.venv\Scripts\python.exe -m simulator.server
```

Open **http://127.0.0.1:8765**. On subsequent runs, double-click `start.bat`;
it also installs missing dependencies and builds the frontend if absent.
Use `stop.bat` to stop a service started by the launcher. After frontend changes,
run `npm.cmd run build` again; after Python changes, restart…
