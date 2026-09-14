---
repo: "dasch-swiss/dsp-app"
name: "dsp-app"
description: "DaSCH application suite for the DaSCH Service Platform"
readmeQualityOk: true
url: "https://github.com/dasch-swiss/dsp-app"
homepage: "https://docs.dasch.swiss/latest/DSP-APP/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["data-management-platform", "web-application"]
stars: 12
forks: 5
openIssues: 1
closedIssues: 178
watchers: 4
contributors: 27
recentReleases: 0
createdAt: "2018-11-09T14:39:42Z"
lastCommitAt: "2026-09-14T09:12:40Z"
lastReleaseAt: "2019-11-29T11:28:22Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 76
maintainers: ["renovate[bot]", "mpro7", "domsteinbach"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb21727014c8e9845e39fff1fb40fea9689a1aef7e01c904d74f159bd4653891/dasch-swiss/dsp-app"
---

# DaSCH Applications and Libraries Monorepo

DSP-APP is the user interface for the [DaSCH Service Platform](https://dasch.swiss) — a software framework for storing, sharing, and working with primary resources and data in the humanities. It connects to [DSP-API](https://github.com/dasch-swiss/dsp-api) via [DSP-JS](https://github.com/dasch-swiss/dsp-app/blob/HEAD/libs/dsp-js/) and is released under the [GNU Affero General Public License](http://www.gnu.org/licenses/agpl-3.0.en.html).

This monorepo is built on:

- **Nx** — See [package.json](https://github.com/dasch-swiss/dsp-app/blob/main/package.json) for current version
- **Angular** — See [package.json](https://github.com/dasch-swiss/dsp-app/blob/main/package.json) for current version
- **Node.js** — Version managed via [.nvmrc](https://github.com/dasch-swiss/dsp-app/blob/HEAD/.nvmrc)

## Quick Start

Use the NodeJs version supported by the installed Angular version ([compatibility table](https://angular.dev/reference/versions)), or the version pinned in [.nvmrc](https://github.com/dasch-swiss/dsp-app/blob/HEAD/.nvmrc).

```shell
npm install
npm run start-local   # app runs at http://localhost:4200
```

Requires a running…
