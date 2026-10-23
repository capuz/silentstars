---
repo: "ItsDanik/Dethrace_MiSTer"
name: "Dethrace_MiSTer"
description: "Carmageddon (dethrace) for MiSTer FPGA as a hybrid core: game on the ARM, 15kHz video, audio and input from the FPGA"
readmeQualityOk: true
url: "https://github.com/ItsDanik/Dethrace_MiSTer"
language: "Verilog"
languages: ["Verilog", "SystemVerilog"]
languagePcts: [42, 34]
topics: ["carmageddon", "dethrace", "mister", "mister-fpga"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-10-02T09:26:53Z"
lastCommitAt: "2026-10-23T09:32:16Z"
lastReleaseAt: "2026-10-07T21:26:40Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 31
maintainers: ["ItsDanik"]
openGraphImageUrl: "https://opengraph.githubassets.com/497664473f8bfe5f9e52a9b01aa129d40454ef25fdca17b5967ddc01250eb330/ItsDanik/Dethrace_MiSTer"
---

# Dethrace for MiSTer

Carmageddon (1997) and its Splat Pack on [MiSTer FPGA](https://github.com/MiSTer-devel/Main_MiSTer/wiki) as a hybrid port.

The game itself is [dethrace](https://github.com/dethrace-labs/dethrace), the open source reimplementation of Carmageddon. It runs on the MiSTer's ARM CPU. The Dethrace FPGA core provides native 320x200 and 320x240 15kHz video (CRT, VGA and HDMI), 44.1kHz audio and keyboard, mouse and gamepad input. The two halves talk through shared DDR3 memory.

> **Beta.** This is the first public release. Expect rough edges and please report problems in the issues.

Disclaimer: AI is being used to speed up development of this project.

## Requirements

- **danik_hybrid_ports**, the launcher (`Scripts/danik_hybrid_ports.sh`): run it **once** from the MiSTer's `Scripts` menu. It starts the game whenever its menu entry is loaded, keeps running after a reboot, and serves all our hybrid ports; its screen picks which ports and games to have, and can keep them up to date through `update_all`. It replaces `danik_hybrid_cores`, the launcher before it, and moves ports installed the old way (`games/Dethrace/`) into the new folders by itself. Without it the…
