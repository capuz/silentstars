---
repo: "djGLiTCH/MAME-LUA-SCRIPT-STATE-OUTPUTS"
name: "MAME-LUA-SCRIPT-STATE-OUTPUTS"
description: "A project that creates state outputs for games in MAME and automatically configures builds to enable force feedback, lighting, and display effects for arcade cabinet hardware with your preferred \"Hooker\" program (OutputHooker recommended)"
url: "https://github.com/djGLiTCH/MAME-LUA-SCRIPT-STATE-OUTPUTS"
language: "Lua"
languages: ["Lua"]
languagePcts: [94]
stars: 5
forks: 0
openIssues: 0
closedIssues: 7
watchers: 3
contributors: 1
recentReleases: 3
createdAt: "2026-02-23T23:15:35Z"
lastCommitAt: "2026-06-30T06:51:27Z"
lastReleaseAt: "2026-04-08T04:58:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 60
maintainers: ["djGLiTCH"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a8a3090a49f2f71a17abf346211d97e3f29a5617265276c43b2fd7faedb34b5/djGLiTCH/MAME-LUA-SCRIPT-STATE-OUTPUTS"
---

# MAME State Output Project (Plugin and Configurator)

</p>

**A universal state output plugin framework for MAME designed to enable force feedback (recoil, reload, rumble, lights, display, etc.) for games that lack native state outputs or require additional state output triggers. Currently aimed at light gun games, but other genres can be easily supported as well by the community.**

---

## 📖 Historical Context: From Lua Script to MAME Plugin

Previously, this project was known as the "Universal MAME Lua Script for State Outputs". It relied on standalone Lua scripts for each game / ROM to monitor memory addresses and output states. While effective, as the list of supported games grew, we needed a more robust and integrated solution.

We have since migrated to a **native MAME Plugin architecture** to establish a centralized state output framework. This transition allows us to:
* Optimize background performance and reduce overhead.
* Seamlessly integrate with MAME's built-in plugin ecosystem.
* Automate the generation of configuration files.
* Easily add support for new games / ROMs by updating a single file (database.lua).
* Provide a more stable foundation for future community…
