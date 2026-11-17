---
repo: "lavabyte/deepai-gateway"
name: "deepai-gateway"
description: "My site: https://lavabyte.qzz.io"
readmeQualityOk: true
url: "https://github.com/lavabyte/deepai-gateway"
homepage: "https://gateway.lavabyte.qzz.io"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [96]
stars: 7
forks: 7
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-25T17:39:29Z"
lastCommitAt: "2026-11-17T14:44:24Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 76
undervaluedScore: 62
maintainers: ["lavabyte"]
openGraphImageUrl: "https://opengraph.githubassets.com/b32624eb717afd7dd7a9eff603fdc6340e8818929b4669d81e367542759b5a09/lavabyte/deepai-gateway"
---

# deepai-gateway

An OpenAI-compatible gateway in front of **DeepAI Code**. Log in with one or more
DeepAI accounts, mint `sk-` keys with their own limits, and point any OpenAI
client at `/v1`.

Comes with a dashboard: usage statistics, per-model breakdown, recent requests,
the model catalog, API-key management - and **real multi-user isolation**, so
several people can share one gateway without seeing each other's keys or traffic.

## Quick start

```bash
git clone https://github.com/lavabyte/deepai-gateway.git
cd deepai-gateway
cp .env.example .env
npm install
npm start
```

That is the whole install. `.env` is optional - every value in it has a working default -
but copying it gives you the settings to edit, and `npm start` loads it for you.

To **update** an existing checkout:

```bash
git pull
npm install
```

`npm install` after a pull is worth running every time: if a dependency changed, this is
what picks it up.

Then open the dashboard:

```
http://<this-host>:8787
```

It listens on **every interface by default** (`HOST=0.0.0.0`), because a gateway is meant
to be reached from other machines. There is no dashboard password: access *is* the DeepAI
account you sign in with.…
