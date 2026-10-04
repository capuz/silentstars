---
repo: "rlangoy/HDLBoard"
name: "HDLBoard"
description: "HDLBoard - Write VHDL/Verilog and watch it run on a virtual board"
readmeQualityOk: true
url: "https://github.com/rlangoy/HDLBoard"
homepage: "https://rlangoy.github.io/HDLBoard/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
topics: ["de1-soc", "fpga", "ghdl", "simulator", "vhdl", "verilog", "ghdl-interface", "icarus", "icarus-ui", "icarus-verilog"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 4
createdAt: "2026-09-16T06:40:07Z"
lastCommitAt: "2026-10-04T10:02:35Z"
lastReleaseAt: "2026-10-01T15:26:03Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 55
maintainers: ["rlangoy", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/a38d84f0d57346a3e830555d88691dd9bce2808fc384145e8ba6c89cd315d3c6/rlangoy/HDLBoard"
---

# HDLBoard - Write VHDL or Verilog and watch it run [](https://hdlboard.onrender.com/)

Write VHDL or Verilog and watch it run on a virtual board — flip switches, light LEDs, see it work. Built on GHDL (VHDL) and Icarus Verilog (Verilog), it's designed to give beginning students a simple first step into FPGA design before tackling timing analysis and beyond. Runs standalone on Windows or hosted in a browser.

## Features

- **Real simulation** — your VHDL runs on [GHDL](https://github.com/ghdl/ghdl) and your Verilog on [Icarus Verilog](https://github.com/steveicarus/iverilog), not an approximation; the simulator's own output and errors (file:line included) appear in the console. Drop a `.v` file, mark it as top, and Start runs the Verilog engine.
- **A live DE1-SoC board** — clickable switches and pushbuttons, with LEDs and 7-segment displays driven by the simulation.
- **A small IDE** — file explorer with upload and drag-and-drop, tabbed editor (VHDL and Verilog syntax highlighting), resizable panes.
- **Testbenc support** — in VHDL or Verilog prints its messages live in the console. Open a design or a testbench and the editor splits: testbench on the left, the design it drives…
