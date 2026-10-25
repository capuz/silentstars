---
repo: "nextcloud/tables"
name: "tables"
description: "🍱 Nextcloud tables app"
readmeQualityOk: true
url: "https://github.com/nextcloud/tables"
homepage: "https://apps.nextcloud.com/apps/tables"
language: "JavaScript"
languages: ["JavaScript", "PHP"]
languagePcts: [47, 26]
topics: ["nextcloud", "nextcloud-app", "table"]
stars: 220
forks: 55
openIssues: 345
closedIssues: 640
watchers: 2
contributors: 282
recentReleases: 0
createdAt: "2021-09-22T14:37:22Z"
lastCommitAt: "2026-10-25T02:47:17Z"
lastReleaseAt: "2023-09-12T12:55:24Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 92
undervaluedScore: 41
maintainers: ["AndyScherzinger", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc6e0f52dac240177e7499443bb5cd93a3e4d0c433be6e9d2aa2cf1489ac0041/nextcloud/tables"
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
