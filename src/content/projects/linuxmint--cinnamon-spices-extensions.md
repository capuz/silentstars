---
repo: "linuxmint/cinnamon-spices-extensions"
name: "cinnamon-spices-extensions"
description: "Extensions for the Cinnamon desktop"
readmeQualityOk: true
url: "https://github.com/linuxmint/cinnamon-spices-extensions"
homepage: "http://cinnamon-spices.linuxmint.com"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [79]
stars: 152
forks: 154
openIssues: 83
closedIssues: 117
watchers: 14
contributors: 96
recentReleases: 0
createdAt: "2017-01-19T13:53:39Z"
lastCommitAt: "2026-08-03T06:42:45Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 87
undervaluedScore: 50
maintainers: ["haggen88", "Alan01", "klangman"]
openGraphImageUrl: "https://opengraph.githubassets.com/c6c52d44d88e1140b219d6afe047a571ae347d69eaae5c82f67491a5307be442/linuxmint/cinnamon-spices-extensions"
---

# cinnamon-spices-extensions

This repository hosts all the extensions available for the Cinnamon desktop environment.

Users can install spices from https://cinnamon-spices.linuxmint.com, or directly from within Cinnamon -> System Settings.

# Definitions

## UUID

Each spice is given a name which uniquely identifies them.

That name is their UUID and it is unique.

## Author

Each spice has an author.

The github username of the author is specified in the spice's info.json file.

# File structure

A spice can contain many files, but it should have the following file structure:

- UUID/
- UUID/info.json
- UUID/screenshot.png
- UUID/README.md
- UUID/files/
- UUID/files/UUID
- UUID/files/UUID/metadata.json
- UUID/files/UUID/extension.js
- UUID/files/UUID/icon.png

There are two important directories:

- UUID/ is the root level directory, it includes files which are used by the website and on github.
- UUID/files/ represents the content of the ZIP archive which users can download from https://cinnamon-spices.linuxmint.com or which is sent to Cinnamon when installing the spice from System Settings. This is the content which is interpreted by Cinnamon itself.

As you can see, the…
