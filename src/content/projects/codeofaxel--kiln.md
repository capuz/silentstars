---
repo: "codeofaxel/Kiln"
name: "Kiln"
description: "Describe it or draw it — Kiln makes it real. The open-source MCP server for 3D printing: AI agents (Claude, Codex, Cursor, or any MCP client) design, generate, slice & print on Bambu Lab, Prusa, Creality, Klipper/Moonraker, OctoPrint, Elegoo & any Marlin printer."
readmeQualityOk: true
url: "https://github.com/codeofaxel/Kiln"
homepage: "https://kiln3d.com"
language: "Python"
languages: ["Python", "OpenSCAD"]
languagePcts: [73, 27]
topics: ["3d-printing", "ai-agents", "bambu-lab", "klipper", "mcp", "model-context-protocol", "moonraker", "octoprint", "ai", "elegoo"]
stars: 31
forks: 7
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2026-02-10T19:01:32Z"
lastCommitAt: "2026-07-05T06:32:26Z"
lastReleaseAt: "2026-03-13T00:33:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 45
maintainers: ["codeofaxel", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1b17f57bb7e029a9f5bbe04e6d216d03a9a28189af11607cdd5e0262b46c88f/codeofaxel/Kiln"
discussionCount: 0
---

</p>

</p>

---

**The open-source MCP server for 3D printing.**

Kiln lets AI agents (Claude Desktop, Claude Code, Codex, or any custom MCP client) drive real 3D printers end to end — Bambu Lab, Creality, Prusa, Elegoo, Voron, Sovol, AnkerMake, Artillery, FlashForge, QIDI, RatRig, and SparkX, over OctoPrint, Moonraker/Klipper, PrusaLink, and Direct USB.

In a single conversation, an agent can design a part, slice it, queue it on the right printer, monitor the camera, recover from failures, and ship the result. No human in the middle.

```bash
pip install kiln3d
```

</p>

</p>

  <em>"a coaster with a photo of my dog Ash" — start to finish, from one sentence.</em><br>
</p>

  <sub>Kiln's built in the open. If it made your printing more fun, or just saved you a headache, a ⭐ on the repo helps the next maker find it.</sub>
</p>

## Quick Start

Three steps. Then ask your AI to make something.

**1. Install**

```bash
pip install kiln3d
```

**2. Connect your AI** — Kiln sets itself up inside Claude Desktop, Claude Code, and Codex:

```bash
kiln signin        # create your free account
kiln install-mcp   # connects Kiln to your AI apps
```

Restart your AI app and it can run your…
