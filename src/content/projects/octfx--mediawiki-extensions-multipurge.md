---
repo: "octfx/mediawiki-extensions-MultiPurge"
name: "mediawiki-extensions-MultiPurge"
description: "Allows purging of pages for multiple cache services in a defined order."
readmeQualityOk: true
url: "https://github.com/octfx/mediawiki-extensions-MultiPurge"
homepage: "https://www.mediawiki.org/wiki/Extension:MultiPurge"
language: "PHP"
languages: ["PHP"]
languagePcts: [99]
topics: ["mediawiki-extension"]
stars: 7
forks: 4
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2021-11-02T21:16:53Z"
lastCommitAt: "2026-10-29T12:51:40Z"
lastReleaseAt: "2025-09-05T17:18:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 64
maintainers: ["alistair3149", "octfx"]
openGraphImageUrl: "https://opengraph.githubassets.com/baad029de33ebd886f71fe4ec6dbe7231fea906c35fb2cfeb86da35f031adada/octfx/mediawiki-extensions-MultiPurge"
---

# MediaWiki MultiPurge extension

Allows purging of pages for multiple services in a defined order.

Based on https://phabricator.wikimedia.org/T216225#5335375

```
For a custom CDN purger:

    Enable $wgUseCDN so that CdnCacheUpdate runs. (Keep these off $wgCdnReboundPurgeDelay, $wgCdnServers, and $wgHTCPRouting).
```

## Configuration Options

| Variable                               | Default Value    | Description                                                                                                                                             |
|----------------------------------------|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| `$wgMultiPurgeCloudFlareZoneId`        | null             | String - Zone ID the Wiki Domain is contained in                                                                                                        |
| `$wgMultiPurgeCloudFlareApiToken`      | null             | String - API Token found in your dashboard…
