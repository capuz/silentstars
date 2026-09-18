---
repo: "ICIJ/datashare-client"
name: "datashare-client"
description: "Frontend interface for Datashare, a self-hosted search engine for documents."
readmeQualityOk: true
url: "https://github.com/ICIJ/datashare-client"
homepage: "https://datashare.icij.org"
language: "JavaScript"
languages: ["JavaScript", "Vue"]
languagePcts: [63, 35]
stars: 38
forks: 18
openIssues: 0
closedIssues: 0
watchers: 9
contributors: 16
recentReleases: 0
createdAt: "2018-02-15T15:36:04Z"
lastCommitAt: "2026-09-18T08:27:30Z"
lastReleaseAt: "2020-03-04T09:38:14Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 89
undervaluedScore: 57
maintainers: ["caro3801", "pirhoo", "mvanzalu"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad24b52bf9b538dc3f80ecdd2ba7105302040eb9e7210c99756f5ff37473870d/ICIJ/datashare-client"
---

</a>
<br>
Web Client for Datashare
</p>

| | Status |
| --: | :-- |
| **CI checks** | [](https://github.com/ICIJ/datashare-client/actions/workflows/main.yml) |
| **Latest version** | [](https://github.com/ICIJ/datashare-client/releases/latest) |
| **Release date** | [](https://github.com/ICIJ/datashare-client/releases/latest) |
| **Open issues** | [](https://github.com/ICIJ/datashare/issues/) |
| **Documentation** | [](https://icij.github.io/datashare-client/) |

</div>

# Installation guide

## Datashare **Client**

You need [Yarn](https://yarnpkg.com/lang/en/docs/install/) installed on your machine (tested with version 1.22) and Node.js 20 or above (tested with version 20.19.2).

* Install dependencies:

```
yarn
```

* Serve with hot reload at localhost:9009

```
yarn serve
```

## Datashare **backend**

Datashare backend allows to index, find names and provide file preview or download. It must be run alongside the client for manual testing with the benefits of hot reloading with `yarn serve`.

To run the backend you must:

1. Get and install Datashare from [datashare.icij.org](https://datashare.icij.org/) ;
1. Refer to the [User Guide](https://icij.gitbook.io/datashare/) if…
