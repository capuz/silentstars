---
repo: "HobbitDur/FF8UltimateEditor"
name: "FF8UltimateEditor"
description: "Big FF8 Tool to edit the game"
readmeQualityOk: true
url: "https://github.com/HobbitDur/FF8UltimateEditor"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 12
forks: 2
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-05-14T01:20:13Z"
lastCommitAt: "2026-10-24T08:21:15Z"
lastReleaseAt: "2024-06-06T20:14:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 72
maintainers: ["HobbitDur"]
openGraphImageUrl: "https://opengraph.githubassets.com/794596f1181308f278453b70a804a8ca6e635223049a2275a8771fcda0f7ca67/HobbitDur/FF8UltimateEditor"
---

# FF8 Ultimate Editor

**Fujin — Battle effect editor** brings MAG sections, cinematic scripts, executable camera
tracks and validated embedded assets into one workspace. See the [Fujin workflow](https://github.com/HobbitDur/FF8UltimateEditor/blob/HEAD/docs/fujin-effects.md).

A collection of tools for modding **Final Fantasy VIII** (PC/Remaster), all bundled behind one
launcher: `FF8UltimateEditor.exe` (or `python main.py`). Pick a tool from the "Hobbit tools" dropdown
at the top of the window, or launch one of the external programs from the toolbar next to it.

A command-line interface (`cli.py`) is also available for scripting text import/export without
opening the GUI (see [CLI](#cli) below).

Make your choice!

## Tools made by HobbitDur

These are built into the app and selected from the "Hobbit tools" dropdown.

### Ifrit — monster / battle model editor (`c0m*.dat`)
All-in-one editor for monster and summon battle files, organized as tabs sharing one file toolbar:
- **AI** — decompiles and edits monster AI scripts (conditions/commands) as readable pseudo-code.
- **Seq** — edits animation sequences (the byte-code that drives monster/summon animations).
- **3D** — views the…
