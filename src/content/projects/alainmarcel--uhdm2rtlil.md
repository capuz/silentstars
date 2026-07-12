---
repo: "alainmarcel/uhdm2rtlil"
name: "uhdm2rtlil"
description: "Yosys SystemVerilog Parser - UHDM 2 RTLIL Yosys Pass"
readmeQualityOk: true
url: "https://github.com/alainmarcel/uhdm2rtlil"
language: "IL Assembly"
languages: ["IL Assembly", "Verilog"]
languagePcts: [47, 42]
stars: 6
forks: 1
openIssues: 1
closedIssues: 6
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2025-06-19T04:57:46Z"
lastCommitAt: "2026-07-12T06:17:08Z"
lastReleaseAt: "2025-08-30T04:18:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 74
maintainers: ["alaindargelas", "Thomasb81"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe919fa553de4e89f29b69cf333e2ac3b7c8c436a0940583aec2dd5967606026/alainmarcel/uhdm2rtlil"
---

# UHDM to RTLIL Frontend

A Yosys frontend that enables SystemVerilog synthesis through UHDM (Universal Hardware Data Model) by converting UHDM representations to Yosys RTLIL (Register Transfer Level Intermediate Language).

## Overview

This project bridges the gap between SystemVerilog source code and Yosys synthesis by leveraging two key components:

1. **Surelog** - Parses SystemVerilog and generates UHDM
2. **UHDM Frontend** - Converts UHDM to Yosys RTLIL

This enables full SystemVerilog synthesis capability in Yosys, including advanced features not available in Yosys's built-in Verilog frontend.

### Test Suite Status

Run via `make test-all --all` (the internal SystemVerilog suite **plus** the
upstream Yosys test suite under `third_party/yosys/tests/`):

- **Total Tests**: 1190
- **Success Rate**: 96% (1147/1190 tests functional), 1 crash, **0 Miter-Formal (UHDM≠Verilog) failures**
- **Passing**: 840 tests with formal equivalence verified between the UHDM and Verilog frontends
- **UHDM-Only Success**: 307 tests verified end-to-end against Verilator (the UHDM frontend handles SystemVerilog the Verilog frontend can't, so formal equivalence isn't possible — see below)
-…
