---
repo: "aimms/documentation"
name: "documentation"
description: "AIMMS Documentation is published at https://documentation.aimms.com/. AIMMS Documentation is a help resource containing detailed product documentation and other reference materials including user guide, function list, modeling manual, language reference."
readmeQualityOk: true
url: "https://github.com/aimms/documentation"
language: "Python"
languages: ["Python"]
languagePcts: [67]
topics: ["sphinx", "aimms", "documentation", "python"]
stars: 5
forks: 3
openIssues: 1
closedIssues: 2
watchers: 3
contributors: 31
recentReleases: 0
createdAt: "2021-03-15T14:00:17Z"
lastCommitAt: "2026-09-03T08:13:35Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 92
undervaluedScore: 80
maintainers: ["TrushaShah", "MarcelHunting", "FergusHathorn"]
openGraphImageUrl: "https://opengraph.githubassets.com/0cd68da8e473c2b5421d183dd5b6f93b77b5275f29e9847a9d146ddca9ff5a04/aimms/documentation"
---

# Table of Contents
* [Clone and Navigate the repo on your computer](#clone-and-navigate-the-repo-on-your-computer)
* [Build Locally the HTML documentation](#build-locally-the-html-documentation)
* [The Pipeline (optional)](#the-pipeline)
* [Style guide](#style-guide)
* [Prereq's to build a PDF version (optional)](#prereqs-to-build-a-pdf-version-optional)

Clone and Navigate the repo on your computer
---------------------------------------------

If you make it here, it means you have access right to the How-To git repo. Thus you may "clone" it somewhere on your computer ([like this](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository). This will copy all files from the server onto your computer.

You may notice that the documentation in itself (the text) is located in the folders from ``cdm`` till ``webui``. All the rest are actually configuration and support folders and files.

Build Locally the HTML documentation
--------------------------------------

**Requirements:**
 - [Python 3.X](https://www.python.org/downloads/)
 - [Sphinx package](http://www.sphinx-doc.org/en/master/) (run `python3 -m pip install sphinx`)
 - [Sphinx…
