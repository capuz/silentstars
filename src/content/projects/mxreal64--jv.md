---
repo: "mxreal64/jv"
name: "jv"
description: "a fast, drop-in Java build tool that sits besides Apache Maven and Gradle built in Go as a single binary"
readmeQualityOk: true
url: "https://github.com/mxreal64/jv"
language: "Go"
languages: ["Go"]
languagePcts: [86]
topics: ["golang", "gradle", "java", "maven", "build-automation", "build-tools", "ci-cd", "cli", "compiler", "dependency-management"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-10-22T10:34:55Z"
lastCommitAt: "2026-11-07T16:12:12Z"
lastReleaseAt: "2026-11-06T13:44:00Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 50
maintainers: ["mxreal64", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/01f5f1e00677873d68be672cc96e02a810c6ce7903c3d63a01b2d5db56892f96/mxreal64/jv"
---

One small static binary that resolves, compiles, tests and packages your project &mdash;<br>
  and hands anything it can't reproduce exactly back to the real tool.

```console
$ cd my-project            # any Maven or Gradle project, untouched
$ jv test                  # resolve, compile, run your JUnit tests
$ jv package               # target/my-project-1.0.jar
```

> **Status:** pre-1.0 (release candidates). The core build paths are covered by tests, but try jv on a branch
> before relying on it in CI. See [Known limitations](#known-limitations) and [Roadmap](#roadmap).

## Why jv

- **Drop-in.** It reads the `pom.xml` or Gradle build you already have. No config, no migration, no
  lock-in: delete `jv` and nothing about your project has changed. It shares `~/.m2` with Maven.
- **Never silently different.** When a build uses something jv can't reproduce exactly (plugin executions,
  filtered resources, custom source directories, ...), jv tells you why and runs the real `mvn` or `gradle`
  instead. You get the same result, just not the speed-up.
- **Checked against Maven.** The test suite diffs jv's compile, runtime and test classpaths with
  `mvn dependency:build-classpath` on…
