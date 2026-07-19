---
repo: "cachanova/synth-explorer"
name: "synth-explorer"
description: "Compiler Explorer for RTL: synthesize Verilog with Yosys and explore timing paths, logic depth, and fanin/fanout interactively"
readmeQualityOk: true
url: "https://github.com/cachanova/synth-explorer"
homepage: "https://synth-explorer-omega.vercel.app"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [51, 37]
stars: 21
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-10T09:12:27Z"
lastCommitAt: "2026-07-19T06:12:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 40
maintainers: ["cachanova"]
openGraphImageUrl: "https://opengraph.githubassets.com/0a2a1272105359eb181f44715e0c02d3af3eb008c26fba1de9822f4361ed3cf3/cachanova/synth-explorer"
---

# Synth Explorer

**Compiler Explorer for RTL.** Paste Verilog or SystemVerilog, synthesize it
with [Yosys](https://yosyshq.net/yosys/), and inspect the resulting circuit by
path, endpoint, fanin, fanout, or source location.

[Try Synth Explorer in your browser](https://www.synthexplorer.dev/)

Synthesis and analysis run locally in the browser. RTL is not uploaded to an
application server. Successful synthesis artifacts are cached only in that
browser profile and can be cleared from the settings menu.

## Features

- Synthesize generic gates, LUT4/LUT6 mappings, and iCE40, ECP5, or Xilinx
  target flows automatically after 250 ms without an edit, using a
  project-pinned Yosys WebAssembly build.
- Rank logical paths and endpoints by combinational depth.
- Explore bounded fanin and fanout cones without rendering the whole netlist.
- Find high-fanout nets and jump from synthesized cells to source.
- Reuse identical RTL + tool-setting results from a bounded IndexedDB cache.

> [!IMPORTANT]
> Synth Explorer reports structural estimates from a synthesized netlist,
> including unit-delay depth and a rough pre-place-and-route delay estimate. It
> does not perform timing closure. Use…
