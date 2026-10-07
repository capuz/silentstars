---
repo: "cloudant-labs/clouseau"
name: "clouseau"
description: "Expose Lucene features as an erlang-like node"
readmeQualityOk: true
url: "https://github.com/cloudant-labs/clouseau"
language: "Scala"
languages: ["Scala"]
languagePcts: [83]
stars: 67
forks: 37
openIssues: 7
closedIssues: 17
watchers: 26
contributors: 15
recentReleases: 0
createdAt: "2015-07-28T15:26:14Z"
lastCommitAt: "2026-10-07T10:31:01Z"
lastReleaseAt: "2024-02-19T17:14:54Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 50
maintainers: ["pgj", "mojito317", "ibm-mend-app[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9b26ca0852d0b04603c68b3c2039ce97a48ecde0b4afe59348f029bf0f57fa8/cloudant-labs/clouseau"
---

# clouseau

Expose Lucene features to CouchDB via Erlang RPC.

## Build status

## Clouseau 3.x

Version `3.x` replaces the foundation of [`clouseau`](https://github.com/cloudant-labs/clouseau/tree/master) with
a [`ZIO`](https://github.com/zio/zio) as an asynchronous scheduler. This improves the stability and performance,
enables Clouseau to run on modern JVMs and brings all non-Lucene dependencies up-to-date.

## Upgrading from 2.x

Clouseau 3.x is intended to be a drop-in replacement for 2.x in that it remains compatible with existing Clouseau 2.x indexes.
However, there are some notable changes to the deployment:

 * Java 21 is required.
 * CouchDB 3.5.0 is required.
 * `clouseau.ini` is replaced by [`clouseau.conf`](https://github.com/cloudant-labs/clouseau/blob/HEAD/clouseau.conf).

## Running the application

Each release ships a JAR file that could be run as follows.
Note that this just an example, the actual file name may differ.
There is more guidance available below on the important configuration
options.

```
java \
  -server \
  -Xmx2G \
  -Dsun.net.inetaddr.ttl=30 \
  -Dsun.net.inetaddr.negative.ttl=30 \
  -XX:+ExitOnOutOfMemoryError \
  -XX:+UseG1GC \…
