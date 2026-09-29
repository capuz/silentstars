---
repo: "apache/sling-org-apache-sling-engine"
name: "sling-org-apache-sling-engine"
description: "Apache Sling Engine Implementation"
readmeQualityOk: true
url: "https://github.com/apache/sling-org-apache-sling-engine"
homepage: "https://sling.apache.org/"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["java", "sling"]
stars: 15
forks: 20
openIssues: 0
closedIssues: 0
watchers: 28
contributors: 34
recentReleases: 0
createdAt: "2017-10-18T16:17:16Z"
lastCommitAt: "2026-09-29T10:04:48Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 77
undervaluedScore: 49
maintainers: ["joerghoh", "cziegeler", "aswinad"]
openGraphImageUrl: "https://opengraph.githubassets.com/2cb0461ff7dcae6029bd43496c588c48b0009063abab5a108017f662d64b48de/apache/sling-org-apache-sling-engine"
---

&#32;[](https://ci-builds.apache.org/job/Sling/job/modules/job/sling-org-apache-sling-engine/job/master/)&#32;[](https://ci-builds.apache.org/job/Sling/job/modules/job/sling-org-apache-sling-engine/job/master/test/?width=800&height=600)&#32;[](https://sonarcloud.io/dashboard?id=apache_sling-org-apache-sling-engine)&#32;[](https://sonarcloud.io/dashboard?id=apache_sling-org-apache-sling-engine)&#32;[](https://www.javadoc.io/doc/org.apache.sling/org.apache.sling.engine)&#32;[](https://search.maven.org/#search%7Cga%7C1%7Cg%3A%22org.apache.sling%22%20a%3A%22org.apache.sling.engine%22) [](https://www.apache.org/licenses/LICENSE-2.0)

# Apache Sling Engine Implementation

This module is part of the [Apache Sling](https://sling.apache.org) project and implements the core Sling request processing pipeline.

## Overview

`org.apache.sling.engine` provides the Sling engine bundle that:

- registers the main servlet via OSGi HTTP Whiteboard
- resolves resources and dispatches requests
- manages Sling filter chains and request/response wrapping
- exposes request processor and filter processor metrics via JMX
- supports both `javax.servlet` (legacy) and `jakarta.servlet` through adapter…
