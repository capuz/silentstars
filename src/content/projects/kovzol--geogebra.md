---
repo: "kovzol/geogebra"
name: "geogebra"
description: "GeoGebra trunk (testing)"
readmeQualityOk: true
url: "https://github.com/kovzol/geogebra"
language: "Java"
languages: ["Java", "JavaScript"]
languagePcts: [52, 25]
stars: 13
forks: 10
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 33
recentReleases: 0
createdAt: "2019-05-25T18:52:14Z"
lastCommitAt: "2026-11-02T17:57:14Z"
lastReleaseAt: "2020-02-28T17:10:15Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 87
undervaluedScore: 73
maintainers: ["Vadgoblin", "kovzol", "MosheHanau"]
openGraphImageUrl: "https://opengraph.githubassets.com/71e8d3ae916f736af85c85260724023c757c1017e5be20a492486c595c1c9a0b/kovzol/geogebra"
---

# Welcome to GeoGebra!

The primary site for [GeoGebra](https://www.geogebra.org)'s source code is
https://dev.geogebra.org/svn/trunk/geogebra/ which
is a read-only Subversion repository. We maintain a copy of it
at https://github.com/geogebra/geogebra.

Please read https://www.geogebra.org/license about GeoGebra's
licensing. A copy of this license should also be found in the file
desktop/src/nonfree/resources/org/geogebra/desktop/_license.txt.

To learn more on development of GeoGebra (including suggested compilation
steps) please visit https://dev.geogebra.org/.

## Running the web version
To start the web version from command line, run

```
./gradlew :web:run
```

This will start a development server on your machine where you can test the app. 
If you need to access the server from other devices, you can specify a binding address

```
./gradlew :web:run -Pgbind=A.B.C.D
```

where `A.B.C.D` is your IP address. 
Then you can access the dev server through `http://A.B.C.D:8888`.
You can also run `./gradlew :web:tasks` to list other options.

## Running the desktop version (Classic 5)
To start the desktop version from command line, run

```
./gradlew :desktop:run
```
You can also…
