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
stars: 28
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-01-16T23:25:33Z"
lastCommitAt: "2026-10-23T11:58:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 44
maintainers: ["JaimeHW"]
openGraphImageUrl: "https://opengraph.githubassets.com/f639b0a7933588f995449c9bc70e0595206a2a5eeafc5924cc0800bcca81a08c/JaimeHW/RSpice"
---

# RSpice

**An analog and mixed-signal circuit simulator, written in Rust.**

Run SPICE netlists from a command line, a desktop application, Python, or the
browser: operating points and transient waveforms through harmonic balance and
phase noise.

[Quick start](#quick-start) · [Analyses](#analyses) · [Devices](#devices) ·
[Dialect](#netlist-dialect) · [Interfaces](#interfaces) ·
[Validation](#validation) · [Repository](#repository)

---

## Overview

RSpice is a circuit simulator for standard SPICE netlists. It has DC operating
point, transient, small-signal AC, noise and distortion analyses, plus RF
steady-state coverage through harmonic balance, periodic and quasi-periodic
steady state, and phase noise. Its device library spans the classic SPICE
elements, native BSIM3, BSIM4, BSIM-SOI, VBIC and EKV compact models, and 43
compact models generated from their Verilog-A sources. Mixed-signal decks are
first-class: RSpice has both halves of Verilog-AMS, so digital and real-number
modules simulate alongside the analog solve, with connect modules inserted
automatically where a deck node joins analog and discrete ports.

RSpice has one engine behind every interface. The command line,…
