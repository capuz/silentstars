---
repo: "SeMinLim/bluevitis"
name: "bluevitis"
description: "Boilerplate codebase for AMD FPGA kernel development via BSV"
readmeQualityOk: true
url: "https://github.com/SeMinLim/bluevitis"
language: "Bluespec"
languages: ["Bluespec", "C++"]
languagePcts: [48, 25]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-18T05:41:00Z"
lastCommitAt: "2026-08-29T17:27:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 67
undervaluedScore: 21
maintainers: ["SeMinLim"]
openGraphImageUrl: "https://opengraph.githubassets.com/241029cb6e3fbb2830aaa65ea44906984e87e6720db30e3d8078bb481b7dee04/SeMinLim/bluevitis"
---

# blueVitis
* An Advanced, High-Performance Boilerplate Codebase for AMD FPGA Kernel Development using Bluespec SystemVerilog (BSV).

* `blueVitis` originated from the foundational work, [`bluespec-vitis-core`](https://github.com/sangwoojun/bluespec-vitis-core), developed by my esteemed advisor, Prof. Sang-Woo Jun. 

## File structure
* hw/
  * All custom hardware logic files and configurations for a specific kernel running are in a certain kernel folder.
  * Recommend copying one of the kernel folders and customize it!
* sw/
  * Customized C++ file that manages and configures all operations between the host machine and the FPGA.

## Prerequisites & Dependencies
* blueLibrary (Required)
  * `blueVitis` relies heavily on custom hardware IP blocks provided by [`blueLibrary`](https://github.com/SeMinLim/bluelibrary).
  * By default, blueLibrary must be cloned at the same level as `blueVitis` (e.g., ~/bluevitis and ~/bluelibrary).
* Environment Setup
  * Operating System: Ubuntu 24.04.4 LTS & 6.8.0-48-generic Kernel 
  * Framework: AMD Vitis 2025.02 & Xilinx Runtime (XRT)
  * Compiler: Bluespec System Verilog (BSC)

## How to build
`blueVitis` features a fully automated, one-touch…
