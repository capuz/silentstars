---
repo: "unjs/image-meta"
name: "image-meta"
description: "Detect image type and size using pure javascript."
readmeQualityOk: true
url: "https://github.com/unjs/image-meta"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 136
forks: 9
openIssues: 2
closedIssues: 3
watchers: 2
contributors: 22
recentReleases: 0
createdAt: "2020-10-28T16:30:19Z"
lastCommitAt: "2026-09-23T08:47:35Z"
lastReleaseAt: "2025-10-07T07:29:29Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 92
undervaluedScore: 22
maintainers: ["pi0", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ee257c076840ee03d344c6f3aa056f7f777b552be1cae73b43174cfbdc1cde8/unjs/image-meta"
---

# image-meta

Detect image type and size using pure javascript.

## Usage

Install package:

```sh
# npm
npm install image-meta

# yarn
yarn add image-meta

# pnpm
pnpm install image-meta

# bun
bun install image-meta
```

```ts
import { imageMeta } from "image-meta";

const data = await fetch(url).then((res) => res.buffer());

// Meta contains { type, width?, height?, orientation? }
const meta = imageMeta(data);
```

**Note:** `imageMeta` throws an error if either data is not a `Buffer`/`Uint8Array`, or data is invalid or type cannot be determined. You should wrap it into a `try/catch` statement to handle errors.

## Development

- Clone this repository
- Install the latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Run interactive tests using `pnpm dev`

## License

Made with 💛

🔀 Based on [image-size](https://github.com/image-size/image-size) by [Aditya Yadav](https://github.com/netroy) and [contributors](https://github.com/image-size/image-size/graphs/contributors).

Published under [MIT…
