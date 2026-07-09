---
repo: "netresearch/node-magento-eqp"
name: "node-magento-eqp"
description: "Simple API wrapper around the Magento Marketplace EQP API"
readmeQualityOk: true
url: "https://github.com/netresearch/node-magento-eqp"
homepage: "https://netresearch.github.io/node-magento-eqp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["api-wrapper", "magento", "typescript", "nodejs", "eqp"]
stars: 8
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2021-03-31T09:13:35Z"
lastCommitAt: "2026-07-09T20:45:17Z"
lastReleaseAt: "2021-04-29T07:41:00Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 79
undervaluedScore: 65
maintainers: ["renovate[bot]", "CybotTM", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/52a3bf03ccfcd341881a00fe12ff486106919b41e79864d9a5b165dc2673799c/netresearch/node-magento-eqp"
discussionCount: 0
---

# @netresearch/node-magento-eqp

TypeScript API wrapper for the [Adobe Commerce Marketplace EQP API](https://developer.adobe.com/commerce/marketplace/guides/eqp/v1/).

## Installation

```sh
yarn add @netresearch/node-magento-eqp
```

or

```sh
npm install @netresearch/node-magento-eqp
```

## Usage

### TypeScript (ES Modules)

```typescript
import { EQP } from '@netresearch/node-magento-eqp';

const eqp = new EQP({
	appId: 'YOUR_APP_ID',
	appSecret: 'YOUR_APP_SECRET',
	environment: 'sandbox' // or 'production' (default)
});

const packages = await eqp.packageService.getPackages();
```

### JavaScript (CommonJS)

```javascript
const { EQP } = require('@netresearch/node-magento-eqp');

(async () => {
	const eqp = new EQP({
		appId: 'YOUR_APP_ID',
		appSecret: 'YOUR_APP_SECRET'
	});

	const packages = await eqp.packageService.getPackages();
	console.log(packages);
})();
```

### Available services

| Service           | Description                                |
| ----------------- | ------------------------------------------ |
| `packageService`  | List and retrieve extension/theme packages |
| `fileService`     | File upload metadata                       |
| `userService`…
