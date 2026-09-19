---
repo: "yym68686/uni-api-web"
name: "uni-api-web"
description: "uni-api web frontend"
readmeQualityOk: true
url: "https://github.com/yym68686/uni-api-web"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [47, 46]
stars: 26
forks: 25
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-03-11T17:48:39Z"
lastCommitAt: "2026-09-19T01:16:51Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 93
undervaluedScore: 69
maintainers: ["yym68686"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb4ccc427755cd7308e3c8841c75469a1774eceeb37094fab8af214a3dfcafb3/yym68686/uni-api-web"
---

# uni-api console

A new React + TypeScript workspace for observing uni-api model channels. This
repository's previous frontend has been replaced; historical versions remain in
Git history.

## Run locally

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:4173 and enter your uni-api public endpoint and the first
configured key (or an admin key). The backend must provide the platform APIs
listed below and allow the browser origin through CORS. HTTPS deployments require
an HTTPS backend endpoint. Verified connections are saved in the current tab's
`sessionStorage`, allowing reloads to restore the connection without another login.
The platform key is revalidated before any channel queries. Authentication rejection
clears the saved connection; a temporary network failure keeps it available for retry.
Disconnect clears the credential and query cache. Credentials are never written to
`localStorage`; normal tab closure ends their session (browser session restore may
retain session storage). Theme and filter preferences are saved locally. Filters are
stored separately for each normalized service address and restored after reconnecting.
Only the selected filter key's opaque ID is…
