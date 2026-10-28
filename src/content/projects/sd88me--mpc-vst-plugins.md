---
repo: "sd88me/mpc-vst-plugins"
name: "mpc-vst-plugins"
description: "Native VST2 plugins with MPC screen skins for Akai MPC OS standalone (MPC Live/One/X/Key, Force)"
readmeQualityOk: true
url: "https://github.com/sd88me/mpc-vst-plugins"
language: "Python"
languages: ["Python", "C"]
languagePcts: [36, 21]
stars: 138
forks: 45
openIssues: 9
closedIssues: 158
watchers: 10
contributors: 25
recentReleases: 3
createdAt: "2026-09-23T12:38:55Z"
lastCommitAt: "2026-10-28T09:58:06Z"
lastReleaseAt: "2026-10-28T00:19:41Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 37
maintainers: ["sd88me", "claude", "Eurikon"]
openGraphImageUrl: "https://opengraph.githubassets.com/0330d62dadbbb3a134c74287c33bbf10565ace76b4d92e0586f3d3d3b05ae09d/sd88me/mpc-vst-plugins"
discussionCount: 11
---

# VST Plugins for MPC OS

> 💬 **Community:** join [**Open MPC** on Discord](https://discord.gg/sRRysZSgu3) for support, release announcements, plugin requests and MPC hacking.

Native plugins for **Akai MPC OS standalone devices** (MPC Live/One/X/Key, Force): a catalog to find and install them,
an installer app, and the tools to build, test and release your own.

> **MPC OS 2.x and 3.x.** Plugins here are built and tested on **MPC OS 3.x**. On **MPC OS 2.x** a plugin loads and its
> Q-Links work, but its touchscreen page only appears if the plugin's skin is written in the older format 2.x reads. The
> catalog checks from its files whether each release can work on 2.x, and marks one tested on a 2.x unit **MPC OS 2.x tested**
> (3.x, the standard, gets no badge); the installers warn before putting a 3.x-only plugin on a device that looks like 2.x.
> A 3.x-only plugin becomes 2.x-capable when its developer re-releases it with a compatible skin
> (how, and what the catalog checks: [MPC OS 2.x vs 3.x](#mpc-os-2x-vs-3x) below).

## Plugin catalog

**[Open MPC - Plugin Catalog](https://sd88me.github.io/mpc-vst-plugins/)**: one browsable list of the community's VST2
plugins for MPC OS,…
