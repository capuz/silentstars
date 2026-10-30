---
repo: "flathub-infra/website"
name: "website"
description: "Monorepo with website and API"
readmeQualityOk: true
url: "https://github.com/flathub-infra/website"
homepage: "https://flathub.org"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [62, 37]
topics: ["flathub", "flatpak", "hacktoberfest", "python", "react", "website"]
stars: 373
forks: 135
openIssues: 35
closedIssues: 743
watchers: 10
contributors: 269
recentReleases: 0
createdAt: "2022-03-25T09:00:32Z"
lastCommitAt: "2026-10-30T10:23:11Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 41
maintainers: ["barthalion", "razzeee", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2b163de655a7ba70bd71d7f640c0ac74d04d3629a6c3cbe7c46b13a28b5f5fd/flathub-infra/website"
---

# flathub.org

This is the source code for the website, both backend and frontend. That's running on https://flathub.org.

## Code contribution

First of all thanks for considering contributing to this project!

Pull requests are welcome. Please, create an issue first explaining what you want to do and how.

If you want to contribute translations, please check out the instructions below.

### Overview

This overview is supposed to give you a quick grasp, of what we have and how it works. There are subtle differences between local/prod - this is an approximation.

```mermaid
block-beta
    columns 3

    block:external:1
        columns 1

        dl.flathub.org:1

        hub.flathub.org/stats:1
    end

    block:group2
        columns 3

        fastly:3

        down4<[" "]>(down):3

        nginx:3

        down1<[" "]>(down):3

        frontend:3

        down2<[" "]>(down):3

        hub.flathub.org/stats-->backend
        dl.flathub.org-->backend worker backend_node

        down3<[" "]>(down):3

        db1[("postgres")] db2[("redis")] db3[("meilisearch")]

    end

    block:external2:1
        columns 1

        smtp:1

        backend_node-->smtp
    end

```

###…
