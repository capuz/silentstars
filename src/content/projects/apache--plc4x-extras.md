---
repo: "apache/plc4x-extras"
name: "plc4x-extras"
description: "PLC4X The Industrial IoT adapter"
readmeQualityOk: true
url: "https://github.com/apache/plc4x-extras"
homepage: "https://plc4x.apache.org/"
language: "Go"
languages: ["Go", "Java"]
languagePcts: [48, 48]
topics: ["c", "go", "java", "net", "python"]
stars: 19
forks: 20
openIssues: 5
closedIssues: 7
watchers: 10
contributors: 29
recentReleases: 0
createdAt: "2024-03-24T09:55:37Z"
lastCommitAt: "2026-09-03T08:04:07Z"
lastReleaseAt: "2025-08-27T06:11:31Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 70
maintainers: ["dependabot[bot]", "sruehl", "chrisdutz"]
openGraphImageUrl: "https://opengraph.githubassets.com/b61a02a8fe63f3f7e1bcbb213aea78d58a3af8361051ab3ea121168efa7122b5/apache/plc4x-extras"
---

## Building PLC4X Extras

For building all parts of PLC4X-Extras ensure you're running at least Java 21.
Maven 4.0.0-rc-6 or newer is required to build, so be sure it's installed and available on your system (the bundled Maven-Wrapper takes care of this automatically when using `./mvnw` or `mvnw` instead of the normal `mvn` command).

Run the following command:

    ./mvnw -P with-c,with-go,with-java install

## Licensing

Apache PLC4X is released under the Apache License Version 2.0.
