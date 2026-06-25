---
repo: "GrayWolf64/imgui-lua"
name: "imgui-lua"
description: "ImGui Sincerely: Bloat-free Graphical User Interface written in pure Lua with minimal dependencies!"
url: "https://github.com/GrayWolf64/imgui-lua"
language: "Lua"
languages: ["Lua"]
languagePcts: [100]
topics: ["garrysmod", "gmod", "imgui", "truetype", "lua", "luajit", "game-development", "gui", "immediate-gui", "toolkit"]
stars: 14
forks: 2
openIssues: 7
closedIssues: 6
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-11-24T00:23:58Z"
lastCommitAt: "2026-06-25T01:37:51Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 88
undervaluedScore: 45
maintainers: ["GrayWolf64"]
openGraphImageUrl: "https://opengraph.githubassets.com/59cb18cec05f62df64d22ee88aa4257658df31462dad5fbd19cd1c39d7ff8c9e/GrayWolf64/imgui-lua"
---

# ImGui Sincerely

> "Give someone state and they'll have a bug one day, but teach them how to represent state in two separate locations that have to be kept in sync and they'll have bugs for a lifetime." - ryg

## Progress

_This image may be outdated!_ 

| Subsystems | Stage                            |
| ---------- | -------------------------------- |
| Fonts(ttf) | Completed, syncing with `main`   |
| Fonts(otf) | Not planned                      |
| Viewports  | Completed, syncing with `docking`|
| Windows    | WIP                              |
| Docking    | Maybe soon                       |
| Widgets    | WIP                              |
| Backends   | Currently only have GMod backend |

Loading [FreeType](https://github.com/freetype/freetype) fonts and `Docking` might be too advanced for GMod/Games that enable Lua scripting. I don't think people need that. And they take a lot of time to re-write in Lua so anybody can resort to real binary modules!

### Notes

Roadmap and task list: [TODO](misc/TODO.md)

Things to pay attention to: [PORT](misc/PORT.md)

Please refer to official Dear ImGui docs or src code comments for documentation!

### How to Try it in GMOD?

1. Clone…
