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
lastCommitAt: "2026-10-29T12:26:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 92
undervaluedScore: 54
maintainers: ["fiorine"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e7737a769abf2c48572628ff230c9ab87b7f5c078a7a10eeb185056a2647faa/dreamland-mud/dreamland_code"
---

# DreamLand MUD, developer guide

---

How to build and run:
* On Ubuntu 18.04 or 20.04 (real or virtual machine): follow the instructions below.
* On Windows 10: follow [this instruction](https://github.com/dreamland-mud/dreamland_code/wiki/WSL-and-VS-Code) for Windows Subsystem for Linux and the VS Code editor.
* In a Docker environment: build a ready-to-use Docker container as described in the Readme of the [dreamland_docker](https://github.com/dreamland-mud/dreamland_docker) project.
* In an online development environment in the browser: [Goorm Online IDE](https://github.com/dreamland-mud/dreamland_code/wiki/Goorm-IDE) or https://gitpod.io.

**Contents**
* [Running a local version](#local)
   * [Environment setup](#env)
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
* [Wiki…
