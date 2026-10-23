---
repo: "ItsDanik/ecwolf_MiSTer"
name: "ecwolf_MiSTer"
description: "Wolfenstein 3D (ECWolf) for MiSTer FPGA as a hybrid core: game on the ARM, 15kHz video, audio and input from the FPGA"
readmeQualityOk: true
url: "https://github.com/ItsDanik/ecwolf_MiSTer"
language: "Verilog"
languages: ["Verilog", "SystemVerilog"]
languagePcts: [50, 25]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-10-04T10:36:52Z"
lastCommitAt: "2026-10-23T09:32:18Z"
lastReleaseAt: "2026-10-11T19:08:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 31
maintainers: ["ItsDanik"]
openGraphImageUrl: "https://opengraph.githubassets.com/8aad4c7e67f077c80d1e62242f2d4f40d6f582bd8b6fd14a29b74061c139044a/ItsDanik/ecwolf_MiSTer"
---

# ECWolf for MiSTer

Wolfenstein 3D and Spear of Destiny on [MiSTer FPGA](https://github.com/MiSTer-devel/Main_MiSTer/wiki) as a hybrid port.

The game itself is [ECWolf](https://maniacsvault.net/ecwolf/), the source port of the Wolfenstein 3D engine. It runs on the MiSTer's ARM CPU. The ECWolf FPGA core provides native 15kHz video (CRT, VGA and HDMI) at 320x200, 640x200, 320x240 or 640x240, 44.1kHz audio and keyboard, mouse and gamepad input. The two halves talk through shared DDR3 memory.

> **Beta.** Expect rough edges and please report problems in the issues.

Disclaimer: AI is being used to speed up development of this project.

## Requirements

- **danik_hybrid_ports**, the launcher (`Scripts/danik_hybrid_ports.sh`): run it **once** from the MiSTer's `Scripts` menu. It starts the game whenever its menu entry is loaded, keeps running after a reboot, and serves all our hybrid ports; its screen picks which ports and games to have, and can keep them up to date through `update_all`. It replaces `danik_hybrid_cores`, the launcher before it, and moves ports installed the old way (`games/ECWolf/`) into the new folders by itself. Without it the core says "Game not running".
- **Game…
