---
repo: "bconnorwhite/all-package-names"
name: "all-package-names"
description: "Get all NPM package names"
url: "https://github.com/bconnorwhite/all-package-names"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["npm", "typescript"]
stars: 30
forks: 1
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2020-09-02T04:34:44Z"
lastCommitAt: "2026-06-27T00:35:42Z"
lastReleaseAt: "2026-03-20T00:18:11Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 58
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/53a252e78761661515580aae86c4538e4ae215935d870c2d62de756b3fa6fc08/bconnorwhite/all-package-names"
---

<h1>all-package-names</h1>
  </a>
  </a>
  </a>
</div>

<br />

<blockquote align="center">Fast lookup and iteration over all NPM package names</blockquote>

---

Includes a list of all package names on NPM. Updated daily, with optional local synchronization.

Packages which are deleted from NPM are removed from this list.

## Installation

<details open>
  <summary>
    </a>
  </summary>

```sh
npm install all-package-names
```

</details>

<details>
  <summary>
    </a>
  </summary>

```sh
yarn add all-package-names
```

</details>

<details>
  <summary>
  </summary>

```sh
pnpm add all-package-names
```

</details>

<details>
  <summary>
  </summary>

```sh
bun add all-package-names
```

</details>

## Usage

> Uses binary search on the underlying dataset to quickly check for existence or iterate over packages with a given prefix without having to load the entire list into memory. However, the full list can also be loaded as a string array.

## API

Check if a package exists without loading the full array:

```ts
import allPackageNames from "all-package-names";

console.log(await allPackageNames.has("react")); // true
```

Iterate packages by prefix:

```ts
import…
