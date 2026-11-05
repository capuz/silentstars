---
repo: "tako0614/yurucommu-core"
name: "yurucommu-core"
description: "yurucommu ActivityPub server, API SDK"
originalDescription: "yurucommu ActivityPub server, API SDK"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/tako0614/yurucommu-core"
homepage: "https://yurucommu.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["activitypub", "fediverse", "sdk"]
stars: 55
forks: 4
openIssues: 0
closedIssues: 20
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2023-09-08T14:07:53Z"
lastCommitAt: "2026-11-05T14:05:21Z"
lastReleaseAt: "2026-06-23T13:58:35Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 56
maintainers: ["tako0614"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ff1b01484ddf3731164ffa6f3d2196c8baa9adc2093985ade4402dd1c08628b/tako0614/yurucommu-core"
---

# Yurucommu Core

English: [README.en.md](https://github.com/tako0614/yurucommu-core/blob/HEAD/README.en.md)

Yurucommu Core is a **library for the ActivityPub / API / DB / runtime engine** shared by products in the yurucommu family (yurucommu / yurumeet, etc.). By implementing federation, the server API, and the database layer in one place, each product can focus on its UI.

This is not a product repo that can be installed, and it does not include an OpenTofu Capsule (a single app/infrastructure unit imported from a Git URL). Deployable products are in separate repos.

- `yurucommu` — a fullstack product for feeds / stories / profiles. It has `yurucommu.com`, a Worker artifact, and an OpenTofu Capsule
- `yurumeet` — a fullstack product centered on talk. `yurume` is a short client id / abbreviation used for discovery and push registration

## What it can do

- **ActivityPub federation** — follow, post, boost, like, and reply across servers, connecting with communities. Includes HTTP-signature verification, SSRF-protected fetch, and actor/domain blocklists
- **Server API** — provides routes for actors, posts, stories, DMs, communities, media, notifications, and mobile push
-…
