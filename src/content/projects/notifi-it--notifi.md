---
repo: "notifi-it/notifi"
name: "notifi"
description: "Push notifications in one HTTP request. Free, no signup. Encrypted with your public key — neither we nor Apple can read your notifications."
readmeQualityOk: true
url: "https://github.com/notifi-it/notifi"
homepage: "https://notifi.it"
language: "HTML"
languages: ["HTML", "Swift", "TypeScript"]
languagePcts: [35, 25, 21]
topics: ["notifi", "macos", "ios", "android", "flutter", "linux"]
stars: 37
forks: 2
openIssues: 0
closedIssues: 141
watchers: 5
contributors: 3
recentReleases: 0
createdAt: "2016-11-17T11:49:39Z"
lastCommitAt: "2026-08-29T10:22:10Z"
lastReleaseAt: "2021-04-05T22:33:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 59
maintainers: ["maxisme", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/56f6397beabf3d03c3bc6790067b5c40149ed2eb55b8196e20bdd6359b4815ad/notifi-it/notifi"
discussionCount: 0
---

</p>

Create a send key, send a title and body to `notifi.it` in one HTTP
request, and the notification lands on your iPhone or Mac.

```bash
curl "https://notifi.it/send?key=nk_…&title=hello+world"
```

No accounts. No sign-in. No device linking. The device holds the only private key,
notification content is encrypted with that key at ingest so the server cannot read it, and
each notification is deleted once the device acknowledges it. It is a relay, not a
mailbox.

The backend is a single Cloudflare Worker over a D1 database; the app is a
zero-dependency SwiftUI client for iOS 17+ and macOS 14+.

</p>

## Documentation

- **[notifi API documentation](https://notifi.it/docs)** — the `/send` endpoint,
  its parameters, its error codes and its limits.
- **[llms.txt](https://notifi.it/llms.txt)** — the same thing as plain text for
  coding agents, including when to reach for notifi and how to ask a human for a
  send key.
- **[openapi.json](https://notifi.it/openapi.json)** — OpenAPI 3.1 for `/send`.
- **[Postman collection](https://notifi.it/notifi.postman_collection.json)** —
  v2.1, which Bruno, Insomnia and Hoppscotch import as well; the
  **[.bru…
