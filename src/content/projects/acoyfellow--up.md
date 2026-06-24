---
repo: "acoyfellow/up"
name: "up"
description: "Put your company's private web online, on your Cloudflare account."
url: "https://github.com/acoyfellow/up"
homepage: "https://up.coey.dev"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [64, 23]
topics: ["agent-experience", "cloudflare", "cloudflare-access", "cloudflare-workers", "durable-objects", "internal-tools", "r2", "static-sites", "oauth", "private-by-default"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-06-12T14:48:54Z"
lastCommitAt: "2026-06-24T00:21:06Z"
lastReleaseAt: "2026-06-17T11:48:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 48
maintainers: ["acoyfellow"]
openGraphImageUrl: "https://opengraph.githubassets.com/de2220f830e066bfa0ea49350b9886fa1d16f1202436a14d30deab4dfb2814f0/acoyfellow/up"
discussionCount: 0
---

# Up

**Deploy a dynamic Cloudflare app before signup. Keep it if it works.**

Up gives coding agents a Worker, Static Assets, and platform bindings before anyone creates an account, opens OAuth, or copies an API token.

```text
app folder → Worker + assets + bindings → public URL → keep or disappear
```

Up is an independent, user-land experiment. It is not an official Cloudflare product and is not supported by Cloudflare.

## Deploy first

A dynamic Up app is an ordinary folder:

```text
my-app/
├── index.html       browser UI
├── app.js
├── _worker.js       dynamic Worker entry point
└── up.json          platform bindings
```

```sh
bunx github:acoyfellow/up deploy ./my-app
```

```text
Deploying dynamic app with 2 assets without a Cloudflare account
Bindings: CACHE, DB, ROOMS…

Live now

https://up-a1b2c3d4e5.example-account.workers.dev

Expires in about 60 minutes unless claimed.
Public: anyone with this URL can open it.

Keep it: run `up claim --open` to open the ownership flow.
Up stores the sensitive link locally and does not print it.
```

No signup, login, permanent token, repository, or Up server is involved. Interactive use asks you to accept Cloudflare’s Terms and…
