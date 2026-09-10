---
repo: "mongodb-js/mongosh"
name: "mongosh"
description: "The MongoDB Shell"
readmeQualityOk: true
url: "https://github.com/mongodb-js/mongosh"
homepage: "https://www.mongodb.com/try/download/shell"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["mongodb", "compass", "shell", "nodejs", "driver", "react", "compass-plugin"]
stars: 401
forks: 93
openIssues: 0
closedIssues: 0
watchers: 18
contributors: 78
recentReleases: 0
createdAt: "2019-10-03T01:13:03Z"
lastCommitAt: "2026-09-10T08:20:14Z"
lastReleaseAt: "2020-06-05T09:29:59Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 89
undervaluedScore: 36
maintainers: ["mongodb-devtools-bot[bot]", "alenakhineika", "ivandevp"]
openGraphImageUrl: "https://opengraph.githubassets.com/2678d327ab310c5e583d88b2a6b8155e1ccf0d19c8c260903da94410e3eb4777/mongodb-js/mongosh"
---

# mongosh

[Evergreen Waterfall CI](https://evergreen.mongodb.com/waterfall/mongosh)

## The MongoDB Shell

This repository is a monorepo for all the various components in the MongoDB Shell across
all environments (REPL, Browser, Compass, etc).

For our official documentation, please visit [MongoDB Docs
page](https://mongodb.com/docs/mongodb-shell).

MongoDB Shell works with MongoDB servers >= 4.0.

## Installation
You can get the release tarball from our [Downloads
Page](https://www.mongodb.com/try/download/shell). We currently maintain MongoDB
Shell on three different platforms - Windows (zip), MacOS (zip) and Linux (tgz, deb and rpm).
Once downloaded, you will have to extract the binary and add it to your PATH
variable. For detailed instructions for each of our supported platforms, please visit
[installation documentation](https://www.mongodb.com/docs/mongodb-shell/install#mdb-shell-install).

Alternatively:
- Run `npx mongosh` to run mongosh without a full installation. This is
  easiest if you already have npm installed.
- Run `download_latest.sh` to download a `mongosh` binary. You can use
  the following script:
```sh
curl -fsSL…
