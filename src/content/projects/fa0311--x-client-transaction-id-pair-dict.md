---
repo: "fa0311/x-client-transaction-id-pair-dict"
name: "x-client-transaction-id-pair-dict"
description: "A dictionary for easily generating x-client-transaction-id"
readmeQualityOk: true
url: "https://github.com/fa0311/x-client-transaction-id-pair-dict"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 38
forks: 5
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-04-29T11:32:00Z"
lastCommitAt: "2026-10-23T09:32:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 52
maintainers: ["github-actions[bot]", "fa0311"]
openGraphImageUrl: "https://opengraph.githubassets.com/57547097c1cc896c241c2ae49bb4ca7a35973d3e8c45d32426778b2f3ee78b2d/fa0311/x-client-transaction-id-pair-dict"
---

# x-client-transaction-id-pair-dict

```js
import { generateTransactionId } from "x-client-transaction-id-generater";
const url = "https://raw.githubusercontent.com/fa0311/x-client-transaction-id-pair-dict/refs/heads/main/pair.json";
const res = await fetch(url);
const json = await res.json();
const randomPair = json[Math.floor(Math.random() * json.length)];
const { animationKey, verification } = randomPair;
const tid = await generateTransactionId("GET", `/i/api/xxxx/xxxxx`, verification, animationKey);
```
