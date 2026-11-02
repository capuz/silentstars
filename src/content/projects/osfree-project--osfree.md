---
repo: "osfree-project/osfree"
name: "osfree"
description: "osFree - open source Operating System/2 clone, usermode parts."
readmeQualityOk: true
url: "https://github.com/osfree-project/osfree"
homepage: "http://osfree.org"
language: "C"
languages: ["C"]
languagePcts: [78]
topics: ["osfree", "os2", "operating-system", "osdev", "opensource", "openwatcom", "regina-rexx", "userland"]
stars: 151
forks: 13
openIssues: 15
closedIssues: 10
watchers: 21
contributors: 8
recentReleases: 0
createdAt: "2018-02-24T21:36:31Z"
lastCommitAt: "2026-11-02T15:17:47Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 87
undervaluedScore: 40
maintainers: ["prokushev"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e04c2dced6ca0ef378b3349c7a07ce0bd6050bf812f34e8db61ef35909cff30/osfree-project/osfree"
---

## osFree, Open Source OS/2 Clone

osFree(OS/3): The reincarnation of OS/2.



Английский:

English:

# Getting the source code

osFree sources consist of the main Git repository and several submodules.
The main git repo is osfree, and submodules are:

FamilyAPI, MacroLib, fat32, jfs, os3 and others.

Hence, you need to clone the main osfree repo first, and then
pull the submodules:

> git clone https://github.com/osfree-project/osfree.git

> git submodule update --init --recursive --remote

Update from repositories:

> git pull

> git submodule update --init --recursive --remote

# osFree build system

First, start %root%\\conf\\scripts\\_setup.{cmd|sh|bat}, to pull the build dependencies.
After finishing the script work, you can start build with _wcc.{sh|cmd}.

Under Windows host you can just execute _wcc.cmd from repository root. _setup.cmd will be executed automatically.

Note that _wcc.cmd autodetects OS (OS/2, win32 or win64).

Generally, we use .bat scripts specific for windows, .cmd specific to OS/2, and
.sh specific to UNIX/Linux.

---

Русский:

Russian:

# Получение исходников

Исходные коды osFree состоят из главного…
