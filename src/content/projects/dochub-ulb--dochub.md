---
repo: "DocHub-ULB/DocHub"
name: "DocHub"
description: "A student platform for ULB focused on real student collaboration "
readmeQualityOk: true
url: "https://github.com/DocHub-ULB/DocHub"
homepage: "https://dochub.be"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [62, 22]
topics: ["dochub", "urlab", "ulb", "cercle-informatique", "students"]
stars: 53
forks: 18
openIssues: 11
closedIssues: 104
watchers: 9
contributors: 23
recentReleases: 0
createdAt: "2012-11-29T10:19:19Z"
lastCommitAt: "2026-10-03T09:21:36Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 91
undervaluedScore: 50
maintainers: ["C4ptainCrunch", "mnietona"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/6918985/ffc86b00-77c8-11e9-826e-81165950370e"
---

# DocHub

DocHub is a website written in django. Its main goal is to provide a space for students
(for now form the [ULB](https://ulb.ac.be) university) to collaborate, help each other and distribute old exams and exercises.

There is a [live instance of DocHub](https://dochub.be) hosted by [UrLab](https://urlab.be) and the [Cercle Informatique](https://cerkinfo.be).

## Screenshots

## Tech

DocHub currently (Feb 2025) runs with Python 3.13 and Postgresql 16.

### Installation

If you install the packages listed above and follow the installation steps exactly, you should have a running version
of DocHub on your machine. If it's not the case, **you are not the problem**, it means we have a bug.

Please open an issue with the output of your console and describe the problem you encountered, we **will** and will fix
it for you and all the next users :rocket:

First, install uv and system dependencies:

```console
# Install uv
curl -LsSf https://astral.sh/uv/install.sh | sh

# Ubuntu
sudo apt-get install libreoffice pipx mupdf-tools libmagic1 redis-server
# unoserver needs access to LibreOffice's 'uno' library from system packages
pipx install unoserver --system-site-packages
sudo…
