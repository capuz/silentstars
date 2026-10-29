---
repo: "InfluxCommunity/influxdb3-java"
name: "influxdb3-java"
description: "The Java Client that provides a simple and convenient way to interact with InfluxDB 3."
readmeQualityOk: true
url: "https://github.com/InfluxCommunity/influxdb3-java"
homepage: "https://InfluxCommunity.github.io/influxdb3-java/apidocs/com/influxdb/v3/client/package-summary.html"
language: "Java"
languages: ["Java"]
languagePcts: [98]
stars: 43
forks: 10
openIssues: 0
closedIssues: 34
watchers: 5
contributors: 10
recentReleases: 0
createdAt: "2023-05-18T08:22:03Z"
lastCommitAt: "2026-10-29T10:20:24Z"
lastReleaseAt: "2024-06-24T08:38:28Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 59
maintainers: ["dependabot[bot]", "bednar", "NguyenHoangSon96"]
openGraphImageUrl: "https://opengraph.githubassets.com/66c2e8ca16a91b90882eb083e1b75d9d02cd77cf370714e3f9f8591f4e5893d7/InfluxCommunity/influxdb3-java"
---

# InfluxDB 3 Java Client

The Java client that provides an easy and convenient way to interact with InfluxDB 3.
This package supports both writing data to InfluxDB and querying data using the FlightSQL client,
which allows you to execute SQL queries against InfluxDB IOx.

We offer this [Getting Started: InfluxDB 3.0 Java Client Library](https://www.youtube.com/watch?v=EFnG7rUDvR4) video for learning more about the library.

> :warning: This client requires Java 17 and is compatible up to and including Java 25.

## Installation

> :warning: Some JDK internals must be exposed by adding `--add-opens=java.base/java.nio=ALL-UNNAMED` to your JVM arguments.

If you are using JDK 25 or later, you also need to add `--sun-misc-unsafe-memory-access=allow`.

Add the latest version of the client to your project:

### Maven dependency

```xml
<dependency>
    <groupId>com.influxdb</groupId>
    <artifactId>influxdb3-java</artifactId>
    <version>1.11.0</version>
</dependency>
```

### Or when using Gradle

```groovy
dependencies {
    implementation "com.influxdb:influxdb3-java:1.11.0"
}
```

### Packaging executable JARs

The query API uses gRPC and Apache Arrow Flight. If you package your…
