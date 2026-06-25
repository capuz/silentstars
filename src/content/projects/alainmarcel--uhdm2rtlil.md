---
repo: "alainmarcel/uhdm2rtlil"
name: "uhdm2rtlil"
description: "Yosys SystemVerilog Parser - UHDM 2 RTLIL Yosys Pass"
url: "https://github.com/alainmarcel/uhdm2rtlil"
language: "IL Assembly"
languages: ["IL Assembly", "Verilog"]
languagePcts: [48, 43]
stars: 6
forks: 0
openIssues: 0
closedIssues: 3
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2025-06-19T04:57:46Z"
lastCommitAt: "2026-06-25T01:33:21Z"
lastReleaseAt: "2025-08-30T04:18:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 72
maintainers: ["alaindargelas"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c7bad713504cbc37c25a7f956f9adfb0da75eb867abb38d296ad4d98357e335/alainmarcel/uhdm2rtlil"
---

# UHDM to RTLIL Frontend

![CI](https://github.com/username/uhdm2rtlil/workflows/CI/badge.svg)

A Yosys frontend that enables SystemVerilog synthesis through UHDM (Universal Hardware Data Model) by converting UHDM representations to Yosys RTLIL (Register Transfer Level Intermediate Language).

## Overview

This project bridges the gap between SystemVerilog source code and Yosys synthesis by leveraging two key components:

1. **Surelog** - Parses SystemVerilog and generates UHDM
2. **UHDM Frontend** - Converts UHDM to Yosys RTLIL

This enables full SystemVerilog synthesis capability in Yosys, including advanced features not available in Yosys's built-in Verilog frontend.

### Test Suite Status

Run via `make test-all --all` (the internal SystemVerilog suite **plus** the
upstream Yosys test suite under `third_party/yosys/tests/`):

- **Total Tests**: 1176
- **Success Rate**: 96% (1134/1176 tests functional), 1 crash, **0 Miter-Formal (UHDM≠Verilog) failures**
- **Passing**: 832 tests with formal equivalence verified between the UHDM and Verilog frontends
- **UHDM-Only Success**: 302 tests verified end-to-end against Verilator (the UHDM frontend handles SystemVerilog the Verilog…
