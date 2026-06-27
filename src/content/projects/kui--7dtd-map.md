---
repo: "kui/7dtd-map"
name: "7dtd-map"
description: "Map renderer for 7 Day to Die"
url: "https://github.com/kui/7dtd-map"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
stars: 66
forks: 9
openIssues: 6
closedIssues: 56
watchers: 7
contributors: 2
recentReleases: 0
createdAt: "2018-12-01T12:11:58Z"
lastCommitAt: "2026-06-27T00:35:18Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 50
maintainers: ["kui"]
openGraphImageUrl: "https://opengraph.githubassets.com/18a6ef6acb84acc6ac4189a4400f28563c4333030c9c4d9c5360192f127bb0f8/kui/7dtd-map"
---

# 7DtD Map Renderer

Map renderer for 7 Day to Die.

- https://kui.github.io/7dtd-map/

## Build

Linux, macOS, and Windows are supported.

1. Point the project at your installed copy of the game by creating a
   `tools/vanilla` link at the project root. The path is wired into `deno task`
   input-based caching, so it must be a static project-local path — not a
   runtime config file. Pick the command for your OS:

   - **macOS / Linux** (symlink):

     ```
     ln -s "/Users/<UserName>/Library/Application Support/Steam/steamapps/common/7 Days To Die/7DaysToDie.app" tools/vanilla
     ```

     Linux Steam example:

     ```
     ln -s "$HOME/.local/share/Steam/steamapps/common/7 Days To Die" tools/vanilla
     ```

   - **Windows** (directory junction, no admin required). Run from the project
     root in `cmd.exe`:

     ```
     mklink /J tools\vanilla "C:\Program Files (x86)\Steam\steamapps\common\7 Days To Die"
     ```

     Or in PowerShell:

     ```
     New-Item -ItemType Junction -Path tools\vanilla -Target "C:\Program Files (x86)\Steam\steamapps\common\7 Days To Die"
     ```

2. Execute in your terminal:

   ```
   deno task build
   ```

   On a second run the tasks…
