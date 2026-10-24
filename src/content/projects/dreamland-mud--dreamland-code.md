---
repo: "dreamland-mud/dreamland_code"
name: "dreamland_code"
description: "DreamLand MUD: server code"
originalDescription: "DreamLand MUD: server code"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/dreamland-mud/dreamland_code"
language: "C++"
languages: ["C++"]
languagePcts: [97]
topics: ["mud", "mud-server", "plugin-system", "xml", "websockets", "dreamland-mud", "mud-engine"]
stars: 42
forks: 16
openIssues: 10
closedIssues: 16
watchers: 4
contributors: 15
recentReleases: 0
createdAt: "2018-08-02T08:42:43Z"
lastCommitAt: "2026-10-24T00:15:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 92
undervaluedScore: 54
maintainers: ["fiorine"]
openGraphImageUrl: "https://opengraph.githubassets.com/b7c43063d613187ba31f0c3be80981e98eb06258ef7daf3b1faa10aa76e3b946/dreamland-mud/dreamland_code"
---

# DreamLand MUD, developer guide

---

How to build and run:
* On Ubuntu 18.04, 20.04 (real or virtual machine): follow the instructions below.
* On Windows 10: follow [this instruction](https://github.com/dreamland-mud/dreamland_code/wiki/WSL-and-VS-Code) for the Windows Subsystem for Linux and the VS Code editor.
* In a Docker environment: build a ready-to-use Docker container, as described in the Readme of the [dreamland_docker](https://github.com/dreamland-mud/dreamland_docker) project.
* In online browser-based development environments: [Goorm Online IDE](https://github.com/dreamland-mud/dreamland_code/wiki/Goorm-IDE) or https://gitpod.io.

**Contents**
* [Running the local version](#local)
   * [Preparing the environment](#env)
   * [Building from source](#build)
   * [Installing dreamland_world](#areas)
   * [Starting the server](#run)
   * [Viewing logs](#logs)
   * [Entering the world](#telnet)
* [Working with the repository](#git)
   * [Forking the repository](#fork)
   * [Making changes](#push)
   * [Pull requests](#pull)
   * [Syncing with the parent repository](#uptodate)
* [Development](#dev)
   * [Rebuilding the 'core'](#core)
   * [Rebuilding plugins](#plugin)
*…
