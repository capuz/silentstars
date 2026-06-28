---
repo: "EmBitz/EBlink"
name: "EBlink"
description: "EBlink is a, commercial grade, Swiss-army knife for ARM Cortex-M development, supporting all ST-LINKs and clones with fast flashing (cache), debugging, scripting, and real-time memory monitoring."
url: "https://github.com/EmBitz/EBlink"
language: "C"
languages: ["C"]
languagePcts: [100]
stars: 11
forks: 0
openIssues: 0
closedIssues: 2
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2022-11-01T16:08:38Z"
lastCommitAt: "2026-06-28T07:28:30Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 75
undervaluedScore: 50
maintainers: ["EmBitz"]
openGraphImageUrl: "https://opengraph.githubassets.com/dae62a567b13d8f984d8c20c75ccd760639fc7706869f04ecdc6c783c9ab8878/EmBitz/EBlink"
---

# Cortex-M Tool Support (e.g., STlink V2 & V3)

> **Disclaimer:** This software is provided "as is", without warranty of any kind. The author is not liable for any damage, data loss, or hardware failure resulting from its use. Use at your own risk.
## Win32, Linux x86_64, and Raspberry Pi (32/64-bit)
### Auto-detects Silabs, STMicro, Atmel, NXP, and Renesas

EBlink is an ARM Cortex-M debug tool with Squirrel scripting support for various devices.

[Link to EmBitz EBlink forum](https://embitz.org/forum/forum-3.html)

Windows installer includes a shell context menu, and **all files are digitally signed**.  
The installer sets the environment variable `EB_DEFAULT_SCRIPT` to `"auto"` (`.script`), so that all supported vendors are automatically detected (currently Silabs, STMicro, Atmel, NXP, and Renesas).  
The variable `EB_DEFAULT_PROBE` is set to `"stlink"`.

  

### What's New in Version 6.30

Version 6.30 adds **multi-GDB server support** from the command line. Until now, launching EBlink for a dual-core target (e.g. STM32H7 CM4 + CM7) required the device script to set up multiple GDB server instances via `ebServicesSetup`. That still works — and is the recommended path for…
