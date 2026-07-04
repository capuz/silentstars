---
repo: "coconautilus17/LibraForge"
name: "LibraForge"
description: "A one stop shop for your audiobook library metadata and organization needs. Your Audiobookshelf companion tool to forge your library into shape."
readmeQualityOk: true
url: "https://github.com/coconautilus17/LibraForge"
language: "Python"
languages: ["Python"]
languagePcts: [75]
stars: 35
forks: 3
openIssues: 1
closedIssues: 30
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-06-15T20:16:16Z"
lastCommitAt: "2026-07-04T22:52:02Z"
lastReleaseAt: "2026-07-01T23:24:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 46
maintainers: ["coconautilus17"]
openGraphImageUrl: "https://opengraph.githubassets.com/414d98830c50b828216acc64ac2978c9a676fdc396d158decebb185b4303a47c/coconautilus17/LibraForge"
---

# LibraForge

> **Note:** This tool is a work in progress. Features, interfaces, and behavior are
> liable to change without notice. AI (Claude) is used heavily in building this project,
> across code, tests, and documentation, under human review and direction throughout.

Self-hosted Audible metadata matching, M4B conversion, Audiobookshelf-style library
organisation, and direct Audible downloading - four tools in one Docker container, with
a vanilla-JS web UI. Every write operation defaults to a dry run.

---

## Features

### Start Here (`/`)
Pick a folder and get a one-glance scan summary: how many books need metadata, need
conversion, and are ready to organise. Links through to the right tool for each stage.
A collapsible guide explains Edit and Write modes, Match badges, `metadata.json` vs the
Audiobookshelf Scanner, Report types, the Owned badge, and a suggested end-to-end
workflow through Metadata Forge and Folder Forge.

### Metadata Forge (`/forge`)
Searches Audible (or another provider) and writes matched metadata to your files.

- **Dry-run first**, then enable **Apply** to write. **Backup and cache** on the first
  apply preserves originals and speeds up later runs.
-…
