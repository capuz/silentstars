---
repo: "koreader/koreader-base"
name: "koreader-base"
description: "Base framework offering a Lua scriptable environment for creating document readers"
readmeQualityOk: true
url: "https://github.com/koreader/koreader-base"
homepage: "http://koreader.rocks/"
language: "Lua"
languages: ["Lua", "C"]
languagePcts: [62, 23]
topics: ["mupdf", "djvu", "epub", "pdf", "luajit", "lua", "koreader", "ubuntu", "sdl", "emulator"]
stars: 233
forks: 183
openIssues: 7
closedIssues: 85
watchers: 21
contributors: 103
recentReleases: 0
createdAt: "2013-03-24T10:15:18Z"
lastCommitAt: "2026-11-01T10:44:59Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 47
maintainers: ["benoit-pierre", "AcidWeb", "Commodore64user"]
openGraphImageUrl: "https://opengraph.githubassets.com/06b72803ec7823f9bf1b21f2b188e1fa664f63b3692ac31cb42e2bd470c2fe3d/koreader/koreader-base"
---

## koreader-base [](https://circleci.com/gh/koreader/koreader-base)

This is the base framework for creating document readers like KOReader,
an e-ink device oriented reader application for various document formats.

It uses the MuPDF library (see http://mupdf.com/), djvulibre library,
CREngine library, libk2pdfopt library and it is scripted using Lua (see
http://www.lua.org/). To gain good speed at that, it uses the LuaJIT compiler.

It all started as the KindlePDFviewer application, which has since been
greatly enhanced and now reflects this in having a new name, KOReader.

The code is distributed under the GNU AGPL v3 license (read the [COPYING](https://github.com/koreader/koreader-base/blob/HEAD/COPYING) file).

## Building

Follow these steps:

* automatically fetch thirdparty sources with Makefile:
  * make sure you have `patch`, `wget`, `unzip`, `git` and `svn` installed
  * run `make fetchthirdparty`.
* run `make TARGET=kindlehf` For kindle models running FW >= 5.16.3 (Paperwhite 4 and later)

* or run `make TARGET=kindlepw2` For Kindle models >= Paperwhite 2.

* or run `make TARGET=kindle` For Kindle models >= Kindle 4 < Paperwhite 2.

* or run `make TARGET=kindle-legacy`…
