---
repo: "c4software/pyopds-server"
name: "pyopds-server"
description: "Minimalist and Simple OPDS Server for EPUB Library"
readmeQualityOk: true
url: "https://github.com/c4software/pyopds-server"
language: "Python"
languages: ["Python"]
languagePcts: [78]
topics: ["opds", "python", "python3", "server"]
stars: 17
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2025-08-12T11:02:28Z"
lastCommitAt: "2026-10-21T21:11:46Z"
lastReleaseAt: "2026-10-21T11:08:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 60
maintainers: ["c4software"]
openGraphImageUrl: "https://opengraph.githubassets.com/cfe735b209ff60047d07421922665c6609b287f10edebcd84ec7fd6597e7fe63/c4software/pyopds-server"
---

# PyOPDS Server - OPDS Server for EPUB Library

This project is a lightweight OPDS (Open Publication Distribution System) server written in Python 3, designed to expose a library of EPUB files stored in a local directory, compatible with clients like Calibre, KoReader, [CrossPoint](https://github.com/crosspoint-reader/crosspoint-reader) readers, or any other OPDS-compliant reader. It uses only Python's standard libraries.

It is also a reading progress sync server for KoReader and CrossPoint readers, compatible with the [CrossPoint Sync](https://github.com/crosspoint-reader/crosspoint-sync) app: library, reading statistics and clippings, with book details and covers taken from your EPUB library.

If you browse your OPDS feed in a web browser, it will display a simple HTML representation of the feed using XSLT transformation.

## Features

- **OPDS Catalog**: Exposes EPUB books via an OPDS feed accessible at the `/opds` endpoint.
- **OpenSearch**: Integrated search functionality compliant with OpenSearch specification, allowing users to search books by title, author or series.
- **Subdirectory Support**: Scans EPUB files in the configured directory and its subdirectories.
-…
