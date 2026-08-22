---
repo: "Zaneham/takahe"
name: "takahe"
description: "open source hardware synthesis. SystemVerilog, VHDL and ABEL-HDL to gate-level netlists"
readmeQualityOk: true
url: "https://github.com/Zaneham/takahe"
language: "C"
languages: ["C"]
languagePcts: [81]
topics: ["asic", "chip-design", "compiler", "eda", "hardware", "openroad", "rtl", "sky130", "synthesis", "systemverilog"]
stars: 42
forks: 3
openIssues: 2
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 1
createdAt: "2026-03-20T07:16:52Z"
lastCommitAt: "2026-08-22T04:05:36Z"
lastReleaseAt: "2026-08-08T11:56:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 23
maintainers: ["Zaneham"]
openGraphImageUrl: "https://opengraph.githubassets.com/4fb92265deabb73965888869a89ab34bbd82c5186a714e6f2e832a34df4826e1/Zaneham/takahe"
---

# Takahe

Hardware synthesis. SystemVerilog, VHDL and ABEL-HDL in, gate-level netlists mapped to real foundry cells out.

PicoRV32, a complete RISC-V CPU core, synthesises to 3,305 SKY130 gate instances with zero parse errors and zero multi-driver nets. Five processors have been through OpenROAD.

Named after the takahē (*Porphyrio hochstetteri*, also pronounced as Tah-Kah-Hey), declared extinct in 1898 and rediscovered alive in the Murchison Mountains in 1948.

This project started so I could learn how to make my own chips and understand Verilog better. I also wanted to do more historical reconstructions of old computers, which hopefully explains why it's built the way it is.

## What It Does

```bash
# Binary synthesis to SKY130 130nm
./takahe --lib sky130.lib --map counter.v design.sv

# VHDL
./takahe --vhdl --parse design.vhd

# ABEL-HDL (PLD designs from the 1980s-2000s)
./takahe --parse decoder.abl

# Ternary synthesis (balanced ternary, à la Setun)
./takahe --radix 3 --opt --parse design.sv
```

## Four PDK Targets

| PDK | Node | Status |
|-----|------|--------|
| SKY130 | 130nm | Fully supported, five processors synthesised through OpenROAD |
| IHP SG13G2 | 130nm BiCMOS |…
