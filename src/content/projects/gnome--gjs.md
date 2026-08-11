---
repo: "GNOME/gjs"
name: "gjs"
description: "Read-only mirror of https://gitlab.gnome.org/GNOME/gjs"
readmeQualityOk: true
url: "https://github.com/GNOME/gjs"
homepage: "https://gitlab.gnome.org/GNOME/gjs"
language: "C++"
languages: ["C++", "JavaScript"]
languagePcts: [52, 41]
stars: 181
forks: 30
openIssues: 0
closedIssues: 0
watchers: 15
contributors: 143
recentReleases: 0
createdAt: "2012-06-08T18:40:39Z"
lastCommitAt: "2026-08-11T04:49:30Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 77
undervaluedScore: 40
maintainers: ["ptomato", "dubstar-04", "AndreNijman"]
openGraphImageUrl: "https://opengraph.githubassets.com/595b5fb28e71bfbe314f76799aa2f1df586a032c1c1f37a9b82b84ed1419be89/GNOME/gjs"
---

GNOME JavaScript
=============================

GJS is a JavaScript runtime built on
[Firefox's SpiderMonkey JavaScript engine](https://spidermonkey.dev/) and
the [GNOME platform libraries](https://developer.gnome.org/).

Use the GNOME platform libraries in your JavaScript programs.
GJS powers GNOME Shell, Maps, Characters, Sound Recorder and many other apps.

If you would like to learn more or get started with GJS, head over to the [documentation](https://github.com/GNOME/gjs/blob/HEAD/doc/Home.md).

## Installation

Available as part of your GNOME distribution by default.
In most package managers the package will be called `gjs`.

## Usage

GJS includes a command-line interpreter, usually installed in
`/usr/bin/gjs`.
Type `gjs` to start it and test out your JavaScript statements
interactively.
Hit Ctrl+D to exit.

`gjs filename.js` runs a whole program.
`gjs -d filename.js` does that and starts a debugger as well.

There are also facilities for generating code coverage reports.
Type `gjs --help` for more information.

`-d` only available in gjs >= 1.53.90

## Contributing

For instructions on how to get started contributing to GJS, please read
the contributing guide,…
