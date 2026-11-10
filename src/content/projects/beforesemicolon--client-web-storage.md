---
repo: "beforesemicolon/client-web-storage"
name: "client-web-storage"
description: "Powerful Web Application Data Storage and State Management Solution."
readmeQualityOk: true
url: "https://github.com/beforesemicolon/client-web-storage"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["indexeddb", "inmemory-db", "websql", "clientdata", "memorystorage", "webstorage", "localstorage", "javascript", "state-management", "storage"]
stars: 29
forks: 0
openIssues: 1
closedIssues: 13
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-05-05T00:35:49Z"
lastCommitAt: "2026-11-10T11:38:15Z"
lastReleaseAt: "2023-02-12T12:42:26Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 91
undervaluedScore: 58
maintainers: ["ECorreia45", "renovate[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/623c5e8cb92bd64d1c74b063c4c6a7bb8579cbd7ed3cbdf5eb65dc17aeedda2d/beforesemicolon/client-web-storage"
fundingLinks: ["GITHUB:https://github.com/beforesemicolon"]
---

# Client Web Storage
Powerful Web Application Data Storage and State Management Solution.

- Same simple API for [IndexedDB](), [LocalStorage](), [WebSQL](), and in-memory data storage;
- Event driven and asynchronous;
- Automatic data validation done at the store level - ***Guarantees that all data fields are of the right type and exists with configurable automatic defaults;***
- No actions or reducers setup needed - ***The easiest store to configure ever***;
- Easy setup for Client-Server data synchronization using [interceptors]();
- **NOT UI framework specific!** Works with any UI Framework (React, Angular, VueJs, etc) - ***Take your storage setup with you when you migrate to a different framework and eliminate the need to learn a new state management solution for your app.***
- Easy to maintain and perform all data logic and fetching away from your components - ***Keep data concerns away from UI side of your app;***
- Highly and easily configurable;
- Easy to tap into any store events to perform side effect logic;

## Quick Example

```ts
// todo.store.ts

import {ClientStore} from "client-web-storage";

interface ToDo {
    name: string;
    description: string;…
