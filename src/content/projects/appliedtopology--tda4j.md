---
repo: "appliedtopology/tda4j"
name: "tda4j"
description: "TDA library for the JVM"
readmeQualityOk: true
url: "https://github.com/appliedtopology/tda4j"
homepage: "https://tda4j.appliedtopology.org"
language: "Scala"
languages: ["Scala"]
languagePcts: [84]
topics: ["applied-topology", "persistent-homology", "tda"]
stars: 5
forks: 4
openIssues: 92
closedIssues: 26
watchers: 4
contributors: 6
recentReleases: 4
createdAt: "2017-07-07T19:47:39Z"
lastCommitAt: "2026-10-21T23:36:42Z"
lastReleaseAt: "2026-10-20T19:10:22Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 84
undervaluedScore: 86
maintainers: ["claude", "michiexile", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/398388c9e6c8eb28e663538406bed918d8ff1d5559188c5ce2415200894a92a3/appliedtopology/tda4j"
---

# tda4j

Persistent homology and topological data analysis on the JVM and in JavaScript: from Scala, Java, MATLAB, JavaScript, TypeScript and the command line.

tda4j computes persistent homology of point clouds (Vietoris-Rips, Čech, alpha, witness, Dowker, DTM and sparse Rips
complexes), images (cubical complexes), simplicial sets and nerves of groups, monoids and categories. Every barcode
comes with a representative cycle or cocycle for each bar, over any prime field. It is built for ease of use, for
access from MATLAB and other JVM languages, and as a platform for research: the machinery behind the convenient entry
points is public and meant to be extended. It descends from the libraries of the Computational Topology workgroup at
Stanford University (JavaPlex, JPlex, PLEX).

## Using it

[Installation](https://tda4j.appliedtopology.org/user-guide/installation.html) lists requirements and dependency lines
for every build tool. In short, from sbt (Java 21, Scala 3.9):

```scala
libraryDependencies += "org.appliedtopology" %% "tda4j" % "VERSION"
```

```scala
import scala.language.experimental.modularity
import org.appliedtopology.tda4j.*

val points = Array.tabulate(30)(i =>…
