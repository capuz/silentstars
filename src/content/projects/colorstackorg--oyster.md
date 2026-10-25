---
repo: "colorstackorg/oyster"
name: "oyster"
description: "Monorepo that houses ColorStack's core product software."
readmeQualityOk: true
url: "https://github.com/colorstackorg/oyster"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 327
forks: 209
openIssues: 7
closedIssues: 172
watchers: 6
contributors: 108
recentReleases: 0
createdAt: "2024-03-27T16:43:07Z"
lastCommitAt: "2026-10-25T22:11:50Z"
lastReleaseAt: "2024-05-24T17:47:03Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 89
undervaluedScore: 29
maintainers: ["shanoysinc", "queenellie873", "NyranMoodie"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/778399384/dcf74cea-1979-4d98-b3c0-e0bff0188d15"
---

## Applications

- [**Member Profile**](https://github.com/colorstackorg/oyster/blob/HEAD/apps/member-profile/package.json) - Serves as the home
  for a ColorStack member, allowing them to manage their information, find and
  connect with other members, as well as events and gamification.
- [**Admin Dashboard**](https://github.com/colorstackorg/oyster/blob/HEAD/apps/admin-dashboard/package.json) - An internal
  dashboard that the ColorStack team uses to manage important workflows like
  application review.
- [**API**](https://github.com/colorstackorg/oyster/blob/HEAD/apps/api/package.json) - Handles all background jobs as well as
  any webhook integrations that we have with external services.

## Understanding the Codebase

### Important Tools & Technologies

Here is a list of important tools and technologies that power the ColorStack
codebase:

- [BullMQ](https://docs.bullmq.io) to queue and process jobs asynchronously (in
  the background).
- [Kysely](https://kysely.dev) to query our SQL database in a type-safe way.
- [Node.js](https://nodejs.org/en/about)...because yes!
- [PostgreSQL](https://www.postgresql.org/docs/15/index.html) to store all of
  our data.
-…
