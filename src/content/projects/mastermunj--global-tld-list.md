---
repo: "mastermunj/global-tld-list"
name: "global-tld-list"
description: "List of Global TLDs"
url: "https://github.com/mastermunj/global-tld-list"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [59, 41]
topics: ["tld", "gtld", "gtlds", "domains", "top-level-domains"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2020-05-17T11:55:23Z"
lastCommitAt: "2026-06-28T01:45:46Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 78
maintainers: ["mastermunj", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7762c2877b41bdf88aa63ebcfa96e9ca7a383eb7047d0133e3f356581fa2f731/mastermunj/global-tld-list"
---

# Global TLD List

List of Global TLDs (gTLDs) gathered from [IANA](http://data.iana.org/TLD/tlds-alpha-by-domain.txt).

## Installation

```sh
npm install global-tld-list --save
```

## Usage

```js
import { TLDs } from 'global-tld-list';

const isValid = TLDs.isValid('com');
```

## Breaking Change in v1.0.0
Since v1.0.0, this package uses map instead of array for runtime performance.
