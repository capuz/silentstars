---
repo: "m0ver/bible-online"
name: "bible-online"
description: "Open the source code of ingod.today project which is based on tinystruct framework."
readmeQualityOk: true
url: "https://github.com/m0ver/bible-online"
homepage: "https://www.ingod.today"
language: "Java"
languages: ["Java", "JavaScript"]
languagePcts: [61, 26]
stars: 5
forks: 1
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2013-02-19T02:03:25Z"
lastCommitAt: "2026-09-27T09:29:14Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 70
undervaluedScore: 73
maintainers: ["m0ver"]
openGraphImageUrl: "https://opengraph.githubassets.com/3a9de257bb3a1da0ce6737fa26f698e8edb16f91d1cc745535fb831c9c40a6f6/m0ver/bible-online"
---

Introduction
---
An open source project of bible online service which bases on struct2.0 framework.

MySQL Server Installation
---
docker run -p 3306:3306 --name mysql-5.7 -v /Users/James/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=password -d mysql:5.7

Run it in a servlet container
---
```tcsh
# bin/dispatcher start --import org.tinystruct.system.TomcatServer
```
Learn more information by clicking <a href="https://github.com/tinystruct/tinystruct2.0">here</a>.
