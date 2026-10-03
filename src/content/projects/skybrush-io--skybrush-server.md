---
repo: "skybrush-io/skybrush-server"
name: "skybrush-server"
description: "Server component for Skybrush, an open-source drone light show and drone swarm management framework"
readmeQualityOk: true
url: "https://github.com/skybrush-io/skybrush-server"
homepage: "https://skybrush.io"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["drone", "drone-show", "drone-swarm", "skybrush", "uav"]
stars: 128
forks: 77
openIssues: 0
closedIssues: 9
watchers: 8
contributors: 6
recentReleases: 0
createdAt: "2022-05-09T08:53:34Z"
lastCommitAt: "2026-10-03T22:03:43Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 92
undervaluedScore: 52
maintainers: ["ntamas", "volfpeter", "isti115"]
openGraphImageUrl: "https://opengraph.githubassets.com/13a8c802a9b03485296b9f553adb0524627acf061eee6aab9e9c24f0a294a836/skybrush-io/skybrush-server"
---

# Skybrush Server

Skybrush Server is the server component behind the Skybrush ecosystem; it handles
communication channels to drones and provides an abstraction layer on top of them
so frontend apps (like Skybrush Live) do not need to know what type of drones
they are communicating with.

The server also provides additional facilities like clocks, RTK correction
sources, weather providers and so on. It is extensible via extension modules
that can be loaded automatically at startup or dynamically while the server is
running. In fact, most of the functionality in the server is implemented in the
form of extensions; see the `flockwave.server.ext` module in the source code
for the list of built-in extensions. You may also develop your own extensions to
extend the functionality of the server.

## Installation

1. Install `uv`. `uv` will manage a virtual environment for this project to keep
   things nicely separated. You won't pollute the system Python with the
   dependencies of the Skybrush server and everyone will be happier.
   See <https://docs.astral.sh/uv/> for installation instructions.

2. Check out the source code of the server.

3. Run `uv sync` to install all the…
