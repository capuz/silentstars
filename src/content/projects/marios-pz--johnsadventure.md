---
repo: "marios-pz/JohnsAdventure"
name: "JohnsAdventure"
description: "In a alternative universe were mythical monsters exist. A young boy named John started his adventure in a small little village named Porto Rafth. Participate in John's life and help him on his adventure."
readmeQualityOk: true
url: "https://github.com/marios-pz/JohnsAdventure"
language: "GDScript"
languages: ["GDScript"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-09-23T16:17:36Z"
lastCommitAt: "2026-09-25T09:02:50Z"
lastReleaseAt: "2023-02-01T15:42:02Z"
status: "thriving"
tags: []
healthScore: 100
undervaluedScore: 46
maintainers: ["marios-pz"]
openGraphImageUrl: "https://opengraph.githubassets.com/b486182333dc9c21e0a6fea7140b53e57047bf081e3084aba9f727677cf33cde/marios-pz/JohnsAdventure"
---

# John's Adventure: Chapter 1 (Godot 4 rework)

A top-down action RPG. John wakes up from a nightmare, trains with his mentor
Manos, and ends up fighting through shadow creatures and goblin caves after his
sister Cynthia is kidnapped.

This is a ground-up **rework of the original pygame game** (`../JohnsAdventure`).
The art, music and story come from the original. The code, level design and
game systems are new and built the Godot way: levels are scenes, content is
data, and gameplay code is small scripts.

- Engine: **Godot 4.7** (GDScript, Compatibility renderer, 1280×720, pixel-art filtering)
- Length: one chapter, roughly 20–30 minutes

---

## Running

1. Open `Rework/project.godot` in Godot 4.7 or newer.
2. Press **F5**. The game starts on the title screen (`ui/main_menu.tscn`).

*Continue* resumes the autosave. The save is `user://save.json`
(*Project → Open User Data Folder*), and deleting it gives you a fresh start. Level
scenes can be opened and edited in the editor, but they are played through
`main.tscn`, which adds John, the HUD and the save/quest state.

### Controls

Keyboard/mouse and controller both work at any time, and on-screen prompts
switch to the device you…
