---
repo: "bloom-housing/bloom"
name: "bloom"
description: "Bloom is Exygy’s affordable housing platform. Bloom's goal is to be a single entry point for affordable housing seekers and a hub for application and listing management for developers."
readmeQualityOk: true
url: "https://github.com/bloom-housing/bloom"
homepage: "https://bloomhousing.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["government", "housing", "open-source"]
stars: 36
forks: 43
openIssues: 548
closedIssues: 2776
watchers: 9
contributors: 49
recentReleases: 0
createdAt: "2019-07-17T06:37:57Z"
lastCommitAt: "2026-07-06T07:03:02Z"
lastReleaseAt: "2021-09-16T17:30:33Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 67
maintainers: ["emilyjablonski", "dependabot[bot]", "KrissDrawing"]
openGraphImageUrl: "https://opengraph.githubassets.com/b325a0d50086697c347a54a3fd749d95ab95858532359b6cc538aae33a44d468/bloom-housing/bloom"
discussionCount: 20
---

# Bloom Affordable Housing Platform

Bloom is [Exygy](https://www.exygy.com/)’s affordable housing platform. Bloom's goal is to be a single entry point for affordable housing seekers and application management for developers. You can read more about the platform on [bloomhousing.com](https://bloomhousing.com/) and it's full functionality [here](https://github.com/bloom-housing/bloom/blob/HEAD/docs/bloom-features.md).

## Overview

        

Bloom consists of a client/server architecture using [Next.js](https://nextjs.org) for the frontend applications and [NestJS](https://nestjs.com), [Prisma](https://www.prisma.io/), and [Postgres](https://www.postgresql.org/) on the backend.

### Structure

Bloom uses a monorepo-style repository containing multiple user-facing applications and backend services. The three main high-level packages are `api`, `sites`, and `shared-helpers`. Additionally, Bloom's UI leverages the in-house packages `@bloom-housing/ui-seeds` and `@bloom-housing/ui-components`.

The `sites` folder contains reference implementations for both the public and partner applications:

---

- `sites/public` is the applicant-facing site available to the general public. It…
