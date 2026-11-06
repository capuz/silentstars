---
repo: "nathanj/spirit-island-pbp"
name: "spirit-island-pbp"
description: "Spirit Island PBP Helper"
readmeQualityOk: true
url: "https://github.com/nathanj/spirit-island-pbp"
language: "Python"
languages: ["Python"]
languagePcts: [89]
stars: 8
forks: 11
openIssues: 11
closedIssues: 70
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2022-01-22T22:30:36Z"
lastCommitAt: "2026-11-06T11:24:04Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 95
undervaluedScore: 85
maintainers: ["petertseng"]
openGraphImageUrl: "https://opengraph.githubassets.com/987b2a4c024a9e126c1a9bbabcb149afbcc2c9fed68b81fecc5aa8be8d178123/nathanj/spirit-island-pbp"
---

# Spirit Island PBP Helper

A website to assist playing Spirit Island over discord in the play by post section.

## Pre-requisites

Ensure that you've installed [Python](https://www.python.org/downloads/) and [uv](https://docs.astral.sh/uv/getting-started/installation/) before starting.

## Important files

In rough order of importance (most important files first):

* `pbf/views.py` - implementation of all of the HTTP endpoints
* `pbf/models.py` - logic for objects like games, players, cards, and spirits
* `pbf/templates/*.html` - HTML for the player-facing UI.
  * `game.html` - page for a game, including screenshots, player tabs, and host actions
  * `player.html` - each individual player's tab, containing their spirit panel, energy, hand, etc.
  * `setup.html` - game setup page (add a spirit, change player name, change scenario, etc.)
  * `index.html` - landing page (create a new game, import a game)
  * `base.html` - base template extended by others; includes the CSS and JS libraries used
* `island/urls.py` - definition of HTTP endpoints and the functions in `pbf/views.py` they correspond to
* `pbf/tests.py` - tests that can be run locally (see below [Test](#test) section for…
