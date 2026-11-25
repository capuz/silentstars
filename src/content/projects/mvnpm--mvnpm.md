---
repo: "mvnpm/mvnpm"
name: "mvnpm"
description: "Use npm like any other Maven/Gradle dependency..."
readmeQualityOk: true
url: "https://github.com/mvnpm/mvnpm"
homepage: "https://mvnpm.org/"
language: "Java"
languages: ["Java"]
languagePcts: [83]
topics: ["gradle", "java", "maven", "npm"]
stars: 61
forks: 9
openIssues: 5
closedIssues: 53
watchers: 1
contributors: 10
recentReleases: 0
createdAt: "2022-10-11T05:44:31Z"
lastCommitAt: "2026-11-25T03:15:57Z"
lastReleaseAt: "2024-11-13T00:19:00Z"
status: "thriving"
tags: ["hidden_gem", "community_hub"]
healthScore: 89
undervaluedScore: 54
maintainers: ["phillip-kruger", "ia3andy", "lucPfa"]
openGraphImageUrl: "https://opengraph.githubassets.com/ce47ca2018a0ce2e146833e977c51cde3cee837da04656dc33aad2d676a414ba/mvnpm/mvnpm"
discussionCount: 38823
---

## Use NPM packages as Maven/Gradle dependencies

**mvnpm** lets you consume [NPM Registry](https://www.npmjs.com/) packages directly from your Java build tool.

**Maven**

```xml
<dependency>
    <groupId>org.mvnpm</groupId>
    <artifactId>{package-name}</artifactId>
    <version>{package-version}</version>
    <scope>{runtime/provided}</scope>
</dependency>
```

**Gradle**

```groovy
implementation 'org.mvnpm:{package-name}:{package-version}'
// or compileOnly for bundled usage
```

For scoped packages, use `org.mvnpm.at.{namespace}` as groupId
(e.g. `@hotwired/stimulus` becomes `org.mvnpm.at.hotwired:stimulus`).

## Ways to consume

- Bundled and served with the [Quarkus Web Bundler](https://docs.quarkiverse.io/quarkus-web-bundler/dev/index.html) (scope `provided`)
- Served directly using [importmaps](https://github.com/mvnpm/importmap) (scope `runtime`)
- Bundled with [esbuild-java](https://github.com/mvnpm/esbuild-java)
- As a drop-in [WebJars](https://www.webjars.org/) replacement

## Syncing a missing package

Most popular packages are already on Maven Central. Check the "Maven Central" badge on the [Browse page](https://mvnpm.org/) to verify.
