---
repo: "boy-offi9-inc/reqkit"
name: "reqkit"
description: "Small, composable HTTP helpers — retry with backoff and Retry-After, timeouts, normalized errors, rate limiter, circuit breaker, response cache, resumable downloads, SSE/NDJSON streams, mock fetch, and an opt-in createFetch. Not a client; works alongside fetch/axios/anything."
readmeQualityOk: true
url: "https://github.com/boy-offi9-inc/reqkit"
homepage: "https://boy-offi9-inc.github.io/reqkit/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [95]
topics: ["error-normalization", "fetch", "retry-after", "utility", "http", "timeout", "backoff", "dedupe", "http-client", "limiter"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 9
createdAt: "2026-08-15T22:05:48Z"
lastCommitAt: "2026-11-21T11:38:15Z"
lastReleaseAt: "2026-11-08T07:45:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 82
undervaluedScore: 57
maintainers: ["Boy-Offi9", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/69a7c74c0b237e7c19eb907187340b3fea9cef7fee721828d0abdaa00d9aee5f/boy-offi9-inc/reqkit"
---

# reqkit

**Tiny, zero-dependency HTTP helpers for `fetch`, axios, or anything else — retries that respect `Retry-After`, timeouts that really cancel, and errors that make sense.**

Not a client, not an axios replacement. Use one function on its own, or let [`createFetch`](#createfetchdefaults) wire them together. You always get a plain `Response` back.

```js
import { createFetch } from "@boy-offi9-inc/reqkit";

const api = createFetch({
  baseUrl: "https://api.example.com/v1",
  headers: () => ({ authorization: `Bearer ${getToken()}` }),
  timeout: 10_000, // per attempt
});

const user = await api.json("/users/1", { query: { expand: "team" } });
// retries network errors, timeouts and 429/5xx, waits for Retry-After,
// doesn't retry a POST unless you opt in, throws HTTPError on non-2xx
```

Or take just the pieces you want:

```js
import { createLimiter, withRetry, withTimeout } from "@boy-offi9-inc/reqkit";

const limit = createLimiter(4); // 4 downloads at a time
const pages = await limit.map(urls, (url) =>
  withRetry(
    () => withTimeout((signal) => fetch(url, { signal }), 8000),
    { retryStatusCodes: [429, 503] } // and it waits for Retry-After
  )
);
```
