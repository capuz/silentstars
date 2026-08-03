---
repo: "Ericsson/ecchronos"
name: "ecchronos"
description: "Ericsson distributed repair scheduler for Apache Cassandra"
readmeQualityOk: true
url: "https://github.com/Ericsson/ecchronos"
language: "Java"
languages: ["Java"]
languagePcts: [89]
topics: ["apache-cassandra", "cassandra", "cassandra-cluster", "cassandra-database", "cassandra-repairs", "repair", "repair-management", "repair-schedules", "repair-scheduling", "repairs"]
stars: 37
forks: 44
openIssues: 18
closedIssues: 468
watchers: 11
contributors: 27
recentReleases: 0
createdAt: "2018-10-10T11:49:02Z"
lastCommitAt: "2026-08-03T06:43:27Z"
lastReleaseAt: "2022-03-30T11:20:48Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 65
maintainers: ["tommystendahl", "dependabot[bot]", "VictorCavichioli"]
openGraphImageUrl: "https://opengraph.githubassets.com/c3f46ee1ac64f76c6eadfef308c66f4d5e9b72a12cc4ef32b7920a463a49c4c2/Ericsson/ecchronos"
discussionCount: 7
---

# ecChronos

ecChronos is a decentralized scheduling framework primarily focused on performing automatic repairs in Apache Cassandra.

The aim of ecChronos is to provide a simple yet effective scheduler that helps in maintaining a cassandra cluster. It is primarily used to run repairs but can be extended to run all manner of maintenance work as well.

* Automate the process of keeping cassandra repaired.
* Split a table repair job into many smaller subrange repairs
* Expose statistics on how well repair is keeping up with the churn of data
* Flexible through many different plug-in points to customize to your specific use case

ecChronos is a helper application that runs next to each instance of Apache Cassandra. It handles maintenance operations for the local node.
The repair tasks make sure that each node runs repair once every interval.
The interval is configurable but defaults to seven days.

More details on the underlying infrastructure can be found in [ARCHITECTURE.md](https://github.com/Ericsson/ecchronos/blob/HEAD/docs/ARCHITECTURE.md).

More information on the REST interface of ecChronos is described in…
