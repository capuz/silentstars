---
repo: "ringcentral/rc-unified-crm-extension"
name: "rc-unified-crm-extension"
description: "App Connect is a CRM integration framework to help developers quickly bring to market a full-featured CTI into virtually any CRM along with a multitude of other useful end-user features."
url: "https://github.com/ringcentral/rc-unified-crm-extension"
homepage: "https://appconnect.labs.ringcentral.com"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [96]
topics: ["chrome-extension", "ringcentral", "bullhorn", "call-logging", "clio", "crm", "cti", "insightly", "integration", "microsoft-edge-extension"]
stars: 13
forks: 17
openIssues: 1
closedIssues: 15
watchers: 4
contributors: 5
recentReleases: 0
createdAt: "2022-08-30T02:03:43Z"
lastCommitAt: "2026-06-30T06:50:16Z"
lastReleaseAt: "2022-11-15T06:56:35Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 98
undervaluedScore: 83
maintainers: ["byrnereese", "SushilMallRC", "givp"]
openGraphImageUrl: "https://opengraph.githubassets.com/25594d745bfe3f7e640e749f6e1a1f8537f61ec9982f41485977f3a2d2d345ca/ringcentral/rc-unified-crm-extension"
---

# RingCentral App Connect for Google Chrome and Microsoft Edge


## Looking for user documentation?

Access our end user [documentation](https://ringcentral.github.io/rc-unified-crm-extension/) through the project's Github pages.
## Testing

Run the core package Jest suite from `packages/core`:

```bash
cd packages/core
npm test
```

For focused contract checks during App Connect client/server work, run targeted files, for example:

```bash
npm test -- test/routes/pluginRoutes.test.js test/handlers/plugin.test.js --runInBand
```
