---
repo: "JockeTF/fimfarchive"
name: "fimfarchive"
description: "Preserves stories from Fimfiction"
readmeQualityOk: true
url: "https://github.com/JockeTF/fimfarchive"
homepage: "https://www.fimfiction.net/user/116950/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["mylittlepony", "archiving", "fanfiction", "fimfiction", "pony", "python"]
stars: 26
forks: 0
openIssues: 2
closedIssues: 3
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2015-10-01T17:49:39Z"
lastCommitAt: "2026-07-19T06:07:16Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 57
undervaluedScore: 33
maintainers: ["JockeTF"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4523e15dd7e4a5e12b47960077a1eba2495d106ab15a40ae92a8e1858e4e31b/JockeTF/fimfarchive"
---

# Fimfarchive

Fimfarchive aims to release all stories on Fimfiction as a single ZIP-file. The
archive contains not only stories, but also metadata such as tags, ratings, and
descriptions. It is organized by author and could be used for backup, offline
reading, or data mining.

Releases can be found on Fimfarchive's [user profile] at [Fimfiction]. Note
that this is **not** an official Fimfiction project, so do not send questions
to Fimfiction staff. Instead, send a private message or post a comment to the
Fimfarchive user profile.

A new version will be released each season via BitTorrent, approximately once
every three months. When suitable, an xdelta3 patch will also be provided for
users who do not wish to redownload unchanged stories.

Note that the archive contains a large number of files. Unzipping it to your
file system may not be necessary if the archive is to be used together with
some application. If you are a developer, reading directly from the ZIP-file
may be preferable.

This repository contains code for updating and building the archive. While the
API is not guaranteed to be stable, it can also be used as a library for easy
access to stories and metadata within the…
