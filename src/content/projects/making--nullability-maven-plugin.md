---
repo: "making/nullability-maven-plugin"
name: "nullability-maven-plugin"
description: "A Maven plugin that configures ErrorProne and NullAway for nullability checking"
readmeQualityOk: true
url: "https://github.com/making/nullability-maven-plugin"
language: "Java"
languages: ["Java"]
languagePcts: [91]
stars: 36
forks: 2
openIssues: 1
closedIssues: 9
watchers: 2
contributors: 3
recentReleases: 2
createdAt: "2026-02-18T02:48:44Z"
lastCommitAt: "2026-08-25T04:09:41Z"
lastReleaseAt: "2026-07-01T10:25:47Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 41
maintainers: ["dependabot[bot]", "making", "ghusta"]
openGraphImageUrl: "https://opengraph.githubassets.com/e17eb8bda0ca5e2de052f6f7c026eb06bbcd4928137d759f329ea5ecfaf97923/making/nullability-maven-plugin"
---

# Nullability Maven Plugin

A Maven plugin that configures [ErrorProne](https://errorprone.info/) and [NullAway](https://github.com/uber/NullAway) for nullability checking, inspired by [spring-gradle-plugins/nullability-plugin](https://github.com/spring-gradle-plugins/nullability-plugin). It replaces the ~40 lines of `maven-compiler-plugin` boilerplate typically required to set up NullAway with a single plugin declaration.

## When to use this plugin

If you are using JSpecify's `@NullMarked` / `@Nullable` annotations and want NullAway to enforce them at compile time, this plugin handles all the configuration automatically:

- Adds ErrorProne and NullAway as annotation processor paths
- Sets the required compiler arguments (`-Xplugin:ErrorProne`, `-XDcompilePolicy=simple`, etc.)
- Adds the JVM module flags needed by ErrorProne (`--add-exports`, `--add-opens`)
- Configures `fork=true` on `maven-compiler-plugin`
- Excludes test sources and generated sources from checking by default

## Usage

Add the plugin to your `pom.xml`. If you are using Maven 3.8.x, you must also declare `maven-compiler-plugin` 3.5+ (see [Requirements](#requirements)):

```xml
<plugin>…
