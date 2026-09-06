---
repo: "usehenri/henri"
name: "henri"
description: "The versatile Javascript framework"
readmeQualityOk: true
url: "https://github.com/usehenri/henri"
homepage: "https://usehenri.io"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
topics: ["nodejs", "framework", "react", "react-server-render", "nextjs", "henri", "mongoose", "disk", "vue", "graphql"]
stars: 51
forks: 6
openIssues: 2
closedIssues: 48
watchers: 5
contributors: 2
recentReleases: 0
createdAt: "2016-01-13T17:23:59Z"
lastCommitAt: "2026-09-06T08:02:36Z"
lastReleaseAt: "2018-05-11T13:58:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 56
maintainers: ["reel", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/18c894f3860b79128bc7c80b0ef1bee6bf694e13f6b29022c33fd68e98c61fa2/usehenri/henri"
---

</p>
</a>

# henri

henri is a Rails-like framework for Node.js: server-rendered React, with
controllers and models behind it and no API layer to write. Controllers hand
their data straight to the pages, and the same route answers JSON when a
client asks for it.

Models backed by real ORMs (MongoDB through Mongoose, SQL through Sequelize or
Drizzle, or a zero-config local store), declarative routes with roles and
CRUD, users with sessions and roles, GraphQL, mail, background jobs, workers,
tests on Vitest and hot reload, all driven by one CLI.

## Install

henri needs Node.js 22 or newer.

```bash
pnpm add -g henri        # or: npm install -g henri
henri new my-app
cd my-app
henri server
```

## Documentation

Guides, the CLI reference, models, controllers, routes, views and adapters are
documented at **[usehenri.io](https://usehenri.io)**. henri was revived in 2026
on a current toolchain: if you have an application written for 0.37, read
[usehenri.io/upgrading](https://usehenri.io/upgrading/). Release notes are on
the [GitHub releases](https://github.com/usehenri/henri/releases) page.

## Contributing

See…
