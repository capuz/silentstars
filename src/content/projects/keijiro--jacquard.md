---
repo: "keijiro/Jacquard"
name: "Jacquard"
description: "Jacquard: Tile-based procedural music sequencer"
readmeQualityOk: true
url: "https://github.com/keijiro/Jacquard"
language: "C#"
languages: ["C#"]
languagePcts: [97]
stars: 49
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-07-30T12:32:51Z"
lastCommitAt: "2026-08-15T04:03:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 31
maintainers: ["keijiro"]
openGraphImageUrl: "https://opengraph.githubassets.com/464a2494f4e024156dc8a0c54cb395f5ca0358b76ef83f5212a268f7c41d1f6b/keijiro/Jacquard"
---

Jacquard
========

A prototype grid sequencer. Lanes of steps are laid out anywhere on one plane; a
step stacks what happens at the same instant; gates, parameter locks and jumps
turn sixteen slots into something that changes as it repeats.

Built with Unity 6.5 (6000.5.8f1). Open the project and play `Assets/Main.unity`.

The synth runs on the Scriptable Audio Pipeline, which the Web platform does not
support; there the same DSP is rendered from `Update` and pushed to the Web Audio
API instead, at the cost of about 110ms more latency before a note can sound.
Nothing else differs, and no setting selects it.

Using it
--------

| Action | How |
| --- | --- |
| Move the cursor | Click a cell, or the arrow keys |
| Write a note | The `NOTE` button the Tile panel offers on a free cell |
| Transpose a note | Shift+up/down for a semitone, add command for an octave, which rewrites the tile |
| Add a gate or a lock | The buttons the Tile panel offers on a free cell |
| Which laps a cycle gate fires on | Its Period, and the switch per lap under it |
| Remove a tile | Delete on the Tile panel, or the delete key |
| Move a tile | Drag it; within its own step that reorders the stack |
| Move…
