---
repo: "nextcloud/tables"
name: "tables"
description: "🍱 Nextcloud tables app"
url: "https://github.com/nextcloud/tables"
homepage: "https://apps.nextcloud.com/apps/tables"
language: "JavaScript"
languages: ["JavaScript", "PHP"]
languagePcts: [45, 26]
topics: ["nextcloud", "nextcloud-app", "table", "hacktoberfest"]
stars: 205
forks: 42
openIssues: 319
closedIssues: 598
watchers: 4
contributors: 278
recentReleases: 0
createdAt: "2021-09-22T14:37:22Z"
lastCommitAt: "2026-06-28T02:02:17Z"
lastReleaseAt: "2023-09-12T12:55:24Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 92
undervaluedScore: 42
maintainers: ["enjeck", "renovate[bot]", "AndyScherzinger"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0c7476842d81be213587c39afb3b21a87959b8f9a54bcabae596ccdbf43bb6f/nextcloud/tables"
---

# Nextcloud App »Tables«

**Manage data the way you need it.**

With this app you are able to create your own tables with individual columns. You can start with a template or from scratch and add your wanted columns.

## Documentation

### General information
https://github.com/nextcloud/tables/wiki

### Administration
https://github.com/nextcloud/tables/wiki/Administration

### API
https://github.com/nextcloud/tables/wiki/API

### Developer information
https://github.com/nextcloud/tables/wiki/Developing

## Installation/Update
The app can be installed through the [app store](https://apps.nextcloud.com/apps/tables) within Nextcloud. You can also download the latest release from the [release page](https://github.com/nextcloud-releases/tables/releases).

### Install from source code
*To build you will need to have [Node.js](https://nodejs.org/en/) and [Composer](https://getcomposer.org/) installed.*

- Clone repository into the app-directory: `cd /path/to/apps && git clone https://github.com/nextcloud/tables && cd tables`
- Install PHP dependencies: `composer install --no-dev`
- Install JS dependencies: `npm ci`
- Build JavaScript for the frontend
	- Development build `npm run dev`…
