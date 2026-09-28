---
repo: "Dark-Matter-Labs/circulaw"
name: "circulaw"
description: "Unlocking regulatory innovation for the circular economy transition."
readmeQualityOk: true
url: "https://github.com/Dark-Matter-Labs/circulaw"
homepage: "https://www.circulaw.nl/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["nextjs", "circular-economy", "legal", "react", "sanity"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2021-10-26T22:49:28Z"
lastCommitAt: "2026-09-28T10:06:53Z"
lastReleaseAt: "2023-02-07T18:54:13Z"
status: "thriving"
tags: []
healthScore: 86
undervaluedScore: 70
maintainers: ["gurdenbatra", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/86a885d972092a0caf458211aad0cda23104fdd96e2137847a84ed7c37b3915f/Dark-Matter-Labs/circulaw"
discussionCount: 0
---

# CircuLaw

Unlocking regulatory innovation for the circular economy transition

This is a [Next.js](https://nextjs.org/) project hosted on [Vercel](https://vercel.com) and data is created and hosted using [Sanity](https://www.sanity.io/).

## Status

CircuLaw is currently in beta stage. 

## Getting Started

You can get started by installing the dependencies by running:

```
yarn
```

Then run and watch the dev environment with:

```
yarn dev:staging
```

For cleaning up the code run:

```
yarn clean
```

For running Sanity CMS locally along with dev build:

```
yarn cms:staging
```

## Vercel Overview

Vercel picks up and builds `main` and `staging` branches automatically, please make a pull request to deploy any changes.

## Sanity Overview

Navigate to /studio folder and run `sanity deploy` to deploy changes to CMS system. This will only work if you have the needed authentication token.

## Algolia search indexing

Search indexes are kept in sync by a Sanity webhook, and can be rebuilt with a manual reindex. Both routes need a secret. See [docs/algolia-reindex.md](https://github.com/Dark-Matter-Labs/circulaw/blob/HEAD/docs/algolia-reindex.md).

## Languages & tools

###…
