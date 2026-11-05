---
repo: "edin-dal/scair"
name: "scair"
description: "ScaIR - Democratizing Compilers"
readmeQualityOk: true
url: "https://github.com/edin-dal/scair"
homepage: "https://edin-dal.github.io/scair/"
language: "Scala"
languages: ["Scala", "MLIR"]
languagePcts: [56, 43]
stars: 25
forks: 6
openIssues: 6
closedIssues: 32
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2024-06-03T11:38:44Z"
lastCommitAt: "2026-11-05T11:25:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 65
maintainers: ["PapyChacal", "baymaks", "Gabayoyo"]
openGraphImageUrl: "https://opengraph.githubassets.com/7552b31a8c5a61e22fea25f453dab11f351e8d05f9d8e0f59311bf4ce468b670/edin-dal/scair"
---

ScaIR: MLIR inspired Scala Compiler Framework 
===

Please see [Scala Workshop talk](https://2025.workshop.scala-lang.org/details/scala-2025/7/ScaIR-Type-safe-Compiler-Framework-Compatible-with-MLIR) for paper and our talks

## Navigation
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Contributing to the Project](#contributing-to-the-project)
    - [Running](#running)
    - [Testing](#testing)  
    - [Code Formatting](#code-formatting) 

---

## Installation as a dependency

ScaIR is regularly published on [**Maven Central**](https://central.sonatype.com/artifact/io.github.edin-dal/scair-tools_3/overview)

Include in your project via: 

- SBT:
```scala
// To consume -SNAPSHOT versions (recommended)
resolvers += "Maven Central Snapshots" at "https://central.sonatype.com/repository/maven-snapshots"
libraryDependencies += "io.github.edin-dal" % "scair-tools_3" % "<version>"
```
- Mill:
```scala
    // To consume -SNAPSHOT versions (recommended)
    override def repositories = Seq("https://central.sonatype.com/repository/maven-snapshots")
    override def mvnDeps = Seq(
      ...,
      mvn"io.github.edin-dal::scair-tools_3:<version>",
      ...
    )
```…
