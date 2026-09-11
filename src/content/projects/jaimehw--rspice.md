---
repo: "JaimeHW/RSpice"
name: "RSpice"
description: "Modern Analog and Mixed-Signal Electronic Circuit Simulator that runs on on the desktop and in the browser"
readmeQualityOk: true
url: "https://github.com/JaimeHW/RSpice"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["circuit", "circuits", "electrical-engineering", "electronics", "hardware", "rust", "simulation", "simulator", "engineering", "eda"]
stars: 20
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-01-16T23:25:33Z"
lastCommitAt: "2026-09-11T08:15:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 43
maintainers: ["JaimeHW"]
openGraphImageUrl: "https://opengraph.githubassets.com/083532e798484c9732b7c0dcfc0bfa66ce1c44cd2f4d756b7eda3d1b27457f98/JaimeHW/RSpice"
---

# RSpice

**An analog and mixed-signal circuit simulator, written in Rust.**

Run SPICE netlists from a command line, a desktop IDE, Python, or the browser:
operating points and transient waveforms through harmonic balance and phase noise.

[Quick start](#quick-start) · [Analyses](#analyses) · [Devices](#devices) ·
[Dialect](#netlist-dialect) · [Interfaces](#interfaces) ·
[Validation](#validation) · [Status](#status)

</div>

---

## Overview

RSpice is a circuit simulator for standard SPICE netlists. It has DC operating
point, transient, small-signal AC, noise, and distortion analyses, plus RF
steady-state coverage through harmonic balance, periodic steady state, and phase
noise. Its device library spans the classic SPICE elements, native BSIM3, BSIM4,
BSIM-SOI, VBIC, and EKV compact models, and 43 CMC models generated from their
Verilog-A sources. Mixed-signal decks are first-class: RSpice has both halves of
Verilog-AMS, so digital and real-number modules simulate alongside the analog
solve with connect modules inserted automatically at discipline boundaries.

RSpice has one engine behind every interface. The command line, the desktop IDE,
the Python bindings, and the…
