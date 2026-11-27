---
repo: "ffMathy/sponsorkit"
name: "sponsorkit"
description: "The static site and API of sponsorkit.io and bountyhunt.io."
readmeQualityOk: true
url: "https://github.com/ffMathy/sponsorkit"
homepage: "https://ffmathy.github.io/sponsorkit/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [46]
stars: 6
forks: 2
openIssues: 17
closedIssues: 51
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-03-31T17:25:51Z"
lastCommitAt: "2026-11-27T16:29:32Z"
lastReleaseAt: "2023-02-19T02:40:53Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero", "under_pressure"]
healthScore: 94
undervaluedScore: 83
maintainers: ["claude", "ffMathy"]
openGraphImageUrl: "https://opengraph.githubassets.com/bcefc0d84edb82d7b00c25d1c135847668ba290cfe21081b63724ff04f220aad/ffMathy/sponsorkit"
discussionCount: 1
---

# Sponsorkit

Sponsorkit lets open source maintainers build financial contributions straight into their software. There's no account, no API key, no webhooks, and no stored user data.

```ts
import { Sponsorkit } from "@sponsorkit/sdk";

const sk = new Sponsorkit({ github: "your-login", opencollective: "your-collective" });
const fc = await sk.getFinancialContribution();
if (fc.signedIn && fc.active().length === 0) showAd();
```

It works with GitHub Sponsors and Open Collective. SDKs: JS/TS (`npm i @sponsorkit/sdk`), .NET (`dotnet add package Sponsorkit`), Python (`pip install sponsorkit`), Go (`go get github.com/ffMathy/sponsorkit/sdks/go`) and Rust (`cargo add sponsorkit`). With them you can:

- check what the current user has contributed (`getFinancialContribution()`),
- send users to contribute (`openCheckout()`),
- gate features, show nag messages or ads based on contribution.

## Documentation

The full documentation lives at **[ffmathy.github.io/sponsorkit/docs](https://ffmathy.github.io/sponsorkit/docs/)**. Good places to start:
