---
repo: "dasch-swiss/dsp-app"
name: "dsp-app"
description: "DaSCH application suite for the DaSCH Service Platform"
readmeQualityOk: true
url: "https://github.com/dasch-swiss/dsp-app"
homepage: "https://docs.dasch.swiss/latest/DSP-APP/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["data-management-platform", "web-application"]
stars: 12
forks: 5
openIssues: 1
closedIssues: 178
watchers: 4
contributors: 28
recentReleases: 0
createdAt: "2018-11-09T14:39:42Z"
lastCommitAt: "2026-10-23T09:33:25Z"
lastReleaseAt: "2019-11-29T11:28:22Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 76
maintainers: ["renovate[bot]", "derschnee68", "domsteinbach"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e00e86e5af7f7321c11acd3f69e34283e50f51e59abe42588e89e377c4eb1cd/dasch-swiss/dsp-app"
---

# DaSCH Applications and Libraries Monorepo

DSP-APP is the user interface for the [DaSCH Service Platform](https://dasch.swiss) — a software framework for storing, sharing, and working with primary resources and data in the humanities. It connects to [DSP-API](https://github.com/dasch-swiss/dsp-api) via [DSP-JS](https://github.com/dasch-swiss/dsp-app/blob/HEAD/libs/dsp-js/) and is released under the [GNU Affero General Public License](http://www.gnu.org/licenses/agpl-3.0.en.html).

This monorepo is built on:

- **Nx** — See [package.json](https://github.com/dasch-swiss/dsp-app/blob/main/package.json) for current version
- **Angular** — See [package.json](https://github.com/dasch-swiss/dsp-app/blob/main/package.json) for current version
- **Node.js** — Version managed via [.nvmrc](https://github.com/dasch-swiss/dsp-app/blob/HEAD/.nvmrc)

## Quick Start

Activate the Node.js version pinned in [.nvmrc](https://github.com/dasch-swiss/dsp-app/blob/HEAD/.nvmrc) — for example `nvm use`, `fnm use`, or `n auto` — before running `npm install`.

```shell
npm install
npm run start-local   # app runs at http://localhost:4200
```

Requires a running…
