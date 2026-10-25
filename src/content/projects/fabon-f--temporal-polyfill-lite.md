---
repo: "fabon-f/temporal-polyfill-lite"
name: "temporal-polyfill-lite"
description: "Lightweight Temporal polyfill"
readmeQualityOk: true
url: "https://github.com/fabon-f/temporal-polyfill-lite"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 112
forks: 3
openIssues: 2
closedIssues: 6
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-06-27T22:35:46Z"
lastCommitAt: "2026-10-25T01:53:08Z"
lastReleaseAt: "2026-04-14T12:00:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 43
maintainers: ["fabon-f", "gesposito"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f1760105c794a4105941c3e51a55a9f66f8a90d5939107ea91b065ebf1f936e/fabon-f/temporal-polyfill-lite"
---

# temporal-polyfill-lite

Lightweight Temporal polyfill.

- **Small**: The bundle size is nearly 10% smaller than [temporal-polyfill](https://www.npmjs.com/package/temporal-polyfill), 60% smaller than [@js-temporal/polyfill](https://www.npmjs.com/package/@js-temporal/polyfill) if you need only Gregorian calendar (see [comparison](https://github.com/fabon-f/temporal-polyfill-comparison) for details).
- **Spec-compliant**: It supports the latest spec, while other polyfills are based on the outdated spec (at least as of February 2026).

# Usage

```sh
npm install temporal-polyfill-lite
```

For users who need only Gregorian calendar (`iso8601` and `gregory`), you can use a smaller "basic" bundle:

```typescript
// as a ponyfill (without patching global variables)
import { Intl, Temporal } from "temporal-polyfill-lite";

// load the polyfill to global if native implementation does not exist
import "temporal-polyfill-lite/global";
// load types to global if you need (optional)
import "temporal-polyfill-lite/types/global";

// or you can manually install the polyfill
import { install } from "temporal-polyfill-lite/shim";
// overwrite native Temporal implementation
install(true);
//…
