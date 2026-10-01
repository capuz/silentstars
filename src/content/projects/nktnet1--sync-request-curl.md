---
repo: "nktnet1/sync-request-curl"
name: "sync-request-curl"
description: "NodeJS HTTP Client, synchronous and performant"
readmeQualityOk: true
url: "https://github.com/nktnet1/sync-request-curl"
homepage: "https://npmjs.com/package/sync-request-curl"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["sync", "synchronous", "sync-request", "comp1531", "curl", "fast", "http", "https", "libcurl", "node-libcurl"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 4
recentReleases: 2
createdAt: "2023-08-01T09:47:15Z"
lastCommitAt: "2026-10-01T10:23:04Z"
lastReleaseAt: "2026-09-30T05:52:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 73
maintainers: ["nktnet1"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/673289432/809f08f8-28db-487c-8865-6ec53a438bff"
discussionCount: 0
---

# [](https://github.com/nktnet1/sync-request-curl)

&nbsp;
&nbsp;
&nbsp;
&nbsp;

&nbsp;
&nbsp;
&nbsp;
&nbsp;

&nbsp;
&nbsp;
&nbsp;

---

A high-performance Node.js alternative to [sync-request](https://github.com/ForbesLindesay/sync-request) for making synchronous web requests.

</div>

---

- [1. Installation](#installation)
- [2. Usage](#usage)
- [3. API reference](#api-reference)
- [4. Differences from sync-request](#differences-from-sync-request)
  - [4.1. Additions](#differences-from-sync-request-additions)
  - [4.2. Behavioural differences](#differences-from-sync-request-behavioural-differences)
- [5. License](#license)
- [6. Compatibility](#compatibility)
  - [6.1. Windows](#compatibility-windows)
  - [6.2. macOS](#compatibility-macos)
  - [6.3. Linux](#compatibility-linux)
  - [6.4. Building from source](#compatibility-building-from-source)
- [7. Caveats](#caveats)

## 1. Installation

```
npm install sync-request-curl
```

## 2. Usage

```typescript
request(method, url, options);
```

The request function is the package default export. ESM consumers can import
`FormData` and public types from the root entry:

```typescript
import request, { FormData } from…
