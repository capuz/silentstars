---
repo: "nextcloud-libraries/nextcloud-files"
name: "nextcloud-files"
description: "Nextcloud Files helpers for Nextcloud apps and libraries https://npmjs.org/@nextcloud/files"
readmeQualityOk: true
url: "https://github.com/nextcloud-libraries/nextcloud-files"
homepage: "https://nextcloud-libraries.github.io/nextcloud-files"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["nextcloud-plugin", "nextcloud"]
stars: 31
forks: 13
openIssues: 1
closedIssues: 45
watchers: 3
contributors: 20
recentReleases: 0
createdAt: "2019-06-19T09:58:55Z"
lastCommitAt: "2026-09-19T01:16:32Z"
lastReleaseAt: "2023-08-29T09:51:11Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 66
maintainers: ["dependabot[bot]", "github-actions[bot]", "susnux"]
openGraphImageUrl: "https://opengraph.githubassets.com/42d8d887a6133ad09fef95a35aff457a09c6871ba4d180df73abcae98feffb25/nextcloud-libraries/nextcloud-files"
---

# @nextcloud/files

Nextcloud Files helpers for Nextcloud apps and libraries.

This library provides three kinds of utils:
1. WebDAV helper functions to work with the Nextcloud WebDAV interface.
   Those functions are available in `@nextcloud/files/dav`
2. Geneal purpose function related to files or folders, like filename validation.
3. Functions and classes to interact with the Nextcloud **files** app, like registering a new view or a file action.

## Compatibility

| `@nextcloud/files` version | Supported | Nextcloud version |
|----------------------------|-----------|-------------------|
|                        4.x |        ✅ |               33+ |
|                        3.x |        ✅ |             26-32 |
|                        2.x |        ❌ |             23-25 |
|                        1.x |        ❌ |             20-22 |

## Usage examples

### Files app

#### Register a "New"-menu entry

The "New"-menu allows to create new entries or upload files, it is also possible for other apps to register their own actions here.

```ts
import type { Entry } from '@nextcloud/files'
import { addNewFileMenuEntry } from '@nextcloud/files'
import { t } from '@nextcloud/l10n'

const…
