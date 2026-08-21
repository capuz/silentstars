---
repo: "alainmarcel/uhdm2rtlil"
name: "uhdm2rtlil"
description: "Yosys SystemVerilog Parser - UHDM 2 RTLIL Yosys Pass. Highest ranking complex SystemVerilog 2 functional gate-level netlist flow for Yosys compilation"
readmeQualityOk: true
url: "https://github.com/alainmarcel/uhdm2rtlil"
language: "IL Assembly"
languages: ["IL Assembly", "Verilog"]
languagePcts: [45, 43]
stars: 6
forks: 2
openIssues: 0
closedIssues: 7
watchers: 3
contributors: 3
recentReleases: 2
createdAt: "2025-06-19T04:57:46Z"
lastCommitAt: "2026-08-21T03:25:54Z"
lastReleaseAt: "2026-08-13T01:39:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 85
maintainers: ["alaindargelas"]
openGraphImageUrl: "https://opengraph.githubassets.com/b88b9f169e0cc42389769ac4f52e2e1ef2a06fa43a65e82dd982fdb15ee008c5/alainmarcel/uhdm2rtlil"
postedAt: "2026-07-12T06:25:03.412Z"
---

# UHDM to RTLIL Frontend

A Yosys frontend that enables SystemVerilog synthesis through UHDM (Universal Hardware Data Model) by converting UHDM representations to Yosys RTLIL (Register Transfer Level Intermediate Language).

> ### ✅ Every result is verified
> Nothing here is counted as "working" on a read-only or vacuous pass. Every
> synthesized netlist is proven correct by **formal equivalence** — Yosys
> `equiv_induct` plus a sound **SAT-from-reset miter** against the Yosys
> Verilog-frontend golden — **and/or** by **high-activity randomized Verilator
> co-simulation** against the original RTL. A SAT miter also adjudicates every
> divergence so an inductive-proof gap is never mistaken for a real bug.
> See **[Verification Methodology](#verification-methodology)** below.

## Overview

This project bridges the gap between SystemVerilog source code and Yosys synthesis by leveraging two key components:

1. **Surelog** - Parses SystemVerilog and generates UHDM
2. **UHDM Frontend** - Converts UHDM to Yosys RTLIL

This enables full SystemVerilog synthesis capability in Yosys, including advanced features not available in Yosys's built-in Verilog frontend.

## Verification Methodology…
