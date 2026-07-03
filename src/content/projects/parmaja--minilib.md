---
repo: "parmaja/minilib"
name: "minilib"
description: "MiniLib Pascal/Delphi library"
url: "https://github.com/parmaja/minilib"
language: "Pascal"
languages: ["Pascal"]
languagePcts: [92]
topics: ["pascal", "lazarus", "socket", "xml", "delphi", "comport", "db", "mysql", "sqlite", "postgresql"]
stars: 83
forks: 27
openIssues: 9
closedIssues: 5
watchers: 11
contributors: 2
recentReleases: 0
createdAt: "2019-12-08T11:44:26Z"
lastCommitAt: "2026-07-03T12:39:47Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 76
undervaluedScore: 44
maintainers: ["zaher", "belalhamed"]
openGraphImageUrl: "https://opengraph.githubassets.com/bce6722d95e42aa139bdffa14910bc65715338844d3f7486f12a1b251eb10fa5/parmaja/minilib"
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
