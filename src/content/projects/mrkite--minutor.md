---
repo: "mrkite/minutor"
name: "minutor"
description: "Mapping for Minecraft"
readmeQualityOk: true
url: "https://github.com/mrkite/minutor"
homepage: "http://seancode.com/minutor"
language: "C"
languages: ["C", "C++"]
languagePcts: [73, 23]
stars: 316
forks: 53
openIssues: 13
closedIssues: 153
watchers: 22
contributors: 19
recentReleases: 0
createdAt: "2012-03-06T18:21:11Z"
lastCommitAt: "2026-09-13T08:29:28Z"
lastReleaseAt: "2024-10-05T16:58:46Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 87
undervaluedScore: 31
maintainers: ["EtlamGit", "Kolcha", "terbin"]
openGraphImageUrl: "https://opengraph.githubassets.com/99363cdc76a01f9b5c840f1f139c30543a69afdad2d4399bebada81fcff3a000/mrkite/minutor"
---

This is the source code for Minutor 2.1
web/ contains the source code for the web-based pack builder.  The live version
can be found at http://seancode.com/minutor/packs

The Makefile inside web/ will use the Closure Compiler to compile all the .js files
into a single editor.min.js.  To host the pack builder on your own website, you
only need editor.min.js, index.html, main.css, and the mods/ folder.

CONVENTIONS:
------------

The coding convetion is standardized on the result of Google's cpplint.
https://github.com/google/styleguide/tree/gh-pages/cpplint

We also use clang's static analyzer.  The options tested are in `check.sh`.

COMPILING:
---------

[Is described in the Wiki](https://github.com/mrkite/minutor/wiki/How-to-Build-yourself-from-source)
