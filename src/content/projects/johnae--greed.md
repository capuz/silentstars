---
repo: "johnae/greed"
name: "greed"
description: "A modal text editor with Helix, Vim and VS Code keys and Luau plugins"
readmeQualityOk: true
url: "https://github.com/johnae/greed"
homepage: "https://greed.rs"
language: "Luau"
languages: ["Luau", "Rust"]
languagePcts: [62, 36]
stars: 38
forks: 0
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-10-10T09:16:46Z"
lastCommitAt: "2026-10-19T09:03:38Z"
lastReleaseAt: "2026-10-14T20:27:43Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 83
undervaluedScore: 43
maintainers: ["johnae"]
openGraphImageUrl: "https://opengraph.githubassets.com/264f6bbc8f9df694c330d76ec2d7e9a509c8e030eb12a2e8278f46d7c768b6c7/johnae/greed"
---

Greed is a modal text editor with Helix, Vim and VS Code keys, a shell,
terminals and agent support. It runs in a terminal or a window, locally or
over ssh. The core is a small Rust program; keys, modes, commands,
pickers, themes and the agent support are Luau plugins you can read,
change or replace while it runs.

```text
$ greed src/main.rs          # edit; the session keeps running if you detach
:detach                      # leave it running in the background
$ greed ls
myapp                /home/you/myapp
$ greed attach               # come back to it, here or in a window (--gui)
$ greed ctl focus            # ask the running editor what you're looking at
{ "path": "/home/you/myapp/src/main.rs", "mode": "normal", "style": "vim", "selections": [ ... ], ... }
```

The first time Greed starts it asks which editing style you want;
`:style` switches while it runs. Each style follows the editor it comes
from, down to text objects, registers, macros and counts.

- Vim: say what to do, then where: `d w`, `c i w`, `.` to repeat.
- Helix: select first, then act. `x` selects a line, `s` every regex match
  inside the selection, and typing edits all of them at once.
- VS Code: no modes,…
