---
repo: "parmaja/minilib"
name: "minilib"
description: "MiniLib Pascal/Delphi library"
readmeQualityOk: true
url: "https://github.com/parmaja/minilib"
language: "Pascal"
languages: ["Pascal"]
languagePcts: [92]
topics: ["pascal", "lazarus", "socket", "xml", "delphi", "comport", "db", "mysql", "sqlite", "postgresql"]
stars: 84
forks: 26
openIssues: 9
closedIssues: 6
watchers: 11
contributors: 4
recentReleases: 0
createdAt: "2019-12-08T11:44:26Z"
lastCommitAt: "2026-10-26T18:06:46Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 77
undervaluedScore: 44
maintainers: ["zaher", "belalhamed"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f1021f1c60836ed93ebddf3403613d63ac03bf15f443657f31637cd3f1eeb12/parmaja/minilib"
discussionCount: 0
---

## Mini Lib for Pascal ##

Pascal library, FreePascal 3.3 or later or DelphiXE

### Folders ###

lib: most common utils functions (MiniLib.lpk)

connection: it is a database wrappers for SQLite, FirebirdSQL, MySQL, PostgreSQL (MiniConnections.lpk).

socket: Socket tcp/ip client and server objects, includes webserver and simple REST server, and OpenSSL 1.1 support (MiniSockets.lpk).

xml: XML file/stream reader, line by line not use huge memory to parse it (MiniXML.lpk).

comm: ComPort like COM1 COM2 and serial ports (MiniComm.lpk).

### Compiler ###

Free Pascal 3.3

Delphi 13.x

### Install ###

#### Lazarus ####

Just open this packages (in order) and compile it in Lazarus IDE (Menu->Package-Open Package file (.lpk))

Main package used by other packages

    MiniLib.lpk

Usefull Packages

    MiniConnections.lpk
    MiniSockets.lpk
    MiniXML.lpk

Optional packages (rarly tested)

    MiniComm.lpk

### Branches ###

Use "release" branch for last stable code.

Use "master" branch for last update of code.

### Developers ###

Zaher Dirkey zaherdirkey at gmail dot com

Belal hamed belalhamed at gmail dot com
