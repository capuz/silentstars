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
lastCommitAt: "2026-07-15T01:45:08Z"
lastReleaseAt: "2025-08-30T04:18:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 74
maintainers: ["alaindargelas"]
openGraphImageUrl: "https://opengraph.githubassets.com/2df940ab2853b0ba4749caf29d839166289fef24c17325645dbdd452cf45251a/alainmarcel/uhdm2rtlil"
postedAt: "2026-07-12T06:25:03.412Z"
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

- **Total Tests**: 1247
- **Success Rate**: 96% (1203/1247 tests functional), 1 crash, **0 Miter-Formal (UHDM≠Verilog) failures**
- **Passing**: 853 tests with formal equivalence verified between the UHDM and Verilog frontends
- **UHDM-Only Success**: 350 tests verified end-to-end against Verilator (the UHDM frontend handles SystemVerilog the Verilog frontend can't, so formal equivalence isn't possible — see below)
-…
