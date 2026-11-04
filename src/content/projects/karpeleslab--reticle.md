---
repo: "KarpelesLab/reticle"
name: "reticle"
description: "A VHDL and Verilog compiler written from scratch in Rust, with no third-party crates: simulation, synthesis, formal verification, FPGA place-and-route, bitstream generation and JTAG programming."
readmeQualityOk: true
url: "https://github.com/KarpelesLab/reticle"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
topics: ["asic", "bitstream", "compiler", "eda", "formal-verification", "fpga", "hdl", "jtag", "no-dependencies", "rust"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-09-22T03:02:39Z"
lastCommitAt: "2026-11-04T09:33:08Z"
lastReleaseAt: "2026-10-16T23:55:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 55
maintainers: ["MagicalTux"]
openGraphImageUrl: "https://opengraph.githubassets.com/2421bd2e90116995b3f9c01f39e93ecd2097080825ba0f45976de8d8f62d32e9/KarpelesLab/reticle"
---

# reticle

A VHDL / Verilog compiler written **from scratch in Rust**, with no foreign
code and no third-party crates.

Reticle is intended to grow into one self-contained hardware toolchain:

- **Frontends** for Verilog-2005 / synthesisable SystemVerilog and VHDL-2008,
  both lowering to a single intermediate representation so mixed-language
  designs need no special handling.
- **Simulation** with an event-driven 4-state simulator, VCD / FST waveforms,
  and a Rust co-simulation API for writing testbenches as `#[test]`s.
- **Synthesis** with flip-flop, memory and FSM inference, an AIG-based logic
  optimiser, and LUT and standard-cell mapping.
- **Targets** for FPGA (device databases, placement constraints, an own
  placer and router for open families, interop with nextpnr and vendor tools)
  and ASIC (Liberty, LEF / DEF, static timing analysis).
- **Verification** through bounded model checking and equivalence checking
  on an in-crate SAT solver.
- **IP integration**: a manifest format for third-party IP, bus interface
  abstractions (AXI, Wishbone, APB), black-box handling for encrypted vendor
  cores, a static registry index, an IP-XACT importer, and a first-party IP…
