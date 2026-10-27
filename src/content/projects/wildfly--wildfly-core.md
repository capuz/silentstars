---
repo: "wildfly/wildfly-core"
name: "wildfly-core"
description: "The core runtime that is used by the WildFly application server"
readmeQualityOk: true
url: "https://github.com/wildfly/wildfly-core"
language: "Java"
languages: ["Java"]
languagePcts: [99]
topics: ["hacktoberfest"]
stars: 201
forks: 486
openIssues: 0
closedIssues: 0
watchers: 28
contributors: 250
recentReleases: 0
createdAt: "2014-07-01T16:33:34Z"
lastCommitAt: "2026-10-27T09:17:11Z"
lastReleaseAt: "2018-07-18T11:59:41Z"
status: "thriving"
tags: ["legacy_hero", "funded", "fork_magnet"]
healthScore: 89
undervaluedScore: 44
maintainers: ["yersan", "darranl", "bstansberry"]
openGraphImageUrl: "https://opengraph.githubassets.com/63bfd6293afea3c01f8e7d204c11b5b2fedbf22118da6b7aa3e7c1c01de64ec5/wildfly/wildfly-core"
fundingLinks: ["GITHUB:https://github.com/commonhaus", "OPEN_COLLECTIVE:https://opencollective.com/commonhaus-foundation"]
---

WildFly Core
============
https://wildfly.org

This project provides the core runtime that is used by the WildFly application server. This includes:

* Modular class loading.
* Unified management, including domain mode.
* Basic deployment architecture.
* CLI for management.

Building
-------------------

Prerequisites:

* JDK 17 or newer - check `java -version`
* Maven 3.9 or newer - check `mvn -v` (alternatively, use the Maven Wrapper described below)

To build with your own Maven installation:

> mvn install

Alternatively, you can use the Maven Wrapper script that downloads and installs (if necessary) the required Maven version to
`~/.m2/wrapper` and runs it from there. On Linux, run

> ./mvnw install

On Windows

> mvnw install

Starting and Stopping WildFly
------------------------------------------
Change to the bin directory after a successful build:

> $ cd build/target/wildfly-core-\[version\]/bin

Start the server in domain mode:

> $ ./domain.sh

Start the server in standalone mode:

> $ ./standalone.sh

To stop the server, press Ctrl + C, or use the admin console:

> $ ./jboss-cli.sh --connect command=:shutdown

Note that there is not very much that you can do with the…
