---
repo: "libguestfs/hivex"
name: "hivex"
description: "windows registry hive extraction library.  PLEASE DO NOT USE GITHUB FOR ISSUES OR PULL REQUESTS. See the website for how to file a bug or contact us.  http://libguestfs.org"
readmeQualityOk: true
url: "https://github.com/libguestfs/hivex"
homepage: "http://libguestfs.org/hivex.3.html"
language: "C"
languages: ["C", "OCaml"]
languagePcts: [39, 35]
stars: 156
forks: 41
openIssues: 4
closedIssues: 11
watchers: 13
contributors: 35
recentReleases: 0
createdAt: "2012-01-10T14:42:19Z"
lastCommitAt: "2026-11-02T11:36:32Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 77
undervaluedScore: 27
maintainers: ["rwmjones", "ema-pe", "adem4ik"]
openGraphImageUrl: "https://opengraph.githubassets.com/af8d310e71b26caeb46b182d0228d50f5dab0210138ff53b30c26eddc1f7b7f0/libguestfs/hivex"
---

## hivex - a library for reading and writing Windows Registry "hive" files

Written by Richard W.M. Jones, rjones@redhat.com
Copyright (C) 2009-2022 Red Hat Inc.

This is a self-contained library for reading and writing Windows
Registry "hive" binary files.

Unlike many other tools in this area, it doesn't use the textual .REG
format for output, because parsing that is as much trouble as parsing
the original binary format.  Instead it makes the file available
through a C API, or there is a separate program to export the hive as
XML.

This library was derived from several sources:

* NTREG registry reader/writer library by Petter Nordahl-Hagen
   (LGPL v2.1 licensed library and program)
* http://pogostick.net/~pnh/ntpasswd/WinReg.txt
* dumphive (a BSD-licensed Pascal program by Markus Stephany)
* http://www.sentinelchicken.com/data/TheWindowsNTRegistryFileFormat.pdf
* editreg program from Samba - this program was removed in later
  versions of Samba, so you have to go back in the source repository
  to find it (GPLv2+)
* http://amnesia.gtisc.gatech.edu/~moyix/suzibandit.ltd.uk/MSc/
* reverse engineering the format (see lib/tools/visualizer.ml)

Like NTREG, this library only…
