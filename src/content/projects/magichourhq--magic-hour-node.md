---
repo: "magichourhq/magic-hour-node"
name: "magic-hour-node"
description: "Node.js library for the Magic Hour API."
readmeQualityOk: true
url: "https://github.com/magichourhq/magic-hour-node"
homepage: "https://docs.magichour.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["magic-hour-sdk"]
stars: 12
forks: 4
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2024-11-09T23:29:30Z"
lastCommitAt: "2026-08-23T04:08:44Z"
lastReleaseAt: "2024-11-30T22:20:18Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 68
maintainers: ["magic-hour-sdk-bot[bot]", "davidhu2000", "blacksmith-sh[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/356421e06cd8eee97aa3894c9f9b62612fe7c4f36794c939826ce6b3b364232d/magichourhq/magic-hour-node"
---

# Magic Hour Node SDK

The Magic Hour Node SDK provides convenient access to the Magic Hour API via server-side TypeScript or JavaScript.

## Documentation

For full documentation of all APIs, please visit https://docs.magichour.ai

If you have any questions, please reach out to us via [discord](https://discord.gg/JX5rgsZaJp).

## Install

```
npm install magic-hour
```

## Usage

```ts
import { Client } from "magic-hour";
// generate your API Key at https://magichour.ai/developer
const client = new Client({ token: process.env["API_TOKEN"]!! });
const res = await client.v1.faceSwapPhoto.generate(
  {
    assets: {
      faceSwapMode: "all-faces",
      sourceFilePath: "/path/to/source/image.png",
      targetFilePath: "/path/to/target/image.png",
    },
    name: "Face Swap image",
  },
  {
    waitForCompletion: true,
    downloadOutputs: true,
    downloadDirectory: ".",
  },
);

console.log(`Project ID: ${response.id}`);
console.log(`Status: ${response.status}`);
console.log(`Downloaded files: ${response.downloaded_paths}`);
```

## Client Functions

Most resources that generate media content support two methods:

- **`generate()`** - A high-level convenience method that…
