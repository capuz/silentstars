---
repo: "arunkumarArjun/react-native-fetch-client"
name: "react-native-fetch-client"
description: "A lightweight, zero-dependency, Fetch-native HTTP client for React Native, Expo, modern browsers, and Node.js."
readmeQualityOk: true
url: "https://github.com/arunkumarArjun/react-native-fetch-client"
homepage: "https://react-native-fetch-client.vercel.app/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["axios-alternative", "expo", "fetch", "fetch-api", "http-client", "networking", "offline-queue", "react-native", "swr", "typescript"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-12T07:15:05Z"
lastCommitAt: "2026-11-10T11:38:34Z"
lastReleaseAt: "2026-10-30T05:45:29Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 54
maintainers: ["arunkumarArjun", "CallMeArunkumar", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/40bd03f56432f782fa6d35259f2522a61a41b9737c0396f49adad111c9a58924/arunkumarArjun/react-native-fetch-client"
---

# react-native-fetch-client

A lightweight, Fetch-native HTTP client for TypeScript and JavaScript across React Native, Expo, web browsers, and Node.js.

> 🚀 **[Explore the Interactive Documentation Website & Guides ➔](https://react-native-fetch-client.vercel.app/)**

### Why react-native-fetch-client over Axios?

| Feature | `react-native-fetch-client` | Axios |
| :--- | :--- | :--- |
| **Runtime Dependencies** | **0** (`dependencies: {}`) | 4 dependencies (`proxy-agent`, `redirects`, etc.) |
| **Minified Core Bundle** | **38.3 kB** (~12.1 kB gzip) | **56.8 kB** (~21 kB gzip • + plugins: ~75-120 KB) |
| **Mobile Network Engine**| Native WHATWG `fetch` (Hermes C++ JNI) | Legacy `XMLHttpRequest` (XHR bridge) |
| **401 Token Refresh**   | **Built-in Atomic Mutex** (zero race conditions) | Manual race-prone interceptor boilerplate |
| **Caching & Deduplication** | **Built-in SWR Cache (0ms)** & In-Flight Dedup | Requires 3rd-party plugins |

---

## Design Principles

1. **Standards-Based & Zero Dependencies**: Built directly on modern WHATWG specifications (`fetch`, `ReadableStream`, `AbortController`). The package has zero production dependencies (`dependencies: {}`), eliminating…
