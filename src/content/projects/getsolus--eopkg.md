---
repo: "getsolus/eopkg"
name: "eopkg"
description: "eopkg - Solus package manager implemented in python3"
url: "https://github.com/getsolus/eopkg"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 17
forks: 18
openIssues: 29
closedIssues: 57
watchers: 10
contributors: 28
recentReleases: 0
createdAt: "2018-09-18T02:15:35Z"
lastCommitAt: "2026-06-26T23:42:42Z"
lastReleaseAt: "2024-07-19T21:08:02Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "funded", "fork_magnet"]
healthScore: 91
undervaluedScore: 69
maintainers: ["joebonrichie", "transifex-integration[bot]", "EbonJaeger"]
openGraphImageUrl: "https://opengraph.githubassets.com/d091b66590f4bdb21a6b3740f1117f5da8746c964396c4fb4c26889af11cc7fb/getsolus/eopkg"
fundingLinks: ["GITHUB:https://github.com/getsolus", "OPEN_COLLECTIVE:https://opencollective.com/getsolus"]
---

# eopkg package manager

Fork of the PiSi Package Manager, originally from Pardus Linux, and adapted/maintained during the lifetime of SolusOS, EvolveOS and Solus.

The python3 port is now the main development branch.

## FilesDB on-disk version format 4

From version 4.1.5, eopkg.py3/bin will be using a FILESDB_FORMAT_VERSION = 4 versioned gdbm/dbm.gnu format
`/var/lib/eopkg/info/files.db` database, and will auto-regen its FilesDB cache if it encounters
anything but the above.

In earlier versions, eopkg.py3 was using an unversioned gdbm/dbm.gnu format `/var/lib/eopkg/info/files.db` database.

This implies that from version 4.1.5 and forward, eopkg.py3/bin will need to be built with gdbm support, but no
longer needs to be built with bsddb/db5 support (for which upstream CPython support was dropped in 3.9 anyway).

## Updating translations

There are two parts to updating translations: compiling the strings to be translated, and pulling the translations. Since this project has been added to the [Solus Transifex organization](https://explore.transifex.com/solus/), both parts are relatively easy.

First, you need to have the Transifex CLI tool installed. If you do not have it…
