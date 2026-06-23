---
repo: "renaissance-benchmarks/renaissance"
name: "renaissance"
description: "The Renaissance Benchmark Suite"
url: "https://github.com/renaissance-benchmarks/renaissance"
homepage: "https://renaissance.dev"
language: "SMT"
languages: ["SMT", "Scala"]
languagePcts: [52, 29]
topics: ["benchmark-suite", "scala", "java", "jvm-performance"]
stars: 345
forks: 82
openIssues: 41
closedIssues: 126
watchers: 23
contributors: 24
recentReleases: 0
createdAt: "2019-03-29T11:39:57Z"
lastCommitAt: "2026-06-23T06:41:41Z"
lastReleaseAt: "2024-11-22T19:49:40Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 79
undervaluedScore: 24
maintainers: ["vhotspur", "dependabot[bot]", "simonis"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3db1da8a5e181348f8558a8cbcd35d069a484ac90f117f5a6783bfd2c8ad0be/renaissance-benchmarks/renaissance"
---

## Renaissance Benchmark Suite

</p>

The Renaissance Benchmark Suite aggregates common modern JVM workloads,
including, but not limited to, Big Data, machine-learning, and functional programming.
The suite is intended to be used to optimize just-in-time compilers, interpreters, GCs,
and for tools such as profilers, debuggers, or static analyzers, and even different hardware.
It is intended to be an open-source, collaborative project,
in which the community can propose and improve benchmark workloads.

### Running the suite

To run the suite, you will need to download a Renaissance Suite JAR
from <https://renaissance.dev/download>.
If you wish to build it yourself, please, consult [CONTRIBUTING.md](CONTRIBUTING.md)
for instructions on building.

To run a Renaissance benchmark, you need to have a JRE version 11 (or later)
installed and execute the following `java` command:

```
$ java -jar 'renaissance-gpl-0.16.1.jar' <benchmarks>
```

In the above command, `<benchmarks>` is the list of benchmarks that you want to run.
You can refer to individual benchmarks, e.g., `scala-kmeans`, or a group of benchmarks,
e.g., `apache-spark`.

The suite generally executes the benchmark's measured…
