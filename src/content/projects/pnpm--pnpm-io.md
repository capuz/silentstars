---
repo: "pnpm/pnpm.io"
name: "pnpm.io"
description: "pnpm's website"
readmeQualityOk: true
url: "https://github.com/pnpm/pnpm.io"
homepage: "https://pnpm.io"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
stars: 312
forks: 690
openIssues: 67
closedIssues: 68
watchers: 11
contributors: 354
recentReleases: 0
createdAt: "2017-01-23T20:41:09Z"
lastCommitAt: "2026-09-05T07:48:59Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 87
undervaluedScore: 44
maintainers: ["zkochan", "github-actions[bot]", "sacrosanctic"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b24fb323c3602480fb7c2371ca476f845267d90c22bfbe36e60220968578848/pnpm/pnpm.io"
---

# pnpm.io

## Testing locally

```
pnpm install
pnpm start
```

## How to publish

Push to the default branch, the website will be deployed automatically by the
[Deploy workflow](https://github.com/pnpm/pnpm.io/blob/HEAD/.github/workflows/deploy.yml).

Docusaurus builds one locale after another, and this site has 13 of them, so the
workflow builds each locale in its own job instead. The translations are
downloaded from Crowdin once, by a job of its own that shares them with the
rest, and each locale job runs `docusaurus build --locale <locale>`. That
download is reused for an hour, because Crowdin rate limits how often it will
export a project and the default branch is deployed more often than that. The
resulting trees are stitched back together by `scripts/assemble-site.mjs` and
shipped to Vercel with `vercel deploy --prebuilt`, as a single deployment.

Because of that, Vercel's own git integration is turned off (see
`git.deploymentEnabled` in [vercel.json](https://github.com/pnpm/pnpm.io/blob/HEAD/vercel.json)) and the workflow needs
these secrets in the `deploy` environment: `VERCEL_TOKEN`, `VERCEL_ORG_ID`,
`VERCEL_PROJECT_ID`, and `CROWDIN_PERSONAL_TOKEN`.

Pull requests get…
