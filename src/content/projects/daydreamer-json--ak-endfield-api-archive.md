---
repo: "daydreamer-json/ak-endfield-api-archive"
name: "ak-endfield-api-archive"
description: "Automated Arknights: Endfield game API response archive and download library"
url: "https://github.com/daydreamer-json/ak-endfield-api-archive"
homepage: "https://ak-endfield-api-archive.daydreamer-json.cc"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["arknights", "arknights-endfield", "endfield"]
stars: 45
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-01-22T09:48:52Z"
lastCommitAt: "2026-06-30T06:51:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 35
maintainers: ["github-actions[bot]", "daydreamer-json"]
openGraphImageUrl: "https://opengraph.githubassets.com/12f2e646ca4e5cfde72f145a457228060c0fd7f92979a3b41e38179693fa376f/daydreamer-json/ak-endfield-api-archive"
---

<h1 align="center">ak-endfield-api-archive</h1>

</p>
</p>

This repository monitors and records changes to various Arknights: Endfield API responses.

Updates are checked approximately every 5 minutes and automatically pushed via GitHub Actions.  
API outputs are stored in the [`output`](/output/) directory.

## [Download Library](https://ak-endfield-api-archive.daydreamer-json.cc/)

For a historical overview of game packages and other resources, please click the link above.

## Contents of the Archive

The following APIs are currently being monitored:

- Launcher
  - Get latest game (Global, China)
  - Get latest game resources (Global, China)
  - Get latest launcher (Global, China)
  - Get launcher web resources (Global, China)
    - Announcements
    - Banners
    - Main background images
    - Single Ent.
    - Sidebar
- Raw
  - Game resource manifests (index, patch)
  - Launcher image resources

Most raw data is provided "as-is" without modification. Some files (e.g., `index_*.json`) have been decrypted for readability.

The following binary data is archived in an external repository:

- Game packages (.zip)
- Game patch packages (.zip)
- Game hotfix resources
  - To avoid…
