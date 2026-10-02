---
repo: "alexishachemi/godot-smc"
name: "godot-smc"
description: "A Finite State Machine and Component Manager for Godot 4.7+"
readmeQualityOk: true
url: "https://github.com/alexishachemi/godot-smc"
homepage: "https://godotengine.org/asset-library/asset/3744"
language: "GDScript"
languages: ["GDScript"]
languagePcts: [99]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2024-08-26T17:18:26Z"
lastCommitAt: "2026-10-02T10:00:17Z"
lastReleaseAt: "2026-09-25T16:10:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 62
maintainers: ["alexishachemi"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7308c7f6c1ae5270d9a63bf07815c3b550f715fdf2645e86d161eec2f29e62f/alexishachemi/godot-smc"
---

# Godot - State Machine & Components

SMC is a Godot plugin that adds dependency injection systems with an integrated finite state machine.

**For Godot 4.7+**

## Installation

To add the addon, copy the `addons` folder into the root of your project. Then, in *Project Settings*, tick the enabled box.

Optionally, you may include a copy of the `script_templates` folder into the root of your project to be able to use the
provided templates when creating scripts.

## Scripts

This part lists the scripts that are meant to be subclassed when creating custom nodes for the plugin.

- <img src="addons\smc\icons\state.png" width="15"/> **SMCState**

    States allows for isolated code to run under certain conditions.
	Any user-created state must subclass the *SMCState* class to work with the state machine. The class contains common data and helper methods as well as the methods to override when creating a new state (i.e. _initialize, _enter, _exit...).

- <img src="addons\smc\icons\component.png" width="15"/> **SMCComponent**

    Components are used to break down systems and data into individual parts that can then be reused for multiple entites.
	Any user-created component must subclass…
