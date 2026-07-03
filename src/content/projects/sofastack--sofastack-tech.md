---
repo: "sofastack/sofastack.tech"
name: "sofastack.tech"
description: "Source for the SOFAStack website https://www.sofastack.tech"
url: "https://github.com/sofastack/sofastack.tech"
language: "SCSS"
languages: ["SCSS", "JavaScript", "HTML"]
languagePcts: [31, 27, 23]
topics: ["website", "hugo-site", "sofastack"]
stars: 110
forks: 191
openIssues: 19
closedIssues: 31
watchers: 15
contributors: 92
recentReleases: 0
createdAt: "2019-06-20T02:25:11Z"
lastCommitAt: "2026-07-03T06:24:01Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 30
maintainers: ["ujjboy", "tangtang-0521"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/192834147/545a1380-a33e-11e9-948c-8e971d5377ac"
---

# sofastack.tech

Source for the SOFAStack website <https://www.sofastack.tech>.

## Editing and building

You can use the local environment or docker to build and serve the site. We recommend you to use docker.

### Local

Before you begin, you should install the follow components:

- [node v8.9.4+](https://nodejs.org/en/)
- [npm 6.10.0+](https://www.npmjs.com/get-npm)
- [hugo v0.55.5 extended](https://github.com/gohugoio/hugo/releases).

```bash
./scripts/install-dependency.sh
./scripts/build-site.sh
hugo server
```

Run the site locally with `hugo server`, you will see the site running on <http://localhost:1313>.

### Docker

You need to install docker 18.09.2+ first.

```bash
make install
make build
make serve
```

Edit markdown files, you will see the pages changing in real time.

Read the [wiki](https://github.com/sofastack/sofastack.tech/wiki) to see how to contribute to the SOFAStack website.
