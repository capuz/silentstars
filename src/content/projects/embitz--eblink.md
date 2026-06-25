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
lastCommitAt: "2026-06-25T06:40:31Z"
status: "thriving"
tags: []
healthScore: 100
undervaluedScore: 37
maintainers: ["EmBitz"]
openGraphImageUrl: "https://opengraph.githubassets.com/217e59346a1c91c8b6b28eb734bdfa07908d0d9a26318fd891240e0492c3516b/EmBitz/EBlink"
---

# Cortex-M Tool Support (e.g., STlink V2 & V3)
## Win32, Linux x86_64, and Raspberry Pi (32/64-bit)
### Auto-detects Silabs, STMicro, Atmel, NXP, and Renesas

EBlink is an ARM Cortex-M debug tool with Squirrel scripting support for various devices.

[Link to EmBitz EBlink forum](https://embitz.org/forum/forum-3.html)

Windows installer includes a shell context menu, and **all files are digitally signed**.  
The installer sets the environment variable `EB_DEFAULT_SCRIPT` to `"auto"` (`.script`), so that all supported vendors are automatically detected (currently Silabs, STMicro, Atmel, NXP, and Renesas).  
The variable `EB_DEFAULT_PROBE` is set to `"stlink"`.

![alt text](https://www.embitz.org/context3.png)  

### What's New in Version 6.21

Starting with version 6.21, **EBmon** is now included in the packages. EBmon is the host-side component of the real-time monitor, which has been available for years as a plugin in EmBitz.  

The **EBmon CLI** is blazing fast since it doesn't require a GDB client. It lets you easily control your target—run it, halt it, or restart it—with simple commands. Using the `--log` option, you can capture all target data in the background for later…
