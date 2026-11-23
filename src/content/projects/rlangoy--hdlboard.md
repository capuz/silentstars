---
repo: "rlangoy/HDLBoard"
name: "HDLBoard"
description: "HDLBoard - Write VHDL/Verilog and watch it run on a virtual board"
readmeQualityOk: true
url: "https://github.com/rlangoy/HDLBoard"
homepage: "https://rlangoy.github.io/HDLBoard/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["de1-soc", "fpga", "ghdl", "simulator", "vhdl", "verilog", "ghdl-interface", "icarus", "icarus-ui", "icarus-verilog"]
stars: 17
forks: 1
openIssues: 2
closedIssues: 21
watchers: 2
contributors: 2
recentReleases: 6
createdAt: "2026-09-16T06:40:07Z"
lastCommitAt: "2026-11-23T12:25:03Z"
lastReleaseAt: "2026-11-23T12:17:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 54
maintainers: ["rlangoy"]
openGraphImageUrl: "https://opengraph.githubassets.com/74bbd2f8e0baf66302290ebdccc2612d5d43645839e3e36fcde74074e34367db/rlangoy/HDLBoard"
---

# HDLBoard — free online VHDL & Verilog simulator with an interactive FPGA board

**Write VHDL or Verilog. Watch it light up.**

A free online simulator with a virtual FPGA board. Flip the switches while your design runs, and watch the LEDs respond.

**[Try it online](https://hdlboard.onrender.com/)** or simply **[Download the Windows/Linux App](https://github.com/rlangoy/HDLBoard/releases)** 

## Get started

### Try it in one minute

1. Open the [online simulator](https://hdlboard.onrender.com/) or start the Windows/Linux app.
2. The starter design already connects the switches to the LEDs:

   ```vhdl
   LEDR <= SW;
   ```

3. Press **Start**, then flip a few switches on the board. The matching LEDs light up.
4. Edit the line, for example to `LEDR <= not SW;` or `LEDR(0) <= SW(0) and SW(1);`, and start again.

For something with buttons and displays, open the **[4-bit adder and hex counter example](https://hdlboard.onrender.com/?project=projects/adder-and-counter/adder-and-counter.hdlboard.json)**. In it, KEY0 counts up, KEY1 resets, and the count is shown on the LEDs and in hex on the 7-segment displays. A self-checking testbench for the adder is included.
