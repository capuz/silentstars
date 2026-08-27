---
repo: "SonarSource/sonar-plugin-api"
name: "sonar-plugin-api"
description: "API to develop plugins for SonarQube (Server, Cloud) and SonarQube for IDE"
readmeQualityOk: true
url: "https://github.com/SonarSource/sonar-plugin-api"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 27
forks: 9
openIssues: 0
closedIssues: 0
watchers: 17
contributors: 72
recentReleases: 0
createdAt: "2022-04-07T09:47:19Z"
lastCommitAt: "2026-08-27T14:09:29Z"
lastReleaseAt: "2022-11-29T17:15:56Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 46
maintainers: ["emma44-m", "OrlovAlexander85", "claire-villard-sonarsource"]
openGraphImageUrl: "https://opengraph.githubassets.com/3dbdeba6d3ff0103149f16af5618f4524d039cb8ff64aef3b1344318bcbae2a3/SonarSource/sonar-plugin-api"
---

# sonar-plugin-api

Java API to develop plugins for SonarQube (Server, Cloud) and SonarQube for IDE.
This component was extracted out of SonarQube and has been released independently since v9.5.

The API is built with JDK 11.

## Developing plugins

See documentation [here](https://docs.sonarqube.org/latest/extend/developing-plugin/) about how to use the `sonar-plugin-api` to develop plugins.

## Dependency

The API was relocated when it was extracted out of SonarQube. Its new coordinates are:

```
org.sonarsource.api.plugin:sonar-plugin-api:<version>
```

You can find it in [maven central](https://mvnrepository.com/artifact/org.sonarsource.api.plugin/sonar-plugin-api).
Also note that the version no longer follows SonarQube Server's versions. The `sonar-plugin-api` is now released separately.

## Changelogs

See the [releases](https://github.com/SonarSource/sonar-plugin-api/releases) for changelogs.

## Deprecation Policy

See the [deprecation policy](https://github.com/SonarSource/sonar-plugin-api/blob/HEAD/docs/deprecation-policy.md).

## Compatibility

Breaking changes to the API happen when the major version changes. As a result, plugins should be compatible with future…
