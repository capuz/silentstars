---
repo: "Timwi/KtaneContent"
name: "KtaneContent"
description: "Contains all the content hosted on https://ktane.timwi.de, including all manuals and their fonts and graphics files, the Logfile Analyzer, the Highlighter, the Profile Editor, the Mode Settings Editor. The server-side code is at https://github.com/Timwi/KtaneWeb."
readmeQualityOk: true
url: "https://github.com/Timwi/KtaneContent"
language: "HTML"
languages: ["HTML"]
languagePcts: [98]
topics: ["ktane", "keep-talking-and-nobody-explodes", "manuals", "bomb-defusal", "gaming"]
stars: 51
forks: 149
openIssues: 7
closedIssues: 13
watchers: 5
contributors: 145
recentReleases: 0
createdAt: "2017-05-15T14:59:05Z"
lastCommitAt: "2026-07-05T20:54:41Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 59
maintainers: ["llPlayll", "Timwi", "PossessedHood416"]
openGraphImageUrl: "https://opengraph.githubassets.com/dbfdb48de8d138111c8e7db5da6a3cdc2219c5ba7a096134bb08b5097c7f79b3/Timwi/KtaneContent"
---

# KTANE Content

This repository contains the files that are hosted on https://ktane.timwi.de/. It does not contain the software that runs the server; this is hosted in https://github.com/Timwi/KtaneWeb.

The various folders in this repository are:

## `HTML`, `PDF`

Contains HTML and PDF versions of all the KTANE module manuals and cheat sheets.

## `HTML/img`

Contains image files used _both_ by the manuals as well as the website proper. The component SVGs (the graphics in the top-right corner of every manual) are stored in `HTML/img/Component`. All other graphics for a specific manual are stored in a subfolder by the module’s name. The graphics directly in `HTML/img` are either shared by all manuals (e.g. the background images) or used by the website.

## `HTML/js`

Contains the JavaScript used by the manuals that enables the highlighting features, as well as external libraries such as jQuery UI.

## `JSON`

Contains JSON files about each module's various pieces of information such as: name, description, source code, release date, steam workshop ID, etc.

## `Icons`

Contains the module icons. Each icon should be 32×32 pixels, use alpha transparency, and preferably be…
