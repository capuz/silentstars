---
repo: "moraneus/Google-Drive-Remove-Duplicates"
name: "Google-Drive-Remove-Duplicates"
description: "Python script that helps to identify and optionally remove duplicate files in your Google Drive. It makes use of the Google Drive API to fetch file metadata and detect duplicates based on file hash. "
readmeQualityOk: true
url: "https://github.com/moraneus/Google-Drive-Remove-Duplicates"
language: "Python"
languages: ["Python"]
languagePcts: [72]
stars: 14
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2023-07-05T10:24:00Z"
lastCommitAt: "2026-10-29T10:22:21Z"
lastReleaseAt: "2026-07-23T15:15:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 75
undervaluedScore: 35
maintainers: ["moraneus", "cdennisAtInvidi"]
openGraphImageUrl: "https://opengraph.githubassets.com/c15865f56abb928741d36a8b11342c3f975f0538dd97c16fa4c03f42f2c2f42e/moraneus/Google-Drive-Remove-Duplicates"
---

# Drive Dedupe

Find and **safely** remove duplicate files in your Google Drive — from a local web
interface or the command line. Duplicates are detected by comparing the MD5 checksums
Google already stores for every binary file, so a match means the file *content* is
byte-for-byte identical.

Everything runs on your own machine. Your OAuth credentials and token never leave it,
and nothing is ever permanently deleted — files only go to Drive's trash, with a local
audit log and one-click undo.

> Looking for the original single-script version? It's preserved at
> [v1.0.0](https://github.com/moraneus/Google-Drive-Remove-Duplicates/releases/tag/v1.0.0).

## Features

- **Exact detection** — files are grouped by MD5 checksum; only true content duplicates
  are reported, with folder paths, sizes, and modification dates to help you decide.
- **Web UI and CLI** — a local browser interface (`gdrive-dedupe web`) and a scriptable
  CLI (`gdrive-dedupe scan` / `clean` / `undo`) share the same engine.
- **Read-only by default** — scanning uses the `drive.metadata.readonly` scope; the app
  *cannot* modify your Drive until you explicitly grant write access for cleanup.
- **Dry-run by default**…
