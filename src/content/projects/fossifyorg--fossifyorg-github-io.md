---
repo: "FossifyOrg/fossifyorg.github.io"
name: "fossifyorg.github.io"
description: "The projects' website"
readmeQualityOk: true
url: "https://github.com/FossifyOrg/fossifyorg.github.io"
homepage: "https://www.fossify.org/"
language: "Astro"
languages: ["Astro", "TypeScript", "CSS"]
languagePcts: [46, 28, 20]
topics: ["android", "foss", "kotlin", "open-source"]
stars: 102
forks: 16
openIssues: 0
closedIssues: 0
watchers: 5
contributors: 6
recentReleases: 0
createdAt: "2023-12-04T15:34:13Z"
lastCommitAt: "2026-09-25T09:03:14Z"
status: "thriving"
tags: ["funded"]
healthScore: 83
undervaluedScore: 38
maintainers: ["dependabot[bot]", "naveensingh", "fossifybot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2cf11e6cda0db5d1960cc79fb818a6cc6a68077c0662af35dd6f1a1432a28df1/FossifyOrg/fossifyorg.github.io"
fundingLinks: ["GITHUB:https://github.com/naveensingh", "PATREON:https://patreon.com/naveen3singh", "LIBERAPAY:https://liberapay.com/naveensingh", "OPEN_COLLECTIVE:https://opencollective.com/fossify", "CUSTOM:https://paypal.me/naveen3singh", "CUSTOM:https://fossify.org/donate"]
---

# Fossify website

Source code for [www.fossify.org](https://www.fossify.org).

## Local development

Node.js 24 is used in GitHub Actions.

```sh
npm ci
npm run dev
```

Run release check before merging:

```sh
npm run check
```

This formats-checks the repository, builds the static site, writes the legacy
`.html` privacy-policy aliases used by app-store listings, and audits the built
routes, links, images, release data, sitemap, and JavaScript output.

## Site data

- `src/data/apps.ts` contains the published app catalog, copy, links, and policy details.
- `src/data/release-metadata.json` is a checked-in snapshot of GitHub releases and tags.
- `src/data/site.ts` contains shared site links and the privacy-policy route list.

The weekly `Refresh release metadata` workflow opens or updates a pull request
when GitHub release data changes.

The site works without JavaScript, including navigation, mobile menus, and FAQs.
