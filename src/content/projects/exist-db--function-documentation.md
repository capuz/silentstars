---
repo: "eXist-db/function-documentation"
name: "function-documentation"
description: "XQuery Function Documentation and Browser App"
readmeQualityOk: true
url: "https://github.com/eXist-db/function-documentation"
language: "XQuery"
languages: ["XQuery", "JavaScript"]
languagePcts: [41, 24]
topics: ["exist-db", "xquery", "documentation", "xar"]
stars: 5
forks: 15
openIssues: 8
closedIssues: 24
watchers: 11
contributors: 25
recentReleases: 0
createdAt: "2013-07-26T22:30:45Z"
lastCommitAt: "2026-07-06T07:04:02Z"
lastReleaseAt: "2025-09-18T20:17:16Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch", "funded", "fork_magnet"]
healthScore: 90
undervaluedScore: 78
maintainers: ["duncdrum", "dependabot[bot]", "line-o"]
openGraphImageUrl: "https://opengraph.githubassets.com/224f228f5fce838b28835b23b9ec6b9b01a68f8c17f11ab5e5d1794320ed2d27/eXist-db/function-documentation"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/existdb"]
---

# eXist-db Function Documentation Browser App

This repository contains the source code for the Function Documentation application for the [eXist-db native XML database](https://exist-db.org).

## Dependencies

- [Node.js](https://nodejs.org): LTS
- [eXist-db](https://exist-db.org): `6.2.0` or later

## Installation

- Function Documentation is installed by default in the eXist distribution. Just go to your eXist server's Dashboard and select Function Documentation.
- Update to the latest release via Dashboard > Package Manager, or download a release via the exist-db.org public app repository at [https://exist-db.org/exist/apps/public-repo/](https://exist-db.org/exist/apps/public-repo/).

## Building from source

1. Clone the repository to your system:

   ```bash
   git clone https://github.com/eXist-db/function-documentation.git
   cd function-documentation
   ```

2. Install dependencies and build the application package (`.xar` file):

   ```bash
   npm ci
   npm run build
   ```

   The package is written to `dist/exist-function-documentation-<version>.xar`. On a fresh clone, `<version>` will be the placeholder in `package.json` (the real version is set in-memory on the CI…
