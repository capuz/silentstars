---
repo: "kantan-scala/kantan-csv"
name: "kantan-csv"
description: "fork from https://github.com/nrinaudo/kantan.csv"
readmeQualityOk: true
url: "https://github.com/kantan-scala/kantan-csv"
homepage: "https://kantan-scala.github.io/csv/"
language: "Scala"
languages: ["Scala"]
languagePcts: [100]
topics: ["csv", "scala"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 13
recentReleases: 0
createdAt: "2025-07-09T21:32:57Z"
lastCommitAt: "2026-07-08T05:15:35Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 71
maintainers: ["kantan-bot[bot]", "dependabot[bot]", "xuwei-k"]
openGraphImageUrl: "https://opengraph.githubassets.com/484edacef33b4a71aad566816884dcd927c2e47be308e381b95d17e567374191/kantan-scala/kantan-csv"
discussionCount: 0
---

# kantan.csv

CSV is an unfortunate part of life. This attempts to alleviate the pain somewhat by letting developers treat CSV data
as a simple iterator.

As much as possible, kantan.csv attempts to present a purely functional and safe interface to users. I've not hesitated
to violate these principles *internally* however, when it afforded better performances. This approach appears to be
[somewhat successful](https://kantan-scala.github.io/csv/benchmarks.html).

Documentation and tutorials are available on the [companion site](https://kantan-scala.github.io/csv/), but for those
looking for a few quick examples:

```scala
import java.io.File
import kantan.csv._         // All kantan.csv types.
import kantan.csv.ops._     // Enriches types with useful methods.
import kantan.csv.generic._ // Automatic derivation of codecs.

// Reading from a file: returns an iterator-like structure on (Int, Int)
new File("points.csv").asCsvReader[(Int, Int)](https://github.com/kantan-scala/kantan-csv/blob/HEAD/rfc)

// "Complex" types derivation: the second column is either an int, or a string that might be empty.
new File("dodgy.csv").asCsvReader[(Int, Either[Int, Option[String]])](rfc)

case class…
