---
repo: "F43nd1r/Acrarium"
name: "Acrarium"
description: "A Backend for ACRA written in Kotlin using Spring Boot, Vaadin and MySQL"
readmeQualityOk: true
url: "https://github.com/F43nd1r/Acrarium"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [98]
stars: 230
forks: 58
openIssues: 10
closedIssues: 200
watchers: 5
contributors: 8
recentReleases: 0
createdAt: "2017-05-17T15:39:23Z"
lastCommitAt: "2026-08-29T22:00:56Z"
lastReleaseAt: "2019-06-09T23:34:53Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 90
undervaluedScore: 41
maintainers: ["renovate[bot]", "F43nd1r", "NerdySouth"]
openGraphImageUrl: "https://opengraph.githubassets.com/78fe208c6e0573b4f447b46d626866a3d30eb2bfe40e974c0bdc28b1707c6fc0/F43nd1r/Acrarium"
discussionCount: 8
---

<h1 align=center>
</h1>

A Backend for [ACRA](https://github.com/ACRA/acra) written in Kotlin using Spring Boot, Vaadin and MySQL

# Setup

See [Wiki Setup guide](https://github.com/F43nd1r/acra-backend/wiki/Setup-guide)

# Screenshots

###### Listing reports

###### Statistics

###### Proguard and Export Support

###### Report Summary and Attachment Support

###### Full Report content

###### Dark Theme

# Development

## Running locally

```shell
./gradlew bootRun
```

## Building release

### Jar

```shell
./gradlew bootJar -x test -Pvaadin.productionMode=true
```

### Docker Image

```shell
./gradlew bootJar -x test -Pvaadin.productionMode=true
docker build -t f43nd1r/acrarium:git acrarium
```

# License

All source code in this repository is licensed under the Apache License 2.0 (see [LICENSE](https://github.com/F43nd1r/Acrarium/blob/HEAD/LICENSE))

# Credits

Thanks to

- [Mirza Zulfan](https://github.com/mirzazulfan) for creating the logo.
- [aptly-io](https://github.com/aptly-io) (Dutch), [Federico Iosue](https://github.com/federicoiosue) (Italian), [Astarivi](https://github.com/astarivi) (
  Spanish), [iisimpler](https://github.com/iisimpler) (Chinese) for contributing to…
