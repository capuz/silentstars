---
repo: "oracle/graalvm-reachability-metadata"
name: "graalvm-reachability-metadata"
description: "Repository which contains community-driven collection of GraalVM reachability metadata for open-source libraries."
readmeQualityOk: true
url: "https://github.com/oracle/graalvm-reachability-metadata"
language: "Java"
languages: ["Java"]
languagePcts: [78]
stars: 485
forks: 136
openIssues: 533
closedIssues: 5468
watchers: 7
contributors: 1538
recentReleases: 0
createdAt: "2022-06-30T13:29:16Z"
lastCommitAt: "2026-10-29T21:26:01Z"
lastReleaseAt: "2023-01-30T18:12:08Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 37
maintainers: ["graalvmbot", "vjovanov", "kimeta"]
openGraphImageUrl: "https://opengraph.githubassets.com/cea8b7167d58f517c7da6e12eb945e0b74296bac119be59a2daf9658427daedf/oracle/graalvm-reachability-metadata"
---

# GraalVM Reachability Metadata Repository <picture><img alt="" src="docs/assets/readme/title-robot-facing-user.png" height="58" align="middle"></picture>

This repository contains [reachability metadata](https://www.graalvm.org/latest/reference-manual/native-image/metadata/) for JVM libraries and frameworks, enabling them to work out of the box with [GraalVM Native Image](https://www.graalvm.org/latest/reference-manual/native-image/).

The [GraalVM Gradle Plugin](https://graalvm.github.io/native-build-tools/latest/gradle-plugin.html) and [GraalVM Maven Plugin](https://graalvm.github.io/native-build-tools/latest/maven-plugin.html) automatically use the [reachability metadata](https://www.graalvm.org/latest/reference-manual/native-image/metadata/) from this repository, so most projects do not need to configure it directly.

> [!TIP]
> **Missing metadata for a library you depend on?** Run the [Native Build Tools](https://graalvm.github.io/native-build-tools/latest/) task in your project to detect the gap and automatically open an issue here.
>
> **Gradle**
>
> ```bash
> ./gradlew listLibrariesMissingMetadata -PcreateIssues=true
> ```
>
> **Maven**
>
> ```bash
> ./mvnw…
