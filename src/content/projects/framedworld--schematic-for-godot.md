---
repo: "Framedworld/schematic-for-godot"
name: "schematic-for-godot"
description: "Schematic: visual scripting for Godot 4. Wire nodes, get plain GDScript."
readmeQualityOk: true
url: "https://github.com/Framedworld/schematic-for-godot"
language: "GDScript"
languages: ["GDScript"]
languagePcts: [87]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-11-14T04:07:59Z"
lastCommitAt: "2026-11-17T14:40:57Z"
lastReleaseAt: "2026-11-17T14:45:35Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 80
undervaluedScore: 40
maintainers: ["Framedworld"]
openGraphImageUrl: "https://opengraph.githubassets.com/47330919f9404e68d216fa6dd2ce36292838970aad933f0be061c14063f2ba7b/Framedworld/schematic-for-godot"
---

**Visual scripting for Godot 4. You wire nodes; it writes the GDScript you would have written.**

*One schematic runs this whole machine: it is `demo/machine`. [Watch the video at full quality](https://github.com/Framedworld/schematic-for-godot/blob/HEAD/docs/video/schematic_machine.mp4),
or [the one-minute tour of everything](https://github.com/Framedworld/schematic-for-godot/blob/HEAD/docs/video/schematic_tour.mp4).*

Schematic is an editor plugin for building game logic as graphs of nodes and wires. There is no custom engine build, no runtime library and no new file
type: a Schematic is an ordinary `.gd` script, so it attaches to nodes, exports variables to the Inspector,
registers a `class_name`, and is called from hand-written code like any other script.

Needs Godot 4.6 or later. Tested on stock Godot 4.6 and 4.7.1 and on a 4.8 development build; older versions have
not been tried, and on 4.3 the plugin does not load.

## A Schematic is a GDScript file

The graph compiles to plain, readable GDScript, and the graph itself is kept in the same file as a comment
block. What runs in your game is the code on the right: no interpreter and no per-node cost. Turn the plugin
off and…
