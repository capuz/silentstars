---
repo: "rlangoy/HDLBoard"
name: "HDLBoard"
description: "HDLBoard - Write VHDL/Verilog and watch it run on a virtual board"
readmeQualityOk: true
url: "https://github.com/rlangoy/HDLBoard"
homepage: "https://rlangoy.github.io/HDLBoard/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["de1-soc", "fpga", "ghdl", "simulator", "vhdl", "verilog", "ghdl-interface", "icarus", "icarus-ui", "icarus-verilog"]
stars: 19
forks: 1
openIssues: 2
closedIssues: 22
watchers: 2
contributors: 2
recentReleases: 5
createdAt: "2026-09-16T06:40:07Z"
lastCommitAt: "2026-11-27T12:53:59Z"
lastReleaseAt: "2026-11-23T12:17:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 53
maintainers: ["rlangoy"]
openGraphImageUrl: "https://opengraph.githubassets.com/559d491840f9591b75ffa8a80c29811292fbef288fc38029a8946263db900b26/rlangoy/HDLBoard"
---

# HDLBoard - free VHDL & Verilog simulator with an interactive FPGA board

A free VHDL and Verilog simulator with an interactive virtual FPGA board.<br> 

**[Try it online](https://hdlboard.onrender.com/)** or simply **[Download the Windows/Linux/macOS App](https://github.com/rlangoy/HDLBoard/releases)** <br>

## Get started

### Try it in one minute

1. Open the [online simulator](https://hdlboard.onrender.com/) or start the Windows, macOS or Linux app.
2. The starter design already connects the switches to the LEDs:

   ```vhdl
   LEDR <= SW;
   ```

3. Press **Start**, then flip a few switches on the board. The matching LEDs light up.
4. Edit the line, for example to `LEDR <= not SW;` or `LEDR(0) <= SW(0) and SW(1);`, and start again.

For something with buttons and displays, open the **[4-bit adder and hex counter example](https://hdlboard.onrender.com/?project=projects/adder-and-counter/adder-and-counter.hdlboard.json)**. In it, KEY0 counts up, KEY1 resets, and the count is shown on the LEDs and in hex on the 7-segment displays. A self-checking testbench for the adder is included.

Every board port is optional, so a first lab can declare only `SW` and `LEDR`.
