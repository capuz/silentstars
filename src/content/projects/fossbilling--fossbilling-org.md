---
repo: "FOSSBilling/fossbilling.org"
name: "fossbilling.org"
description: "Official website for FOSSBilling."
readmeQualityOk: true
url: "https://github.com/FOSSBilling/fossbilling.org"
homepage: "https://fossbilling.org"
language: "Astro"
languages: ["Astro", "TypeScript", "CSS"]
languagePcts: [49, 30, 21]
topics: ["website", "astro", "billing", "cloudflare-workers", "foss", "hosting", "open-source"]
stars: 16
forks: 34
openIssues: 1
closedIssues: 19
watchers: 5
contributors: 24
recentReleases: 0
createdAt: "2022-05-18T10:24:45Z"
lastCommitAt: "2026-11-22T11:30:17Z"
status: "thriving"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 98
undervaluedScore: 80
maintainers: ["renovate[bot]", "admdly", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c3d12a26c46844ef908a03a825b0f0d47ccc0c5b4da16013513550638cf0b061/FOSSBilling/fossbilling.org"
fundingLinks: ["GITHUB:https://github.com/FOSSBilling", "OPEN_COLLECTIVE:https://opencollective.com/FOSSBilling"]
---

# fossbilling.org

FOSSBilling's website. Built with Astro, deployed to Cloudflare Workers, and available at [fossbilling.org](https://fossbilling.org).

Documentation is hosted separately at [docs.fossbilling.org](https://docs.fossbilling.org).

## Installation

```
$ npm ci
```

Use `npm install` instead if you are not working from a clean install.

## Local Development

```
$ npm run dev
```

This command starts a local development server at `http://localhost:4321`. Most changes are reflected live without having to restart the server.

## Scripts

- `npm run dev`: local development server
- `npm run build`: production build
- `npm run preview`: preview the production build locally
- `npm run check`: TypeScript & Astro diagnostics (CI uses this)
- `npm test`: run the release metadata tests (CI uses this)
- `npm run format`: format source with Prettier
- `npm run format:check`: verify formatting without writing
- `npm run cf-deploy`: deploy to Cloudflare Workers and promote to production traffic with the Cloudflare CLI (`cf auth login`)
- `npm run cf-preview`: deploy a Worker Preview for the current branch with `cf previews deploy` (`cf auth login`)
