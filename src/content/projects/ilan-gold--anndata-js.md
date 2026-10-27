---
repo: "ilan-gold/anndata.js"
name: "anndata.js"
description: "AnnData for the browser"
readmeQualityOk: true
url: "https://github.com/ilan-gold/anndata.js"
homepage: "https://ilan-gold.github.io/anndata.js/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 14
forks: 2
openIssues: 6
closedIssues: 6
watchers: 5
contributors: 6
recentReleases: 1
createdAt: "2024-05-31T09:36:18Z"
lastCommitAt: "2026-10-27T09:16:51Z"
lastReleaseAt: "2026-10-26T19:34:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 47
maintainers: ["pre-commit-ci[bot]", "ilan-gold", "keller-mark"]
openGraphImageUrl: "https://opengraph.githubassets.com/462254030514f58117a77a1536ba3aa70f35432b14be495df63ecb4dc1a6fd2e/ilan-gold/anndata.js"
---

# anndata.js

AnnData for the browser

## Quickstart

```typescript
import { readZarr, get, readElem } from "anndata.js";
import * as zarr from "zarrita";

const store = await zarr.tryWithConsolidated(new zarr.FetchStore(path));
const adata = await readZarr(store);
await get(await adata.obs.get("leiden"), [null]); // full selection
await get(adata.X, [zarr.slice(0, 5), null]); // first 5 rows
adata.obs = await readElem(store, "obs"); // read a part of the anndata object
```

## Development

Installation of dependencies:

```bash
pnpm install
```

Testing:

```bash
pnpm test
```

Build:

```bash
pnpm build
```
