---
repo: "machdyne/zeitlos"
name: "zeitlos"
description: "Zeitlos SOC/OS"
readmeQualityOk: true
url: "https://github.com/machdyne/zeitlos"
homepage: "https://zeitlos.org"
language: "C"
languages: ["C", "Verilog"]
languagePcts: [67, 22]
topics: ["fpga", "fpga-soc", "multitasking", "os", "risc-v"]
stars: 25
forks: 3
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 2
recentReleases: 2
createdAt: "2025-04-28T07:04:35Z"
lastCommitAt: "2026-09-05T07:49:28Z"
lastReleaseAt: "2026-09-02T08:02:38Z"
status: "thriving"
tags: []
healthScore: 100
undervaluedScore: 70
maintainers: ["machdyne", "cavearr"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0a5069452e03796fbf194a307684f1dd815de8329858f9cbdf4cefc201b8069/machdyne/zeitlos"
---

# 

Zeitlos is a work-in-progress SOC (System-on-a-Chip) and OS (Operating System) developed in tandem and intended to provide a responsive graphical environment for using and developing timeless applications on FPGA computers.

The core applications allow Zeitlos to be used as an extensible multi-window network terminal with scripting and graphics.

Zeitlos is the successor to [Zucker](https://github.com/machdyne/zucker).

## Features

### SOC

| Component | Features/Notes |
|-----------|----------|
| CPU | 32-bit RISC-V (PicoRV32 or [Zeitlos32](https://github.com/machdyne/zeitlos/blob/HEAD/docs/zeitlos32.md)) RV32IM @ 48MHz |
| GPU | [Line rasterizer](https://github.com/machdyne/zeitlos/blob/HEAD/docs/gpu_raster.md) and [blitter](https://github.com/machdyne/zeitlos/blob/HEAD/docs/gpu_blitter.md) |
| MTU | Virtual addressing through Memory Translation Unit |
| Bus | 32-bit Wishbone |
| Main Memory | SDRAM, PSRAM or SRAM (1MB minimum) |
| Framebuffer | 640x480x1bpp (monochrome; white, green, or amber) |
| Viewport | Optional 320x240 pixel-doubled [viewport](https://github.com/machdyne/zeitlos/blob/HEAD/docs/game_mode.md) |
| Video | VGA, DVI, DVI over HDMI,…
