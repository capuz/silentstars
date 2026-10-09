---
repo: "rsenn/qjs-modules"
name: "qjs-modules"
description: "Some modules for QuickJS (mmap, inspect)"
readmeQualityOk: true
url: "https://github.com/rsenn/qjs-modules"
language: "JavaScript"
languages: ["JavaScript", "C"]
languagePcts: [51, 43]
stars: 59
forks: 10
openIssues: 2
closedIssues: 1
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2021-02-12T03:05:39Z"
lastCommitAt: "2026-10-09T18:55:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 66
undervaluedScore: 46
maintainers: ["rsenn"]
openGraphImageUrl: "https://opengraph.githubassets.com/883332b5ed78d1a36ff7d2d4ace4c99c1bfcd06ddb2463e1994314802bd1792f/rsenn/qjs-modules"
---

# qjs-modules

qjs-modules builds `qjsm`, a [QuickJS](https://bellard.org/quickjs/)-based
interpreter with both native C modules and JavaScript modules statically
linked in. The modules themselves provide the runtime APIs plain QuickJS
doesn't: `console`, `fs`, `process`, streams, sockets, XML/DOM, and more,
modeled on their Node.js/Bun/Deno/browser equivalents so scripts written
for those runtimes need few changes to run here. Some native modules wrap
existing C libraries (libarchive, libmagic, the MariaDB/MySQL client,
libpq, SQLite, libserialport, a bundled libbcrypt); the rest, and most of
the JavaScript modules, are original implementations or ports of existing
JavaScript libraries.

Every module can also be built standalone as a shared library and
`import`ed at runtime by any QuickJS build, independent of `qjsm`. Each
`quickjs-*.c` file provides one native module.

## Overview

- **`qjsm`** — the interpreter binary this project builds (see
  [qjsm](#qjsm) below): QuickJS plus this project's modules statically
  linked in, so scripts get `console`, `fs`, `process`, and the rest
  without any setup.
- **Native C modules** (`quickjs-*.c`, [Module index](#module-index)
  below)…
