---
repo: "RonnyA/nd-120"
name: "nd-120"
description: "Norsk Data ND-120 CPU Design Documents. Modern Logisim and HDL implementation"
readmeQualityOk: true
url: "https://github.com/RonnyA/nd-120"
language: "Verilog"
languages: ["Verilog"]
languagePcts: [64]
topics: ["logisim", "norsk-data", "verilog"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 2
createdAt: "2023-06-02T08:50:04Z"
lastCommitAt: "2026-09-08T08:14:57Z"
lastReleaseAt: "2026-09-02T18:03:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 68
maintainers: ["RonnyA"]
openGraphImageUrl: "https://opengraph.githubassets.com/34fec5151440298a99e9114c6bde114f73c51bdeab7af54b0dd94aaede72d3a1/RonnyA/nd-120"
---

# ND-120 CPU

## Content

This repo contains:

* Original **Norsk Data** ND-120 CPU Design Documents from 1988. Scanned in 2023
* Modern Logisim and HDL implementation from 2023.

You can read more about this [CPU](https://www.ndwiki.org/wiki/3202) and much more in [NDWiki](https://www.ndwiki.org/) and the official website for [Norsk Data](http://sintran.com/)

The goal of this repo is to re-create the schematics and create the HDL files so we can program an FPGA to run as the original ND-120 CPU Card.

On the way to the FPGA code, there will be testable Logisim Circuits and Logisim code that can be converted and tested in C++ using Verilator.

## Current Status

### Where the project stands (02-SEP-2026)

The machine runs the original operating system on real hardware - on **three
boards**. **SINTRAN III boots on the Tang Nano 20K** (24-AUG), the **Nexys 4
DDR** (25-AUG) and the **MiSTer / DE10-Nano** (02-SEP), each from a Winchester
disc image, and you can log in and run programs. The Tang is the primary
target. A fourth machine, the **MEGA65**, builds for both board revisions and
is timing-clean, but has not yet run on a real MEGA65 - the release cores are
its first hardware…
