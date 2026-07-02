---
repo: "Arcadia-1/EVAS"
name: "EVAS"
description: "EVAS: Event-driven Verilog-A Simulator. Zero-dependency, instant-response, ideal for verifying clock, control, and calibration logic."
url: "https://github.com/Arcadia-1/EVAS"
homepage: "https://evas.tokenzhang.com/"
language: "Python"
languages: ["Python"]
languagePcts: [86]
stars: 5
forks: 3
openIssues: 0
closedIssues: 43
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2026-03-13T20:11:54Z"
lastCommitAt: "2026-07-02T06:33:24Z"
lastReleaseAt: "2026-07-01T11:36:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 78
maintainers: ["Arcadia-1", "BucketSran"]
openGraphImageUrl: "https://opengraph.githubassets.com/b41144af88cd837a51ff2cdb9ebdf371eddf33497f1bcd2f7502973dc97da6dc/Arcadia-1/EVAS"
---

# EVAS — Event-driven Verilog-A Simulator

A lightweight behavioral simulator for digital/mixed-signal Verilog-A models.
EVAS ships with a Python compatibility engine by default and an optional evas-rust backend for supported event-driven designs. No ngspice, no KCL/KVL solver.

---

Docs: [evas.tokenzhang.com](https://evas.tokenzhang.com)

---

## What EVAS does

EVAS simulates **voltage-mode, event-driven** Verilog-A behavioral models. You provide:

1. **A `.va` file** — your behavioral model (comparator, DAC, SAR logic, DWA controller, …)
2. **A `.scs` testbench netlist** — voltage sources, `ahdl_include`, and a `tran` statement
3. **Run `evas simulate`** — get `tran.csv` waveforms and optional plots

The main simulator is transient-first. Compiled models also expose lightweight
behavioral helpers for `analysis("ac")`, `ac_stim()`, and Verilog-A noise source
functions so source-style models can run AC/noise sweeps from Python without
claiming SPICE-style linearized circuit analysis.

The bundled examples are a compact smoke-test set. For your own design, copy the
closest example directory, swap in your `.va`, adjust the stimulus sources and
`save` list, and run. The larger…
