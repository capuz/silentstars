---
repo: "indexdata/yaz"
name: "yaz"
description: "Z39.50 toolkit for C"
readmeQualityOk: true
url: "https://github.com/indexdata/yaz"
homepage: "https://www.indexdata.com/yaz"
language: "C"
languages: ["C"]
languagePcts: [91]
stars: 47
forks: 21
openIssues: 3
closedIssues: 47
watchers: 17
contributors: 19
recentReleases: 0
createdAt: "2016-01-06T09:40:17Z"
lastCommitAt: "2026-11-07T10:36:26Z"
lastReleaseAt: "2018-05-04T18:34:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 58
maintainers: ["adamdickmeiss", "PPN-SD"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c0916262885459b31ae730b07b55057ab3777d7712539c0ce6625b245ed267c/indexdata/yaz"
discussionCount: 1
---

# YAZ toolkit

Copyright (C) 1995-2026 Index Data.
See the file LICENSE for details.

The primary output of the source here is the
[YAZ](https://www.indexdata.com/yaz) library, which contains support
functions for implementing the server or client role of Z39.50 and SRU.

## Documentation

For more information about YAZ refer to the documentation in sub
directory `doc` or
[online](https://www.indexdata.com/yaz/doc).

## Cloning

It's easiest to compile this software by using the source tar provided
for official releases.
Refer to ["release downloads"](https://ftp.indexdata.com/pub/yaz/).

If you want to clone and compile from Git, it's more complicated. Firstly, you need to clone with submodules.
You need autoconf tools - such
as autoconf, automake, libtool. For compilation besides the obvious
C compiler (gcc, clang) and `make` you also need xsltproc, tcl, docbook xml.
The `buildconf.sh` script creates `configure` and the
Makefile templates.

For Debian based systems, read `debian/control` and install
what's listed in `Build-Depends`. For RPM based systems, read
`yaz.spec` and what's listed in `BuildRequires`.

    $ git clone --recursive https://github.com/indexdata/yaz.git
    $…
